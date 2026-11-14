# Déploiement du paiement PayPal (KiffTech)

## Constat dépôt (sans lecture/affichage de secrets)
- Aucun dossier `.github/workflows/` ni fichier de workflow présent dans le dépôt : aucune référence de secret PayPal n’a pu être repérée dans des workflows versionnés.
- Aucun backend/serverless PayPal existant dans le dépôt avant cette intégration.
- Hébergement actuel : GitHub Pages (statique) — **incompatible** avec les endpoints serveur requis (création/capture PayPal, secrets côté serveur). Les endpoints doivent être hébergés sur un backend/serverless.

## Implémentation ajoutée (compatible Cloudflare Pages Functions)
- Endpoints serveur sécurisés : `functions/api/paypal/config.js`, `functions/api/paypal/create-order.js`, `functions/api/paypal/capture-order.js` (+ helpers `functions/api/_lib/paypal.js`).
- Logique partagée de vendabilité/recalcul serveur : `lib/payment-core.js` (montant recalculé depuis le catalogue canonique `data/catalogue.js` par `productId`/`choiceIndices`/`quantity` ; aucune confiance au prix/total navigateur).
- Paiement autorisé uniquement si l’offre est vendable (prix final, disponibilité, devise, **livraison** et **taxes** définis). À défaut, « Acheter maintenant » est désactivé avec explication. (Les fiches actuelles ne définissent pas livraison/taxes → paiement non autorisé tant que non complété.)
- Confirmation affichée uniquement après capture PayPal `COMPLETED`. Annulation/refus/erreurs gérés côté client. Aucun paiement réel lancé pendant la vérification.

## Secrets PayPal (déjà dans GitHub Actions Secrets selon configuration existante — ne pas les redemander/afficher)
Les fonctions serveur lisent uniquement des variables d’environnement (jamais exposées au navigateur, jamais loguées) :
- `PAYPAL_CLIENT_ID` (identifiant client, public côté SDK mais fourni via endpoint serveur `/api/paypal/config`)
- `PAYPAL_CLIENT_SECRET` (**secret**, serveur uniquement)
- `PAYPAL_API_BASE` (optionnel) : `https://api-m.paypal.com` (production) ou `https://api-m.sandbox.paypal.com` (sandbox)

## Réglages de déploiement à compléter (configuration externe indispensable)
GitHub Pages ne peut pas exécuter `functions/`. Pour rendre le paiement fonctionnel en production, choisir et configurer un hébergement serverless (ex. **Cloudflare Pages** avec Functions, recommandé car les fichiers `functions/api/*` sont compatibles) :

1. **Créer/relier un projet Cloudflare Pages** au dépôt/branche publié (ou déployer le même contenu incluant `functions/`).
2. **Variables d’environnement du projet** (Settings → Environment variables, Production/Preview selon besoin) : définir `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, et si test `PAYPAL_API_BASE=https://api-m.sandbox.paypal.com`.
   - Si le déploiement Cloudflare est piloté par GitHub Actions, mapper les secrets Actions existants vers ces variables (sans afficher leurs valeurs). Si déploiement natif Cloudflare Pages, renseigner les variables dans le dashboard Cloudflare.
3. **URL de l’application** : servir le front et `/api/paypal/*` sur la même origine (Cloudflare Pages le fait nativement). Si le front reste sur GitHub Pages et l’API ailleurs, il faudra configurer une URL d’API + CORS côté serveur (non configuré par défaut ici) — **préférer même origine**.
4. **Domaine/Pages** : basculer le trafic public vers le déploiement Cloudflare Pages (ou l’hébergement choisi) pour que `./api/paypal/*` soit résolu. GitHub Pages seul ne servira pas les endpoints.
5. **Vendabilité catalogue** : pour autoriser un paiement réel, compléter par produit/offre les champs requis côté catalogue/données canoniques : prix final confirmé, disponibilité, devise, **livraison** (montant/détail) et **taxes** (montant/taux/inclus) — puis recalcul/validation serveur s’appuiera dessus.

## Vérifications effectuées ici
- Implémentation côté code : création/capture via endpoints serveur, recalcul serveur, états UI (chargement/annulation/refus/erreur/succès après capture confirmée), désactivation + motif quand non vendable.
- Aucune exécution de paiement réel effectuée.

## Limite actuelle
Tant que (a) aucun backend serverless déployé avec les variables `PAYPAL_*` n’est accessible à la même origine et (b) les offres n’incluent pas livraison/taxes définies, le paiement restera indisponible/refusé — comportement voulu par les règles de sécurité/vendabilité.
