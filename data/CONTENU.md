# Cahier des charges — contenu des fiches produit

**Version** : 1.2 — 2026-11-14 (ajout de la règle de devise, sans conversion)
**Périmètre** : catalogue KiffTech (`data/catalogue.js`)
**Contrôle** : `node tools/check-contenu.js` (souple), `--strict` (fiches), `--complete` (couverture)

Ce document est la référence à respecter pour chaque fiche produit. Il prime sur
les habitudes de rédaction : une fiche qui ne remplit pas ces minimums est
considérée comme **incomplète**.

---

## 1. Couverture attendue

- **Une génération de produit par année de sortie, de 2020 à 2026.**
- **Marques imposées** : Samsung, Apple, Linux, Microsoft, Steam, Meta, HP,
  Alienware, MSI.

### Couverture retenue : 63 fiches

Décision du 2026-11-14 : **une fiche par marque et par année**, soit
**9 marques × 7 années = 63 fiches**.

> Chaque case du tableau ci-dessous doit correspondre à un produit réellement
> sorti cette année-là, vérifié par une source fabricant datée.

**Cas sans nouveau produit** : certaines marques ne sortent pas de matériel
grand public chaque année (ex. Valve/Steam). Dans ce cas, ne pas inventer de
produit et ne pas décaler artificiellement une sortie : documenter l'absence
dans `manquants[]` et laisser la case non couverte. Le mode `--complete`
signale alors le couple manquant, sans bloquer les autres fiches.

### Cas particulier « Linux »

Linux n'est pas une marque commerciale. Une fiche « Linux » doit désigner un
appareil vendu avec Linux (PC, console, mini-PC) et renseigner le champ
`plateforme: "Linux"` en plus de `marque`. Le contrôle reconnaît la couverture
Linux via `marque`, `modele` ou `plateforme`.

### Tableau de couverture (63 cases)

À remplir au fur et à mesure ; une case = un produit réellement sorti cette
année-là, avec source fabricant datée.

| Marque | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 |
|---|---|---|---|---|---|---|---|
| Samsung | Galaxy S20 5G ✅ | à définir | à définir | à définir | à définir | à définir | à définir |
| Apple | iPhone 12 ✅ | à définir | à définir | à définir | à définir | à définir | à définir |
| Linux | Raspberry Pi 400 ✅ | à définir | à définir | à définir | à définir | à définir | à définir |
| Microsoft | Xbox Series X ✅ | à définir | à définir | à définir | à définir | à définir | à définir |
| Steam (Valve) | Half-Life: Alyx ⚠️ | à définir | à définir | Steam Deck OLED ✅ | à définir | à définir | Steam Machine, Steam Frame, Steam Controller ✅ |
| Meta | Quest 2 ✅ | à définir | à définir | à définir | à définir | à définir | à définir |
| HP | Reverb G2 ⚠️ | à définir | à définir | à définir | à définir | à définir | à définir |
| Alienware | m15 R3 ⚠️ | à définir | à définir | à définir | à définir | à définir | à définir |
| MSI | Bravo 17 ✅ | à définir | à définir | à définir | à définir | à définir | à définir |

> Les cases « à définir » sont des emplacements, pas des produits inventés.
> Chaque produit doit être confirmé par une source fabricant avant rédaction.
> ✅ = fiche complète ; ⚠️ = fiche présente mais incomplète (voir `manquants[]`).
>
> État au 14/11/2026 : **15 fiches**, **11 couples sur 63** couverts
> (Samsung 2020, Apple 2020, Linux 2020, Microsoft 2020, Steam 2020/2023/2026,
> Meta 2020, HP 2020, Alienware 2020, MSI 2020). **6 fiches sur 15 sont
> complètes** : les 6 fiches historiques (2023–2026) restent sans article, et
> trois fiches 2020 manquent d'images sous licence libre (Half-Life: Alyx,
> Reverb G2, m15 R3) — les deux dernières manquent aussi de vidéo officielle.
>
> Les fiches Nintendo et Sony (Switch 2, PS5 Pro) restent hors périmètre : ces
> marques ne figurent pas dans la liste imposée et ne comptent pas dans les
> 63 couples, mais elles sont conservées au catalogue.

---

## 2. Minimum obligatoire par fiche

| Élément | Minimum | Cible | Champ `catalogue.js` |
|---|---|---|---|
| Images | **3** | 3 à 5 | `medias.images[]` |
| Vidéos | **1** | 1 à 2 | `medias.videos[]` (ou `medias.video`) |
| Tableau de caractéristiques | **1 tableau** | complet | `caracteristiques[]` |
| Article | **1 article** | 1 | `article: { titre, contenu }` |
| Occasions d'utilisation | **10** | 10 à 20 | `usages[]` |

**Règles dures** : jamais moins de 3 images, jamais moins d'1 vidéo, jamais
moins de 10 occasions d'utilisation, jamais 0 article. Une fiche en dessous est
signalée par le contrôle et doit rester marquée « Fiche incomplète ».

---

## 3. Méthode — images

1. **3 à 5 photographies minimum** par produit, en fichiers locaux dans `img/`
   (pas de lien direct vers un site tiers).
2. Licence libre vérifiée uniquement : Wikimedia Commons, CC BY, CC BY-SA,
   CC0 ou domaine public. Pas d'image récupérée sans licence explicite.
3. Chaque image doit renseigner :
   - `fichier` — chemin relatif (`img/...`) ;
   - `alt` — description factuelle de ce qui est visible ;
   - `licence` — nom exact de la licence ;
   - `auteur` — nom de l'auteur ;
   - `attribution` — mention complète affichée sous l'image ;
   - `source` — URL de la page du média.
4. L'attribution et la licence sont **visibles** dans la fiche, pas seulement
   dans le code.
5. Si aucune photo libre n'existe pour un modèle, ne pas inventer et ne pas
   utiliser une photo d'un autre modèle : laisser `images: []` et l'expliquer
   dans `manquants[]`. La fiche reste incomplète tant que les 3 images ne sont
   pas trouvées.

## 4. Méthode — vidéos

1. **1 à 2 vidéos officielles du fabricant** par produit (chaîne officielle).
2. Intégration uniquement via `https://www.youtube-nocookie.com/embed/<id>`.
3. Chaque vidéo renseigne : `id`, `titre`, `chaine`, `url`.
4. Pas de vidéo tierce, de testeur ou de reupload non officiel.
5. Le champ historique `medias.video` (une seule vidéo) reste accepté ; le
   champ cible est `medias.videos[]` pour en autoriser deux.

## 5. Méthode — tableau de caractéristiques

- Tableau de paires `libelle` / `valeur`, une ligne par caractéristique.
- Chaque valeur doit être vérifiée auprès du fabricant ou d'une source
  officielle datée ; aucune valeur inventée ou estimée.
- Selon la catégorie, couvrir au minimum : processeur, mémoire, stockage,
  écran, connectique, réseau, système, dimensions, poids, alimentation.
- Une information non confirmée va dans `manquants[]`, jamais dans le tableau.

## 6. Méthode — article

- **Un article rédigé par fiche**, en français, distinct de la `description`
  courte (pas de simple copier-coller).
- Structure recommandée :
  1. accroche et positionnement du produit ;
  2. présentation et nouveautés par rapport au modèle précédent ;
  3. public visé et usages principaux ;
  4. points forts ;
  5. limites ou points à vérifier ;
  6. entretien, écosystème et accessoires.
- Longueur recommandée : **400 à 800 mots** (non bloquant).
- Toute affirmation technique doit être couverte par `caracteristiques[]` ou
  `sourcesVerifiees[]`. Pas de comparaison chiffrée non sourcée.
- Format de données :

```js
article: {
  titre: "Titre éditorial de l'article",
  contenu: [
    "Premier paragraphe…",
    "Deuxième paragraphe…"
  ]
}
```

`contenu` peut aussi être une chaîne unique : les paragraphes sont alors
séparés par une ligne vide.

## 7. Méthode — occasions d'utilisation

- **10 minimum, 20 maximum** par produit.
- Chaque occasion doit être :
  - concrète (« brancher sur la TV du salon en HDMI 2.1 », pas « utiliser ») ;
  - distincte des autres (pas de reformulation) ;
  - cohérente avec une caractéristique vérifiée du produit ;
  - rédigée du point de vue de l'utilisateur.
- Ne pas inventer de compatibilité ou de fonction absente de la fiche.

## 8. Règles de rédaction générales

- Français, ton factuel, pas de superlatif non démontré.
- Prix : prix public officiel uniquement, TTC, avec date et source.
- Devise : afficher le montant dans la devise publiée par le fabricant (`prix.devise`,
  `EUR` par défaut). Ne jamais convertir ni réétiqueter un prix en euros : un
  montant USD s'affiche en USD, et l'absence de prix EUR va dans `manquants[]`.
  Le panier additionne séparément par devise et n'affiche pas de total unique
  quand plusieurs devises coexistent.
- Aucune commande ni aucun paiement réel.
- Toute information non confirmée figure dans `manquants[]` et déclenche le
  badge « Fiche incomplète ».

---

## 9. Contrôle automatique

```bash
node tools/check-contenu.js            # audit, ne bloque pas
node tools/check-contenu.js --strict   # code 1 si une fiche existante est incomplète
node tools/check-contenu.js --complete # code 1 si un des 63 couples marque × année manque
node tools/check-contenu.js --json     # sortie machine
```

Le contrôle vérifie, pour chaque fiche : nombre d'images (3–5), nombre de
vidéos (1–2), présence du tableau de caractéristiques, présence de l'article,
nombre d'occasions d'utilisation (10–20), devise et date de vérification du prix
lorsque celui-ci existe, puis affiche la matrice de couverture des 9 marques ×
7 années (63 couples).

`--strict` porte sur les fiches existantes ; `--complete` porte sur la
couverture globale. Les deux peuvent être combinés.

Un écart n'est pas une erreur de code : c'est une fiche à compléter.
