import type { Translations } from '#i18n/types'

const fr: Translations = {
    common: {
        loading: 'Chargement...',
        noResults: 'Aucun résultat trouvé.',
        save: 'Enregistrer',
        cancel: 'Annuler',
        confirm: 'Confirmer',
        delete: 'Supprimer',
        deleting: 'Suppression...',
        back: 'Retour',
        create: 'Créer',
        done: 'Terminé',
        copy: 'Copier',
        copied: 'Copié.',
        copiedWithLabel: '{{label}} copié.',
        show: 'Afficher',
        hide: 'Masquer',
        tryAgain: 'Réessayer',
        addKey: 'Ajouter une clé',
        close: 'Fermer',
        none: 'Aucun',
        all: 'Tout',
        unknown: 'Inconnu',
        pageNotFound: 'Page introuvable',
        closeNotification: 'Fermer la notification',
        beta: 'Bêta',
        brandName: 'ClawHost',
        brandNameGo: 'ClawHost Go',
        brandNameGoVersion: 'ClawHost Go {{version}}',
        pageTitleWithBrand: '{{title}} - ClawHost',
        menuFile: 'Fichier',
        menuEdit: 'Édition',
        menuView: 'Présentation',
        menuWindow: 'Fenêtre',
        menuHelp: 'Aide',
        scrollToBottom: 'Défiler vers le bas',
        second: 'seconde',
        seconds: 'secondes'
    },
    language: {
        en: 'English',
        fr: 'Français',
        es: 'Español',
        de: 'Deutsch',
        zh: '中文',
        hi: 'हिन्दी',
        ar: 'العربية',
        ru: 'Русский',
        ja: '日本語',
        tr: 'Türkçe',
        it: 'Italiano',
        pl: 'Polski',
        nl: 'Nederlands',
        pt: 'Português',
        switchLanguage: 'Langue'
    },
    theme: {
        light: 'Clair',
        dark: 'Sombre',
        system: 'Système',
        toggleTheme: 'Changer le thème'
    },
    nav: {
        claws: 'Claws',
        sshKeys: 'Clés SSH',
        account: 'Compte',
        affiliate: 'Affiliation',
        license: 'Licence',
        signOut: 'Se déconnecter',
        admin: 'Admin',
        login: 'Connexion',
        deploy: 'Déployer',
        deployOpenClaw: 'Déployer OpenClaw',
        mainNavigation: 'Navigation principale',
        footerNavigation: 'Navigation du pied de page',
        toggleMenu: 'Ouvrir le menu',
        cloud: 'Cloud',
        cloudSubtitle: 'Technique',
        go: 'Go',
        goSubtitle: 'Non-technique'
    },
    go: {
        pageTitle: 'ClawHost Go',
        heroTitle1: 'Déployez OpenClaw.',
        heroTitle2: 'Localement. Instantanément.',
        badge: 'OpenClaw et Hermes en local',
        tutorialBadge: 'Comment démarrer sur Go',
        description:
            'Un client de bureau léger pour gérer vos instances OpenClaw. Déployez, surveillez et contrôlez vos claws — directement depuis votre machine.',
        features: 'Fonctionnalités',
        whyClawHostGo: 'Fonctions tout-en-un',
        featuresDescription:
            "Pourquoi nous valons le coup d'essayer, les fonctionnalités parlent d'elles-mêmes.",
        zeroConfigDescription:
            "Économisez des heures de configuration de serveur, d'OpenClaw et d'Hermes. Tout est préinstallé et prêt en quelques minutes.",
        ownedDataDescription:
            'Tout fonctionne sur votre appareil. Pas de serveurs cloud, pas de tiers, aucune donnée ne quitte votre machine.',
        terminalAccessDescription:
            "Accédez au terminal de votre instance OpenClaw directement depuis l'application. Aucun client SSH externe requis.",
        simplePricing: 'Tarification simple',
        simplePricingDescription:
            'Une licence, tout illimité. Pas de factures mensuelles, pas de limites, pas de frais cachés.',
        localDomain: 'Domaine local personnalisé',
        localDomainDescription:
            'Accédez à votre OpenClaw via un domaine local personnalisé. Des URLs propres sur votre réseau.',
        secureDescription:
            'Vos données ne quittent jamais votre appareil. Entièrement isolé, entièrement chiffré, entièrement à vous.',
        pricing: 'Tarifs',
        pricingTitle: 'Tarif unique et simple',
        pricingDescription:
            "Pas d'abonnement, pas de frais cachés. Une licence, utilisation illimitée.",
        pricingPrice: '{{price}} $',
        pricingLabel: 'Paiement unique',
        pricingFeature1: 'Licence à vie',
        pricingFeature2: 'Claws illimités',
        pricingFeature3: 'Toutes les mises à jour futures',
        pricingFeature4: "Aucune limite d'utilisation",
        pricingFeature5: 'Support prioritaire',
        pricingFeature6: 'Domaine local personnalisé',
        comparison: 'Comparaison',
        comparisonTitle: 'Go vs Cloud',
        comparisonDescription:
            'Choisissez ce qui vous convient. Go fonctionne localement, Cloud sur des serveurs dédiés.',
        comparisonLocalUs: 'Fonctionne entièrement sur votre appareil',
        comparisonLocalOthers: 'Fonctionne sur des serveurs distants',
        comparisonPricingUs: 'Paiement unique',
        comparisonPricingOthers: 'Abonnement mensuel',
        comparisonDataUs: 'Les données restent sur votre machine',
        comparisonDataOthers: 'Données sur des serveurs cloud',
        comparisonSetupUs: 'Installer et lancer instantanément',
        comparisonSetupOthers: 'Déployer en un clic',
        comparisonUpdatesUs: 'Mises à jour automatiques',
        comparisonUpdatesOthers: 'Mises à jour automatiques',
        faqTitle: 'Questions',
        faqHeading: 'Questions fréquentes',
        faqDescription: 'Tout ce que vous devez savoir sur ClawHost Go.',
        faq1Question: "Qu'est-ce que ClawHost Go ?",
        faq1Answer:
            "ClawHost Go est une application de bureau légère qui vous permet d'exécuter OpenClaw localement sur votre machine. Pas de serveurs cloud nécessaires — installez, lancez et utilisez OpenClaw en quelques secondes.",
        faq2Question: 'Quelle est la différence entre Go et ClawHost Cloud ?',
        faq2Answer:
            "ClawHost Cloud déploie OpenClaw sur des serveurs distants dédiés avec une disponibilité 24h/24 et un accès mondial. ClawHost Go fait tout tourner localement sur votre appareil — idéal pour la confidentialité, l'utilisation hors ligne et les configurations simples.",
        faq3Question: "Ai-je besoin d'une connexion internet ?",
        faq3Answer:
            "ClawHost Go fonctionne hors ligne pour une utilisation locale. Une connexion internet n'est nécessaire que pour la configuration initiale, les mises à jour et les fonctionnalités nécessitant des appels API externes.",
        faq4Question: 'La licence est-elle un paiement unique ?',
        faq4Answer:
            "Oui. Vous payez une fois et obtenez un accès à vie à ClawHost Go, y compris toutes les futures mises à jour. Pas d'abonnement, pas de frais récurrents.",
        faq5Question: "Quels systèmes d'exploitation sont pris en charge ?",
        faq5Answer:
            'ClawHost Go prend en charge Windows et macOS. Les deux plateformes bénéficient des mêmes fonctionnalités et reçoivent les mises à jour simultanément.',
        faq6Question: 'Puis-je passer de Go à Cloud plus tard ?',
        faq6Answer:
            'Absolument. Vous pouvez exporter votre configuration OpenClaw depuis Go et la déployer sur ClawHost Cloud à tout moment. Les deux plateformes sont entièrement compatibles.',
        statsPrice: '{{price}} $',
        statsLifetime: 'À vie',
        statsOneTime: 'Unique',
        statsPayment: 'Paiement',
        statsLocal: 'Local',
        statsLocally: 'Fonctionne localement',
        statsZero: 'Zéro',
        statsZeroConfig: 'Zéro config',
        ctaTitle: 'Exécutez OpenClaw localement',
        ctaDescription:
            "Paiement unique, licence à vie. Déployez OpenClaw sur votre propre machine — pas de cloud, pas d'abonnements, pas de limites. Vos données, vos règles.",
        downloadForMac: 'Télécharger pour Mac',
        downloadVersion: 'Version {{version}}',
        downloadForWindows: 'Télécharger pour Windows',
        deviceNotSupported: "Votre appareil n'est pas encore pris en charge par ClawHost Go.",
        downloadFailed: 'Échec du téléchargement !',
        downloadStarted: 'Téléchargement démarré.',
        appleSilicon: 'Apple Silicon',
        intel: 'Intel',
        chooseMacArch: 'Quel Mac avez-vous ?',
        otherVersions: 'Autres versions',
        updateAvailable: 'La version {{version}} est disponible.',
        updateDownload: 'Télécharger',
        updateDismiss: 'Plus tard',
        clawNotFound: 'Claw introuvable !',
        clawNameAlreadyExists: 'Un claw avec ce nom existe déjà !',
        invalidSubdomain:
            'Sous-domaine invalide. Utilisez 3 à 20 lettres minuscules et chiffres !',
        subdomainAlreadyInUse: 'Ce sous-domaine est déjà utilisé !',
        clawDirectoryNotFound: 'Répertoire du claw introuvable !',
        noVersionInstalled:
            "Aucune version d'OpenClaw installée. Allez dans l'onglet Versions et installez-en une d'abord !",
        failedToStartClaw: 'Échec du démarrage du claw !',
        noVersionAssigned: "Aucune version d'OpenClaw assignée à ce claw !",
        invalidAgentName: "Nom d'agent invalide !",
        invalidPath: 'Chemin invalide !',
        fileNotFound: 'Fichier introuvable !',
        purchasingNotAvailable: "L'achat n'est pas disponible en mode local !",
        exportFailed: "Échec de l'export !",
        versionNotInstalled:
            "La version {{version}} d'OpenClaw n'est pas installée !",
        failedToStartProcess: 'Échec du démarrage du processus : {{reason}} !',
        gatewayNotReady: 'L’agent n’a pas pu se mettre en route à temps !',
        processExitedImmediately:
            "Le processus s'est terminé immédiatement. Logs :\n{{logs}}",
        processExitedImmediatelyNoLogs:
            "Le processus s'est terminé immédiatement après le démarrage !",
        processExitedWithCode:
            "Le processus s'est terminé avec le code {{code}}. Logs :\n{{logs}}",
        processExitedWithCodeNoLogs:
            "Le processus s'est terminé avec le code {{code}} !",
        processExitedUnexpectedly:
            "Le processus s'est terminé de manière inattendue !",
        failedToInstallVersion:
            "Échec de l'installation de la version {{version}} : {{reason}} !",
        oauthCancelled: 'Authentification annulée !',
        diskFull: "Plus d'espace disponible sur le disque !",
        permissionDenied: 'Permission refusée !',
        networkTimeout: 'La requête réseau a expiré !',
        failedToFetchLatestVersion:
            'Impossible de récupérer la dernière version !'
    },
    footer: {
        downloadAndroid: 'Télécharger sur Google Play',
        downloadIos: "Télécharger sur l'App Store",
        website: 'Site web',
        copyrightName: 'ClawHost',
        copyrightRights: 'Tous droits réservés.',
        termsOfService: "Conditions d'utilisation",
        privacyPolicy: 'Politique de confidentialité',
        getInTouch: 'Nous contacter',
        brandDescription:
            'Déployez OpenClaw sur votre propre VPS en un clic. Confidentialité totale, ressources dédiées, aucune infrastructure partagée.',
        builtBy: 'Créé par',
        supportedBy: 'Soutenu par',
        product: 'Produit',
        howItWorks: 'Processus',
        features: 'Fonctions',
        pricing: 'Tarifs',
        faq: 'Questions',
        changelog: 'Journal des modifications',
        compare: 'Comparaison complète',
        legalAndMore: 'Autres',
        affiliateProgram: "Programme d'affiliation",
        documentation: 'Documentation',
        productDescription:
            'Déployez vos agents OpenClaw et Hermes dans le cloud ou en local en un clic — créez, connectez et faites évoluer vos agents IA plus vite avec ClawHost.',
        ariaGithub: 'GitHub',
        ariaX: 'X',
        ariaFacebook: 'Facebook',
        ariaInstagram: 'Instagram',
        ariaThreads: 'Threads',
        ariaYoutube: 'YouTube',
        ariaTiktok: 'TikTok'
    },
    errors: {
        somethingWentWrong: 'Une erreur est survenue !',
        connectionFailed:
            'Une erreur est survenue lors de la connexion au serveur. Veuillez vérifier votre connexion et réessayer !',
        couldNotLoadData:
            'Impossible de charger les données. Veuillez réessayer !',
        notFound: 'Page introuvable !',
        pageNotFoundDescription:
            "La page que vous recherchez n'existe pas ou a été déplacée.",
        goToHomepage: "Aller à l'accueil",
        failedToLoadAgents: 'Échec du chargement des agents !',
        failedToLoadAgentsDescription:
            'Impossible de charger vos Agents. Veuillez vérifier votre connexion et réessayer !',
        failedToLoadSSHKeys: 'Échec du chargement des clés SSH !',
        failedToLoadSSHKeysDescription:
            'Impossible de charger vos clés SSH. Veuillez vérifier votre connexion et réessayer !',
        failedToUpdateProfile: 'Échec de la mise à jour du profil !',
        failedToAddSSHKey: "Échec de l'ajout de la clé SSH !",
        failedToCreateClaw: 'Échec de la création du claw !',
        failedToLoadLocations:
            'Échec du chargement des emplacements. Veuillez réessayer !',
        failedToLoadPlans:
            'Échec du chargement des offres. Veuillez réessayer !',
        invalidPlan: 'Offre sélectionnée invalide !',
        invalidLocation: 'Veuillez sélectionner un emplacement !',
        failedToGenerateKeyPair:
            'Échec de la génération de la paire de clés. Veuillez générer les clés localement !',
        unableToLoadPricing:
            'Impossible de charger les tarifs. Veuillez réessayer plus tard !',
        noPasswordAvailable: 'Aucun mot de passe disponible pour ce claw !'
    },
    api: {
        githubExchangeFailed: 'Échec de la connexion GitHub !',
        missingRequiredFields: 'Champs obligatoires manquants !',
        agentNotFound: 'Agent introuvable !',
        agentRenamed: 'Agent renommé avec succès.',
        agentEmojiUpdated: "Emoji de l'agent mis à jour.",
        failedToUpdateEmoji: "Échec de la mise à jour de l'emoji !",
        invalidAgentName:
            'Le nom du agent doit contenir entre 1 et {{max}} caractères !',
        userNotFound: 'Utilisateur introuvable !',
        sshKeyNotFound: 'Clé SSH introuvable !',
        pendingAgentNotFound: 'Agent en attente introuvable !',
        agentNotScheduledForDeletion:
            "Ce agent n'est pas programmé pour la suppression !",
        agentDeletionAlreadyPassed: 'La date de suppression est déjà passée !',
        agentLimitReached:
            'Vous avez atteint la limite de {{max}} agents. Veuillez contacter le support pour augmenter cette limite !',
        sshKeyLimitReached:
            'Vous avez atteint la limite de {{max}} clés SSH. Veuillez contacter le support pour augmenter cette limite !',
        volumeSizeInvalid:
            'La taille du volume doit être comprise entre {{min}} et {{max}} Go !',
        paymentNotConfigured:
            "Le paiement n'est pas configuré pour cette offre !",
        invalidSshKeyFormat: 'Format de clé publique SSH invalide !',
        sshKeyInUse:
            'Cette clé SSH est actuellement utilisée par un ou plusieurs agents !',
        inputTooLong: 'La saisie dépasse la longueur maximale autorisée !',
        invalidEmailFormat: "Format d'email invalide !",
        plusAddressingNotAllowed:
            "L'adressage avec le signe + n'est pas autorisé pour la connexion par email !",
        invalidRedirectUrl: 'URL de redirection invalide !',
        fileTooLarge:
            'Le contenu du fichier dépasse la taille maximale autorisée !',
        nameAndKeyRequired: 'Le nom et la clé publique sont requis !',
        nameTooLong: 'Le nom doit contenir {{max}} caractères ou moins !',
        noBillingAccount: 'Aucun compte de facturation trouvé !',
        orderIdRequired: "L'identifiant de commande est requis !",
        orderNotFound: 'Commande introuvable !',
        emailRequired: "L'email est requis !",
        redirectUrlRequired: "L'URL de redirection est requise !",
        invalidWebhook: 'Webhook invalide !',
        failedToStartAgent: 'Échec du démarrage du agent !',
        failedToStopAgent: "Échec de l'arrêt du agent !",
        failedToRestartAgent: 'Échec du redémarrage du agent !',
        failedToDeleteAgent: 'Échec de la suppression du agent !',
        failedToCreateAgent: 'Échec de la création du agent !',
        invalidProvider: 'Fournisseur invalide !',
        providerNotAllowed:
            "Ce fournisseur n'est pas disponible actuellement !",
        invalidPlan: 'Offre sélectionnée invalide !',
        planBelowMinimumMemory:
            'Cette offre ne satisfait pas la mémoire minimale requise !',
        invalidLocation: 'Emplacement sélectionné invalide !',
        planNotAvailableAtLocation:
            "Ce plan n'est pas disponible à l'emplacement sélectionné !",
        failedToSyncAgent: 'Échec de la synchronisation du statut du serveur !',
        failedToProvisionAgent: 'Échec du provisionnement du agent !',
        failedToInitiatePurchase: "Échec de l'initiation de l'achat !",
        failedToCancelDeletion: "Échec de l'annulation de la suppression !",
        failedToHardDeleteAgent:
            'Échec de la suppression définitive du agent !',
        failedToCancelScheduledDeletion:
            "Échec de l'annulation de la suppression programmée !",
        failedToCreateSshKey: 'Échec de la création de la clé SSH !',
        failedToDeleteSshKey: 'Échec de la suppression de la clé SSH !',
        failedToUpdateProfile: 'Échec de la mise à jour du profil !',
        failedToGetProfile: 'Échec de la récupération du profil !',
        failedToGetInvoice: 'Échec de la récupération de la facture !',
        failedToGetCustomerPortal:
            'Échec de la récupération du portail client !',
        failedToGetBillingHistory:
            "Échec de la récupération de l'historique de facturation !",
        failedToGetStats: 'Échec de la récupération des statistiques !',
        affiliateFetched: "Informations d'affiliation récupérées avec succès.",
        failedToGetAffiliate:
            "Échec de la récupération des informations d'affiliation !",
        invalidPeriod: 'Filtre de période invalide !',
        referralCodeUpdated: 'Code de parrainage mis à jour avec succès.',
        failedToUpdateReferralCode:
            'Échec de la mise à jour du code de parrainage !',
        invalidReferralCodeLength:
            'Le code de parrainage doit contenir entre {{min}} et {{max}} caractères !',
        invalidReferralCodeFormat:
            'Le code de parrainage ne peut contenir que des lettres, chiffres, tirets et underscores !',
        referralCodeAlreadyChanged:
            "Le code de parrainage ne peut être modifié qu'une seule fois !",
        referralCodeTaken: 'Ce code de parrainage est déjà pris !',
        referralCodeGenerated: 'Code de parrainage généré.',
        failedToGenerateReferralCode:
            'Échec de la génération du code de parrainage !',
        failedToFetchLocations: 'Échec de la récupération des emplacements !',
        failedToFetchPlans: 'Échec de la récupération des offres !',
        failedToFetchVolumePricing:
            'Échec de la récupération des tarifs de volume !',
        failedToFetchPlanAvailability:
            'Échec de la récupération de la disponibilité des offres !',
        failedToSendEmail: "Échec de l'envoi de l'email !",
        failedToGetVersion: 'Échec de la récupération de la version !',
        failedToGetVersions: 'Impossible de récupérer les versions !',
        failedToInstallVersion: "Impossible d'installer la version !",
        installVersionSuccess: 'Version installée avec succès.',
        invalidVersion: 'Format de version invalide !',
        outdatedVersion:
            'Cette version est obsolète et ne peut pas être installée !',
        failedToGetDiagnostics: "Échec de la connexion à l'instance !",
        failedToGetDiagnosticsDescription:
            "Impossible de récupérer les diagnostics. L'instance est peut-être hors ligne ou en cours de démarrage !",
        failedToGetLogs: 'Échec du chargement des journaux !',
        failedToGetLogsDescription:
            'Impossible de récupérer les journaux pour cette instance. Veuillez réessayer plus tard !',
        failedToReinstallAgent: "Échec de la réinstallation de l'instance !",
        reinstallSuccess: 'Instance réinstallée avec succès.',
        reinstallRateLimited:
            "Vous ne pouvez réinstaller qu'une fois toutes les 24 heures. Veuillez contacter l'équipe si vous souhaitez supprimer cette limite.",
        subdomainRateLimited:
            "Vous ne pouvez changer votre sous-domaine qu'une fois toutes les 24 heures. Veuillez contacter l'équipe si vous souhaitez supprimer cette limite.",
        subdomainUpdated: 'Sous-domaine mis à jour avec succès.',
        invalidSubdomain:
            'Sous-domaine invalide. Utilisez 3 à 20 lettres minuscules et chiffres !',
        subdomainAlreadyInUse: 'Ce sous-domaine est déjà utilisé !',
        subdomainNotSupported: "Ce type d'agent n'utilise pas de sous-domaine.",
        agentBusy:
            'Le agent est en cours de provisionnement ou de suppression !',
        reinstallGatewayNotResponding:
            'Réinstallation terminée mais la passerelle ne répond pas encore. Elle peut avoir besoin de plus de temps pour démarrer !',
        failedToRepairAgent: 'Failed to repair the instance!',
        repairSuccess: 'Instance repaired successfully.',
        repairGatewayNotResponding:
            'Repair applied but gateway is not responding yet. It may need more time to start.',
        failedToExportAgent: "Échec de l'exportation des données du agent !",
        agentNotReady: "Le agent n'est pas prêt pour l'exportation !",
        exportRateLimited:
            'Ce agent a été exporté récemment. Veuillez patienter avant de réexporter !',
        failedToListFiles: "Échec de la liste des fichiers de l'instance !",
        failedToReadFile: 'Échec de la lecture du fichier !',
        failedToUpdateFile: "Échec de l'enregistrement du fichier !",
        invalidFilePath: 'Chemin de fichier invalide !',
        fileNotEditable: 'Ce type de fichier ne peut pas être modifié !',
        invalidJsonConfig: 'JSON invalide !',
        fileSaveSuccess: 'Fichier enregistré.',
        rateLimitExceeded:
            'Veuillez patienter avant de demander un nouveau code !',
        otpExpiredOrNotFound:
            'Code expiré ou introuvable. Veuillez en demander un nouveau !',
        otpMaxAttemptsReached:
            'Trop de tentatives échouées. Veuillez demander un nouveau code !',
        otpInvalidCode: 'Code invalide. Veuillez réessayer !',
        licenseAlreadyPurchased: 'Licence déjà achetée !',
        licenseNotAvailable: "Le produit de licence n'est pas disponible !",
        licenseCheckoutCreated: 'Paiement de licence créé.',
        failedToPurchaseLicense:
            'Échec de la création du paiement de licence !',
        internalServerError: 'Une erreur interne est survenue !',
        invalidCredentials: 'Identifiants invalides !',
        accountLinked: 'Compte lié avec succès.',
        webhookProcessingFailed: 'Échec du traitement du webhook !',
        adminAccessDenied: 'Accès administrateur requis !',
        agentsFetched: 'Agents récupérés avec succès.',
        agentFetched: 'Agent récupéré avec succès.',
        agentStarsFetched: "Étoiles de l'agent récupérées avec succès.",
        agentSynced: 'Agent synchronisé avec succès.',
        agentStarted: 'Agent démarré avec succès.',
        agentStopped: 'Agent arrêté avec succès.',
        agentRestarted: 'Agent redémarré avec succès.',
        agentCreated: 'Agent créé avec succès.',
        agentDeleted: 'Agent supprimé avec succès.',
        agentDeletionScheduled: 'Suppression du agent programmée.',
        agentDeletionCancelled: 'Suppression du agent annulée.',
        agentHardDeleted: 'Agent supprimé définitivement.',
        pendingAgentCancelled: 'Achat annulé.',
        failedToCancelPendingAgent: "Échec de l'annulation de l'achat !",
        agentPurchaseInitiated: 'Achat initié avec succès.',
        sshKeysFetched: 'Clés SSH récupérées avec succès.',
        sshKeyCreated: 'Clé SSH créée avec succès.',
        sshKeyDeleted: 'Clé SSH supprimée avec succès.',
        profileFetched: 'Profil récupéré avec succès.',
        profileUpdated: 'Profil mis à jour avec succès.',
        statsFetched: 'Statistiques récupérées avec succès.',
        billingHistoryFetched:
            'Historique de facturation récupéré avec succès.',
        invoiceFetched: 'Facture récupérée avec succès.',
        customerPortalFetched: 'URL du portail client récupérée avec succès.',
        plansFetched: 'Offres récupérées avec succès.',
        locationsFetched: 'Emplacements récupérés avec succès.',
        volumePricingFetched: 'Tarifs de volume récupérés avec succès.',
        planAvailabilityFetched:
            'Disponibilité des offres récupérée avec succès.',
        diagnosticsFetched: 'Diagnostics récupérés avec succès.',
        metricsFetched: 'Métriques récupérées avec succès.',
        failedToGetMetrics:
            'Échec de la récupération des métriques du serveur !',
        overviewFetched: 'Aperçu récupéré avec succès.',
        failedToGetOverview:
            "Échec de la récupération de l'aperçu du gateway !",
        overviewUnsupported:
            "Cette version d'OpenClaw ne prend pas en charge la fonctionnalité d'aperçu !",
        passwordRotated: 'Mot de passe root changé avec succès.',
        failedToRotatePassword: 'Échec du changement du mot de passe root !',
        gatewayTokenRotated: 'Jeton de passerelle changé avec succès.',
        failedToRotateGatewayToken:
            'Échec du changement du jeton de passerelle !',
        sshKeyUpdated: 'Clé SSH mise à jour avec succès.',
        failedToUpdateSSHKey: 'Échec de la mise à jour de la clé SSH !',
        invalidPassword:
            'Le mot de passe doit contenir entre {{min}} et {{max}} caractères !',
        invalidGatewayToken:
            'Le jeton de passerelle doit contenir entre {{min}} et {{max}} caractères !',
        enablePreviewSuccess: 'Mode aperçu activé avec succès.',
        failedToEnablePreview: "Échec de l'activation du mode aperçu !",
        logsFetched: 'Journaux récupérés avec succès.',
        filesFetched: 'Fichiers récupérés avec succès.',
        fileFetched: 'Fichier récupéré avec succès.',
        otpSent: 'Code envoyé avec succès.',
        otpVerified: 'Code vérifié avec succès.',
        webhookReceived: 'Webhook reçu.',
        unauthorized: 'Non autorisé !',
        invalidToken: 'Jeton invalide !',
        notFound: 'Introuvable !',
        healthOk: "L'API fonctionne.",
        featureVersionUnsupported:
            "Cette fonctionnalité n'est pas prise en charge sur la version {{version}}. Veuillez mettre à jour OpenClaw ou utiliser le Terminal pour gérer cela manuellement.",
        invalidAuthMethod: "Méthode d'authentification invalide !",
        authMethodNotConnected:
            "Cette méthode d'authentification n'est pas connectée !",
        authMethodConnected:
            "Méthode d'authentification connectée avec succès.",
        authMethodDisconnected:
            "Méthode d'authentification déconnectée avec succès.",
        failedToConnectAuthMethod:
            "Échec de la connexion de la méthode d'authentification !",
        failedToDisconnectAuthMethod:
            "Échec de la déconnexion de la méthode d'authentification !",
        featureEmailsDisabled:
            'Les emails de fonctionnalités sont actuellement désactivés.',
        featureEmailsSent: 'Emails de fonctionnalités envoyés avec succès.',
        featureEmailsFailed: "Échec de l'envoi des emails de fonctionnalités !",
        invalidFeatureKey: 'Clé de fonctionnalité invalide !',
        adminUsersFetched: 'Utilisateurs récupérés avec succès.',
        failedToGetAdminUsers: 'Échec de la récupération des utilisateurs !',
        adminUserDetailFetched:
            "Détails de l'utilisateur récupérés avec succès.",
        failedToGetAdminUserDetail:
            "Échec de la récupération des détails de l'utilisateur !",
        adminUserUpdated: 'Utilisateur mis à jour.',
        failedToUpdateAdminUser: "Échec de la mise à jour de l'utilisateur !",
        adminStatsFetched: 'Statistiques récupérées.',
        failedToGetAdminStats: 'Échec de la récupération des statistiques !',
        adminAnalyticsFetched: 'Analytiques récupérées avec succès.',
        failedToGetAdminAnalytics: 'Échec de la récupération des analytiques !',
        adminBillingFetched: 'Facturation récupérée avec succès.',
        failedToGetAdminBilling: 'Échec de la récupération de la facturation !',
        adminAgentsFetched: 'Agents récupérés.',
        failedToGetAdminAgents: 'Échec de la récupération des agents !',
        adminSSHKeysFetched: 'Clés SSH récupérées.',
        failedToGetAdminSSHKeys: 'Échec de la récupération des clés SSH !',
        adminVolumesFetched: 'Volumes récupérés.',
        failedToGetAdminVolumes: 'Échec de la récupération des volumes !',
        adminReferralsFetched: 'Referrals fetched.',
        failedToGetAdminReferrals: 'Failed to fetch referrals!',
        adminPendingAgentsFetched: 'Pending agents fetched.',
        failedToGetAdminPendingAgents: 'Failed to fetch pending agents!',
        adminExportsFetched: 'Exports fetched.',
        adminEmailsFetched: 'Emails fetched.',
        failedToGetAdminEmails: 'Failed to fetch emails!'
    },
    emails: {
        otpSubject: 'Votre code de connexion ClawHost',
        otpPreview: 'Votre code de connexion ClawHost : {{code}}',
        otpHeading: 'Votre code de connexion est :',
        otpExpiry:
            "Le code expire dans 10 minutes. Si ce n'était pas vous, ignorez cet email.",
        featureFooter:
            'Vous recevez cet email car vous avez un compte ClawHost.',
        features: {
            terminal: {
                subject: 'Vous avez un terminal web',
                preview:
                    'Exécutez des commandes dans votre navigateur, sans SSH',
                tag: 'Terminal Web',
                heading: 'Commandes depuis votre navigateur',
                description:
                    'Un terminal complet dans votre tableau de bord. Cliquez sur votre claw, tapez vos commandes. Pas de client SSH requis.',
                cta: 'Ouvrir le Terminal'
            },
            logs: {
                subject: 'Logs en temps réel dans votre tableau de bord',
                preview: 'Regardez les logs de votre serveur en direct',
                tag: 'Logs en Direct',
                heading: 'Vos logs en direct',
                description:
                    'Chaque requête, chaque erreur, diffusée en temps réel sur votre tableau de bord. Fini le tail de fichiers en SSH.',
                cta: 'Voir les Logs'
            },
            fileExplorer: {
                subject:
                    'Modifiez les fichiers serveur depuis votre navigateur',
                preview: 'Parcourez et modifiez des fichiers sans SSH',
                tag: 'Explorateur de Fichiers',
                heading: 'Modifiez vos fichiers sans SSH',
                description:
                    'Parcourez, modifiez et enregistrez des fichiers avec coloration syntaxique. Pas de SSH, pas de FTP — cliquez et tapez.',
                cta: "Ouvrir l'Explorateur"
            },
            diagnostics: {
                subject: 'Vérifications de santé intégrées',
                preview: 'Vérifiez la santé de votre serveur en un clic',
                tag: 'Diagnostics',
                heading: 'Votre serveur est-il en forme ?',
                description:
                    'Vérifiez le statut des services, la mémoire, le disque et les ports en un clic. Repérez les problèmes avant les pannes.',
                cta: 'Lancer les Diagnostics'
            },
            sshKeys: {
                subject: 'Gérez vos clés SSH depuis ClawHost',
                preview: 'Générez et gérez des paires de clés facilement',
                tag: 'Clés SSH',
                heading: 'Clés SSH, simplifiées',
                description:
                    'Générez des paires de clés, copiez les clés publiques, téléchargez les privées — le tout depuis le tableau de bord.',
                cta: 'Gérer les Clés SSH'
            },
            exportConfig: {
                subject: 'Exportez votre config de claw',
                preview: 'Téléchargez votre configuration en un fichier',
                tag: 'Export Config',
                heading: 'Emportez votre config',
                description:
                    'Exportez agents et paramètres en un seul fichier. Sauvegardez ou répliquez votre configuration.',
                cta: 'Exporter la Config'
            },
            multiLanguage: {
                subject: 'ClawHost parle 14 langues',
                preview: 'Changez la langue du tableau de bord',
                tag: 'Multi-Langue',
                heading: '14 langues, entièrement traduit',
                description:
                    'Passez ClawHost en français, anglais, espagnol, allemand et 10 autres. Chaque bouton, chaque message.',
                cta: 'Changer de Langue'
            },
            subdomain: {
                subject: 'Votre claw a sa propre URL',
                preview: "Accédez à votre claw de n'importe où",
                tag: 'Sous-domaine',
                heading: 'Votre claw, votre URL',
                description:
                    'Chaque claw obtient un sous-domaine unique comme monclaw.clawhost.cloud. Accessible partout, sans VPN.',
                cta: 'Voir Votre Sous-domaine'
            },
            darkMode: {
                subject: 'Le mode sombre est là',
                preview: 'Basculez entre thèmes clair et sombre',
                tag: 'Mode Sombre',
                heading: 'Du repos pour vos yeux',
                description:
                    'Basculez entre clair et sombre en un clic. Votre préférence est sauvegardée automatiquement.',
                cta: 'Essayer le Mode Sombre'
            },
            reinstall: {
                subject: 'Nouveau départ, un clic',
                preview: 'Réinstallez OpenClaw sans perdre votre serveur',
                tag: 'Réinstallation',
                heading: 'Nouveau départ, même serveur',
                description:
                    'La réinstallation efface le runtime OpenClaw et vous donne une page blanche. Votre serveur, IP et clés restent intacts.',
                cta: 'En Savoir Plus'
            },
            hermesAgentLaunch: {
                subject: 'L\'agent Hermes est arrivé',
                preview: 'Déployez des agents Hermes directement sur ClawHost.',
                tag: 'Agent Hermes',
                heading: 'Les agents Hermes, maintenant sur ClawHost',
                description:
                    'L\'agent Hermes est désormais pris en charge sur ClawHost. Lancez un claw alimenté par Hermes en quelques minutes, configurez les fournisseurs de modèles depuis l\'onglet Fichiers et discutez avec lui depuis le terminal intégré. Aucune configuration supplémentaire, aucun code de liaison.',
                cta: 'Déployer Hermes'
            },
            clawHostGoLaunch: {
                subject: 'ClawHost Go est là',
                preview: 'Une application de bureau native pour exécuter OpenClaw localement sur votre machine.',
                tag: 'ClawHost Go',
                heading: 'Vos claws, sur votre bureau',
                description:
                    'ClawHost Go est une application de bureau native pour macOS et Windows. Déployez et gérez vos instances OpenClaw directement sur votre machine — pas de cloud, pas d\'abonnement, juste une licence unique. Elle inclut un terminal intégré, un éditeur de fichiers, un gestionnaire de versions et un DNS local sans configuration.',
                cta: 'Télécharger ClawHost Go'
            },
            productHuntLaunch: {
                subject: 'Aidez-nous à lancer sur Product Hunt',
                preview: 'Nous venons de lancer sur Product Hunt. Votre vote compte.',
                tag: 'Lancement Product Hunt',
                heading: 'Nous sommes en direct sur Product Hunt',
                description:
                    'Aujourd\'hui, nous lançons ClawHost sur Product Hunt. Si on vous a aidé à expédier plus vite, un upvote nous serait précieux. Pour vous remercier, utilisez le code PH10 et bénéficiez de 10% de réduction sur votre première commande.',
                cta: 'Voter sur Product Hunt'
            },
            yearlyPlans: {
                subject: 'Économisez avec la facturation annuelle',
                preview: 'Même service, prix réduit',
                tag: 'Plans Annuels',
                heading: 'Même claw, facture réduite',
                description:
                    'Passez à la facturation annuelle et payez moins. Pas de différence de fonctionnalités. Changez quand vous voulez.',
                cta: 'Voir les Plans'
            }
        }
    },
    auth: {
        signIn: 'Authentification',
        signInDescription:
            'Connectez-vous à votre compte ClawHost pour gérer vos instances OpenClaw.',
        signingIn: 'Authentification en cours...',
        verifyCode: 'Vérifier le code',
        checkYourEmail: 'Vérifiez votre email',
        checkYourEmailHeading: 'Vérifiez votre email',
        codeSentTo: 'Nous avons envoyé un code à 6 chiffres à',
        signInToDeployOpenClaw:
            'Authentifiez-vous pour gérer et déployer des agents en un clic.',
        emailAddress: 'Adresse email',
        emailPlaceholder: 'exemple@clawhost.cloud',
        continueWithEmail: "Continuer avec l'email",
        otpDescription:
            'Nous vous enverrons un code pour vous connecter. Aucun mot de passe nécessaire.',
        welcomeBack: 'Bon retour.',
        resendIn: 'Renvoyer dans {{seconds}}s',
        resendCode: 'Renvoyer le code',
        changeEmail: "Changer d'email",
        invalidCode: 'Code invalide !',
        invalidEmailFormat: 'Veuillez entrer une adresse email valide !',
        plusAddressingNotAllowed:
            "L'adressage avec le signe + n'est pas autorisé pour la connexion par email !",
        or: 'ou',
        continueWithGoogle: 'Continuer avec Google',
        continueWithGithub: 'Continuer avec GitHub',
        agreementNotice: 'En continuant, vous acceptez nos',
        termsOfService: "Conditions d'utilisation",
        andWord: 'et',
        privacyPolicy: 'Politique de confidentialité'
    },
    account: {
        title: 'Compte',
        description:
            'Gérez les paramètres de votre compte ClawHost et vos informations de profil.',
        accountSettings: 'Compte',
        manageYourAccount:
            'Gérez votre profil et les paramètres de votre compte.',
        profileInformation: 'Informations du profil',
        profileDescription:
            "Vos informations personnelles et votre nom d'affichage.",
        noNameSet: 'Aucun nom défini',
        joined: 'Inscrit le',
        claws: 'claws',
        sshKeys: 'clés',
        displayName: "Nom d'affichage",
        enterYourName: 'Entrez votre nom',
        emailAddress: 'Adresse email',
        emailNotEditable: "L'email n'est pas modifiable. Contactez le support.",
        profileUpdatedSuccessfully: 'Profil mis à jour avec succès.',
        billingAndSubscription: 'Facturation & Abonnement',
        billingAndSubscriptionDescription:
            'Gérez vos moyens de paiement, abonnements et factures.',
        viewBillingHistory:
            'Consultez votre historique de paiement, factures et abonnements.',
        aboutApp: 'À propos',
        aboutAppDescription: 'Informations et version de l\'application.',
        appVersion: 'Version de l\'application',
        operatingSystem: 'Système d\'exploitation',
        architecture: 'Architecture',
        checkForUpdates: 'Vérifier les mises à jour',
        checkNow: 'Vérifier',
        updatesUpToDate: 'Vous avez la dernière version.',
        updateReady: 'Version {{version}} prête à installer.',
        restartToInstall: 'Redémarrer pour installer',
        connectedAccounts: 'Comptes connectés',
        connectedAccountsDescription:
            'Gérez les méthodes de connexion liées à votre compte.',
        authEmail: 'Email',
        authGoogle: 'Google',
        authGithub: 'GitHub',
        authConnected: 'Connecté',
        authConnect: 'Connecter',
        authDisconnect: 'Déconnecter',
        emailCannotBeDisconnected:
            "L'email est toujours connecté en tant que méthode de connexion principale.",
        providerConnected: '{{provider}} connecté avec succès.',
        providerDisconnected: '{{provider}} déconnecté avec succès.',
        providerEmailMismatch:
            'Vous ne pouvez connecter que des comptes utilisant la même adresse e-mail !',
        settings: 'Paramètres',
        settingsDescription: 'Gérez les préférences de votre tableau de bord.',
        openLinksWindowed: 'Ouvrir les liens dans une vue fenêtrée',
        openLinksWindowedDescription:
            "Lorsque cette option est activée, les liens externes s'ouvrent dans l'application au lieu du navigateur système."
    },
    billing: {
        billingHistory: 'Historique de facturation',
        billingDescription:
            'Consultez votre historique de paiement, vos factures et vos abonnements.',
        noBillingHistory: 'Aucun historique de facturation',
        noBillingHistoryDescription:
            'Vos paiements et factures apparaîtront ici.',
        date: 'Date',
        product: 'Produit',
        amount: 'Montant',
        status: 'Statut',
        statusPaid: 'Payé',
        statusPending: 'En attente',
        statusRefunded: 'Remboursé',
        statusPartiallyRefunded: 'Partiellement remboursé',
        billingReasonPurchase: 'Achat',
        billingReasonSubscriptionCreate: 'Nouvel abonnement',
        billingReasonSubscriptionCycle: 'Renouvellement',
        billingReasonSubscriptionUpdate: "Mise à jour d'abonnement",
        failedToLoadBilling:
            "Échec du chargement de l'historique de facturation !",
        downloadInvoice: 'Télécharger la facture',
        invoiceCanceledNavigation:
            'Téléchargement de la facture interrompu car vous avez quitté la page.',
        failedToLoadInvoice: 'Échec du chargement de la facture !',
        couponApplied: 'Coupon : {{name}}',
        manageBilling: 'Gérer la facturation',
        failedToLoadPortal: "Échec de l'ouverture du portail de facturation !",
        portalCanceledNavigation:
            'Portail de facturation interrompu car vous avez quitté la page.'
    },
    license: {
        title: 'Licence',
        description: 'Gérez votre licence OpenClaw.',
        pageTitle: 'Licence',
        pageDescription:
            'Achetez votre licence pour auto-héberger des instances OpenClaw localement avec notre application Go.',
        planName: 'Licence ClawHost Go',
        oneTimePurchase: 'Achat unique',
        price: '{{price}} $',
        priceNote: 'Payez une fois, possédez pour toujours.',
        purchaseLicense: 'Acheter la licence',
        purchasing: 'Redirection...',
        activated: 'Licence active',
        activatedDescription:
            'Votre licence est active. Merci pour votre soutien.',
        paymentSuccess: 'Paiement réussi. Votre licence est maintenant active.',
        failedToPurchase: 'Échec du démarrage du paiement !',
        featureUnlimitedClaws: 'OpenClaws illimités',
        featureDevices: 'Appareils illimités',
        featureUpdates: 'Mises à jour à vie',
        featureSupport: 'Support prioritaire',
        featureCloud: 'Toutes les fonctionnalités cloud, localement',
        whatsIncluded: 'Ce qui est inclus',
        gateTitle: 'Licence requise',
        gateDescription:
            "Vous avez besoin d'une licence ClawHost Go pour déployer et gérer des instances OpenClaw localement."
    },
    network: {
        offline: 'Pas de connexion internet',
        offlineDescription:
            'Vous êtes actuellement hors ligne. Les fonctionnalités nécessitant un accès internet seront indisponibles.'
    },
    dashboard: {
        title: 'Claws',
        description:
            'Consultez et gérez vos instances OpenClaw déployées. Démarrez, arrêtez, redémarrez et surveillez vos serveurs VPS.',
        claw: 'claw',
        clawsPlural: 'claws',
        clawCountLabel: '{{count}} claws',
        clawCountLabelSingular: '{{count}} claw',
        newClaw: 'Nouveau Claw',
        searchAgents: 'Rechercher des agents...',
        searchAgentsCount: 'Rechercher {{count}} agents...',
        noAgentsMatchSearch: 'Aucun agent trouvé.',
        clawActions: 'Actions du claw',
        noAgentsYet: 'Aucun Agent',
        noAgentsDescription:
            "Aucun agent déployé n'a été trouvé. Mais vous pouvez déployer votre premier agent à tout moment à partir de 25$/mois. Lancez-vous avec l'IA.",
        deleteClaw: 'Supprimer le Claw',
        deleteClawConfirmation: 'Êtes-vous sûr de vouloir supprimer',
        deleteClawWarning:
            "Votre abonnement sera annulé et le serveur sera supprimé à la fin de votre période de facturation actuelle. Vous pouvez continuer à l'utiliser jusque-là.",
        actionCannotBeUndone: 'Cette action est irréversible.',
        start: 'Démarrer',
        startServer: 'Démarrer le serveur',
        stop: 'Arrêter',
        stopServer: 'Arrêter le serveur',
        restart: 'Redémarrer',
        restartServer: 'Redémarrer le serveur',
        startClaw: 'Démarrer le serveur',
        startClawConfirmation:
            'Cela démarrera le serveur et tous ses processus. Ne faites cela que si nécessaire.',
        stopClaw: 'Arrêter le serveur',
        stopClawConfirmation:
            "Cela arrêtera tous les processus en cours sur le serveur, y compris OpenClaw. Aucune donnée ne sera perdue. Ne faites cela que si nécessaire. Vous pouvez le redémarrer à tout moment. L'arrêt ne stoppe pas la facturation — supprimez le serveur pour ne plus être facturé.",
        restartClaw: 'Redémarrer le serveur',
        restartClawConfirmation:
            'Cela arrêtera tous les processus en cours sur le serveur, y compris OpenClaw, et les redémarrera. Aucune donnée ne sera perdue. Ne faites cela que si nécessaire.',
        copyPassword: 'Copier le mot de passe',
        copySshWithKey: 'Copier SSH (avec clé)',
        copySshWithPassword: 'Copier SSH (avec mot de passe)',
        connect: 'Copier la commande SSH',
        viewServerCredentials: 'Identifiants du serveur',
        serverCredentials: 'Identifiants du serveur',
        serverCredentialsDescription:
            'Utilisez ces identifiants pour vous connecter à votre serveur via SSH.',
        sshCommand: 'Commande SSH',
        rootPassword: 'Mot de passe root',
        sshCommandCopied: 'Commande SSH copiée.',
        sshCommandWithPasswordCopied: 'Commande SSH avec mot de passe copiée.',
        passwordCopiedToClipboard: 'Mot de passe copié dans le presse-papiers.',
        plan: 'Serveur',
        location: 'Emplacement',
        ip: 'IP',
        domain: 'Domaine',
        ipAddress: 'Adresse IP',
        port: 'Port',
        subscription: 'Abonnement',
        history: 'Historique',
        planCost: 'Forfait',
        serverId: 'ID du serveur',
        created: 'Créé le',
        sshKey: 'Clé SSH',
        storage: 'Stockage',
        nextBilling: 'Prochaine facturation',
        lastBilling: 'Dernière facturation',
        totalSpent: 'Total dépensé',
        version: 'Version',
        gatewayToken: 'Jeton de passerelle',
        gatewayTokenDescription:
            'Utilisez ce jeton pour vous authentifier auprès de votre passerelle',
        contactSupport: 'Contacter le Support',
        scheduledForDeletion: 'Suppression programmée',
        scheduledDeletionShort: 'Suppression le {{date}}',
        deletionDate: 'Ce claw sera supprimé le {{date}}',
        deletionTooltip:
            'Suppression programmée le {{date}}. Pour annuler, utilisez le menu.',
        pastDue: 'Paiement échoué',
        deletionFailed: 'Suppression échouée',
        pastDueDescription:
            'Votre paiement a échoué. Si non résolu dans les 14 jours, ce claw sera définitivement supprimé.',
        updatePayment: 'Mettre à jour le paiement',
        cancelDeletion: 'Annuler la suppression',
        cancelDeletionConfirmation:
            "Êtes-vous sûr ? Votre abonnement restera actif et vous continuerez à être facturé. L'instance continuera de fonctionner.",
        deletionCancelled: 'Suppression annulée.',
        scheduleDeletion: 'Programmer la suppression',
        resumeCheckout: 'Reprendre le paiement',
        cancelPurchase: "Annuler l'achat",
        hardDelete: 'Suppression immédiate',
        hardDeleteClaw: 'Suppression immédiate',
        hardDeleteConfirmation:
            'Êtes-vous sûr de vouloir supprimer ce claw immédiatement ? Vous perdrez le temps restant sur votre période de facturation actuelle. Cette action est irréversible.',
        diagnostics: 'Diagnostics',
        diagnosticsDescription:
            "Vérifiez l'état de santé de votre instance OpenClaw.",
        diagnosticsStatus: 'Statut',
        diagnosticsLogs: 'Journaux',
        diagnosticsRepair: 'Repair',
        diagnosticsRepairDescription:
            'Remove memory limits, apply latest service configuration, and restart the gateway. This fixes most common issues.',
        diagnosticsRepairSuccess: 'Instance repaired successfully.',
        diagnosticsRepairFailed:
            'Repair applied but gateway is not responding yet!',
        diagnosticsLoading: "Connexion à l'instance...",
        diagnosticsNoLogs:
            'Aucun journal disponible. Démarrez votre instance pour générer des journaux.',
        diagnosticsNoLogsHermesTitle: "La passerelle Hermes n'est pas en cours d'exécution",
        diagnosticsNoLogsHermesDescription:
            "Dans l'onglet Terminal, exécutez `hermes gateway setup` pour configurer les plateformes, puis `sudo systemctl enable --now hermes-gateway` pour démarrer le pont.",
        diagnosticsIssueDetected:
            'Un problème a été détecté sur votre instance !',
        diagnosticsHealthy: 'Votre instance fonctionne normalement.',
        diagnosticsPort: 'Port 18789',
        diagnosticsMemory: 'Mémoire',
        logsDescription:
            'Les 100 dernières lignes du journal de votre passerelle, actualisées automatiquement.',
        fileExplorer: 'Explorateur de fichiers',
        fileExplorerRoot: 'openclaw',
        fileExplorerDescription:
            'Parcourez et modifiez vos fichiers de configuration OpenClaw. Des modifications incorrectes peuvent endommager votre instance.',
        fileExplorerSelectFile:
            'Sélectionnez un fichier pour afficher son contenu.',
        fileExplorerReadOnly: 'Lecture seule',
        fileExplorerSave: 'Enregistrer',
        fileExplorerSaved: 'Fichier enregistré.',
        fileExplorerSaveCanceledNavigation:
            'Sauvegarde du fichier interrompue car vous avez quitté la page.',
        fileExplorerInvalidJson:
            "JSON invalide. Veuillez corriger les erreurs de syntaxe avant d'enregistrer !",
        fileExplorerNoFiles: 'Aucun fichier trouvé',
        fileExplorerSearchFiles: 'Rechercher des fichiers...',
        fileExplorerNoSearchResults: 'Aucun fichier correspondant.',
        startFailed: 'Échec du démarrage du claw !',
        renameSuccess: 'Claw renommé avec succès.',
        renameFailed: 'Échec du renommage du claw !',
        renameInvalidChars:
            'Seuls les lettres, chiffres et tirets sont autorisés !',
        reinstallInstance: "Réinstaller l'instance",
        reinstallClaw: "Réinstaller l'instance",
        reinstallClawConfirmation:
            'Cela réinstallera complètement {{agentName}} sur cette instance. Toutes les configurations, agents et données seront réinitialisés. Cette action est irréversible. Continuer ?',
        reinstallInstanceSuccess: 'Instance réinstallée avec succès.',
        reinstallInstanceFailed: "Échec de la réinstallation de l'instance !",
        reinstallCanceledNavigation:
            'Réinstallation interrompue car vous avez quitté la page.',
        openControlPanel: 'Ouvrir le panneau de contrôle',
        exportData: 'Exporter le Claw (.zip)',
        exportAgent: 'Exporter',
        exportAgentButton: 'Exporter les données',
        exportAgentTooltip:
            'Télécharger cet agent et toutes ses données sous forme de fichier .zip.',
        exportAgentInProgress:
            "L'exportation peut prendre quelques minutes pour les agents plus volumineux.",
        exportStarted:
            "Préparation de l'exportation, cela peut prendre un moment...",
        exportSuccess: 'Claw exporté avec succès.',
        exportFailed: "Échec de l'exportation des données du claw !",
        exportCanceledNavigation: 'Export annulé car vous avez quitté la page.',
        scheduleDeletionCanceledNavigation:
            'Planification de suppression interrompue car vous avez quitté la page.',
        cancelDeletionCanceledNavigation:
            'Annulation de suppression interrompue car vous avez quitté la page.',
        hardDeleteCanceledNavigation:
            'Suppression forcée interrompue car vous avez quitté la page.',
        exportRateLimited:
            'Vous pourrez exporter à nouveau dans {{minutes}} minutes !',
        exportRateLimitedOne: 'Vous pourrez exporter à nouveau dans 1 minute !',
        configuringTooltip:
            "Cela peut prendre un certain temps. Cela dépend d'OpenClaw, de l'emplacement du serveur et du DNS Cloudflare.",
        paymentSuccess:
            'Votre claw est en cours de création et de configuration.',
        dnsSetupBanner:
            'Configurez le DNS local pour accéder à vos claws via sous-domaine.clawhost.',
        dnsSetupButton: 'Configurer DNS',
        dnsSetupSuccess: 'Résolveur DNS configuré avec succès.',
        dnsSetupError: 'Échec de la configuration du résolveur DNS !',
        userTab: 'Utilisateur',
        adminTab: 'Admin',
        adminTitle: 'Admin',
        adminDescription: 'Gérez tous les claws de la plateforme.',
        adminNoClaws: 'Aucun claw sur la plateforme pour le moment.',
        adminAccessDenied:
            "Vous n'avez pas la permission d'accéder à cette page.",
        owner: 'Propriétaire',
        agentType: 'Agent',
        status: {
            running: 'En cours',
            stopped: 'Arrêté',
            starting: 'Démarrage',
            stopping: 'Arrêt en cours',
            creating: 'Création',
            configuring: 'Configuration',
            initializing: 'Mise en place',
            migrating: 'Migration',
            rebuilding: 'Reconstruction',
            restarting: 'Redémarrage',
            unreachable: 'Injoignable',
            deleting: 'Suppression',
            scheduledDeletion: 'Suppression programmée',
            awaitingPayment: 'En attente de paiement',
            unknown: 'Inconnu',
            checking: 'Vérification'
        },
        tabNotAvailableForAgent: "Non disponible pour ce type d'agent"
    },
    mobile: {
        versions: 'Versions',
        currentVersion: 'Version actuelle',
        latestVersion: 'Dernière version',
        install: 'Installer',
        terminal: 'Terminal',
        reinstall: 'Réinstaller',
        fileSaved: 'Fichier enregistré.',
        terminalDisconnected: 'Déconnecté',
        terminalPlaceholder: 'Tapez une commande...',
        manage: 'Gérer',
        sync: 'Synchroniser',
        rename: 'Renommer',
        newName: 'Nouveau nom',
        credentials: 'Identifiants',
        showCredentials: 'Afficher les identifiants',
        rotatePassword: 'Réinitialiser le mot de passe',
        rotateGatewayToken: 'Réinitialiser le jeton',
        syncSuccess: 'Synchronisé avec succès.',
        signIn: 'Se connecter',
        signInDescription:
            'Authentifiez-vous pour gérer et déployer vos agents.',
        enterEmail: 'Adresse e-mail',
        emailPlaceholder: 'exemple@clawhost.cloud',
        continueWithEmail: "Continuer avec l'e-mail",
        otpDescription:
            'Nous vous enverrons un code pour vous connecter. Aucun mot de passe requis.',
        sending: 'Envoi...',
        checkYourEmail: 'Vérifiez vos e-mails',
        codeSentTo: 'Nous avons envoyé un code à 6 chiffres à',
        resendCode: 'Renvoyer le code',
        resendIn: 'Renvoyer dans {{seconds}}s',
        changeEmail: "Changer d'e-mail",
        invalidCode: 'Code invalide !',
        signingIn: 'Connexion...',
        signOut: 'Se déconnecter',
        loadMore: 'Charger plus',
        deployClaw: 'Déployer un Agent',
        deployYourFirstClaw: 'Déployez votre premier Agent',
    },
    createClaw: {
        provider: 'Fournisseur',
        providerAtCapacity: 'Capacité atteinte',
        title: 'Déployer OpenClaw',
        description:
            "Configurez votre serveur et commencez à construire avec l'IA.",
        clawName: 'Nom',
        clawNamePlaceholder: 'ex : cozy-panda',
        clawNameInvalidChars:
            'Seuls les lettres, chiffres et tirets sont autorisés !',
        autoGenerateNameHint:
            'Laissez vide pour générer un nom automatiquement.',
        agentType: "Type d'agent",
        agentTypeOpenClaw: 'OpenClaw',
        agentTypeHermes: 'Hermes',
        agentTypeOpenClawDescription: '{{count}} étoiles',
        agentTypeHermesDescription: '{{count}} étoiles',
        location: 'Emplacement',
        locationUnavailable: 'Indisponible',
        locationUnavailableForPlan: 'Indisponible',
        plan: 'Serveur',
        planUnavailable: 'Indisponible',
        planUnavailableForLocation: 'Non disponible à cet emplacement',
        advancedOptions: 'Options avancées facultatives',
        rootPassword: 'Mot de passe root',
        rootPasswordPlaceholder: 'Entrez un mot de passe ou générez-en un',
        gatewayTokenPlaceholder: 'ex. a1b2c3d4e5f6...',
        autoGenerateGatewayTokenHint: 'Généré automatiquement si laissé vide.',
        autoGeneratePasswordHint:
            'Optionnel. Pas de mot de passe si laissé vide.',
        regeneratePassword: 'Régénérer le mot de passe',
        gatewayToken: 'Gateway Token',
        regenerateToken: 'Régénérer le jeton',
        tokenCopied: 'Jeton copié.',
        sshKeyOptional: 'Clé SSH',
        noSshKeyPasswordOnly: 'Pas de clé SSH (mot de passe uniquement)',
        noSshKeysConfigured: 'Aucune clé SSH configurée',
        addSshKeyForPasswordlessLogin:
            'Ajoutez une clé SSH pour une connexion sans mot de passe',
        additionalStorageOptional: 'Stockage supplémentaire',
        volumeStorage: 'Volume de stockage',
        vpsServer: 'Serveur VPS',
        openClawPreinstalled: 'OpenClaw préinstallé',
        storageWithSize: 'Stockage',
        billingInterval: 'Facturation',
        monthly: 'Mensuel',
        yearly: 'Annuel',
        yearlySaveBadge: '2 mois offerts',
        yearlySavings: 'Vous économisez',
        totalMonthly: 'Total mensuel',
        totalYearly: 'Total annuel',
        creating: 'Création...',
        proceedToPayment: 'Payer {{amount}}$ pour déployer',
        agreementNotice: 'En déployant, vous acceptez nos',
        selectServerToContinue: 'Sélectionnez un serveur pour continuer',
        selectLocationToContinue: 'Sélectionnez un emplacement pour continuer',
        clawCreated: 'Claw créé.',
        clawCreating:
            'Création de votre claw en cours, cela peut prendre un moment...',
        assigning: 'Attribution...',
        rootPasswordSaveThis: 'Mot de passe root (conservez-le !)',
        sshCommandUsingKey: 'Commande SSH (avec votre clé)',
        sshCommandWithPassword: 'Commande SSH (avec mot de passe)',
        passwordCopied: 'Mot de passe copié.',
        planSpec: '{{cpu}} vCPU / {{memory}} Go RAM / {{disk}} Go SSD',
        volumeUnit: 'Go',
        volumeMin: '0 Go',
        volumeMax: '500 Go'
    },
    sshKeys: {
        title: 'Clés SSH',
        description:
            'Gérez vos clés SSH pour un accès sécurisé sans mot de passe à vos instances OpenClaw.',
        key: 'clé ssh',
        keys: 'clés ssh',
        keyCountDescription: '{{count}} {{label}}',
        addSshKey: 'Ajouter une clé SSH',
        howSshKeysWork: 'Comment connecter une clé SSH ?',
        step1: 'Générez une paire de clés SSH sur votre ordinateur (ou utilisez-en une existante).',
        step2: 'Ajoutez la clé publique ici.',
        step3: "Sélectionnez la clé lors de la création d'une nouvelle instance.",
        step4: 'Connectez-vous avec',
        step4Command: 'ssh root@your-server-ip',
        step4Suffix: '- aucun mot de passe nécessaire.',
        noSshKeysYet: 'Aucune clé SSH',
        noSshKeysDescription:
            'Aucune clé SSH ajoutée sur votre compte. Vous pouvez en ajouter à tout moment et vous connecter à vos claws déployés.',
        deleteConfirmation:
            'Êtes-vous sûr de vouloir supprimer cette clé SSH ?',
        deleteKey: 'Supprimer la clé SSH',
        deleteKeyConfirmation: 'Êtes-vous sûr de vouloir supprimer',
        sshKeyAddedSuccessfully: 'Clé SSH ajoutée avec succès.',
        addSshKeyModalTitle: 'Ajouter une clé SSH',
        addSshKeyModalDescription:
            'Ajoutez une clé SSH pour une authentification sans mot de passe',
        iHaveAnSshKey: 'Clé existante',
        generateNewKey: 'Créer une nouvelle',
        name: 'Nom',
        namePlaceholder: 'ex : mon-macbook',
        publicKey: 'Clé publique',
        publicKeyPlaceholder: 'ssh-rsa AAAA... ou ssh-ed25519 AAAA...',
        publicKeyHint: 'Trouvez votre clé publique dans',
        publicKeyPath1: '~/.ssh/id_ed25519.pub',
        publicKeyPathOr: 'ou',
        publicKeyPath2: '~/.ssh/id_rsa.pub',
        important: 'Important :',
        dontHaveSshKey: "Vous n'avez pas de clé SSH ? Générez-en une :",
        sshKeygenCommand: 'ssh-keygen -t ed25519 -C "your-email@example.com"',
        keyName: 'Nom de la clé',
        keyNamePlaceholder: 'Ma clé générée',
        importantAfterGenerating:
            'Après la génération, vous devez télécharger et sauvegarder votre clé privée. Nous ne pouvons pas la récupérer si vous la perdez !',
        generateKeyPair: 'Générer la paire de clés',
        orGenerateLocallyRecommended: 'Ou générez localement (recommandé)',
        runThisInYourTerminal: 'Exécutez ceci dans votre terminal :',
        thenSwitchToIHave:
            'Puis passez à "Clé existante" et collez la clé publique.',
        savePrivateKeyNow:
            'Sauvegardez votre clé privée MAINTENANT ! Téléchargez-la avant de fermer cette fenêtre. Vous ne pourrez plus la voir.',
        privateKeyKeepSecret: 'Clé privée (gardez-la secrète !)',
        downloadPrivateKey: 'Télécharger la clé privée',
        publicKeyWillBeSaved: 'Clé publique (sera enregistrée)',
        savePublicKey: 'Enregistrer la clé publique'
    },
    landing: {
        title: "Déployez OpenClaw. Un clic. C'est fait.",
        description:
            'Déployez OpenClaw sur votre propre VPS en un clic. Hébergement cloud auto-hébergeable avec accès root complet, emplacements mondiaux et tarifs transparents.',
        badge: 'OpenClaw et Hermes dans le Cloud',
        tutorialBadge: 'Comment démarrer sur Cloud',
        tutorialVideoThumbnail: 'Miniature de la vidéo tutoriel ClawHost',
        clawhostGoLogoAlt: 'ClawHost Go',
        trustMrrBadgeAlt: 'Badge de revenu vérifié TrustMRR',
        macosPreviewTime: '22:12',
        heroTitle1: 'Déployez OpenClaw.',
        heroTitle2: "Un clic. C'est fait.",
        heroDescription:
            'Déployez vos agents OpenClaw et Hermes dans le cloud ou en local en un clic — créez, connectez et faites évoluer vos agents IA plus vite avec ClawHost.',
        selfHost: 'Open Source',
        startingPrice: 'À partir de',
        locations: 'Emplacements',
        servers: 'Serveurs',
        zeroCount: 'Zéro',
        zeroConfig: 'Zéro config',
        features: 'Fonctions',
        whyClawHost: 'Fonctions tout-en-un',
        featuresDescription:
            "Pourquoi nous valons le coup d'essayer, les fonctionnalités parlent d'elles-mêmes.",
        zeroConfigDescription:
            "Évitez des heures de configuration de serveur et d'OpenClaw. Tout est préinstallé et prêt en quelques minutes.",
        ownedData: 'Données 100% à vous',
        ownedDataDescription:
            'Votre propre serveur, vos données. Aucune infrastructure partagée, aucun journal, aucun tiers. En ligne 24h/24.',
        fullSpeed: 'Pleine vitesse',
        fullSpeedDescription:
            'Des ressources VPS dédiées signifient aucune limitation, pleine bande passante et internet ultra-rapide.',
        globalLocations: 'Emplacements mondiaux',
        globalLocationsDescription:
            "Déployez OpenClaw et Hermes dans plusieurs régions mondiales et choisissez l'emplacement le plus proche de vous.",
        fullSshAccess: 'Accès SSH direct',
        fullSshAccessDescription:
            'Accédez au terminal de votre serveur directement depuis la plateforme. Aucun client SSH externe nécessaire.',
        secure: 'Sécurisé',
        secureDescription:
            'Protégé par défaut contre les vulnérabilités SSL, les logiciels malveillants et les menaces de sécurité courantes.',
        payAsYouGo: 'Tarifs simples',
        payAsYouGoDescription:
            'Tarification basée sur vos besoins. Pas de factures élevées imposées pour des serveurs de mauvaise qualité. Annulez à tout moment.',
        bringYourCredits: 'Apportez vos propres crédits',
        bringYourCreditsDescription:
            'Utilisez votre propre clé API Anthropic ou abonnement Claude. Payez Anthropic directement — sans majoration.',
        customSubdomains: 'Accès en ligne',
        customSubdomainsDescription:
            "Oubliez les réseaux locaux. Accédez à votre OpenClaw en toute sécurité depuis n'importe où avec un sous-domaine.",
        autoUpdates: 'Contrôle de version',
        autoUpdatesDescription:
            "Passez à n'importe quelle version d'OpenClaw ou Hermes en un seul clic. Restez toujours à jour ou revenez en arrière si nécessaire.",
        openclawControl: 'Surveillance des serveurs',
        openclawControlDescription:
            'Surveillez vos serveurs OpenClaw et Hermes avec des métriques, journaux et diagnostics en temps réel.',
        clawHostControl: 'Accès complet au serveur',
        clawHostControlDescription:
            'Terminal navigateur, explorateur de fichiers, logs, diagnostics et gestion des versions — tout depuis votre tableau de bord.',
        multipleClaws: 'Plusieurs agents',
        multipleClawsDescription:
            'Déployez et gérez plusieurs agents OpenClaw et Hermes depuis un seul tableau de bord. Évoluez selon vos besoins.',
        pricing: 'Tarifs',
        simpleTransparentPricing: 'Tarifs simples et transparents',
        pricingDescription:
            'Choisissez un plan adapté à vos besoins. Pas de frais cachés.',
        planColumn: 'Serveur',
        vCpuColumn: 'vCPU',
        ramColumn: 'RAM',
        storageColumn: 'Stockage',
        monthlyColumn: 'Prix',
        tierShared: 'vCPU partagé',
        tierDedicated: 'vCPU dédié',
        tierArm: 'Ampere (ARM)',
        tierRegular: 'Performance standard',
        tierHighPerformance: 'Haute performance',
        tierHighFrequency: 'Haute fréquence',
        recommended: 'Recommandé',
        perMonth: '/mois',
        perYear: '/an',
        pricePerMonth: '{{price}} $/mois',
        pricePerYear: '{{price}} $/an',
        volumePricePerMonth: '+{{price}} $/mois',
        startingPriceValue: '{{price}} $/mois',
        deploy: 'Déployer',
        select: 'Sélectionner',
        selectPlanLabel: 'Sélectionner le plan {{plan}}',
        deployPlanLabel: 'Déployer le plan {{plan}}',
        openClawPreinstalled: 'OpenClaw préinstallé',
        unlimitedBandwidth: 'Bande passante illimitée',
        rootSshAccess: 'Accès root SSH complet',
        onlineAllDay: 'En ligne 24h/24',
        showAllPlans: 'Voir tous les plans',
        simplePricing: 'Simplifié',
        planStarter: 'Starter',
        planStarterDesc: 'Pour les projets personnels et les expériences',
        planGrowth: 'Growth',
        planGrowthDesc: 'Pour les charges de production',
        planPro: 'Pro',
        planProDesc: 'Pour les entreprises en croissance',
        planBusiness: 'Business',
        planBusinessDesc: 'Pour les opérations à grande échelle',
        featureCpu: '{{count}} vCPU',
        featureRam: '{{count}} GB RAM',
        featureDisk: '{{count}} GB SSD',
        choosePlan: 'Choisir le plan',
        mostPopular: 'Le plus populaire',
        featurePreinstalled: 'Agent préinstallé',
        featureBandwidth: 'Bande passante illimitée',
        featureSsh: 'Accès SSH root',
        featureUptime: 'En ligne 24/7',
        featureDedicatedCpu: 'CPU dédié',
        featureEmailSupport: 'Support par e-mail',
        fastInternet: 'Internet rapide',
        emailSupport: 'Support par e-mail',
        faqTitle: 'Questions',
        frequentlyAskedQuestions: 'Questions fréquentes',
        faqDescription:
            'Toutes les questions fréquemment posées, avec leurs réponses.',
        faq1Question: "Qu'est-ce que ClawHost ?",
        faq1Answer:
            "ClawHost est une plateforme conçue pour rendre OpenClaw et Hermes accessibles à tous. Elle permet aux utilisateurs non techniques comme aux développeurs de les exécuter sans gérer l'infrastructure. Nous gérons les serveurs, la disponibilité, la sécurité et la maintenance — vous utilisez simplement vos agents.",
        faq2Question: "Qu'est-ce qu'OpenClaw ?",
        faq2Answer:
            "OpenClaw est une couche d'accès sécurisée auto-hébergée pour vos outils et services d'IA. Elle est préconfigurée pour la sécurité et les performances, vous pouvez donc la déployer et vous connecter instantanément.",
        faqHermesQuestion: "Qu'est-ce que Hermes ?",
        faqHermesAnswer:
            "Hermes est un agent IA autonome avec navigation web, gestion de calendrier, raisonnement multi-modèles et automatisation de navigateur. Il est préinstallé aux côtés d'OpenClaw sur chaque serveur ClawHost.",
        faq3Question:
            "En quoi est-ce différent des autres outils d'IA ou plateformes hébergées ?",
        faq3Answer:
            "Contrairement aux outils d'IA hébergés, ClawHost vous offre un vrai serveur avec OpenClaw installé. Vous possédez l'infrastructure, contrôlez tout et n'êtes pas limité par une plateforme partagée ou un modèle.",
        faq4Question: 'Ai-je besoin de connaissances techniques ?',
        faq4Answer:
            "Non. Nous gérons toute l'infrastructure, l'installation et la maintenance. Vous pouvez configurer et gérer OpenClaw via son interface et personnaliser l'utilisation — sans toucher aux serveurs ou à l'infrastructure.",
        faq5Question: 'Quels emplacements sont disponibles ?',
        faq5Answer:
            "Nous proposons plusieurs emplacements de serveurs dans le monde entier, incluant les États-Unis, l'Europe et plus encore. Vous pouvez déployer OpenClaw sur plusieurs serveurs dans différentes régions si nécessaire.",
        faq6Question: 'Combien ça coûte ?',
        faq6Answer:
            "Les tarifs dépendent du serveur que vous sélectionnez. Avec plusieurs options de serveurs allant de l'entrée de gamme à la haute performance, vous choisissez ce qui correspond à vos besoins et votre budget.",
        faq7Question: 'Puis-je accéder à mon agent directement via un lien ?',
        faq7Answer:
            "Oui. En plus de l'accès à OpenClaw via un sous-domaine, vous avez un accès complet au serveur et à son infrastructure sous-jacente, vous donnant une liberté totale pour personnaliser et exécuter tout ce dont vous avez besoin.",
        comparison: 'Comparaison',
        comparisonTitle: 'Ce qui nous distingue',
        comparisonDescription:
            "Il n'existe qu'une seule plateforme comparable, et notre approche se concentre sur de vrais serveurs et la pleine propriété plutôt que sur des limitations.",
        others: 'Autres',
        comparisonOpenClawUs: 'Accès complet à OpenClaw',
        comparisonOpenClawOthers: 'Uniquement le chat, pas de gestion',
        comparisonPricingUs: 'Tarifs transparents, spécifications claires',
        comparisonPricingOthers: 'Spécifications cachées, tarifs flous',
        comparisonOwnershipUs:
            'Vous êtes pleinement propriétaire de votre serveur',
        comparisonOwnershipOthers: 'Vous ne possédez rien',
        comparisonSubdomainUs: 'Accès via sous-domaine',
        comparisonSubdomainOthers:
            'Accès uniquement via des plateformes tierces',
        comparisonInfraUs: 'Infrastructure à la demande',
        comparisonInfraOthers: 'Serveurs limités',
        comparisonDataUs: 'Vos données vous appartiennent',
        comparisonDataOthers: 'Vos données ne vous appartiennent pas',
        comparisonMultipleUs: 'Plusieurs agents OpenClaw et Hermes',
        comparisonMultipleOthers: 'Un seul OpenClaw',
        comparisonOpenSourceUs: 'Entièrement open source',
        comparisonOpenSourceOthers: 'Code source fermé',
        comparisonExportUs: "Exportez OpenClaw et Hermes n'importe où",
        comparisonExportOthers: 'Verrouillage fournisseur',
        comparisonProvidersUs: 'Plusieurs fournisseurs de serveurs',
        comparisonProvidersOthers: 'Un seul fournisseur',
        comparisonVersionUs: 'Changement de version en un clic',
        comparisonVersionOthers: 'Mises à jour manuelles uniquement',
        comparisonTerminalUs: 'Terminal web intégré',
        comparisonTerminalOthers: 'Client SSH requis',
        seeFullComparison: 'Voir la comparaison complète',
        comparisonCtaText:
            'Nous comparons avec SimpleAgent, MyAgent.ai et plus — fonctionnalité par fonctionnalité.',
        selfHostInstead: 'Auto-héberger à la place'
    },
    blog: {
        readingTime: '{{minutes}} min de lecture',
        ctaTitle: 'Déployez OpenClaw et Hermes en un clic',
        ctaDescription:
            'Obtenez un serveur dédié avec OpenClaw et Hermes préinstallés. Accès root complet, emplacements mondiaux et prêt en quelques minutes. Vous en êtes propriétaire à tout moment. À partir de 25 $.',
        ctaDeploy: 'Déployer un agent',
        ctaGitHub: 'Voir sur GitHub'
    },
    changelog: {
        title: 'Journal des modifications',
        description:
            'Suivez les mises à jour, nouvelles fonctionnalités et améliorations de ClawHost.',
        subtitle:
            'Toutes les mises à jour, nouvelles fonctionnalités et améliorations de ClawHost.',
        release17Date: 'May 1, 2026',
        release17Title: 'Hermes Agents One-Click Deployment',
        release17Description:
            'Deploy Hermes agents with a single click, plus a wave of dashboard improvements and bug fixes.',
        release17Feature1:
            'One-click deployment for Hermes agents directly from the dashboard',
        release17Feature2:
            'Dashboard improvements for smoother navigation and clearer instance status, plus numerous bug fixes and stability improvements across the platform',
        release16Date: 'April 12, 2026',
        release16Title: 'New Dashboard Experience & Advanced Tabs',
        release16Description:
            'A completely redesigned dashboard with new tabs, simplified navigation, and a cleaner experience for managing your agents.',
        release16Feature1:
            'Overview tab to view key information about your OpenClaw instance at a glance',
        release16Feature2:
            'Preview tab to embed and interact with your OpenClaw instance directly in the dashboard',
        release16Feature3:
            'Monitor tab with live server metrics including CPU, memory, disk, and network usage',
        release16Feature4:
            'Storage tab to view attached volumes configured during instance creation',
        release16Feature5:
            'Security tab to manage gateway token, root password, SSH keys, and host key fingerprint',
        release16Feature6:
            'Billing tab with per-instance subscription details, billing history, and manage billing access',
        release16Feature7:
            'Server tab with IP address, location, server type, SSH command, and reinstall option',
        release16Feature8:
            'Server customizations with emoji icons and background colors for easy identification',
        release16Feature9:
            'New simplified UI with streamlined navigation, search agents, and a cleaner experience',
        release15Date: '11 avril 2026',
        release15Title: 'Simplification & sous-domaines personnalisés',
        release15Description:
            'Simplification de la plateforme en migrant les fonctionnalités gérées vers OpenClaw, suppression de la vue playground et introduction de sous-domaines personnalisés modifiables.',
        release15Feature1:
            'Simplification et migration des fonctionnalités gérées vers OpenClaw, plus de chat, agents, canaux, variables et compétences ClawHost',
        release15Feature2:
            'Enhanced file explorer with full editing support, 100+ language syntax highlighting, and export as .zip',
        release15Feature3:
            'Removed playground view for a cleaner, more focused dashboard experience',
        release15Feature4:
            'Changeable custom subdomains, update your claw subdomain to your loved one',
        release14Date: '1 avril 2026',
        release14Title:
            "Migration Hetzner, système d'affiliation & nouvelles langues",
        release14Description:
            "Centralisation de toute l'infrastructure sur Hetzner pour les meilleurs tarifs et performances, lancement du système d'affiliation avec 15% de commissions, ajout de 10 nouvelles langues et création d'outils internes pour un support stable des versions.",
        release14Feature1:
            "Suppression de DigitalOcean et Vultr — toute l'infrastructure fonctionne désormais exclusivement sur Hetzner avec une capacité infinie et sans limitations côté fournisseur",
        release14Feature2:
            "Système d'affiliation permettant aux utilisateurs de gagner 15% de commission sur chaque commande parrainée",
        release14Feature3:
            '10 nouvelles langues ajoutées : chinois, hindi, arabe, russe, japonais, turc, italien, polonais, néerlandais et portugais',
        release14Feature4:
            "Outils internes pour assurer un support stable des fonctionnalités pour les versions actuelles d'OpenClaw, sans prise en charge des anciennes versions",
        release12Date: '14 mars 2026',
        release12Title: 'Abonnements annuels, mode vocal & plus',
        release12Description:
            "Abonnements annuels avec 2 mois offerts, mode vocal, réinstallation d'instance et une page de présentation initiale pour ClawHost Go.",
        release12Feature1:
            'Page de présentation de ClawHost Go, hébergement local avec ClawHost',
        release12Feature2:
            'Support des abonnements annuels avec 2 mois offerts pour un abonnement annuel',
        release12Feature3:
            'Mode vocal pour interagir avec les agents OpenClaw hébergés sur ClawHost',
        release12Feature4:
            'Réinstaller OpenClaw sur votre instance pour repartir de zéro, disponible une fois par jour',
        release11Date: '28 février 2026',
        release11Title:
            'Synthèse vocale, terminal, onglets de chat & explorateur de fichiers',
        release11Description:
            "Écoutez les réponses des agents avec la synthèse vocale, interagissez avec votre VPS directement via le terminal, naviguez plus rapidement dans les chats avec les onglets de la barre latérale, et explorez les fichiers avec l'explorateur amélioré.",
        release11Feature1:
            'Synthèse vocale sur les messages des agents dans le playground',
        release11Feature2:
            'Terminal pour interagir avec vos instances VPS directement depuis le tableau de bord',
        release11Feature3:
            'Onglets de vue de la barre latérale du chat pour un accès et une navigation faciles',
        release11Feature4:
            "Améliorations de l'explorateur de fichiers avec barre de recherche pour chercher dans les fichiers",
        release11Feature5:
            'Correction des horodatages des messages ne reflétant pas le temps réel',
        release10Date: '22 février 2026',
        release10Title:
            'Demandes de fonctionnalités, explorateur de fichiers & corrections',
        release10Description:
            "Demandes de fonctionnalités communautaires, support élargi de l'édition de fichiers et diverses corrections.",
        release10Feature1:
            'Demandes de fonctionnalités automatiquement gérées et publiées par les agents OpenClaw',
        release10Feature3:
            'Correction du changement de fournisseur de modèle ne se reflétant pas et utilisant toujours le modèle initial',
        release10Feature4:
            'Plusieurs améliorations et corrections de bugs sur la plateforme',
        release10Feature5:
            "Les fichiers TypeScript, Markdown et texte brut sont maintenant modifiables dans l'explorateur de fichiers",
        release9Date: '21 février 2026',
        release9Title: 'Comparaisons, refactorisation du playground & plus',
        release9Description:
            'Pages de comparaison avec les concurrents, restructuration des fonctionnalités du playground, support multilingue et améliorations globales de performance.',
        release9Feature1: 'Support des thèmes sombre et clair',
        release9Feature2:
            'Support multilingue avec anglais, français, espagnol et allemand',
        release9Feature3:
            'Pages de comparaison avec des analyses complètes face aux concurrents',
        release9Feature4:
            "Versions OpenClaw, mettez à jour en un clic ou installez n'importe quelle version instantanément",
        release9Feature5:
            'Refactorisation de la structure des fonctionnalités du playground et simplifications',
        release9Feature6:
            'Améliorations de performance, stabilité et réactivité',
        release8Date: '18 février 2026',
        release8Title: 'Thème clair, Performance & Stabilité',
        release8Description:
            "Support du thème clair, améliorations de performance et d'expérience, et améliorations de stabilité et de réactivité.",
        release8Feature1: 'Modes de thème clair, sombre et système',
        release8Feature2: "Améliorations de performance et d'expérience",
        release8Feature3: 'Améliorations de stabilité et de réactivité',
        release7Date: '16 février 2026',
        release7Title: 'Refonte du chat & Saisie vocale',
        release7Description:
            'Améliorations majeures du chat et du playground avec interaction vocale et pièces jointes pour les agents.',
        release7Feature1:
            'Refonte du chat et du playground pour une expérience plus fluide et réactive',
        release7Feature2:
            'Interaction vocale avec les chats, enregistrement et transcription de la parole directement dans le navigateur',
        release7Feature4:
            "Affichage et utilisation des pièces jointes pour les agents, envoi d'images et de documents dans le chat",
        release6Date: '16 février 2026',
        release6Title: "Chat d'agent",
        release6Description:
            'Contrôle total de vos agents OpenClaw. Gérez et discutez avec tout directement depuis le tableau de bord.',
        release6Feature3:
            "Discutez avec vos agents depuis le playground, interagissez avec n'importe quel agent en temps réel",
        release6Feature4:
            'Connexion avec Google ou GitHub, authentification rapide et sécurisée sans codes par email',
        release1Date: '8 février 2026',
        release1Title: 'Version initiale',
        release1Description:
            'La première version officielle de ClawHost. Déployez OpenClaw sur votre propre VPS en un clic.',
        release1Feature1: "Déploiement d'OpenClaw en un clic",
        release1Feature2:
            'Tableau de bord pour gérer les claws : démarrer, arrêter, redémarrer et supprimer des instances',
        release1Feature3:
            '18 offres de serveurs avec vCPU dédié, RAM et options de stockage',
        release1Feature4:
            '6 emplacements de serveurs aux États-Unis, en Europe et en Asie',
        release1Feature5:
            'Gestion des clés SSH pour un accès serveur sans mot de passe',
        release1Feature6:
            "Support de stockage supplémentaire par volume jusqu'à 10 To",
        release1Feature7:
            'Authentification par lien magique, aucun mot de passe nécessaire',
        release1Feature8:
            'Accès en ligne à OpenClaw via des sous-domaines sécurisés',
        release1Feature9:
            'Intégration de paiement avec tarification transparente par serveur',
        release1Feature10: 'Historique de facturation et gestion des factures',
        release1Feature11:
            'Provisionnement automatique avec OpenClaw préinstallé et configuré',
        release2Date: '8 février 2026',
        release2Title: 'Changelog et plus',
        release2Description:
            'Une nouvelle façon de rester informé sur ClawHost.',
        release2Feature1:
            'Page de journal des modifications pour suivre toutes les mises à jour et versions de la plateforme',
        release3Date: '10 février 2026',
        release3Title: 'Aperçus serveur',
        release3Description:
            'Plus de visibilité et de contrôle sur vos serveurs, directement depuis le tableau de bord.',
        release3Feature1:
            'Journaux serveur en temps réel diffusés directement dans le tableau de bord',
        release3Feature2:
            'Diagnostics serveur avec réparation automatisée en un clic pour les problèmes de service',
        release3Feature3:
            'Explorateur de fichiers intégré et éditeur JSON pour les fichiers de configuration du serveur',
        release4Date: '14 février 2026',
        release4Title: 'Agents & Exportation de données',
        release4Description:
            "Playground d'agents, gestion multi-agents et exportation portable des données pour vos instances OpenClaw.",
        release4Feature1:
            "Playground d'agents en un clic et vue d'ensemble, ajout et gestion de plusieurs agents",
        release4Feature2:
            "Exportez votre OpenClaw sous forme d'archive zip portable",
        release4Feature3:
            'Playground interactif avec visualisation graphique des Claws et des agents',
        release4Feature4:
            "Suppression de la bascule vue grille/liste au profit d'une mise en page unifiée du tableau de bord"
    },
    clawDetail: {
        noAgentsYet: 'Aucun Agent',
        noAgentsDescription:
            'Déployez votre premier Agent pour interagir avec.',
        collapseSidebar: 'Réduire la barre latérale',
        expandSidebar: 'Développer la barre latérale',
        selectClaw: 'Sélectionnez un Agent',
        selectClawDescription:
            'Choisissez un Agent dans la barre latérale pour voir ses détails.',
        closeDetails: 'Fermer',
        tabOverview: "Vue d'ensemble",
        overviewTitle: "Vue d'ensemble du Gateway",
        overviewGatewayStatus: 'Statut du Gateway',
        overviewOnline: 'En ligne',
        overviewOffline: 'Hors ligne',
        overviewVersion: 'Version',
        overviewUptime: 'Temps de fonctionnement',
        overviewSessions: 'Sessions',
        overviewSessionsCount: '{{count}} actives',
        overviewNoSessions: 'Aucune session active',
        overviewSessionName: 'Session',
        overviewSessionModel: 'Modèle',
        overviewSessionMessages: 'Messages',
        overviewSessionLastActive: 'Dernière activité',
        overviewModels: 'Modèles',
        overviewError: "Échec du chargement de la vue d'ensemble !",
        overviewErrorDescription:
            "Impossible de se connecter au gateway OpenClaw. Veuillez vérifier que l'instance est en cours d'exécution.",
        overviewUnsupportedTitle: 'Aperçu non pris en charge',
        overviewUnsupportedDescription:
            "Votre version d'OpenClaw ne prend pas en charge la fonctionnalité d'aperçu. Veuillez mettre à jour vers la dernière version.",
        overviewHermesTitle: 'Hermes fonctionne dans le terminal',
        overviewHermesDescription:
            "Hermes est un agent TUI — ouvrez l'onglet Terminal et exécutez `hermes` pour démarrer une session. Les onglets Fichiers et Versions permettent de modifier la configuration et de mettre à jour.",
        overviewHermesOpenTerminal: 'Ouvrir le terminal',
        viewDocs: 'Voir la doc',
        overviewUptimeDays: '{{days}}j {{hours}}h {{minutes}}m',
        overviewUptimeHours: '{{hours}}h {{minutes}}m',
        overviewUptimeMinutes: '{{minutes}}m',
        overviewService: 'Service',
        overviewServiceActive: 'Actif',
        overviewServiceInactive: 'Inactif',
        overviewPort: 'Port 18789',
        overviewPortOpen: 'En écoute',
        overviewPortClosed: 'Fermé',
        overviewReady: 'Prêt',
        overviewNotReady: 'Pas prêt',
        overviewConfiguration: 'Configuration',
        overviewBrowser: 'Browser',
        overviewCommands: 'Commandes Shell',
        overviewTools: 'Outils',
        overviewSubdomain: 'Sous-domaine',
        overviewInstanceStatus: "Statut de l'instance",
        overviewModel: 'Model',
        overviewAgents: 'Agents',
        overviewMemoryStatus: 'Mémoire',
        overviewHeartbeat: 'Heartbeat',
        overviewEvents: 'Événements',
        overviewProbes: 'Probes',
        overviewPlugins: 'Plugins',
        tabPreview: 'Aperçu',
        previewNotEnabled: "L'aperçu n'est pas activé pour cette instance.",
        previewNotEnabledDescription:
            "Activez l'aperçu pour intégrer votre agent directement dans le tableau de bord.",
        previewEnable: "Activer l'aperçu",
        previewEnabling: 'Activation...',
        previewEnabled: 'Aperçu activé.',
        previewEnableFailed: "Échec de l'activation de l'aperçu !",
        previewEnableCanceledNavigation:
            "Activation de l'aperçu interrompue car vous avez quitté la page.",
        previewError: "Échec du chargement de l'aperçu.",
        previewErrorDescription:
            "L'agent est peut-être hors ligne ou inaccessible.",
        previewRetry: 'Réessayer',
        tabInfo: 'Info',
        tabLogs: 'Journaux',
        tabTerminal: 'Terminal',
        terminalConnecting: 'Connexion au terminal...',
        terminalDisconnected: 'Terminal déconnecté.',
        terminalError: 'Échec de connexion au terminal !',
        terminalReconnect: 'Reconnecter',
        tabDisabledConfiguring:
            "Disponible une fois la configuration de l'instance terminée.",
        tabDisabledAwaitingPayment: 'Disponible une fois le paiement traité.',
        creatingTitle: 'Configuration de votre agent',
        creatingDescription:
            'Cela prend généralement une à deux minutes. Vous pouvez fermer cette page en toute sécurité et revenir plus tard.',
        creatingDescriptionLocal:
            'Cela prend généralement un instant. Gardez l’application ouverte jusqu’à la fin.',
        configuringTitle: "Installation d'OpenClaw",
        configuringTitleHermes: "Installation d'Hermes",
        loadingTipHermes1:
            "Hermes est un agent TUI — ouvrez l'onglet Terminal une fois démarré pour discuter avec lui.",
        loadingTipHermes2:
            'Configurez les fournisseurs de modèles (OpenRouter, Anthropic, etc.) dans ~/.hermes/.env depuis l’onglet Fichiers.',
        loadingTipHermes3:
            'Connectez Telegram, Discord ou Slack depuis le Terminal avec `hermes gateway install`.',
        configuringDescription:
            'Cela prend généralement une à deux minutes. Vous pouvez fermer cette page en toute sécurité et revenir plus tard.',
        configuringDescriptionLocal:
            'Installation du runtime de l’agent en local. Gardez l’application ouverte jusqu’à la fin.',
        awaitingPaymentTitle: 'En attente de paiement',
        awaitingPaymentDescription:
            'Complétez le paiement pour commencer le provisionnement de votre agent. Cette réservation expire dans une heure.',
        awaitingPaymentAction: 'Compléter le paiement',
        loadingTip1:
            "Saviez-vous que vous pouvez exécuter plusieurs agents au sein d'un même OpenClaw ?",
        loadingTip2: "Saviez-vous qu'OpenClaw est open source ?",
        loadingTip3:
            "ClawHost est le tout premier projet permettant l'hébergement d'OpenClaw en un clic.",
        loadingTip4:
            'Vous pouvez accéder à votre agent via SSH ou le terminal intégré.',
        loadingTip5:
            'Votre agent obtient automatiquement son propre sous-domaine.',
        loadingTip6:
            "Vous pouvez personnaliser l'icône et le nom de votre agent à tout moment depuis les Paramètres.",
        loadingTip7: 'Tout le trafic vers votre agent est chiffré avec TLS.',
        loadingTip8:
            "Vous pouvez surveiller l'utilisation du CPU, de la mémoire et du disque dans l'onglet Moniteur.",
        loadingTip9: "Besoin d'aide ? Rejoignez notre communauté sur Discord.",
        loadingTip10:
            'Vous pouvez exporter la configuration complète de votre agent en tant que sauvegarde.',
        loadingTip11:
            "Les clés SSH peuvent être appliquées aux instances en cours d'exécution sans réinstallation.",
        loadingTip12:
            "Vous pouvez renouveler votre mot de passe root et votre jeton de passerelle depuis l'onglet Sécurité.",
        loadingTip13:
            'ClawHost prend en charge des serveurs dans plusieurs régions en Europe et aux États-Unis.',
        tabSettings: 'Paramètres',
        featureVersionUnsupported:
            '{{feature}} non pris en charge sur {{version}}',
        featureVersionUnsupportedDescription:
            'Nous ne prenons pas en charge la gestion de {{feature}} avec cette version via notre interface. Vous pouvez toujours le gérer via SSH, Terminal ou le panneau de contrôle OpenClaw.',
        featureVersionUnsupportedButton: 'Aller aux Versions',
        featureVersionUnsupportedSupported: 'Versions prises en charge :',
        featureVersionUnsupportedNewer: 'versions plus récentes',
        tabVersions: 'Versions',
        tabFiles: 'Explorateur de fichiers',
        tabMonitor: 'Moniteur',
        tabVolumes: 'Stockage',
        tabSecurity: 'Sécurité',
        securitySSHKey: 'Clé SSH',
        securitySSHKeyHint:
            "Appliquée à l'instance en cours et utilisée lors de la réinstallation.",
        securityPassword: 'Mot de passe root',
        securityGatewayToken: 'Jeton de passerelle',
        securityHostKey: 'Empreinte de la clé hôte',
        securityRotatePassword: 'Changer le mot de passe',
        securityRotateToken: 'Changer le jeton',
        securityRandomize: 'Aléatoire',
        securitySavePassword: 'Enregistrer le mot de passe',
        securitySaveToken: 'Enregistrer le jeton',
        volumesTitle: 'Volumes',
        volumesCount: '{{count}} volumes',
        volumesEmpty: 'Aucun volume attaché.',
        volumesEmptyDescription:
            "Cette instance n'a pas de volumes de stockage persistants.",
        volumesReadOnly:
            "Le stockage ne peut être ajouté que lors de la création de l'instance. Pour ajouter du stockage, déployez une nouvelle instance avec la taille de volume souhaitée, ou contactez l'",
        volumesContactSupport: 'équipe de support',
        metricsTitle: 'Métriques du serveur',
        metricsLive: 'En direct',
        metricsCpu: 'Utilisation du CPU',
        metricsMemory: 'Utilisation de la mémoire',
        metricsDisk: 'Utilisation du disque',
        metricsNetwork: 'Réseau',
        metricsLoadAvg: 'Charge moyenne',
        metricsProcesses: 'Processus principaux',
        metricsUptime: 'Temps de fonctionnement',
        metricsUsed: 'Utilisé',
        metricsAvailable: 'Disponible',
        metricsTotal: 'Total',
        metricsReceived: 'Reçu',
        metricsSent: 'Envoyé',
        metricsLoad1: '1 min',
        metricsLoad5: '5 min',
        metricsLoad15: '15 min',
        metricsProcessPid: 'PID',
        metricsProcessUser: 'Utilisateur',
        metricsProcessCpu: 'CPU %',
        metricsProcessMem: 'MEM %',
        metricsProcessCommand: 'Commande',
        metricsError: 'Échec du chargement des métriques !',
        metricsErrorDescription:
            "Impossible de se connecter au serveur pour récupérer les métriques. Veuillez vérifier que l'instance est en cours d'exécution.",
        metricsAutoRefresh:
            'Actualisation automatique toutes les {{seconds}} secondes',
        tabBilling: 'Billing',
        billingEmpty: 'No billing history for this instance.',
        tabServer: 'Serveur',
        serverIpAddress: 'Adresse IP',
        reinstallDescription:
            "Réinstaller {{agentName}} sur ce serveur. Cela réinitialisera l'installation mais préservera vos données. Ne faites cela que si nécessaire.",
        versionsSearch: 'Rechercher des versions...',
        versionsSearchCount: 'Rechercher {{count}} versions...',
        versionsEmpty: 'Aucune version trouvée',
        versionsEmptyDescription:
            'Aucune version ne correspond à votre recherche.',
        versionsErrorDescription:
            'Impossible de charger les versions. Veuillez vérifier votre connexion et réessayer !',
        versionsChangelog: 'Voir les changelogs sur npm',
        versionCurrent: 'Actuelle',
        versionLatest: 'Dernière',
        updateAvailable: 'A newer version of OpenClaw is available',
        updateAvailableDescription:
            'A new version of OpenClaw ({{version}}) is available for your instance.',
        updateAvailableDescriptionHermes:
            'A new version of Hermes ({{version}}) is available for your instance.',
        goToVersions: 'Go to Versions',
        versionInstall: 'Installer',
        versionInstalling: 'Installation...',
        versionInstallSuccess: 'Version {{version}} installée avec succès.',
        versionInstallFailed: "Impossible d'installer la version !",
        installVersionCanceledNavigation:
            'Installation de la version interrompue car vous avez quitté la page.',
        versionDownloads: '{{count}} téléchargements',
        versionChangelog: 'Changelog',
        versionOutdated: 'Obsolète',
        versionSupported: 'Pris en charge',
        versionSupportedTooltip:
            "Cette version vous permet de gérer OpenClaw via l'interface",
        versionInstallConfirmTitle: 'Installer la version {{version}}',
        versionInstallConfirmDescription:
            "Le changement de version peut provoquer un comportement inattendu ou nécessiter une configuration manuelle supplémentaire, notamment pour les versions plus récentes qui n'ont pas encore été entièrement vérifiées. Voulez-vous continuer ?",
        settingsIcon: 'Icône',
        settingsIconDescription: "Cliquez pour changer l'icône de l'agent.",
        settingsIconRandomize: 'Aléatoire',
        settingsIconRemove: "Supprimer l'icône",
        settingsBackground: 'Arrière-plan',
        settingsBackgroundReset: 'Réinitialiser',
        settingsName: 'Nom',
        settingsNamePlaceholder: 'Entrez le nom du claw',
        settingsNameDescription: 'Lettres, chiffres et tirets uniquement.',
        subdomain: 'Sous-domaine',
        subdomainPlaceholder: 'Entrez le sous-domaine',
        subdomainDescription:
            'Lettres minuscules et chiffres, {{min}}-{{max}} caractères.',
        subdomainInvalid:
            'Utilisez {{min}}-{{max}} lettres minuscules et chiffres uniquement !',
        subdomainUpdated: 'Sous-domaine mis à jour avec succès.',
        subdomainUpdateFailed: 'Échec de la mise à jour du sous-domaine !',
        subdomainInUse: 'Ce sous-domaine est utilisé par un autre claw !',
        settingsDetails: 'Détails',
        settingsDangerZone: 'Zone de danger',
        settingsDangerZoneDescription:
            'Votre instance sera supprimée à la fin de votre période de facturation actuelle.',
        settingsDangerZoneDescriptionLocal:
            'Cela supprimera définitivement l’agent et tous ses fichiers.',
        settingsScheduledDeletionDescription:
            "Suppression prévue le {{date}}. Annulez pour garder votre instance en cours d'exécution et votre abonnement actif.",
        settingsSave: 'Enregistrer',
        settingsSaving: 'Enregistrement...',
        settingsUpdated: 'Paramètres mis à jour.',
        settingsUpdateFailed: 'Échec de la mise à jour des paramètres !',
        saveCanceledNavigation:
            'Enregistrement interrompu car vous avez quitté la page.',
        savePasswordCanceledNavigation:
            'Sauvegarde du mot de passe interrompue car vous avez quitté la page.',
        saveGatewayTokenCanceledNavigation:
            'Sauvegarde du jeton de passerelle interrompue car vous avez quitté la page.',
        saveSSHKeyCanceledNavigation:
            'Sauvegarde de la clé SSH interrompue car vous avez quitté la page.',
        mockLogStarting: 'Starting OpenClaw agent...',
        mockLogLoadingModel: 'Loading model: claude-sonnet-4-5',
        mockLogAgentReady: 'Agent ready on port 3000',
        mockLogConnected: 'Connected to gateway',
        mockLogsContent:
            '2026-02-14T10:23:41Z {{starting}}\n2026-02-14T10:23:42Z {{loadingModel}}\n2026-02-14T10:23:43Z {{agentReady}}\n2026-02-14T10:23:44Z {{connected}}\n2026-02-14T10:24:01Z {{requestReceived}}\n2026-02-14T10:24:03Z {{responseSent1}}\n2026-02-14T10:25:12Z {{requestReceived}}\n2026-02-14T10:25:14Z {{responseSent2}}\n2026-02-14T10:26:30Z {{healthCheck}}',
        mockLogRequestReceived: 'Request received: /chat',
        mockLogResponseSent1: 'Response sent (1.2s)',
        mockLogResponseSent2: 'Response sent (1.8s)',
        mockLogHealthCheck: 'Health check passed'
    },
    privacy: {
        title: 'Politique de confidentialité',
        description:
            'Découvrez comment ClawHost collecte, utilise et protège vos données personnelles.',
        lastUpdated: 'Dernière mise à jour : 14 mars 2026',
        introTitle: '1. Introduction',
        introText:
            "ClawHost (« nous », « notre ») s'engage à protéger votre vie privée. Cette Politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre Service.",
        authTitle: '2. Authentification',
        authText:
            "ClawHost utilise Google Firebase Authentication pour gérer les comptes utilisateurs. Vous pouvez vous connecter avec un email, Google ou GitHub. En utilisant ces méthodes de connexion, vous acceptez leurs conditions et politiques de confidentialité respectives. Ces fournisseurs peuvent collecter des données de base telles que votre adresse email, votre nom et les informations de votre appareil. Nous ne stockons que votre adresse email et votre nom d'affichage.",
        collectTitle: '3. Informations que nous collectons',
        collectText:
            'Nous collectons des informations de la manière suivante :',
        personalInfoTitle: 'Informations personnelles',
        personalInfoEmail:
            'Adresse email (pour la création de compte et la communication)',
        personalInfoName: 'Nom (optionnel, pour la personnalisation)',
        personalInfoPayment:
            'Informations de paiement (traitées de manière sécurisée par des prestataires tiers)',
        serverInfoTitle: 'Informations sur le serveur',
        serverInfoConfig: 'Configuration et statut du serveur',
        serverInfoIp: 'Adresse IP et emplacement du serveur',
        serverInfoResources: 'Allocation des ressources (CPU, RAM, stockage)',
        useTitle: '4. Comment nous utilisons vos informations',
        useText: 'Nous utilisons les informations collectées pour :',
        useProvide: 'Fournir et maintenir notre Service',
        useTransactions:
            'Traiter les transactions et envoyer les informations de facturation',
        useNotices: 'Envoyer des avis importants et des mises à jour',
        useSupport: 'Répondre aux demandes de support client',
        useAnalyze:
            "Surveiller et analyser les habitudes d'utilisation pour améliorer notre Service",
        useFraud: 'Détecter et prévenir la fraude ou les abus',
        sharingTitle: '5. Partage et divulgation des données',
        sharingText:
            'Nous ne vendons pas vos informations personnelles. Nous pouvons partager des informations avec :',
        sharingProviders:
            "Les prestataires de services qui nous aident à exploiter notre Service (ex. : fournisseurs d'infrastructure cloud)",
        sharingLegal:
            "Les autorités légales lorsque la loi l'exige ou pour protéger nos droits",
        sharingBusiness:
            "Les partenaires commerciaux en cas de fusion, acquisition ou vente d'actifs",
        securityTitle: '6. Sécurité des données',
        securityText:
            "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations personnelles contre l'accès non autorisé, la modification, la divulgation ou la destruction. Cela inclut le chiffrement, des serveurs sécurisés et des évaluations de sécurité régulières.",
        retentionTitle: '7. Conservation des données',
        retentionText:
            'Nous conservons vos informations personnelles aussi longtemps que votre compte est actif ou que nécessaire pour vous fournir des services. Nous pouvons conserver certaines informations selon les exigences légales ou pour des besoins commerciaux légitimes.',
        rightsTitle: '8. Vos droits',
        rightsText: 'Selon votre localisation, vous pouvez avoir le droit de :',
        rightsAccess: 'Accéder à vos données personnelles',
        rightsCorrect: 'Corriger les données inexactes',
        rightsDelete: 'Demander la suppression de vos données',
        rightsObject: 'Vous opposer au traitement de vos données',
        rightsPortability: 'Portabilité des données',
        rightsWithdraw: 'Retirer votre consentement à tout moment',
        cookiesTitle: '9. Cookies et suivi',
        cookiesText:
            "Nous n'utilisons pas de cookies. L'authentification est gérée par Firebase et ne repose pas sur des cookies stockés dans votre navigateur.",
        transfersTitle: '10. Transferts internationaux de données',
        transfersText:
            'Vos informations peuvent être transférées et traitées dans des pays autres que le vôtre. Nous veillons à ce que des garanties appropriées soient en place pour protéger vos données conformément à cette Politique de confidentialité.',
        eligibilityTitle: '11. Éligibilité',
        eligibilityText:
            "Notre Service est accessible à tous. Il n'y a aucune restriction d'âge pour utiliser ClawHost.",
        changesTitle: '12. Modifications de cette politique',
        changesText:
            'Nous pouvons mettre à jour cette Politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle Politique de confidentialité sur cette page et en mettant à jour la date de « Dernière mise à jour ».',
        contactTitle: '13. Nous contacter',
        contactText:
            'Si vous avez des questions concernant cette Politique de confidentialité ou souhaitez exercer vos droits, veuillez nous contacter à'
    },
    terms: {
        title: "Conditions d'utilisation",
        description:
            "Lisez les termes et conditions d'utilisation des services ClawHost.",
        lastUpdated: 'Dernière mise à jour : 14 mars 2026',
        acceptanceTitle: '1. Acceptation des conditions',
        acceptanceText:
            "En accédant et en utilisant ClawHost (« Service »), vous acceptez d'être lié par les termes et dispositions de cet accord. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre Service.",
        serviceTitle: '2. Description du Service',
        serviceText:
            "ClawHost fournit le déploiement en un clic d'OpenClaw et Hermes sur des serveurs dédiés. Nous permettons aux utilisateurs de déployer, gérer et accéder à des instances OpenClaw et Hermes préconfigurées avec un accès root complet et des ressources dédiées.",
        authTitle: '3. Authentification',
        authText:
            'ClawHost utilise Google Firebase Authentication pour gérer la connexion. Vous pouvez vous authentifier avec un email, Google ou GitHub. En utilisant ces méthodes, vous acceptez les conditions et politiques de confidentialité respectives de Google et GitHub. Ces fournisseurs peuvent collecter des informations de base telles que votre adresse email, votre nom et les données de votre appareil.',
        responsibilitiesTitle: "4. Responsabilités de l'utilisateur",
        responsibilitiesText: 'Vous vous engagez à :',
        responsibilitiesAccurate:
            "Fournir des informations d'inscription exactes et complètes",
        responsibilitiesSecurity:
            'Maintenir la sécurité de vos identifiants de compte',
        responsibilitiesCompliance:
            'Utiliser le Service en conformité avec toutes les lois applicables',
        responsibilitiesLegal:
            'Ne pas utiliser le Service à des fins illégales ou non autorisées',
        responsibilitiesAccess:
            "Ne pas tenter d'obtenir un accès non autorisé à des systèmes ou réseaux",
        prohibitedTitle: '5. Utilisations interdites',
        prohibitedText: 'Vous ne pouvez pas utiliser notre Service pour :',
        prohibitedMalware:
            'Distribuer des logiciels malveillants, virus ou tout logiciel nuisible',
        prohibitedDos:
            'Mener des attaques par déni de service ou abus de réseau',
        prohibitedSpam: 'Envoyer du spam ou des communications non sollicitées',
        prohibitedIllegal: 'Héberger ou distribuer du contenu illégal',
        prohibitedIp:
            'Violer les droits de tiers, y compris la propriété intellectuelle',
        prohibitedMining: 'Miner des cryptomonnaies',
        prohibitedOther:
            'Toute autre activité illicite ou nuisible que nous pourrions juger inappropriée à notre discrétion',
        paymentTitle: '6. Paiement et facturation',
        paymentText:
            "Les services sont facturés sur une base mensuelle ou annuelle fixe. Vous pouvez passer d'une facturation mensuelle à annuelle ou inversement à tout moment, le changement prenant effet au début de votre prochaine période de facturation. Tous les paiements sont non remboursables. Lorsque vous payez pour un serveur, vous y avez accès pour toute la période de facturation. Si vous annulez, l'annulation prend effet à la fin de la période de facturation en cours. Les prix sont susceptibles de changer, mais les modifications ne s'appliqueront qu'aux nouveaux claws déployés et n'affecteront pas ceux déjà en service. Le défaut de paiement peut entraîner la suspension ou la résiliation de votre compte.",
        availabilityTitle: '7. Disponibilité du Service',
        availabilityText:
            'Nous nous efforçons de maintenir une haute disponibilité mais ne garantissons pas un accès ininterrompu au Service. Nous nous réservons le droit de modifier, suspendre ou interrompre tout ou partie du Service à tout moment, avec ou sans préavis.',
        liabilityTitle: '8. Limitation de responsabilité',
        liabilityText:
            "Dans la mesure maximale permise par la loi, ClawHost ne sera pas responsable des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, ni de toute perte de profits ou de revenus, qu'ils soient subis directement ou indirectement.",
        terminationTitle: '9. Résiliation',
        terminationText:
            "Nous pouvons résilier ou suspendre votre compte et l'accès au Service immédiatement, sans préavis, pour tout comportement que nous estimons contraire à ces Conditions ou nuisible à d'autres utilisateurs, à nous-mêmes ou à des tiers, ou pour toute autre raison.",
        affiliateTitle: '10. Affiliate Program',
        affiliateText:
            'ClawHost offers an affiliate program that allows users to earn rewards by referring new users. By participating in the affiliate program, you agree to the following:',
        affiliateCodeUnique:
            'Each user receives a unique referral code upon registration, which can be customized once.',
        affiliateCodeOneChange:
            'The referral code can only be changed one time. Choose your custom code carefully.',
        affiliateReferralWindow:
            'A referral is valid for 6 months from when the referred user first visits ClawHost with your referral link. After 6 months, the referral expires.',
        affiliateNoSelfReferral:
            'Self-referrals are not permitted. You may not refer your own accounts.',
        affiliateAbuse:
            'Any abuse of the affiliate program, including but not limited to fake accounts, automated signups, or fraudulent referrals, will result in forfeiture of rewards and possible account termination.',
        changesToTermsTitle: '11. Modifications des conditions',
        changesToTermsText:
            "Nous nous réservons le droit de modifier ces conditions à tout moment. Nous informerons les utilisateurs de tout changement important par email ou via le Service. L'utilisation continue du Service après de telles modifications constitue l'acceptation des conditions mises à jour.",
        contactTitle: '12. Coordonnées',
        contactText:
            'Si vous avez des questions concernant ces Conditions, veuillez nous contacter à'
    },
    acquiredBanner: {
        title: 'Racheté par GetOpenClaw.ai',
        message: 'ClawHost fait désormais partie de GetOpenClaw.ai — toutes vos données sont accessibles uniquement là-bas.'
    },
    compare: {
        title: 'Comparaison',
        description:
            "Découvrez comment ClawHost se compare aux autres plateformes d'hébergement OpenClaw.",
        badge: 'Comparaison',
        feature: 'Plateforme',
        compareWith: 'Comparer avec',
        lastUpdated: 'Dernière mise à jour : mars 2026',
        competitorClawHost: 'ClawHost',
        competitorLobsterFarm: 'LobsterFarm',
        competitorSimpleAgent: 'SimpleAgent',
        competitorMyAgentAi: 'MyAgent.ai',
        competitorQuickAgent: 'QuickAgent',
        categoryInfrastructure: 'Infrastructure',
        categoryPricing: 'Tarification & Facturation',
        categoryDeployment: 'Déploiement & Configuration',
        categoryManagement: 'Gestion OpenClaw',
        categorySecurity: 'Données & Sécurité',
        categoryMonitoring: 'Surveillance & Maintenance',
        categorySupport: 'Support & Plateforme',
        featureServerOwnership: 'Propriété du serveur',
        featureProviderChoice: 'Choix du fournisseur cloud',
        featureDedicatedResources: 'Ressources dédiées',
        featureRootAccess: 'Accès root/SSH complet',
        featureServerLocations: 'Emplacements des serveurs',
        featureStartingPrice: 'Prix de départ',
        featureTransparentPricing: 'Tarification transparente',
        featurePowerfulServers: 'Serveurs puissants, prix réduit',
        featureLocationSelection: "Choisir l'emplacement du serveur",
        featureSubdomainAccess: 'Accès par sous-domaine',
        featureThemes: 'Thèmes clair et sombre',
        featureSetupTime: 'Temps de configuration',
        featureOneClickDeploy: 'Déploiement en un clic',
        featureMultipleInstances: 'Instances multiples',
        featureDataOwnership: 'Propriété complète des données',
        featureDataExport: 'Export des données',
        featureBackups: 'Sauvegardes',
        featureSecurityHardening: 'Renforcement de la sécurité',
        featureSslTls: 'SSL/TLS',
        featureOpenSource: 'Open source',
        featureAutoUpdates: 'Mises à jour automatiques',
        featureDiagnostics: 'Diagnostics en temps réel',
        featureLogStreaming: 'Streaming des journaux',
        featureRepairTools: 'Outils de réparation',
        featureSupportChannels: 'Canaux de support',
        featureMultiLanguage: 'Interface multilingue',
        featureDesktopApp: 'Application de bureau',
        featureOneClickVersion: 'Changement de version en un clic',
        featureWebTerminal: 'Terminal web',
        featureSocials: 'Réseaux sociaux',
        dedicatedVps: 'VPS dédié',
        sharedContainers: 'Conteneurs partagés',
        isolatedContainers: 'Conteneurs isolés',
        cloudWorkspaces: 'Espaces de travail cloud',
        threeProviders: 'Cloud',
        singleProvider: 'Fournisseur unique',
        fullyDedicated: 'Entièrement dédié',
        shared: 'Partagé',
        fullRootSsh: 'Root + SSH complet',
        sshOnRequest: 'SSH sur demande',
        noAccess: "Pas d'accès",
        thirtyPlusLocations: '30+ emplacements',
        limitedLocations: 'Limité',
        fourLocations: '4 emplacements',
        fromTwentyFiveMonth: 'À partir de 25 $/mois',
        aboutFortyFourMonth: '~44 $/mois en moyenne',
        fromNineteenMonth: '19–79 $/mois',
        nineteenMonth: '19 $/mois',
        clearSpecsPricing: 'Spécifications et prix clairs',
        unclearPricing: 'Tarification floue',
        fixedTiers: '3 niveaux fixes',
        creditBased: 'Basé sur des crédits',
        minutes: 'Minutes',
        underOneMinute: "Moins d'une minute",
        thirtySeconds: '30 secondes',
        instant: 'Instantané',
        noneRequired: 'Aucune',
        minimal: 'Minimal',
        unlimited: 'Illimité',
        singleInstance: 'Unique',
        noMarketplace: 'Pas de marketplace',
        appOnly: 'Application uniquement',
        fullConfig: 'Configuration complète',
        limitedConfig: 'Limitée',
        zipExport: 'Export ZIP',
        serverTransfer: 'Transfert de serveur',
        noExport: "Pas d'export",
        volumeStorage: 'Stockage en volumes',
        noBackups: 'Pas de sauvegardes',
        dailyBackups: 'Sauvegardes quotidiennes',
        included: 'Inclus',
        notIncluded: 'Non inclus',
        managed: 'Géré',
        manual: 'Manuel',
        appStore: 'App Store',
        liveMonitoring: 'Surveillance en direct',
        liveLogs: 'Journaux en direct',
        oneClickRepair: 'Réparation en un clic',
        emailGithub: 'Email, GitHub',
        humanSupport: 'Support humain',
        communityOnly: 'Communauté uniquement',
        appSupport: 'Support via application',
        prioritySupport: 'Support 24/7 (Pro+)',
        fourLanguages: '4 langues',
        englishOnly: 'Anglais uniquement',
        available: 'Disponible',
        comingSoon: 'Bientôt disponible',
        macOsOnly: 'macOS uniquement',
        viaTelegram: 'Via Telegram',
        builtInTerminal: 'Sans SSH',
        notAvailable: 'Non disponible',
        disclaimer: 'Quelque chose a changé ou est incorrect ? Écrivez-nous à',
        disclaimerOr: 'ou ouvrez une pull request sur',
        github: 'GitHub',
        ctaTitle: 'Prêt à voir la différence ?',
        ctaDescription:
            'Déployez OpenClaw sur votre propre serveur dédié. Propriété complète, tarification transparente et prêt en minutes.'
    },
    admin: {
        title: 'Admin',
        description: 'Gérez les utilisateurs et données de votre plateforme.',
        usersTab: 'Utilisateurs',
        totalUsers: '{{count}} utilisateurs',
        noUsers: 'Aucun utilisateur',
        noUsersDescription:
            'Aucun utilisateur trouvé correspondant à vos filtres.',
        genericErrorDescription: 'Une erreur est survenue. Veuillez réessayer.',
        genericEmptyDescription: 'Rien à afficher pour le moment.',
        failedToLoadUsers: 'Échec du chargement des utilisateurs !',
        failedToLoadUsersDescription:
            "Une erreur s'est produite lors du chargement des utilisateurs. Veuillez réessayer.",
        failedToLoadUserDetail:
            "Échec du chargement des détails de l'utilisateur !",
        userDetail: "Détails de l'utilisateur",
        userInfo: 'Informations utilisateur',
        email: 'E-mail',
        name: 'Nom',
        role: 'Rôle',
        authMethods: "Méthodes d'authentification",
        license: 'Licence',
        referralCode: 'Code de parrainage',
        referredBy: 'Parrainé par',
        joined: 'Inscrit le',
        claws: 'Claws',
        sshKeys: 'Clés SSH',
        volumes: 'Volumes',
        billing: 'Facturation',
        noClaws: 'Aucun Claw',
        noSshKeys: 'Aucune Clé SSH',
        noVolumes: 'Aucun Volume',
        noBilling: 'Aucun Historique de Facturation',
        hasLicense: 'Oui',
        noLicense: 'Non',
        notSet: 'Non défini',
        searchPlaceholder: 'Rechercher par e-mail ou nom...',
        filterAll: 'Tous les utilisateurs',
        filterWithClaws: 'Avec claws',
        filterWithoutClaws: 'Sans claws',
        sortNewest: 'Plus récents',
        sortOldest: 'Plus anciens',
        editUser: 'Modifier',
        saveUser: 'Enregistrer',
        userUpdated: 'Utilisateur mis à jour.',
        userUpdateFailed: 'Échec de la mise à jour !',
        clawsTab: 'Claws',
        sshKeysTab: 'Clés SSH',
        volumesTab: 'Volumes',
        noClawsFound: 'Aucun Claw',
        noSSHKeysFound: 'Aucune Clé SSH',
        noVolumesFound: 'Aucun Volume',
        failedToLoadAgents: 'Échec du chargement des agents !',
        failedToLoadSSHKeys: 'Échec du chargement des clés SSH !',
        failedToLoadVolumes: 'Échec du chargement des volumes !',
        owner: 'Propriétaire',
        searchClaws: 'Rechercher des claws...',
        searchSSHKeys: 'Rechercher des clés SSH...',
        referralsTab: 'Parrainages',
        pendingClawsTab: 'En attente',
        emailsTab: 'E-mails',
        analyticsTab: 'Analytique',
        billingTab: 'Facturation',
        settingsTab: 'Paramètres',
        settingsDescription: 'Gérez vos préférences administrateur.',
        showAllAgents: 'Afficher tous les agents de tous les utilisateurs',
        billingFilterAll: 'Toutes les commandes',
        billingFilterService: 'Service Claw',
        billingFilterLicense: 'Licence',
        billingOrderTypeLabel: ' · {{type}}',
        noBillingFound: 'Aucune commande',
        failedToLoadBilling: 'Échec du chargement des commandes !',
        searchBilling: 'Rechercher par produit...',
        billingReason: 'Raison',
        billingType: 'Type',
        billingSubtotal: 'Sous-total',
        billingDiscount: 'Remise',
        billingTax: 'Taxe',
        billingTotal: 'Total',
        analyticsDay: 'Jour',
        analyticsWeek: 'Semaine',
        analyticsMonth: 'Mois',
        analyticsYear: 'Année',
        analyticsAllTime: 'Tout le temps',
        analyticsFilter: 'Filtrer',
        analyticsResources: 'Ressources',
        analyticsSelectAll: 'Tout sélectionner',
        analyticsDeselectAll: 'Tout désélectionner',
        failedToLoadAnalytics: 'Échec du chargement des analytiques !',
        noAnalyticsData: 'Aucune donnée analytique disponible.',
        noReferralsFound: 'Aucun Parrainage',
        noPendingClawsFound: 'Aucun Claw en Attente',
        noEmailsFound: 'Aucun E-mail',
        failedToLoadReferrals: 'Échec du chargement des parrainages !',
        failedToLoadPendingClaws: 'Échec du chargement des claws en attente !',
        failedToLoadEmails: 'Échec du chargement des e-mails !',
        referrer: 'Parrain',
        referred: 'Filleul',
        earned: 'Gagné',
        expiresAt: 'Expire',
        feature: 'Fonctionnalité',
        sentAt: 'Envoyé',
        fileSize: 'Taille',
        registered: 'Inscrit',
        status: 'Statut',
        ip: 'IP',
        plan: 'Plan',
        location: 'Emplacement',
        subdomain: 'Sous-domaine',
        subscription: 'Abonnement',
        billingInterval: 'Facturation',
        deletionScheduled: 'Suppression programmée',
        fingerprint: 'Empreinte',
        price: 'Prix',
        pricePerMonth: '{{price}}/mois',
        statusRunning: 'En cours',
        statusStopped: 'Arrêté',
        adminBadge: 'Admin',
        unitGB: '{{size}} Go',
        unitKB: '{{size}} Ko'
    },
    affiliate: {
        title: 'Affiliation',
        description:
            'Gagnez des récompenses en parrainant vos amis sur ClawHost.',
        subtitle:
            'Partagez votre lien de parrainage et gagnez des récompenses.',
        learnMore: "En savoir plus sur le programme d'affiliation",
        referralCode: 'Code de parrainage',
        referrals: 'Parrainages',
        payments: 'paiements',
        earnings: 'Revenus',
        codeChangeHint:
            'Vous pouvez personnaliser votre code de parrainage une seule fois.',
        codeAlreadyChanged: 'Votre code de parrainage a déjà été personnalisé.',
        codeUpdated: 'Code de parrainage mis à jour.',
        codeUpdateFailed: 'Échec de la mise à jour du code de parrainage !',
        invalidCodeLength:
            'Le code doit contenir entre {{min}} et {{max}} caractères !',
        referralHistory: 'Historique des parrainages',
        paymentHistory: 'Historique des paiements',
        periodToday: "Aujourd'hui",
        periodWeek: 'Semaine',
        periodMonth: 'Mois',
        periodYear: 'Année',
        periodAll: 'Tout',
        confirmChangeTitle: 'Modifier le code de parrainage',
        confirmChangeDescription:
            'Êtes-vous sûr ? Cette action est permanente et irréversible. Vous ne pourrez plus modifier votre code de parrainage.',
        noReferralsYet: 'Aucun parrainage',
        noReferralsDescription:
            'Partagez votre lien de parrainage pour commencer à gagner des récompenses.',
        noPaymentsYet: 'Aucun paiement',
        noPaymentsDescription:
            'Lorsque vos filleuls effectuent des achats, leurs paiements apparaîtront ici.'
    },
    affiliateProgram: {
        title: "Programme d'affiliation",
        description:
            "Découvrez comment fonctionne le programme d'affiliation ClawHost, combien vous pouvez gagner et les règles de participation.",
        lastUpdated: 'Dernière mise à jour : 1 avril 2026',
        overviewTitle: '1. Aperçu',
        overviewText:
            "Le programme d'affiliation ClawHost vous permet de gagner des récompenses en recommandant de nouveaux utilisateurs à ClawHost. Lorsque quelqu'un effectue un achat après avoir visité ClawHost via votre lien de parrainage, vous recevez une commission sur ses paiements. Le programme est gratuit et accessible à tous les utilisateurs enregistrés de ClawHost.",
        howItWorksTitle: '2. Comment ça fonctionne',
        howItWorksText: "Démarrer avec le programme d'affiliation est simple :",
        howItWorksStep1:
            'Créez un compte ClawHost. Un code de parrainage unique est automatiquement généré pour vous.',
        howItWorksStep2:
            'Partagez votre lien de parrainage avec vos amis, collègues ou votre audience. Votre lien suit le format : clawhost.cloud?ref=YOUR_CODE.',
        howItWorksStep3:
            "Lorsqu'une personne effectue un achat après avoir visité ClawHost via votre lien, cela est enregistré comme votre parrainage.",
        howItWorksStep4:
            'Vous gagnez une commission chaque fois que votre filleul effectue un achat éligible.',
        earningsTitle: '3. Gains et paiements',
        earningsText: "Voici comment fonctionnent les gains d'affiliation :",
        earningsCommission:
            "Vous gagnez une commission de 15% sur chaque achat éligible effectué par vos filleuls. Les commissions s'appliquent aux plans ClawHost Cloud et ClawHost Go.",
        earningsMonthly:
            'Pour les abonnements mensuels, vous gagnez des commissions pendant 1 an à compter de la date du parrainage.',
        earningsYearly:
            'Pour les abonnements annuels, vous gagnez une commission sur la première année uniquement.',
        earningsPayout:
            "Le montant minimum de retrait est de 100 $ USD. Pour demander un retrait, contactez notre équipe d'assistance.",
        earningsPaymentMethod:
            'Les retraits sont effectués via PayPal. Vous devez fournir une adresse e-mail PayPal valide lors de la demande de paiement.',
        earningsCurrency: 'Tous les gains sont calculés et affichés en USD.',
        referralCodeTitle: '4. Votre code de parrainage',
        referralCodeText:
            'Chaque utilisateur reçoit un code de parrainage unique lors de son inscription. Vous pouvez le personnaliser une fois pour le rendre plus mémorable :',
        referralCodeUnique:
            'Votre code de parrainage est unique à votre compte et ne peut être partagé avec ou transféré à un autre utilisateur.',
        referralCodeOneChange:
            'Vous pouvez personnaliser votre code de parrainage exactement une seule fois. Choisissez soigneusement — ce changement est permanent et irréversible.',
        referralCodeFormat:
            'Les codes de parrainage ne peuvent contenir que des lettres, des chiffres, des tirets et des underscores.',
        referralWindowTitle: "5. Fenêtre d'attribution des parrainages",
        referralWindowText:
            "Un parrainage vous est attribué pendant 3 mois à partir du moment où le filleul visite ClawHost via votre lien pour la première fois. Si le filleul n'effectue pas d'achat dans cette fenêtre de 3 mois, le parrainage expire et aucune commission ne sera versée. Si l'utilisateur visite ClawHost via un autre lien de parrainage, le nouveau parrainage remplace le précédent.",
        eligibilityTitle: '6. Éligibilité',
        eligibilityText:
            "Pour participer au programme d'affiliation, vous devez remplir les conditions suivantes :",
        eligibilityAccount: 'Vous devez avoir un compte ClawHost enregistré.',
        eligibilityStanding:
            'Votre compte doit être en règle sans antécédent de violation des règles.',
        eligibilityAge:
            "Vous devez avoir au moins 18 ans ou l'âge de la majorité dans votre juridiction.",
        rulesTitle: '7. Règles du programme',
        rulesText:
            "Pour maintenir l'intégrité du programme d'affiliation, les règles suivantes s'appliquent :",
        rulesNoSelfReferral:
            "L'auto-parrainage est strictement interdit. Vous ne pouvez pas parrainer vos propres comptes ou des comptes que vous contrôlez.",
        rulesNoFakeAccounts:
            "La création de faux comptes, d'inscriptions automatisées ou l'utilisation de bots pour générer des parrainages est interdite.",
        rulesNoSpam:
            "L'envoi de messages non sollicités en masse (spam) pour promouvoir votre lien de parrainage n'est pas autorisé.",
        rulesNoMisrepresentation:
            "Vous ne pouvez pas déformer ClawHost, ses services ou le programme d'affiliation de quelque manière que ce soit.",
        rulesNoIncentivized:
            "Offrir des incitations monétaires directes (par exemple, payer des utilisateurs pour s'inscrire via votre lien) n'est pas autorisé.",
        terminationTitle: '8. Violation et résiliation',
        terminationText:
            "Toute violation de ces règles entraînera la perte immédiate de toutes les récompenses en attente et acquises. ClawHost se réserve le droit de suspendre ou de bannir définitivement votre compte du programme d'affiliation. Dans les cas graves, votre compte ClawHost peut également être résilié. Toutes les décisions concernant les violations sont définitives.",
        marketingTitle: '9. Comment promouvoir',
        marketingText:
            "Il existe de nombreuses façons créatives et légitimes de partager votre lien de parrainage et d'augmenter vos gains :",
        marketingSocial:
            'Partagez votre lien sur les réseaux sociaux comme X, LinkedIn, Reddit et Facebook. Écrivez sur votre expérience avec ClawHost et incluez votre lien de parrainage.',
        marketingBlog:
            'Rédigez des articles de blog, des tutoriels ou des avis sur ClawHost. Incluez naturellement votre lien de parrainage dans le contenu.',
        marketingVideo:
            'Créez du contenu vidéo sur YouTube ou TikTok montrant comment vous utilisez ClawHost pour déployer et gérer des agents IA.',
        marketingCommunity:
            "Participez aux communautés de développeurs, forums et serveurs Discord. Quand quelqu'un pose une question sur l'hébergement cloud ou le déploiement d'agents IA, recommandez ClawHost avec votre lien.",
        marketingNewsletter:
            'Si vous gérez une newsletter ou une liste de diffusion, mentionnez ClawHost dans un numéro pertinent avec votre lien de parrainage.',
        marketingComparison:
            'Rédigez des articles de comparaison honnêtes ou des guides qui mettent en avant ce qui distingue ClawHost des autres plateformes.',
        changesToProgramTitle: '10. Modifications du programme',
        changesToProgramText:
            "ClawHost se réserve le droit de modifier, suspendre ou interrompre le programme d'affiliation à tout moment sans préavis. Cela inclut les modifications des taux de commission, des fenêtres de parrainage, des seuils de paiement et des règles du programme. La participation continue après les modifications constitue une acceptation des conditions mises à jour.",
        getStartedTitle: '11. Commencer',
        getStartedText:
            "Prêt à commencer à gagner ? Rendez-vous sur votre tableau de bord d'affiliation pour récupérer votre lien de parrainage et commencez à le partager avec votre réseau.",
        getStartedButton: "Accéder au tableau de bord d'affiliation",
        contactTitle: '12. Contact',
        contactText:
            "Si vous avez des questions sur le programme d'affiliation, besoin d'aide avec votre code de parrainage ou souhaitez signaler une violation, contactez-nous à"
    }
}

export default fr