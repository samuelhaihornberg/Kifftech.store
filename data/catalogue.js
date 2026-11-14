/* ===== KiffTech — catalogue produits (données vérifiées fabricant) =====
   Chaque fiche indique ses sources (URL + date de vérification).
   - Prix : prix public officiel uniquement (TTC, marché France/UE), aucune remise.
   - Aucun prix, stock, contenu de boîte ou compatibilité inventé : les éléments
     non confirmés figurent dans `manquants` (badge « Fiche incomplète »).
   - Médias : photographies sous licence libre (Wikimedia Commons, auteur/licence
     vérifiés) + vidéo officielle du fabricant (YouTube, embed uniquement).
   - Catalogue en démonstration : aucune commande ni paiement n'est possible. */
export const CATALOGUE = {
  produits: [
    {
      id: "valve-steam-machine",
      marque: "Valve",
      modele: "Steam Machine",
      rayon: "gaming",
      annee: 2026,
      dateSortie: "2026-06-22",
      sourceAnnee: {
        url: "https://steamcommunity.com/groups/steam_hardware/announcements/detail/685257114654870246",
        date: "2026-11-13"
      },
      sourceFiche: "https://store.steampowered.com/hardware/steammachine",
      ficheFabricant: "https://store.steampowered.com/hardware/steammachine",
      description: "Console de salon SteamOS développée par Valve : un PC de jeu compact conçu pour le salon, avec un processeur et un processeur graphique AMD partiellement sur-mesure, 16 Go de mémoire vive DDR5 plus 8 Go de GDDR6 dédiés à la mémoire vidéo, SteamOS 3 (basé sur Arch) et un bureau KDE Plasma. Elle joue aux jeux Steam natifs et par Proton, se connecte à la télévision en DisplayPort 1.4 ou HDMI 2.0 et se pilote avec le Steam Controller ou toute manette compatible Steam.",
      variantes: [
        {
          groupe: "Modèle",
          options: [
            { libelle: "512 Go", prix: 1039, dispo: true, lienOfficiel: { url: "https://store.steampowered.com/hardware/steammachine", precision: "Configuration sélectionnée sur la page officielle Valve (le fabricant ne fournit pas d'URL distincte par configuration)", verifie: "2026-11-13" } },
            { libelle: "512 Go + Steam Controller", prix: 1108, dispo: true, lienOfficiel: { url: "https://store.steampowered.com/hardware/steammachine", precision: "Configuration sélectionnée sur la page officielle Valve (le fabricant ne fournit pas d'URL distincte par configuration)", verifie: "2026-11-13" } },
            { libelle: "2 To", prix: 1359, dispo: true, lienOfficiel: { url: "https://store.steampowered.com/hardware/steammachine", precision: "Configuration sélectionnée sur la page officielle Valve (le fabricant ne fournit pas d'URL distincte par configuration)", verifie: "2026-11-13" } },
            { libelle: "2 To + Steam Controller", prix: 1428, dispo: true, lienOfficiel: { url: "https://store.steampowered.com/hardware/steammachine", precision: "Configuration sélectionnée sur la page officielle Valve (le fabricant ne fournit pas d'URL distincte par configuration)", verifie: "2026-11-13" } }
          ]
        }
      ],
      caracteristiques: [
        { libelle: "Processeur", valeur: "AMD Zen 4 6 cœurs / 12 threads partiellement sur-mesure, jusqu'à 4,8 GHz (enveloppe thermique 30 W)" },
        { libelle: "Processeur graphique", valeur: "AMD RDNA3 28 CU partiellement sur-mesure, fréquence maximale 2,45 GHz (enveloppe thermique 110 W)" },
        { libelle: "Mémoire vive", valeur: "16 Go DDR5 + 8 Go GDDR6 (mémoire vidéo)" },
        { libelle: "Stockage", valeur: "SSD NVMe 512 Go ou 2 To selon le modèle ; emplacement pour carte microSD ultrarapide" },
        { libelle: "Sorties vidéo", valeur: "DisplayPort 1.4 : jusqu'à 4K 240 Hz ou 8K 60 Hz (HDR, FreeSync, connexion en chaîne) ; HDMI 2.0 : jusqu'à 4K 120 Hz (HDR, FreeSync, CEC)" },
        { libelle: "USB", valeur: "2 ports USB-A 3.2 Gen 1 à l'avant ; 2 ports USB-A 2.0 à l'arrière ; 1 port USB-C 3.2 Gen 2 à l'arrière" },
        { libelle: "Réseau", valeur: "Gigabit Ethernet ; Wi-Fi 6E 2×2 ; antenne Bluetooth 5.3 dédiée" },
        { libelle: "Manette", valeur: "Adaptateur sans fil 2,4 GHz intégré pour le Steam Controller" },
        { libelle: "Barre lumineuse", valeur: "17 diodes RVB configurables (état du système ou personnalisation)" },
        { libelle: "Alimentation", valeur: "Alimentation interne, 110-240 V CA" },
        { libelle: "Système d'exploitation", valeur: "SteamOS 3 (basé sur Arch), bureau KDE Plasma" },
        { libelle: "Dimensions", valeur: "152 mm × 162,4 mm × 156 mm (hauteur 148 mm sans les pieds)" },
        { libelle: "Poids", valeur: "2,6 kg" }
      ],
      prix: {
        montant: 1039,
        devise: "EUR",
        marche: "France (Union européenne), TTC",
        libelle: "Modèle 512 Go, prix de lancement annoncé par Valve (TVAC incluse)",
        date: "2026-06-22",
        source: "https://steamcommunity.com/groups/steam_hardware/announcements/detail/685257114654870246"
      },
      disponibilite: {
        statut: "disponible",
        libelle: "Vente par réservation : e-mails d'achat envoyés dans l'ordre de la file ; Valve a annoncé que toute la file de réservations aura l'option d'achat d'ici la fin 2026",
        date: "2026-11-13",
        source: "https://steamcommunity.com/groups/steam_hardware/announcements/detail/698770449667981837"
      },
      accessoires: [
        {
          nom: "Steam Controller",
          compatibilite: "S'apparie directement, sans Puck, via l'adaptateur sans fil 2,4 GHz intégré à la console",
          source: "https://store.steampowered.com/hardware/steammachine"
        },
        {
          nom: "Façades interchangeables (tissu rouge, noyer massif)",
          compatibilite: "Deux façades supplémentaires offertes avec le modèle 2 To et le bundle 2 To + Steam Controller",
          source: "https://steamcommunity.com/groups/steam_hardware/announcements/detail/685257114654870246"
        }
      ],
      bundles: [
        {
          nom: "Steam Machine 512 Go + Steam Controller",
          contenu: "Console 512 Go et Steam Controller vendus ensemble pour 1 108 € (TVAC incluse)",
          source: "https://steamcommunity.com/groups/steam_hardware/announcements/detail/685257114654870246"
        },
        {
          nom: "Steam Machine 2 To + Steam Controller",
          contenu: "Console 2 To et Steam Controller vendus ensemble pour 1 428 € (TVAC incluse), avec les façades tissu rouge et noyer offertes",
          source: "https://steamcommunity.com/groups/steam_hardware/announcements/detail/685257114654870246"
        }
      ],
      usages: [
        "Jouer aux jeux Steam natifs pour Linux sur la télévision du salon",
        "Jouer au catalogue Windows de Steam via la couche de compatibilité Proton",
        "Brancher la console au moniteur en DisplayPort 1.4 pour du 4K à 240 Hz",
        "Connecter une télévision HDMI 2.0 en 4K à 120 Hz avec HDR",
        "Profiter d'une console de salon compacte (152 × 162,4 × 156 mm) discrète sur un meuble TV",
        "Appairer le Steam Controller sans récepteur externe grâce à l'adaptateur 2,4 GHz intégré",
        "Reprendre une session de jeu du Steam Deck ou d'un PC portable sur la télévision via Steam",
        "Installer une carte microSD pour étendre la bibliothèque de jeux",
        "Gaming en réseau filaire Gigabit Ethernet pour des parties en ligne stables",
        "Diffuser le jeu en 8K 60 Hz sur un écran DisplayPort adapté",
        "Personnaliser l'ambiance du salon avec la barre de 17 diodes RVB",
        "Utiliser le bureau KDE Plasma pour transformer la console en PC de salon sous SteamOS",
        "Offrir en bundle avec le Steam Controller à un joueur qui démarre sur Steam",
        "Réserver puis acheter via la file d'attente officielle de Valve"
      ],
      medias: {
        video: {
          id: "XPNW3GCIeOM",
          titre: "Steam Machine: Official Overview and Quick Start Guide",
          chaine: "Valve",
          url: "https://www.youtube.com/watch?v=XPNW3GCIeOM"
        },
        images: [
          {
            fichier: "img/steam-machine-1.jpg",
            alt: "Steam Machine de Valve, vue de face",
            licence: "CC BY-SA 4.0",
            auteur: "Masem",
            attribution: "Photo : Masem — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Steam_machine_front.jpg"
          },
          {
            fichier: "img/steam-machine-2.jpg",
            alt: "Steam Machine de Valve, vue arrière avec la connectique",
            licence: "CC BY-SA 4.0",
            auteur: "Masem",
            attribution: "Photo : Masem — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Steam_machine_back.jpg"
          }
        ]
      },
      sourcesVerifiees: [
        { libelle: "Annonce Valve « Steam Machine launches today! » (22/06/2026) : lancement, options et prix TTC", url: "https://steamcommunity.com/groups/steam_hardware/announcements/detail/685257114654870246", date: "2026-11-13" },
        { libelle: "Fiche produit officielle Valve (caractéristiques techniques complètes)", url: "https://store.steampowered.com/hardware/steammachine", date: "2026-11-13" },
        { libelle: "Annonce Valve « Steam Machine updates: Reservations, waitlists, and more » (28/07/2026) : état des réservations", url: "https://steamcommunity.com/groups/steam_hardware/announcements/detail/698770449667981837", date: "2026-11-13" }
      ],
      manquants: [
        "Référence/SKU non publiée par Valve",
        "Contenu de la boîte non confirmé sur les sources officielles consultées",
        "Troisième photographie sous licence libre non trouvée (2 photos Commons vérifiées disponibles)"
      ]
    },
    {
      id: "valve-steam-frame",
      marque: "Valve",
      modele: "Steam Frame",
      rayon: "vr",
      annee: 2026,
      dateSortie: "2026-09-14",
      sourceAnnee: {
        url: "https://steamcommunity.com/groups/steam_hardware/announcements/detail/692020124159311888",
        date: "2026-11-13"
      },
      sourceFiche: "https://store.steampowered.com/hardware/steamframe",
      ficheFabricant: "https://store.steampowered.com/hardware/steamframe",
      description: "Casque de réalité virtuelle sans fil de Valve, pensé d'abord pour le streaming depuis le PC : il diffuse toute la bibliothèque Steam, VR et non-VR, et fonctionne aussi en autonome sur SteamOS 3. Le Steam Frame se compose du casque et de deux contrôleurs VR sans fil ; l'adaptateur sans fil Wi-Fi 6E (connexion directe casque-PC à faible latence) et un exemplaire de Half-Life: Alyx sont inclus.",
      variantes: [
        {
          groupe: "Stockage",
          options: [
            { libelle: "256 Go", prix: 1049, dispo: true, lienOfficiel: { url: "https://store.steampowered.com/hardware/steamframe", precision: "Configuration sélectionnée sur la page officielle Valve (le fabricant ne fournit pas d'URL distincte par configuration)", verifie: "2026-11-13" } },
            { libelle: "1 To", prix: 1279, dispo: true, lienOfficiel: { url: "https://store.steampowered.com/hardware/steamframe", precision: "Configuration sélectionnée sur la page officielle Valve (le fabricant ne fournit pas d'URL distincte par configuration)", verifie: "2026-11-13" } }
          ]
        }
      ],
      caracteristiques: [
        { libelle: "Processeur", valeur: "Snapdragon 8 Gen 3 de 4 nm, architecture ARM64" },
        { libelle: "Mémoire vive", valeur: "16 Go de mémoire vive LPDDR5X unifiée" },
        { libelle: "Stockage", valeur: "256 Go ou 1 To (UFS) + emplacement carte microSD" },
        { libelle: "Écran", valeur: "LCD 2160 × 2160 par œil, fréquence de 72 à 120 Hz (144 Hz en expérimental)" },
        { libelle: "Optique", valeur: "Lentilles pancake sur mesure, éléments en verre et sans verre, champ de vision jusqu'à 110 degrés" },
        { libelle: "Écart pupillaire", valeur: "Réglable de 60 à 70 mm ; largeur maximale pour les lunettes : 140 mm" },
        { libelle: "Suivi", valeur: "Suivi inside-out par caméras internes ; 4 caméras monochromes extérieures (casque et contrôleurs) et 2 caméras intérieures (yeux, transmission fovéale)" },
        { libelle: "Vue extérieure", valeur: "Caméras monochromes ; illuminateurs infrarouges pour le suivi et la vue extérieure dans les environnements sombres" },
        { libelle: "Extension", valeur: "Port d'extension librement accessible : interface double caméra MIPI 8 voies à 2,5 Gb/s et PCIe 4e génération (1 voie)" },
        { libelle: "Connectivité", valeur: "Wi-Fi 7 2×2 ; adaptateur sans fil Wi-Fi 6E (6 GHz) inclus pour la liaison directe casque-PC ; Bluetooth 5.4 avec connexion 2,4 GHz dédiée aux contrôleurs" },
        { libelle: "Audio", valeur: "2 haut-parleurs par oreille intégrés à la sangle transversale ; double réseau de microphones" },
        { libelle: "Alimentation", valeur: "Batterie Li-ion rechargeable 21,6 Wh ; port USB-C 2.0 à l'arrière (charge et données) ; charge 15 V ⎓ 3 A (45 W max)" },
        { libelle: "Sangle transversale", valeur: "Amovible, avec haut-parleurs, microphones et batterie rechargeable à l'arrière ; poids 245 g ; unité principale détachable" },
        { libelle: "Dimensions", valeur: "175 mm × 95 mm × 110 mm (unité principale et interface faciale)" },
        { libelle: "Poids", valeur: "440 g avec la sangle transversale ; 185 g pour l'unité principale seule" },
        { libelle: "Système d'exploitation", valeur: "SteamOS 3 (basé sur Arch), bureau KDE Plasma" },
        { libelle: "Contrôleurs", valeur: "Suivi 6 degrés de liberté ; boutons A/B/X/Y, croix directionnelle, gâchettes analogiques et hautes, boutons Affichage/Menu/Steam, boutons de poignée double niveau ; joysticks magnétiques TMR à retour tactile capacitif ; moteur haptique dans chaque contrôleur" }
      ],
      contenuBoite: "Casque Steam Frame, deux contrôleurs Steam Frame, adaptateur sans fil Wi-Fi 6E",
      prix: {
        montant: 1049,
        devise: "EUR",
        marche: "France (Union européenne), TTC",
        libelle: "Modèle 256 Go, prix annoncé par Valve à la sortie (TVAC incluse)",
        date: "2026-09-14",
        source: "https://steamcommunity.com/groups/steam_hardware/announcements/detail/692020124159311888"
      },
      disponibilite: {
        statut: "disponible",
        libelle: "Achat par e-mail pour les inscrits : réservations attribuées par tirage au sort le 17/09/2026, e-mails d'achat à partir du 18/09/2026 (72 h pour finaliser) ; les nouveaux inscrits rejoignent la file d'attente",
        date: "2026-11-13",
        source: "https://store.steampowered.com/hardware/steamframe"
      },
      accessoires: [
        {
          nom: "PSU — bloc d'alimentation 45 W avec câble de 2,5 m",
          compatibilite: "Accessoire d'origine Steam Frame, 39 € ; ajouté au panier uniquement pendant l'achat du casque (acheteurs avec e-mail d'achat)",
          source: "https://steamcommunity.com/groups/steam_hardware/announcements/detail/692020124159311888"
        },
        {
          nom: "Kit d'accessoires ergonomiques",
          compatibilite: "Accessoire d'origine Steam Frame, 69 € : 2 sangles de poignée / portes-batteries de contrôleur, 1 sangle supérieure de casque, 1 bloqueur de lumière allongé",
          source: "https://steamcommunity.com/groups/steam_hardware/announcements/detail/692020124159311888"
        },
        {
          nom: "Kit de remplacement des accessoires",
          compatibilite: "Accessoire d'origine Steam Frame, 59 € : 1 joint facial, 1 coussin de tête, 1 bloqueur de lumière standard",
          source: "https://steamcommunity.com/groups/steam_hardware/announcements/detail/692020124159311888"
        },
        {
          nom: "Steam Controller",
          compatibilite: "Suivi du contrôleur par les caméras du casque grâce à ses diodes infrarouges",
          source: "https://store.steampowered.com/hardware/steamframe"
        }
      ],
      bundles: [
        {
          nom: "Half-Life: Alyx inclus",
          contenu: "Un exemplaire du jeu à activer dans les paramètres du Steam Frame ; un seul exemplaire par appareil, non cumulé si le jeu figure déjà dans la bibliothèque",
          source: "https://store.steampowered.com/hardware/steamframe"
        }
      ],
      usages: [
        "Steamer toute la bibliothèque Steam PC en VR sans fil via l'adaptateur Wi-Fi 6E inclus",
        "Jouer aux jeux non-VR du catalogue Steam sur un écran virtuel géant",
        "Jouer en autonome sur SteamOS 3 pour les titres compatibles",
        "Découvrir Half-Life: Alyx, offert avec le casque",
        "Ajuster l'écart pupillaire de 60 à 70 mm pour un confort de visée personnalisé",
        "Porter le casque par-dessus des lunettes jusqu'à 140 mm de large",
        "Jouer dans une pièce sombre grâce aux illuminateurs infrarouges",
        "Remplacer la sangle transversale pour une solution de portage alternative",
        "Étendre les capacités du casque via le port d'extension (MIPI, PCIe)",
        "Suivre la progression dans l'image en VR grâce à 2 caméras intérieures",
        "Streamer en Wi-Fi 7 sur le réseau domestique",
        "Charger le casque en USB-C pendant une session prolongée",
        "Utiliser les contrôleurs 6DoF avec joysticks TMR capacitifs pour la précision de visée",
        "Partager la casque entre plusieurs visages avec le kit de remplacement du joint facial"
      ],
      medias: {
        video: {
          id: "yD-QHvRv-q4",
          titre: "Steam Frame: Official Overview and Quick Start Guide",
          chaine: "Valve",
          url: "https://www.youtube.com/watch?v=yD-QHvRv-q4"
        },
        images: [
          {
            fichier: "img/steam-frame-1.jpg",
            alt: "Steam Frame de Valve, vue de face",
            licence: "CC BY 4.0",
            auteur: "Davepape",
            attribution: "Photo : Davepape — licence CC BY 4.0 (https://creativecommons.org/licenses/by/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Steam_Frame_front_1.jpg"
          },
          {
            fichier: "img/steam-frame-2.jpg",
            alt: "Steam Frame de Valve, vue de profil",
            licence: "CC BY 4.0",
            auteur: "Davepape",
            attribution: "Photo : Davepape — licence CC BY 4.0 (https://creativecommons.org/licenses/by/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Steam_Frame_side.jpg"
          },
          {
            fichier: "img/steam-frame-3.jpg",
            alt: "Steam Frame de Valve avec ses deux contrôleurs",
            licence: "CC BY 4.0",
            auteur: "Davepape",
            attribution: "Photo : Davepape — licence CC BY 4.0 (https://creativecommons.org/licenses/by/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Steam_Frame_with_controllers.jpg"
          },
          {
            fichier: "img/steam-frame-4.jpg",
            alt: "Adaptateur sans fil du Steam Frame",
            licence: "CC BY 4.0",
            auteur: "Davepape",
            attribution: "Photo : Davepape — licence CC BY 4.0 (https://creativecommons.org/licenses/by/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Steam_Frame_wifi_adapter.jpg"
          }
        ]
      },
      sourcesVerifiees: [
        { libelle: "Annonce Valve « Steam Frame is here! » (14/09/2026) : lancement, prix TTC, accessoires d'origine", url: "https://steamcommunity.com/groups/steam_hardware/announcements/detail/692020124159311888", date: "2026-11-13" },
        { libelle: "Fiche produit officielle Valve (caractéristiques techniques, FAQ réservations)", url: "https://store.steampowered.com/hardware/steamframe", date: "2026-11-13" },
        { libelle: "Store Steam — date de sortie du Steam Frame", url: "https://store.steampowered.com/app/4165890/Steam_Frame/", date: "2026-11-13" }
      ],
      manquants: [
        "Référence/SKU non publiée par Valve"
      ]
    },
    {
      id: "valve-steam-controller",
      marque: "Valve",
      modele: "Steam Controller",
      rayon: "gaming",
      annee: 2026,
      dateSortie: "2026-05-04",
      sourceAnnee: {
        url: "https://store.steampowered.com/app/4165870/Steam_Controller/",
        date: "2026-11-13"
      },
      sourceFiche: "https://store.steampowered.com/hardware/steamcontroller",
      ficheFabricant: "https://store.steampowered.com/hardware/steamcontroller",
      description: "Manette de Valve conçue pour Steam, configurable avec Steam Input : deux pavés tactiles haptiques, deux joysticks magnétiques TMR capacitifs, un gyroscope 6 axes et le Grip Sense (détection de la prise en main). Le Puck inclus sert de récepteur sans fil 2,4 GHz (jusqu'à 4 manettes) et de station de recharge USB-C. Ses diodes infrarouges permettent aussi aux caméras du Steam Frame de suivre la manette en VR.",
      variantes: [
        {
          groupe: "Modèle",
          options: [
            { libelle: "Steam Controller (Puck inclus)", prix: 99, dispo: false, lienOfficiel: { url: "https://store.steampowered.com/hardware/steamcontroller", precision: "Page produit officielle Valve (achat par réservation)", verifie: "2026-11-13" } }
          ]
        }
      ],
      caracteristiques: [
        { libelle: "Boutons", valeur: "A/B/X/Y, croix directionnelle, boutons Affichage et Menu, boutons Steam et Accès rapide, 4 boutons de poignée affectables" },
        { libelle: "Gâchettes", valeur: "Gâchettes analogiques gauche et droite + gâchettes hautes gauche et droite" },
        { libelle: "Joysticks", valeur: "2 joysticks magnétiques (TMR) de grande taille, à retour tactile capacitif" },
        { libelle: "Pavés tactiles", valeur: "2 pavés carrés de 34,5 mm à retour haptique, avec sensibilité à la pression pour régler la force des clics" },
        { libelle: "Retour haptique", valeur: "4 moteurs : 2 LRA par pavé tactile (haute définition) + 2 LRA haute puissance dans les poignées" },
        { libelle: "Gyroscope", valeur: "IMU 6 axes (visée gyro pour la visée précise et le contrôle de la caméra)" },
        { libelle: "Grip Sense", valeur: "2 zones capacitives à l'arrière des poignées pour détecter la prise en main" },
        { libelle: "Sans fil", valeur: "Puck (récepteur 2,4 GHz inclus) : latence de bout en bout d'environ 8 ms, interrogation 4 ms mesurée à 5 m ; jusqu'à 4 manettes par Puck" },
        { libelle: "Bluetooth", valeur: "Bluetooth 4.2 minimum, 5.0 ou supérieur recommandé" },
        { libelle: "Filaire", valeur: "Connexion par câble via USB-C" },
        { libelle: "Batterie", valeur: "Batterie Li-ion de 8,39 Wh ; plus de 35 heures de jeu (durée réduite pour le suivi Steam Frame)" },
        { libelle: "Recharge", valeur: "Recharge par la base du Puck, connecteur USB-C" },
        { libelle: "VR", valeur: "Diodes infrarouges : la manette est suivie par les caméras du Steam Frame" },
        { libelle: "Dimensions", valeur: "Manette : 111 × 159 × 57 mm ; Puck : 50 × 28 × 9 mm" },
        { libelle: "Poids", valeur: "Manette 292 g ; Puck 16 g" }
      ],
      prix: {
        montant: 99,
        devise: "EUR",
        marche: "France (Union européenne), TTC",
        libelle: "Prix public affiché sur le Store Steam (Puck inclus)",
        date: "2026-11-13",
        source: "https://store.steampowered.com/app/4165870/Steam_Controller/"
      },
      disponibilite: {
        statut: "disponible",
        libelle: "Rupture de stock : vente par réservation uniquement. Valve estime les fenêtres de commande selon la date de réservation (septembre 2026, décembre 2026 ou 2027) ; les nouvelles réservations indiquent 2027",
        date: "2026-11-13",
        source: "https://steamcommunity.com/groups/steam_hardware/announcements/detail/697641379212297810"
      },
      accessoires: [
        {
          nom: "Puck du Steam Controller",
          compatibilite: "Inclus : récepteur sans fil 2,4 GHz pour jusqu'à 4 manettes et station de recharge USB-C",
          source: "https://store.steampowered.com/hardware/steamcontroller"
        },
        {
          nom: "Steam Machine",
          compatibilite: "S'apparie directement sans Puck grâce à l'adaptateur sans fil 2,4 GHz intégré à la console",
          source: "https://store.steampowered.com/hardware/steammachine"
        },
        {
          nom: "Steam Frame",
          compatibilite: "Suivi de la manette par les caméras du casque grâce à ses diodes infrarouges",
          source: "https://store.steampowered.com/hardware/steamframe"
        }
      ],
      bundles: [],
      usages: [
        "Jouer à tous les jeux Steam, y compris les titres pensés pour la souris et le clavier",
        "Viser avec précision grâce au pavé tactile haptique et à la visée gyro",
        "Jouer sans fil avec une latence d'environ 8 ms via le Puck inclus",
        "Recharger la manette en la posant sur le Puck branché en USB-C",
        "Appairer jusqu'à 4 Steam Controllers sur un seul Puck pour jouer à plusieurs",
        "Reconfigurer chaque entrée avec Steam Input selon le jeu",
        "Remplacer la manette du canapé pour le Steam Deck en station d'accueil",
        "Appairer la manette sans Puck sur le Steam Machine (adaptateur intégré)",
        "Jouer en VR : les caméras du Steam Frame suivent la manette grâce aux diodes infrarouges",
        "Détecter la prise en main avec Grip Sense pour des profils automatiques",
        "Alterner Bluetooth et filaire selon la situation",
        "Profiter de plus de 35 heures de jeu par charge"
      ],
      medias: {
        video: {
          id: "a55UIaiTE-A",
          titre: "Steam Controller: Official Overview and Quick Start Guide",
          chaine: "Valve",
          url: "https://www.youtube.com/watch?v=a55UIaiTE-A"
        },
        images: [
          {
            fichier: "img/steam-controller-1.jpg",
            alt: "Steam Controller 2026 de Valve, vue générale",
            licence: "CC BY-SA 4.0",
            auteur: "PacoCity3124",
            attribution: "Photo : PacoCity3124 — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Steam_Controller_(2026)_(cropped).jpg"
          },
          {
            fichier: "img/steam-controller-2.jpg",
            alt: "Steam Controller 2026 de Valve accompagné de son Puck",
            licence: "CC BY-SA 4.0",
            auteur: "Zenphia1",
            attribution: "Photo : Zenphia1 — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Steam_Controller_with_Puck.jpg"
          },
          {
            fichier: "img/steam-controller-3.jpg",
            alt: "Steam Controller 2026 de Valve, autre angle",
            licence: "CC BY-SA 4.0",
            auteur: "PacoCity3124",
            attribution: "Photo : PacoCity3124 — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Steam-controllers.jpg"
          }
        ]
      },
      sourcesVerifiees: [
        { libelle: "Store Steam — fiche Steam Controller (date de sortie 04/05/2026, prix 99 €)", url: "https://store.steampowered.com/app/4165870/Steam_Controller/", date: "2026-11-13" },
        { libelle: "Fiche produit officielle Valve (caractéristiques techniques complètes)", url: "https://store.steampowered.com/hardware/steamcontroller", date: "2026-11-13" },
        { libelle: "Annonce Valve « Steam Controller: Reservations update » (18/06/2026) : réservations et fenêtres de commande", url: "https://steamcommunity.com/groups/steam_hardware/announcements/detail/697641379212297810", date: "2026-11-13" }
      ],
      manquants: [
        "Référence/SKU non publiée par Valve",
        "Contenu de la boîte non confirmé sur les sources officielles consultées (le Puck est bien inclus, confirmé par la fiche produit)"
      ]
    },
    {
      id: "nintendo-switch-2",
      marque: "Nintendo",
      modele: "Nintendo Switch 2",
      rayon: "gaming",
      annee: 2025,
      dateSortie: "2025-06-05",
      sourceAnnee: {
        url: "https://www.nintendo.com/fr-fr/Hardware/Nintendo-Switch-2/Nintendo-Switch-2-2785301.html",
        date: "2026-11-13"
      },
      sourceFiche: "https://www.nintendo.com/fr-fr/Hardware/Nintendo-Switch-2/Nintendo-Switch-2-Caracteristiques-2785627.html",
      ficheFabricant: "https://www.nintendo.com/fr-fr/Hardware/Nintendo-Switch-2/Nintendo-Switch-2-Caracteristiques-2785627.html",
      description: "Console hybride de Nintendo, successeur de la Nintendo Switch : écran LCD 7,9\" 1920 × 1080 à large gamme de couleurs avec HDR10 et VRR jusqu'à 120 Hz, 256 Go de stockage UFS, sorties TV en 4K 60 images/s (HDR10), Joy-Con 2 aimantés avec capteur de souris, et deux variantes de console : batterie remplaçable par l'utilisateur ou batterie intégrée non remplaçable. Elle lance les cartes de jeu Nintendo Switch 2 et Nintendo Switch.",
      variantes: [
        {
          groupe: "Édition",
          options: [
            { libelle: "Console seule", prix: null, dispo: true, lienOfficiel: { url: "https://www.nintendo.com/fr-fr/Hardware/Nintendo-Switch-2/Nintendo-Switch-2-2785301.html", precision: "Page produit officielle Nintendo France du modèle exact ; la boutique en ligne Nintendo (store.nintendo.com) n'est pas vérifiable (file d'attente anti-bot) et Nintendo ne publie pas d'URL d'achat directe en France", verifie: "2026-11-13" } },
            { libelle: "Pack Mario Kart World (code de téléchargement inclus)", prix: null, dispo: true, lienOfficiel: null }
          ]
        },
        {
          groupe: "Batterie",
          options: [
            { libelle: "Batterie remplaçable par l'utilisateur (modèle 2026)", prix: null, dispo: true },
            { libelle: "Batterie non remplaçable (modèle de lancement)", prix: null, dispo: true }
          ]
        }
      ],
      caracteristiques: [
        { libelle: "Écran", valeur: "Tactile capacitif 7,9 pouces, 1920 × 1080, LCD à large gamme de couleurs, HDR10, VRR jusqu'à 120 Hz" },
        { libelle: "Processeur", valeur: "Processeur personnalisé fabriqué par NVIDIA" },
        { libelle: "Stockage", valeur: "256 Go (UFS) ; port carte microSD Express (jusqu'à 2 To)" },
        { libelle: "Mode TV", valeur: "Sortie 3840 × 2160 à 60 images/s avec HDR10 ; 120 images/s pris en charge en 1920 × 1080 et 2560 × 1440" },
        { libelle: "Réseau", valeur: "Wi-Fi 6 et Bluetooth ; Ethernet possible via le port LAN de la station d'accueil" },
        { libelle: "Batterie", valeur: "Lithium-ion 5172 mAh (batterie remplaçable par l'utilisateur) ou 5220 mAh (batterie non remplaçable)" },
        { libelle: "Joy-Con 2", valeur: "Batterie 500 mAh chacun ; accéléromètre, gyroscope et capteur de souris intégrés ; Vibrations HD 2" },
        { libelle: "Console", valeur: "Capteur de luminosité ; dimensions environ 116 × 272 × 13,9 mm avec Joy-Con 2 attachés" },
        { libelle: "Connectique console", valeur: "2 ports USB Type-C ; prise audio mini-jack stéréo 3,5 mm 4 pôles (norme CTIA) ; port de carte de jeu (Nintendo Switch 2 et Nintendo Switch)" },
        { libelle: "Audio", valeur: "Haut-parleurs stéréo ; microphone intégré avec suppression du bruit et de l'écho ; sortie PCM linéaire 5.1" },
        { libelle: "Station d'accueil", valeur: "Environ 115 × 201 × 51,2 mm, ~383 g ; 2 ports USB 2.0, port HDMI, port Ethernet ; connecteur de console" },
        { libelle: "Température de fonctionnement", valeur: "5 à 35 °C, humidité 20 à 80 %" }
      ],
      prix: null,
      disponibilite: {
        statut: "disponible",
        libelle: "Console en vente depuis le 05/06/2025 (sortie officielle), actuellement commercialisée",
        date: "2026-11-13",
        source: "https://www.nintendo.com/fr-fr/Hardware/Nintendo-Switch-2/Nintendo-Switch-2-2785301.html"
      },
      accessoires: [
        {
          nom: "Joy-Con 2",
          compatibilite: "Manettes incluses avec la console ; vendues aussi séparément à l'unité (gauche/droite)",
          source: "https://www.nintendo.com/fr-fr/Hardware/Nintendo-Switch-2/Nintendo-Switch-2-Caracteristiques-2785627.html"
        },
        {
          nom: "Station d'accueil (dock) Nintendo Switch 2",
          compatibilite: "Sortie TV jusqu'à 4K 60 images/s ; 2 ports USB 2.0, HDMI, Ethernet",
          source: "https://www.nintendo.com/fr-fr/Hardware/Nintendo-Switch-2/Nintendo-Switch-2-Caracteristiques-2785627.html"
        },
        {
          nom: "Cartes microSD Express",
          compatibilite: "Extension de stockage jusqu'à 2 To (microSD Express uniquement)",
          source: "https://www.nintendo.com/fr-fr/Hardware/Nintendo-Switch-2/Nintendo-Switch-2-Caracteristiques-2785627.html"
        },
        {
          nom: "Ensembles de remplacement de batterie",
          compatibilite: "Pour la variante à batterie remplaçable : à venir à l'achat sur le Nintendo Store",
          source: "https://www.nintendo.com/fr-fr/Hardware/Nintendo-Switch-2/Nintendo-Switch-2-Caracteristiques-2785627.html"
        }
      ],
      bundles: [
        {
          nom: "Pack Mario Kart World",
          contenu: "Console Nintendo Switch 2 avec code de téléchargement de Mario Kart World (prix du pack au lancement : 509,99 €)",
          source: "https://fr.wikipedia.org/wiki/Nintendo_Switch_2"
        }
      ],
      usages: [
        "Jouer sur la télévision en 4K 60 images/s avec HDR10 via la station d'accueil",
        "Jouer en nomade sur l'écran 7,9\" 1080p avec VRR jusqu'à 120 Hz",
        "Jouer aux cartes de jeu Nintendo Switch 2 et Nintendo Switch (rétrocompatibilité)",
        "Utiliser les Joy-Con 2 comme souris pour des jeux de stratégie ou de simulation",
        "Étendre le stockage avec une carte microSD Express jusqu'à 2 To",
        "Chat vocal en ligne avec le microphone intégré à suppression de bruit",
        "Brancher deux accessoires USB-C (charge + station d'accueil portable)",
        "Écouter en jeu via la prise mini-jack 3,5 mm ou les haut-parleurs stéréo",
        "Bénéficier des Vibrations HD 2 pour un retour tactile fin dans les jeux compatibles",
        "Remplacer soi-même la batterie sur la variante 2026 à batterie remplaçable",
        "Choisir le pack avec Mario Kart World pour démarrer avec un jeu de suite",
        "Jouer en ligne grâce au Wi-Fi 6 ou au port Ethernet du dock",
        "Emporter la console et son dock (383 g) en déplacement",
        "Suivre la luminosité ambiante avec le capteur intégré pour ajuster l'écran"
      ],
      medias: {
        video: {
          id: "sX24TZZPHhI",
          titre: "Nintendo Switch 2 – Bande-annonce de présentation",
          chaine: "Nintendo France",
          url: "https://www.youtube.com/watch?v=sX24TZZPHhI"
        },
        images: [
          {
            fichier: "img/switch-2-1.jpg",
            alt: "Nintendo Switch 2 posée dans sa station d'accueil, vue de face",
            licence: "CC BY-SA 4.0",
            auteur: "Crisco 1492",
            attribution: "Photo : Crisco 1492 — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Nintendo_Switch_2_in_Docking_Console.jpg"
          },
          {
            fichier: "img/switch-2-2.png",
            alt: "Nintendo Switch 2 en mode portable, Joy-Con 2 attachés",
            licence: "CC0",
            auteur: "AOMAF2024",
            attribution: "Photo : AOMAF2024 — domaine public (CC0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Nintendo_Switch_2_console_in_handheld_mode.png"
          },
          {
            fichier: "img/switch-2-3.png",
            alt: "Nintendo Switch 2 vue de dessus",
            licence: "CC BY 4.0",
            auteur: "PantheraLeo1359531",
            attribution: "Photo : PantheraLeo1359531 — licence CC BY 4.0 (https://creativecommons.org/licenses/by/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Nintendo_Switch_2_von_oben_20250605_HOF4734-HDR_RAW-Export.png"
          },
          {
            fichier: "img/switch-2-4.png",
            alt: "Nintendo Switch 2 vue de l'arrière",
            licence: "CC BY 4.0",
            auteur: "PantheraLeo1359531",
            attribution: "Photo : PantheraLeo1359531 — licence CC BY 4.0 (https://creativecommons.org/licenses/by/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Nintendo_Switch_2-Konsole_von_hinten_20250605_HOF4680-HDR_RAW-Export.png"
          }
        ]
      },
      sourcesVerifiees: [
        { libelle: "Page produit Nintendo France officielle (sortie le 05/06/2025)", url: "https://www.nintendo.com/fr-fr/Hardware/Nintendo-Switch-2/Nintendo-Switch-2-2785301.html", date: "2026-11-13" },
        { libelle: "Page caractéristiques officielle Nintendo France (specs complètes, deux variantes de batterie)", url: "https://www.nintendo.com/fr-fr/Hardware/Nintendo-Switch-2/Nintendo-Switch-2-Caracteristiques-2785627.html", date: "2026-11-13" },
        { libelle: "Wikipédia FR « Nintendo Switch 2 » (prix de lancement 469,99 € / 509,99 € pack MKW, sourcés)", url: "https://fr.wikipedia.org/wiki/Nintendo_Switch_2", date: "2026-11-13" }
      ],
      manquants: [
        "Prix public officiel actuel non re-vérifiable le 13/11/2026 (pages tarifaires non statiques) : prix de lancement 469,99 € console seule et 509,99 € pack Mario Kart World (vérifiés via Wikipédia FR/BFM TV), puis hausse de prix annoncée par Nintendo en 2026 — chiffre actuel à confirmer",
        "Référence/SKU non confirmée",
        "Contenu de la boîte exact non confirmé sur les sources officielles consultées",
        "Lien officiel précis introuvable pour le pack Mario Kart World et pour les deux variantes de batterie (aucune page officielle dédiée ; boutique en ligne Nintendo, store.nintendo.com, non vérifiable : file d'attente anti-bot)"
      ]
    },
    {
      id: "sony-ps5-pro",
      marque: "Sony",
      modele: "PlayStation 5 Pro",
      rayon: "gaming",
      annee: 2024,
      dateSortie: "2024-11-07",
      sourceAnnee: {
        url: "https://fr.wikipedia.org/wiki/PlayStation_5",
        date: "2026-11-13"
      },
      sourceFiche: "https://www.playstation.com/fr-fr/ps5/ps5-pro/",
      ficheFabricant: "https://www.playstation.com/fr-fr/ps5/ps5-pro/",
      description: "Console de salon Sony à hautes performances, lancée le 7 novembre 2024 : SoC gravé en 4 nm, processeur graphique RDNA3 de 60 CU pour 16,7 TFLOPS, ray-tracing amélioré, technologie de mise à l'échelle PSSR, 16 Go de GDDR6 plus 2 Go de DDR5 et un SSD NVMe de 2 To. L'édition sans lecteur de disque joue aux jeux PlayStation 5 et PlayStation 4 avec un rendu renforcé sur les titres « PS5 Pro Enhanced ».",
      variantes: [
        {
          groupe: "Édition",
          options: [
            { libelle: "Sans lecteur de disque", prix: null, dispo: true, lienOfficiel: { url: "https://direct.playstation.com/fr-fr/buy-consoles/playstation5-pro-console-2-tb", precision: "URL d'achat directe par configuration publiée par Sony sur la page « PS5 Pro — Buy now » (CTA « Acheter sur PS Direct ») ; PS Direct France, éditeur 2 To sans lecteur", verifie: "2026-11-13" } }
          ]
        }
      ],
      caracteristiques: [
        { libelle: "Processeur", valeur: "SoC AMD Ryzen Zen 2 8 cœurs / 16 threads, 3,8 GHz" },
        { libelle: "Processeur graphique", valeur: "AMD RDNA3, 60 CU cadencés jusqu'à 2,35 GHz (fréquence variable), 16,7 TFLOPS ; ray-tracing matériel amélioré" },
        { libelle: "Mémoire", valeur: "16 Go GDDR6 (bande passante 576 Go/s) + 2 Go DDR5" },
        { libelle: "Gravure", valeur: "4 nm" },
        { libelle: "Mise à l'échelle", valeur: "PSSR (PlayStation Spectral Super Resolution)" },
        { libelle: "Stockage interne", valeur: "SSD NVMe PCIe 4.0 de 2 To" },
        { libelle: "Audio", valeur: "Tempest 3D AudioTech (son multicanal)" },
        { libelle: "Connectivité", valeur: "Wi-Fi 7" },
        { libelle: "Lecteur de disque", valeur: "Édition sans lecteur de disque" }
      ],
      prix: null,
      disponibilite: {
        statut: "disponible",
        libelle: "Console en vente depuis le 07/11/2024, actuellement commercialisée par Sony",
        date: "2026-11-13",
        source: "https://www.playstation.com/fr-fr/ps5/ps5-pro/"
      },
      accessoires: [],
      bundles: [],
      usages: [
        "Jouer aux jeux PS5 et PS4 avec le catalogue rétrocompatible",
        "Profiter des titres « PS5 Pro Enhanced » optimisés pour la console",
        "Gaming en 4K avec le ray-tracing renforcé dans les jeux compatibles",
        "Bénéficier de la mise à l'échelle PSSR pour des images plus nettes",
        "Installer une grande bibliothèque sur le SSD NVMe de 2 To",
        "Jouer en multijoueur en ligne sur le réseau PlayStation Network",
        "Découvrir le son spatial 3D Tempest dans les jeux compatibles",
        "Hériter de la bibliothèque numérique PlayStation 4 d'un précédent compte",
        "Streamer ou partager ses parties depuis la console",
        "Remplacer une PlayStation 5 standard par une machine plus rapide sans changer d'écosystème"
      ],
      medias: {
        video: {
          id: "6HaRMiTfvks",
          titre: "PlayStation 5 Pro Console - Reveal Trailer",
          chaine: "PlayStation",
          url: "https://www.youtube.com/watch?v=6HaRMiTfvks"
        },
        images: [
          {
            fichier: "img/ps5pro-1.jpg",
            alt: "PlayStation 5 Pro, vue de la console sans lecteur de disque",
            licence: "CC BY 3.0",
            auteur: "BeatEmUps",
            attribution: "Photo : BeatEmUps — licence CC BY 3.0 (https://creativecommons.org/licenses/by/3.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:PlayStation_5_Pro_no_disc_drive.jpg"
          }
        ]
      },
      sourcesVerifiees: [
        { libelle: "Wikipédia FR « PlayStation 5 » (PS5 Pro annoncée le 10/09/2024, sortie mondiale le 07/11/2024 ; tableau comparatif PS5 Slim / PS5 Pro)", url: "https://fr.wikipedia.org/wiki/PlayStation_5", date: "2026-11-13" },
        { libelle: "Page Sony France « PS5 Pro — Buy now » (CTA « Acheter sur PS Direct » pointant vers la fiche PS Direct par configuration, 2 To sans lecteur)", url: "https://www.playstation.com/fr-fr/ps5/ps5-pro/buy-now/", date: "2026-11-13" },
        { libelle: "Page Sony France officielle (PSSR, ray-tracing, performances)", url: "https://www.playstation.com/fr-fr/ps5/ps5-pro/", date: "2026-11-13" }
      ],
      manquants: [
        "Prix public officiel actuel non vérifiable sur les sources consultées (page Sony non statique) : aucun montant affiché par prudence",
        "Deux photographies sous licence libre supplémentaires manquantes (1 photo Commons vérifiée disponible)",
        "Référence/SKU (CFI-…) non confirmée",
        "Caractéristiques complémentaires (poids exact, connectique détaillée, ventirad) à confirmer sur une source fabricant lisible"
      ]
    },
    {
      id: "valve-steam-deck-oled",
      marque: "Valve",
      modele: "Steam Deck OLED",
      rayon: "gaming",
      annee: 2023,
      dateSortie: "2023-11-16",
      sourceAnnee: {
        url: "https://en.wikipedia.org/wiki/Steam_Deck",
        date: "2026-11-13"
      },
      sourceFiche: "https://www.steamdeck.com/fr/",
      ficheFabricant: "https://www.steamdeck.com/fr/",
      description: "Console PC portable de Valve lancée le 16 novembre 2023 en édition OLED : écran tactile OLED HDR 1280 × 800 de 7,4\" jusqu'à 90 Hz, APU gravé en 6 nm, 16 Go de RAM, Wi-Fi 6E et batterie de 50 Wh pour 3 à 12 heures de jeu. Elle exécute SteamOS 3 et joue à la bibliothèque Steam en natif et via Proton. La version 1 To ajoute un verre antireflet de qualité supérieure et un étui à doublure amovible.",
      variantes: [
        {
          groupe: "Stockage",
          options: [
            { libelle: "512 Go", prix: 779, dispo: true, lienOfficiel: { url: "https://store.steampowered.com/hardware/steamdeck", precision: "Configuration OLED (512 Go ou 1 To) sélectionnée sur la page officielle Steam Deck (le fabricant ne fournit pas d'URL distincte par configuration)", verifie: "2026-11-13" } },
            { libelle: "1 To (verre antireflet)", prix: 919, dispo: true, lienOfficiel: { url: "https://store.steampowered.com/hardware/steamdeck", precision: "Configuration OLED (512 Go ou 1 To) sélectionnée sur la page officielle Steam Deck (le fabricant ne fournit pas d'URL distincte par configuration)", verifie: "2026-11-13" } }
          ]
        }
      ],
      caracteristiques: [
        { libelle: "Écran", valeur: "OLED HDR 1280 × 800 px, 7,4\" de diagonale, jusqu'à 90 Hz" },
        { libelle: "APU", valeur: "APU de 6 nm" },
        { libelle: "Mémoire vive", valeur: "16 Go LPDDR5" },
        { libelle: "Stockage", valeur: "SSD NVMe 512 Go ou 1 To" },
        { libelle: "Verre (1 To)", valeur: "Verre avec traitement antireflet de qualité supérieure (modèle 1 To uniquement)" },
        { libelle: "Réseau", valeur: "Wi-Fi 6E" },
        { libelle: "Batterie", valeur: "50 Wh, 3 à 12 heures d'autonomie selon le contenu" },
        { libelle: "Alimentation", valeur: "Alimentation 45 W avec câble de 2,5 m" },
        { libelle: "Système d'exploitation", valeur: "SteamOS 3" }
      ],
      contenuBoite: "Étui de transport, alimentation 45 W avec câble de 2,5 m, bundle de profil Steam (le modèle 1 To a un étui avec doublure amovible, une vidéo de démarrage exclusive et un thème de clavier virtuel exclusif)",
      prix: {
        montant: 779,
        devise: "EUR",
        marche: "France (Union européenne), TTC",
        libelle: "Modèle 512 Go, prix en vigueur depuis le 27/05/2026 (TVAC incluse)",
        date: "2026-11-13",
        source: "https://steamcommunity.com/groups/steam_hardware/announcements/detail/672869045073085539"
      },
      disponibilite: {
        statut: "disponible",
        libelle: "De retour en stock depuis le 27/05/2026, après une période de rupture",
        date: "2026-11-13",
        source: "https://steamcommunity.com/groups/steam_hardware/announcements/detail/672869045073085539"
      },
      accessoires: [],
      bundles: [],
      usages: [
        "Jouer à la bibliothèque Steam en déplacement sur un écran OLED 90 Hz",
        "Steamer ou jouer en natif à des jeux Windows via Proton",
        "Jouer 3 à 12 heures par charge selon les jeux",
        "Connecter la console à une télévision ou un moniteur externe",
        "Profiler du Wi-Fi 6E pour les téléchargements et le streaming rapide",
        "Recharger avec l'alimentation 45 W fournie, câble long de 2,5 m",
        "Transporter la console dans l'étui fourni",
        "Jouer à des jeux rétro via les émulateurs de la communauté",
        "Utiliser le bureau KDE Plasma pour du travail léger hors jeu",
        "Passer du Steam Deck au Steam Machine ou à un PC sans perdre sa bibliothèque",
        "Choisir le modèle 1 To pour le verre antireflet et la double capacité",
        "Streamer depuis le canapé vers le Steam Deck via Remote Play"
      ],
      medias: {
        video: {
          id: "_vTsZMvjJ-A",
          titre: "Introducing Steam Deck OLED - Now Available",
          chaine: "Valve",
          url: "https://www.youtube.com/watch?v=_vTsZMvjJ-A"
        },
        images: []
      },
      sourcesVerifiees: [
        { libelle: "Annonce Valve « Steam Deck back in stock, with updated pricing » (27/05/2026) : 512 Go 779 €, 1 To 919 € TTC", url: "https://steamcommunity.com/groups/steam_hardware/announcements/detail/672869045073085539", date: "2026-11-13" },
        { libelle: "Site officiel Steam Deck FR (caractéristiques OLED, contenu fourni)", url: "https://www.steamdeck.com/fr/", date: "2026-11-13" },
        { libelle: "Wikipédia EN « Steam Deck » (sortie OLED le 16 novembre 2023 ; RAM 16 Go LPDDR5)", url: "https://en.wikipedia.org/wiki/Steam_Deck", date: "2026-11-13" }
      ],
      manquants: [
        "Aucune photographie du modèle OLED sous licence libre vérifiée (les photos Commons disponibles montrent le modèle LCD) : 3 images requises pour une fiche complète",
        "Référence/SKU non publiée par Valve"
      ]
    },
    {
      id: "samsung-galaxy-s20-5g",
      marque: "Samsung",
      modele: "Galaxy S20 5G",
      rayon: "smartphones",
      annee: 2020,
      dateSortie: "2020-03-06",
      sourceAnnee: {
        url: "https://news.samsung.com/us/introducing-samsung-galaxy-s20-5g-unpacked2020",
        date: "2026-11-14"
      },
      sourceFiche: "https://news.samsung.com/us/introducing-samsung-galaxy-s20-5g-unpacked2020",
      ficheFabricant: "https://www.samsung.com/us/smartphones/galaxy-s20/specs/",
      description: "Smartphone haut de gamme Samsung annoncé le 11 février 2020 et commercialisé à partir du 6 mars 2020 aux États-Unis, le 13 mars 2020 en France. Le Galaxy S20 5G associe un écran Dynamic AMOLED 2X de 6,2 pouces à 120 Hz, un processeur 7 nm octa-cœur, 12 Go de mémoire vive LPDDR5, 128 Go de stockage extensible par microSD et une batterie de 4 000 mAh. Son dos en verre abrite un triple appareil photo 12 + 64 + 12 Mpx, et le châssis est certifié IP68.",
      variantes: [
        {
          groupe: "Modèle",
          options: [
            { libelle: "128 Go, 5G", prix: 999.99, dispo: false, lienOfficiel: { url: "https://news.samsung.com/us/introducing-samsung-galaxy-s20-5g-unpacked2020", precision: "Prix de lancement du Galaxy S20 5G 128 Go annoncé par Samsung États-Unis", verifie: "2026-11-14" } }
          ]
        }
      ],
      caracteristiques: [
        { libelle: "Écran", valeur: "6,2 pouces Quad HD+ Dynamic AMOLED 2X (563 ppp), HDR10+, 120 Hz" },
        { libelle: "Processeur", valeur: "7 nm 64 bits octa-cœur, jusqu'à 2,7 GHz (selon pays et opérateur)" },
        { libelle: "Mémoire vive", valeur: "12 Go LPDDR5" },
        { libelle: "Stockage", valeur: "128 Go interne + emplacement microSD jusqu'à 1 To" },
        { libelle: "Appareil photo arrière", valeur: "12 Mpx grand-angle + 64 Mpx téléobjectif + 12 Mpx ultra grand-angle" },
        { libelle: "Appareil photo avant", valeur: "10 Mpx" },
        { libelle: "Batterie", valeur: "4 000 mAh (valeur typique)" },
        { libelle: "Recharge", valeur: "Charge sans fil améliorée" },
        { libelle: "Résistance", valeur: "IP68" },
        { libelle: "Réseau", valeur: "5G" },
        { libelle: "Dimensions", valeur: "151,7 × 69,1 × 7,9 mm" },
        { libelle: "Poids", valeur: "163 g" }
      ],
      prix: {
        montant: 999.99,
        devise: "USD",
        marche: "États-Unis, prix de lancement estimé",
        libelle: "Galaxy S20 5G 128 Go",
        date: "2020-02-11",
        source: "https://news.samsung.com/us/introducing-samsung-galaxy-s20-5g-unpacked2020"
      },
      disponibilite: {
        statut: "archive",
        libelle: "Commercialisé du 6 mars 2020 au 13 mars 2020 selon les marchés ; modèle aujourd'hui retiré du catalogue Samsung",
        date: "2026-11-14",
        source: "https://news.samsung.com/us/introducing-samsung-galaxy-s20-5g-unpacked2020"
      },
      accessoires: [
        {
          nom: "Carte microSD jusqu'à 1 To",
          compatibilite: "Emplacement microSD dédié, carte vendue séparément",
          source: "https://news.samsung.com/us/introducing-samsung-galaxy-s20-5g-unpacked2020"
        }
      ],
      bundles: [],
      usages: [
        "Faire défiler les applications et jouer sur un écran 120 Hz",
        "Télécharger des fichiers volumineux en 5G sur les réseaux compatibles",
        "Étendre le stockage de 128 Go avec une carte microSD jusqu'à 1 To",
        "Photographier un paysage avec l'ultra grand-angle de 12 Mpx",
        "Cadrer un sujet éloigné avec le téléobjectif de 64 Mpx",
        "Prendre un selfie avec le capteur avant de 10 Mpx",
        "Utiliser le téléphone sous la pluie grâce à la certification IP68",
        "Recharger l'appareil sans fil sur un socle compatible",
        "Regarder des vidéos HDR10+ sur l'écran Dynamic AMOLED 2X",
        "Garder plusieurs applications ouvertes grâce aux 12 Go de RAM",
        "Profiter d'une journée d'utilisation avec la batterie de 4 000 mAh",
        "Transporter une bibliothèque photo sur une carte microSD",
        "Comparer les coloris Cosmic Gray, Cloud Blue et Cloud Pink en boutique"
      ],
      medias: {
        videos: [
          {
            id: "sqtQDqhpiVQ",
            titre: "Introducing the Galaxy S20 | Samsung",
            chaine: "Samsung Philippines (chaîne officielle Samsung)",
            url: "https://www.youtube.com/watch?v=sqtQDqhpiVQ"
          }
        ],
        images: [
          {
            fichier: "img/galaxy-s20-1.jpg",
            alt: "Samsung Galaxy S20 posé sur une surface sombre, vue arrière",
            licence: "CC BY-SA 4.0",
            auteur: "Danish971",
            attribution: "Photo : Danish971 — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Samsung_Galaxy_S20.jpg"
          },
          {
            fichier: "img/galaxy-s20-2.jpg",
            alt: "Galaxy S20 exposé dans une boutique de Hong Kong en août 2020",
            licence: "CC BY-SA 4.0",
            auteur: "Giryyf 233",
            attribution: "Photo : Giryyf 233 — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:HK_TST_%E5%B0%96%E6%B2%99%E5%92%80_Tsim_Sha_Tsui_%E6%B5%B7%E6%B8%AF%E5%9F%8E_Harbour_City_mall_shop_S20_mobile_smartphone_August_2020_SS2_10.jpg"
          },
          {
            fichier: "img/galaxy-s20-3.png",
            alt: "Samsung Galaxy S20, vue de face sur fond transparent",
            licence: "CC BY 4.0",
            auteur: "GadgetsGuy",
            attribution: "Image : GadgetsGuy — licence CC BY 4.0 (https://creativecommons.org/licenses/by/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Galaxy_S20.png"
          }
        ]
      },
      article: {
        titre: "Galaxy S20 5G : le haut de gamme Samsung passe à 120 Hz",
        contenu: [
          "Avec le Galaxy S20 5G, présenté le 11 février 2020, Samsung place la fluidité de l'affichage au centre de son argumentaire. Le constructeur abandonne les dalles 60 Hz de la génération précédente pour un écran Dynamic AMOLED 2X de 6,2 pouces à 120 Hz, avec une définition Quad HD+ et une compatibilité HDR10+. Sur une diagonale contenue, cette combinaison vise autant les jeux que la lecture de vidéos et le défilement quotidien.",
          "Le design évolue peu dans ses principes, mais s'affine : le Galaxy S20 5G mesure 151,7 mm de haut, 69,1 mm de large et 7,9 mm d'épaisseur, pour 163 g. Le dos en verre accueille un bloc photo de trois capteurs : un grand-angle de 12 Mpx, un téléobjectif de 64 Mpx et un ultra grand-angle de 12 Mpx. À l'avant, le capteur de 10 Mpx assure les selfies et les appels vidéo.",
          "Sous le capot, Samsung annonce un processeur 7 nm octa-cœur jusqu'à 2,7 GHz, épaulé par 12 Go de mémoire vive LPDDR5 et 128 Go de stockage interne. Un emplacement microSD permet d'ajouter jusqu'à 1 To de stockage, ce qui reste rare sur les smartphones haut de gamme de cette génération. La batterie de 4 000 mAh prend en charge la charge sans fil améliorée.",
          "La connectivité 5G constitue l'autre grande nouveauté de la gamme. Elle permet des téléchargements et des flux vidéo plus rapides sur les réseaux compatibles, sans garantir pour autant une couverture universelle : la disponibilité dépend des opérateurs et des pays. Le châssis est certifié IP68, ce qui autorise une immersion limitée et protège contre la poussière.",
          "Le Galaxy S20 5G s'adresse aux utilisateurs qui veulent un écran très fluide, un triple appareil photo polyvalent et une grande quantité de mémoire vive pour le multitâche. Ses limites tiennent à son positionnement tarifaire élevé, à l'absence de prise jack et à une autonomie qui dépend fortement de la fréquence d'affichage choisie. Pour un usage photo ou gaming intensif, l'emplacement microSD et les 12 Go de RAM restent ses atouts les plus concrets.",
          "Côté écosystème, le téléphone fonctionne avec les accessoires sans fil compatibles Qi et avec les cartes microSD standard. Samsung ne fournit pas de référence SKU unique dans la source consultée : les variantes dépendent du pays et de l'opérateur, notamment pour la mémoire vive (8 Go sur certaines versions 4G)."
        ]
      },
      sourcesVerifiees: [
        { libelle: "Communiqué Samsung États-Unis « Introducing the Samsung Galaxy S20 5G » (11/02/2020) : fiche technique complète, prix de lancement et disponibilité au 06/03/2020", url: "https://news.samsung.com/us/introducing-samsung-galaxy-s20-5g-unpacked2020", date: "2026-11-14" },
        { libelle: "Communiqué Samsung France « Galaxy S20 5G » : disponibilité en France au 13/03/2020, écran 6,2 pouces 120 Hz, batterie 4 000 mAh, 128 Go et 12 Go de RAM (8 Go pour les versions 4G)", url: "https://news.samsung.com/fr/galaxy-s20-5g", date: "2026-11-14" }
      ],
      manquants: [
        "Prix public officiel en euros non publié sur la page Samsung France consultée : le montant affiché est le prix de lancement américain",
        "Autonomie annoncée non détaillée dans les sources consultées",
        "Référence/SKU européenne non confirmée (les caractéristiques varient selon le pays et l'opérateur)",
        "Détail de la connectivité filaire et sans fil (Wi-Fi, Bluetooth, USB) non relevé dans la source consultée"
      ]
    },
    {
      id: "apple-iphone-12",
      marque: "Apple",
      modele: "iPhone 12",
      rayon: "smartphones",
      annee: 2020,
      dateSortie: "2020-10-23",
      sourceAnnee: {
        url: "https://www.apple.com/fr/newsroom/2020/10/apple-announces-iphone-12-and-iphone-12-mini-a-new-era-for-iphone-with-5g/",
        date: "2026-11-14"
      },
      sourceFiche: "https://support.apple.com/kb/SP830?locale=fr_FR",
      ficheFabricant: "https://www.apple.com/fr/iphone-12/specs/",
      description: "Smartphone Apple annoncé le 13 octobre 2020 et disponible le 23 octobre 2020. L'iPhone 12 marque l'arrivée de la 5G et du système d'aimants MagSafe dans la gamme : écran Super Retina XDR OLED de 6,1 pouces protégé par Ceramic Shield, puce A14 Bionic, double appareil photo 12 Mpx, châssis en aluminium et certification IP68. Il est proposé en 64, 128 et 256 Go, à partir de 909 € en France.",
      variantes: [
        {
          groupe: "Capacité",
          options: [
            { libelle: "64 Go", prix: 909, dispo: false, lienOfficiel: { url: "https://www.apple.com/fr/newsroom/2020/10/apple-announces-iphone-12-and-iphone-12-mini-a-new-era-for-iphone-with-5g/", precision: "Prix de lancement de l'iPhone 12 64 Go annoncé par Apple France", verifie: "2026-11-14" } }
          ]
        }
      ],
      caracteristiques: [
        { libelle: "Écran", valeur: "Super Retina XDR OLED 6,1 pouces, 2 532 × 1 170 px (460 ppp), HDR, True Tone, 625 nits (standard) / 1 200 nits (HDR)" },
        { libelle: "Protection de l'écran", valeur: "Ceramic Shield" },
        { libelle: "Puce", valeur: "A14 Bionic : CPU 6 cœurs (2 performances + 4 efficacité), GPU 4 cœurs, Neural Engine 16 cœurs" },
        { libelle: "Capacités", valeur: "64 Go, 128 Go ou 256 Go" },
        { libelle: "Appareil photo arrière", valeur: "Double 12 Mpx : grand-angle ƒ/1,6 et ultra grand-angle ƒ/2,4 (champ de vision 120°)" },
        { libelle: "Appareil photo avant", valeur: "12 Mpx" },
        { libelle: "Autonomie", valeur: "Lecture vidéo jusqu'à 17 h, streaming vidéo jusqu'à 11 h, lecture audio jusqu'à 65 h" },
        { libelle: "Recharge sans fil", valeur: "MagSafe jusqu'à 15 W ; Qi jusqu'à 7,5 W" },
        { libelle: "Résistance", valeur: "IP68 (jusqu'à 6 mètres pendant 30 minutes)" },
        { libelle: "Réseau", valeur: "5G" },
        { libelle: "Connecteur", valeur: "Lightning" },
        { libelle: "Dimensions", valeur: "146,7 × 71,5 × 7,4 mm" },
        { libelle: "Poids", valeur: "162 g" }
      ],
      prix: {
        montant: 909,
        devise: "EUR",
        marche: "France (Union européenne), TTC",
        libelle: "iPhone 12 64 Go, prix de lancement",
        date: "2020-10-13",
        source: "https://www.apple.com/fr/newsroom/2020/10/apple-announces-iphone-12-and-iphone-12-mini-a-new-era-for-iphone-with-5g/"
      },
      disponibilite: {
        statut: "archive",
        libelle: "Précommandes ouvertes le 16 octobre 2020, disponibilité le 23 octobre 2020 ; modèle aujourd'hui remplacé dans la gamme Apple",
        date: "2026-11-14",
        source: "https://www.apple.com/fr/newsroom/2020/10/apple-announces-iphone-12-and-iphone-12-mini-a-new-era-for-iphone-with-5g/"
      },
      accessoires: [
        {
          nom: "Chargeur MagSafe",
          compatibilite: "Recharge sans fil magnétique jusqu'à 15 W sur l'iPhone 12",
          source: "https://www.apple.com/fr/newsroom/2020/10/apple-announces-iphone-12-and-iphone-12-mini-a-new-era-for-iphone-with-5g/"
        }
      ],
      bundles: [],
      usages: [
        "Profiter de la 5G pour les appels vidéo et le streaming sur les réseaux compatibles",
        "Fixer un accessoire MagSafe à l'arrière du téléphone",
        "Recharger sans fil jusqu'à 15 W avec un chargeur MagSafe",
        "Photographier un groupe avec l'ultra grand-angle de 120°",
        "Prendre des photos en faible lumière avec le grand-angle ƒ/1,6",
        "Résister aux éclaboussures et à une immersion jusqu'à 6 mètres grâce à l'IP68",
        "Regarder des vidéos HDR sur l'écran Super Retina XDR",
        "Utiliser Face ID pour déverrouiller le téléphone",
        "Compter sur l'autonomie de 17 h de lecture vidéo",
        "Choisir entre les finitions noir, blanc, bleu, vert et PRODUCT(RED)",
        "Transférer les données d'un ancien iPhone lors de la configuration",
        "Utiliser les applications de l'App Store et les services Apple",
        "Protéger l'écran avec le verre Ceramic Shield en usage quotidien"
      ],
      medias: {
        videos: [
          {
            id: "KR0g-1hnQPA",
            titre: "Apple Event — October 13, 2020 (présentation de l'iPhone 12)",
            chaine: "Apple",
            url: "https://www.youtube.com/watch?v=KR0g-1hnQPA"
          }
        ],
        images: [
          {
            fichier: "img/iphone-12-1.jpg",
            alt: "iPhone 12 bleu, vue arrière avec le double appareil photo",
            licence: "CC BY-SA 4.0",
            auteur: "KKPCW",
            attribution: "Photo : KKPCW — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:IPhone_12_-_2.jpg"
          },
          {
            fichier: "img/iphone-12-2.jpg",
            alt: "iPhone 12, vue de face avec l'écran allumé",
            licence: "CC BY-SA 4.0",
            auteur: "KKPCW",
            attribution: "Photo : KKPCW — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:IPhone_12_-_3.jpg"
          },
          {
            fichier: "img/iphone-12-3.jpg",
            alt: "iPhone 12 noir, vue arrière",
            licence: "CC BY-SA 4.0",
            auteur: "茅野ふたば",
            attribution: "Photo : 茅野ふたば — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:IPhone_12_Black_256g.jpg"
          }
        ]
      },
      article: {
        titre: "iPhone 12 : la 5G et MagSafe pour l'iPhone de 2020",
        contenu: [
          "Dévoilé le 13 octobre 2020, l'iPhone 12 est la première génération d'iPhone à intégrer la 5G sur toute la gamme. Apple accompagne cette évolution réseau d'un nouveau design à bords plats, d'un écran Super Retina XDR OLED de 6,1 pouces et d'une protection Ceramic Shield destinée à améliorer la résistance aux chutes. La disponibilité est fixée au 23 octobre 2020, après une ouverture des précommandes le 16 octobre.",
          "La puce A14 Bionic, gravée en 5 nm, combine un processeur à six cœurs, un GPU à quatre cœurs et un Neural Engine à seize cœurs. Apple met en avant ses capacités de photographie computationnelle, sans détailler ici chaque fonction. Le double appareil photo arrière associe un grand-angle de 12 Mpx à ouverture ƒ/1,6 et un ultra grand-angle de 12 Mpx à 120°, complétés par un capteur frontal de 12 Mpx.",
          "L'écran conserve une définition de 2 532 × 1 170 pixels pour 460 ppp, avec HDR, True Tone et une luminosité de 625 nits en usage standard, jusqu'à 1 200 nits en HDR. Le format de 6,1 pouces et le poids de 162 g placent l'iPhone 12 dans la moyenne des smartphones haut de gamme de 2020, avec des dimensions de 146,7 × 71,5 × 7,4 mm.",
          "MagSafe est l'autre nouveauté marquante : un anneau d'aimants à l'arrière permet de fixer des accessoires et de recharger sans fil jusqu'à 15 W, contre 7,5 W en Qi standard. Cette recharge magnétique ouvre un écosystème de chargeurs, de coques et de supports, mais impose de choisir des accessoires compatibles. L'autonomie annoncée atteint 17 heures de lecture vidéo, 11 heures de streaming et 65 heures de lecture audio.",
          "L'iPhone 12 s'adresse aux utilisateurs de l'écosystème Apple qui veulent un modèle compact, une connexion 5G et un appareil photo polyvalent. Ses points forts sont la puce A14, l'écran OLED, la certification IP68 et MagSafe ; ses limites tiennent à l'absence de chargeur dans la boîte, à un stockage de base de 64 Go et à une autonomie qui reste dans la moyenne. Les capacités de 128 et 256 Go permettent de compenser le stockage de base.",
          "Côté entretien, Apple indique une résistance IP68 jusqu'à 6 mètres pendant 30 minutes, sans garantir une utilisation prolongée sous l'eau. Le connecteur reste le Lightning, et la recharge filaire peut se faire avec un adaptateur secteur ou un port USB d'ordinateur. Les accessoires MagSafe et les coques compatibles constituent l'essentiel de l'écosystème propre à ce modèle."
        ]
      },
      sourcesVerifiees: [
        { libelle: "Communiqué Apple France « Apple dévoile l'iPhone 12 et l'iPhone 12 mini » (13/10/2020) : prix à partir de 909 €, disponibilité au 23/10/2020, 5G, MagSafe, A14 Bionic, écran 6,1 pouces", url: "https://www.apple.com/fr/newsroom/2020/10/apple-announces-iphone-12-and-iphone-12-mini-a-new-era-for-iphone-with-5g/", date: "2026-11-14" },
        { libelle: "Fiche technique Apple France de l'iPhone 12 (SP830) : capacités, dimensions, poids, écran, autonomie, recharge MagSafe et Qi, IP68", url: "https://support.apple.com/kb/SP830?locale=fr_FR", date: "2026-11-14" }
      ],
      manquants: [
        "Prix des capacités 128 Go et 256 Go non détaillé dans la source consultée",
        "Référence/SKU non publiée par Apple dans les sources consultées",
        "Autonomie en usage réel non communiquée au-delà des valeurs de lecture vidéo, streaming et audio"
      ]
    },
    {
      id: "linux-raspberry-pi-400",
      marque: "Raspberry Pi",
      modele: "400",
      plateforme: "Linux",
      rayon: "informatique",
      annee: 2020,
      dateSortie: "2020-11-02",
      sourceAnnee: {
        url: "https://www.raspberrypi.com/news/raspberry-pi-400-the-70-desktop-pc/",
        date: "2026-11-14"
      },
      sourceFiche: "https://www.raspberrypi.com/products/raspberry-pi-400/specifications/",
      ficheFabricant: "https://www.raspberrypi.com/products/raspberry-pi-400/",
      description: "Ordinateur personnel complet intégré à un clavier compact, annoncé le 2 novembre 2020 par la Fondation Raspberry Pi. Le Raspberry Pi 400 reprend la base du Raspberry Pi 4 avec un SoC Broadcom BCM2711 quadricœur Cortex-A72 à 1,8 GHz, 4 Go de LPDDR4-3200, Wi-Fi 5, Bluetooth 5.0, Ethernet Gigabit, deux ports micro-HDMI jusqu'à 4K 60 Hz et un connecteur GPIO 40 broches. Il est vendu nu à 70 $ ou en kit complet à 100 $ avec souris, alimentation, câble micro-HDMI et carte microSD sous Raspberry Pi OS.",
      variantes: [
        {
          groupe: "Conditionnement",
          options: [
            { libelle: "Unité seule", prix: 70, dispo: false, lienOfficiel: { url: "https://www.raspberrypi.com/news/raspberry-pi-400-the-70-desktop-pc/", precision: "Prix de l'unité seule annoncé par la Fondation Raspberry Pi", verifie: "2026-11-14" } },
            { libelle: "Kit complet", prix: 100, dispo: false, lienOfficiel: { url: "https://www.raspberrypi.com/news/raspberry-pi-400-the-70-desktop-pc/", precision: "Prix du kit complet annoncé par la Fondation Raspberry Pi", verifie: "2026-11-14" } }
          ]
        }
      ],
      caracteristiques: [
        { libelle: "SoC", valeur: "Broadcom BCM2711 quadricœur Cortex-A72 64 bits à 1,8 GHz" },
        { libelle: "Mémoire", valeur: "4 Go LPDDR4-3200" },
        { libelle: "Réseau sans fil", valeur: "Wi-Fi 5 double bande 2,4/5 GHz IEEE 802.11b/g/n/ac, Bluetooth 5.0 BLE" },
        { libelle: "Réseau filaire", valeur: "Ethernet Gigabit" },
        { libelle: "USB", valeur: "2 × USB 3.0 et 1 × USB 2.0" },
        { libelle: "Vidéo", valeur: "2 × micro-HDMI jusqu'à 4K 60 Hz" },
        { libelle: "Décodage vidéo", valeur: "H.265 4K 60 Hz, H.264 1080p 60 Hz ; OpenGL ES 3.1, Vulkan 1.0" },
        { libelle: "GPIO", valeur: "Connecteur horizontal 40 broches" },
        { libelle: "Stockage", valeur: "Lecteur de carte microSD pour le système et les données" },
        { libelle: "Clavier", valeur: "78 ou 79 touches selon la variante régionale" },
        { libelle: "Alimentation", valeur: "5 V DC via connecteur USB" },
        { libelle: "Température ambiante", valeur: "0 °C à +50 °C" },
        { libelle: "Dimensions", valeur: "286 × 122 × 23 mm" }
      ],
      prix: {
        montant: 70,
        devise: "USD",
        marche: "États-Unis, prix de lancement annoncé par la Fondation Raspberry Pi",
        libelle: "Unité seule (le kit complet est proposé à 100 $)",
        date: "2020-11-02",
        source: "https://www.raspberrypi.com/news/raspberry-pi-400-the-70-desktop-pc/"
      },
      disponibilite: {
        statut: "archive",
        libelle: "Annoncé le 2 novembre 2020 ; modèle remplacé depuis par le Raspberry Pi 500 dans la gamme",
        date: "2026-11-14",
        source: "https://www.raspberrypi.com/news/raspberry-pi-400-the-70-desktop-pc/"
      },
      accessoires: [
        {
          nom: "Souris, alimentation, câble micro-HDMI vers HDMI et carte microSD",
          compatibilite: "Fournis dans le kit complet ; vendus séparément pour l'unité seule",
          source: "https://www.raspberrypi.com/products/raspberry-pi-400/"
        }
      ],
      bundles: [
        {
          nom: "Raspberry Pi 400 Personal Computer Kit",
          contenu: "Raspberry Pi 400, souris, alimentation, câble micro-HDMI vers HDMI, carte microSD préchargée avec Raspberry Pi OS et guide du débutant",
          source: "https://www.raspberrypi.com/news/raspberry-pi-400-the-70-desktop-pc/"
        }
      ],
      usages: [
        "Remplacer un ordinateur de bureau compact pour la bureautique et le web",
        "Apprendre la programmation Python avec Raspberry Pi OS",
        "Brancher deux écrans en micro-HDMI pour un poste de travail double écran",
        "Explorer l'électronique avec le connecteur GPIO 40 broches",
        "Naviguer sur Internet en Wi-Fi 5 ou en Ethernet Gigabit",
        "Transférer des fichiers sur une clé USB 3.0",
        "Regarder des vidéos 4K 60 Hz grâce au décodage H.265",
        "Installer un système Linux alternatif sur carte microSD",
        "Utiliser le kit complet comme premier ordinateur pour un débutant",
        "Monter un petit serveur domestique ou un poste de test",
        "Travailler dans un espace réduit grâce au format clavier tout-en-un",
        "Bricoler des projets domotiques reliés au GPIO",
        "Utiliser un clavier AZERTY avec la variante régionale française"
      ],
      medias: {
        videos: [
          {
            id: "ZSvHJ97d8n8",
            titre: "NEW Raspberry Pi 400: a computer in a keyboard | Raspberry Pi",
            chaine: "Raspberry Pi",
            url: "https://www.youtube.com/watch?v=ZSvHJ97d8n8"
          }
        ],
        images: [
          {
            fichier: "img/rpi400-1.jpg",
            alt: "Raspberry Pi 400 dans son clavier compact, vue de dessus",
            licence: "CC BY-SA 4.0",
            auteur: "SimonWaldherr",
            attribution: "Photo : SimonWaldherr — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Raspberry_Pi_400.jpg"
          },
          {
            fichier: "img/rpi400-2.jpg",
            alt: "Raspberry Pi 400 connecté à un écran, avec une souris",
            licence: "CC0 1.0",
            auteur: "Abdulla Al Muhairi",
            attribution: "Photo : Abdulla Al Muhairi — licence CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Raspberry_Pi_400_(50586757772).jpg"
          },
          {
            fichier: "img/rpi400-3.jpg",
            alt: "Raspberry Pi 400 et son kit posés sur un bureau",
            licence: "CC BY-SA 4.0",
            auteur: "Oscar Wai",
            attribution: "Photo : Oscar Wai — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:20210309_Raspberry_Pi_400.jpg"
          }
        ]
      },
      article: {
        titre: "Raspberry Pi 400 : un ordinateur complet dans un clavier",
        contenu: [
          "Annoncé le 2 novembre 2020, le Raspberry Pi 400 prend le contrepied des mini-PC à boîtier : la carte mère est intégrée directement dans un clavier compact. La Fondation Raspberry Pi présente l'appareil comme un ordinateur personnel complet, capable de faire tourner Raspberry Pi OS et de servir pour la bureautique, le web, la programmation ou la découverte de l'électronique.",
          "Sous le clavier, on retrouve une base proche du Raspberry Pi 4 : SoC Broadcom BCM2711 quadricœur Cortex-A72 à 1,8 GHz, 4 Go de LPDDR4-3200, Wi-Fi 5 double bande, Bluetooth 5.0 et Ethernet Gigabit. Deux ports USB 3.0 et un port USB 2.0 complètent la connectique, avec deux sorties micro-HDMI capables de piloter des écrans jusqu'à 4K 60 Hz.",
          "Le refroidissement a été revu pour un boîtier fermé, avec des thermiques spécifiques destinées à maintenir le processeur au frais sans ventilateur visible. Le connecteur GPIO 40 broches reste accessible, ce qui distingue le Pi 400 d'un simple clavier-ordinateur : on peut y brancher des capteurs, des LED, des relais ou des cartes d'extension pour des projets maker.",
          "Le prix est l'un des arguments principaux : 70 $ pour l'unité seule, ou 100 $ pour le kit complet qui ajoute une souris, une alimentation, un câble micro-HDMI vers HDMI, une carte microSD préchargée avec Raspberry Pi OS et le guide du débutant. La Fondation cible explicitement les foyers qui cherchent un ordinateur simple pour les tâches du quotidien, sans assembler de pièces.",
          "Ses limites sont celles d'un ordinateur à 4 Go de RAM : les charges lourdes, le montage vidéo et certains jeux 3D restent hors de portée. Le stockage repose sur une carte microSD, plus lente et moins durable qu'un SSD, et l'alimentation passe par un connecteur USB 5 V. Pour un usage bureautique, éducatif ou serveur léger, ces contraintes sont acceptables ; pour un poste de travail exigeant, il faut regarder ailleurs.",
          "Le Raspberry Pi 400 est vendu en variantes régionales de clavier, dont une version française AZERTY avec alimentation européenne et guide en français. Il s'adresse aussi bien aux débutants qu'aux utilisateurs avancés qui veulent un second poste Linux compact, un terminal de développement ou une base pour des projets GPIO. Son format tout-en-un facilite le transport et réduit l'encombrement sur un bureau."
        ]
      },
      sourcesVerifiees: [
        { libelle: "Annonce officielle Raspberry Pi « Raspberry Pi 400: the $70 desktop PC » (02/11/2020) : prix de 70 $ et 100 $, contenu du kit, positionnement", url: "https://www.raspberrypi.com/news/raspberry-pi-400-the-70-desktop-pc/", date: "2026-11-14" },
        { libelle: "Fiche de spécifications officielle Raspberry Pi 400 : SoC, mémoire, réseau, USB, micro-HDMI, GPIO, clavier, alimentation, dimensions", url: "https://www.raspberrypi.com/products/raspberry-pi-400/specifications/", date: "2026-11-14" },
        { libelle: "Page produit officielle Raspberry Pi 400 : présentation, thermiques, kit et variantes régionales", url: "https://www.raspberrypi.com/products/raspberry-pi-400/", date: "2026-11-14" }
      ],
      manquants: [
        "Prix officiel en euros non publié dans la source consultée (prix annoncé en dollars)",
        "Poids non indiqué dans la fiche de spécifications consultée",
        "Référence/SKU régionale non détaillée dans les sources consultées",
        "Autonomie sans objet : l'appareil fonctionne sur secteur via une alimentation 5 V"
      ]
    },
    {
      id: "microsoft-xbox-series-x",
      marque: "Microsoft",
      modele: "Xbox Series X",
      rayon: "gaming",
      annee: 2020,
      dateSortie: "2020-11-10",
      sourceAnnee: {
        url: "https://news.xbox.com/en-us/2020/09/09/xbox-series-x-and-xbox-series-s-launching-november-10/",
        date: "2026-11-14"
      },
      sourceFiche: "https://www.xbox.com/fr-FR/consoles/xbox-series-x",
      ficheFabricant: "https://www.xbox.com/fr-FR/consoles/xbox-series-x",
      description: "Console de salon de neuvième génération lancée le 10 novembre 2020. La Xbox Series X repose sur un processeur Zen 2 personnalisé à 8 cœurs, un GPU RDNA 2 de 52 CU pour 12 TFLOPS, 16 Go de GDDR6, un SSD NVMe de 1 To et un lecteur Blu-ray 4K UHD. Elle vise le jeu en 4K jusqu'à 120 images par seconde, avec HDMI 2.1 et la technologie Xbox Velocity Architecture.",
      variantes: [
        {
          groupe: "Édition",
          options: [
            { libelle: "Avec lecteur Blu-ray 4K UHD, 1 To", prix: 499, dispo: false, lienOfficiel: { url: "https://news.xbox.com/en-us/2020/09/09/xbox-series-x-and-xbox-series-s-launching-november-10/", precision: "Prix de lancement estimé de l'édition avec lecteur annoncé par Microsoft", verifie: "2026-11-14" } }
          ]
        }
      ],
      caracteristiques: [
        { libelle: "Processeur", valeur: "Zen 2 personnalisé 8 cœurs à 3,8 GHz (3,6 GHz avec SMT)" },
        { libelle: "Processeur graphique", valeur: "RDNA 2 personnalisé, 52 CU à 1,825 GHz, 12 TFLOPS" },
        { libelle: "Mémoire", valeur: "16 Go GDDR6, bus 320 bits (10 Go à 560 Go/s, 6 Go à 336 Go/s)" },
        { libelle: "Stockage", valeur: "SSD NVMe de 1 To" },
        { libelle: "Lecteur", valeur: "Blu-ray 4K UHD" },
        { libelle: "Sortie vidéo", valeur: "HDMI 2.1 : 4K jusqu'à 120 fps, 8K HDR" },
        { libelle: "USB", valeur: "3 × USB 3.1 Gen 1" },
        { libelle: "Réseau", valeur: "Ethernet Gigabit, Wi-Fi 802.11ac double bande" },
        { libelle: "Dimensions", valeur: "15,1 × 15,1 × 30,1 cm" },
        { libelle: "Poids", valeur: "4,45 kg (édition avec lecteur)" }
      ],
      prix: {
        montant: 499,
        devise: "USD",
        marche: "États-Unis, prix de lancement estimé",
        libelle: "Édition avec lecteur Blu-ray 4K UHD, 1 To",
        date: "2020-09-09",
        source: "https://news.xbox.com/en-us/2020/09/09/xbox-series-x-and-xbox-series-s-launching-november-10/"
      },
      disponibilite: {
        statut: "archive",
        libelle: "Lancée le 10 novembre 2020 ; modèle toujours pris en charge mais remplacé par des éditions ultérieures",
        date: "2026-11-14",
        source: "https://news.xbox.com/en-us/2020/09/09/xbox-series-x-and-xbox-series-s-launching-november-10/"
      },
      accessoires: [
        {
          nom: "Manette sans fil Xbox",
          compatibilite: "Manette sans fil Xbox Series X|S et manettes Xbox One compatibles",
          source: "https://www.xbox.com/fr-FR/consoles/xbox-series-x"
        }
      ],
      bundles: [],
      usages: [
        "Jouer aux jeux Xbox en 4K jusqu'à 120 images par seconde sur un téléviseur HDMI 2.1",
        "Insérer un disque Blu-ray 4K UHD dans le lecteur",
        "Installer les jeux sur le SSD NVMe de 1 To",
        "Profiter du Quick Resume pour reprendre plusieurs jeux rapidement",
        "Jouer en multijoueur en ligne avec Xbox Game Pass Ultimate",
        "Brancher une manette supplémentaire sur l'un des ports USB",
        "Connecter la console en Ethernet Gigabit pour le jeu en réseau",
        "Diffuser des films et séries en 4K HDR depuis les applications de la console",
        "Utiliser la Xbox Velocity Architecture pour réduire les temps de chargement",
        "Jouer à des jeux rétrocompatibles Xbox One et Xbox 360",
        "Placer la console debout ou couchée selon le meuble TV",
        "Utiliser la radio sans fil Xbox dédiée pour les manettes",
        "Profiter du son Dolby Atmos et DTS:X sur un système compatible"
      ],
      medias: {
        videos: [
          {
            id: "0tUqIHwHDEc",
            titre: "Xbox Series X - World Premiere - 4K Trailer",
            chaine: "XBOX",
            url: "https://www.youtube.com/watch?v=0tUqIHwHDEc"
          }
        ],
        images: [
          {
            fichier: "img/xbox-series-x-1.jpg",
            alt: "Xbox Series X debout, vue de face",
            licence: "CC BY-SA 4.0",
            auteur: "Der. Bellemer",
            attribution: "Photo : Der. Bellemer — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Xbox_Series_(X).jpg"
          },
          {
            fichier: "img/xbox-series-x-2.jpg",
            alt: "Xbox Series X, vue de trois quarts",
            licence: "CC BY-SA 4.0",
            auteur: "Der. Bellemer",
            attribution: "Photo : Der. Bellemer — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Xbox_Series_(X)_1.jpg"
          },
          {
            fichier: "img/xbox-series-x-3.jpg",
            alt: "Xbox Series X et sa manette posés sur un meuble",
            licence: "CC BY 2.0",
            auteur: "Ian Hughes",
            attribution: "Photo : Ian Hughes — licence CC BY 2.0 (https://creativecommons.org/licenses/by/2.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Xbox_series_X_(50648118708).jpg"
          }
        ]
      },
      article: {
        titre: "Xbox Series X : la puissance 4K 120 fps de Microsoft",
        contenu: [
          "Lancée le 10 novembre 2020, la Xbox Series X inaugure la neuvième génération de consoles Microsoft. Son pari est simple : réunir dans un volume compact une puissance graphique de 12 TFLOPS, un SSD NVMe de 1 To et un lecteur Blu-ray 4K UHD, tout en restant compatible avec une grande partie des jeux Xbox One et Xbox 360.",
          "La architecture repose sur un processeur Zen 2 personnalisé à huit cœurs cadencé à 3,8 GHz, ou 3,6 GHz avec SMT, et sur un GPU RDNA 2 de 52 unités de calcul à 1,825 GHz. Les 16 Go de GDDR6 sont répartis sur un bus de 320 bits, avec 10 Go à 560 Go/s et 6 Go à 336 Go/s. Microsoft met en avant la Xbox Velocity Architecture, un ensemble de technologies destinées à accélérer le streaming des données depuis le SSD.",
          "La sortie HDMI 2.1 permet d'afficher jusqu'à 4K à 120 images par seconde, et jusqu'à 8K HDR sur les écrans compatibles. Trois ports USB 3.1 Gen 1, un port Ethernet Gigabit et un Wi-Fi 802.11ac double bande complètent la connectique. La console mesure 15,1 × 15,1 × 30,1 cm et pèse 4,45 kg dans sa version avec lecteur, ce qui impose de prévoir un espace dégagé pour la ventilation.",
          "Le lecteur Blu-ray 4K UHD distingue cette édition des modèles tout-numérique : il permet de lire des films en disque et d'installer des jeux physiques, tout en conservant la possibilité d'acheter des jeux dématérialisés. La manette sans fil Xbox est compatible, et la radio sans fil dédiée de la console évite de passer par un adaptateur externe.",
          "Ses points forts sont la puissance brute, le SSD rapide, la rétrocompatibilité et la présence d'un lecteur optique. Ses limites tiennent à son encombrement, à sa consommation et à la nécessité d'un téléviseur HDMI 2.1 pour exploiter le 4K 120 fps. Le prix de lancement de 499 $ la place face à la PlayStation 5, avec des arbitrages différents selon les exclusivités et les services.",
          "La Xbox Series X s'adresse aux joueurs qui veulent une console de salon durable, capable de faire tourner les jeux les plus exigeants pendant plusieurs années. Elle s'intègre aussi à l'écosystème Xbox Game Pass, au cloud gaming et aux accessoires Xbox existants. Pour un foyer équipé d'un téléviseur 4K récent, elle constitue une base polyvalente pour le jeu, la vidéo et le streaming."
        ]
      },
      sourcesVerifiees: [
        { libelle: "Annonce Xbox Wire « Xbox Series S and Xbox Series X Launch November 10 » (09/09/2020) : prix de 499 $ et date de lancement", url: "https://news.xbox.com/en-us/2020/09/09/xbox-series-x-and-xbox-series-s-launching-november-10/", date: "2026-11-14" },
        { libelle: "Page officielle Xbox France « Xbox Series X » : processeur, GPU, mémoire, stockage, HDMI 2.1, USB, réseau, dimensions et poids", url: "https://www.xbox.com/fr-FR/consoles/xbox-series-x", date: "2026-11-14" }
      ],
      manquants: [
        "Prix public officiel en euros non publié dans la source consultée : le montant affiché est le prix de lancement américain",
        "Capacité réelle du SSD après formatage non indiquée par Microsoft dans la source consultée",
        "Référence/SKU non publiée dans les sources consultées"
      ]
    },
    {
      id: "valve-half-life-alyx",
      marque: "Valve",
      modele: "Half-Life: Alyx",
      rayon: "gaming",
      annee: 2020,
      dateSortie: "2020-03-23",
      sourceAnnee: {
        url: "https://store.steampowered.com/app/546560/Half_Life_Alyx/",
        date: "2026-11-14"
      },
      sourceFiche: "https://store.steampowered.com/app/546560/Half_Life_Alyx/",
      ficheFabricant: "https://store.steampowered.com/app/546560/Half_Life_Alyx/",
      description: "Jeu de tir à la première personne en réalité virtuelle développé et publié par Valve, sorti le 23 mars 2020. Construit sur le moteur Source 2 et jouable uniquement en VR, Half-Life: Alyx se déroule entre les événements de Half-Life et Half-Life 2. Il est compatible SteamVR sous Windows 10 et demande au minimum un Core i5-7500 ou Ryzen 5 1600, 12 Go de RAM et une GeForce GTX 1060 ou Radeon RX 580 avec 6 Go de mémoire vidéo.",
      variantes: [
        {
          groupe: "Édition",
          options: [
            { libelle: "Édition standard", prix: 57.99, dispo: true, lienOfficiel: { url: "https://store.steampowered.com/app/546560/Half_Life_Alyx/", precision: "Prix en vigueur sur la boutique Steam", verifie: "2026-11-14" } }
          ]
        }
      ],
      caracteristiques: [
        { libelle: "Développeur", valeur: "Valve" },
        { libelle: "Éditeur", valeur: "Valve" },
        { libelle: "Date de sortie", valeur: "23 mars 2020" },
        { libelle: "Moteur", valeur: "Source 2" },
        { libelle: "Plateforme", valeur: "Windows 10 (64 bits)" },
        { libelle: "Mode de jeu", valeur: "Réalité virtuelle uniquement, via SteamVR" },
        { libelle: "Processeur minimum", valeur: "Intel Core i5-7500 ou AMD Ryzen 5 1600" },
        { libelle: "Mémoire minimum", valeur: "12 Go de RAM" },
        { libelle: "Carte graphique minimum", valeur: "NVIDIA GeForce GTX 1060 ou AMD Radeon RX 580, 6 Go de mémoire vidéo" },
        { libelle: "Genre", valeur: "Tir à la première personne en réalité virtuelle" }
      ],
      prix: {
        montant: 57.99,
        devise: "EUR",
        marche: "Zone euro, TTC",
        libelle: "Prix en vigueur sur la boutique Steam au 14/11/2026",
        date: "2026-11-14",
        source: "https://store.steampowered.com/app/546560/Half_Life_Alyx/"
      },
      disponibilite: {
        statut: "disponible",
        libelle: "Disponible à l'achat et au téléchargement sur Steam",
        date: "2026-11-14",
        source: "https://store.steampowered.com/app/546560/Half_Life_Alyx/"
      },
      accessoires: [],
      bundles: [],
      usages: [
        "Vivre l'aventure Half-Life en réalité virtuelle avec un casque SteamVR",
        "Utiliser les contrôleurs VR pour manipuler les objets et recharger l'arme",
        "Explorer les environnements de City 17 en se déplaçant physiquement",
        "Résoudre des énigmes physiques avec les mains virtuelles",
        "Combattre les ennemis avec le pistolet et les armes improvisées d'Alyx",
        "Suivre l'histoire entre Half-Life et Half-Life 2",
        "Jouer en position assise ou debout selon l'espace disponible",
        "Utiliser la téléportation ou le déplacement continu selon les options du jeu",
        "Profiter du rendu Source 2 sur un casque à haute résolution",
        "Rejouer le jeu avec un confort réglé pour éviter le mal des transports",
        "Découvrir la franchise Half-Life pour la première fois en VR",
        "Configurer SteamVR avec un casque compatible et deux contrôleurs"
      ],
      medias: {
        videos: [
          {
            id: "O2W0N3uKXmo",
            titre: "Half-Life: Alyx Announcement Trailer",
            chaine: "Valve",
            url: "https://www.youtube.com/watch?v=O2W0N3uKXmo"
          }
        ],
        images: []
      },
      article: {
        titre: "Half-Life: Alyx : le retour de Half-Life en réalité virtuelle",
        contenu: [
          "Sorti le 23 mars 2020, Half-Life: Alyx marque le retour de Valve à la franchise Half-Life après plus d'une décennie d'attente. Le jeu est conçu dès le départ pour la réalité virtuelle et ne propose pas de mode sans casque : il faut un casque SteamVR compatible, deux contrôleurs et un PC Windows 10 suffisamment puissant.",
          "L'histoire se situe entre les événements de Half-Life et de Half-Life 2. Le joueur incarne Alyx Vance, engagée dans la résistance contre le Combine. Valve construit une campagne complète autour des possibilités de la VR : manipulation d'objets, rechargement d'armes avec les mains, résolution d'énigmes physiques et exploration de environnements détaillés.",
          "Techniquement, le jeu tourne sur le moteur Source 2 et demande au minimum un Intel Core i5-7500 ou un AMD Ryzen 5 1600, 12 Go de RAM et une GeForce GTX 1060 ou Radeon RX 580 avec 6 Go de mémoire vidéo. Ces exigences placent Half-Life: Alyx dans la catégorie des jeux VR exigeants pour l'époque, mais compatibles avec les casques grand public de 2020.",
          "Le jeu propose plusieurs options de confort, notamment la téléportation et le déplacement continu, afin de réduire le mal des transports. La difficulté est réglable et l'interface privilégie les interactions directes plutôt que les menus complexes. Valve a également mis en avant la précision des contrôleurs et la qualité de l'audio spatial pour l'immersion.",
          "Ses points forts sont la qualité de production, l'écriture, le level design et l'utilisation intelligente de la VR. Ses limites sont intrinsèques au support : il faut un casque et un PC compatible, l'espace de jeu peut être contraint, et certains joueurs sensibles au mal des transports devront ajuster les options. Le prix de 57,99 € le place dans la fourchette haute des jeux VR, justifiée par la durée et la finition de la campagne.",
          "Half-Life: Alyx reste une référence pour comprendre ce que la VR peut apporter à un jeu narratif. Il s'adresse autant aux fans de la franchise qu'aux nouveaux venus équipés d'un casque. Pour en profiter, il faut prévoir un espace dégagé, des contrôleurs chargés et une configuration PC conforme aux minimums indiqués par Valve."
        ]
      },
      sourcesVerifiees: [
        { libelle: "Fiche Steam officielle de Half-Life: Alyx : date de sortie (23/03/2020), prix, plateforme Windows, configuration minimum et compatibilité SteamVR", url: "https://store.steampowered.com/app/546560/Half_Life_Alyx/", date: "2026-11-14" }
      ],
      manquants: [
        "Aucune photographie du jeu sous licence libre vérifiée : seul le logo est disponible sur Wikimedia Commons, insuffisant pour atteindre 3 images",
        "Configuration recommandée non publiée sur la fiche Steam consultée",
        "Contenu détaillé des mises à jour et des éventuels contenus additionnels non vérifié"
      ]
    },
    {
      id: "meta-quest-2",
      marque: "Meta",
      modele: "Quest 2",
      rayon: "vr",
      annee: 2020,
      dateSortie: "2020-10-13",
      sourceAnnee: {
        url: "https://about.fb.com/news/2020/09/introducing-oculus-quest-2-the-next-generation-of-all-in-one-vr/",
        date: "2026-11-14"
      },
      sourceFiche: "https://about.fb.com/news/2020/09/introducing-oculus-quest-2-the-next-generation-of-all-in-one-vr/",
      ficheFabricant: "https://www.meta.com/quest/products/quest-2/",
      description: "Casque de réalité virtuelle autonome dévoilé le 16 septembre 2020 et commercialisé le 13 octobre 2020 sous le nom Oculus Quest 2, avant d'être rebaptisé Meta Quest 2 en 2022. Il embarque une puce Qualcomm Snapdragon XR2, 6 Go de RAM LPDDR4X, un écran LCD de 1832 × 1920 pixels par œil et deux contrôleurs Touch. La version 64 Go est lancée à 299 $, la version 256 Go à 399 $.",
      variantes: [
        {
          groupe: "Stockage",
          options: [
            { libelle: "64 Go", prix: 299, dispo: false, lienOfficiel: { url: "https://about.fb.com/news/2020/09/introducing-oculus-quest-2-the-next-generation-of-all-in-one-vr/", precision: "Prix de lancement de la version 64 Go annoncé par Meta", verifie: "2026-11-14" } },
            { libelle: "256 Go", prix: 399, dispo: false, lienOfficiel: { url: "https://en.wikipedia.org/wiki/Quest_2", precision: "Prix de lancement de la version 256 Go documenté sur Wikipédia (source secondaire)", verifie: "2026-11-14" } }
          ]
        }
      ],
      caracteristiques: [
        { libelle: "Puce", valeur: "Qualcomm Snapdragon XR2" },
        { libelle: "Mémoire", valeur: "6 Go LPDDR4X" },
        { libelle: "Stockage", valeur: "64 Go ou 256 Go selon la version" },
        { libelle: "Écran", valeur: "LCD, 1832 × 1920 pixels par œil" },
        { libelle: "Fréquence d'affichage", valeur: "72 Hz au lancement ; 90 Hz activable, puis étendu aux jeux par mise à jour en novembre 2020" },
        { libelle: "Suivi", valeur: "Suivi inside-out par quatre caméras" },
        { libelle: "IPD", valeur: "Réglage intégré de la distance interpupillaire" },
        { libelle: "Contrôleurs", valeur: "Deux contrôleurs Touch inclus" },
        { libelle: "Poids", valeur: "503 g" },
        { libelle: "Compatibilité PC", valeur: "Oculus Link" },
        { libelle: "Mode", valeur: "Autonome ou connecté à un PC compatible" }
      ],
      prix: {
        montant: 299,
        devise: "USD",
        marche: "États-Unis, prix de lancement",
        libelle: "Version 64 Go (version 256 Go à 399 $)",
        date: "2020-09-16",
        source: "https://about.fb.com/news/2020/09/introducing-oculus-quest-2-the-next-generation-of-all-in-one-vr/"
      },
      disponibilite: {
        statut: "archive",
        libelle: "Commercialisé le 13 octobre 2020 ; modèle arrêté depuis, remplacé par les Quest 3 et Quest 3S",
        date: "2026-11-14",
        source: "https://about.fb.com/news/2020/09/introducing-oculus-quest-2-the-next-generation-of-all-in-one-vr/"
      },
      accessoires: [
        {
          nom: "Câble Oculus Link",
          compatibilite: "Connexion du casque à un PC compatible pour jouer aux jeux PC VR",
          source: "https://about.fb.com/news/2020/09/introducing-oculus-quest-2-the-next-generation-of-all-in-one-vr/"
        }
      ],
      bundles: [],
      usages: [
        "Jouer à des jeux VR autonomes sans PC ni câble",
        "Regarder des vidéos à 360° sur l'écran par œil",
        "Utiliser les deux contrôleurs Touch pour interagir avec les applications",
        "Connecter le casque à un PC via Oculus Link pour les jeux PC VR",
        "Ajuster l'IPD pour adapter l'image à sa morphologie",
        "Profiter du suivi inside-out sans balises externes",
        "Jouer dans un espace réduit grâce au mode autonome",
        "Partager le casque avec un autre utilisateur en ajustant la sangle",
        "Découvrir des expériences sociales et des applications de productivité en VR",
        "Transporter le casque grâce à son poids contenu de 503 g",
        "Choisir la version 256 Go pour stocker davantage de jeux",
        "Utiliser le casque comme écran virtuel pour regarder des films"
      ],
      medias: {
        videos: [
          {
            id: "P_V68E-hnZc",
            titre: "Introducing Oculus Quest 2",
            chaine: "Meta VR",
            url: "https://www.youtube.com/watch?v=P_V68E-hnZc"
          }
        ],
        images: [
          {
            fichier: "img/quest-2-1.jpg",
            alt: "Meta Quest 2 et ses deux contrôleurs Touch, vue d'ensemble",
            licence: "CC BY-SA 4.0",
            auteur: "Wasiul Bahar",
            attribution: "Photo : Wasiul Bahar — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Meta_quest_2_01.jpg"
          },
          {
            fichier: "img/quest-2-2.jpg",
            alt: "Meta Quest 2, vue de face avec les caméras de suivi",
            licence: "CC BY-SA 4.0",
            auteur: "Wasiul Bahar",
            attribution: "Photo : Wasiul Bahar — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Meta_quest_2_02.jpg"
          },
          {
            fichier: "img/quest-2-3.jpg",
            alt: "Meta Quest 2 posé avec ses contrôleurs et sa sangle",
            licence: "CC BY-SA 4.0",
            auteur: "Wasiul Bahar",
            attribution: "Photo : Wasiul Bahar — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:Meta_quest_2_03.jpg"
          }
        ]
      },
      article: {
        titre: "Quest 2 : la réalité virtuelle autonome à 299 dollars",
        contenu: [
          "Dévoilé le 16 septembre 2020 et commercialisé le 13 octobre 2020, le Quest 2 arrive avec une promesse simple : rendre la VR autonome plus accessible. Meta, alors Facebook, abaisse le prix d'entrée à 299 $ pour la version 64 Go, contre 399 $ pour le premier Quest, et propose une version 256 Go à 399 $. Le casque sera rebaptisé Meta Quest 2 en 2022.",
          "La puce Qualcomm Snapdragon XR2 et les 6 Go de RAM LPDDR4X apportent une nette progression par rapport au Quest d'origine. L'écran LCD affiche 1832 × 1920 pixels par œil, avec un rendu plus net et moins d'effet de grille. Au lancement, l'affichage est limité à 72 Hz, avec un mode 90 Hz expérimental ; une mise à jour de novembre 2020 étend le 90 Hz aux jeux.",
          "Le casque fonctionne de manière autonome, sans PC ni capteurs externes, grâce au suivi inside-out assuré par quatre caméras. Deux contrôleurs Touch sont fournis. Un réglage intégré de l'IPD permet d'ajuster la distance interpupillaire, et le poids de 503 g reste inférieur à celui du premier Quest, ce qui améliore le confort sur des sessions prolongées.",
          "La compatibilité Oculus Link permet de brancher le casque à un PC pour accéder aux jeux PC VR, ce qui élargit considérablement la bibliothèque. En autonome, le Quest 2 donne accès au store Oculus et à des applications de jeu, de vidéo, de sport et de productivité. Le stockage de 64 Go peut être limitant si l'on accumule les jeux volumineux, d'où l'intérêt de la version 256 Go.",
          "Ses points forts sont le prix, la simplicité de mise en route, le suivi sans balises et la polyvalence entre autonome et PC VR. Ses limites tiennent à l'autonomie, à la sangle d'origine peu confortable pour certains utilisateurs et à la nécessité d'un compte Facebook à l'époque du lancement. Le catalogue d'applications et la qualité des contrôleurs restent ses arguments principaux.",
          "Le Quest 2 s'adresse aux personnes qui veulent découvrir la VR sans investir dans un PC gaming ni dans des capteurs externes. Il convient aussi aux joueurs PC qui souhaitent un casque polyvalent via Oculus Link. Pour un usage intensif, il faut prévoir une sangle de remplacement, une batterie externe et éventuellement une version 256 Go pour le stockage."
        ]
      },
      sourcesVerifiees: [
        { libelle: "Annonce officielle Meta « Introducing Oculus Quest 2 » (16/09/2020) : prix de 299 $, disponibilité au 13/10/2020, Snapdragon XR2, 6 Go de RAM, écran 1832 × 1920 par œil, 90 Hz, IPD, Oculus Link", url: "https://about.fb.com/news/2020/09/introducing-oculus-quest-2-the-next-generation-of-all-in-one-vr/", date: "2026-11-14" },
        { libelle: "Wikipédia EN « Quest 2 » : versions 64 Go à 299 $ et 256 Go à 399 $, poids de 503 g, lancement le 13/10/2020, mise à jour 90 Hz de novembre 2020", url: "https://en.wikipedia.org/wiki/Quest_2", date: "2026-11-14" }
      ],
      manquants: [
        "Prix public officiel en euros non publié dans la source consultée : le montant affiché est le prix de lancement américain",
        "Autonomie annoncée non relevée dans la source consultée",
        "Référence/SKU détaillée non publiée dans les sources consultées",
        "Fiche produit Meta actuelle remplacée par les modèles suivants, certaines informations du Quest 2 ne sont plus accessibles"
      ]
    },
    {
      id: "hp-reverb-g2",
      marque: "HP",
      modele: "Reverb G2",
      rayon: "vr",
      annee: 2020,
      dateSortie: null,
      sourceAnnee: {
        url: "https://www.hp.com/us-en/newsroom/press-releases/2020/hp-valve-microsoft-next-gen-virtual-reality-headset.html",
        date: "2026-11-14"
      },
      sourceFiche: "https://www.hp.com/us-en/newsroom/press-releases/2020/hp-valve-microsoft-next-gen-virtual-reality-headset.html",
      ficheFabricant: "https://www.hp.com/us-en/newsroom/press-releases/2020/hp-valve-microsoft-next-gen-virtual-reality-headset.html",
      description: "Casque de réalité virtuelle filaire développé par HP en collaboration avec Valve et Microsoft, annoncé le 28 mai 2020 et disponible à l'automne 2020. Le Reverb G2 affiche 2K × 2K par œil, un champ de vision de 114°, des lentilles conçues par Valve, un suivi inside-out à quatre caméras, un réglage manuel de l'IPD et un audio spatial. Il fonctionne avec Windows Mixed Reality et SteamVR, et est vendu 599 $.",
      variantes: [
        {
          groupe: "Édition",
          options: [
            { libelle: "Casque et deux contrôleurs", prix: 599, dispo: false, lienOfficiel: { url: "https://www.hp.com/us-en/newsroom/press-releases/2020/hp-valve-microsoft-next-gen-virtual-reality-headset.html", precision: "Prix de lancement annoncé par HP pour les États-Unis", verifie: "2026-11-14" } }
          ]
        }
      ],
      caracteristiques: [
        { libelle: "Écran", valeur: "2K × 2K par œil (2160 × 2160 pixels)" },
        { libelle: "Champ de vision", valeur: "114°" },
        { libelle: "Lentilles", valeur: "Conçues par Valve, dalle full RGB stripe" },
        { libelle: "Suivi", valeur: "Inside-out par quatre caméras" },
        { libelle: "IPD", valeur: "Réglage manuel de la distance interpupillaire" },
        { libelle: "Audio", valeur: "Haut-parleurs intégrés avec audio spatial" },
        { libelle: "Masque", valeur: "Basculable à 90° pour passer du virtuel au réel" },
        { libelle: "Contrôleurs", valeur: "Deux contrôleurs inclus, pré-appairables en Bluetooth" },
        { libelle: "Compatibilité", valeur: "Windows Mixed Reality et SteamVR" },
        { libelle: "Connexion", valeur: "Casque filaire" }
      ],
      prix: {
        montant: 599,
        devise: "USD",
        marche: "États-Unis, prix de lancement",
        libelle: "Casque et deux contrôleurs",
        date: "2020-05-28",
        source: "https://www.hp.com/us-en/newsroom/press-releases/2020/hp-valve-microsoft-next-gen-virtual-reality-headset.html"
      },
      disponibilite: {
        statut: "archive",
        libelle: "Précommandes ouvertes le 28 mai 2020, disponibilité annoncée pour l'automne 2020 ; modèle aujourd'hui arrêté",
        date: "2026-11-14",
        source: "https://www.hp.com/us-en/newsroom/press-releases/2020/hp-valve-microsoft-next-gen-virtual-reality-headset.html"
      },
      accessoires: [
        {
          nom: "Contrôleurs HP Reverb G2",
          compatibilite: "Contrôleurs fournis avec le casque, pré-appairables en Bluetooth",
          source: "https://www.hp.com/us-en/newsroom/press-releases/2020/hp-valve-microsoft-next-gen-virtual-reality-headset.html"
        }
      ],
      bundles: [],
      usages: [
        "Jouer à des jeux SteamVR avec un casque à haute résolution",
        "Utiliser Windows Mixed Reality pour les applications compatibles",
        "Lire du texte et observer des textures fines grâce aux dalles 2K par œil",
        "Profiter d'un champ de vision de 114° pour l'immersion",
        "Ajuster manuellement l'IPD à sa morphologie",
        "Basculer le masque à 90° pour repasser rapidement au monde réel",
        "Utiliser les quatre caméras pour le suivi des contrôleurs",
        "Écouter l'audio spatial intégré sans casque supplémentaire",
        "Travailler ou créer dans des applications VR compatibles",
        "S'initier à la VR avec un casque filaire stable",
        "Comparer les rendus des jeux PC VR à haute densité de pixels",
        "Utiliser les contrôleurs pré-appairés en Bluetooth"
      ],
      medias: {
        videos: [],
        images: []
      },
      article: {
        titre: "HP Reverb G2 : la haute résolution avec Valve et Microsoft",
        contenu: [
          "Annoncé le 28 mai 2020, le HP Reverb G2 est le fruit d'une collaboration entre HP, Valve et Microsoft. HP apporte son expérience du Reverb G1, Valve conçoit les lentilles et Microsoft fournit la plateforme Windows Mixed Reality. Le casque est présenté comme une évolution haut de gamme du Reverb, avec un objectif clair : offrir une image très nette pour les jeux et les applications professionnelles.",
          "La caractéristique principale est la résolution : 2K × 2K par œil, soit 2160 × 2160 pixels, avec des dalles full RGB stripe et des lentilles signées Valve. Le champ de vision atteint 114°, ce qui améliore l'immersion par rapport au G1. HP insiste sur la netteté du texte et des textures, un point important pour la lecture, la conception et les simulateurs.",
          "Le suivi est assuré par quatre caméras en inside-out, sans balises externes. HP annonce un volume de suivi des contrôleurs doublé par rapport à la génération précédente. Le réglage de l'IPD est manuel, et le masque peut basculer à 90° pour passer rapidement du virtuel au réel. L'audio spatial est intégré au casque, avec des haut-parleurs dédiés.",
          "Le Reverb G2 est un casque filaire, compatible Windows Mixed Reality et SteamVR. Il est vendu 599 $ avec deux contrôleurs pré-appairables en Bluetooth. HP annonce des précommandes à partir du 28 mai 2020 et une disponibilité à l'automne 2020. Le casque vise autant les joueurs PC que les professionnels qui utilisent la VR pour la formation, la visualisation ou la collaboration.",
          "Ses points forts sont la résolution, la qualité des lentilles, le confort du masque basculable et la compatibilité avec deux écosystèmes. Ses limites tiennent au câble, à la nécessité d'un PC compatible et à un prix supérieur à celui des casques autonomes. Le suivi inside-out, bien qu'amélioré, reste dépendant de l'éclairage de la pièce et de la disposition des caméras.",
          "Le HP Reverb G2 s'adresse aux utilisateurs qui privilégient la qualité d'image et la compatibilité PC plutôt que la mobilité. Il convient aux simulations, à la visualisation architecturale, à la formation et aux jeux SteamVR exigeants. Pour un usage nomade ou sans PC, un casque autonome comme le Quest 2 est plus adapté ; pour la netteté et le confort d'un casque filaire, le Reverb G2 reste une référence de 2020."
        ]
      },
      sourcesVerifiees: [
        { libelle: "Communiqué HP « HP, Valve, and Microsoft Removing Distance Barriers with Next-Gen Virtual Reality Headset » (28/05/2020) : résolution 2K × 2K par œil, champ de vision 114°, lentilles Valve, quatre caméras, IPD manuel, audio spatial, prix de 599 $, disponibilité à l'automne 2020", url: "https://www.hp.com/us-en/newsroom/press-releases/2020/hp-valve-microsoft-next-gen-virtual-reality-headset.html", date: "2026-11-14" }
      ],
      manquants: [
        "Aucune photographie du HP Reverb G2 sous licence libre vérifiée : images laissées vides plutôt que d'utiliser une photo d'un autre modèle",
        "Aucune vidéo officielle HP du Reverb G2 de 2020 vérifiée : vidéo laissée vide plutôt que d'utiliser une vidéo tierce",
        "Jour exact de disponibilité non communiqué par HP (annonce d'une disponibilité à l'automne 2020)",
        "Fréquence de rafraîchissement, poids et longueur de câble non relevés dans le communiqué consulté",
        "Prix public officiel en euros non publié dans la source consultée : le montant affiché est le prix de lancement américain"
      ]
    },
    {
      id: "alienware-m15-r3",
      marque: "Alienware",
      modele: "m15 R3",
      rayon: "informatique",
      annee: 2020,
      dateSortie: "2020-05-21",
      sourceAnnee: {
        url: "https://www.dell.com/en-us/shop/cty/pdp/spd/alienware-m15-r3-laptop",
        date: "2026-11-14"
      },
      sourceFiche: "https://www.dell.com/en-us/shop/cty/pdp/spd/alienware-m15-r3-laptop",
      ficheFabricant: "https://www.dell.com/en-us/shop/cty/pdp/spd/alienware-m15-r3-laptop",
      description: "Ordinateur portable gaming de 15,6 pouces annoncé par Alienware en mai 2020. Le m15 R3 est proposé avec des processeurs Intel Core de 10e génération jusqu'au i9-10980HK, des cartes graphiques NVIDIA jusqu'à la GeForce RTX 2080 Super 8 Go Max-Q, jusqu'à 32 Go de DDR4-2666 et un stockage RAID de 4 To complété par 512 Go. Son châssis mesure 360,3 mm de large pour 17,9 à 20,5 mm d'épaisseur et un poids à partir de 2,11 kg ; il est refroidi par chambre à vapeur.",
      variantes: [
        {
          groupe: "Configuration",
          options: [
            { libelle: "Configuration de base", prix: 1479.99, dispo: false, lienOfficiel: { url: "https://www.dell.com/en-us/shop/cty/pdp/spd/alienware-m15-r3-laptop", precision: "Prix de départ relevé sur la fiche Dell archivée", verifie: "2026-11-14" } }
          ]
        }
      ],
      caracteristiques: [
        { libelle: "Processeur", valeur: "Jusqu'à Intel Core i9-10980HK (10e génération)" },
        { libelle: "Processeur graphique", valeur: "Jusqu'à NVIDIA GeForce RTX 2080 Super 8 Go GDDR6 avec Max-Q Design" },
        { libelle: "Mémoire", valeur: "Jusqu'à 32 Go DDR4-2666" },
        { libelle: "Stockage", valeur: "Jusqu'à 4 To (2 × 2 To PCIe M.2 RAID 0) + 512 Go PCIe M.2" },
        { libelle: "Écran", valeur: "15,6 pouces, jusqu'à 300 Hz selon la configuration" },
        { libelle: "Refroidissement", valeur: "Chambre à vapeur entre le processeur et les caloducs en cuivre" },
        { libelle: "Système d'exploitation", valeur: "Windows 10 Home ou Windows 10 Pro" },
        { libelle: "Dimensions", valeur: "360,3 × 276 × 17,9 à 20,5 mm" },
        { libelle: "Poids", valeur: "À partir de 2,11 kg" }
      ],
      prix: {
        montant: 1479.99,
        devise: "USD",
        marche: "États-Unis, prix de départ",
        libelle: "Configuration de base, prix relevé sur la fiche Dell archivée",
        date: "2020-12-01",
        source: "https://www.dell.com/en-us/shop/cty/pdp/spd/alienware-m15-r3-laptop"
      },
      disponibilite: {
        statut: "archive",
        libelle: "Commercialisé à partir du 21 mai 2020 ; modèle remplacé depuis par les générations suivantes",
        date: "2026-11-14",
        source: "https://www.dell.com/en-us/shop/cty/pdp/spd/alienware-m15-r3-laptop"
      },
      accessoires: [],
      bundles: [],
      usages: [
        "Jouer à des jeux PC en 1080p ou en 4K selon la configuration graphique",
        "Profiter d'un écran jusqu'à 300 Hz pour les jeux compétitifs",
        "Configurer un stockage RAID 0 de 4 To pour les jeux volumineux",
        "Utiliser la chambre à vapeur pour maintenir les performances en jeu",
        "Travailler sur des projets créatifs avec un processeur jusqu'au i9-10980HK",
        "Transporter le portable grâce à un poids à partir de 2,11 kg",
        "Brancher un écran externe et des périphériques gaming",
        "Choisir une configuration RTX 2080 Super pour le ray tracing",
        "Utiliser Windows 10 Pro pour un usage professionnel",
        "Jouer en réseau avec une connexion filaire ou Wi-Fi",
        "Personnaliser les éclairages du châssis Alienware",
        "Remplacer une tour de bureau par un portable gaming compact"
      ],
      medias: {
        videos: [],
        images: []
      },
      article: {
        titre: "Alienware m15 R3 : le portable gaming compact de 2020",
        contenu: [
          "Annoncé en mai 2020, l'Alienware m15 R3 est présenté par Dell comme le portable gaming 15 pouces le plus fin et le plus puissant de la marque à cette date. Il reprend le format compact de la génération précédente, avec un châssis de 360,3 mm de large, 276 mm de profondeur et une épaisseur comprise entre 17,9 et 20,5 mm selon l'écran choisi.",
          "La configuration peut aller jusqu'à un processeur Intel Core i9-10980HK de 10e génération, une carte graphique NVIDIA GeForce RTX 2080 Super 8 Go GDDR6 avec Max-Q Design, 32 Go de DDR4-2666 et un stockage RAID 0 de 4 To complété par 512 Go. L'écran de 15,6 pouces peut atteindre 300 Hz, ce qui vise clairement les joueurs compétitifs.",
          "Le refroidissement repose sur une chambre à vapeur dédiée entre le processeur et les caloducs en cuivre. Alienware met en avant cette solution pour maintenir des fréquences élevées sur des sessions prolongées. Le poids démarre à 2,11 kg, ce qui reste contenu pour un portable gaming de cette puissance, mais reste supérieur à celui d'un ultraportable.",
          "Le m15 R3 est proposé avec Windows 10 Home ou Windows 10 Pro. Dell insiste sur la personnalisation : les configurations varient fortement, avec plusieurs options d'écran, de GPU et de stockage. Le prix de départ relevé sur la fiche archivée est de 1 479,99 $, mais les configurations haut de gamme dépassent largement ce montant.",
          "Ses points forts sont la puissance, l'écran rapide, le refroidissement par chambre à vapeur et la compacité relative. Ses limites tiennent au prix des configurations hautes, au poids, à l'autonomie limitée et à la chaleur produite en charge. Pour un usage nomade léger, un modèle plus sobre est préférable ; pour le jeu et la création, le m15 R3 assume son positionnement.",
          "L'Alienware m15 R3 s'adresse aux joueurs et aux créateurs qui veulent un portable puissant sans passer à un 17 pouces. Il peut remplacer une tour pour le jeu, le montage ou la 3D, à condition d'accepter un encombrement et une consommation élevés. Les accessoires Alienware et les périphériques gaming complètent l'écosystème."
        ]
      },
      sourcesVerifiees: [
        { libelle: "Fiche produit Dell archivée « Alienware m15 R3 Gaming Laptop » (snapshot du 01/12/2020) : processeur jusqu'au i9-10980HK, RTX 2080 Super 8 Go Max-Q, 32 Go DDR4-2666, stockage jusqu'à 4 To + 512 Go, écran 15,6 pouces jusqu'à 300 Hz, dimensions, poids, prix de départ", url: "https://www.dell.com/en-us/shop/cty/pdp/spd/alienware-m15-r3-laptop", date: "2026-11-14" }
      ],
      manquants: [
        "Aucune photographie de l'Alienware m15 R3 sous licence libre vérifiée : images laissées vides plutôt que d'utiliser une photo d'un autre modèle",
        "Aucune vidéo officielle Dell/Alienware du m15 R3 vérifiée : vidéo laissée vide plutôt que d'utiliser une vidéo tierce",
        "Prix public officiel en euros non publié dans la source consultée : le montant affiché est le prix de départ américain",
        "Autonomie et niveau sonore non détaillés dans la fiche consultée",
        "Référence/SKU dépend de la configuration, non détaillée dans la source consultée"
      ]
    },
    {
      id: "msi-bravo-17",
      marque: "MSI",
      modele: "Bravo 17",
      rayon: "informatique",
      annee: 2020,
      dateSortie: "2020-04-21",
      sourceAnnee: {
        url: "https://www.msi.com/Laptop/Bravo-17-A4DX",
        date: "2026-11-14"
      },
      sourceFiche: "https://www.msi.com/Laptop/Bravo-17-A4DX/Specification",
      ficheFabricant: "https://www.msi.com/Laptop/Bravo-17-A4DX/Specification",
      description: "Ordinateur portable gaming de 17,3 pouces lancé par MSI en 2020, décliné en Bravo 17 A4DDR (144 Hz) et A4DDK (120 Hz). Il associe un processeur AMD Ryzen 7 4000 H-series jusqu'au 4800H à une Radeon RX 5500M 4 Go GDDR6, jusqu'à 64 Go de DDR4-3200, un emplacement M.2 NVMe et un emplacement 2,5 pouces. Le châssis mesure 397 × 260 × 23 mm pour 2,3 kg et intègre une batterie de 51 Wh avec un adaptateur de 180 W.",
      variantes: [
        {
          groupe: "Modèle",
          options: [
            { libelle: "Bravo 17 A4DDR (144 Hz)", prix: null, dispo: false, lienOfficiel: { url: "https://www.msi.com/Laptop/Bravo-17-A4DX/Specification", precision: "Fiche de spécifications officielle MSI, prix non publié", verifie: "2026-11-14" } },
            { libelle: "Bravo 17 A4DDK (120 Hz)", prix: null, dispo: false, lienOfficiel: { url: "https://www.msi.com/Laptop/Bravo-17-A4DX/Specification", precision: "Fiche de spécifications officielle MSI, prix non publié", verifie: "2026-11-14" } }
          ]
        }
      ],
      caracteristiques: [
        { libelle: "Processeur", valeur: "Jusqu'à AMD Ryzen 7 4000 H-series (dont Ryzen 7 4800H)" },
        { libelle: "Processeur graphique", valeur: "AMD Radeon RX 5500M avec 4 Go GDDR6" },
        { libelle: "Écran", valeur: "17,3 pouces Full HD 1920 × 1080 IPS-Level, 144 Hz (A4DDR) ou 120 Hz (A4DDK)" },
        { libelle: "Mémoire", valeur: "DDR4-3200, 2 emplacements SO-DIMM, jusqu'à 64 Go" },
        { libelle: "Stockage", valeur: "1 × M.2 SSD combo NVMe PCIe Gen3 / SATA + 1 × 2,5 pouces SATA HDD" },
        { libelle: "Webcam", valeur: "HD 720p à 30 images par seconde" },
        { libelle: "Clavier", valeur: "Rétroéclairage rouge (A4DDR) ou RGB par touche (A4DDK)" },
        { libelle: "Réseau", valeur: "Ethernet Gigabit, Wi-Fi 6 802.11ax, Bluetooth 5.1" },
        { libelle: "Connectique", valeur: "1 × RJ45, 1 × HDMI (4K 30 Hz), 1 × USB-C USB 3.2 Gen 1, 3 × USB-A USB 3.2 Gen 1" },
        { libelle: "Audio", valeur: "Entrée micro et sortie casque HiFi" },
        { libelle: "Batterie", valeur: "51 Wh" },
        { libelle: "Alimentation", valeur: "Adaptateur 180 W" },
        { libelle: "Dimensions", valeur: "397 × 260 × 23 mm" },
        { libelle: "Poids", valeur: "2,3 kg avec batterie" },
        { libelle: "Système d'exploitation", valeur: "Windows 10 Home" }
      ],
      prix: null,
      disponibilite: {
        statut: "archive",
        libelle: "Annoncé le 21 avril 2020, disponible à partir de mai 2020 ; modèles remplacés depuis",
        date: "2026-11-14",
        source: "https://www.msi.com/Laptop/Bravo-17-A4DX"
      },
      accessoires: [],
      bundles: [],
      usages: [
        "Jouer à des jeux PC en Full HD sur un écran 17,3 pouces",
        "Profiter d'un écran 144 Hz pour les jeux compétitifs",
        "Utiliser le processeur Ryzen 7 4800H pour le multitâche",
        "Ajouter jusqu'à 64 Go de RAM pour les charges lourdes",
        "Installer un SSD NVMe et un disque 2,5 pouces pour le stockage",
        "Connecter un écran externe via HDMI",
        "Brancher des périphériques en USB-C ou USB-A",
        "Jouer en réseau filaire grâce à l'Ethernet Gigabit",
        "Profiter du Wi-Fi 6 pour les téléchargements",
        "Utiliser le clavier rétroéclairé en faible lumière",
        "Transporter le portable grâce à son poids de 2,3 kg",
        "Travailler sur des projets créatifs avec la Radeon RX 5500M",
        "Utiliser la webcam 720p pour les appels vidéo"
      ],
      medias: {
        videos: [
          {
            id: "AQtgO_w7fZI",
            titre: "Introducing The Brand New Bravo 15/17 – Tutorial and Know-How Ep. 20 | MSI",
            chaine: "MSI Gaming",
            url: "https://www.youtube.com/watch?v=AQtgO_w7fZI"
          }
        ],
        images: [
          {
            fichier: "img/msi-bravo-17-1.jpg",
            alt: "MSI Bravo 17, vue de trois quarts avant",
            licence: "CC BY-SA 4.0",
            auteur: "D-Kuru",
            attribution: "Photo : D-Kuru — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:MSI_Bravo_17_(0017FK-007)-front_oblique_PNr%C2%B00757.jpg"
          },
          {
            fichier: "img/msi-bravo-17-2.jpg",
            alt: "MSI Bravo 17, capot fermé",
            licence: "CC BY-SA 4.0",
            auteur: "D-Kuru",
            attribution: "Photo : D-Kuru — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:MSI_Bravo_17_(0017FK-007)-top_cover_PNr%C2%B00759.jpg"
          },
          {
            fichier: "img/msi-bravo-17-3.jpg",
            alt: "MSI Bravo 17, clavier et touchpad",
            licence: "CC BY-SA 4.0",
            auteur: "D-Kuru",
            attribution: "Photo : D-Kuru — licence CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons",
            source: "https://commons.wikimedia.org/wiki/File:MSI_Bravo_17_(0017FK-007)-top_keyboard_PNr%C2%B00758.jpg"
          }
        ]
      },
      article: {
        titre: "MSI Bravo 17 : le portable gaming tout AMD de 17 pouces",
        contenu: [
          "Annoncé le 21 avril 2020, le MSI Bravo 17 est l'un des premiers portables gaming à associer un processeur AMD Ryzen 7 4000 H-series à une carte graphique AMD Radeon RX 5500M. MSI décline le modèle en deux versions : le Bravo 17 A4DDR avec un écran 144 Hz et le Bravo 17 A4DDK avec un écran 120 Hz.",
          "La configuration peut embarquer jusqu'à un Ryzen 7 4800H, une Radeon RX 5500M avec 4 Go de GDDR6, jusqu'à 64 Go de DDR4-3200 sur deux emplacements SO-DIMM, un emplacement M.2 NVMe PCIe Gen3 / SATA et un emplacement 2,5 pouces pour un disque SATA. L'écran de 17,3 pouces est un Full HD 1920 × 1080 IPS-Level, avec FreeSync Premium selon MSI.",
          "Le châssis mesure 397 × 260 × 23 mm pour 2,3 kg avec batterie. La connectique comprend un port RJ45, un HDMI limité à 4K 30 Hz, un USB-C USB 3.2 Gen 1 et trois USB-A USB 3.2 Gen 1, ainsi qu'une entrée micro et une sortie casque HiFi. Le réseau repose sur l'Ethernet Gigabit, le Wi-Fi 6 802.11ax et le Bluetooth 5.1.",
          "La batterie de 51 Wh est associée à un adaptateur de 180 W, ce qui indique un usage principalement sur secteur. Le clavier est rétroéclairé en rouge sur la version A4DDR, ou en RGB par touche sur la version A4DDK. La webcam HD 720p à 30 images par seconde suffit pour les appels vidéo, sans plus.",
          "Ses points forts sont le prix contenu de la plateforme AMD, l'écran 17,3 pouces à 144 Hz, l'évolutivité de la mémoire et du stockage, et la connectique complète. Ses limites tiennent à la puissance de la RX 5500M, à l'écran HDMI limité à 4K 30 Hz, au poids de 2,3 kg et à une autonomie probablement faible en jeu. MSI ne publie pas de prix public dans la fiche consultée.",
          "Le Bravo 17 s'adresse aux joueurs qui veulent un grand écran sans payer le prix d'un modèle haut de gamme, ainsi qu'aux utilisateurs qui ont besoin d'un portable évolutif pour le jeu et la bureautique. Il convient aux sessions sur secteur et aux setups fixes, moins aux déplacements fréquents. Les deux versions se distinguent surtout par la fréquence de l'écran et le rétroéclairage du clavier."
        ]
      },
      sourcesVerifiees: [
        { libelle: "Fiche de spécifications officielle MSI « Bravo 17 A4DDR / A4DDK » : processeur, GPU, écran, mémoire, stockage, réseau, connectique, batterie, dimensions et poids", url: "https://www.msi.com/Laptop/Bravo-17-A4DX/Specification", date: "2026-11-14" },
        { libelle: "Page produit MSI archivée « Bravo 17 » (snapshot du 24/10/2020) : présentation, FreeSync Premium, écrans 120 Hz et 144 Hz", url: "https://www.msi.com/Laptop/Bravo-17-A4DX", date: "2026-11-14" },
        { libelle: "Communiqué MSI repris par TechPowerUp « MSI Announces Bravo 15 and Bravo 17 Notebooks » (21/04/2020) : date d'annonce", url: "https://www.techpowerup.com/forums/threads/msi-announces-bravo-15-and-bravo-17-notebooks-with-4800h-and-rx-5500m.266048/", date: "2026-11-14" }
      ],
      manquants: [
        "Prix public officiel non publié sur la fiche MSI consultée : aucun montant affiché par prudence",
        "Autonomie annoncée non détaillée dans les sources consultées",
        "Référence/SKU dépend de la configuration (A4DDR ou A4DDK), non détaillée dans la source consultée",
        "Jour exact de mise en vente non communiqué (annonce le 21 avril 2020, disponibilité annoncée en mai 2020)"
      ]
    }
  ]
};
