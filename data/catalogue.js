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
            { libelle: "512 Go", prix: 1039, dispo: true },
            { libelle: "512 Go + Steam Controller", prix: 1108, dispo: true },
            { libelle: "2 To", prix: 1359, dispo: true },
            { libelle: "2 To + Steam Controller", prix: 1428, dispo: true }
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
            { libelle: "256 Go", prix: 1049, dispo: true },
            { libelle: "1 To", prix: 1279, dispo: true }
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
            { libelle: "Steam Controller (Puck inclus)", prix: 99, dispo: false }
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
            { libelle: "Console seule", prix: null, dispo: true },
            { libelle: "Pack Mario Kart World (code de téléchargement inclus)", prix: null, dispo: true }
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
        "Contenu de la boîte exact non confirmé sur les sources officielles consultées"
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
            { libelle: "Sans lecteur de disque", prix: null, dispo: true }
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
            { libelle: "512 Go", prix: 779, dispo: true },
            { libelle: "1 To (verre antireflet)", prix: 919, dispo: true }
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
    }
  ]
};
