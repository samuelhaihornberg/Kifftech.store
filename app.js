/* ===== KiffTech — Catalogue (démonstration, données vérifiées) ===== */
import { CATALOGUE } from './data/catalogue.js';
import { CONTACT } from './data/config.js';

// ---------- RAYONS (Catégories de produits) ----------
const RAYONS = [
  { id: 'smartphones', label: 'Smartphones', icon: '📱', color: '#00d4ff', desc: 'Smartphones et accessoires' },
  { id: 'montres', label: 'Montres connectées', icon: '⌚', color: '#00ff88', desc: 'Smartwatches et trackers fitness' },
  { id: 'audio', label: 'Audio', icon: '🎧', color: '#ff2d95', desc: 'Écouteurs, casques et enceintes' },
  { id: 'maison', label: 'Maison connectée', icon: '🏠', color: '#ff6b00', desc: 'Objets connectés pour la maison' },
  { id: 'securite', label: 'Sécurité', icon: '🔒', color: '#b84dff', desc: 'Caméras, alarmes et serrures connectées' },
  { id: 'gaming', label: 'Gaming', icon: '🎮', color: '#ff6b00', desc: 'Consoles, consoles portables et périphériques gaming' },
  { id: 'robots', label: 'Robots', icon: '🤖', color: '#00ffc8', desc: 'Robots aspirateurs, assistants et robots à pattes' },
  { id: 'drones', label: 'Drones', icon: '🚁', color: '#ffd23f', desc: 'Drones et caméras d’action ou de poche' },
  { id: 'informatique', label: 'Informatique', icon: '💻', color: '#0066ff', desc: 'Ordinateurs, tablettes, claviers, souris et hubs' },
  { id: 'energie', label: 'Énergie', icon: '🔋', color: '#00ff88', desc: 'Chargeurs, batteries et énergie portable' },
  { id: 'auto', label: 'Auto', icon: '🚗', color: '#ff6b00', desc: 'Gadgets et accessoires auto' },
  { id: 'vr', label: 'Réalité Virtuelle', icon: '🥽', color: '#b84dff', desc: 'Casques VR et lunettes AR' }
];

const RAYONS_MAP = Object.fromEntries(RAYONS.map(r => [r.id, r]));

// ---------- PRODUITS (données vérifiées : data/catalogue.js) ----------
const ANNEE_MIN = 2020;
const ANNEE_MAX = 2026;

function normalizeProduct(raw) {
  const prix = raw.prix || null;
  return {
    ...raw,
    title: `${raw.marque} ${raw.modele}`,
    brand: raw.marque,
    category: raw.rayon,
    price: prix ? prix.montant : null,
    images: (raw.medias?.images || []).map(m => m.fichier),
    isNew: raw.annee === 2026,
    incomplete: (raw.manquants || []).length > 0
  };
}

const DEMO_PRODUCTS = CATALOGUE.produits
  .filter(p => p.annee >= ANNEE_MIN && p.annee <= ANNEE_MAX && RAYONS_MAP[p.rayon])
  .map(normalizeProduct);

const FALLBACK_PRODUCTS = DEMO_PRODUCTS;

// ---------- UTILITIES ----------
function sanitizeHTML(str){return String(str ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function formatPrice(val,currency='€'){return val.toLocaleString('fr-FR',{minimumFractionDigits:2,maximumFractionDigits:2})+' '+currency;}
function debounce(fn,ms){let t;return(...args)=>{clearTimeout(t);t=setTimeout(()=>fn(...args),ms);};}
function whatsappHTML(){
  const label = 'Contacter via WhatsApp Business';
  return CONTACT.whatsappLienUrl
    ? `<a class="btn-secondary btn-whatsapp" href="${sanitizeHTML(CONTACT.whatsappLienUrl)}" target="_blank" rel="noopener">${label}</a>`
    : `<button type="button" class="btn-secondary btn-whatsapp" disabled>${label}</button>
        <p class="wa-note">Numéro professionnel : <strong>${sanitizeHTML(CONTACT.whatsappBusiness)}</strong></p>`;
}

// ---------- STATE ----------
const STORE_KEYS = { cart: 'kifftech-cart-v1', subscription: 'kifftech-subscription-v1' };

function readJSON(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch (e) {
    return fallback;
  }
}

function writeJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    /* stockage indisponible : l'état reste en mémoire */
  }
}

const state = {
  products: DEMO_PRODUCTS,
  productsMap: new Map(),
  filteredProducts: [],
  currentRayon: null,
  currentCategory: '',
  currentSupplier: '',
  currentSearch: '',
  visibleCount: 24,
  currentProduct: null,
  currentTab: 'catalog',
  subscription: readJSON(STORE_KEYS.subscription, null),
  sortBy: 'featured',
  importSources: [],
  schedules: [],
  mappings: {globalDiscount:10,targetMargin:35,autoPriceUpdate:true,verifyRefPrice:true},
  cart: readJSON(STORE_KEYS.cart, [])
    .filter(i => i && i.productId && i.quantity > 0 && DEMO_PRODUCTS.some(p => p.id === i.productId))
    .map(i => ({ productId: i.productId, variant: i.variant || '', quantity: i.quantity })),
  variantChoice: {},
  imageIndex: 0,
  toastQueue: [],
};

// ---------- PANIER (persistant, démonstration) ----------
const cartManager = {
  getItems() {
    return state.cart;
  },
  save() {
    writeJSON(STORE_KEYS.cart, state.cart);
    window.dispatchEvent(new Event('cart:change'));
  },
  add(productId, variant = '', prix = null, qty = 1) {
    const item = state.cart.find(i => i.productId === productId && i.variant === variant);
    if (item) item.quantity = Math.min(item.quantity + qty, 99);
    else state.cart.push({ productId, variant, prix, quantity: qty });
    this.save();
  },
  updateQuantity(index, quantity) {
    if (quantity <= 0) return this.remove(index);
    const item = state.cart[index];
    if (item) {
      item.quantity = Math.min(quantity, 99);
      this.save();
    }
  },
  remove(index) {
    state.cart.splice(index, 1);
    this.save();
  },
  calculateTotals(productsMap) {
    let totalItems = 0, uniqueItems = 0, subtotal = 0;
    for (const item of state.cart) {
      const p = productsMap.get(item.productId);
      if (!p) continue;
      totalItems += item.quantity;
      uniqueItems += 1;
      subtotal += (item.prix ?? p.price ?? 0) * item.quantity;
    }
    subtotal = Math.round(subtotal * 100) / 100;
    return { totalItems, uniqueItems, subtotal, shipping: null, finalTotal: subtotal, details: [] };
  }
};

// ---------- SOURCES DE CATALOGUE ----------
// Aucune source réelle connectée : le catalogue de démonstration est utilisé.
function getCachedProducts() { return null; }
function setCachedProducts() {}
const productAgent = {
  async syncAllProducts() {
    throw new Error('aucune source de catalogue connectée (démonstration)');
  }
};

// ---------- MAIN CLASS ----------
class KiffTech{
  constructor(){
    this.tabs = ['catalog', 'subscriptions', 'bilan', 'import', 'settings'];
    this.tabLabels = {catalog:'Catalogue', subscriptions:'Abonnements', bilan:'Bilan', import:'Import', settings:'Réglages'};
    this.tabIcons = {
      catalog:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/><line x1="4" y1="6" x2="4" y2="18"/><line x1="20" y1="6" x2="20" y2="18"/></svg>'
    };

    this.productsGrid = document.getElementById('productsGrid');
    this.loadMore = document.getElementById('loadMore');
    this.categoryFilter = document.getElementById('categoryFilter');
    this.supplierFilter = document.getElementById('supplierFilter');
    this.searchInput = document.getElementById('searchInput');
    this.productDetail = document.getElementById('productDetail');
    this.cartCount = document.getElementById('cartCount');
    this.modal = document.getElementById('productModal');
    this.modalBody = document.getElementById('modalBody');
    this.toastContainer = document.getElementById('toastContainer');
    this.splashBar = document.getElementById('splashBar');
    this.splashText = document.getElementById('splashText');
    this.mainTabs = document.getElementById('mainTabs');
    this.bottomTabs = document.getElementById('bottomTabs');
    this.addSourceBtn = document.getElementById('addSourceBtn');
    this.addScheduleBtn = document.getElementById('addScheduleBtn');
    this.exportCSV = document.getElementById('exportCSV');
    this.exportJSON = document.getElementById('exportJSON');
    this.importCSV = document.getElementById('importCSV');
    this.csvImportInput = document.getElementById('csvImportInput');
    this.noveltiesSection = document.getElementById('noveltiesSection');
    this.noveltiesGrid = document.getElementById('noveltiesGrid');

    this.currentRayon = null;
    this.currentRayonProducts = [];
    this.rayonSort = 'featured';
    this.rayonBrandFilter = '';

    this.init();
  }

  init(){
    this.setProgress(10,'Initialisation…');
    this.buildTabs();
    this.bindEvents();
    this.populateFilters();
    this.applyFilters();
    this.initBioParticles();
    this.registerSW();
    this.setupInstallPrompt();
    this.bindCartEvents();

    this.loadProducts();

    if(document.readyState==='complete') this.onLoaded();
    else window.addEventListener('load',()=>this.onLoaded());
  }

  addToCart(productId) {
    const p = state.productsMap.get(productId) || state.products.find(x => x.id === productId);
    if (!p) return;
    const sel = this.selectedVariant(p);
    if (sel.prix === null) {
      this.showToast('Prix public officiel à confirmer : ajout impossible', 'error');
      return;
    }
    if (!sel.disponible) {
      this.showToast('Variante non disponible : contacter via WhatsApp Business', 'error');
      return;
    }
    cartManager.add(productId, sel.label, sel.prix, 1);
    this.showToast(`${p.title} ajouté au panier (démonstration)`);
  }

  selectedVariant(p) {
    const choice = state.variantChoice[p.id] || [];
    const labels = [];
    let prix = p.price;
    let disponible = true;
    let lien = null;
    let lienManquant = false;
    let lienDefini = false;
    (p.variantes || []).forEach((groupe, g) => {
      const option = groupe.options[choice[g] ?? 0];
      if (!option) return;
      labels.push(option.libelle);
      if (option.prix != null) prix = option.prix;
      if (option.dispo === false) disponible = false;
      if ('lienOfficiel' in option) {
        lienDefini = true;
        if (option.lienOfficiel === null) lienManquant = true;
        else if (option.lienOfficiel && option.lienOfficiel.url && !lien) lien = option.lienOfficiel;
      }
    });
    const lienOfficiel = lienManquant ? null : lien;
    return { label: labels.join(' · '), prix, disponible, lienOfficiel, lienManquant, lienDefini };
  }

  exportCatalog(format) {
    const products = state.products || [];
    let content;
    let type;
    let name;
    if (format === 'json') {
      content = JSON.stringify(products, null, 2);
      type = 'application/json';
      name = 'kifftech-catalogue.json';
    } else {
      const cols = ['id', 'title', 'brand', 'category', 'annee', 'price', 'reference'];
      const cell = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
      content = [cols.join(';'), ...products.map(p => cols.map(c => cell(p[c])).join(';'))].join('\n');
      type = 'text/csv;charset=utf-8';
      name = 'kifftech-catalogue.csv';
    }
    const url = URL.createObjectURL(new Blob([content], { type }));
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    this.showToast(`Catalogue exporté (${products.length} produits de démonstration)`);
  }

  handleCSVImport(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const lines = String(reader.result || '').split(/\r?\n/).filter(l => l.trim());
      const rows = Math.max(0, lines.length - 1);
      this.showToast(`${rows} ligne(s) lue(s) — démonstration : rien n'est ajouté au catalogue`, rows ? 'success' : 'error');
    };
    reader.onerror = () => this.showToast('Lecture du fichier impossible', 'error');
    reader.readAsText(file);
    e.target.value = '';
  }

  subscribe(tier) {
    const names = { basic: 'KiffTech Basic', tresor: 'KiffTech Trésor' };
    if (!names[tier]) return;
    state.subscription = { tier, since: new Date().toISOString() };
    writeJSON(STORE_KEYS.subscription, state.subscription);
    this.renderSubscription();
    this.showToast(`${names[tier]} activé (démonstration : aucun paiement)`);
  }

  cancelSubscription() {
    state.subscription = null;
    writeJSON(STORE_KEYS.subscription, null);
    this.renderSubscription();
    this.showToast('Abonnement annulé');
  }

  renderSubscription() {
    const label = document.getElementById('currentSub');
    const actions = document.getElementById('subActions');
    if (!label || !actions) return;
    if (!state.subscription) {
      label.textContent = 'Aucun abonnement actif';
      actions.innerHTML = '';
      return;
    }
    const name = state.subscription.tier === 'tresor' ? 'KiffTech Trésor' : 'KiffTech Basic';
    label.textContent = `${name} — actif (démonstration)`;
    actions.innerHTML = '<button type="button" class="btn-secondary" id="cancelSubBtn">Annuler l’abonnement</button>';
    document.getElementById('cancelSubBtn').addEventListener('click', () => this.cancelSubscription());
  }

  async loadProducts() {
    this.setProgress(30, 'Chargement catalogue…');
    
    const cached = getCachedProducts();
    if (cached) {
      state.products = cached;
      this.buildProductsMap();
      this.setProgress(80, 'Catalogue chargé (cache)');
      this.applyFilters();
      return;
    }

    this.setProgress(50, 'Synchronisation…');
    try {
      const products = await productAgent.syncAllProducts();
      state.products = products;
      this.buildProductsMap();
      setCachedProducts(products);
      this.setProgress(80, 'Catalogue synchronisé');
      this.applyFilters();
    } catch (err) {
      console.warn('[KiffTech] Erreur sync, fallback:', err.message);
      state.products = FALLBACK_PRODUCTS;
      this.buildProductsMap();
      this.applyFilters();
    }
    
    this.setProgress(100, 'Prêt');
  }

  buildProductsMap() {
    state.productsMap = new Map();
    state.products.forEach(p => state.productsMap.set(p.id, p));
  }

  onLoaded(){
    this.animateProgress(100,'Prêt',()=>{this.hideSplash();});
  }

  setProgress(pct,text){this.splashBar.style.width=pct+'%';this.splashText.textContent=text;}
  animateProgress(target,text,cb){let cur=parseInt(this.splashBar.style.width)||0;const step=()=>{if(cur<target){cur=Math.min(target,cur+3);this.setProgress(cur,text);requestAnimationFrame(()=>setTimeout(step,20));}else if(cb)cb();};step();}
  hideSplash(){document.getElementById('splash').classList.add('hidden');}

  buildTabs(){
    const tabsHTML=this.tabs.map((t,i)=>`<button class="main-tab" role="tab" aria-selected="${i===0}" data-tab="${t}">${this.tabLabels[t]}</button>`).join('');
    this.mainTabs.innerHTML=tabsHTML;
    this.bottomTabs.innerHTML=tabsHTML;
    [this.mainTabs,this.bottomTabs].forEach(nav=>nav.querySelectorAll('.main-tab').forEach(btn=>btn.addEventListener('click',()=>this.switchTab(btn.dataset.tab))));
    this.switchTab(this.tabs[0]);
  }

  switchTab(tab){
    state.currentTab=tab;
    if(tab==='cart') this.renderCartPanel();
    document.querySelectorAll('.panel').forEach(p=>p.hidden=true);
    document.getElementById(`panel-${tab}`).hidden=false;
    document.querySelectorAll('[role="tab"]').forEach(btn=>{btn.setAttribute('aria-selected',btn.dataset.tab===tab);});
  }

  populateFilters(){
    this.categoryFilter.innerHTML = '<option value="">Tous les rayons</option>' + RAYONS.map(r=>`<option value="${r.id}">${r.label}</option>`).join('');
    this.supplierFilter.innerHTML = '<option value="">Tous fournisseurs</option>';
  }

  applyFilters=debounce(()=>{
    state.currentCategory=this.categoryFilter.value;
    state.currentSupplier=this.supplierFilter.value;
    state.currentSearch=(this.searchInput?.value || '').toLowerCase();
    state.visibleCount=24;

    let baseProducts = state.products;
    
    if(this.currentRayon){
      baseProducts = baseProducts.filter(p => p.category === this.currentRayon);
    } else if(state.currentCategory){
      baseProducts = baseProducts.filter(p => p.category === state.currentCategory);
    }
    
    if(this.rayonBrandFilter) baseProducts = baseProducts.filter(p => p.brand === this.rayonBrandFilter);
    if(state.currentSupplier) baseProducts = baseProducts.filter(p => p.supplierName === state.currentSupplier);
    if(state.currentSearch) baseProducts = baseProducts.filter(p => p.title.toLowerCase().includes(state.currentSearch) || p.description.toLowerCase().includes(state.currentSearch) || p.brand.toLowerCase().includes(state.currentSearch));

    state.filteredProducts = baseProducts;
    
    if(this.currentRayon){
      this.currentRayonProducts = baseProducts;
      this.sortRayonProducts();
      baseProducts = this.currentRayonProducts;
    }
    
    state.visibleCount = 24;
    this.renderProducts();
  },150);

  renderProducts(){
    const grid = this.productsGrid;
    
    if(this.currentRayon){
      const toShow = this.currentRayonProducts.slice(0, state.visibleCount);
      grid.innerHTML = toShow.map(p => this.catalogProductHTML(p)).join('');
      this.renderNovelties([]);
    } else {
      grid.innerHTML = RAYONS.map(r => this.rayonCardHTML(r)).join('');
      this.bindRayonCards();
      this.renderNovelties(state.products.filter(p => p.isNew));
    }
    
    this.loadMore.hidden = state.visibleCount >= state.filteredProducts.length;

    this.bindProductCards(grid);
  }

  bindProductCards(container){
    container.querySelectorAll('.catalog-product').forEach(card=>{
      card.addEventListener('click',(e)=>{
        if(e.target.closest('a')) return;
        this.openProduct(card.dataset.id);
      });
    });
  }

  renderNovelties(list){
    if(!this.noveltiesSection || !this.noveltiesGrid) return;
    this.noveltiesSection.hidden = list.length === 0;
    this.noveltiesGrid.innerHTML = list.map(p => this.noveltyCardHTML(p)).join('');
    this.bindProductCards(this.noveltiesGrid);
  }

  noveltyCardHTML(p){
    const names = (p.accessoires || []).map(a => a.nom);
    const access = names.length
      ? `<div class="novelty-access"><span class="novelty-access-label">Accessoires compatibles</span><span>${names.map(sanitizeHTML).join(' · ')}</span></div>`
      : `<div class="novelty-access"><span class="novelty-access-label">Accessoires compatibles</span><span>Information à confirmer</span></div>`;
    return this.catalogProductHTML(p, access);
  }

  rayonCardHTML(r){
    const count = state.products.filter(p => p.category === r.id).length;
    const hasProducts = count > 0;
    return `
      <article class="rayon-card" data-rayon="${r.id}" style="--rayon-color:${r.color};" ${!hasProducts ? 'data-empty="true"' : ''}>
        <div class="rayon-icon" style="background:${r.color}20;color:${r.color};">${r.icon}</div>
        <h3 class="rayon-label">${r.label}</h3>
        <p class="rayon-desc">${r.desc}</p>
        <div class="rayon-meta">
          <span class="rayon-count">${count} produit${count>1?'s':''}</span>
          ${!hasProducts ? '<span class="rayon-empty">Bientôt disponible</span>' : ''}
        </div>
        <button class="rayon-btn" type="button" aria-label="Voir ${r.label}">Explorer le rayon</button>
      </article>
    `;
  }

  bindRayonCards(){
    this.productsGrid.querySelectorAll('.rayon-card').forEach(card=>{
      card.addEventListener('click',()=>this.openRayon(card.dataset.rayon));
    });
  }

  openRayon(rayonId){
    this.currentRayon = rayonId;
    this.currentRayonProducts = state.products.filter(p => p.category === rayonId);
    this.applyFilters();
    this.showRayonHeader(rayonId);
  }

  showRayonHeader(rayonId){
    const rayon = RAYONS_MAP[rayonId];
    if(!rayon) return;
    this.searchInput = null;
    
    const header = this.productsGrid.parentElement.querySelector('.panel-header');
    if(header){
      header.innerHTML = `
        <div class="rayon-header" style="--rayon-color:${rayon.color};">
          <button class="btn-back" onclick="window.keffTech.closeRayon()" aria-label="Retour au catalogue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>CATALOGUES</span>
          </button>
          <div class="rayon-header-info">
            <span class="rayon-header-icon" style="background:${rayon.color}20;color:${rayon.color};">${rayon.icon}</span>
            <div>
              <h2>${rayon.label}</h2>
              <p>${rayon.desc}</p>
            </div>
          </div>
          <div class="rayon-header-actions">
            <select id="rayonSort" onchange="window.keffTech.setRayonSort(this.value)" style="padding:.4rem .75rem;font-size:.75rem;background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--fg);min-width:140px;">
              <option value="featured">Sélection</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="newest">Nouveautés</option>
            </select>
            <select id="rayonBrandFilter" onchange="window.keffTech.setRayonBrandFilter(this.value)" style="padding:.4rem .75rem;font-size:.75rem;background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--fg);min-width:140px;">
              <option value="">Toutes marques</option>
              ${[...new Set(state.products.filter(p => p.category === this.currentRayon).map(p => p.brand))].sort().map(b=>`<option value="${sanitizeHTML(b)}">${sanitizeHTML(b)}</option>`).join('')}
            </select>
          </div>
        `;
    }
  }

  closeRayon(){
    this.currentRayon = null;
    this.currentRayonProducts = [];
    this.applyFilters();
    const header = this.productsGrid.parentElement.querySelector('.panel-header');
    if(header){
      header.innerHTML = `
        <h2>CATALOGUES</h2>
        <div class="filter-bar">
          <input type="search" id="searchInput" placeholder="Rechercher produits..." aria-label="Recherche">
        </div>
      `;
      this.searchInput = document.getElementById('searchInput');
      this.searchInput.addEventListener('input',this.applyFilters);
      this.populateFilters();
      this.renderProducts();
    }
  }

  setRayonSort(value){
    this.rayonSort = value;
    this.sortRayonProducts();
    this.renderProducts();
  }

  setRayonBrandFilter(value){
    this.rayonBrandFilter = value;
    this.applyFilters();
  }

  sortRayonProducts(){
    if(!this.currentRayon) return;
    switch(this.rayonSort){
      case 'price-asc': this.currentRayonProducts.sort((a,b)=>(a.price ?? Number.MAX_SAFE_INTEGER)-(b.price ?? Number.MAX_SAFE_INTEGER)); break;
      case 'price-desc': this.currentRayonProducts.sort((a,b)=>(b.price ?? -1)-(a.price ?? -1)); break;
      case 'newest': this.currentRayonProducts.sort((a,b)=>(b.annee-a.annee)||String(b.dateSortie||'').localeCompare(String(a.dateSortie||''))); break;
      default: break;
    }
  }

  applyFilters=debounce(()=>{
    state.currentCategory=this.categoryFilter.value;
    state.currentSupplier=this.supplierFilter.value;
    state.currentSearch=(this.searchInput?.value || '').toLowerCase();
    state.visibleCount=24;

    let baseProducts = state.products;
    
    if(this.currentRayon){
      baseProducts = baseProducts.filter(p => p.category === this.currentRayon);
    } else if(state.currentCategory){
      baseProducts = baseProducts.filter(p => p.category === state.currentCategory);
    }
    
    if(this.rayonBrandFilter) baseProducts = baseProducts.filter(p => p.brand === this.rayonBrandFilter);
    if(state.currentSupplier) baseProducts = baseProducts.filter(p => p.supplierName === state.currentSupplier);
    if(state.currentSearch) baseProducts = baseProducts.filter(p => p.title.toLowerCase().includes(state.currentSearch) || p.description.toLowerCase().includes(state.currentSearch) || p.brand.toLowerCase().includes(state.currentSearch));

    state.filteredProducts = baseProducts;
    
    if(this.currentRayon){
      this.currentRayonProducts = baseProducts;
      this.sortRayonProducts();
      baseProducts = this.currentRayonProducts;
    }
    
    state.visibleCount = 24;
    this.renderProducts();
  },150);

  catalogProductHTML(p, extra = ''){
    const color = RAYONS_MAP[p.category]?.color || '#00ffc8';
    const brandColor = this.getBrandColor(p.brand);
    const img = p.images[0];
    return `
      <article class="catalog-product" data-id="${sanitizeHTML(p.id)}" style="--rayon-color:${color};">
        <div class="product-thumb${img ? '' : ' product-thumb--empty'}"${img ? ` style="background-image:url('${sanitizeHTML(img)}')"` : ''} aria-hidden="true">
          ${p.isNew ? '<span class="product-badge badge-new">Nouveauté 2026</span>' : ''}
          ${p.incomplete ? '<span class="product-badge badge-info">Fiche incomplète</span>' : ''}
          ${img ? '' : '<span class="thumb-missing">Image à confirmer</span>'}
        </div>
        <div class="product-info">
          <div class="product-meta">
            <span class="product-brand" style="background:${brandColor}20;color:${brandColor};border-color:${brandColor}40;">${sanitizeHTML(p.brand)}</span>
            <span class="product-category">${sanitizeHTML(RAYONS_MAP[p.category]?.label || p.category)}</span>
            <span class="product-year">${p.annee}</span>
          </div>
          <h3 class="product-title">${sanitizeHTML(p.title)}</h3>
          <div class="product-price-row">
            <span class="product-price">${p.price !== null ? formatPrice(p.price) : 'Prix à confirmer'}</span>
            <span class="product-price-note">Prix public officiel (France)</span>
          </div>
          ${extra}
          <div class="product-actions">
            ${p.ficheFabricant ? `<a href="${sanitizeHTML(p.ficheFabricant)}" target="_blank" rel="noopener" class="btn-catalog">Fiche fabricant</a>` : ''}
            <button type="button" class="btn-catalog secondary">Détails</button>
          </div>
        </div>
      </article>`;
  }

  getBrandColor(brand){
    const colors = {
      'Samsung': '#0066ff', 'Xiaomi': '#ff6b00', 'Apple': '#888', 'Google': '#4285f4',
      'Sony': '#0066ff', 'Bose': '#b84dff', 'Sennheiser': '#0066ff', 'JBL': '#ff6b00',
      'Anker': '#00d4ff', 'Nothing': '#888', 'Sennheiser': '#0066ff', 'Jabra': '#00ffc8',
      'Garmin': '#00ff88', 'Garmin': '#00ff88', 'Amazfit': '#ff6b00', 'Huawei': '#ff2d95',
      'Philips Hue': '#00d4ff', 'Aqara': '#00ff88', 'Sonoff': '#ff6b00', 'Shelly': '#b84dff',
      'TP-Link': '#0066ff', 'Meross': '#00d4ff', 'IKEA': '#0066ff',
      'Arlo': '#00d4ff', 'Ring': '#ff6b00', 'Eufy': '#00ff88', 'Reolink': '#b84dff',
      'Logitech': '#0066ff', 'Razer': '#00ff88', 'SteelSeries': '#ff6b00', 'Corsair': '#ffd23f',
      'iRobot': '#00d4ff', 'Roborock': '#00ff88', 'Ecovacs': '#ff6b00', 'Dreame': '#b84dff',
      'DJI': '#0066ff', 'Autel': '#b84dff', 'BetaFPV': '#ff6b00',
      'Keychron': '#00d4ff', 'Razer': '#00ff88', 'CalDigit': '#0066ff', 'Satechi': '#00d4ff',
      'Anker': '#00d4ff', 'Baseus': '#ff6b00', 'UGREEN': '#00ff88', 'EcoFlow': '#0066ff',
      'Jackery': '#ff6b00', 'Bluetti': '#ffd23f', 'Nitecore': '#b84dff',
      '70mai': '#00d4ff', 'Nextbase': '#0066ff', 'Vantrue': '#ff6b00',
      'Meta': '#0066ff', 'Apple': '#888', 'Pico': '#ff6b00', 'XREAL': '#00d4ff'
    };
    return colors[brand] || '#00ffc8';
  }

  loadMoreProducts(){
    state.visibleCount += 24;
    this.renderProducts();
  }

  openProduct(id){
    state.currentProduct = state.products.find(p => p.id === id);
    if(state.currentProduct){
      state.imageIndex = 0;
      this.renderProductDetail();
      this.switchTab('product');
      this.productDetail.scrollTop = 0;
    }
  }

  formatDate(iso){
    if(!iso) return 'date à confirmer';
    return new Date(`${iso}T00:00:00`).toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'});
  }

  sourceLink(url){
    return url ? `<a href="${sanitizeHTML(url)}" target="_blank" rel="noopener">source</a>` : '';
  }

  renderProductDetail(){
    if(!state.currentProduct){this.productDetail.innerHTML='<p class="empty">Aucun produit sélectionné</p>';return;}
    const p = state.currentProduct;
    const rayon = RAYONS_MAP[p.category];
    const color = rayon?.color || '#00ffc8';
    const brandColor = this.getBrandColor(p.brand);

    this.productDetail.innerHTML = `
      <div class="detail-header" style="--rayon-color:${color};">
        <div class="detail-gallery">${this.galleryHTML(p)}</div>
        <div class="detail-meta">
          <div class="detail-badges">
            <span class="detail-brand" style="background:${brandColor}20;color:${brandColor};border-color:${brandColor}40;">${sanitizeHTML(p.brand)}</span>
            <span class="detail-category">${sanitizeHTML(rayon?.label || p.category)}</span>
            ${p.isNew ? '<span class="product-badge badge-new">Nouveauté 2026</span>' : ''}
            ${p.incomplete ? '<span class="product-badge badge-info">Fiche incomplète</span>' : ''}
          </div>
          <h2 class="detail-title">${sanitizeHTML(p.title)}</h2>
          <div class="detail-ref">Modèle : ${sanitizeHTML(p.reference || 'Information à confirmer')}</div>
          <div class="detail-ref">Sortie officielle : ${sanitizeHTML(p.dateSortie ? this.formatDate(p.dateSortie) : String(p.annee))}</div>
        </div>
      </div>
      <p class="detail-desc">${sanitizeHTML(p.description)}</p>
      <div id="variantBox">${this.variantBoxHTML(p)}</div>
      <section class="detail-block">
        <h4>Caractéristiques</h4>
        ${this.specsTableHTML(p)}
      </section>
      <section class="detail-block">
        <h4>Bundles et accessoires compatibles</h4>
        ${this.bundlesHTML(p)}
      </section>
      <section class="detail-block">
        <h4>Situations d’utilisation</h4>
        ${this.usagesHTML(p)}
      </section>
      <section class="detail-block">
        <h4>Prix et disponibilité</h4>
        ${this.priceBlockHTML(p)}
      </section>
      <section class="detail-block">
        <h4>Médias</h4>
        ${this.mediaHTML(p)}
      </section>
      <section class="detail-block">
        <h4>Sources et informations manquantes</h4>
        ${this.sourcesHTML(p)}
      </section>`;
  }

  galleryHTML(p){
    if(!p.images.length){
      return '<div class="main-image main-image--empty" role="img" aria-label="Image à confirmer">Image à confirmer</div>';
    }
    const i = Math.min(state.imageIndex, p.images.length - 1);
    const media = p.medias.images[i];
    return `
      <img class="main-image" src="${sanitizeHTML(media.fichier)}" alt="${sanitizeHTML(media.alt)}" loading="lazy">
      <div class="thumbnails">${p.medias.images.map((m, k) => `<button type="button" class="thumb-btn${k === i ? ' is-active' : ''}" data-image-index="${k}" aria-label="Image ${k + 1}"><img src="${sanitizeHTML(m.fichier)}" alt="" loading="lazy"></button>`).join('')}</div>
      <p class="media-credit">${sanitizeHTML(media.auteur)} · ${sanitizeHTML(media.licence)} · ${this.sourceLink(media.source)}</p>`;
  }

  variantBoxHTML(p){
    const sel = this.selectedVariant(p);
    const choice = state.variantChoice[p.id] || [];
    const groups = (p.variantes || []).map((groupe, g) => `
        <div class="variant-group">
          <span class="variant-label">${sanitizeHTML(groupe.groupe)}</span>
          <div class="variant-options">${groupe.options.map((o, k) => `<button type="button" class="variant-chip${k === (choice[g] ?? 0) ? ' is-selected' : ''}${o.dispo === false ? ' is-unavailable' : ''}" data-variant-group="${g}" data-variant-option="${k}" aria-pressed="${k === (choice[g] ?? 0)}">${sanitizeHTML(o.libelle)}${o.dispo === false ? ' (indisponible)' : ''}</button>`).join('')}</div>
        </div>`).join('');
    const addLabel = sel.prix === null ? 'Prix à confirmer' : !sel.disponible ? 'Variante indisponible' : 'Ajouter au panier (démonstration)';
    const lien = sel.lienOfficiel;
    const lienHTML = sel.lienDefini
      ? (lien
        ? `<a class="btn-official" href="${sanitizeHTML(lien.url)}" target="_blank" rel="noopener" aria-label="Ouvrir la page officielle du fabricant pour ${sanitizeHTML(sel.label)} (nouvelle fenêtre)">Boutique officielle du fabricant<span class="btn-official-arrow" aria-hidden="true">↗</span></a>
           <span class="lien-official-note">Vérifié le ${sanitizeHTML(lien.verifie || '')} · ${sanitizeHTML(lien.precision || '')}</span>`
        : '<button type="button" class="btn-official btn-official--off" disabled>Lien officiel précis introuvable pour cette configuration</button>')
      : '';
    return `
      <div class="variant-box">
        ${groups}
        <div class="variant-price">
          <span class="variant-price-value">${sel.prix !== null ? formatPrice(sel.prix) : 'Information à confirmer'}</span>
          <span class="variant-price-note">${sanitizeHTML(sel.label)}${sel.label ? ' · ' : ''}Prix public officiel (France)</span>
        </div>
        <div class="detail-actions">
          <button type="button" class="btn-primary" data-action="add" ${sel.prix === null || !sel.disponible ? 'disabled' : ''}>${addLabel}</button>
          ${sel.disponible ? '' : whatsappHTML()}
        </div>
        ${lienHTML ? `<div class="lien-official">${lienHTML}</div>` : ''}
      </div>`;
  }

  specsTableHTML(p){
    const rows = (p.caracteristiques || []).map(c => `<tr><th scope="row">${sanitizeHTML(c.libelle)}</th><td>${sanitizeHTML(c.valeur)}</td></tr>`).join('');
    const boite = p.contenuBoite ? `<tr><th scope="row">Contenu de la boîte</th><td>${sanitizeHTML(p.contenuBoite)}</td></tr>` : '';
    return rows || boite
      ? `<div class="table-wrap"><table class="specs-table"><tbody>${rows}${boite}</tbody></table></div>`
      : '<p class="empty-note">Information à confirmer</p>';
  }

  bundlesHTML(p){
    const bundles = p.bundles || [];
    const acc = p.accessoires || [];
    const bundleHTML = bundles.length
      ? `<h5>Bundles vendus ensemble (officiels)</h5><ul class="link-list">${bundles.map(b => `<li><strong>${sanitizeHTML(b.nom)}</strong> — ${sanitizeHTML(b.contenu)} ${this.sourceLink(b.source)}</li>`).join('')}</ul>`
      : '<h5>Bundles vendus ensemble (officiels)</h5><p class="empty-note">Aucun bundle officiel confirmé : Information à confirmer.</p>';
    const accHTML = acc.length
      ? `<h5>Accessoires vendus séparément</h5><ul class="link-list">${acc.map(a => `<li><strong>${sanitizeHTML(a.nom)}</strong> — compatible : ${sanitizeHTML(a.compatibilite)} ${this.sourceLink(a.source)}</li>`).join('')}</ul>`
      : '<h5>Accessoires vendus séparément</h5><p class="empty-note">Aucun accessoire officiel confirmé : Information à confirmer.</p>';
    return bundleHTML + accHTML;
  }

  usagesHTML(p){
    const items = p.usages || [];
    return items.length
      ? `<ul class="usage-list">${items.map(u => `<li>${sanitizeHTML(u)}</li>`).join('')}</ul>`
      : '<p class="empty-note">Information à confirmer</p>';
  }

  priceBlockHTML(p){
    const prix = p.prix;
    const dispo = p.disponibilite;
    const prixLigne = prix
      ? `<div><span class="price-label">Prix public officiel</span> <strong>${formatPrice(prix.montant)}</strong> (${sanitizeHTML(prix.marche)}, ${sanitizeHTML(prix.libelle)}), vérifié le ${this.formatDate(prix.date)} ${this.sourceLink(prix.source)}</div>`
      : '<div><span class="price-label">Prix public officiel</span> Information à confirmer</div>';
    const dispoLigne = dispo && dispo.statut === 'disponible'
      ? `<div><span class="price-label">Disponibilité officielle</span> ${sanitizeHTML(dispo.libelle)}, vérifiée le ${this.formatDate(dispo.date)} ${this.sourceLink(dispo.source)}</div>`
      : '<div><span class="price-label">Disponibilité officielle</span> Information à confirmer</div>';
    return `
      <div class="price-block">
        ${prixLigne}
        ${dispoLigne}
        <div><span class="price-label">Prix KiffTech</span> non publié : démonstration, aucune commande ni aucun paiement possible.</div>
      </div>`;
  }

  mediaHTML(p){
    const imgs = p.medias?.images || [];
    const video = p.medias?.video;
    const videoHTML = video
      ? `<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/${sanitizeHTML(video.id)}" title="${sanitizeHTML(video.titre)}" loading="lazy" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>
        <p class="media-credit">Vidéo officielle : ${sanitizeHTML(video.titre)}, ${sanitizeHTML(video.chaine)} · <a href="${sanitizeHTML(video.url)}" target="_blank" rel="noopener">YouTube</a></p>`
      : '<p class="empty-note">Vidéo officielle : Information à confirmer.</p>';
    const imgHTML = imgs.length
      ? `<ul class="media-list">${imgs.map((m, k) => `<li><strong>Image ${k + 1}</strong> : ${sanitizeHTML(m.alt)}<span class="media-credit">${sanitizeHTML(m.attribution)} · ${this.sourceLink(m.source)}</span></li>`).join('')}</ul>`
      : '<p class="empty-note">Image à confirmer : aucun média autorisé vérifié.</p>';
    return videoHTML + imgHTML;
  }

  sourcesHTML(p){
    const sources = (p.sourcesVerifiees || []).map(s => `<li>${sanitizeHTML(s.libelle)} : <a href="${sanitizeHTML(s.url)}" target="_blank" rel="noopener">${sanitizeHTML(s.url)}</a> (vérifié le ${this.formatDate(s.date)})</li>`).join('');
    const manquants = (p.manquants || []).map(m => `<li>${sanitizeHTML(m)}</li>`).join('');
    return `
      <h5>Sources officielles consultées</h5>
      <ul class="link-list">${sources || '<li>Information à confirmer</li>'}</ul>
      <p class="media-credit">Année de sortie officielle : ${p.annee}${p.sourceAnnee ? ` · ${this.sourceLink(p.sourceAnnee.url)}` : ''}</p>
      ${manquants ? `<h5>Informations manquantes</h5><ul class="link-list">${manquants}</ul>` : ''}`;
  }

  onDetailClick(e){
    const p = state.currentProduct;
    if(!p) return;
    const chip = e.target.closest('[data-variant-group]');
    if(chip){
      const choice = state.variantChoice[p.id] || [];
      choice[Number(chip.dataset.variantGroup)] = Number(chip.dataset.variantOption);
      state.variantChoice[p.id] = choice;
      this.productDetail.querySelector('#variantBox').innerHTML = this.variantBoxHTML(p);
      return;
    }
    const thumb = e.target.closest('[data-image-index]');
    if(thumb){
      state.imageIndex = Number(thumb.dataset.imageIndex);
      this.productDetail.querySelector('.detail-gallery').innerHTML = this.galleryHTML(p);
      return;
    }
    if(e.target.closest('[data-action="add"]')) this.addToCart(p.id);
  }

  bindCartEvents() {
    window.addEventListener('cart:change', () => this.updateCartDisplay());
  }

  updateCartDisplay() {
    const totals = cartManager.calculateTotals(state.productsMap);
    this.cartCount.textContent = totals.totalItems;
    
    if (state.currentTab === 'cart') this.renderCartPanel();
  }

  renderCartPanel() {
    const panel = document.getElementById('panel-cart');
    if (!panel) return;
    
    const items = cartManager.getItems();
    
    if (items.length === 0) {
      panel.querySelector('.panel-content').innerHTML = `
        <div class="empty-state" style="text-align:center;padding:3rem 1rem;color:var(--fg-muted);">
          <div style="font-size:3rem;margin-bottom:1rem;">🛒</div>
          <h3 style="margin-bottom:.5rem;">Panier vide</h3>
          <p>Ajoutez des produits depuis le catalogue</p>
          <button class="btn-primary" onclick="window.keffTech.switchTab('catalog')" style="margin-top:1rem;">Aller au catalogue</button>
        </div>`;
      return;
    }

    const totals = cartManager.calculateTotals(state.productsMap);
    const itemsHTML = items.map((item, index) => {
      const product = state.productsMap.get(item.productId);
      if (!product) return '';
      const unit = item.prix ?? product.price ?? 0;
      const thumb = product.images[0];
      return `
        <article class="cart-item" style="display:flex;gap:1rem;padding:1rem;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);margin-bottom:.75rem;align-items:center;">
          ${thumb ? `<img src="${sanitizeHTML(thumb)}" alt="" style="width:80px;height:80px;object-fit:cover;border-radius:var(--radius-md);">` : '<div class="cart-thumb-empty" aria-hidden="true">Image à confirmer</div>'}
          <div style="flex:1;min-width:0;">
            <h4 style="font-size:.9rem;font-weight:600;margin-bottom:.25rem;">${sanitizeHTML(product.title)}</h4>
            ${item.variant ? `<p style="font-size:.7rem;color:var(--fg-muted);">${sanitizeHTML(item.variant)}</p>` : ''}
            <p style="font-size:.7rem;color:var(--fg-muted);">${sanitizeHTML(product.brand)} • ${formatPrice(unit)} x ${item.quantity}</p>
            <div style="display:flex;align-items:center;gap:.5rem;margin-top:.5rem;">
              <button onclick="window.keffTech.updateCartQty(${index}, ${item.quantity - 1})" class="icon-btn-sm" style="width:32px;height:32px;">−</button>
              <span style="min-width:2rem;text-align:center;font-weight:600;">${item.quantity}</span>
              <button onclick="window.keffTech.updateCartQty(${index}, ${item.quantity + 1})" class="icon-btn-sm" style="width:32px;height:32px;">+</button>
              <span style="margin-left:auto;font-weight:700;color:var(--accent);">${formatPrice(unit * item.quantity)}</span>
              <button onclick="window.keffTech.removeFromCart(${index})" class="icon-btn-sm" style="color:var(--danger);" aria-label="Supprimer">🗑️</button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    const content = panel.querySelector('.panel-content');
    content.innerHTML = `
      <div style="margin-bottom:1.5rem;">
        <h2 style="font-size:1.3rem;font-weight:800;margin-bottom:.5rem;">Panier (${totals.totalItems} articles)</h2>
        <p style="color:var(--fg-muted);font-size:.8rem;">${totals.uniqueItems} produit${totals.uniqueItems > 1 ? 's' : ''} différent${totals.uniqueItems > 1 ? 's' : ''}</p>
      </div>
      <div class="cart-items">${itemsHTML}</div>
      <div class="cart-summary" style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-xl);padding:1.5rem;margin-top:1.5rem;">
        <div style="display:flex;justify-content:space-between;padding:.5rem 0;">
          <span>Sous-total (prix publics officiels)</span>
          <span>${formatPrice(totals.subtotal)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:.5rem 0;">
          <span>Livraison</span>
          <span style="color:var(--fg-muted);font-weight:700;">Information à confirmer</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:.5rem 0;border-top:2px solid var(--accent);margin-top:1rem;font-size:1.1rem;font-weight:800;">
          <span>TOTAL indicatif</span>
          <span style="color:var(--accent);">${formatPrice(totals.finalTotal)}</span>
        </div>
        <div style="margin-top:1rem;padding:1rem;background:rgba(0,255,200,.05);border:1px solid var(--accent);border-radius:var(--radius-md);font-size:.75rem;color:var(--accent);">
          Démonstration : aucune commande ni aucun paiement n’est possible. Les montants sont les prix publics officiels, sans remise.
        </div>
        <div style="display:flex;gap:.75rem;margin-top:1.5rem;">
          <button class="btn-secondary" onclick="window.keffTech.switchTab('catalog')" style="flex:1;">Continuer mes achats</button>
          <button class="btn-primary" onclick="window.keffTech.checkout()" style="flex:2;padding:1rem;font-size:1rem;">Commander (démonstration) - ${formatPrice(totals.finalTotal)}</button>
        </div>
      `;
  }

  updateCartQty(index, quantity) {
    cartManager.updateQuantity(index, quantity);
    if (state.currentTab === 'cart') this.renderCartPanel();
  }

  removeFromCart(index) {
    cartManager.remove(index);
    if (state.currentTab === 'cart') this.renderCartPanel();
  }

  checkout() {
    const totals = cartManager.calculateTotals(state.productsMap);
    this.showToast(`Commande de ${totals.totalItems} articles pour ${formatPrice(totals.finalTotal)} - Démo seulement`, 'success');
  }

  closeModal(){this.modal.hidden=true;document.body.style.overflow='';}

  bindCartEvents() {
    window.addEventListener('cart:change', () => this.updateCartDisplay());
  }

  updateCartDisplay() {
    const totals = cartManager.calculateTotals(state.productsMap);
    this.cartCount.textContent = totals.totalItems;
    
    if (state.currentTab === 'cart') this.renderCartPanel();
  }

  bindEvents(){
    this.loadMore.querySelector('button').addEventListener('click',()=>this.loadMoreProducts());
    this.categoryFilter.addEventListener('change',this.applyFilters);
    this.supplierFilter.addEventListener('change',this.applyFilters);
    this.searchInput.addEventListener('input',this.applyFilters);
    document.querySelectorAll('.btn-subscribe').forEach(btn=>btn.addEventListener('click',()=>this.subscribe(btn.dataset.tier)));
    this.addSourceBtn.addEventListener('click',()=>this.showToast('Ajout source — démo seulement'));
    this.addScheduleBtn.addEventListener('click',()=>this.showToast('Nouvelle tâche cron — démo seulement'));
    this.exportCSV.addEventListener('click',()=>this.exportCatalog('csv'));
    this.exportJSON.addEventListener('click',()=>this.exportCatalog('json'));
    this.importCSV.addEventListener('click',()=>this.csvImportInput.click());
    this.csvImportInput.addEventListener('change',(e)=>this.handleCSVImport(e));
    this.modal.querySelector('.modal-close').addEventListener('click',()=>this.closeModal());
    this.modal.querySelector('.modal-backdrop').addEventListener('click',()=>this.closeModal());
    document.addEventListener('keydown',(e)=>{if(e.key==='Escape') this.closeModal();});

    document.getElementById('cartBtn').addEventListener('click',()=>this.switchTab('cart'));
    document.getElementById('userBtn').addEventListener('click',()=>this.switchTab('settings'));
    document.getElementById('searchBtn').addEventListener('click',()=>{this.searchInput?.focus();});
    this.productDetail.addEventListener('click',(e)=>this.onDetailClick(e));
  }

  initBioParticles(){
    const container=document.getElementById('bioParticles');
    if(!container) return;
    if(window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    const colors=['#00ffc8','#0066ff','#b84dff','#ff6b00','#ffd23f'];
    for(let i=0;i<18;i++){
      const p=document.createElement('div');
      p.className='bio-particle';
      const size=1.5+Math.random()*3;
      const sx=(Math.random()-0.5)*innerWidth*0.8;
      const sy=(Math.random()-0.5)*innerHeight*0.8;
      const ex=(Math.random()-0.5)*innerWidth*0.8;
      const ey=(Math.random()-0.5)*innerHeight*0.8;
      const dx=ex-sx, dy=ey-sy;
      const clr=colors[Math.floor(Math.random()*colors.length)];
      const op=0.05+Math.random()*0.1;
      const dur=20+Math.random()*20;
      const delay=Math.random()*5;
      p.style.cssText=`left:50%;top:50%;width:${size}px;height:${size}px;--sx:${sx}px;--sy:${sy}px;--dx:${dx}px;--dy:${dy}px;--ex:${ex}px;--ey:${ey}px;--op:${op};background:${clr};color:${clr};animation-duration:${dur}s;animation-delay:${delay}s`;
      if(Math.random()<.4) p.classList.add('glow');
      container.appendChild(p);
    }
  }

  showToast(msg,type='success'){const t=document.createElement('div');t.className=`toast ${type}`;t.textContent=msg;this.toastContainer.appendChild(t);setTimeout(()=>{t.style.animation='toastIn .3s reverse';setTimeout(()=>t.remove(),300);},3500);}

  registerSW(){if('serviceWorker' in navigator){navigator.serviceWorker.register('./sw.js').catch(console.warn);}}

  setupInstallPrompt(){
    let deferredPrompt=null;
    const installBtn=document.createElement('button');
    installBtn.className='install-btn';
    installBtn.textContent='Installer KiffTech';
    installBtn.style.cssText='position:fixed;bottom:calc(var(--bottom-bar-h) + 1rem + var(--safe-bottom));left:50%;transform:translateX(-50%);z-index:90;padding:.75rem 1.5rem;background:var(--accent);color:#03050a;border:none;border-radius:999px;font-weight:700;display:none;box-shadow:0 4px 20px rgba(0,255,200,.4)';
    document.body.appendChild(installBtn);

    window.addEventListener('beforeinstallprompt',(e)=>{e.preventDefault();deferredPrompt=e;installBtn.style.display='block';});
    window.addEventListener('appinstalled',()=>{deferredPrompt=null;installBtn.style.display='none';});
    installBtn.addEventListener('click',async()=>{if(!deferredPrompt) return;deferredPrompt.prompt();const{outcome}=await deferredPrompt.userChoice;if(outcome==='accepted') installBtn.style.display='none';deferredPrompt=null;});
    if(window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) installBtn.style.display='none';
  }

  bindCartEvents() {
    window.addEventListener('cart:change', () => this.updateCartDisplay());
  }

  updateCartDisplay() {
    const totals = cartManager.calculateTotals(state.productsMap);
    this.cartCount.textContent = totals.totalItems;
    
    if (state.currentTab === 'cart') this.renderCartPanel();
  }
}

document.addEventListener('DOMContentLoaded',()=>{window.keffTech=new KiffTech();window.keffTech.renderSubscription();window.keffTech.updateCartDisplay();});