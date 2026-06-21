import type { Translations } from '#i18n/types'

const it: Translations = {
    common: {
        loading: 'Caricamento...',
        noResults: 'Nessun risultato trovato.',
        save: 'Salva',
        cancel: 'Annulla',
        confirm: 'Conferma',
        delete: 'Elimina',
        deleting: 'Eliminazione...',
        create: 'Crea',
        done: 'Fatto',
        back: 'Indietro',
        copy: 'Copia',
        copied: 'Copiato.',
        copiedWithLabel: '{{label}} copiato.',
        show: 'Mostra',
        hide: 'Nascondi',
        tryAgain: 'Riprova',
        addKey: 'Aggiungi chiave',
        close: 'Chiudi',
        none: 'Nessuno',
        all: 'Tutti',
        unknown: 'Sconosciuto',
        pageNotFound: 'Pagina non trovata',
        closeNotification: 'Chiudi notifica',
        beta: 'Beta',
        brandName: 'ClawHost',
        brandNameGo: 'ClawHost Go',
        brandNameGoVersion: 'ClawHost Go {{version}}',
        pageTitleWithBrand: '{{title}} - ClawHost',
        menuFile: 'File',
        menuEdit: 'Modifica',
        menuView: 'Vista',
        menuWindow: 'Finestra',
        menuHelp: 'Aiuto',
        scrollToBottom: 'Scorri in fondo',
        second: 'secondo',
        seconds: 'secondi'
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
        switchLanguage: 'Lingua'
    },
    theme: {
        light: 'Chiaro',
        dark: 'Scuro',
        system: 'Sistema',
        toggleTheme: 'Cambia tema'
    },
    nav: {
        claws: 'Claws',
        sshKeys: 'Chiavi SSH',
        account: 'Account',
        affiliate: 'Affiliato',
        license: 'Licenza',
        signOut: 'Esci',
        admin: 'Admin',
        login: 'Accedi',
        deploy: 'Distribuisci',
        deployOpenClaw: 'Distribuisci OpenClaw',
        mainNavigation: 'Navigazione principale',
        footerNavigation: 'Navigazione a pi\u00e8 di pagina',
        toggleMenu: 'Apri/chiudi menu',
        cloud: 'Cloud',
        cloudSubtitle: 'Tecnico',
        go: 'Go',
        goSubtitle: 'Non tecnico'
    },
    go: {
        pageTitle: 'ClawHost Go',
        heroTitle1: 'Distribuisci OpenClaw.',
        heroTitle2: 'Localmente. Istantaneamente.',
        badge: 'OpenClaw e Hermes in locale',
        tutorialBadge: 'Come iniziare su Go',
        description:
            'Un client desktop leggero per gestire le tue istanze OpenClaw. Distribuisci, monitora e controlla i tuoi claw — direttamente dal tuo computer.',
        features: 'Funzionalit\u00e0',
        whyClawHostGo: 'Funzionalit\u00e0 tutto-in-uno',
        featuresDescription:
            'Perch\u00e9 vale la pena provare, le funzionalit\u00e0 parlano da sole.',
        zeroConfigDescription:
            'Risparmia ore di configurazione di server, OpenClaw e Hermes. Sono preinstallati e pronti in pochi minuti.',
        ownedDataDescription:
            'Tutto funziona sul tuo dispositivo. Nessun server cloud, nessuna terza parte, nessun dato che lascia il tuo computer.',
        terminalAccessDescription:
            "Accedi al terminale della tua istanza OpenClaw direttamente dall'app. Nessun client SSH esterno necessario.",
        simplePricing: 'Prezzi semplici',
        simplePricingDescription:
            'Una licenza, tutto illimitato. Nessun costo mensile, nessun limite di utilizzo, nessun costo nascosto.',
        localDomain: 'Dominio locale personalizzato',
        localDomainDescription:
            'Accedi a OpenClaw tramite un dominio locale personalizzato. URL puliti sulla tua rete.',
        secureDescription:
            'I tuoi dati non lasciano mai il tuo dispositivo. Completamente isolato, completamente crittografato, completamente tuo.',
        pricing: 'Prezzi',
        pricingTitle: 'Prezzi semplici, pagamento unico',
        pricingDescription:
            'Nessun abbonamento, nessun costo nascosto. Una licenza, utilizzo illimitato.',
        pricingPrice: '${{price}}',
        pricingLabel: 'Pagamento unico',
        pricingFeature1: 'Licenza a vita',
        pricingFeature2: 'Claw illimitati',
        pricingFeature3: 'Tutti gli aggiornamenti futuri',
        pricingFeature4: 'Nessun limite di utilizzo',
        pricingFeature5: 'Supporto prioritario',
        pricingFeature6: 'Dominio locale personalizzato',
        comparison: 'Confronto',
        comparisonTitle: 'Go vs Cloud',
        comparisonDescription:
            'Scegli ci\u00f2 che funziona per te. Go funziona localmente, Cloud funziona su server dedicati.',
        comparisonLocalUs: 'Funziona interamente sul tuo dispositivo',
        comparisonLocalOthers: 'Funziona su server remoti',
        comparisonPricingUs: 'Pagamento unico',
        comparisonPricingOthers: 'Abbonamento mensile',
        comparisonDataUs: 'I dati restano sul tuo computer',
        comparisonDataOthers: 'Dati su server cloud',
        comparisonSetupUs: 'Installa e avvia istantaneamente',
        comparisonSetupOthers: 'Distribuisci in un clic',
        comparisonUpdatesUs: 'Aggiornamenti automatici',
        comparisonUpdatesOthers: 'Aggiornamenti automatici',
        faqTitle: 'Domande',
        faqHeading: 'Domande frequenti',
        faqDescription: 'Tutto ci\u00f2 che devi sapere su ClawHost Go.',
        faq1Question: "Cos'\u00e8 ClawHost Go?",
        faq1Answer:
            "ClawHost Go \u00e8 un'applicazione desktop leggera che ti permette di eseguire OpenClaw localmente sul tuo computer. Nessun server cloud necessario — installa, avvia e inizia a usare OpenClaw in pochi secondi.",
        faq2Question: 'In cosa Go \u00e8 diverso da ClawHost Cloud?',
        faq2Answer:
            "ClawHost Cloud distribuisce OpenClaw su server remoti dedicati con uptime 24/7 e accesso globale. ClawHost Go esegue tutto localmente sul tuo dispositivo — ideale per la privacy, l'uso offline e configurazioni semplici.",
        faq3Question: 'Ho bisogno di una connessione internet?',
        faq3Answer:
            "ClawHost Go funziona offline per l'uso locale. Una connessione internet \u00e8 necessaria solo per la configurazione iniziale, gli aggiornamenti e le funzionalit\u00e0 che richiedono chiamate API esterne.",
        faq4Question: 'La licenza \u00e8 un pagamento unico?',
        faq4Answer:
            "S\u00ec. Paghi una volta e ottieni l'accesso a vita a ClawHost Go, inclusi tutti gli aggiornamenti futuri. Nessun abbonamento, nessun costo ricorrente.",
        faq5Question: 'Quali sistemi operativi sono supportati?',
        faq5Answer:
            'ClawHost Go supporta Windows e macOS. Entrambe le piattaforme hanno le stesse funzionalit\u00e0 e ricevono aggiornamenti contemporaneamente.',
        faq6Question: 'Posso passare da Go a Cloud in seguito?',
        faq6Answer:
            'Assolutamente. Puoi esportare la tua configurazione OpenClaw da Go e distribuirla su ClawHost Cloud in qualsiasi momento. Entrambe le piattaforme sono completamente compatibili.',
        statsPrice: '${{price}}',
        statsLifetime: 'A vita',
        statsOneTime: 'Unico',
        statsPayment: 'Pagamento',
        statsLocal: 'Locale',
        statsLocally: 'Funziona localmente',
        statsZero: 'Zero',
        statsZeroConfig: 'Zero configurazione',
        ctaTitle: 'Esegui OpenClaw localmente',
        ctaDescription:
            'Pagamento unico, licenza a vita. Distribuisci OpenClaw sul tuo computer — nessun cloud, nessun abbonamento, nessun limite. I tuoi dati, le tue regole.',
        downloadForMac: 'Scarica per Mac',
        downloadVersion: 'Versione {{version}}',
        downloadForWindows: 'Scarica per Windows',
        deviceNotSupported: 'Il tuo dispositivo non è ancora supportato da ClawHost Go.',
        downloadFailed: 'Download non riuscito!',
        downloadStarted: 'Download avviato.',
        appleSilicon: 'Apple Silicon',
        intel: 'Intel',
        chooseMacArch: 'Quale Mac hai?',
        otherVersions: 'Altre versioni',
        updateAvailable: 'La versione {{version}} \u00e8 disponibile.',
        updateDownload: 'Scarica',
        updateDismiss: 'Pi\u00f9 tardi',
        clawNotFound: 'Claw non trovato!',
        clawNameAlreadyExists: 'Un claw con questo nome esiste gi\u00e0!',
        invalidSubdomain:
            'Sottodominio non valido. Usa 3-20 lettere minuscole e numeri!',
        subdomainAlreadyInUse: 'Questo sottodominio \u00e8 gi\u00e0 in uso!',
        clawDirectoryNotFound: 'Directory del claw non trovata!',
        noVersionInstalled:
            'Nessuna versione di OpenClaw installata. Vai alla scheda Versioni e installane una prima!',
        failedToStartClaw: 'Impossibile avviare il claw!',
        noVersionAssigned:
            'Nessuna versione di OpenClaw assegnata a questo claw!',
        invalidAgentName: 'Nome agente non valido!',
        invalidPath: 'Percorso non valido!',
        fileNotFound: 'File non trovato!',
        purchasingNotAvailable:
            "L'acquisto non \u00e8 disponibile in modalit\u00e0 locale!",
        exportFailed: 'Esportazione fallita!',
        versionNotInstalled:
            'La versione {{version}} di OpenClaw non \u00e8 installata!',
        failedToStartProcess: 'Impossibile avviare il processo: {{reason}}!',
        gatewayNotReady: 'L’agente non è diventato pronto in tempo!',
        processExitedImmediately:
            'Il processo \u00e8 terminato immediatamente. Log:\n{{logs}}',
        processExitedImmediatelyNoLogs:
            "Il processo \u00e8 terminato immediatamente dopo l'avvio!",
        processExitedWithCode:
            'Il processo \u00e8 terminato con codice {{code}}. Log:\n{{logs}}',
        processExitedWithCodeNoLogs:
            'Il processo \u00e8 terminato con codice {{code}}!',
        processExitedUnexpectedly:
            'Il processo \u00e8 terminato inaspettatamente!',
        failedToInstallVersion:
            'Impossibile installare la versione {{version}}: {{reason}}!',
        oauthCancelled: 'Autenticazione annullata!',
        diskFull: 'Nessuno spazio disponibile sul dispositivo!',
        permissionDenied: 'Permesso negato!',
        networkTimeout: 'Richiesta di rete scaduta!',
        failedToFetchLatestVersion: "Impossibile recuperare l'ultima versione!"
    },
    footer: {
        downloadAndroid: 'Scarica su Google Play',
        downloadIos: "Scarica sull'App Store",
        website: 'Sito web',
        copyrightName: 'ClawHost',
        copyrightRights: 'Tutti i diritti riservati.',
        termsOfService: 'Termini di servizio',
        privacyPolicy: 'Informativa sulla privacy',
        getInTouch: 'Contattaci',
        brandDescription:
            'Distribuisci OpenClaw sul tuo VPS con un clic. Privacy totale, risorse dedicate, nessuna infrastruttura condivisa.',
        builtBy: 'Creato da',
        supportedBy: 'Supportato da',
        product: 'Prodotto',
        howItWorks: 'Come funziona',
        features: 'Funzionalit\u00e0',
        pricing: 'Prezzi',
        faq: 'Domande',
        changelog: 'Changelog',
        compare: 'Confronto completo',
        legalAndMore: 'Altro',
        affiliateProgram: 'Programma di affiliazione',
        documentation: 'Documentazione',
        productDescription:
            'Distribuisci agenti OpenClaw e Hermes nel cloud o localmente con un clic \u2014 crea, connetti e scala i tuoi agenti AI pi\u00f9 velocemente con ClawHost.',
        ariaGithub: 'GitHub',
        ariaX: 'X',
        ariaFacebook: 'Facebook',
        ariaInstagram: 'Instagram',
        ariaThreads: 'Threads',
        ariaYoutube: 'YouTube',
        ariaTiktok: 'TikTok'
    },
    errors: {
        somethingWentWrong: 'Qualcosa \u00e8 andato storto!',
        connectionFailed:
            'Qualcosa \u00e8 andato storto durante la connessione al server. Controlla la tua connessione e riprova!',
        couldNotLoadData: 'Impossibile caricare i dati. Riprova!',
        notFound: 'Pagina non trovata!',
        pageNotFoundDescription:
            'La pagina che stai cercando non esiste o \u00e8 stata spostata.',
        goToHomepage: 'Vai alla home page',
        failedToLoadAgents: 'Impossibile caricare gli agents!',
        failedToLoadAgentsDescription:
            'Impossibile caricare i tuoi Agents. Controlla la connessione e riprova!',
        failedToLoadSSHKeys: 'Impossibile caricare le chiavi SSH!',
        failedToLoadSSHKeysDescription:
            'Impossibile caricare le tue chiavi SSH. Controlla la connessione e riprova!',
        failedToUpdateProfile: 'Impossibile aggiornare il profilo!',
        failedToAddSSHKey: 'Impossibile aggiungere la chiave SSH!',
        failedToCreateClaw: 'Impossibile creare il claw!',
        failedToLoadLocations: 'Impossibile caricare le posizioni. Riprova!',
        failedToLoadPlans: 'Impossibile caricare i piani. Riprova!',
        invalidPlan: 'Piano selezionato non valido!',
        invalidLocation: 'Seleziona una posizione!',
        failedToGenerateKeyPair:
            'Impossibile generare la coppia di chiavi. Genera le chiavi localmente!',
        unableToLoadPricing:
            'Impossibile caricare i prezzi. Riprova pi\u00f9 tardi!',
        noPasswordAvailable: 'Nessuna password disponibile per questo claw!'
    },
    api: {
        githubExchangeFailed: 'Accesso con GitHub non riuscito!',
        missingRequiredFields: 'Campi obbligatori mancanti!',
        agentNotFound: 'Agent non trovato!',
        agentRenamed: 'Agent rinominato con successo.',
        agentEmojiUpdated: "Emoji dell'agente aggiornato.",
        failedToUpdateEmoji: "Impossibile aggiornare l'emoji!",
        invalidAgentName:
            'Il nome del agent deve essere tra 1 e {{max}} caratteri!',
        userNotFound: 'Utente non trovato!',
        sshKeyNotFound: 'Chiave SSH non trovata!',
        pendingAgentNotFound: 'Agent in attesa non trovato!',
        agentNotScheduledForDeletion:
            "Il agent non \u00e8 programmato per l'eliminazione!",
        agentDeletionAlreadyPassed: 'La data di eliminazione è già passata!',
        agentLimitReached:
            'Hai raggiunto il limite di {{max}} agent. Contatta il supporto per aumentare questo limite!',
        sshKeyLimitReached:
            'Hai raggiunto il limite di {{max}} chiavi SSH. Contatta il supporto per aumentare questo limite!',
        volumeSizeInvalid:
            'La dimensione del volume deve essere tra {{min}} e {{max}} GB!',
        paymentNotConfigured: 'Pagamento non configurato per questo piano!',
        invalidSshKeyFormat: 'Formato della chiave pubblica SSH non valido!',
        sshKeyInUse:
            'Questa chiave SSH \u00e8 attualmente in uso da uno o pi\u00f9 agent!',
        inputTooLong: "L'input supera la lunghezza massima consentita!",
        invalidEmailFormat: 'Formato email non valido!',
        plusAddressingNotAllowed:
            "L'indirizzamento plus non \u00e8 consentito per l'accesso via email!",
        invalidRedirectUrl: 'URL di reindirizzamento non valido!',
        fileTooLarge:
            'Il contenuto del file supera la dimensione massima consentita!',
        nameAndKeyRequired: 'Nome e chiave pubblica sono obbligatori!',
        nameTooLong: 'Il nome deve essere di {{max}} caratteri o meno!',
        noBillingAccount: 'Nessun account di fatturazione trovato!',
        orderIdRequired: 'ID ordine obbligatorio!',
        orderNotFound: 'Ordine non trovato!',
        emailRequired: 'Email obbligatoria!',
        redirectUrlRequired: 'URL di reindirizzamento obbligatorio!',
        invalidWebhook: 'Webhook non valido!',
        failedToStartAgent: 'Impossibile avviare il agent!',
        failedToStopAgent: 'Impossibile fermare il agent!',
        failedToRestartAgent: 'Impossibile riavviare il agent!',
        failedToDeleteAgent: 'Impossibile eliminare il agent!',
        failedToCreateAgent: 'Impossibile creare il agent!',
        invalidProvider: 'Provider non valido!',
        providerNotAllowed: 'Questo provider non è attualmente disponibile!',
        invalidPlan: 'Piano selezionato non valido!',
        planBelowMinimumMemory:
            'Questo piano non soddisfa il requisito minimo di memoria!',
        invalidLocation: 'Posizione selezionata non valida!',
        planNotAvailableAtLocation:
            'Questo piano non \u00e8 disponibile nella posizione selezionata!',
        failedToSyncAgent: 'Impossibile sincronizzare lo stato del server!',
        failedToProvisionAgent:
            'Impossibile effettuare il provisioning del agent!',
        failedToInitiatePurchase: "Impossibile avviare l'acquisto!",
        failedToCancelDeletion: "Impossibile annullare l'eliminazione!",
        failedToHardDeleteAgent:
            'Impossibile eliminare definitivamente il agent!',
        failedToCancelScheduledDeletion:
            "Impossibile annullare l'eliminazione programmata!",
        failedToCreateSshKey: 'Impossibile creare la chiave SSH!',
        failedToDeleteSshKey: 'Impossibile eliminare la chiave SSH!',
        failedToUpdateProfile: 'Impossibile aggiornare il profilo!',
        failedToGetProfile: 'Impossibile ottenere il profilo!',
        failedToGetInvoice: 'Impossibile ottenere la fattura!',
        failedToGetCustomerPortal: 'Impossibile ottenere il portale clienti!',
        failedToGetBillingHistory:
            'Impossibile ottenere lo storico fatturazione!',
        failedToGetStats: 'Impossibile ottenere le statistiche!',
        affiliateFetched: 'Affiliate info fetched successfully.',
        failedToGetAffiliate: 'Failed to get affiliate info!',
        invalidPeriod: 'Filtro periodo non valido!',
        referralCodeUpdated: 'Referral code updated successfully.',
        failedToUpdateReferralCode: 'Failed to update referral code!',
        invalidReferralCodeLength:
            'Referral code must be between {{min}} and {{max}} characters!',
        invalidReferralCodeFormat:
            'Referral code can only contain letters, numbers, hyphens, and underscores!',
        referralCodeAlreadyChanged: 'Referral code can only be changed once!',
        referralCodeTaken: 'This referral code is already taken!',
        referralCodeGenerated: 'Referral code generated.',
        failedToGenerateReferralCode: 'Failed to generate referral code!',
        failedToFetchLocations: 'Impossibile recuperare le posizioni!',
        failedToFetchPlans: 'Impossibile recuperare i piani!',
        failedToFetchVolumePricing:
            'Impossibile recuperare i prezzi dei volumi!',
        failedToFetchPlanAvailability:
            'Impossibile recuperare la disponibilit\u00e0 dei piani!',
        failedToSendEmail: "Impossibile inviare l'email!",
        failedToGetVersion: 'Impossibile ottenere la versione!',
        failedToGetVersions: 'Impossibile ottenere le versioni!',
        failedToInstallVersion: 'Impossibile installare la versione!',
        installVersionSuccess: 'Versione installata con successo.',
        invalidVersion: 'Formato versione non valido!',
        outdatedVersion:
            'Questa versione \u00e8 obsoleta e non pu\u00f2 essere installata!',
        failedToGetDiagnostics: "Impossibile connettersi all'istanza!",
        failedToGetDiagnosticsDescription:
            "Impossibile recuperare la diagnostica. L'istanza potrebbe essere offline o in fase di avvio.",
        failedToGetLogs: 'Impossibile caricare i log!',
        failedToGetLogsDescription:
            'Impossibile recuperare i log per questa istanza. Riprova pi\u00f9 tardi.',
        failedToReinstallAgent: "Impossibile reinstallare l'istanza!",
        reinstallSuccess: 'Istanza reinstallata con successo.',
        reinstallRateLimited:
            'Puoi reinstallare solo una volta ogni 24 ore. Contatta il team se vuoi rimuovere questo limite.',
        subdomainRateLimited:
            'Puoi cambiare il tuo sottodominio solo una volta ogni 24 ore. Contatta il team se vuoi rimuovere questo limite.',
        subdomainUpdated: 'Sottodominio aggiornato con successo.',
        invalidSubdomain:
            'Sottodominio non valido. Usa 3-20 lettere minuscole e numeri!',
        subdomainAlreadyInUse: 'Questo sottodominio è già in uso!',
        subdomainNotSupported:
            'Questo tipo di agente non utilizza un sottodominio.',
        agentBusy:
            'Il agent è attualmente in fase di provisioning o eliminazione!',
        reinstallGatewayNotResponding:
            'Reinstallazione completata ma il gateway non risponde ancora. Potrebbe aver bisogno di più tempo per avviarsi.',
        failedToRepairAgent: 'Failed to repair the instance!',
        repairSuccess: 'Instance repaired successfully.',
        repairGatewayNotResponding:
            'Repair applied but gateway is not responding yet. It may need more time to start.',
        failedToExportAgent: 'Impossibile esportare i dati del agent!',
        agentNotReady: "Il agent non è pronto per l'esportazione!",
        exportRateLimited:
            'Questo agent è stato esportato di recente. Attendi prima di esportare di nuovo!',
        failedToListFiles: "Impossibile elencare i file dell'istanza!",
        failedToReadFile: 'Impossibile leggere il file!',
        failedToUpdateFile: 'Impossibile salvare il file!',
        invalidFilePath: 'Percorso file non valido!',
        fileNotEditable: 'Questo tipo di file non può essere modificato!',
        invalidJsonConfig: 'JSON non valido!',
        fileSaveSuccess: 'File salvato.',
        rateLimitExceeded: 'Attendi prima di richiedere un altro codice!',
        otpExpiredOrNotFound:
            'Codice scaduto o non trovato. Richiedine uno nuovo!',
        otpMaxAttemptsReached:
            'Troppi tentativi falliti. Richiedi un nuovo codice!',
        otpInvalidCode: 'Codice non valido. Riprova!',
        licenseAlreadyPurchased: 'Licenza già acquistata!',
        licenseNotAvailable: 'Il prodotto licenza non è disponibile!',
        licenseCheckoutCreated: 'Checkout licenza creato.',
        failedToPurchaseLicense:
            'Impossibile creare il checkout della licenza!',
        internalServerError: 'Si è verificato un errore interno!',
        invalidCredentials: 'Credenziali non valide!',
        accountLinked: 'Account collegato con successo.',
        webhookProcessingFailed: 'Elaborazione webhook fallita!',
        adminAccessDenied: 'Accesso admin richiesto!',
        agentsFetched: 'Agent recuperati con successo.',
        agentFetched: 'Agent recuperato con successo.',
        agentStarsFetched: 'Stelle agente recuperate con successo.',
        agentSynced: 'Agent sincronizzato con successo.',
        agentStarted: 'Agent avviato con successo.',
        agentStopped: 'Agent fermato con successo.',
        agentRestarted: 'Agent riavviato con successo.',
        agentCreated: 'Agent creato con successo.',
        agentDeleted: 'Agent eliminato con successo.',
        agentDeletionScheduled: 'Eliminazione del agent programmata.',
        agentDeletionCancelled: 'Eliminazione del agent annullata.',
        agentHardDeleted: 'Agent eliminato definitivamente.',
        pendingAgentCancelled: 'Acquisto annullato.',
        failedToCancelPendingAgent: "Impossibile annullare l'acquisto!",
        agentPurchaseInitiated: 'Acquisto avviato con successo.',
        sshKeysFetched: 'Chiavi SSH recuperate con successo.',
        sshKeyCreated: 'Chiave SSH creata con successo.',
        sshKeyDeleted: 'Chiave SSH eliminata con successo.',
        profileFetched: 'Profilo recuperato con successo.',
        profileUpdated: 'Profilo aggiornato con successo.',
        statsFetched: 'Statistiche recuperate con successo.',
        billingHistoryFetched: 'Storico fatturazione recuperato con successo.',
        invoiceFetched: 'Fattura recuperata con successo.',
        customerPortalFetched: 'URL portale clienti recuperato con successo.',
        plansFetched: 'Piani recuperati con successo.',
        locationsFetched: 'Posizioni recuperate con successo.',
        volumePricingFetched: 'Prezzi dei volumi recuperati con successo.',
        planAvailabilityFetched:
            'Disponibilità dei piani recuperata con successo.',
        diagnosticsFetched: 'Diagnostica recuperata con successo.',
        metricsFetched: 'Metriche recuperate con successo.',
        failedToGetMetrics: 'Impossibile recuperare le metriche del server!',
        overviewFetched: 'Panoramica recuperata con successo.',
        failedToGetOverview:
            'Impossibile recuperare la panoramica del gateway!',
        overviewUnsupported:
            'Questa versione di OpenClaw non supporta la funzionalità panoramica!',
        passwordRotated: 'Password root ruotata con successo.',
        failedToRotatePassword: 'Impossibile ruotare la password root!',
        gatewayTokenRotated: 'Token gateway ruotato con successo.',
        failedToRotateGatewayToken: 'Impossibile ruotare il token gateway!',
        sshKeyUpdated: 'Chiave SSH aggiornata con successo.',
        failedToUpdateSSHKey: 'Impossibile aggiornare la chiave SSH!',
        invalidPassword:
            'La password deve essere compresa tra {{min}} e {{max}} caratteri!',
        invalidGatewayToken:
            'Il token del gateway deve essere compreso tra {{min}} e {{max}} caratteri!',
        enablePreviewSuccess: 'Modalità anteprima attivata con successo.',
        failedToEnablePreview: 'Impossibile attivare la modalità anteprima!',
        logsFetched: 'Log recuperati con successo.',
        filesFetched: 'File recuperati con successo.',
        fileFetched: 'File recuperato con successo.',
        otpSent: 'Codice inviato con successo.',
        otpVerified: 'Codice verificato con successo.',
        webhookReceived: 'Webhook ricevuto.',
        unauthorized: 'Non autorizzato!',
        invalidToken: 'Token non valido!',
        notFound: 'Non trovato!',
        healthOk: 'API in esecuzione.',
        featureVersionUnsupported:
            'Questa funzionalità non è supportata nella versione {{version}}. Aggiorna OpenClaw o usa il Terminale per gestire manualmente.',
        invalidAuthMethod: 'Metodo di autenticazione non valido!',
        authMethodNotConnected:
            'Questo metodo di autenticazione non è connesso!',
        authMethodConnected: 'Metodo di autenticazione connesso con successo.',
        authMethodDisconnected:
            'Metodo di autenticazione disconnesso con successo.',
        failedToConnectAuthMethod:
            'Impossibile connettere il metodo di autenticazione!',
        failedToDisconnectAuthMethod:
            'Impossibile disconnettere il metodo di autenticazione!',
        featureEmailsDisabled:
            'Le email funzionalità sono attualmente disabilitate.',
        featureEmailsSent: 'Email funzionalità inviate con successo.',
        featureEmailsFailed: 'Impossibile inviare le email funzionalità!',
        invalidFeatureKey: 'Chiave funzionalità non valida!',
        adminUsersFetched: 'Utenti recuperati con successo.',
        failedToGetAdminUsers: 'Impossibile recuperare gli utenti!',
        adminUserDetailFetched: 'Dettagli utente recuperati con successo.',
        failedToGetAdminUserDetail:
            "Impossibile recuperare i dettagli dell'utente!",
        adminUserUpdated: 'Utente aggiornato.',
        failedToUpdateAdminUser: "Impossibile aggiornare l'utente!",
        adminStatsFetched: 'Statistiche recuperate.',
        failedToGetAdminStats: 'Impossibile recuperare le statistiche!',
        adminAnalyticsFetched: 'Analisi recuperate con successo.',
        failedToGetAdminAnalytics: 'Impossibile recuperare le analisi!',
        adminBillingFetched: 'Fatturazione recuperata con successo.',
        failedToGetAdminBilling: 'Impossibile recuperare la fatturazione!',
        adminAgentsFetched: 'Agents recuperati.',
        failedToGetAdminAgents: 'Impossibile recuperare i agents!',
        adminSSHKeysFetched: 'Chiavi SSH recuperate.',
        failedToGetAdminSSHKeys: 'Impossibile recuperare le chiavi SSH!',
        adminVolumesFetched: 'Volumi recuperati.',
        failedToGetAdminVolumes: 'Impossibile recuperare i volumi!',
        adminReferralsFetched: 'Referrals fetched.',
        failedToGetAdminReferrals: 'Failed to fetch referrals!',
        adminPendingAgentsFetched: 'Pending agents fetched.',
        failedToGetAdminPendingAgents: 'Failed to fetch pending agents!',
        adminExportsFetched: 'Exports fetched.',
        adminEmailsFetched: 'Emails fetched.',
        failedToGetAdminEmails: 'Failed to fetch emails!'
    },
    emails: {
        otpSubject: 'Il tuo codice di accesso ClawHost',
        otpPreview: 'Il tuo codice di accesso ClawHost: {{code}}',
        otpHeading: 'Il tuo codice di accesso è:',
        otpExpiry:
            'Il codice scade tra 10 minuti. Se non sei stato tu, ignora questa email.',
        featureFooter: 'Ricevi questa email perché hai un account ClawHost.',
        features: {
            terminal: {
                subject: 'Lo sapevi? Hai un terminale web',
                preview: 'Accedi al tuo server direttamente dal browser',
                tag: 'Terminale Web',
                heading: 'Il tuo server a portata di clic',
                description:
                    'Accedi al tuo server direttamente dal browser con il nostro terminale integrato. Nessun client SSH necessario — apri ClawHost e inizia a digitare comandi.',
                cta: 'Apri Terminale'
            },
            logs: {
                subject: 'Lo sapevi? Log in tempo reale nella tua dashboard',
                preview:
                    'Monitora i log del tuo server senza lasciare il browser',
                tag: 'Log in Tempo Reale',
                heading: 'Vedi cosa sta facendo il tuo server',
                description:
                    'Monitora i log del tuo server in tempo reale dalla dashboard ClawHost. Diagnostica problemi, segui i deployment e fai debug delle applicazioni senza lasciare il browser.',
                cta: 'Vedi Log'
            },
            fileExplorer: {
                subject: 'Lo sapevi? Modifica i file del server dal browser',
                preview: 'Sfoglia, leggi e modifica i file senza SSH',
                tag: 'Esplora File',
                heading: 'I tuoi file, a portata di mano',
                description:
                    'Sfoglia, leggi e modifica i file sul tuo server direttamente dalla dashboard ClawHost. Evidenziazione della sintassi, ricerca e salvataggio istantaneo — nessun SSH necessario.',
                cta: 'Apri Esplora File'
            },
            diagnostics: {
                subject: 'Lo sapevi? Controlli di salute integrati',
                preview: 'Monitora la salute del tuo server dalla dashboard',
                tag: 'Diagnostica',
                heading: 'Assicurati che il tuo server sia sano',
                description:
                    "Esegui la diagnostica sul tuo claw per verificare lo stato dei servizi, l'uso della memoria e la disponibilità delle porte. Individua i problemi prima che diventino gravi.",
                cta: 'Esegui Diagnostica'
            },
            sshKeys: {
                subject: 'Lo sapevi? Gestisci le chiavi SSH da ClawHost',
                preview:
                    'Genera e gestisci coppie di chiavi SSH nella dashboard',
                tag: 'Chiavi SSH',
                heading: 'Chiavi SSH, semplificate',
                description:
                    'Genera coppie di chiavi SSH, copia le chiavi pubbliche e scarica le chiavi private — tutto dalla dashboard ClawHost. Assegna le chiavi ai claw per un accesso sicuro.',
                cta: 'Gestisci Chiavi SSH'
            },
            exportConfig: {
                subject: 'Lo sapevi? Esporta la configurazione del tuo claw',
                preview:
                    'Scarica la configurazione del tuo claw come file portatile',
                tag: 'Esporta Config',
                heading: 'Porta con te la tua configurazione',
                description:
                    'Esporta la configurazione e le impostazioni del tuo claw come file scaricabile. Fai un backup della tua configurazione o usala per replicare il tuo ambiente.',
                cta: 'Esporta Configurazione'
            },
            multiLanguage: {
                subject: 'Lo sapevi? ClawHost parla la tua lingua',
                preview: 'Usa ClawHost in 14 lingue',
                tag: 'Multilingua',
                heading: 'ClawHost nella tua lingua',
                description:
                    "Cambia l'intera dashboard ClawHost in una delle 14 lingue. Dai pulsanti ai messaggi di errore — completamente tradotto.",
                cta: 'Cambia Lingua'
            },
            subdomain: {
                subject: 'Lo sapevi? Ogni claw ha il suo sottodominio',
                preview:
                    'Accedi al tuo claw da qualsiasi luogo con un URL personalizzato',
                tag: 'Sottodominio Personalizzato',
                heading: 'Accedi da qualsiasi luogo',
                description:
                    'Ogni claw ottiene un sottodominio unico così puoi accedere alla tua istanza OpenClaw da qualsiasi luogo. Nessun port forwarding, nessuna rete locale — solo un URL.',
                cta: 'Vedi il Tuo Sottodominio'
            },
            darkMode: {
                subject: 'Lo sapevi? ClawHost ha la modalità scura',
                preview: 'Passa tra tema chiaro e scuro',
                tag: 'Modalità Scura',
                heading: 'Facile per gli occhi',
                description:
                    'Alterna tra tema chiaro e scuro nella dashboard ClawHost. La tua preferenza viene salvata e applicata automaticamente ad ogni visita.',
                cta: 'Prova Modalità Scura'
            },
            reinstall: {
                subject: 'Lo sapevi? Reinstalla OpenClaw con un clic',
                preview:
                    'Ripristina la tua istanza OpenClaw senza perdere il server',
                tag: 'Reinstalla',
                heading: 'Nuovo inizio, stesso server',
                description:
                    'Reinstalla il runtime OpenClaw sul tuo server esistente con un singolo clic. Il tuo server resta intatto — solo OpenClaw viene reinstallato da zero.',
                cta: 'Scopri di Più'
            },
            hermesAgentLaunch: {
                subject: 'L\'agente Hermes è arrivato',
                preview: 'Distribuisci agenti Hermes direttamente su ClawHost.',
                tag: 'Agente Hermes',
                heading: 'Agenti Hermes, ora su ClawHost',
                description:
                    'L\'agente Hermes è ora supportato su ClawHost. Avvia un claw alimentato da Hermes in pochi minuti, configura i provider di modelli dalla scheda File e chatta con esso dal terminale integrato. Nessuna configurazione extra, nessun codice di collegamento.',
                cta: 'Distribuisci Hermes'
            },
            clawHostGoLaunch: {
                subject: 'ClawHost Go è arrivato',
                preview: 'Una desktop app nativa per eseguire OpenClaw localmente sul tuo computer.',
                tag: 'ClawHost Go',
                heading: 'I tuoi claws, sulla tua scrivania',
                description:
                    'ClawHost Go è una desktop app nativa per macOS e Windows. Distribuisci e gestisci istanze OpenClaw direttamente sul tuo computer — niente cloud, niente abbonamento, solo una licenza una tantum. Include terminale integrato, editor di file, gestore delle versioni e DNS locale senza configurazione.',
                cta: 'Scarica ClawHost Go'
            },
            productHuntLaunch: {
                subject: 'Aiutaci con il lancio su Product Hunt',
                preview: 'Abbiamo appena lanciato su Product Hunt. Il tuo voto conta.',
                tag: 'Lancio su Product Hunt',
                heading: 'Siamo live su Product Hunt',
                description:
                    'Oggi lanciamo ClawHost su Product Hunt. Se ti abbiamo aiutato a spedire più velocemente, un upvote significherebbe il mondo. Come ringraziamento, usa il codice PH10 per il 10% di sconto sul tuo primo ordine.',
                cta: 'Vota su Product Hunt'
            },
            yearlyPlans: {
                subject: 'Lo sapevi? Risparmia con i piani annuali',
                preview: 'Passa alla fatturazione annuale e paga meno',
                tag: 'Piani Annuali',
                heading: 'Paga meno, ottieni di più',
                description:
                    'Passa alla fatturazione annuale e risparmia sul tuo abbonamento claw. Stesso ottimo servizio, prezzo inferiore — cancella in qualsiasi momento.',
                cta: 'Vedi Piani'
            }
        }
    },
    auth: {
        signIn: 'Autenticazione',
        signInDescription:
            'Accedi al tuo account ClawHost per gestire le tue istanze OpenClaw.',
        signingIn: 'Autenticazione in corso...',
        verifyCode: 'Verifica Codice',
        checkYourEmail: 'Controlla la Tua Email',
        checkYourEmailHeading: 'Controlla la tua email',
        codeSentTo: 'Abbiamo inviato un codice a 6 cifre a',
        signInToDeployOpenClaw:
            'Autenticati per gestire e distribuire agenti con un clic.',
        emailAddress: 'Indirizzo Email',
        emailPlaceholder: 'esempio@clawhost.cloud',
        continueWithEmail: 'Continua con Email',
        otpDescription:
            'Ti invieremo un codice per accedere. Nessuna password necessaria.',
        welcomeBack: 'Bentornato.',
        resendIn: 'Reinvia tra {{seconds}}s',
        resendCode: 'Reinvia codice',
        changeEmail: 'Cambia email',
        invalidCode: 'Codice non valido!',
        invalidEmailFormat: 'Inserisci un indirizzo email valido!',
        plusAddressingNotAllowed:
            "L'indirizzamento plus non è consentito per l'accesso via email!",
        or: 'o',
        continueWithGoogle: 'Continua con Google',
        continueWithGithub: 'Continua con GitHub',
        agreementNotice: 'Continuando, accetti i nostri',
        termsOfService: 'Termini di Servizio',
        andWord: 'e',
        privacyPolicy: 'Informativa sulla Privacy'
    },
    account: {
        title: 'Account',
        description:
            'Gestisci le impostazioni del tuo account ClawHost e le informazioni del profilo.',
        accountSettings: 'Account',
        manageYourAccount:
            "Gestisci il tuo profilo e le impostazioni dell'account.",
        profileInformation: 'Informazioni Profilo',
        profileDescription:
            'Le tue informazioni personali e il nome visualizzato.',
        noNameSet: 'Nessun nome impostato',
        joined: 'Iscritto',
        claws: 'claw',
        sshKeys: 'chiavi',
        displayName: 'Nome Visualizzato',
        enterYourName: 'Inserisci il tuo nome',
        emailAddress: 'Indirizzo Email',
        emailNotEditable: "L'email non è modificabile. Contatta il supporto.",
        profileUpdatedSuccessfully: 'Profilo aggiornato con successo.',
        billingAndSubscription: 'Fatturazione e Abbonamento',
        billingAndSubscriptionDescription:
            'Gestisci i metodi di pagamento, abbonamenti e fatture.',
        viewBillingHistory:
            'Visualizza lo storico pagamenti, fatture e abbonamenti.',
        aboutApp: 'Informazioni',
        aboutAppDescription: 'Informazioni e versione dell\'app.',
        appVersion: 'Versione dell\'app',
        operatingSystem: 'Sistema operativo',
        architecture: 'Architettura',
        checkForUpdates: 'Controlla aggiornamenti',
        checkNow: 'Controlla',
        updatesUpToDate: 'Hai la versione più recente.',
        updateReady: 'Versione {{version}} pronta da installare.',
        restartToInstall: 'Riavvia per installare',
        connectedAccounts: 'Account Collegati',
        connectedAccountsDescription:
            'Gestisci i metodi di accesso collegati al tuo account.',
        authEmail: 'Email',
        authGoogle: 'Google',
        authGithub: 'GitHub',
        authConnected: 'Collegato',
        authConnect: 'Collega',
        authDisconnect: 'Scollega',
        emailCannotBeDisconnected:
            "L'email è sempre collegata come metodo di accesso principale.",
        providerConnected: '{{provider}} collegato con successo.',
        providerDisconnected: '{{provider}} scollegato con successo.',
        providerEmailMismatch:
            'Puoi collegare solo account che usano lo stesso indirizzo email!',
        settings: 'Impostazioni',
        settingsDescription: 'Gestisci le preferenze della tua dashboard.',
        openLinksWindowed: 'Apri i link in una vista a finestra',
        openLinksWindowedDescription:
            "Quando attivato, i link esterni si aprono all'interno dell'app invece che nel browser di sistema."
    },
    billing: {
        billingHistory: 'Cronologia di fatturazione',
        billingDescription: 'Visualizza la cronologia dei pagamenti, le fatture e gli abbonamenti.',
        noBillingHistory: 'Nessuna cronologia di fatturazione',
        noBillingHistoryDescription: 'I tuoi pagamenti e le tue fatture appariranno qui.',
        date: 'Data',
        product: 'Prodotto',
        amount: 'Importo',
        status: 'Stato',
        statusPaid: 'Pagato',
        statusPending: 'In attesa',
        statusRefunded: 'Rimborsato',
        statusPartiallyRefunded: 'Parzialmente Rimborsato',
        billingReasonPurchase: 'Acquisto',
        billingReasonSubscriptionCreate: 'Nuovo Abbonamento',
        billingReasonSubscriptionCycle: 'Rinnovo',
        billingReasonSubscriptionUpdate: 'Aggiornamento Abbonamento',
        failedToLoadBilling: 'Impossibile caricare lo storico fatturazione!',
        downloadInvoice: 'Scarica fattura',
        invoiceCanceledNavigation:
            'Download fattura interrotto perché hai cambiato pagina.',
        failedToLoadInvoice: 'Impossibile caricare la fattura!',
        couponApplied: 'Coupon: {{name}}',
        manageBilling: 'Gestisci Fatturazione',
        failedToLoadPortal: 'Impossibile aprire il portale fatturazione!',
        portalCanceledNavigation:
            'Portale di fatturazione interrotto perché hai cambiato pagina.'
    },
    license: {
        title: 'Licenza',
        description: 'Gestisci la tua licenza OpenClaw.',
        pageTitle: 'Licenza',
        pageDescription:
            'Acquista la licenza per ospitare istanze OpenClaw in locale con la nostra app Go.',
        planName: 'Licenza ClawHost Go',
        oneTimePurchase: 'Acquisto una tantum',
        price: '${{price}}',
        priceNote: 'Paga una volta, possiedi per sempre.',
        purchaseLicense: 'Acquista Licenza',
        purchasing: 'Reindirizzamento...',
        activated: 'Licenza Attiva',
        activatedDescription:
            'La tua licenza è attiva. Grazie per il tuo supporto.',
        paymentSuccess: 'Pagamento effettuato. La tua licenza è ora attiva.',
        failedToPurchase: 'Impossibile avviare il checkout!',
        featureUnlimitedClaws: 'OpenClaw Illimitati',
        featureDevices: 'Dispositivi Illimitati',
        featureUpdates: 'Aggiornamenti per Sempre',
        featureSupport: 'Supporto Prioritario',
        featureCloud: 'Tutte le Funzionalità Cloud, in Locale',
        whatsIncluded: 'Cosa include',
        gateTitle: 'Licenza Necessaria',
        gateDescription:
            'Hai bisogno di una Licenza ClawHost Go per distribuire e gestire istanze OpenClaw in locale.'
    },
    network: {
        offline: 'Nessuna Connessione Internet',
        offlineDescription:
            'Sei attualmente offline. Le funzionalità che richiedono accesso a internet non saranno disponibili.'
    },
    dashboard: {
        title: 'Claw',
        description:
            'Visualizza e gestisci le tue istanze OpenClaw distribuite. Avvia, ferma, riavvia e monitora i tuoi server VPS.',
        claw: 'claw',
        clawsPlural: 'claw',
        clawCountLabel: '{{count}} claw',
        clawCountLabelSingular: '{{count}} claw',
        newClaw: 'Nuovo Claw',
        searchAgents: 'Cerca agenti...',
        searchAgentsCount: 'Cerca {{count}} agenti...',
        noAgentsMatchSearch: 'Nessun agente trovato.',
        clawActions: 'Azioni claw',
        noAgentsYet: 'Nessun Agente',
        noAgentsDescription:
            "Nessun agente distribuito trovato. Ma puoi distribuire il tuo primo agente in qualsiasi momento a partire da $25/m. Basta l'AI.",
        deleteClaw: 'Elimina Claw',
        deleteClawConfirmation: 'Sei sicuro di voler eliminare',
        deleteClawWarning:
            'Il tuo abbonamento verrà cancellato e il server verrà eliminato alla fine del periodo di fatturazione corrente. Puoi continuare a usarlo fino ad allora.',
        actionCannotBeUndone: 'Questa azione non può essere annullata.',
        start: 'Avvia',
        startServer: 'Avvia server',
        stop: 'Ferma',
        stopServer: 'Ferma server',
        restart: 'Riavvia',
        restartServer: 'Riavvia server',
        startClaw: 'Avvia server',
        startClawConfirmation:
            'Questo avvierà il server e tutti i suoi processi. Fallo solo se necessario.',
        stopClaw: 'Ferma server',
        stopClawConfirmation:
            'Questo terminerà tutti i processi in esecuzione sul server, incluso OpenClaw. Nessun dato andrà perso. Fallo solo se necessario. Puoi riavviarlo in qualsiasi momento. Fermare non interrompe la fatturazione — elimina il server per smettere di essere addebitato.',
        restartClaw: 'Riavvia server',
        restartClawConfirmation:
            'Questo terminerà tutti i processi in esecuzione sul server, incluso OpenClaw, e li riavvierà. Nessun dato andrà perso. Fallo solo se necessario.',
        copyPassword: 'Copia Password',
        copySshWithKey: 'Copia SSH (con chiave)',
        copySshWithPassword: 'Copia SSH (con password)',
        connect: 'Copia Comando SSH',
        viewServerCredentials: 'Credenziali Server',
        serverCredentials: 'Credenziali Server',
        serverCredentialsDescription:
            'Usa queste credenziali per connetterti al tuo server via SSH.',
        sshCommand: 'Comando SSH',
        rootPassword: 'Password Root',
        sshCommandCopied: 'Comando SSH copiato.',
        sshCommandWithPasswordCopied: 'Comando SSH con password copiato.',
        passwordCopiedToClipboard: 'Password copiata negli appunti.',
        plan: 'Server',
        location: 'Posizione',
        ip: 'IP',
        domain: 'Dominio',
        ipAddress: 'Indirizzo IP',
        port: 'Porta',
        subscription: 'Abbonamento',
        history: 'Cronologia',
        planCost: 'Piano',
        serverId: 'ID Server',
        created: 'Creato',
        sshKey: 'Chiave SSH',
        storage: 'Archiviazione',
        nextBilling: 'Prossima Fatturazione',
        lastBilling: 'Ultima Fatturazione',
        totalSpent: 'Totale Speso',
        version: 'Versione',
        gatewayToken: 'Token Gateway',
        gatewayTokenDescription:
            'Usa questo token per autenticarti con il tuo gateway',
        contactSupport: 'Contatta Supporto',
        scheduledForDeletion: 'Eliminazione Programmata',
        scheduledDeletionShort: 'Eliminazione {{date}}',
        deletionDate: 'Questo claw verrà eliminato il {{date}}',
        deletionTooltip:
            'Eliminazione programmata per il {{date}}. Per annullare, usa il menu.',
        pastDue: 'Pagamento fallito',
        deletionFailed: 'Eliminazione fallita',
        pastDueDescription:
            'Il tuo pagamento non è andato a buon fine. Se non risolto entro 14 giorni, questo claw verrà eliminato permanentemente.',
        updatePayment: 'Aggiorna pagamento',
        cancelDeletion: 'Annulla Eliminazione',
        cancelDeletionConfirmation:
            "Sei sicuro? Il tuo abbonamento rimarrà attivo e continuerai a essere addebitato. L'istanza continuerà a funzionare.",
        deletionCancelled: 'Eliminazione annullata.',
        scheduleDeletion: 'Programma Eliminazione',
        resumeCheckout: 'Riprendi Checkout',
        cancelPurchase: 'Annulla Acquisto',
        hardDelete: 'Eliminazione Forzata',
        hardDeleteClaw: 'Eliminazione Forzata',
        hardDeleteConfirmation:
            'Sei sicuro di voler eliminare questo claw immediatamente? Perderai il tempo rimanente del tuo periodo di fatturazione corrente. Questa azione non può essere annullata.',
        diagnostics: 'Diagnostica',
        diagnosticsDescription:
            'Controlla la salute della tua istanza OpenClaw.',
        diagnosticsStatus: 'Stato',
        diagnosticsLogs: 'Log',
        diagnosticsRepair: 'Repair',
        diagnosticsRepairDescription:
            'Remove memory limits, apply latest service configuration, and restart the gateway. This fixes most common issues.',
        diagnosticsRepairSuccess: 'Instance repaired successfully.',
        diagnosticsRepairFailed:
            'Repair applied but gateway is not responding yet!',
        diagnosticsLoading: "Connessione all'istanza...",
        diagnosticsNoLogs:
            'Nessun log disponibile. Avvia la tua istanza per generare log.',
        diagnosticsNoLogsHermesTitle: 'Il gateway Hermes non è in esecuzione',
        diagnosticsNoLogsHermesDescription:
            'Nella scheda Terminal, esegui `hermes gateway setup` per configurare le piattaforme, poi `sudo systemctl enable --now hermes-gateway` per avviare il bridge.',
        diagnosticsIssueDetected:
            'È stato rilevato un problema con la tua istanza.',
        diagnosticsHealthy: 'La tua istanza funziona normalmente.',
        diagnosticsPort: 'Porta 18789',
        diagnosticsMemory: 'Memoria',
        logsDescription:
            'Ultime 100 righe del log del tuo gateway, aggiornamento automatico.',
        fileExplorer: 'Esplora File',
        fileExplorerRoot: 'openclaw',
        fileExplorerDescription:
            'Sfoglia e modifica i file di configurazione di OpenClaw. Modifiche errate possono danneggiare la tua istanza.',
        fileExplorerSelectFile:
            'Seleziona un file per visualizzarne il contenuto.',
        fileExplorerReadOnly: 'Sola lettura',
        fileExplorerSave: 'Salva',
        fileExplorerSaved: 'File salvato.',
        fileExplorerSaveCanceledNavigation:
            'Salvataggio del file interrotto perché hai cambiato pagina.',
        fileExplorerInvalidJson:
            'JSON non valido. Correggi gli errori di sintassi prima di salvare!',
        fileExplorerNoFiles: 'Nessun file trovato',
        fileExplorerSearchFiles: 'Cerca file...',
        fileExplorerNoSearchResults: 'Nessun file corrispondente.',
        startFailed: 'Impossibile avviare il claw!',
        renameSuccess: 'Claw rinominato con successo.',
        renameFailed: 'Impossibile rinominare il claw!',
        renameInvalidChars: 'Sono consentiti solo lettere, numeri e trattini!',
        reinstallInstance: 'Reinstalla Istanza',
        reinstallClaw: 'Reinstalla Istanza',
        reinstallClawConfirmation:
            'Questo reinstallerà completamente {{agentName}} su questa istanza. Tutte le configurazioni, gli agenti e i dati verranno reimpostati. Questa azione non può essere annullata. Continuare?',
        reinstallInstanceSuccess: 'Istanza reinstallata con successo.',
        reinstallInstanceFailed: "Impossibile reinstallare l'istanza!",
        reinstallCanceledNavigation:
            'Reinstallazione interrotta perché hai cambiato pagina.',
        openControlPanel: 'Apri Pannello di Controllo',
        exportData: 'Esporta Claw (.zip)',
        exportAgent: 'Esporta',
        exportAgentButton: 'Esporta dati',
        exportAgentTooltip:
            'Scarica questo agente e tutti i suoi dati come file .zip.',
        exportAgentInProgress:
            "L'esportazione può richiedere alcuni minuti per agent più grandi.",
        exportStarted:
            'Preparazione esportazione, potrebbe richiedere un momento...',
        exportSuccess: 'Claw esportato con successo.',
        exportFailed: 'Impossibile esportare i dati del claw!',
        exportCanceledNavigation:
            'Esportazione annullata perché hai cambiato pagina.',
        scheduleDeletionCanceledNavigation:
            'Pianificazione di eliminazione interrotta perché hai cambiato pagina.',
        cancelDeletionCanceledNavigation:
            'Annullamento di eliminazione interrotto perché hai cambiato pagina.',
        hardDeleteCanceledNavigation:
            'Eliminazione forzata interrotta perché hai cambiato pagina.',
        exportRateLimited: 'Puoi esportare di nuovo tra {{minutes}} minuti.',
        exportRateLimitedOne: 'Puoi esportare di nuovo tra 1 minuto.',
        configuringTooltip:
            'Potrebbe richiedere del tempo. Dipende da OpenClaw, dalla posizione del server e dal DNS Cloudflare.',
        paymentSuccess: 'Il tuo claw è in fase di creazione e configurazione.',
        dnsSetupBanner:
            'Configura il DNS locale per accedere ai tuoi claw tramite sottodominio.clawhost.',
        dnsSetupButton: 'Configura DNS',
        dnsSetupSuccess: 'Resolver DNS configurato con successo.',
        dnsSetupError: 'Impossibile configurare il resolver DNS!',
        userTab: 'Utente',
        adminTab: 'Admin',
        adminTitle: 'Admin',
        adminDescription: 'Gestisci tutti i claw della piattaforma.',
        adminNoClaws: 'Nessun claw sulla piattaforma ancora.',
        adminAccessDenied: 'Non hai i permessi per accedere a questa pagina.',
        owner: 'Proprietario',
        agentType: 'Agent',
        status: {
            running: 'In esecuzione',
            stopped: 'Fermato',
            starting: 'Avvio',
            stopping: 'Arresto',
            creating: 'Creazione',
            configuring: 'Configurazione',
            initializing: 'Impostazione',
            migrating: 'Migrazione',
            rebuilding: 'Ricostruzione',
            restarting: 'Riavvio',
            unreachable: 'Non raggiungibile',
            deleting: 'Eliminazione',
            scheduledDeletion: 'Eliminazione Programmata',
            awaitingPayment: 'In Attesa di Pagamento',
            unknown: 'Sconosciuto',
            checking: 'Verifica'
        },
        tabNotAvailableForAgent: 'Non disponibile per questo tipo di agente'
    },
    mobile: {
        versions: 'Versioni',
        currentVersion: 'Versione attuale',
        latestVersion: 'Ultima versione',
        install: 'Installa',
        terminal: 'Terminale',
        reinstall: 'Reinstalla',
        fileSaved: 'File salvato.',
        terminalDisconnected: 'Disconnesso',
        terminalPlaceholder: 'Digita un comando...',
        manage: 'Gestisci',
        sync: 'Sincronizza',
        rename: 'Rinomina',
        newName: 'Nuovo nome',
        credentials: 'Credenziali',
        showCredentials: 'Mostra credenziali',
        rotatePassword: 'Ruota password',
        rotateGatewayToken: 'Ruota token gateway',
        syncSuccess: 'Sincronizzato con successo.',
        signIn: 'Autenticati',
        signInDescription: 'Autenticati per gestire e distribuire i tuoi Agenti.',
        enterEmail: 'Indirizzo email',
        emailPlaceholder: 'example@clawhost.cloud',
        continueWithEmail: "Continua con l'email",
        otpDescription: 'Ti invieremo un codice per accedere. Nessuna password necessaria.',
        sending: 'Invio in corso...',
        checkYourEmail: 'Controlla la tua email',
        codeSentTo: 'Abbiamo inviato un codice di 6 cifre a',
        resendCode: 'Invia di nuovo il codice',
        resendIn: 'Invia di nuovo tra {{seconds}}s',
        changeEmail: 'Cambia email',
        invalidCode: 'Codice non valido!',
        signingIn: 'Accesso in corso...',
        signOut: 'Esci',
        loadMore: 'Carica altro',
        deployClaw: 'Distribuisci Agente',
        deployYourFirstClaw: 'Distribuisci il tuo primo Agente',
    },
    createClaw: {
        provider: 'Provider',
        providerAtCapacity: 'Al completo',
        title: 'Distribuisci OpenClaw',
        description: "Configura il tuo server e inizia a costruire con l'AI.",
        clawName: 'Nome',
        clawNamePlaceholder: 'es. cozy-panda',
        clawNameInvalidChars:
            'Sono consentiti solo lettere, numeri e trattini!',
        autoGenerateNameHint:
            'Lascia vuoto per generare un nome automaticamente.',
        agentType: 'Tipo di agente',
        agentTypeOpenClaw: 'OpenClaw',
        agentTypeHermes: 'Hermes',
        agentTypeOpenClawDescription: '{{count}} stelle',
        agentTypeHermesDescription: '{{count}} stelle',
        location: 'Posizione',
        locationUnavailable: 'Non disponibile',
        locationUnavailableForPlan: 'Non disponibile',
        plan: 'Server',
        planUnavailable: 'Non disponibile',
        planUnavailableForLocation: 'Non disponibile in questa posizione',
        advancedOptions: 'Opzioni Avanzate Opzionali',
        rootPassword: 'Password Root',
        rootPasswordPlaceholder: 'Inserisci password o generane una',
        gatewayTokenPlaceholder: 'es. a1b2c3d4e5f6...',
        autoGenerateGatewayTokenHint:
            'Generato automaticamente se lasciato vuoto.',
        autoGeneratePasswordHint:
            'Opzionale. Nessuna password se lasciato vuoto.',
        regeneratePassword: 'Rigenera password',
        gatewayToken: 'Gateway Token',
        regenerateToken: 'Rigenera token',
        tokenCopied: 'Token copiato.',
        sshKeyOptional: 'Chiave SSH',
        noSshKeyPasswordOnly: 'Nessuna chiave SSH (solo password)',
        noSshKeysConfigured: 'Nessuna chiave SSH configurata',
        addSshKeyForPasswordlessLogin:
            "Aggiungi una chiave SSH per l'accesso senza password",
        additionalStorageOptional: 'Archiviazione Aggiuntiva',
        volumeStorage: 'Archiviazione Volume',
        vpsServer: 'Server VPS',
        openClawPreinstalled: 'OpenClaw Preinstallato',
        storageWithSize: 'Archiviazione',
        billingInterval: 'Fatturazione',
        monthly: 'Mensile',
        yearly: 'Annuale',
        yearlySaveBadge: '2 Mesi Gratis',
        yearlySavings: 'Risparmi',
        totalMonthly: 'Totale mensile',
        totalYearly: 'Totale annuale',
        creating: 'Creazione...',
        proceedToPayment: 'Paga ${{amount}} per Distribuire',
        agreementNotice: 'Distribuendo, accetti i nostri',
        selectServerToContinue: 'Seleziona un server per continuare',
        selectLocationToContinue: 'Seleziona una posizione per continuare',
        clawCreated: 'Claw creato.',
        clawCreating:
            'Creazione del tuo claw in corso, potrebbe richiedere un momento...',
        assigning: 'Assegnazione...',
        rootPasswordSaveThis: 'Password Root (salvala!)',
        sshCommandUsingKey: 'Comando SSH (usando la tua chiave)',
        sshCommandWithPassword: 'Comando SSH (con password)',
        passwordCopied: 'Password copiata.',
        planSpec: '{{cpu}} vCPU / {{memory}} GB RAM / {{disk}} GB SSD',
        volumeUnit: 'GB',
        volumeMin: '0 GB',
        volumeMax: '500 GB'
    },
    sshKeys: {
        title: 'Chiavi SSH',
        description:
            'Gestisci le tue chiavi SSH per un accesso sicuro e senza password alle tue istanze OpenClaw.',
        key: 'chiave ssh',
        keys: 'chiavi ssh',
        keyCountDescription: '{{count}} {{label}}',
        addSshKey: 'Aggiungi Chiave SSH',
        howSshKeysWork: 'Come connettere una chiave SSH?',
        step1: 'Genera una coppia di chiavi SSH sul tuo computer (o usane una esistente).',
        step2: 'Aggiungi la chiave pubblica qui.',
        step3: 'Seleziona la chiave quando crei una nuova istanza.',
        step4: 'Connettiti con',
        step4Command: 'ssh root@your-server-ip',
        step4Suffix: '- nessuna password necessaria.',
        noSshKeysYet: 'Nessuna Chiave SSH',
        noSshKeysDescription:
            'Nessuna chiave SSH aggiunta al tuo account, puoi aggiungerle in qualsiasi momento e connetterti ai tuoi claw distribuiti.',
        deleteConfirmation: 'Sei sicuro di voler eliminare questa chiave SSH?',
        deleteKey: 'Elimina Chiave SSH',
        deleteKeyConfirmation: 'Sei sicuro di voler eliminare',
        sshKeyAddedSuccessfully: 'Chiave SSH aggiunta con successo.',
        addSshKeyModalTitle: 'Aggiungi Chiave SSH',
        addSshKeyModalDescription:
            "Aggiungi una chiave SSH per l'autenticazione senza password",
        iHaveAnSshKey: 'Chiave Esistente',
        generateNewKey: 'Crea Nuova',
        name: 'Nome',
        namePlaceholder: 'es: il-mio-macbook',
        publicKey: 'Chiave Pubblica',
        publicKeyPlaceholder: 'ssh-rsa AAAA... o ssh-ed25519 AAAA...',
        publicKeyHint: 'Trova la tua chiave pubblica in',
        publicKeyPath1: '~/.ssh/id_ed25519.pub',
        publicKeyPathOr: 'o',
        publicKeyPath2: '~/.ssh/id_rsa.pub',
        important: 'Importante:',
        dontHaveSshKey: 'Non hai una chiave SSH? Generane una:',
        sshKeygenCommand: 'ssh-keygen -t ed25519 -C "your-email@example.com"',
        keyName: 'Nome Chiave',
        keyNamePlaceholder: 'La Mia Chiave Generata',
        importantAfterGenerating:
            'Dopo la generazione, devi scaricare e salvare la tua chiave privata. Non possiamo recuperarla se la perdi!',
        generateKeyPair: 'Genera Coppia di Chiavi',
        orGenerateLocallyRecommended: 'Oppure genera in locale (consigliato)',
        runThisInYourTerminal: 'Esegui questo nel tuo terminale:',
        thenSwitchToIHave:
            'Poi passa a "Chiave Esistente" e incolla la chiave pubblica.',
        savePrivateKeyNow:
            'Salva la tua chiave privata ORA! Scaricala prima di chiudere questa finestra. Non potrai vederla di nuovo.',
        privateKeyKeepSecret: 'Chiave Privata (tieni segreta!)',
        downloadPrivateKey: 'Scarica Chiave Privata',
        publicKeyWillBeSaved: 'Chiave Pubblica (verrà salvata)',
        savePublicKey: 'Salva Chiave Pubblica'
    },
    landing: {
        title: 'Distribuisci OpenClaw. Un clic. Fatto.',
        description:
            'Distribuisci OpenClaw sul tuo VPS con un clic. Hosting cloud self-hostable con accesso root completo, posizioni globali e prezzi trasparenti.',
        badge: 'OpenClaw e Hermes nel Cloud',
        tutorialBadge: 'Come iniziare su Cloud',
        tutorialVideoThumbnail: 'Miniatura video tutorial ClawHost',
        clawhostGoLogoAlt: 'ClawHost Go',
        trustMrrBadgeAlt: 'TrustMRR verified revenue badge',
        macosPreviewTime: '22:12',
        heroTitle1: 'Distribuisci OpenClaw.',
        heroTitle2: 'Un clic. Fatto.',
        heroDescription:
            'Distribuisci agenti OpenClaw e Hermes nel cloud o in locale con un clic — costruisci, connetti e scala i tuoi agenti AI più velocemente con ClawHost.',
        selfHost: 'Open Source',
        startingPrice: 'A partire da',
        locations: 'Posizioni',
        servers: 'Server',
        zeroCount: 'Zero',
        zeroConfig: 'Zero Configurazione',
        features: 'Funzionalità',
        whyClawHost: 'Funzionalità Tutto-in-Uno',
        featuresDescription:
            'Perché vale la pena provare, le funzionalità parlano da sole.',
        zeroConfigDescription:
            'Salta ore di configurazione server e OpenClaw. È preinstallato e pronto in pochi minuti.',
        ownedData: 'Dati 100% di Proprietà',
        ownedDataDescription:
            'Il tuo server, i tuoi dati. Nessuna infrastruttura condivisa, nessun log, nessuna terza parte. Online 24/7.',
        fullSpeed: 'Velocità Massima',
        fullSpeedDescription:
            'Risorse VPS dedicate significano nessun rallentamento, banda completa e internet ultraveloce.',
        globalLocations: 'Posizioni Globali',
        globalLocationsDescription:
            'Distribuisci OpenClaw e Hermes in più regioni globali e scegli la posizione più vicina a te.',
        fullSshAccess: 'Accesso SSH Diretto',
        fullSshAccessDescription:
            'Accedi al terminale del tuo server direttamente dalla piattaforma. Nessun client SSH esterno necessario.',
        secure: 'Sicuro',
        secureDescription:
            'Protetto di default da vulnerabilità SSL, malware e minacce di sicurezza comuni.',
        payAsYouGo: 'Prezzi Semplici',
        payAsYouGoDescription:
            'Prezzi basati sulle tue esigenze. Nessuna bolletta alta forzata per server di bassa qualità. Cancella in qualsiasi momento.',
        bringYourCredits: 'Porta i tuoi crediti',
        bringYourCreditsDescription:
            'Usa la tua chiave API Anthropic o abbonamento Claude. Paghi Anthropic direttamente — nessun ricarico.',
        customSubdomains: 'Accesso Online',
        customSubdomainsDescription:
            'Dimentica le reti locali. Accedi al tuo OpenClaw in sicurezza da qualsiasi luogo con un sottodominio.',
        autoUpdates: 'Controllo Versioni',
        autoUpdatesDescription:
            'Passa a qualsiasi versione di OpenClaw o Hermes con un singolo clic. Resta sempre aggiornato o torna indietro quando serve.',
        openclawControl: 'Monitoraggio server',
        openclawControlDescription:
            'Monitora i tuoi server OpenClaw e Hermes con metriche, log e diagnostica in tempo reale.',
        clawHostControl: 'Accesso completo al server',
        clawHostControlDescription:
            'Terminale nel browser, esplora file, log, diagnostica e gestione delle versioni — tutto dalla tua dashboard.',
        multipleClaws: 'Più Agenti',
        multipleClawsDescription:
            "Distribuisci e gestisci più agenti OpenClaw e Hermes da un'unica dashboard. Scala man mano che cresci.",
        pricing: 'Prezzi',
        simpleTransparentPricing: 'Prezzi Semplici e Trasparenti',
        pricingDescription:
            'Scegli un piano adatto alle tue esigenze. Nessun costo nascosto.',
        planColumn: 'Server',
        vCpuColumn: 'vCPU',
        ramColumn: 'RAM',
        storageColumn: 'Archiviazione',
        monthlyColumn: 'Prezzo',
        tierShared: 'vCPU Condivisa',
        tierDedicated: 'vCPU Dedicata',
        tierArm: 'Ampere (ARM)',
        tierRegular: 'Prestazioni Standard',
        tierHighPerformance: 'Alte Prestazioni',
        tierHighFrequency: 'Alta Frequenza',
        recommended: 'Consigliato',
        perMonth: '/mese',
        perYear: '/anno',
        pricePerMonth: '${{price}}/mo',
        pricePerYear: '${{price}}/yr',
        volumePricePerMonth: '+${{price}}/mo',
        startingPriceValue: '${{price}}/mo',
        deploy: 'Distribuisci',
        select: 'Seleziona',
        selectPlanLabel: 'Seleziona piano {{plan}}',
        deployPlanLabel: 'Distribuisci piano {{plan}}',
        openClawPreinstalled: 'OpenClaw Preinstallato',
        unlimitedBandwidth: 'Banda Illimitata',
        rootSshAccess: 'Accesso Root SSH Completo',
        onlineAllDay: 'Online 24/7',
        showAllPlans: 'Mostra tutti i piani',
        simplePricing: 'Semplificato',
        planStarter: 'Starter',
        planStarterDesc: 'Per progetti personali ed esperimenti',
        planGrowth: 'Growth',
        planGrowthDesc: 'Per carichi di lavoro di produzione',
        planPro: 'Pro',
        planProDesc: 'Per aziende in crescita',
        planBusiness: 'Business',
        planBusinessDesc: 'Per operazioni su larga scala',
        featureCpu: '{{count}} vCPU',
        featureRam: '{{count}} GB RAM',
        featureDisk: '{{count}} GB SSD',
        choosePlan: 'Scegli piano',
        mostPopular: 'Più popolare',
        featurePreinstalled: 'Agente preinstallato',
        featureBandwidth: 'Banda illimitata',
        featureSsh: 'Accesso SSH root',
        featureUptime: 'Online 24/7',
        featureDedicatedCpu: 'CPU dedicata',
        featureEmailSupport: 'Supporto via email',
        fastInternet: 'Internet veloce',
        emailSupport: 'Supporto via email',
        faqTitle: 'Domande',
        frequentlyAskedQuestions: 'Domande Frequenti',
        faqDescription: 'Ogni singola domanda frequente, con risposta.',
        faq1Question: "Cos'è ClawHost?",
        faq1Answer:
            'ClawHost è una piattaforma costruita per rendere OpenClaw e Hermes accessibili a tutti. Permette sia agli utenti non tecnici sia agli sviluppatori di eseguirli senza gestire infrastruttura. Noi ci occupiamo di server, uptime, sicurezza e manutenzione — tu usi semplicemente i tuoi agenti.',
        faq2Question: "Cos'è OpenClaw?",
        faq2Answer:
            'OpenClaw è un livello di accesso sicuro self-hosted per i tuoi strumenti e servizi AI. È preconfigurato per sicurezza e prestazioni, quindi puoi distribuirlo e connetterti istantaneamente.',
        faqHermesQuestion: "Cos'è Hermes?",
        faqHermesAnswer:
            'Hermes è un agente IA autonomo con navigazione web, gestione del calendario, ragionamento multi-modello e automazione del browser. Viene preinstallato insieme a OpenClaw su ogni server ClawHost.',
        faq3Question:
            'In cosa è diverso da altri strumenti AI o piattaforme hosted?',
        faq3Answer:
            "A differenza degli strumenti AI hosted, ClawHost ti dà un vero server con OpenClaw installato. Possiedi l'infrastruttura, controlli tutto e non sei limitato da una piattaforma o modello condiviso.",
        faq4Question: 'Ho bisogno di conoscenze tecniche?',
        faq4Answer:
            "No. Gestiamo tutta l'infrastruttura, la configurazione e la manutenzione. Puoi configurare e gestire OpenClaw tramite la sua interfaccia e personalizzare l'utilizzo — senza toccare server o infrastruttura.",
        faq5Question: 'Quali posizioni sono disponibili?',
        faq5Answer:
            'Offriamo più posizioni server in tutto il mondo, inclusi Stati Uniti, Europa e Asia. Se necessario puoi distribuire OpenClaw o Hermes su più server in regioni diverse.',
        faq6Question: 'Quanto costa?',
        faq6Answer:
            'I prezzi dipendono dal server selezionato. Con più opzioni server dal livello base alle alte prestazioni, scegli ciò che si adatta alle tue esigenze e al tuo budget.',
        faq7Question:
            'Posso accedere al mio agente direttamente tramite un link?',
        faq7Answer:
            "Sì. Oltre all'accesso a OpenClaw tramite URL sottodominio, hai accesso completo al server e alla sua infrastruttura sottostante, dandoti completa libertà di personalizzare e eseguire tutto ciò di cui hai bisogno.",
        comparison: 'Confronto',
        comparisonTitle: 'In Cosa Siamo Diversi',
        comparisonDescription:
            "C'è solo una piattaforma comparabile, e il nostro approccio si concentra su server reali e proprietà completa invece di limitazioni.",
        others: 'Altri',
        comparisonOpenClawUs: 'Accesso completo a OpenClaw',
        comparisonOpenClawOthers: 'Solo chat, nessuna gestione',
        comparisonPricingUs: 'Prezzi trasparenti, specifiche chiare',
        comparisonPricingOthers: 'Specifiche nascoste, prezzi poco chiari',
        comparisonOwnershipUs: 'Possiedi completamente il tuo server',
        comparisonOwnershipOthers: 'Non possiedi nulla',
        comparisonSubdomainUs: 'Accesso tramite sottodominio',
        comparisonSubdomainOthers:
            'Accesso solo tramite piattaforme di terze parti',
        comparisonInfraUs: 'Infrastruttura on-demand',
        comparisonInfraOthers: 'Server limitati',
        comparisonDataUs: 'Possiedi i tuoi dati',
        comparisonDataOthers: 'Non possiedi i tuoi dati',
        comparisonMultipleUs: 'Più agenti OpenClaw e Hermes',
        comparisonMultipleOthers: 'Solo un singolo OpenClaw',
        comparisonOpenSourceUs: 'Completamente open source',
        comparisonOpenSourceOthers: 'Codice chiuso',
        comparisonExportUs: 'Esporta OpenClaw e Hermes ovunque',
        comparisonExportOthers: 'Vendor lock-in',
        comparisonProvidersUs: 'Più provider server',
        comparisonProvidersOthers: 'Solo un provider',
        comparisonVersionUs: 'Cambio versione con un clic',
        comparisonVersionOthers: 'Solo aggiornamenti manuali',
        comparisonTerminalUs: 'Terminale web integrato',
        comparisonTerminalOthers: 'Client SSH necessario',
        seeFullComparison: 'Vedi Confronto Completo',
        comparisonCtaText:
            'Ci confrontiamo con SimpleAgent, MyAgent.ai e altri — funzionalità per funzionalità.',
        selfHostInstead: 'Self Host Invece'
    },
    blog: {
        readingTime: '{{minutes}} min di lettura',
        ctaTitle: 'Distribuisci OpenClaw e Hermes con un clic',
        ctaDescription:
            'Ottieni un server dedicato con OpenClaw e Hermes preinstallati. Accesso root completo, posizioni globali e pronto in pochi minuti. È tuo in ogni momento. A partire da 25 $.',
        ctaDeploy: 'Distribuisci un agente',
        ctaGitHub: 'Vedi su GitHub'
    },
    changelog: {
        title: 'Changelog',
        description:
            'Segui aggiornamenti, nuove funzionalità e miglioramenti di ClawHost.',
        subtitle:
            'Tutti gli aggiornamenti, le nuove funzionalità e i miglioramenti di ClawHost.',
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
        release15Date: '11 aprile 2026',
        release15Title: 'Semplificazione e sottodomini personalizzati',
        release15Description:
            'Semplificazione della piattaforma migrando le funzionalità gestite su OpenClaw, rimozione della vista playground e introduzione di sottodomini personalizzati modificabili.',
        release15Feature1:
            'Semplificazione e migrazione delle funzionalità gestite su OpenClaw, niente più chat, agenti, canali, variabili e competenze di ClawHost',
        release15Feature2:
            'Enhanced file explorer with full editing support, 100+ language syntax highlighting, and export as .zip',
        release15Feature3:
            'Removed playground view for a cleaner, more focused dashboard experience',
        release15Feature4:
            'Changeable custom subdomains, update your claw subdomain to your loved one',
        release14Date: '1 aprile 2026',
        release14Title:
            'Migrazione a Hetzner, sistema affiliati e nuove lingue',
        release14Description:
            "Centralizzazione di tutta l'infrastruttura su Hetzner per i migliori prezzi e prestazioni, lancio del sistema affiliati con commissioni del 15%, aggiunta di 10 nuove lingue e creazione di strumenti interni per il supporto stabile delle versioni.",
        release14Feature1:
            "Rimossi DigitalOcean e Vultr — tutta l'infrastruttura ora funziona esclusivamente su Hetzner con capacità infinita e senza limitazioni lato provider",
        release14Feature2:
            'Sistema affiliati che permette agli utenti di guadagnare il 15% di commissione su ogni ordine referenziato',
        release14Feature3:
            'Aggiunte 10 nuove lingue: cinese, hindi, arabo, russo, giapponese, turco, italiano, polacco, olandese e portoghese',
        release14Feature4:
            'Strumenti interni per fornire supporto stabile delle funzionalità per le versioni attuali di OpenClaw, senza supportare le versioni precedenti',
        release12Date: '14 marzo 2026',
        release12Title: 'Piani Annuali, Modalità Vocale e Altro',
        release12Description:
            'Abbonamenti annuali con 2 mesi gratis, modalità vocale, reinstallazione istanza e una pagina di presentazione iniziale per ClawHost Go.',
        release12Feature1:
            'Pagina di presentazione per ClawHost Go, hosting locale con ClawHost',
        release12Feature2:
            'Supporto abbonamento annuale con 2 mesi gratis quando ti abboni annualmente',
        release12Feature3:
            'Modalità Vocale per interagire con gli agenti OpenClaw ospitati su ClawHost',
        release12Feature4:
            'Reinstalla OpenClaw sulla tua istanza per ricominciare da zero, disponibile una volta al giorno',
        release11Date: '28 febbraio 2026',
        release11Title: 'Sintesi Vocale, Terminale, Tab Chat ed Esplora File',
        release11Description:
            "Ascolta le risposte degli agenti con la sintesi vocale, interagisci con il tuo VPS direttamente dal terminale, naviga le chat più velocemente con i tab nella barra laterale e sfoglia i file con l'esplora file migliorato.",
        release11Feature1:
            'Sintesi vocale sui messaggi degli agenti nel playground',
        release11Feature2:
            'Terminale per interagire con le tue istanze VPS direttamente dalla dashboard',
        release11Feature3:
            'Tab vista barra laterale chat per accesso e navigazione facili',
        release11Feature4:
            'Miglioramenti esplora file con barra di ricerca per cercare tra i file',
        release11Feature5:
            'Corretti i timestamp dei messaggi che non riflettevano il tempo reale',
        release10Date: '23 febbraio 2026',
        release10Title:
            'Richieste funzionalit\u00E0, esplora file e correzioni bug',
        release10Description:
            'Richieste di funzionalit\u00E0 della community, supporto espanso per la modifica dei file e varie correzioni bug.',
        release10Feature1:
            'Richieste di funzionalit\u00E0 gestite e pubblicate automaticamente dagli agenti OpenClaw',
        release10Feature3:
            'Corretto il cambio del provider del modello che non si rifletteva e continuava a usare il modello iniziale',
        release10Feature4:
            'Diversi miglioramenti e correzioni bug in tutta la piattaforma',
        release10Feature5:
            "I file TypeScript, Markdown e testo semplice sono ora modificabili nell'esplora file",
        release9Date: '21 febbraio 2026',
        release9Title: 'Confronti, refactoring del playground e altro',
        release9Description:
            'Pagine di confronto con i concorrenti, ristrutturazione delle funzionalit\u00E0 del playground, supporto multilingua e miglioramenti generali delle prestazioni.',
        release9Feature1: 'Supporto tema chiaro e scuro',
        release9Feature2:
            'Supporto multilingua con inglese, francese, spagnolo e tedesco',
        release9Feature3:
            'Pagine di confronto con analisi complete rispetto ai concorrenti',
        release9Feature4:
            'Versioni OpenClaw, aggiorna con un clic o installa qualsiasi versione istantaneamente',
        release9Feature5:
            'Refactoring della struttura delle funzionalit\u00E0 del playground e semplificazioni',
        release9Feature6:
            'Miglioramenti di prestazioni, stabilit\u00E0 e reattivit\u00E0',
        release8Date: '18 febbraio 2026',
        release8Title: 'Tema chiaro, prestazioni e stabilit\u00E0',
        release8Description:
            'Supporto tema chiaro, miglioramenti di prestazioni ed esperienza, e miglioramenti di stabilit\u00E0 e reattivit\u00E0.',
        release8Feature1: 'Modalit\u00E0 tema chiaro, scuro e sistema',
        release8Feature2: 'Miglioramenti di prestazioni ed esperienza',
        release8Feature3: 'Miglioramenti di stabilit\u00E0 e reattivit\u00E0',
        release7Date: '16 febbraio 2026',
        release7Title: 'Refactoring chat e input vocale',
        release7Description:
            'Importanti miglioramenti a chat e playground con interazione vocale e allegati file per gli agenti.',
        release7Feature1:
            "Refactoring di chat e playground per un'esperienza pi\u00F9 fluida e reattiva",
        release7Feature2:
            'Interazione vocale con le chat, registra e trascrivi il parlato direttamente nel browser',
        release7Feature4:
            'Visualizzazione e utilizzo allegati per gli agenti, invia immagini e documenti in chat',
        release6Date: '16 febbraio 2026',
        release6Title: 'Chat agenti',
        release6Description:
            'Controllo completo sugli agenti OpenClaw. Gestisci e chatta con tutto direttamente dalla dashboard.',
        release6Feature3:
            'Chatta con i tuoi agenti dal playground, interagisci con qualsiasi agente in tempo reale',
        release6Feature4:
            'Accedi con Google o GitHub, autenticazione veloce e sicura senza codici email',
        release1Date: '8 febbraio 2026',
        release1Title: 'Rilascio iniziale',
        release1Description:
            'Il primo rilascio ufficiale di ClawHost. Distribuisci OpenClaw sul tuo VPS con un clic.',
        release1Feature1: 'Distribuzione OpenClaw con un clic',
        release1Feature2:
            'Dashboard per gestire i claw, avviare, fermare, riavviare ed eliminare istanze',
        release1Feature3:
            '18 piani server con vCPU dedicata, RAM e opzioni di archiviazione',
        release1Feature4: '6 posizioni server in USA, Europa e Asia',
        release1Feature5:
            'Gestione chiavi SSH per accesso server senza password',
        release1Feature6:
            'Supporto archiviazione volume aggiuntiva fino a 10 TB',
        release1Feature7:
            'Autenticazione con magic link, nessuna password necessaria',
        release1Feature8:
            'Accesso online a OpenClaw tramite sottodomini sicuri',
        release1Feature9:
            'Integrazione pagamenti con prezzi trasparenti per server',
        release1Feature10: 'Storico fatturazione e gestione fatture',
        release1Feature11:
            'Provisioning automatico con OpenClaw preinstallato e configurato',
        release2Date: '8 febbraio 2026',
        release2Title: 'Changelog e altro',
        release2Description:
            'Un nuovo modo per restare aggiornati su ClawHost.',
        release2Feature1:
            'Pagina changelog per seguire tutti gli aggiornamenti e i rilasci della piattaforma',
        release3Date: '10 febbraio 2026',
        release3Title: 'Approfondimenti server',
        release3Description:
            'Maggiore visibilit\u00E0 e controllo sui tuoi server, direttamente dalla dashboard.',
        release3Feature1:
            'Log server in tempo reale trasmessi direttamente nella dashboard',
        release3Feature2:
            'Diagnostica server con riparazione automatica con un clic per problemi di servizio',
        release3Feature3:
            'Esplora file integrato ed editor JSON per i file di configurazione del server',
        release4Date: '14 febbraio 2026',
        release4Title: 'Agenti ed esportazione dati',
        release4Description:
            'Playground agenti, gestione multi-agente ed esportazione dati portatile per le tue istanze OpenClaw.',
        release4Feature1:
            'Playground agenti con un clic e panoramica, aggiungi e gestisci pi\u00F9 agenti',
        release4Feature2: 'Esporta il tuo OpenClaw come archivio zip portatile',
        release4Feature3:
            'Playground interattivo con visualizzazione a grafo di Claw e agenti',
        release4Feature4:
            'Rimossa la vista griglia e lista in favore di un layout dashboard unificato'
    },
    clawDetail: {
        noAgentsYet: 'Nessun Agente',
        noAgentsDescription:
            'Distribuisci il tuo primo Agente per interagire con esso.',
        collapseSidebar: 'Comprimi barra laterale',
        expandSidebar: 'Espandi barra laterale',
        selectClaw: 'Seleziona un Agente',
        selectClawDescription:
            'Scegli un Agente dalla barra laterale per visualizzarne i dettagli.',
        closeDetails: 'Chiudi',
        tabOverview: 'Panoramica',
        overviewTitle: 'Panoramica del Gateway',
        overviewGatewayStatus: 'Stato del Gateway',
        overviewOnline: 'Online',
        overviewOffline: 'Offline',
        overviewVersion: 'Versione',
        overviewUptime: 'Tempo di attività',
        overviewSessions: 'Sessioni',
        overviewSessionsCount: '{{count}} attive',
        overviewNoSessions: 'Nessuna sessione attiva',
        overviewSessionName: 'Sessione',
        overviewSessionModel: 'Modello',
        overviewSessionMessages: 'Messaggi',
        overviewSessionLastActive: 'Ultima attività',
        overviewModels: 'Modelli',
        overviewError: 'Impossibile caricare la panoramica!',
        overviewErrorDescription:
            "Impossibile connettersi al gateway OpenClaw. Verifica che l'istanza sia in esecuzione.",
        overviewUnsupportedTitle: 'Panoramica non supportata',
        overviewUnsupportedDescription:
            "La tua versione di OpenClaw non supporta la funzionalità panoramica. Aggiorna all'ultima versione.",
        overviewHermesTitle: 'Hermes funziona nel terminale',
        overviewHermesDescription:
            'Hermes è un agente TUI — apri la scheda Terminale ed esegui `hermes` per avviare una sessione. Le schede File e Versioni consentono di modificare la configurazione e aggiornare.',
        overviewHermesOpenTerminal: 'Apri terminale',
        viewDocs: 'Vedi documenti',
        overviewUptimeDays: '{{days}}g {{hours}}h {{minutes}}m',
        overviewUptimeHours: '{{hours}}h {{minutes}}m',
        overviewUptimeMinutes: '{{minutes}}m',
        overviewService: 'Servizio',
        overviewServiceActive: 'Attivo',
        overviewServiceInactive: 'Inattivo',
        overviewPort: 'Port 18789',
        overviewPortOpen: 'In ascolto',
        overviewPortClosed: 'Chiuso',
        overviewReady: 'Pronto',
        overviewNotReady: 'Non pronto',
        overviewConfiguration: 'Configurazione',
        overviewBrowser: 'Browser',
        overviewCommands: 'Comandi Shell',
        overviewTools: 'Strumenti',
        overviewSubdomain: 'Sottodominio',
        overviewInstanceStatus: "Stato dell'istanza",
        overviewModel: 'Model',
        overviewAgents: 'Agenti',
        overviewMemoryStatus: 'Memoria',
        overviewHeartbeat: 'Heartbeat',
        overviewEvents: 'Eventi',
        overviewProbes: 'Probes',
        overviewPlugins: 'Plugins',
        tabPreview: 'Anteprima',
        previewNotEnabled: "L'anteprima non è abilitata per questa istanza.",
        previewNotEnabledDescription:
            "Abilita l'anteprima per incorporare il tuo agente direttamente nella dashboard.",
        previewEnable: 'Abilita anteprima',
        previewEnabling: 'Abilitazione...',
        previewEnabled: 'Anteprima abilitata.',
        previewEnableFailed: "Impossibile abilitare l'anteprima!",
        previewEnableCanceledNavigation:
            "Attivazione dell'anteprima interrotta perché hai cambiato pagina.",
        previewError: "Impossibile caricare l'anteprima.",
        previewErrorDescription:
            "L'agente potrebbe essere offline o irraggiungibile.",
        previewRetry: 'Riprova',
        tabInfo: 'Info',
        tabLogs: 'Log',
        tabTerminal: 'Terminale',
        terminalConnecting: 'Connessione al terminale...',
        terminalDisconnected: 'Terminale disconnesso.',
        terminalError: 'Impossibile connettersi al terminale !',
        terminalReconnect: 'Riconnetti',
        tabDisabledConfiguring:
            "Disponibile una volta completata la configurazione dell'istanza.",
        tabDisabledAwaitingPayment:
            'Disponibile una volta elaborato il pagamento.',
        creatingTitle: 'Configurazione del tuo agente',
        creatingDescription:
            'Di solito ci vogliono uno o due minuti. Puoi chiudere questa pagina in sicurezza e tornare più tardi.',
        creatingDescriptionLocal:
            'Di solito richiede solo un momento. Tieni aperta l’app fino al termine.',
        configuringTitle: 'Installazione di OpenClaw',
        configuringTitleHermes: 'Installazione di Hermes',
        loadingTipHermes1:
            'Hermes è un agente TUI — apri la scheda Terminale dopo il boot per chattare con esso.',
        loadingTipHermes2:
            'Configura i provider di modelli (OpenRouter, Anthropic, ecc.) in ~/.hermes/.env dalla scheda File.',
        loadingTipHermes3:
            'Collega Telegram, Discord o Slack dal Terminale con `hermes gateway install`.',
        configuringDescription:
            'Di solito ci vogliono uno o due minuti. Puoi chiudere questa pagina in sicurezza e tornare più tardi.',
        configuringDescriptionLocal:
            'Installazione del runtime dell’agente in locale. Tieni aperta l’app fino al termine.',
        awaitingPaymentTitle: 'In attesa di pagamento',
        awaitingPaymentDescription:
            "Completa il pagamento per avviare il provisioning del tuo agente. Questa prenotazione scade tra un'ora.",
        awaitingPaymentAction: 'Completa il pagamento',
        loadingTip1:
            "Sapevi che puoi eseguire pi\u00F9 agenti all'interno di un singolo OpenClaw?",
        loadingTip2: 'Sapevi che OpenClaw \u00E8 open source?',
        loadingTip3:
            "ClawHost \u00E8 il primo progetto in assoluto a permettere l'hosting OpenClaw con un clic.",
        loadingTip4:
            'Puoi accedere al tuo agente tramite SSH o il terminale integrato.',
        loadingTip5:
            'Il tuo agente ottiene automaticamente un proprio sottodominio.',
        loadingTip6:
            "Puoi personalizzare l'icona e il nome del tuo agente in qualsiasi momento dalle Impostazioni.",
        loadingTip7:
            'Tutto il traffico verso il tuo agente \u00E8 crittografato con TLS.',
        loadingTip8:
            "Puoi monitorare l'utilizzo di CPU, memoria e disco nella scheda Monitor.",
        loadingTip9:
            'Hai bisogno di aiuto? Unisciti alla nostra community su Discord.',
        loadingTip10:
            "Puoi esportare l'intera configurazione del tuo agente come backup.",
        loadingTip11:
            'Le chiavi SSH possono essere applicate alle istanze in esecuzione senza reinstallare.',
        loadingTip12:
            'Puoi ruotare la password root e il token gateway dalla scheda Sicurezza.',
        loadingTip13:
            'ClawHost supporta server in pi\u00F9 regioni in Europa e negli Stati Uniti.',
        tabSettings: 'Impostazioni',
        featureVersionUnsupported: '{{feature}} non supportato su {{version}}',
        featureVersionUnsupportedDescription:
            'Non supportiamo la gestione di {{feature}} con questa versione tramite la nostra interfaccia. Puoi comunque gestirlo tramite SSH, Terminale o il pannello di controllo OpenClaw.',
        featureVersionUnsupportedButton: 'Vai alle Versioni',
        featureVersionUnsupportedSupported: 'Versioni supportate:',
        featureVersionUnsupportedNewer: 'versioni successive',
        tabVersions: 'Versioni',
        tabFiles: 'Esplora file',
        tabMonitor: 'Monitor',
        tabVolumes: 'Archiviazione',
        tabSecurity: 'Sicurezza',
        securitySSHKey: 'Chiave SSH',
        securitySSHKeyHint:
            "Applicata all'istanza in esecuzione e utilizzata durante la reinstallazione.",
        securityPassword: 'Password root',
        securityGatewayToken: 'Token gateway',
        securityHostKey: 'Impronta chiave host',
        securityRotatePassword: 'Ruota password',
        securityRotateToken: 'Ruota token',
        securityRandomize: 'Randomizza',
        securitySavePassword: 'Salva password',
        securitySaveToken: 'Salva token',
        volumesTitle: 'Volumi',
        volumesCount: '{{count}} volumi',
        volumesEmpty: 'Nessun volume collegato.',
        volumesEmptyDescription:
            'Questa istanza non ha volumi di archiviazione persistenti.',
        volumesReadOnly:
            "Lo spazio di archiviazione può essere aggiunto solo durante la creazione dell'istanza. Per aggiungere spazio di archiviazione, esegui il deployment di una nuova istanza con la dimensione del volume desiderata, o contatta il",
        volumesContactSupport: 'team di supporto',
        metricsTitle: 'Metriche del server',
        metricsLive: 'In tempo reale',
        metricsCpu: 'Utilizzo CPU',
        metricsMemory: 'Utilizzo memoria',
        metricsDisk: 'Utilizzo disco',
        metricsNetwork: 'Rete',
        metricsLoadAvg: 'Carico medio',
        metricsProcesses: 'Processi principali',
        metricsUptime: 'Tempo di attività',
        metricsUsed: 'Utilizzato',
        metricsAvailable: 'Disponibile',
        metricsTotal: 'Totale',
        metricsReceived: 'Ricevuto',
        metricsSent: 'Inviato',
        metricsLoad1: '1 min',
        metricsLoad5: '5 min',
        metricsLoad15: '15 min',
        metricsProcessPid: 'PID',
        metricsProcessUser: 'Utente',
        metricsProcessCpu: 'CPU %',
        metricsProcessMem: 'MEM %',
        metricsProcessCommand: 'Comando',
        metricsError: 'Impossibile caricare le metriche!',
        metricsErrorDescription:
            "Impossibile connettersi al server per recuperare le metriche. Verificare che l'istanza sia in esecuzione.",
        metricsAutoRefresh: 'Aggiornamento automatico ogni {{seconds}} secondi',
        tabBilling: 'Billing',
        billingEmpty: 'No billing history for this instance.',
        tabServer: 'Server',
        serverIpAddress: 'Indirizzo IP',
        reinstallDescription:
            "Reinstalla {{agentName}} su questo server. Questo ripristinerà l'installazione ma conserverà i tuoi dati. Fallo solo se necessario.",
        versionsSearch: 'Cerca versioni...',
        versionsSearchCount: 'Cerca {{count}} versioni...',
        versionsEmpty: 'Nessuna versione trovata',
        versionsEmptyDescription:
            'Nessuna versione corrisponde alla tua ricerca.',
        versionsErrorDescription:
            'Impossibile caricare le versioni. Controlla la connessione e riprova!',
        versionsChangelog: 'Vedi changelog su npm',
        versionCurrent: 'Corrente',
        versionLatest: 'Ultima',
        updateAvailable: 'A newer version of OpenClaw is available',
        updateAvailableDescription:
            'A new version of OpenClaw ({{version}}) is available for your instance.',
        updateAvailableDescriptionHermes:
            'A new version of Hermes ({{version}}) is available for your instance.',
        goToVersions: 'Go to Versions',
        versionInstall: 'Installa',
        versionInstalling: 'Installazione...',
        versionInstallSuccess: 'Versione {{version}} installata con successo.',
        versionInstallFailed: 'Impossibile installare la versione!',
        installVersionCanceledNavigation:
            'Installazione versione interrotta perché hai cambiato pagina.',
        versionDownloads: '{{count}} download',
        versionChangelog: 'Changelog',
        versionOutdated: 'Obsoleta',
        versionSupported: 'Supportata',
        versionSupportedTooltip:
            "Questa versione consente di gestire OpenClaw tramite l'interfaccia",
        versionInstallConfirmTitle: 'Installa Versione {{version}}',
        versionInstallConfirmDescription:
            'Il cambio di versione potrebbe causare comportamenti inattesi o richiedere configurazione manuale aggiuntiva, specialmente per le versioni più recenti non ancora completamente verificate. Sei sicuro di voler procedere?',
        settingsIcon: 'Icona',
        settingsIconDescription: "Clicca per cambiare l'icona dell'agente.",
        settingsIconRandomize: 'Casuale',
        settingsIconRemove: 'Rimuovi icona',
        settingsBackground: 'Sfondo',
        settingsBackgroundReset: 'Ripristina',
        settingsName: 'Nome',
        settingsNamePlaceholder: 'Inserisci nome claw',
        settingsNameDescription: 'Solo lettere, numeri e trattini.',
        subdomain: 'Sottodominio',
        subdomainPlaceholder: 'Inserisci sottodominio',
        subdomainDescription:
            'Lettere minuscole e numeri, {{min}}-{{max}} caratteri.',
        subdomainInvalid: 'Usa {{min}}-{{max}} lettere minuscole e numeri.',
        subdomainUpdated: 'Sottodominio aggiornato con successo.',
        subdomainUpdateFailed: 'Impossibile aggiornare il sottodominio!',
        subdomainInUse: 'Questo sottodominio è usato da un altro claw!',
        settingsDetails: 'Dettagli',
        settingsDangerZone: 'Zona di pericolo',
        settingsDangerZoneDescription:
            'La tua istanza verrà eliminata alla fine del periodo di fatturazione corrente.',
        settingsDangerZoneDescriptionLocal:
            'Questo eliminerà definitivamente l’agente e tutti i suoi file.',
        settingsScheduledDeletionDescription:
            'Eliminazione programmata per il {{date}}. Annulla per mantenere la tua istanza in esecuzione e il tuo abbonamento attivo.',
        settingsSave: 'Salva',
        settingsSaving: 'Salvataggio...',
        settingsUpdated: 'Impostazioni aggiornate.',
        settingsUpdateFailed: 'Impossibile aggiornare le impostazioni!',
        saveCanceledNavigation:
            'Salvataggio interrotto perché hai cambiato pagina.',
        savePasswordCanceledNavigation:
            'Salvataggio password interrotto perché hai cambiato pagina.',
        saveGatewayTokenCanceledNavigation:
            'Salvataggio token gateway interrotto perché hai cambiato pagina.',
        saveSSHKeyCanceledNavigation:
            'Salvataggio chiave SSH interrotto perché hai cambiato pagina.',
        mockLogStarting: 'Avvio agente OpenClaw...',
        mockLogLoadingModel: 'Caricamento modello: claude-sonnet-4-5',
        mockLogAgentReady: 'Agente pronto sulla porta 3000',
        mockLogConnected: 'Connesso al gateway',
        mockLogsContent:
            '2026-02-14T10:23:41Z {{starting}}\n2026-02-14T10:23:42Z {{loadingModel}}\n2026-02-14T10:23:43Z {{agentReady}}\n2026-02-14T10:23:44Z {{connected}}\n2026-02-14T10:24:01Z {{requestReceived}}\n2026-02-14T10:24:03Z {{responseSent1}}\n2026-02-14T10:25:12Z {{requestReceived}}\n2026-02-14T10:25:14Z {{responseSent2}}\n2026-02-14T10:26:30Z {{healthCheck}}',
        mockLogRequestReceived: 'Richiesta ricevuta: /chat',
        mockLogResponseSent1: 'Risposta inviata (1.2s)',
        mockLogResponseSent2: 'Risposta inviata (1.8s)',
        mockLogHealthCheck: 'Controllo salute superato'
    },
    privacy: {
        title: 'Informativa sulla Privacy',
        description:
            'Scopri come ClawHost raccoglie, utilizza e protegge i tuoi dati personali.',
        lastUpdated: 'Ultimo aggiornamento: 14 marzo 2026',
        introTitle: '1. Introduzione',
        introText:
            'ClawHost ("noi", "nostro" o "ci") si impegna a proteggere la tua privacy. Questa Informativa sulla Privacy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le tue informazioni quando utilizzi il nostro Servizio.',
        authTitle: '2. Autenticazione',
        authText:
            'ClawHost utilizza Google Firebase Authentication per gestire gli account utente. Puoi accedere con email, Google o GitHub. Utilizzando questi metodi di accesso, accetti i rispettivi termini e informative sulla privacy. Questi provider possono raccogliere dati di base come indirizzo email, nome e informazioni sul dispositivo. Noi memorizziamo solo il tuo indirizzo email e il nome visualizzato.',
        collectTitle: '3. Informazioni che Raccogliamo',
        collectText: 'Raccogliamo informazioni nei seguenti modi:',
        personalInfoTitle: 'Informazioni Personali',
        personalInfoEmail:
            "Indirizzo email (per la creazione dell'account e la comunicazione)",
        personalInfoName: 'Nome (opzionale, per la personalizzazione)',
        personalInfoPayment:
            'Informazioni di pagamento (elaborate in sicurezza da provider terzi)',
        serverInfoTitle: 'Informazioni Server',
        serverInfoConfig: 'Configurazione e stato del server',
        serverInfoIp: 'Indirizzo IP e posizione del server',
        serverInfoResources: 'Allocazione risorse (CPU, RAM, archiviazione)',
        useTitle: '4. Come Utilizziamo le Tue Informazioni',
        useText: 'Utilizziamo le informazioni raccolte per:',
        useProvide: 'Fornire e mantenere il nostro Servizio',
        useTransactions:
            'Elaborare transazioni e inviare informazioni di fatturazione',
        useNotices: 'Inviare avvisi e aggiornamenti importanti',
        useSupport: 'Rispondere alle richieste di assistenza clienti',
        useAnalyze:
            'Monitorare e analizzare i modelli di utilizzo per migliorare il nostro Servizio',
        useFraud: 'Rilevare e prevenire frodi o abusi',
        sharingTitle: '5. Condivisione e Divulgazione dei Dati',
        sharingText:
            'Non vendiamo le tue informazioni personali. Potremmo condividere informazioni con:',
        sharingProviders:
            'Fornitori di servizi che assistono nel funzionamento del nostro Servizio (es. provider di infrastruttura cloud)',
        sharingLegal:
            'Autorità legali quando richiesto dalla legge o per proteggere i nostri diritti',
        sharingBusiness:
            'Partner commerciali in caso di fusione, acquisizione o vendita di asset',
        securityTitle: '6. Sicurezza dei Dati',
        securityText:
            'Implementiamo misure tecniche e organizzative appropriate per proteggere le tue informazioni personali contro accesso non autorizzato, alterazione, divulgazione o distruzione. Questo include crittografia, server sicuri e valutazioni di sicurezza regolari.',
        retentionTitle: '7. Conservazione dei Dati',
        retentionText:
            'Conserviamo le tue informazioni personali per tutto il tempo in cui il tuo account è attivo o secondo necessità per fornirti servizi. Potremmo conservare determinate informazioni come richiesto dalla legge o per scopi aziendali legittimi.',
        rightsTitle: '8. I Tuoi Diritti',
        rightsText:
            'A seconda della tua posizione, potresti avere il diritto di:',
        rightsAccess: 'Accedere ai tuoi dati personali',
        rightsCorrect: 'Correggere dati inesatti',
        rightsDelete: 'Richiedere la cancellazione dei tuoi dati',
        rightsObject: 'Opporti al trattamento dei tuoi dati',
        rightsPortability: 'Portabilità dei dati',
        rightsWithdraw: 'Revocare il consenso in qualsiasi momento',
        cookiesTitle: '9. Cookie e Tracciamento',
        cookiesText:
            "Non utilizziamo cookie. L'autenticazione è gestita tramite Firebase e non si basa su cookie memorizzati nel tuo browser.",
        transfersTitle: '10. Trasferimenti Internazionali di Dati',
        transfersText:
            'Le tue informazioni possono essere trasferite e trattate in paesi diversi dal tuo. Garantiamo che siano in atto garanzie appropriate per proteggere i tuoi dati in conformità con questa Informativa sulla Privacy.',
        eligibilityTitle: '11. Idoneità',
        eligibilityText:
            "Il nostro Servizio è disponibile per chiunque. Non ci sono restrizioni di età per l'utilizzo di ClawHost.",
        changesTitle: '12. Modifiche a Questa Informativa',
        changesText:
            'Potremmo aggiornare questa Informativa sulla Privacy di tanto in tanto. Ti notificheremo eventuali modifiche pubblicando la nuova Informativa sulla Privacy su questa pagina e aggiornando la data di "Ultimo aggiornamento".',
        contactTitle: '13. Contattaci',
        contactText:
            'Se hai domande su questa Informativa sulla Privacy o desideri esercitare i tuoi diritti, contattaci a'
    },
    terms: {
        title: 'Termini di Servizio',
        description:
            "Leggi i termini e le condizioni per l'utilizzo dei servizi ClawHost.",
        lastUpdated: 'Ultimo aggiornamento: 14 marzo 2026',
        acceptanceTitle: '1. Accettazione dei Termini',
        acceptanceText:
            'Accedendo e utilizzando ClawHost ("Servizio"), accetti e ti impegni a rispettare i termini e le disposizioni di questo accordo. Se non accetti questi termini, ti preghiamo di non utilizzare il nostro Servizio.',
        serviceTitle: '2. Descrizione del Servizio',
        serviceText:
            'ClawHost fornisce il deployment con un clic di OpenClaw e Hermes su server dedicati. Permettiamo agli utenti di distribuire, gestire e accedere a istanze OpenClaw e Hermes preconfigurate con accesso root completo e risorse dedicate.',
        authTitle: '3. Autenticazione',
        authText:
            "ClawHost utilizza Google Firebase Authentication per gestire l'accesso. Puoi autenticarti con email, Google o GitHub. Utilizzando questi metodi, accetti i rispettivi termini e informative sulla privacy di Google e GitHub. Questi provider possono raccogliere informazioni di base come indirizzo email, nome e dati del dispositivo.",
        responsibilitiesTitle: "4. Responsabilità dell'Utente",
        responsibilitiesText: 'Accetti di:',
        responsibilitiesAccurate:
            'Fornire informazioni di registrazione accurate e complete',
        responsibilitiesSecurity:
            'Mantenere la sicurezza delle credenziali del tuo account',
        responsibilitiesCompliance:
            'Utilizzare il Servizio in conformità con tutte le leggi applicabili',
        responsibilitiesLegal:
            'Non utilizzare il Servizio per scopi illegali o non autorizzati',
        responsibilitiesAccess:
            'Non tentare di ottenere accesso non autorizzato a sistemi o reti',
        prohibitedTitle: '5. Usi Vietati',
        prohibitedText: 'Non puoi utilizzare il nostro Servizio per:',
        prohibitedMalware:
            'Distribuire malware, virus o qualsiasi software dannoso',
        prohibitedDos: 'Condurre attacchi denial-of-service o abuso della rete',
        prohibitedSpam: 'Inviare spam o comunicazioni non richieste',
        prohibitedIllegal: 'Ospitare o distribuire contenuti illegali',
        prohibitedIp:
            'Violare diritti di terze parti inclusa la proprietà intellettuale',
        prohibitedMining: 'Minare criptovalute',
        prohibitedOther:
            'Qualsiasi altra attività illegale o dannosa che potremmo determinare inappropriata a nostra discrezione',
        paymentTitle: '6. Pagamento e Fatturazione',
        paymentText:
            "I servizi vengono fatturati su base mensile o annuale fissa. Puoi passare dalla fatturazione mensile a quella annuale in qualsiasi momento, con il cambio che ha effetto all'inizio del prossimo periodo di fatturazione. Tutti i pagamenti non sono rimborsabili. Quando paghi per un server, hai accesso ad esso per l'intero periodo di fatturazione. Se cancelli, la cancellazione ha effetto alla fine del periodo di fatturazione corrente. I prezzi sono soggetti a modifiche, ma eventuali cambiamenti si applicheranno solo ai claw appena distribuiti e non influenzeranno quelli già distribuiti. Il mancato pagamento può comportare la sospensione o la chiusura del tuo account.",
        availabilityTitle: '7. Disponibilità del Servizio',
        availabilityText:
            "Ci impegniamo a mantenere un'alta disponibilità ma non garantiamo accesso ininterrotto al Servizio. Ci riserviamo il diritto di modificare, sospendere o interrompere qualsiasi parte del Servizio in qualsiasi momento con o senza preavviso.",
        liabilityTitle: '8. Limitazione di Responsabilità',
        liabilityText:
            'Nella misura massima consentita dalla legge, ClawHost non sarà responsabile per danni indiretti, incidentali, speciali, consequenziali o punitivi, o per qualsiasi perdita di profitti o ricavi, sia sostenuti direttamente che indirettamente.',
        terminationTitle: '9. Risoluzione',
        terminationText:
            "Potremmo terminare o sospendere il tuo account e l'accesso al Servizio immediatamente, senza preavviso, per condotta che riteniamo violi questi Termini o sia dannosa per altri utenti, per noi o per terze parti, o per qualsiasi altro motivo.",
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
        changesToTermsTitle: '11. Modifiche ai Termini',
        changesToTermsText:
            "Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. Notificheremo agli utenti eventuali modifiche sostanziali via email o tramite il Servizio. L'uso continuato del Servizio dopo tali modifiche costituisce accettazione dei termini aggiornati.",
        contactTitle: '12. Informazioni di Contatto',
        contactText: 'Se hai domande su questi Termini, contattaci a'
    },
    acquiredBanner: {
        title: 'Acquisito da GetOpenClaw.ai',
        message: 'ClawHost ora fa parte di GetOpenClaw.ai — tutti i tuoi dati sono accessibili solo lì.'
    },
    compare: {
        title: 'Confronto',
        description:
            'Scopri come ClawHost si confronta con altre piattaforme di hosting OpenClaw.',
        badge: 'Confronto',
        feature: 'Piattaforma',
        compareWith: 'Confronta con',
        lastUpdated: 'Ultimo aggiornamento: marzo 2026',
        competitorClawHost: 'ClawHost',
        competitorLobsterFarm: 'LobsterFarm',
        competitorSimpleAgent: 'SimpleAgent',
        competitorMyAgentAi: 'MyAgent.ai',
        competitorQuickAgent: 'QuickAgent',
        categoryInfrastructure: 'Infrastruttura',
        categoryPricing: 'Prezzi e Fatturazione',
        categoryDeployment: 'Deployment e Configurazione',
        categoryManagement: 'Gestione OpenClaw',
        categorySecurity: 'Dati e Sicurezza',
        categoryMonitoring: 'Monitoraggio e Manutenzione',
        categorySupport: 'Supporto e Piattaforma',
        featureServerOwnership: 'Proprietà del server',
        featureProviderChoice: 'Scelta provider cloud',
        featureDedicatedResources: 'Risorse dedicate',
        featureRootAccess: 'Accesso root/SSH completo',
        featureServerLocations: 'Posizioni server',
        featureStartingPrice: 'Prezzo iniziale',
        featureTransparentPricing: 'Prezzi trasparenti',
        featurePowerfulServers: 'Server potenti, prezzo inferiore',
        featureLocationSelection: 'Scegli la posizione del server',
        featureSubdomainAccess: 'Accesso sottodominio',
        featureThemes: 'Temi chiaro e scuro',
        featureSetupTime: 'Tempo di configurazione',
        featureOneClickDeploy: 'Deploy con un clic',
        featureMultipleInstances: 'Istanze multiple',
        featureDataOwnership: 'Proprietà completa dei dati',
        featureDataExport: 'Esportazione dati',
        featureBackups: 'Backup',
        featureSecurityHardening: 'Rafforzamento sicurezza',
        featureSslTls: 'SSL/TLS',
        featureOpenSource: 'Open source',
        featureAutoUpdates: 'Aggiornamenti automatici',
        featureDiagnostics: 'Diagnostica in tempo reale',
        featureLogStreaming: 'Streaming log',
        featureRepairTools: 'Strumenti di riparazione',
        featureSupportChannels: 'Canali di supporto',
        featureMultiLanguage: 'UI multilingua',
        featureDesktopApp: 'App desktop',
        featureOneClickVersion: 'Cambio versione con un clic',
        featureWebTerminal: 'Accesso terminale web',
        featureSocials: 'Social media',
        dedicatedVps: 'VPS Dedicato',
        sharedContainers: 'Container condivisi',
        isolatedContainers: 'Container isolati',
        cloudWorkspaces: 'Workspace cloud',
        threeProviders: 'Cloud',
        singleProvider: 'Provider singolo',
        fullyDedicated: 'Completamente dedicato',
        shared: 'Condiviso',
        fullRootSsh: 'Root completo + SSH',
        sshOnRequest: 'SSH su richiesta',
        noAccess: 'Nessun accesso',
        thirtyPlusLocations: 'Oltre 30 posizioni',
        limitedLocations: 'Limitato',
        fourLocations: '4 posizioni',
        fromTwentyFiveMonth: 'Da $25/mese',
        aboutFortyFourMonth: '~$44/mese media',
        fromNineteenMonth: '$19–79/mese',
        nineteenMonth: '$19/mese',
        clearSpecsPricing: 'Specifiche e prezzi chiari',
        unclearPricing: 'Prezzi poco chiari',
        fixedTiers: '3 livelli fissi',
        creditBased: 'Basato su crediti',
        minutes: 'Minuti',
        underOneMinute: 'Meno di 1 minuto',
        thirtySeconds: '30 secondi',
        instant: 'Istantaneo',
        noneRequired: 'Nessuna',
        minimal: 'Minima',
        unlimited: 'Illimitato',
        singleInstance: 'Singola',
        noMarketplace: 'Nessun marketplace',
        appOnly: 'Solo app',
        fullConfig: 'Configurazione completa',
        limitedConfig: 'Limitata',
        zipExport: 'Esportazione ZIP',
        serverTransfer: 'Trasferimento server',
        noExport: 'Nessuna esportazione',
        volumeStorage: 'Archiviazione volume',
        noBackups: 'Nessun backup',
        dailyBackups: 'Backup giornalieri',
        included: 'Incluso',
        notIncluded: 'Non incluso',
        managed: 'Gestito',
        manual: 'Manuale',
        appStore: 'App Store',
        liveMonitoring: 'Monitoraggio live',
        liveLogs: 'Log live',
        oneClickRepair: 'Riparazione con un clic',
        emailGithub: 'Email, GitHub',
        humanSupport: 'Supporto umano',
        communityOnly: 'Solo community',
        appSupport: 'Supporto app',
        prioritySupport: 'Supporto 24/7 (Pro+)',
        fourLanguages: '4 lingue',
        englishOnly: 'Solo inglese',
        available: 'Disponibile',
        comingSoon: 'Prossimamente',
        macOsOnly: 'Solo macOS',
        viaTelegram: 'Via Telegram',
        builtInTerminal: 'Nessun SSH necessario',
        notAvailable: 'Non disponibile',
        disclaimer: 'Qualcosa è cambiato o errato? Scrivici a',
        disclaimerOr: 'o apri una pull request su',
        github: 'GitHub',
        ctaTitle: 'Pronto a vedere la differenza?',
        ctaDescription:
            'Distribuisci OpenClaw sul tuo server dedicato. Proprietà completa, prezzi trasparenti e pronto in pochi minuti.'
    },
    admin: {
        title: 'Admin',
        description: 'Gestisci gli utenti e i dati della piattaforma.',
        usersTab: 'Utenti',
        totalUsers: '{{count}} utenti',
        noUsers: 'Nessun utente',
        noUsersDescription:
            'Nessun utente trovato corrispondente ai tuoi filtri.',
        genericErrorDescription: 'Qualcosa è andato storto. Riprova.',
        genericEmptyDescription: 'Niente da mostrare qui per ora.',
        failedToLoadUsers: 'Impossibile caricare gli utenti!',
        failedToLoadUsersDescription:
            'Si è verificato un errore durante il caricamento degli utenti. Riprova.',
        failedToLoadUserDetail: "Impossibile caricare i dettagli dell'utente!",
        userDetail: 'Dettagli utente',
        userInfo: 'Info utente',
        email: 'Email',
        name: 'Nome',
        role: 'Ruolo',
        authMethods: 'Metodi di autenticazione',
        license: 'Licenza',
        referralCode: 'Codice referral',
        referredBy: 'Referito da',
        joined: 'Iscritto',
        claws: 'Claws',
        sshKeys: 'Chiavi SSH',
        volumes: 'Volumi',
        billing: 'Fatturazione',
        noClaws: 'Nessun Claw',
        noSshKeys: 'Nessuna Chiave SSH',
        noVolumes: 'Nessun Volume',
        noBilling: 'Nessuno Storico di Fatturazione',
        hasLicense: 'Sì',
        noLicense: 'No',
        notSet: 'Non impostato',
        searchPlaceholder: 'Cerca per email o nome...',
        filterAll: 'Tutti gli utenti',
        filterWithClaws: 'Con claws',
        filterWithoutClaws: 'Senza claws',
        sortNewest: 'Più recenti',
        sortOldest: 'Più vecchi',
        editUser: 'Modifica',
        saveUser: 'Salva',
        userUpdated: 'Utente aggiornato.',
        userUpdateFailed: 'Aggiornamento fallito!',
        clawsTab: 'Claws',
        sshKeysTab: 'Chiavi SSH',
        volumesTab: 'Volumi',
        noClawsFound: 'Nessun Claw',
        noSSHKeysFound: 'Nessuna Chiave SSH',
        noVolumesFound: 'Nessun Volume',
        failedToLoadAgents: 'Impossibile caricare gli agents!',
        failedToLoadSSHKeys: 'Impossibile caricare le chiavi SSH!',
        failedToLoadVolumes: 'Impossibile caricare i volumi!',
        owner: 'Proprietario',
        searchClaws: 'Cerca claws...',
        searchSSHKeys: 'Cerca chiavi SSH...',
        referralsTab: 'Referral',
        pendingClawsTab: 'In attesa',
        emailsTab: 'E-mail',
        analyticsTab: 'Analisi',
        billingTab: 'Fatturazione',
        settingsTab: 'Impostazioni',
        settingsDescription: 'Gestisci le tue preferenze di amministratore.',
        showAllAgents: 'Mostra tutti gli agenti di tutti gli utenti',
        billingFilterAll: 'Tutti gli ordini',
        billingFilterService: 'Servizio Claw',
        billingFilterLicense: 'Licenza',
        billingOrderTypeLabel: ' · {{type}}',
        noBillingFound: 'Nessun ordine',
        failedToLoadBilling: 'Impossibile caricare gli ordini!',
        searchBilling: 'Cerca per prodotto...',
        billingReason: 'Motivo',
        billingType: 'Tipo',
        billingSubtotal: 'Subtotale',
        billingDiscount: 'Sconto',
        billingTax: 'Tassa',
        billingTotal: 'Totale',
        analyticsDay: 'Giorno',
        analyticsWeek: 'Settimana',
        analyticsMonth: 'Mese',
        analyticsYear: 'Anno',
        analyticsAllTime: 'Tutto il tempo',
        analyticsFilter: 'Filtra',
        analyticsResources: 'Risorse',
        analyticsSelectAll: 'Seleziona tutto',
        analyticsDeselectAll: 'Deseleziona tutto',
        failedToLoadAnalytics: 'Impossibile caricare le analisi!',
        noAnalyticsData: 'Nessun dato analitico disponibile.',
        noReferralsFound: 'Nessun Referral',
        noPendingClawsFound: 'Nessun Claw in Attesa',
        noEmailsFound: 'Nessuna E-mail',
        failedToLoadReferrals: 'Impossibile caricare i referral!',
        failedToLoadPendingClaws: 'Impossibile caricare i claws in attesa!',
        failedToLoadEmails: 'Impossibile caricare le e-mail!',
        referrer: 'Referente',
        referred: 'Referito',
        earned: 'Guadagnato',
        expiresAt: 'Scade',
        feature: 'Funzionalità',
        sentAt: 'Inviato',
        fileSize: 'Dimensione',
        registered: 'Registrato',
        status: 'Stato',
        ip: 'IP',
        plan: 'Piano',
        location: 'Posizione',
        subdomain: 'Sottodominio',
        subscription: 'Abbonamento',
        billingInterval: 'Fatturazione',
        deletionScheduled: 'Eliminazione programmata',
        fingerprint: 'Impronta digitale',
        price: 'Prezzo',
        pricePerMonth: '{{price}}/mese',
        statusRunning: 'In esecuzione',
        statusStopped: 'Fermato',
        adminBadge: 'Admin',
        unitGB: '{{size}} GB',
        unitKB: '{{size}} KB'
    },
    affiliate: {
        title: 'Affiliate',
        description: 'Earn rewards by referring friends to ClawHost.',
        subtitle: 'Share your referral link and earn rewards.',
        learnMore: 'Scopri di più sul programma di affiliazione',
        referralCode: 'Referral Code',
        referrals: 'Referrals',
        payments: 'pagamenti',
        earnings: 'Earnings',
        codeChangeHint: 'You can customize your referral code once.',
        codeAlreadyChanged: 'Your referral code has already been customized.',
        codeUpdated: 'Referral code updated.',
        codeUpdateFailed: 'Failed to update referral code!',
        invalidCodeLength:
            'Code must be between {{min}} and {{max}} characters!',
        referralHistory: 'Referral History',
        paymentHistory: 'Cronologia pagamenti',
        periodToday: 'Today',
        periodWeek: 'Week',
        periodMonth: 'Month',
        periodYear: 'Year',
        periodAll: 'All',
        confirmChangeTitle: 'Change Referral Code',
        confirmChangeDescription:
            'Are you sure? This action is permanent and cannot be undone. You will not be able to change your referral code again.',
        noReferralsYet: 'Nessun referral',
        noReferralsDescription:
            'Share your referral link to start earning rewards.',
        noPaymentsYet: 'Nessun pagamento',
        noPaymentsDescription:
            'Quando i tuoi utenti segnalati effettuano acquisti, i loro pagamenti appariranno qui.'
    },
    affiliateProgram: {
        title: 'Programma di affiliazione',
        description:
            'Scopri come funziona il programma di affiliazione ClawHost, quanto puoi guadagnare e le regole per partecipare.',
        lastUpdated: 'Ultimo aggiornamento: 1 aprile 2026',
        overviewTitle: '1. Panoramica',
        overviewText:
            'Il programma di affiliazione ClawHost ti permette di guadagnare ricompense segnalando nuovi utenti a ClawHost. Quando qualcuno effettua un acquisto dopo aver visitato ClawHost tramite il tuo link di riferimento, guadagni una commissione sui suoi pagamenti. Il programma è gratuito e disponibile per tutti gli utenti registrati di ClawHost.',
        howItWorksTitle: '2. Come funziona',
        howItWorksText: 'Iniziare con il programma di affiliazione è semplice:',
        howItWorksStep1:
            'Crea un account ClawHost. Un codice di riferimento unico viene generato automaticamente per te.',
        howItWorksStep2:
            'Condividi il tuo link di riferimento con amici, colleghi o il tuo pubblico. Il tuo link segue il formato: clawhost.cloud?ref=YOUR_CODE.',
        howItWorksStep3:
            'Quando qualcuno effettua un acquisto dopo aver visitato ClawHost tramite il tuo link, viene registrato come tuo riferimento.',
        howItWorksStep4:
            'Guadagni una commissione ogni volta che il tuo utente segnalato effettua un acquisto idoneo.',
        earningsTitle: '3. Guadagni e pagamenti',
        earningsText: 'Ecco come funzionano i guadagni di affiliazione:',
        earningsCommission:
            'Guadagni una commissione del 15% su ogni acquisto idoneo effettuato dai tuoi utenti segnalati. Le commissioni si applicano sia ai piani ClawHost Cloud che ClawHost Go.',
        earningsMonthly:
            'Per gli abbonamenti mensili, guadagni commissioni per 1 anno dalla data del riferimento.',
        earningsYearly:
            'Per gli abbonamenti annuali, guadagni una commissione solo sul primo anno.',
        earningsPayout:
            "L'importo minimo di prelievo è di $100 USD. Per richiedere un prelievo, contatta il nostro team di supporto.",
        earningsPaymentMethod:
            'I prelievi vengono elaborati tramite PayPal. Devi fornire un indirizzo e-mail PayPal valido quando richiedi un pagamento.',
        earningsCurrency:
            'Tutti i guadagni sono calcolati e visualizzati in USD.',
        referralCodeTitle: '4. Il tuo codice di riferimento',
        referralCodeText:
            'Ogni utente riceve un codice di riferimento unico al momento della registrazione. Puoi personalizzarlo una volta per renderlo più memorabile:',
        referralCodeUnique:
            'Il tuo codice di riferimento è unico per il tuo account e non può essere condiviso o trasferito a un altro utente.',
        referralCodeOneChange:
            'Puoi personalizzare il tuo codice di riferimento esattamente una volta. Scegli con attenzione — questa modifica è permanente e non può essere annullata.',
        referralCodeFormat:
            'I codici di riferimento possono contenere solo lettere, numeri, trattini e underscore.',
        referralWindowTitle: '5. Finestra di attribuzione dei riferimenti',
        referralWindowText:
            "Un riferimento ti viene attribuito per 3 mesi dal momento in cui l'utente segnalato visita ClawHost per la prima volta tramite il tuo link. Se l'utente segnalato non effettua un acquisto entro questa finestra di 3 mesi, il riferimento scade e nessuna commissione verrà guadagnata. Se l'utente visita tramite un link di riferimento diverso, il nuovo riferimento sostituisce il precedente.",
        eligibilityTitle: '6. Idoneità',
        eligibilityText:
            'Per partecipare al programma di affiliazione, devi soddisfare i seguenti requisiti:',
        eligibilityAccount: 'Devi avere un account ClawHost registrato.',
        eligibilityStanding:
            'Il tuo account deve essere in regola senza precedenti di violazioni delle politiche.',
        eligibilityAge:
            "Devi avere almeno 18 anni o l'età della maggiore età nella tua giurisdizione.",
        rulesTitle: '7. Regole del programma',
        rulesText:
            "Per mantenere l'integrità del programma di affiliazione, si applicano le seguenti regole:",
        rulesNoSelfReferral:
            'Le auto-segnalazioni sono severamente vietate. Non puoi segnalare i tuoi account o account che controlli.',
        rulesNoFakeAccounts:
            "La creazione di account falsi, registrazioni automatizzate o l'uso di bot per generare riferimenti è vietata.",
        rulesNoSpam:
            "L'invio di messaggi di massa non richiesti (spam) per promuovere il tuo link di riferimento non è consentito.",
        rulesNoMisrepresentation:
            'Non puoi rappresentare in modo errato ClawHost, i suoi servizi o il programma di affiliazione in alcun modo.',
        rulesNoIncentivized:
            'Offrire incentivi monetari diretti (ad es. pagare gli utenti per iscriversi tramite il tuo link) non è consentito.',
        terminationTitle: '8. Violazione e terminazione',
        terminationText:
            'Qualsiasi violazione di queste regole comporterà la perdita immediata di tutte le ricompense in sospeso e guadagnate. ClawHost si riserva il diritto di sospendere o bannare permanentemente il tuo account dal programma di affiliazione. Nei casi gravi, anche il tuo account ClawHost potrebbe essere terminato. Tutte le decisioni riguardanti le violazioni sono definitive.',
        marketingTitle: '9. Come promuovere',
        marketingText:
            'Ci sono molti modi creativi e legittimi per condividere il tuo link di riferimento e aumentare i tuoi guadagni:',
        marketingSocial:
            'Condividi il tuo link su piattaforme social come X, LinkedIn, Reddit e Facebook. Scrivi della tua esperienza con ClawHost e includi il tuo link di riferimento.',
        marketingBlog:
            'Scrivi post sul blog, tutorial o recensioni su ClawHost. Includi il tuo link di riferimento in modo naturale nel contenuto.',
        marketingVideo:
            'Crea contenuti video su YouTube o TikTok mostrando come usi ClawHost per distribuire e gestire agenti IA.',
        marketingCommunity:
            'Partecipa a comunità di sviluppatori, forum e server Discord. Quando qualcuno chiede di hosting cloud o distribuzione di agenti IA, consiglia ClawHost con il tuo link.',
        marketingNewsletter:
            'Se gestisci una newsletter o una mailing list, menziona ClawHost in un numero rilevante con il tuo link di riferimento.',
        marketingComparison:
            'Scrivi articoli di confronto onesti o guide che evidenzino ciò che rende ClawHost diverso dalle altre piattaforme.',
        changesToProgramTitle: '10. Modifiche al programma',
        changesToProgramText:
            'ClawHost si riserva il diritto di modificare, sospendere o interrompere il programma di affiliazione in qualsiasi momento senza preavviso. Ciò include modifiche alle tariffe delle commissioni, alle finestre di riferimento, alle soglie di pagamento e alle regole del programma. La partecipazione continuata dopo le modifiche costituisce accettazione dei termini aggiornati.',
        getStartedTitle: '11. Inizia',
        getStartedText:
            'Pronto a iniziare a guadagnare? Vai alla tua dashboard di affiliazione per ottenere il tuo link di riferimento e inizia a condividerlo con la tua rete.',
        getStartedButton: 'Vai alla dashboard di affiliazione',
        contactTitle: '12. Contatto',
        contactText:
            'Se hai domande sul programma di affiliazione, hai bisogno di aiuto con il tuo codice di riferimento o vuoi segnalare una violazione, contattaci a'
    }
}

export default it