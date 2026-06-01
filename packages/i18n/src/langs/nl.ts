import type { Translations } from '#i18n/types'

const nl: Translations = {
    common: {
        loading: 'Laden...',
        noResults: 'Geen resultaten gevonden.',
        save: 'Opslaan',
        cancel: 'Annuleren',
        confirm: 'Bevestigen',
        delete: 'Verwijderen',
        deleting: 'Verwijderen...',
        create: 'Aanmaken',
        done: 'Klaar',
        back: 'Terug',
        copy: 'Kopiëren',
        copied: 'Gekopieerd.',
        copiedWithLabel: '{{label}} gekopieerd.',
        show: 'Tonen',
        hide: 'Verbergen',
        tryAgain: 'Opnieuw proberen',
        addKey: 'Sleutel toevoegen',
        close: 'Sluiten',
        none: 'Geen',
        all: 'Alle',
        unknown: 'Onbekend',
        pageNotFound: 'Pagina niet gevonden',
        closeNotification: 'Melding sluiten',
        beta: 'Beta',
        brandName: 'ClawHost',
        brandNameGo: 'ClawHost Go',
        brandNameGoVersion: 'ClawHost Go {{version}}',
        pageTitleWithBrand: '{{title}} - ClawHost',
        menuFile: 'Archief',
        menuEdit: 'Bewerk',
        menuView: 'Weergave',
        menuWindow: 'Venster',
        menuHelp: 'Help',
        scrollToBottom: 'Naar beneden scrollen',
        second: 'seconde',
        seconds: 'seconden'
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
        switchLanguage: 'Taal'
    },
    theme: {
        light: 'Licht',
        dark: 'Donker',
        system: 'Systeem',
        toggleTheme: 'Thema wisselen'
    },
    nav: {
        claws: 'Claws',
        sshKeys: 'SSH-sleutels',
        account: 'Account',
        affiliate: 'Affiliate',
        license: 'Licentie',
        signOut: 'Uitloggen',
        admin: 'Admin',
        login: 'Inloggen',
        deploy: 'Deployen',
        deployOpenClaw: 'OpenClaw deployen',
        mainNavigation: 'Hoofdnavigatie',
        footerNavigation: 'Voettekstnavigatie',
        toggleMenu: 'Menu wisselen',
        cloud: 'Cloud',
        cloudSubtitle: 'Technisch',
        go: 'Go',
        goSubtitle: 'Niet-technisch'
    },
    go: {
        pageTitle: 'ClawHost Go',
        heroTitle1: 'Implementeer OpenClaw.',
        heroTitle2: 'Lokaal. Direct.',
        badge: 'OpenClaw & Hermes lokaal',
        description:
            'Een lichte desktopclient om je OpenClaw-instanties te beheren. Deploy, monitor en beheer je claws — rechtstreeks vanaf je computer.',
        features: 'Functies',
        whyClawHostGo: 'Alles-in-één functies',
        featuresDescription:
            'Waarom we het proberen waard zijn, functies liegen hier niet.',
        zeroConfigDescription:
            'Bespaar uren server-, OpenClaw- en Hermes-installatie. Alles is voorgeïnstalleerd en binnen enkele minuten klaar.',
        ownedDataDescription:
            'Alles draait op jouw apparaat. Geen cloudservers, geen derden, geen gegevens die je apparaat verlaten.',
        terminalAccessDescription:
            'Krijg rechtstreeks vanuit de app toegang tot de terminal van je OpenClaw-instantie. Geen externe SSH-clients nodig.',
        simplePricing: 'Eenvoudige prijzen',
        simplePricingDescription:
            'Eén licentie, onbeperkt alles. Geen maandelijkse rekeningen, geen gebruikslimieten, geen verborgen kosten.',
        localDomain: 'Aangepast lokaal domein',
        localDomainDescription:
            "Toegang tot je OpenClaw via een aangepast lokaal domein. Nette URL's op je eigen netwerk.",
        secureDescription:
            'Je gegevens verlaten nooit je apparaat. Volledig geïsoleerd, volledig versleuteld, volledig van jou.',
        pricing: 'Prijzen',
        pricingTitle: 'Eenvoudige, eenmalige prijs',
        pricingDescription:
            'Geen abonnementen, geen verborgen kosten. Eén licentie, onbeperkt gebruik.',
        pricingPrice: '${{price}}',
        pricingLabel: 'Eenmalige betaling',
        pricingFeature1: 'Levenslange licentie',
        pricingFeature2: 'Onbeperkte claws',
        pricingFeature3: 'Alle toekomstige updates',
        pricingFeature4: 'Geen gebruikslimieten',
        pricingFeature5: 'Prioriteitsondersteuning',
        pricingFeature6: 'Aangepast lokaal domein',
        comparison: 'Vergelijking',
        comparisonTitle: 'Go vs Cloud',
        comparisonDescription:
            'Kies wat voor jou werkt. Go draait lokaal, Cloud draait op dedicated servers.',
        comparisonLocalUs: 'Draait volledig op je apparaat',
        comparisonLocalOthers: 'Draait op externe servers',
        comparisonPricingUs: 'Eenmalige betaling',
        comparisonPricingOthers: 'Maandelijks abonnement',
        comparisonDataUs: 'Gegevens blijven op je apparaat',
        comparisonDataOthers: 'Gegevens op cloudservers',
        comparisonSetupUs: 'Installeren en direct starten',
        comparisonSetupOthers: 'Deployen met één klik',
        comparisonUpdatesUs: 'Automatische updates',
        comparisonUpdatesOthers: 'Automatische updates',
        faqTitle: 'Vragen',
        faqHeading: 'Veelgestelde vragen',
        faqDescription: 'Alles wat je moet weten over ClawHost Go.',
        faq1Question: 'Wat is ClawHost Go?',
        faq1Answer:
            'ClawHost Go is een lichte desktopapplicatie waarmee je OpenClaw lokaal op je eigen computer kunt draaien. Geen cloudservers nodig — installeren, starten en binnen seconden OpenClaw gebruiken.',
        faq2Question: 'Hoe verschilt Go van ClawHost Cloud?',
        faq2Answer:
            'ClawHost Cloud deployt OpenClaw op dedicated externe servers met 24/7 uptime en wereldwijde toegang. ClawHost Go draait alles lokaal op je apparaat — ideaal voor privacy, offline gebruik en eenvoudige opstellingen.',
        faq3Question: 'Heb ik een internetverbinding nodig?',
        faq3Answer:
            'ClawHost Go werkt offline voor lokaal gebruik. Een internetverbinding is alleen nodig voor de eerste installatie, updates en functies die externe API-aanroepen vereisen.',
        faq4Question: 'Is de licentie een eenmalige betaling?',
        faq4Answer:
            'Ja. Je betaalt eenmalig en krijgt levenslange toegang tot ClawHost Go, inclusief alle toekomstige updates. Geen abonnementen, geen terugkerende kosten.',
        faq5Question: 'Welke besturingssystemen worden ondersteund?',
        faq5Answer:
            'ClawHost Go ondersteunt Windows en macOS. Beide platformen krijgen dezelfde functies en ontvangen gelijktijdig updates.',
        faq6Question: 'Kan ik later overstappen van Go naar Cloud?',
        faq6Answer:
            'Absoluut. Je kunt je OpenClaw-configuratie exporteren vanuit Go en op elk moment deployen op ClawHost Cloud. Beide platformen zijn volledig compatibel.',
        statsPrice: '${{price}}',
        statsLifetime: 'Levenslang',
        statsOneTime: 'Eenmalig',
        statsPayment: 'Betaling',
        statsLocal: 'Lokaal',
        statsLocally: 'Draait lokaal',
        statsZero: 'Nul',
        statsZeroConfig: 'Geen configuratie',
        ctaTitle: 'Draai OpenClaw lokaal',
        ctaDescription:
            'Eenmalige betaling, levenslange licentie. Deploy OpenClaw op je eigen computer — geen cloud, geen abonnementen, geen limieten. Jouw gegevens, jouw regels.',
        downloadForMac: 'Downloaden voor Mac',
        downloadVersion: 'Versie {{version}}',
        downloadForWindows: 'Downloaden voor Windows',
        deviceNotSupported: 'Je apparaat wordt nog niet ondersteund door ClawHost Go.',
        downloadFailed: 'Downloaden mislukt!',
        downloadStarted: 'Downloaden gestart.',
        appleSilicon: 'Apple Silicon',
        intel: 'Intel',
        chooseMacArch: 'Welke Mac heb je?',
        otherVersions: 'Andere versies',
        joinWaitlist: 'Wachtlijst',
        joinedWaitlist: 'Op de wachtlijst',
        waitlistAlreadyJoinedToast: 'Dit e-mailadres staat al op de lijst.',
        waitlistFailedToast: 'Aanmelden voor wachtlijst mislukt!',
        waitlistEmailPlaceholder: 'Voer je e-mailadres in',
        updateAvailable: 'Versie {{version}} is beschikbaar.',
        updateDownload: 'Downloaden',
        updateDismiss: 'Later',
        clawNotFound: 'Claw niet gevonden!',
        clawNameAlreadyExists: 'Er bestaat al een claw met deze naam!',
        invalidSubdomain:
            'Ongeldig subdomein. Gebruik 3-20 kleine letters en cijfers!',
        subdomainAlreadyInUse: 'Dit subdomein is al in gebruik!',
        clawDirectoryNotFound: 'Claw-map niet gevonden!',
        noVersionInstalled:
            'Geen OpenClaw-versie geïnstalleerd. Ga naar het tabblad Versies en installeer er eerst een!',
        failedToStartClaw: 'Claw starten mislukt!',
        noVersionAssigned: 'Geen OpenClaw-versie toegewezen aan deze claw!',
        invalidAgentName: 'Ongeldige agentnaam!',
        invalidPath: 'Ongeldig pad!',
        fileNotFound: 'Bestand niet gevonden!',
        purchasingNotAvailable:
            'Aankopen zijn niet beschikbaar in lokale modus!',
        exportFailed: 'Export mislukt!',
        versionNotInstalled:
            'OpenClaw-versie {{version}} is niet geïnstalleerd!',
        failedToStartProcess: 'Proces starten mislukt: {{reason}}!',
        gatewayNotReady: 'De agent is niet op tijd klaar geworden!',
        processExitedImmediately:
            'Proces onmiddellijk beëindigd. Logs:\n{{logs}}',
        processExitedImmediatelyNoLogs:
            'Proces onmiddellijk beëindigd na het starten!',
        processExitedWithCode:
            'Proces beëindigd met code {{code}}. Logs:\n{{logs}}',
        processExitedWithCodeNoLogs: 'Proces beëindigd met code {{code}}!',
        processExitedUnexpectedly: 'Proces onverwacht beëindigd!',
        failedToInstallVersion:
            'Installatie van versie {{version}} mislukt: {{reason}}!',
        oauthCancelled: 'Authenticatie geannuleerd!',
        diskFull: 'Geen ruimte meer op het apparaat!',
        permissionDenied: 'Toegang geweigerd!',
        networkTimeout: 'Netwerkverzoek verlopen!',
        failedToFetchLatestVersion: 'Kan de nieuwste versie niet ophalen!'
    },
    footer: {
        website: 'Website',
        copyrightName: 'ClawHost',
        copyrightRights: 'Alle rechten voorbehouden.',
        termsOfService: 'Servicevoorwaarden',
        privacyPolicy: 'Privacybeleid',
        getInTouch: 'Neem contact op',
        brandDescription:
            'Deploy OpenClaw op je eigen VPS met één klik. Volledige privacy, dedicated resources, geen gedeelde infrastructuur.',
        builtBy: 'Gebouwd door',
        supportedBy: 'Ondersteund door',
        product: 'Product',
        howItWorks: 'Hoe het werkt',
        features: 'Functies',
        pricing: 'Prijzen',
        faq: 'Vragen',
        changelog: 'Changelog',
        compare: 'Volledige vergelijking',
        legalAndMore: 'Overig',
        affiliateProgram: 'Partnerprogramma',
        documentation: 'Documentatie',
        productDescription:
            'Deploy OpenClaw- en Hermes-agents in de cloud of lokaal met één klik — bouw, verbind en schaal je AI-agents sneller met ClawHost.',
        ariaGithub: 'GitHub',
        ariaX: 'X',
        ariaFacebook: 'Facebook',
        ariaInstagram: 'Instagram',
        ariaThreads: 'Threads',
        ariaYoutube: 'YouTube',
        ariaTiktok: 'TikTok'
    },
    errors: {
        somethingWentWrong: 'Er is iets misgegaan!',
        couldNotLoadData:
            'We konden de gegevens niet laden. Probeer het opnieuw!',
        notFound: 'Pagina niet gevonden!',
        pageNotFoundDescription:
            'De pagina die je zoekt bestaat niet of is verplaatst.',
        goToHomepage: 'Naar de startpagina',
        failedToLoadAgents: 'Agents laden mislukt!',
        failedToLoadAgentsDescription:
            'We konden je Agents niet laden. Controleer je verbinding en probeer het opnieuw!',
        failedToLoadSSHKeys: 'SSH-sleutels laden mislukt!',
        failedToLoadSSHKeysDescription:
            'We konden je SSH-sleutels niet laden. Controleer je verbinding en probeer het opnieuw!',
        failedToUpdateProfile: 'Profiel bijwerken mislukt!',
        failedToAddSSHKey: 'SSH-sleutel toevoegen mislukt!',
        failedToCreateClaw: 'Claw aanmaken mislukt!',
        failedToLoadLocations: 'Locaties laden mislukt. Probeer het opnieuw!',
        failedToLoadPlans: 'Plannen laden mislukt. Probeer het opnieuw!',
        invalidPlan: 'Ongeldig plan geselecteerd!',
        invalidLocation: 'Selecteer een locatie!',
        failedToGenerateKeyPair:
            'Sleutelpaar genereren mislukt. Genereer de sleutels lokaal!',
        unableToLoadPricing:
            'Prijzen laden mislukt. Probeer het later opnieuw!',
        noPasswordAvailable: 'Geen wachtwoord beschikbaar voor deze claw!'
    },
    api: {
        missingRequiredFields: 'Verplichte velden ontbreken!',
        agentNotFound: 'Agent niet gevonden!',
        agentRenamed: 'Agent succesvol hernoemd.',
        agentEmojiUpdated: 'Agent-emoji bijgewerkt.',
        failedToUpdateEmoji: 'Emoji bijwerken mislukt!',
        invalidAgentName: 'Agentnaam moet tussen 1 en {{max}} tekens zijn!',
        userNotFound: 'Gebruiker niet gevonden!',
        sshKeyNotFound: 'SSH-sleutel niet gevonden!',
        pendingAgentNotFound: 'Agent in afwachting niet gevonden!',
        agentNotScheduledForDeletion:
            'Agent is niet gepland voor verwijdering!',
        agentDeletionAlreadyPassed: 'Verwijderingsdatum is al verstreken!',
        agentLimitReached:
            'Je hebt de limiet van {{max}} agents bereikt. Neem contact op met support om deze limiet te verhogen!',
        sshKeyLimitReached:
            'Je hebt de limiet van {{max}} SSH-sleutels bereikt. Neem contact op met support om deze limiet te verhogen!',
        volumeSizeInvalid:
            'Volumegrootte moet tussen {{min}} en {{max}} GB zijn!',
        paymentNotConfigured: 'Betaling niet geconfigureerd voor dit plan!',
        invalidSshKeyFormat: 'Ongeldig SSH publieke sleutelformaat!',
        sshKeyInUse:
            'Deze SSH-sleutel wordt momenteel gebruikt door een of meer agents!',
        inputTooLong: 'Invoer overschrijdt de maximaal toegestane lengte!',
        invalidEmailFormat: 'Ongeldig e-mailformaat!',
        plusAddressingNotAllowed:
            'Plus-adressering is niet toegestaan voor e-mailinlog!',
        invalidRedirectUrl: 'Ongeldige redirect-URL!',
        fileTooLarge:
            'Bestandsinhoud overschrijdt de maximaal toegestane grootte!',
        nameAndKeyRequired: 'Naam en publieke sleutel zijn vereist!',
        nameTooLong: 'Naam mag maximaal {{max}} tekens bevatten!',
        noBillingAccount: 'Geen facturatieaccount gevonden!',
        orderIdRequired: 'Bestelling-ID is vereist!',
        orderNotFound: 'Bestelling niet gevonden!',
        emailRequired: 'E-mailadres is vereist!',
        redirectUrlRequired: 'Redirect-URL is vereist!',
        invalidWebhook: 'Ongeldige webhook!',
        failedToStartAgent: 'Agent starten mislukt!',
        failedToStopAgent: 'Agent stoppen mislukt!',
        failedToRestartAgent: 'Agent herstarten mislukt!',
        failedToDeleteAgent: 'Agent verwijderen mislukt!',
        failedToCreateAgent: 'Agent aanmaken mislukt!',
        invalidProvider: 'Ongeldige provider!',
        providerNotAllowed: 'Deze provider is momenteel niet beschikbaar!',
        invalidPlan: 'Ongeldig plan geselecteerd!',
        planBelowMinimumMemory:
            'Dit plan voldoet niet aan de minimale geheugenvereiste!',
        invalidLocation: 'Ongeldige locatie geselecteerd!',
        planNotAvailableAtLocation:
            'Dit plan is niet beschikbaar op de geselecteerde locatie!',
        failedToSyncAgent: 'Serverstatus synchroniseren mislukt!',
        failedToProvisionAgent: 'Agent inrichten mislukt!',
        failedToInitiatePurchase: 'Aankoop starten mislukt!',
        failedToCancelDeletion: 'Verwijdering annuleren mislukt!',
        failedToHardDeleteAgent: 'Agent permanent verwijderen mislukt!',
        failedToCancelScheduledDeletion:
            'Geplande verwijdering annuleren mislukt!',
        failedToCreateSshKey: 'SSH-sleutel aanmaken mislukt!',
        failedToDeleteSshKey: 'SSH-sleutel verwijderen mislukt!',
        failedToUpdateProfile: 'Profiel bijwerken mislukt!',
        failedToGetProfile: 'Profiel ophalen mislukt!',
        failedToGetInvoice: 'Factuur ophalen mislukt!',
        failedToGetCustomerPortal: 'Klantenportaal ophalen mislukt!',
        failedToGetBillingHistory: 'Facturatiegeschiedenis ophalen mislukt!',
        failedToGetStats: 'Statistieken ophalen mislukt!',
        affiliateFetched: 'Affiliate info fetched successfully.',
        failedToGetAffiliate: 'Failed to get affiliate info!',
        invalidPeriod: 'Ongeldig periodefilter!',
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
        failedToFetchLocations: 'Locaties ophalen mislukt!',
        failedToFetchPlans: 'Plannen ophalen mislukt!',
        failedToFetchVolumePricing: 'Volumeprijzen ophalen mislukt!',
        failedToFetchPlanAvailability: 'Planbeschikbaarheid ophalen mislukt!',
        failedToSendEmail: 'E-mail verzenden mislukt!',
        failedToGetVersion: 'Versie ophalen mislukt!',
        failedToGetVersions: 'Versies ophalen mislukt!',
        failedToInstallVersion: 'Versie installeren mislukt!',
        installVersionSuccess: 'Versie succesvol geïnstalleerd.',
        invalidVersion: 'Ongeldig versieformaat!',
        outdatedVersion:
            'Deze versie is verouderd en kan niet worden geïnstalleerd!',
        failedToGetDiagnostics: 'Verbinding met de instantie mislukt!',
        failedToGetDiagnosticsDescription:
            'Kon diagnostiek niet ophalen. De instantie is mogelijk offline of aan het opstarten.',
        failedToGetLogs: 'Logs laden mislukt!',
        failedToGetLogsDescription:
            'Kon logs voor deze instantie niet ophalen. Probeer het later opnieuw.',
        failedToReinstallAgent: 'Instantie opnieuw installeren mislukt!',
        reinstallSuccess: 'Instantie succesvol opnieuw geïnstalleerd.',
        reinstallRateLimited:
            'Je kunt slechts eenmaal per 24 uur opnieuw installeren. Neem contact op met het team als je deze limiet wilt verwijderen.',
        subdomainRateLimited:
            'Je kunt je subdomein slechts eenmaal per 24 uur wijzigen. Neem contact op met het team als je deze limiet wilt verwijderen.',
        subdomainUpdated: 'Subdomein succesvol bijgewerkt.',
        invalidSubdomain:
            'Ongeldig subdomein. Gebruik 3-20 kleine letters en cijfers!',
        subdomainAlreadyInUse: 'Dit subdomein is al in gebruik!',
        subdomainNotSupported: 'Dit agenttype gebruikt geen subdomein.',
        agentBusy: 'Agent wordt momenteel ingericht of verwijderd!',
        reinstallGatewayNotResponding:
            'Herinstallatie voltooid, maar de gateway reageert nog niet. Het kan meer tijd nodig hebben om op te starten.',
        failedToRepairAgent: 'Failed to repair the instance!',
        repairSuccess: 'Instance repaired successfully.',
        repairGatewayNotResponding:
            'Repair applied but gateway is not responding yet. It may need more time to start.',
        failedToExportAgent: 'Agentgegevens exporteren mislukt!',
        agentNotReady: 'Agent is niet klaar voor export!',
        exportRateLimited:
            'Deze agent is onlangs geëxporteerd. Wacht even voordat je opnieuw exporteert!',
        failedToListFiles: 'Instantiebestanden weergeven mislukt!',
        failedToReadFile: 'Bestand lezen mislukt!',
        failedToUpdateFile: 'Bestand opslaan mislukt!',
        invalidFilePath: 'Ongeldig bestandspad!',
        fileNotEditable: 'Dit bestandstype kan niet worden bewerkt!',
        invalidJsonConfig: 'Ongeldige JSON!',
        fileSaveSuccess: 'Bestand opgeslagen.',
        rateLimitExceeded: 'Wacht even voordat je een nieuwe code aanvraagt!',
        otpExpiredOrNotFound:
            'Code verlopen of niet gevonden. Vraag een nieuwe aan!',
        otpMaxAttemptsReached:
            'Te veel mislukte pogingen. Vraag een nieuwe code aan!',
        otpInvalidCode: 'Ongeldige code. Probeer het opnieuw!',
        licenseAlreadyPurchased: 'Licentie al aangeschaft!',
        licenseNotAvailable: 'Licentieproduct is niet beschikbaar!',
        licenseCheckoutCreated: 'Licentie-checkout aangemaakt.',
        failedToPurchaseLicense: 'Licentie-checkout aanmaken mislukt!',
        internalServerError: 'Er is een interne fout opgetreden!',
        invalidCredentials: 'Ongeldige inloggegevens!',
        accountLinked: 'Account succesvol gekoppeld.',
        webhookProcessingFailed: 'Webhookverwerking mislukt!',
        adminAccessDenied: 'Admintoegang vereist!',
        agentsFetched: 'Agents succesvol opgehaald.',
        agentFetched: 'Agent succesvol opgehaald.',
        agentStarsFetched: 'Agent-sterren succesvol opgehaald.',
        agentSynced: 'Agent succesvol gesynchroniseerd.',
        agentStarted: 'Agent succesvol gestart.',
        agentStopped: 'Agent succesvol gestopt.',
        agentRestarted: 'Agent succesvol herstart.',
        agentCreated: 'Agent succesvol aangemaakt.',
        agentDeleted: 'Agent succesvol verwijderd.',
        agentDeletionScheduled: 'Agentverwijdering gepland.',
        agentDeletionCancelled: 'Agentverwijdering geannuleerd.',
        agentHardDeleted: 'Agent permanent verwijderd.',
        pendingAgentCancelled: 'Aankoop geannuleerd.',
        failedToCancelPendingAgent: 'Aankoop annuleren mislukt!',
        agentPurchaseInitiated: 'Aankoop succesvol gestart.',
        sshKeysFetched: 'SSH-sleutels succesvol opgehaald.',
        sshKeyCreated: 'SSH-sleutel succesvol aangemaakt.',
        sshKeyDeleted: 'SSH-sleutel succesvol verwijderd.',
        profileFetched: 'Profiel succesvol opgehaald.',
        profileUpdated: 'Profiel succesvol bijgewerkt.',
        statsFetched: 'Statistieken succesvol opgehaald.',
        billingHistoryFetched: 'Facturatiegeschiedenis succesvol opgehaald.',
        invoiceFetched: 'Factuur succesvol opgehaald.',
        customerPortalFetched: 'Klantenportaal-URL succesvol opgehaald.',
        plansFetched: 'Plannen succesvol opgehaald.',
        locationsFetched: 'Locaties succesvol opgehaald.',
        volumePricingFetched: 'Volumeprijzen succesvol opgehaald.',
        planAvailabilityFetched: 'Planbeschikbaarheid succesvol opgehaald.',
        diagnosticsFetched: 'Diagnostiek succesvol opgehaald.',
        metricsFetched: 'Statistieken succesvol opgehaald.',
        failedToGetMetrics: 'Kan serverstatistieken niet ophalen!',
        overviewFetched: 'Overzicht succesvol opgehaald.',
        failedToGetOverview: 'Kan gateway-overzicht niet ophalen!',
        overviewUnsupported:
            'Deze OpenClaw-versie ondersteunt de overzichtsfunctie niet!',
        passwordRotated: 'Root-wachtwoord succesvol geroteerd.',
        failedToRotatePassword: 'Kan root-wachtwoord niet roteren!',
        gatewayTokenRotated: 'Gateway-token succesvol geroteerd.',
        failedToRotateGatewayToken: 'Kan gateway-token niet roteren!',
        sshKeyUpdated: 'SSH-sleutel succesvol bijgewerkt.',
        failedToUpdateSSHKey: 'Kan SSH-sleutel niet bijwerken!',
        invalidPassword:
            'Wachtwoord moet tussen {{min}} en {{max}} tekens lang zijn!',
        invalidGatewayToken:
            'Gateway-token moet tussen {{min}} en {{max}} tekens lang zijn!',
        enablePreviewSuccess: 'Voorbeeldmodus succesvol geactiveerd.',
        failedToEnablePreview: 'Kan voorbeeldmodus niet activeren!',
        logsFetched: 'Logs succesvol opgehaald.',
        filesFetched: 'Bestanden succesvol opgehaald.',
        fileFetched: 'Bestand succesvol opgehaald.',
        otpSent: 'Code succesvol verzonden.',
        otpVerified: 'Code succesvol geverifieerd.',
        webhookReceived: 'Webhook ontvangen.',
        unauthorized: 'Niet geautoriseerd!',
        invalidToken: 'Ongeldig token!',
        notFound: 'Niet gevonden!',
        healthOk: 'API is actief.',
        featureVersionUnsupported:
            'Deze functie wordt niet ondersteund in versie {{version}}. Werk OpenClaw bij of gebruik de Terminal om dit handmatig te beheren.',
        invalidAuthMethod: 'Ongeldige authenticatiemethode!',
        authMethodNotConnected: 'Deze authenticatiemethode is niet verbonden!',
        authMethodConnected: 'Authenticatiemethode succesvol verbonden.',
        authMethodDisconnected: 'Authenticatiemethode succesvol ontkoppeld.',
        failedToConnectAuthMethod: 'Authenticatiemethode verbinden mislukt!',
        failedToDisconnectAuthMethod:
            'Authenticatiemethode ontkoppelen mislukt!',
        featureEmailsDisabled: 'Feature-e-mails zijn momenteel uitgeschakeld.',
        featureEmailsSent: 'Feature-e-mails succesvol verzonden.',
        featureEmailsFailed: 'Feature-e-mails verzenden mislukt!',
        invalidFeatureKey: 'Ongeldige feature-sleutel!',
        waitlistJoined: 'Succesvol aangemeld voor de wachtlijst.',
        waitlistAlreadyJoined: 'Al op de wachtlijst.',
        waitlistJoinFailed: 'Aanmelden voor wachtlijst mislukt!',
        waitlistRateLimited:
            'Je gaat te snel! Probeer het opnieuw over {{seconds}} {{unit}}.',
        waitlistStatusFetched: 'Wachtlijststatus opgehaald.',
        waitlistCheckFailed: 'Wachtlijststatus controleren mislukt!',
        adminUsersFetched: 'Gebruikers succesvol opgehaald.',
        failedToGetAdminUsers: 'Kan gebruikers niet ophalen!',
        adminUserDetailFetched: 'Gebruikersdetails succesvol opgehaald.',
        failedToGetAdminUserDetail: 'Kan gebruikersdetails niet ophalen!',
        adminUserUpdated: 'Gebruiker bijgewerkt.',
        failedToUpdateAdminUser: 'Kan gebruiker niet bijwerken!',
        adminStatsFetched: 'Statistieken opgehaald.',
        failedToGetAdminStats: 'Kan statistieken niet ophalen!',
        adminAnalyticsFetched: 'Analyse succesvol opgehaald.',
        failedToGetAdminAnalytics: 'Analyse ophalen mislukt!',
        adminBillingFetched: 'Facturering succesvol opgehaald.',
        failedToGetAdminBilling: 'Facturering ophalen mislukt!',
        adminAgentsFetched: 'Agents opgehaald.',
        failedToGetAdminAgents: 'Kan agents niet ophalen!',
        adminSSHKeysFetched: 'SSH-sleutels opgehaald.',
        failedToGetAdminSSHKeys: 'Kan SSH-sleutels niet ophalen!',
        adminVolumesFetched: 'Volumes opgehaald.',
        failedToGetAdminVolumes: 'Kan volumes niet ophalen!',
        adminReferralsFetched: 'Referrals fetched.',
        failedToGetAdminReferrals: 'Failed to fetch referrals!',
        adminPendingAgentsFetched: 'Pending agents fetched.',
        failedToGetAdminPendingAgents: 'Failed to fetch pending agents!',
        adminWaitlistFetched: 'Waitlist fetched.',
        failedToGetAdminWaitlist: 'Failed to fetch waitlist!',
        adminExportsFetched: 'Exports fetched.',
        adminEmailsFetched: 'Emails fetched.',
        failedToGetAdminEmails: 'Failed to fetch emails!'
    },
    emails: {
        otpSubject: 'Je ClawHost-inlogcode',
        otpPreview: 'Je ClawHost-inlogcode: {{code}}',
        otpHeading: 'Je inlogcode is:',
        otpExpiry:
            'Code verloopt over 10 minuten. Als jij dit niet was, negeer deze e-mail.',
        featureFooter: 'Je ontvangt dit omdat je een ClawHost-account hebt.',
        features: {
            terminal: {
                subject: 'Wist je dat? Je hebt een webterminal',
                preview: 'Toegang tot je server direct vanuit de browser',
                tag: 'Webterminal',
                heading: 'Je server is \u00e9\u00e9n klik verwijderd',
                description:
                    'Krijg direct toegang tot je server vanuit je browser met onze ingebouwde terminal. Geen SSH-client nodig \u2014 open gewoon ClawHost en begin met typen.',
                cta: 'Terminal openen'
            },
            logs: {
                subject: 'Wist je dat? Realtime logs in je dashboard',
                preview: 'Monitor je serverlogs zonder de browser te verlaten',
                tag: 'Live Logs',
                heading: 'Bekijk wat je server doet',
                description:
                    'Monitor je serverlogs in realtime vanuit het ClawHost-dashboard. Diagnose problemen, volg deployments en debug je applicaties zonder de browser te verlaten.',
                cta: 'Logs bekijken'
            },
            fileExplorer: {
                subject:
                    'Wist je dat? Bewerk serverbestanden vanuit je browser',
                preview: 'Blader, lees en bewerk bestanden zonder SSH',
                tag: 'Bestandsverkenner',
                heading: 'Je bestanden, binnen handbereik',
                description:
                    'Blader, lees en bewerk bestanden op je server direct vanuit het ClawHost-dashboard. Syntaxmarkering, zoeken en direct opslaan \u2014 geen SSH nodig.',
                cta: 'Bestandsverkenner openen'
            },
            diagnostics: {
                subject: 'Wist je dat? Ingebouwde gezondheidscontroles',
                preview:
                    'Monitor de gezondheid van je server vanuit het dashboard',
                tag: 'Diagnostiek',
                heading: 'Weet dat je server gezond is',
                description:
                    'Voer diagnostiek uit op je claw om de servicestatus, geheugengebruik en poortbeschikbaarheid te controleren. Ontdek problemen voordat ze groter worden.',
                cta: 'Diagnostiek uitvoeren'
            },
            sshKeys: {
                subject: 'Wist je dat? Beheer SSH-sleutels vanuit ClawHost',
                preview: 'Genereer en beheer SSH-sleutelparen in het dashboard',
                tag: 'SSH-sleutels',
                heading: 'SSH-sleutels, vereenvoudigd',
                description:
                    'Genereer SSH-sleutelparen, kopieer publieke sleutels en download priv\u00e9sleutels \u2014 alles vanuit het ClawHost-dashboard. Wijs sleutels toe aan claws voor veilige toegang.',
                cta: 'SSH-sleutels beheren'
            },
            exportConfig: {
                subject: 'Wist je dat? Exporteer je claw-configuratie',
                preview:
                    'Download je claw-instellingen als een draagbare configuratie',
                tag: 'Exporteer Config',
                heading: 'Neem je configuratie mee',
                description:
                    'Exporteer je claw-configuratie en instellingen als een downloadbaar bestand. Maak een back-up van je setup of gebruik het om je omgeving te repliceren.',
                cta: 'Configuratie exporteren'
            },
            multiLanguage: {
                subject: 'Wist je dat? ClawHost spreekt jouw taal',
                preview: 'Gebruik ClawHost in 14 talen',
                tag: 'Meertalig',
                heading: 'ClawHost in jouw taal',
                description:
                    'Schakel het hele ClawHost-dashboard om naar een van de 14 talen. Van knoppen tot foutmeldingen \u2014 volledig vertaald.',
                cta: 'Taal wijzigen'
            },
            subdomain: {
                subject: 'Wist je dat? Elke claw krijgt een eigen subdomein',
                preview:
                    'Toegang tot je claw vanaf overal met een aangepaste URL',
                tag: 'Aangepast Subdomein',
                heading: 'Toegang vanaf overal',
                description:
                    'Elke claw krijgt een uniek subdomein zodat je overal toegang hebt tot je OpenClaw-instantie. Geen port forwarding, geen lokale netwerken \u2014 gewoon een URL.',
                cta: 'Je subdomein bekijken'
            },
            darkMode: {
                subject: 'Wist je dat? ClawHost heeft een donkere modus',
                preview: 'Schakel tussen licht en donker thema',
                tag: 'Donkere Modus',
                heading: 'Prettig voor de ogen',
                description:
                    'Schakel tussen licht en donker thema in het ClawHost-dashboard. Je voorkeur wordt opgeslagen en automatisch toegepast bij elk bezoek.',
                cta: 'Donkere modus proberen'
            },
            reinstall: {
                subject:
                    'Wist je dat? Herinstalleer OpenClaw met \u00e9\u00e9n klik',
                preview:
                    'Reset je OpenClaw-instantie zonder je server te verliezen',
                tag: 'Herinstalleren',
                heading: 'Nieuwe start, dezelfde server',
                description:
                    'Herinstalleer de OpenClaw-runtime op je bestaande server met \u00e9\u00e9n klik. Je server blijft intact \u2014 alleen OpenClaw krijgt een schone installatie.',
                cta: 'Meer informatie'
            },
            yearlyPlans: {
                subject: 'Wist je dat? Bespaar met jaarplannen',
                preview:
                    'Schakel over naar jaarlijkse facturering en betaal minder',
                tag: 'Jaarlijkse Plannen',
                heading: 'Betaal minder, krijg meer',
                description:
                    'Schakel over naar jaarlijkse facturering en bespaar op je claw-abonnement. Dezelfde geweldige service, lagere prijs \u2014 annuleer wanneer je wilt.',
                cta: 'Plannen bekijken'
            }
        }
    },
    auth: {
        signIn: 'Authenticatie',
        signInDescription:
            'Log in op je ClawHost-account om je OpenClaw-instanties te beheren.',
        signingIn: 'Authenticeren...',
        verifyCode: 'Code verifi\u00ebren',
        checkYourEmail: 'Controleer je e-mail',
        checkYourEmailHeading: 'Controleer je e-mail',
        codeSentTo: 'We hebben een 6-cijferige code gestuurd naar',
        signInToDeployOpenClaw:
            'Authenticeer om agents met \u00e9\u00e9n klik te beheren en te deployen.',
        emailAddress: 'E-mailadres',
        emailPlaceholder: 'voorbeeld@clawhost.cloud',
        continueWithEmail: 'Doorgaan met e-mail',
        otpDescription:
            'We sturen je een code om in te loggen. Geen wachtwoord nodig.',
        welcomeBack: 'Welkom terug.',
        resendIn: 'Opnieuw verzenden in {{seconds}}s',
        resendCode: 'Code opnieuw verzenden',
        changeEmail: 'E-mail wijzigen',
        invalidCode: 'Ongeldige code!',
        invalidEmailFormat: 'Voer een geldig e-mailadres in!',
        plusAddressingNotAllowed:
            'Plus-adressering is niet toegestaan voor e-mailinlog!',
        or: 'of',
        continueWithGoogle: 'Doorgaan met Google',
        continueWithGithub: 'Doorgaan met GitHub',
        agreementNotice: 'Door verder te gaan, ga je akkoord met onze',
        termsOfService: 'Servicevoorwaarden',
        andWord: 'en',
        privacyPolicy: 'Privacybeleid'
    },
    account: {
        title: 'Account',
        description:
            'Beheer je ClawHost-accountinstellingen en profielinformatie.',
        accountSettings: 'Account',
        manageYourAccount: 'Beheer je profiel- en accountinstellingen.',
        profileInformation: 'Profielinformatie',
        profileDescription: 'Je persoonlijke informatie en weergavenaam.',
        noNameSet: 'Geen naam ingesteld',
        joined: 'Lid sinds',
        claws: 'claws',
        sshKeys: 'sleutels',
        displayName: 'Weergavenaam',
        enterYourName: 'Voer je naam in',
        emailAddress: 'E-mailadres',
        emailNotEditable:
            'E-mail is niet bewerkbaar. Neem contact op met support.',
        profileUpdatedSuccessfully: 'Profiel succesvol bijgewerkt.',
        billingAndSubscription: 'Facturering & Abonnement',
        billingAndSubscriptionDescription:
            'Beheer je betaalmethoden, abonnementen en facturen.',
        viewBillingHistory:
            'Bekijk je betalingsgeschiedenis, facturen en abonnementen.',
        aboutApp: 'Over',
        aboutAppDescription: 'App-informatie en versie.',
        appVersion: 'App-versie',
        operatingSystem: 'Besturingssysteem',
        architecture: 'Architectuur',
        checkForUpdates: 'Controleer op updates',
        checkNow: 'Controleren',
        updatesUpToDate: 'Je hebt de nieuwste versie.',
        updateReady: 'Versie {{version}} klaar om te installeren.',
        restartToInstall: 'Herstart om te installeren',
        connectedAccounts: 'Verbonden accounts',
        connectedAccountsDescription:
            'Beheer de inlogmethoden die aan je account zijn gekoppeld.',
        authEmail: 'E-mail',
        authGoogle: 'Google',
        authGithub: 'GitHub',
        authConnected: 'Verbonden',
        authConnect: 'Verbinden',
        authDisconnect: 'Ontkoppelen',
        emailCannotBeDisconnected:
            'E-mail is altijd verbonden als je primaire inlogmethode.',
        providerConnected: '{{provider}} succesvol verbonden.',
        providerDisconnected: '{{provider}} succesvol ontkoppeld.',
        providerEmailMismatch:
            'Je kunt alleen accounts verbinden die hetzelfde e-mailadres gebruiken!',
        settings: 'Instellingen',
        settingsDescription: 'Beheer je dashboardvoorkeuren.',
        openLinksWindowed: 'Links openen in een vensterweergave',
        openLinksWindowedDescription:
            'Wanneer ingeschakeld, openen externe links binnen de app in plaats van de systeembrowser.'
    },
    billing: {
        date: 'Datum',
        product: 'Product',
        amount: 'Bedrag',
        status: 'Status',
        statusPaid: 'Betaald',
        statusPending: 'In behandeling',
        statusRefunded: 'Terugbetaald',
        statusPartiallyRefunded: 'Gedeeltelijk terugbetaald',
        billingReasonPurchase: 'Aankoop',
        billingReasonSubscriptionCreate: 'Nieuw abonnement',
        billingReasonSubscriptionCycle: 'Verlenging',
        billingReasonSubscriptionUpdate: 'Abonnementswijziging',
        failedToLoadBilling: 'Factureringsgeschiedenis laden mislukt!',
        downloadInvoice: 'Factuur downloaden',
        invoiceCanceledNavigation:
            'Factuurdownload onderbroken omdat je de pagina hebt verlaten.',
        failedToLoadInvoice: 'Factuur laden mislukt!',
        couponApplied: 'Coupon: {{name}}',
        manageBilling: 'Facturering beheren',
        failedToLoadPortal: 'Factureringsportaal openen mislukt!',
        portalCanceledNavigation:
            'Factureringsportaal onderbroken omdat je de pagina hebt verlaten.'
    },
    license: {
        title: 'Licentie',
        description: 'Beheer je OpenClaw-licentie.',
        pageTitle: 'Licentie',
        pageDescription:
            'Koop je licentie voor het zelf hosten van OpenClaw-instanties lokaal met onze Go-app.',
        planName: 'ClawHost Go Licentie',
        oneTimePurchase: 'Eenmalige aankoop',
        price: '${{price}}',
        priceNote: 'Betaal eenmalig, bezit voor altijd.',
        purchaseLicense: 'Licentie kopen',
        purchasing: 'Doorsturen...',
        activated: 'Licentie actief',
        activatedDescription: 'Je licentie is actief. Bedankt voor je steun.',
        paymentSuccess: 'Betaling geslaagd. Je licentie is nu actief.',
        failedToPurchase: 'Afrekenen starten mislukt!',
        featureUnlimitedClaws: 'Onbeperkt OpenClaws',
        featureDevices: 'Onbeperkt apparaten',
        featureUpdates: 'Updates voor altijd',
        featureSupport: 'Prioriteitsondersteuning',
        featureCloud: 'Alle cloudfuncties, lokaal',
        whatsIncluded: 'Wat is inbegrepen',
        gateTitle: 'Licentie vereist',
        gateDescription:
            'Je hebt een ClawHost Go Licentie nodig om OpenClaw-instanties lokaal te deployen en te beheren.'
    },
    network: {
        offline: 'Geen internetverbinding',
        offlineDescription:
            'Je bent momenteel offline. Functies die internettoegang vereisen, zijn niet beschikbaar.'
    },
    dashboard: {
        title: 'Claws',
        description:
            'Bekijk en beheer je gedeployde OpenClaw-instanties. Start, stop, herstart en monitor je VPS-servers.',
        claw: 'claw',
        clawsPlural: 'claws',
        clawCountLabel: '{{count}} claws',
        clawCountLabelSingular: '{{count}} claw',
        newClaw: 'Nieuwe Claw',
        searchAgents: 'Agenten zoeken...',
        searchAgentsCount: '{{count}} agenten zoeken...',
        noAgentsMatchSearch: 'Geen agenten gevonden.',
        clawActions: 'Claw-acties',
        noAgentsYet: 'Geen Agenten',
        noAgentsDescription:
            'Er is geen gedeployde agent gevonden. Maar je kunt je eerste agent op elk moment deployen vanaf $25/m. Gewoon AI gebruiken.',
        deleteClaw: 'Claw verwijderen',
        deleteClawConfirmation: 'Weet je zeker dat je wilt verwijderen',
        deleteClawWarning:
            'Je abonnement wordt geannuleerd en de server wordt verwijderd aan het einde van je huidige factureringsperiode. Je kunt het tot dan blijven gebruiken.',
        actionCannotBeUndone: 'Deze actie kan niet ongedaan worden gemaakt.',
        start: 'Starten',
        startServer: 'Server starten',
        stop: 'Stoppen',
        stopServer: 'Server stoppen',
        restart: 'Herstarten',
        restartServer: 'Server herstarten',
        startClaw: 'Server starten',
        startClawConfirmation:
            'Dit zal de server en al zijn processen starten. Doe dit alleen als het nodig is.',
        stopClaw: 'Server stoppen',
        stopClawConfirmation:
            'Dit zal alle draaiende processen op de server be\u00ebindigen, inclusief OpenClaw. Er gaan geen gegevens verloren. Doe dit alleen als het nodig is. Je kunt hem op elk moment weer starten. Stoppen stopt de facturering niet \u2014 verwijder de server om niet meer belast te worden.',
        restartClaw: 'Server herstarten',
        restartClawConfirmation:
            'Dit zal alle draaiende processen op de server be\u00ebindigen, inclusief OpenClaw, en ze opnieuw starten. Er gaan geen gegevens verloren. Doe dit alleen als het nodig is.',
        copyPassword: 'Wachtwoord kopi\u00ebren',
        copySshWithKey: 'SSH kopi\u00ebren (met sleutel)',
        copySshWithPassword: 'SSH kopi\u00ebren (met wachtwoord)',
        connect: 'SSH-commando kopi\u00ebren',
        viewServerCredentials: 'Serverreferenties',
        serverCredentials: 'Serverreferenties',
        serverCredentialsDescription:
            'Gebruik deze referenties om via SSH verbinding te maken met je server.',
        sshCommand: 'SSH-commando',
        rootPassword: 'Root-wachtwoord',
        sshCommandCopied: 'SSH-commando gekopieerd.',
        sshCommandWithPasswordCopied: 'SSH-commando met wachtwoord gekopieerd.',
        passwordCopiedToClipboard: 'Wachtwoord naar klembord gekopieerd.',
        plan: 'Server',
        location: 'Locatie',
        ip: 'IP',
        domain: 'Domein',
        ipAddress: 'IP-adres',
        port: 'Poort',
        subscription: 'Abonnement',
        history: 'Geschiedenis',
        planCost: 'Plan',
        serverId: 'Server-ID',
        created: 'Aangemaakt',
        sshKey: 'SSH-sleutel',
        storage: 'Opslag',
        nextBilling: 'Volgende facturering',
        lastBilling: 'Laatste facturering',
        totalSpent: 'Totaal uitgegeven',
        version: 'Versie',
        gatewayToken: 'Gateway-token',
        gatewayTokenDescription:
            'Gebruik dit token om te authenticeren met je gateway',
        contactSupport: 'Contact Support',
        scheduledForDeletion: 'Gepland voor verwijdering',
        scheduledDeletionShort: 'Verwijderd op {{date}}',
        deletionDate: 'Deze claw wordt verwijderd op {{date}}',
        deletionTooltip:
            'Gepland voor verwijdering op {{date}}. Gebruik het menu om te annuleren.',
        pastDue: 'Betaling mislukt',
        deletionFailed: 'Verwijdering mislukt',
        pastDueDescription:
            'Je betaling is mislukt. Als dit niet binnen 14 dagen wordt opgelost, wordt deze claw permanent verwijderd.',
        updatePayment: 'Betaling bijwerken',
        cancelDeletion: 'Verwijdering annuleren',
        cancelDeletionConfirmation:
            'Weet je het zeker? Je abonnement blijft actief en je wordt nog steeds in rekening gebracht. De instantie blijft draaien.',
        deletionCancelled: 'Verwijdering geannuleerd.',
        scheduleDeletion: 'Verwijdering plannen',
        resumeCheckout: 'Afrekenen hervatten',
        cancelPurchase: 'Aankoop annuleren',
        hardDelete: 'Geforceerd verwijderen',
        hardDeleteClaw: 'Geforceerd verwijderen',
        hardDeleteConfirmation:
            'Weet je zeker dat je deze claw onmiddellijk wilt verwijderen? Je verliest de resterende tijd van je huidige factureringsperiode. Deze actie kan niet ongedaan worden gemaakt.',
        diagnostics: 'Diagnostiek',
        diagnosticsDescription:
            'Controleer de gezondheid van je OpenClaw-instantie.',
        diagnosticsStatus: 'Status',
        diagnosticsLogs: 'Logs',
        diagnosticsRepair: 'Repair',
        diagnosticsRepairDescription:
            'Remove memory limits, apply latest service configuration, and restart the gateway. This fixes most common issues.',
        diagnosticsRepairSuccess: 'Instance repaired successfully.',
        diagnosticsRepairFailed:
            'Repair applied but gateway is not responding yet!',
        diagnosticsLoading: 'Verbinden met instantie...',
        diagnosticsNoLogs:
            'Geen logs beschikbaar. Start je instantie om logs te genereren.',
        diagnosticsNoLogsHermesTitle: 'Hermes gateway draait niet',
        diagnosticsNoLogsHermesDescription:
            'Voer in het Terminal-tabblad `hermes gateway setup` uit om platforms te configureren, en daarna `sudo systemctl enable --now hermes-gateway` om de bridge te starten.',
        diagnosticsIssueDetected:
            'Er is een probleem gedetecteerd met je instantie.',
        diagnosticsHealthy: 'Je instantie draait normaal.',
        diagnosticsPort: 'Poort 18789',
        diagnosticsMemory: 'Geheugen',
        logsDescription:
            'Laatste 100 regels van je gateway-log, automatisch verversend.',
        fileExplorer: 'Bestandsverkenner',
        fileExplorerRoot: 'openclaw',
        fileExplorerDescription:
            'Blader en bewerk je OpenClaw-configuratiebestanden. Verkeerde wijzigingen kunnen je instantie kapotmaken.',
        fileExplorerSelectFile:
            'Selecteer een bestand om de inhoud te bekijken.',
        fileExplorerReadOnly: 'Alleen-lezen',
        fileExplorerSave: 'Opslaan',
        fileExplorerSaved: 'Bestand opgeslagen.',
        fileExplorerSaveCanceledNavigation:
            'Bestand opslaan onderbroken omdat je de pagina hebt verlaten.',
        fileExplorerInvalidJson:
            'Ongeldige JSON. Herstel syntaxfouten voordat je opslaat!',
        fileExplorerNoFiles: 'Geen bestanden gevonden',
        fileExplorerSearchFiles: 'Bestanden zoeken...',
        fileExplorerNoSearchResults: 'Geen overeenkomende bestanden.',
        startFailed: 'Claw starten mislukt!',
        renameSuccess: 'Claw succesvol hernoemd.',
        renameFailed: 'Claw hernoemen mislukt!',
        renameInvalidChars:
            'Alleen letters, cijfers en streepjes zijn toegestaan!',
        reinstallInstance: 'Instantie herinstalleren',
        reinstallClaw: 'Instantie herinstalleren',
        reinstallClawConfirmation:
            'Dit zal {{agentName}} volledig herinstalleren op deze instantie. Alle configuraties, agents en gegevens worden gereset. Deze actie kan niet ongedaan worden gemaakt. Doorgaan?',
        reinstallInstanceSuccess: 'Instantie succesvol geherinstalleerd.',
        reinstallInstanceFailed: 'Instantie herinstalleren mislukt!',
        reinstallCanceledNavigation:
            'Herinstallatie onderbroken omdat je de pagina hebt verlaten.',
        openControlPanel: 'Configuratiepaneel openen',
        exportData: 'Claw exporteren (.zip)',
        exportAgent: 'Exporteren',
        exportAgentButton: 'Gegevens exporteren',
        exportAgentTooltip:
            'Download deze agent en al zijn gegevens als .zip-bestand.',
        exportAgentInProgress:
            'Exporteren kan enkele minuten duren voor grotere agents.',
        exportStarted: 'Export wordt voorbereid, dit kan even duren...',
        exportSuccess: 'Claw succesvol ge\u00ebxporteerd.',
        exportFailed: 'Claw-gegevens exporteren mislukt!',
        exportCanceledNavigation:
            'Export geannuleerd omdat je de pagina hebt verlaten.',
        scheduleDeletionCanceledNavigation:
            'Geplande verwijdering onderbroken omdat je de pagina hebt verlaten.',
        cancelDeletionCanceledNavigation:
            'Annulering van verwijdering onderbroken omdat je de pagina hebt verlaten.',
        hardDeleteCanceledNavigation:
            'Geforceerde verwijdering onderbroken omdat je de pagina hebt verlaten.',
        exportRateLimited:
            'Je kunt opnieuw exporteren over {{minutes}} minuten.',
        exportRateLimitedOne: 'Je kunt opnieuw exporteren over 1 minuut.',
        configuringTooltip:
            'Dit kan even duren. Het hangt af van OpenClaw, de serverlocatie en Cloudflare DNS.',
        paymentSuccess: 'Je claw wordt aangemaakt en geconfigureerd.',
        dnsSetupBanner:
            'Stel lokale DNS in om je claws te bereiken via subdomein.clawhost.',
        dnsSetupButton: 'DNS instellen',
        dnsSetupSuccess: 'DNS-resolver succesvol geconfigureerd.',
        dnsSetupError: 'DNS-resolver configureren mislukt!',
        userTab: 'Gebruiker',
        adminTab: 'Admin',
        adminTitle: 'Admin',
        adminDescription: 'Beheer alle claws op het platform.',
        adminNoClaws: 'Nog geen claws op het platform.',
        adminAccessDenied: 'Je hebt geen toestemming om deze pagina te openen.',
        owner: 'Eigenaar',
        agentType: 'Agent',
        status: {
            running: 'Actief',
            stopped: 'Gestopt',
            starting: 'Starten',
            stopping: 'Stoppen',
            creating: 'Aanmaken',
            configuring: 'Configureren',
            initializing: 'Instellen',
            migrating: 'Migreren',
            rebuilding: 'Herbouwen',
            restarting: 'Herstarten',
            unreachable: 'Onbereikbaar',
            deleting: 'Verwijderen',
            scheduledDeletion: 'Verwijdering gepland',
            awaitingPayment: 'Wachten op betaling',
            unknown: 'Onbekend',
            checking: 'Controleren'
        },
        tabNotAvailableForAgent: 'Niet beschikbaar voor dit agenttype'
    },
    createClaw: {
        title: 'OpenClaw deployen',
        description: 'Configureer je server en begin met bouwen met AI.',
        clawName: 'Naam',
        clawNamePlaceholder: 'bijv. cozy-panda',
        clawNameInvalidChars:
            'Alleen letters, cijfers en streepjes zijn toegestaan!',
        autoGenerateNameHint: 'Laat leeg om automatisch een naam te genereren.',
        agentType: 'Agenttype',
        agentTypeOpenClaw: 'OpenClaw',
        agentTypeHermes: 'Hermes',
        agentTypeOpenClawDescription: '{{count}} sterren',
        agentTypeHermesDescription: '{{count}} sterren',
        location: 'Locatie',
        locationUnavailable: 'Niet beschikbaar',
        locationUnavailableForPlan: 'Niet beschikbaar',
        plan: 'Server',
        planUnavailable: 'Niet beschikbaar',
        planUnavailableForLocation: 'Niet beschikbaar op deze locatie',
        advancedOptions: 'Geavanceerde optionele opties',
        rootPassword: 'Root-wachtwoord',
        rootPasswordPlaceholder: 'Voer wachtwoord in of genereer er een',
        gatewayTokenPlaceholder: 'bijv. a1b2c3d4e5f6...',
        autoGenerateGatewayTokenHint:
            'Automatisch gegenereerd als het leeg wordt gelaten.',
        autoGeneratePasswordHint:
            'Optioneel. Geen wachtwoord als het leeg wordt gelaten.',
        regeneratePassword: 'Wachtwoord opnieuw genereren',
        gatewayToken: 'Gateway Token',
        regenerateToken: 'Token opnieuw genereren',
        tokenCopied: 'Token gekopieerd.',
        sshKeyOptional: 'SSH-sleutel',
        noSshKeyPasswordOnly: 'Geen SSH-sleutel (alleen wachtwoord)',
        noSshKeysConfigured: 'Geen SSH-sleutels geconfigureerd',
        addSshKeyForPasswordlessLogin:
            'Voeg een SSH-sleutel toe voor inloggen zonder wachtwoord',
        additionalStorageOptional: 'Extra opslag',
        volumeStorage: 'Volume-opslag',
        vpsServer: 'VPS-server',
        openClawPreinstalled: 'OpenClaw voorge\u00efnstalleerd',
        storageWithSize: 'Opslag',
        billingInterval: 'Facturering',
        monthly: 'Maandelijks',
        yearly: 'Jaarlijks',
        yearlySaveBadge: '2 maanden gratis',
        yearlySavings: 'Je bespaart',
        totalMonthly: 'Totaal maandelijks',
        totalYearly: 'Totaal jaarlijks',
        creating: 'Aanmaken...',
        proceedToPayment: 'Betaal ${{amount}} om te deployen',
        agreementNotice: 'Door te deployen ga je akkoord met onze',
        selectServerToContinue: 'Selecteer een server om door te gaan',
        selectLocationToContinue: 'Selecteer een locatie om door te gaan',
        clawCreated: 'Claw aangemaakt.',
        clawCreating: 'Je claw wordt aangemaakt, dit kan even duren...',
        assigning: 'Toewijzen...',
        rootPasswordSaveThis: 'Root-wachtwoord (bewaar dit!)',
        sshCommandUsingKey: 'SSH-commando (met je sleutel)',
        sshCommandWithPassword: 'SSH-commando (met wachtwoord)',
        passwordCopied: 'Wachtwoord gekopieerd.',
        planSpec: '{{cpu}} vCPU / {{memory}} GB RAM / {{disk}} GB SSD',
        volumeUnit: 'GB',
        volumeMin: '0 GB',
        volumeMax: '500 GB'
    },
    sshKeys: {
        title: 'SSH-sleutels',
        description:
            'Beheer je SSH-sleutels voor veilige, wachtwoordloze toegang tot je OpenClaw-instanties.',
        key: 'ssh-sleutel',
        keys: 'ssh-sleutels',
        keyCountDescription: '{{count}} {{label}}',
        addSshKey: 'SSH-sleutel toevoegen',
        howSshKeysWork: 'Hoe verbind je een SSH-sleutel?',
        step1: 'Genereer een SSH-sleutelpaar op je computer (of gebruik een bestaand paar).',
        step2: 'Voeg de publieke sleutel hier toe.',
        step3: 'Selecteer de sleutel bij het aanmaken van een nieuwe instantie.',
        step4: 'Verbind met',
        step4Command: 'ssh root@your-server-ip',
        step4Suffix: '- geen wachtwoord nodig.',
        noSshKeysYet: 'Geen SSH-sleutels',
        noSshKeysDescription:
            'Geen SSH-sleutels toegevoegd aan je account. Je kunt ze op elk moment toevoegen en verbinden met je gedeployde claws.',
        deleteConfirmation:
            'Weet je zeker dat je deze SSH-sleutel wilt verwijderen?',
        deleteKey: 'SSH-sleutel verwijderen',
        deleteKeyConfirmation: 'Weet je zeker dat je wilt verwijderen',
        sshKeyAddedSuccessfully: 'SSH-sleutel succesvol toegevoegd.',
        addSshKeyModalTitle: 'SSH-sleutel toevoegen',
        addSshKeyModalDescription:
            'Voeg een SSH-sleutel toe voor wachtwoordloze authenticatie',
        iHaveAnSshKey: 'Bestaande sleutel',
        generateNewKey: 'Nieuwe aanmaken',
        name: 'Naam',
        namePlaceholder: 'bijv: mijn-macbook',
        publicKey: 'Publieke sleutel',
        publicKeyPlaceholder: 'ssh-rsa AAAA... of ssh-ed25519 AAAA...',
        publicKeyHint: 'Vind je publieke sleutel op',
        publicKeyPath1: '~/.ssh/id_ed25519.pub',
        publicKeyPathOr: 'of',
        publicKeyPath2: '~/.ssh/id_rsa.pub',
        important: 'Belangrijk:',
        dontHaveSshKey: 'Geen SSH-sleutel? Genereer er een:',
        sshKeygenCommand: 'ssh-keygen -t ed25519 -C "your-email@example.com"',
        keyName: 'Sleutelnaam',
        keyNamePlaceholder: 'Mijn gegenereerde sleutel',
        importantAfterGenerating:
            'Na het genereren moet je je priv\u00e9sleutel downloaden en opslaan. We kunnen deze niet herstellen als je hem verliest!',
        generateKeyPair: 'Sleutelpaar genereren',
        orGenerateLocallyRecommended: 'Of genereer lokaal (aanbevolen)',
        runThisInYourTerminal: 'Voer dit uit in je terminal:',
        thenSwitchToIHave:
            'Schakel dan over naar "Bestaande sleutel" en plak de publieke sleutel.',
        savePrivateKeyNow:
            'Sla je priv\u00e9sleutel NU op! Download deze voordat je dit dialoogvenster sluit. Je kunt hem niet meer terugzien.',
        privateKeyKeepSecret: 'Priv\u00e9sleutel (houd geheim!)',
        downloadPrivateKey: 'Priv\u00e9sleutel downloaden',
        publicKeyWillBeSaved: 'Publieke sleutel (wordt opgeslagen)',
        savePublicKey: 'Publieke sleutel opslaan'
    },
    landing: {
        title: 'Deploy OpenClaw. E\u00e9n klik. Klaar.',
        description:
            'Deploy OpenClaw op je eigen VPS met \u00e9\u00e9n klik. Zelfhostbare cloudhosting met volledige root-toegang, wereldwijde locaties en transparante prijzen.',
        badge: 'OpenClaw & Hermes in de cloud',
        tutorialBadge: 'Bekijk. Deploy.',
        tutorialVideoThumbnail: 'ClawHost handleiding videominiatuur',
        clawhostGoLogoAlt: 'ClawHost Go',
        trustMrrBadgeAlt: 'TrustMRR verified revenue badge',
        macosPreviewTime: '22:12',
        heroTitle1: 'Implementeer OpenClaw.',
        heroTitle2: 'E\u00e9n klik. Klaar.',
        heroDescription:
            'Deploy OpenClaw- en Hermes-agents in de cloud of lokaal met \u00e9\u00e9n klik \u2014 bouw, verbind en schaal je AI-agents sneller met ClawHost.',
        selfHost: 'Open Source',
        startingPrice: 'Vanaf',
        locations: 'Locaties',
        servers: 'Servers',
        zeroCount: 'Nul',
        zeroConfig: 'Geen configuratie',
        features: 'Functies',
        whyClawHost: 'Alles-in-\u00e9\u00e9n functies',
        featuresDescription:
            'Waarom we het proberen waard zijn, functies liegen niet.',
        zeroConfigDescription:
            'Sla uren server- en OpenClaw-configuratie over. Het is voorge\u00efnstalleerd en klaar binnen minuten.',
        ownedData: '100% eigen data',
        ownedDataDescription:
            'Je eigen server, je eigen data. Geen gedeelde infrastructuur, geen logs, geen derden. 24/7 online.',
        fullSpeed: 'Volledige snelheid',
        fullSpeedDescription:
            'Dedicated VPS-resources betekenen geen throttling, volledige bandbreedte en razendsnel internet.',
        globalLocations: 'Wereldwijde locaties',
        globalLocationsDescription:
            "Implementeer OpenClaw en Hermes in meerdere wereldwijde regio's en kies de locatie die het dichtst bij je is.",
        fullSshAccess: 'Directe SSH-toegang',
        fullSshAccessDescription:
            'Krijg direct toegang tot je serverterminal vanuit het platform. Geen externe SSH-clients nodig.',
        secure: 'Veilig',
        secureDescription:
            'Standaard beschermd tegen SSL-kwetsbaarheden, malware en veelvoorkomende beveiligingsbedreigingen.',
        payAsYouGo: 'Eenvoudige prijzen',
        payAsYouGoDescription:
            'Prijzen gebaseerd op wat je nodig hebt. Geen gedwongen hoge rekeningen voor servers van lage kwaliteit. Annuleer wanneer je wilt.',
        bringYourCredits: 'Neem je eigen credits mee',
        bringYourCreditsDescription:
            'Gebruik je eigen Anthropic API-sleutel of Claude-abonnement. Betaal Anthropic direct — geen toeslag.',
        customSubdomains: 'Online toegang',
        customSubdomainsDescription:
            'Vergeet lokale netwerken. Krijg veilig toegang tot je OpenClaw vanaf overal met een subdomein.',
        autoUpdates: 'Versiebeheer',
        autoUpdatesDescription:
            'Schakel met één klik naar elke OpenClaw- of Hermes-versie. Blijf altijd up-to-date of rol terug wanneer nodig.',
        openclawControl: 'Servermonitoring',
        openclawControlDescription:
            'Monitor je OpenClaw- en Hermes-servers met realtime metrics, logs en diagnostiek.',
        clawHostControl: 'Volledige servertoegang',
        clawHostControlDescription:
            'Browserterminal, bestandsverkenner, logs, diagnostiek en versiebeheer — alles vanuit je dashboard.',
        multipleClaws: 'Meerdere agenten',
        multipleClawsDescription:
            'Deploy en beheer meerdere OpenClaw- en Hermes-agenten vanuit \u00e9\u00e9n dashboard. Schaal mee naarmate je groeit.',
        pricing: 'Prijzen',
        simpleTransparentPricing: 'Eenvoudige, transparante prijzen',
        pricingDescription:
            'Kies een plan dat bij je past. Geen verborgen kosten.',
        planColumn: 'Server',
        vCpuColumn: 'vCPU',
        ramColumn: 'RAM',
        storageColumn: 'Opslag',
        monthlyColumn: 'Prijs',
        tierShared: 'Gedeelde vCPU',
        tierDedicated: 'Dedicated vCPU',
        tierArm: 'Ampere (ARM)',
        tierRegular: 'Reguliere prestaties',
        tierHighPerformance: 'Hoge prestaties',
        tierHighFrequency: 'Hoge frequentie',
        recommended: 'Aanbevolen',
        perMonth: '/mnd',
        perYear: '/jr',
        pricePerMonth: '${{price}}/mo',
        pricePerYear: '${{price}}/yr',
        volumePricePerMonth: '+${{price}}/mo',
        startingPriceValue: '${{price}}/mo',
        deploy: 'Deployen',
        select: 'Selecteren',
        selectPlanLabel: 'Selecteer {{plan}} plan',
        deployPlanLabel: '{{plan}} plan implementeren',
        openClawPreinstalled: 'OpenClaw voorge\u00efnstalleerd',
        unlimitedBandwidth: 'Onbeperkte bandbreedte',
        rootSshAccess: 'Volledige root SSH-toegang',
        onlineAllDay: '24/7 online',
        showAllPlans: 'Alle plannen tonen',
        simplePricing: 'Vereenvoudigd',
        planStarter: 'Starter',
        planStarterDesc: 'Voor persoonlijke projecten en experimenten',
        planGrowth: 'Growth',
        planGrowthDesc: 'Voor productieworkloads',
        planPro: 'Pro',
        planProDesc: 'Voor groeiende bedrijven',
        planBusiness: 'Business',
        planBusinessDesc: 'Voor grootschalige operaties',
        featureCpu: '{{count}} vCPU',
        featureRam: '{{count}} GB RAM',
        featureDisk: '{{count}} GB SSD',
        choosePlan: 'Plan kiezen',
        mostPopular: 'Meest populair',
        featurePreinstalled: 'Agent vooraf geïnstalleerd',
        featureBandwidth: 'Onbeperkte bandbreedte',
        featureSsh: 'Root SSH-toegang',
        featureUptime: '24/7 online',
        featureDedicatedCpu: 'Dedicated CPU',
        featureEmailSupport: 'E-mailondersteuning',
        fastInternet: 'Snel internet',
        emailSupport: 'E-mailondersteuning',
        faqTitle: 'Vragen',
        frequentlyAskedQuestions: 'Veelgestelde vragen',
        faqDescription: 'Elke veelgestelde vraag, beantwoord.',
        faq1Question: 'Wat is ClawHost?',
        faq1Answer:
            'ClawHost is een platform dat OpenClaw en Hermes voor iedereen toegankelijk maakt. Zowel niet-technische gebruikers als ontwikkelaars kunnen ze draaien zonder infrastructuur te beheren. Wij regelen servers, uptime, beveiliging en onderhoud — jij gebruikt gewoon je agents.',
        faq2Question: 'Wat is OpenClaw?',
        faq2Answer:
            'OpenClaw is een zelfgehoste beveiligde toegangslaag voor je AI-tools en -diensten. Het is voorgeconfigureerd voor beveiliging en prestaties, zodat je het kunt deployen en direct kunt verbinden.',
        faqHermesQuestion: 'Wat is Hermes?',
        faqHermesAnswer:
            'Hermes is een autonome AI-agent met webbrowsing, agendabeheer, multi-model redenering en browserautomatisering. Hij is op elke ClawHost-server vooraf geïnstalleerd naast OpenClaw.',
        faq3Question:
            'Hoe verschilt dit van andere AI-tools of gehoste platforms?',
        faq3Answer:
            'In tegenstelling tot gehoste AI-tools krijg je met ClawHost een echte server met OpenClaw en Hermes geïnstalleerd. Je bezit de infrastructuur, beheert alles en wordt niet beperkt door een gedeeld platform of model.',
        faq4Question: 'Heb ik technische kennis nodig?',
        faq4Answer:
            'Nee. Wij regelen alle infrastructuur, installatie en onderhoud. Je kunt OpenClaw via de UI configureren en beheren, terwijl Hermes via eenvoudige terminalcommando’s draait — zonder zelf servers of infrastructuur aan te raken.',
        faq5Question: 'Welke locaties zijn beschikbaar?',
        faq5Answer:
            "We bieden meerdere serverlocaties wereldwijd, waaronder de VS, Europa en meer. Je kunt OpenClaw indien nodig op meerdere servers in verschillende regio's implementeren.",
        faq6Question: 'Hoeveel kost het?',
        faq6Answer:
            'De prijzen zijn afhankelijk van de server die je selecteert. Met meerdere serveropties van instapniveau tot hoge prestaties kies je wat past bij je behoeften en budget.',
        faq7Question: 'Kan ik mijn agent direct via een link benaderen?',
        faq7Answer:
            'OpenClaw is bereikbaar via een subdomein-URL met volledige web-UI. Hermes draait via terminalcommando’s over SSH — geen link, maar volledige controle vanuit het terminal van je server.',
        comparison: 'Vergelijking',
        comparisonTitle: 'Hoe wij anders zijn',
        comparisonDescription:
            'Er is maar \u00e9\u00e9n vergelijkbaar platform, en onze aanpak richt zich op echte servers en volledig eigendom in plaats van beperkingen.',
        others: 'Anderen',
        comparisonOpenClawUs: 'Volledige toegang tot OpenClaw',
        comparisonOpenClawOthers: 'Alleen chat, geen beheer',
        comparisonPricingUs: 'Transparante prijzen, duidelijke specificaties',
        comparisonPricingOthers:
            'Verborgen specificaties, onduidelijke prijzen',
        comparisonOwnershipUs: 'Je bezit je server volledig',
        comparisonOwnershipOthers: 'Je bezit niets',
        comparisonSubdomainUs: 'Toegang via subdomein',
        comparisonSubdomainOthers: 'Alleen toegang via externe platformen',
        comparisonInfraUs: 'On-demand infrastructuur',
        comparisonInfraOthers: 'Beperkte servers',
        comparisonDataUs: 'Bezit je eigen data',
        comparisonDataOthers: 'Bezit je data niet',
        comparisonMultipleUs: 'Meerdere OpenClaw- en Hermes-agents',
        comparisonMultipleOthers: 'Alleen \u00e9\u00e9n OpenClaw',
        comparisonOpenSourceUs: 'Volledig open source',
        comparisonOpenSourceOthers: 'Gesloten broncode',
        comparisonExportUs: 'Exporteer OpenClaw en Hermes overal',
        comparisonExportOthers: 'Vendorlock-in',
        comparisonProvidersUs: 'Meerdere serverproviders',
        comparisonProvidersOthers: 'Slechts \u00e9\u00e9n provider',
        comparisonVersionUs: 'Versiewisseling met \u00e9\u00e9n klik',
        comparisonVersionOthers: 'Alleen handmatige updates',
        comparisonTerminalUs: 'Ingebouwde webterminal',
        comparisonTerminalOthers: 'SSH-client vereist',
        seeFullComparison: 'Volledige vergelijking bekijken',
        comparisonCtaText:
            'We vergelijken met SimpleAgent, MyAgent.ai en meer \u2014 functie voor functie.',
        selfHostInstead: 'Zelf hosten'
    },
    blog: {
        readingTime: '{{minutes}} min leestijd',
        ctaTitle: 'Deploy OpenClaw en Hermes met één klik',
        ctaDescription:
            'Krijg een dedicated server met OpenClaw en Hermes vooraf geïnstalleerd. Volledige root-toegang, wereldwijde locaties en klaar in minuten. Hij is altijd van jou. Vanaf $25.',
        ctaDeploy: 'Agent deployen',
        ctaGitHub: 'Bekijk op GitHub'
    },
    changelog: {
        title: 'Changelog',
        description:
            'Volg updates, nieuwe functies en verbeteringen aan ClawHost.',
        subtitle:
            'Alle updates, nieuwe functies en verbeteringen aan ClawHost.',
        release14Date: '1 april 2026',
        release14Title: 'Hetzner-migratie, affiliate-systeem & nieuwe talen',
        release14Description:
            'Alle infrastructuur gecentraliseerd op Hetzner voor de beste prijzen en prestaties, het affiliate-systeem gelanceerd met 15% commissie, 10 nieuwe talen toegevoegd en interne tools gebouwd voor stabiele versie-ondersteuning.',
        release14Feature1:
            'DigitalOcean en Vultr verwijderd — alle infrastructuur draait nu exclusief op Hetzner met oneindige capaciteit en zonder provider-beperkingen',
        release14Feature2:
            'Affiliate-systeem waarmee gebruikers 15% commissie verdienen op elke doorverwezen bestelling',
        release14Feature3:
            '10 nieuwe talen toegevoegd: Chinees, Hindi, Arabisch, Russisch, Japans, Turks, Italiaans, Pools, Nederlands en Portugees',
        release14Feature4:
            'Interne tools voor stabiele functieondersteuning voor huidige OpenClaw-versies, zonder ondersteuning voor oudere versies',
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
        release15Date: '11 april 2026',
        release15Title: 'Vereenvoudiging & aangepaste subdomeinen',
        release15Description:
            'Vereenvoudiging van het platform door beheerde functies naar OpenClaw te migreren, de playground-weergave te verwijderen en aanpasbare subdomeinen te introduceren.',
        release15Feature1:
            'Vereenvoudiging en migratie van beheerde functies naar OpenClaw, geen ClawHost-chat, agents, kanalen, variabelen en vaardigheden meer',
        release15Feature2:
            'Enhanced file explorer with full editing support, 100+ language syntax highlighting, and export as .zip',
        release15Feature3:
            'Removed playground view for a cleaner, more focused dashboard experience',
        release15Feature4:
            'Changeable custom subdomains, update your claw subdomain to your loved one',
        release12Date: '14 maart 2026',
        release12Title: 'Jaarplannen, spraakmodus & meer',
        release12Description:
            'Jaarabonnementen met 2 maanden gratis, spraakmodus, instantie herinstallatie en een eerste landingspagina voor ClawHost Go.',
        release12Feature1:
            'Landingspagina voor ClawHost Go, lokale hosting met ClawHost',
        release12Feature2:
            'Jaarabonnement met 2 maanden gratis bij jaarlijks abonneren',
        release12Feature3:
            'Spraakmodus om te communiceren met de OpenClaw-agents gehost op ClawHost',
        release12Feature4:
            'Herinstalleer OpenClaw op je instantie voor een nieuwe start, eenmaal per dag beschikbaar',
        release11Date: '28 februari 2026',
        release11Title:
            'Tekst-naar-spraak, terminal, chattabbladen & bestandsverkenner',
        release11Description:
            'Luister naar agent-antwoorden met tekst-naar-spraak, communiceer direct met je VPS via terminal, navigeer sneller door chats met zijbalktabbladen en verken bestanden met de verbeterde bestandsverkenner.',
        release11Feature1:
            'Tekst-naar-spraak op agent-berichten in de playground',
        release11Feature2:
            'Terminal om direct vanuit het dashboard met je VPS-instanties te communiceren',
        release11Feature3:
            'Chattabbladen in de zijbalk voor eenvoudige toegang en navigatie',
        release11Feature4:
            'Verbeteringen aan de bestandsverkenner met zoekbalk om door bestanden te zoeken',
        release11Feature5: 'Berichttijdstempels geven nu de juiste tijd weer',
        release10Date: '23 februari 2026',
        release10Title: 'Functieverzoeken, bestandsverkenner & bugfixes',
        release10Description:
            'Door de community aangestuurde functieverzoeken, uitgebreide bestandsbewerkingsondersteuning en diverse bugfixes.',
        release10Feature1:
            'Functieverzoeken automatisch beheerd en gepubliceerd door OpenClaw-agents',
        release10Feature3:
            'Probleem opgelost waarbij het wisselen van modelprovider niet werd weergegeven en het oorspronkelijke model bleef gebruiken',
        release10Feature4:
            'Diverse verbeteringen en bugfixes op het hele platform',
        release10Feature5:
            'TypeScript-, Markdown- en platte tekstbestanden zijn nu bewerkbaar in de bestandsverkenner',
        release9Date: '21 februari 2026',
        release9Title: 'Vergelijkingen, playground-herstructurering & meer',
        release9Description:
            "Vergelijkingspagina's met concurrenten, herstructurering van playground-functies, meertalige ondersteuning en algemene prestatieverbeteringen.",
        release9Feature1: 'Ondersteuning voor donker en licht thema',
        release9Feature2:
            'Meertalige ondersteuning met Engels, Frans, Spaans en Duits',
        release9Feature3:
            "Vergelijkingspagina's met volledige uitsplitsingen tegen concurrenten",
        release9Feature4:
            'OpenClaw-versies, upgrade met \u00e9\u00e9n klik of installeer elke versie direct',
        release9Feature5:
            'Herstructurering van de playground-functiestructuur en vereenvoudigingen',
        release9Feature6:
            'Verbeteringen in prestaties, stabiliteit en responsiviteit',
        release8Date: '18 februari 2026',
        release8Title: 'Licht thema, prestaties & stabiliteit',
        release8Description:
            'Ondersteuning voor licht thema, prestatie- en ervaringsverbeteringen, en verbeteringen in stabiliteit en responsiviteit.',
        release8Feature1: 'Licht, donker en systeemthemamodi',
        release8Feature2: 'Prestatie- en ervaringsverbeteringen',
        release8Feature3: 'Verbeteringen in stabiliteit en responsiviteit',
        release7Date: '16 februari 2026',
        release7Title: 'Chat-herstructurering & spraakinvoer',
        release7Description:
            'Grote chat- en playground-verbeteringen met spraakinteractie en bestandsbijlagen voor agents.',
        release7Feature1:
            'Chat- en playground-herstructurering voor een soepelere, responsievere ervaring',
        release7Feature2:
            'Spraakinteractie met chats, neem spraak op en transcribeer direct in de browser',
        release7Feature4:
            'Bijlagenweergave en -gebruik voor agents, stuur afbeeldingen en documenten in chat',
        release6Date: '16 februari 2026',
        release6Title: 'Agent-chat',
        release6Description:
            'Volledige controle over je OpenClaw-agents. Beheer en chat met alles direct vanuit het dashboard.',
        release6Feature3:
            'Chat met je agents vanuit de playground, communiceer met elke agent in realtime',
        release6Feature4:
            'Inloggen met Google of GitHub, snelle, veilige authenticatie zonder e-mailcodes',
        release1Date: '8 februari 2026',
        release1Title: 'Eerste release',
        release1Description:
            'De eerste offici\u00eble release van ClawHost. Deploy OpenClaw op je eigen VPS met \u00e9\u00e9n klik.',
        release1Feature1: 'OpenClaw-deployment met \u00e9\u00e9n klik',
        release1Feature2:
            'Dashboard om claws te beheren, instanties starten, stoppen, herstarten en verwijderen',
        release1Feature3:
            '18 serverplannen met dedicated vCPU, RAM en opslagopties',
        release1Feature4: '6 serverlocaties in de VS, Europa en Azi\u00eb',
        release1Feature5: 'SSH-sleutelbeheer voor wachtwoordloze servertoegang',
        release1Feature6: 'Ondersteuning voor extra volume-opslag tot 10 TB',
        release1Feature7: 'Magic link-authenticatie, geen wachtwoorden nodig',
        release1Feature8:
            'Online toegang tot OpenClaw via beveiligde subdomeinen',
        release1Feature9:
            'Betalingsintegratie met transparante prijzen per server',
        release1Feature10: 'Factureringsgeschiedenis en factuurbeheer',
        release1Feature11:
            'Automatische provisioning met OpenClaw voorge\u00efnstalleerd en geconfigureerd',
        release2Date: '8 februari 2026',
        release2Title: 'Changelog & meer',
        release2Description:
            'Een nieuwe manier om op de hoogte te blijven van alles rondom ClawHost.',
        release2Feature1:
            'Changelogpagina om alle platformupdates en releases te volgen',
        release3Date: '10 februari 2026',
        release3Title: 'Server-inzichten',
        release3Description:
            'Dieper inzicht en controle over je servers, direct vanuit het dashboard.',
        release3Feature1:
            'Realtime serverlogs direct gestreamd in het dashboard',
        release3Feature2:
            'Serverdiagnostiek met geautomatiseerde reparatie met \u00e9\u00e9n klik voor serviceproblemen',
        release3Feature3:
            'Ingebouwde bestandsverkenner en JSON-editor voor serverconfigiuratiebestanden',
        release4Date: '14 februari 2026',
        release4Title: 'Agents & data-export',
        release4Description:
            'Agent-playground, multi-agentbeheer en draagbare data-export voor je OpenClaw-instanties.',
        release4Feature1:
            'Agent-playground en overzicht met \u00e9\u00e9n klik, voeg meerdere agents toe en beheer ze',
        release4Feature2: 'Exporteer je OpenClaw als een draagbaar ziparchief',
        release4Feature3:
            'Interactieve playground met grafiekgebaseerde visualisatie van Claws en agents',
        release4Feature4:
            'Raster- en lijstweergave-schakelaar verwijderd ten gunste van een uniforme dashboardindeling'
    },
    clawDetail: {
        noAgentsYet: 'Geen Agenten',
        noAgentsDescription: 'Deploy je eerste Agent om ermee te communiceren.',
        collapseSidebar: 'Zijbalk inklappen',
        expandSidebar: 'Zijbalk uitklappen',
        selectClaw: 'Selecteer een Agent',
        selectClawDescription:
            'Kies een Agent in de zijbalk om de details te bekijken.',
        closeDetails: 'Sluiten',
        tabOverview: 'Overzicht',
        overviewTitle: 'Gateway-overzicht',
        overviewGatewayStatus: 'Gatewaystatus',
        overviewOnline: 'Online',
        overviewOffline: 'Offline',
        overviewVersion: 'Versie',
        overviewUptime: 'Uptime',
        overviewSessions: 'Sessies',
        overviewSessionsCount: '{{count}} actief',
        overviewNoSessions: 'Geen actieve sessies',
        overviewSessionName: 'Sessie',
        overviewSessionModel: 'Model',
        overviewSessionMessages: 'Berichten',
        overviewSessionLastActive: 'Laatst actief',
        overviewModels: 'Modellen',
        overviewError: 'Kan overzicht niet laden!',
        overviewErrorDescription:
            'Kan geen verbinding maken met de OpenClaw-gateway. Controleer of de instantie draait.',
        overviewUnsupportedTitle: 'Overzicht niet ondersteund',
        overviewUnsupportedDescription:
            'Uw OpenClaw-versie ondersteunt de overzichtsfunctie niet. Werk bij naar de nieuwste versie.',
        overviewHermesTitle: 'Hermes draait in de terminal',
        overviewHermesDescription:
            'Hermes is een TUI-agent — open het tabblad Terminal en voer `hermes` uit om een sessie te starten. Met de tabbladen Bestanden en Versies kunt u de configuratie bewerken en bijwerken.',
        overviewHermesOpenTerminal: 'Terminal openen',
        viewDocs: 'Documentatie',
        overviewUptimeDays: '{{days}}d {{hours}}u {{minutes}}m',
        overviewUptimeHours: '{{hours}}u {{minutes}}m',
        overviewUptimeMinutes: '{{minutes}}m',
        overviewService: 'Service',
        overviewServiceActive: 'Actief',
        overviewServiceInactive: 'Inactief',
        overviewPort: 'Port 18789',
        overviewPortOpen: 'Luisterend',
        overviewPortClosed: 'Gesloten',
        overviewReady: 'Gereed',
        overviewNotReady: 'Niet gereed',
        overviewConfiguration: 'Configuratie',
        overviewBrowser: 'Browser',
        overviewCommands: 'Shell-opdrachten',
        overviewTools: 'Hulpmiddelen',
        overviewSubdomain: 'Subdomein',
        overviewInstanceStatus: 'Instantiestatus',
        overviewModel: 'Model',
        overviewAgents: 'Agenten',
        overviewMemoryStatus: 'Geheugen',
        overviewHeartbeat: 'Heartbeat',
        overviewEvents: 'Gebeurtenissen',
        overviewProbes: 'Probes',
        overviewPlugins: 'Plugins',
        tabPreview: 'Voorbeeld',
        previewNotEnabled:
            'Voorbeeld is niet ingeschakeld voor deze instantie.',
        previewNotEnabledDescription:
            'Schakel voorbeeld in om uw agent direct in het dashboard in te sluiten.',
        previewEnable: 'Voorbeeld inschakelen',
        previewEnabling: 'Inschakelen...',
        previewEnabled: 'Voorbeeld ingeschakeld.',
        previewEnableFailed: 'Voorbeeld inschakelen mislukt!',
        previewEnableCanceledNavigation:
            'Voorbeeld inschakelen onderbroken omdat je de pagina hebt verlaten.',
        previewError: 'Voorbeeld kon niet worden geladen.',
        previewErrorDescription:
            'De agent is mogelijk offline of onbereikbaar.',
        previewRetry: 'Opnieuw proberen',
        tabInfo: 'Info',
        tabLogs: 'Logs',
        tabTerminal: 'Terminal',
        terminalConnecting: 'Verbinden met terminal...',
        terminalDisconnected: 'Terminal losgekoppeld.',
        terminalError: 'Verbinden met terminal mislukt!',
        terminalReconnect: 'Opnieuw verbinden',
        tabDisabledConfiguring:
            'Beschikbaar zodra de instantie klaar is met configureren.',
        tabDisabledAwaitingPayment:
            'Beschikbaar zodra de betaling is verwerkt.',
        creatingTitle: 'Je agent wordt ingesteld',
        creatingDescription:
            'Dit duurt meestal een minuut of twee. Je kunt deze pagina veilig sluiten en later terugkomen.',
        creatingDescriptionLocal:
            'Dit duurt meestal even. Houd de app open tot het klaar is.',
        configuringTitle: 'OpenClaw wordt geïnstalleerd',
        configuringTitleHermes: 'Hermes wordt geïnstalleerd',
        loadingTipHermes1:
            'Hermes is een TUI-agent — open na het opstarten het tabblad Terminal om ermee te chatten.',
        loadingTipHermes2:
            'Configureer modelproviders (OpenRouter, Anthropic, enz.) in ~/.hermes/.env via het tabblad Bestanden.',
        loadingTipHermes3:
            'Verbind Telegram, Discord of Slack vanuit de Terminal met `hermes gateway install`.',
        configuringDescription:
            'Dit duurt meestal een minuut of twee. Je kunt deze pagina veilig sluiten en later terugkomen.',
        configuringDescriptionLocal:
            'De agent-runtime wordt lokaal geïnstalleerd. Houd de app open tot het klaar is.',
        awaitingPaymentTitle: 'Wacht op betaling',
        awaitingPaymentDescription:
            'Voltooi de betaling om het inrichten van je agent te starten. Deze reservering verloopt over een uur.',
        awaitingPaymentAction: 'Betaling voltooien',
        loadingTip1:
            'Wist je dat je meerdere agents kunt draaien binnen \u00e9\u00e9n OpenClaw?',
        loadingTip2: 'Wist je dat OpenClaw open-source is?',
        loadingTip3:
            'ClawHost is het allereerste project dat OpenClaw-hosting met \u00e9\u00e9n klik mogelijk maakt.',
        loadingTip4:
            'Je kunt je agent bereiken via SSH of de ingebouwde terminal.',
        loadingTip5: 'Je agent krijgt automatisch een eigen subdomein.',
        loadingTip6:
            'Je kunt het pictogram en de naam van je agent op elk moment aanpassen via Instellingen.',
        loadingTip7: 'Al het verkeer naar je agent is versleuteld met TLS.',
        loadingTip8:
            'Je kunt CPU-, geheugen- en schijfgebruik monitoren in het Monitor-tabblad.',
        loadingTip9: 'Hulp nodig? Word lid van onze community op Discord.',
        loadingTip10:
            'Je kunt de volledige configuratie van je agent exporteren als back-up.',
        loadingTip11:
            'SSH-sleutels kunnen worden toegepast op draaiende instanties zonder opnieuw te installeren.',
        loadingTip12:
            'Je kunt je root-wachtwoord en gateway-token roteren vanuit het Beveiliging-tabblad.',
        loadingTip13:
            "ClawHost ondersteunt servers in meerdere regio's in Europa en de VS.",
        tabSettings: 'Instellingen',
        featureVersionUnsupported:
            '{{feature}} niet ondersteund op {{version}}',
        featureVersionUnsupportedDescription:
            'We ondersteunen het beheer van {{feature}} met deze versie niet via onze interface. U kunt het nog steeds beheren via SSH, Terminal of het OpenClaw-configuratiepaneel.',
        featureVersionUnsupportedButton: 'Ga naar Versies',
        featureVersionUnsupportedSupported: 'Ondersteunde versies:',
        featureVersionUnsupportedNewer: 'nieuwere versies',
        tabVersions: 'Versies',
        tabFiles: 'Bestandsverkenner',
        tabMonitor: 'Monitor',
        tabVolumes: 'Opslag',
        tabSecurity: 'Beveiliging',
        securitySSHKey: 'SSH-sleutel',
        securitySSHKeyHint:
            'Wordt toegepast op de draaiende instantie en gebruikt bij het opnieuw installeren.',
        securityPassword: 'Root-wachtwoord',
        securityGatewayToken: 'Gateway-token',
        securityHostKey: 'Hostsleutel-vingerafdruk',
        securityRotatePassword: 'Wachtwoord roteren',
        securityRotateToken: 'Token roteren',
        securityRandomize: 'Willekeurig maken',
        securitySavePassword: 'Wachtwoord opslaan',
        securitySaveToken: 'Token opslaan',
        volumesTitle: 'Volumes',
        volumesCount: '{{count}} volumes',
        volumesEmpty: 'Geen volumes gekoppeld.',
        volumesEmptyDescription:
            'Deze instantie heeft geen persistente opslagvolumes.',
        volumesReadOnly:
            'Opslag kan alleen worden toegevoegd tijdens het aanmaken van een instantie. Om opslag toe te voegen, deployt u een nieuwe instantie met de gewenste volumegrootte, of neem contact op met het',
        volumesContactSupport: 'supportteam',
        metricsTitle: 'Serverstatistieken',
        metricsLive: 'Live',
        metricsCpu: 'CPU-gebruik',
        metricsMemory: 'Geheugengebruik',
        metricsDisk: 'Schijfgebruik',
        metricsNetwork: 'Netwerk',
        metricsLoadAvg: 'Gemiddelde belasting',
        metricsProcesses: 'Topprocessen',
        metricsUptime: 'Uptime',
        metricsUsed: 'Gebruikt',
        metricsAvailable: 'Beschikbaar',
        metricsTotal: 'Totaal',
        metricsReceived: 'Ontvangen',
        metricsSent: 'Verzonden',
        metricsLoad1: '1 min',
        metricsLoad5: '5 min',
        metricsLoad15: '15 min',
        metricsProcessPid: 'PID',
        metricsProcessUser: 'Gebruiker',
        metricsProcessCpu: 'CPU %',
        metricsProcessMem: 'MEM %',
        metricsProcessCommand: 'Opdracht',
        metricsError: 'Kan statistieken niet laden!',
        metricsErrorDescription:
            'Kan geen verbinding maken met de server om statistieken op te halen. Controleer of de instantie actief is.',
        metricsAutoRefresh: 'Automatisch vernieuwen elke {{seconds}} seconden',
        tabBilling: 'Billing',
        billingEmpty: 'No billing history for this instance.',
        tabServer: 'Server',
        serverIpAddress: 'IP-adres',
        reinstallDescription:
            '{{agentName}} opnieuw installeren op deze server. Dit zal de installatie resetten maar je gegevens behouden. Doe dit alleen als het nodig is.',
        versionsSearch: 'Versies zoeken...',
        versionsSearchCount: '{{count}} versies doorzoeken...',
        versionsEmpty: 'Geen versies gevonden',
        versionsEmptyDescription:
            'Geen versies komen overeen met je zoekopdracht.',
        versionsErrorDescription:
            'Versies laden mislukt. Controleer je verbinding en probeer het opnieuw!',
        versionsChangelog: 'Changelogs bekijken op npm',
        versionCurrent: 'Huidig',
        versionLatest: 'Nieuwste',
        updateAvailable: 'A newer version of OpenClaw is available',
        updateAvailableDescription:
            'A new version of OpenClaw ({{version}}) is available for your instance.',
        updateAvailableDescriptionHermes:
            'A new version of Hermes ({{version}}) is available for your instance.',
        goToVersions: 'Go to Versions',
        versionInstall: 'Installeren',
        versionInstalling: 'Installeren...',
        versionInstallSuccess:
            'Versie {{version}} succesvol ge\u00efnstalleerd.',
        versionInstallFailed: 'Versie installeren mislukt!',
        installVersionCanceledNavigation:
            'Versie-installatie onderbroken omdat je de pagina hebt verlaten.',
        versionDownloads: '{{count}} downloads',
        versionChangelog: 'Changelog',
        versionOutdated: 'Verouderd',
        versionSupported: 'Ondersteund',
        versionSupportedTooltip:
            'Met deze versie kunt u OpenClaw via de interface beheren',
        versionInstallConfirmTitle: 'Versie {{version}} installeren',
        versionInstallConfirmDescription:
            'Het wisselen van versie kan onverwacht gedrag veroorzaken of extra handmatige configuratie vereisen, vooral voor nieuwere versies die nog niet volledig zijn geverifieerd. Weet je zeker dat je wilt doorgaan?',
        settingsIcon: 'Pictogram',
        settingsIconDescription: 'Klik om het agentpictogram te wijzigen.',
        settingsIconRandomize: 'Willekeurig',
        settingsIconRemove: 'Pictogram verwijderen',
        settingsBackground: 'Achtergrond',
        settingsBackgroundReset: 'Resetten',
        settingsName: 'Naam',
        settingsNamePlaceholder: 'Voer clawnaam in',
        settingsNameDescription: 'Alleen letters, cijfers en streepjes.',
        subdomain: 'Subdomein',
        subdomainPlaceholder: 'Voer subdomein in',
        subdomainDescription:
            'Kleine letters en cijfers, {{min}}-{{max}} tekens.',
        subdomainInvalid: 'Gebruik {{min}}-{{max}} kleine letters en cijfers.',
        subdomainUpdated: 'Subdomein succesvol bijgewerkt.',
        subdomainUpdateFailed: 'Subdomein bijwerken mislukt!',
        subdomainInUse: 'Dit subdomein wordt gebruikt door een andere claw!',
        settingsDetails: 'Details',
        settingsDangerZone: 'Gevarenzone',
        settingsDangerZoneDescription:
            'Je instantie wordt verwijderd aan het einde van je huidige factureringsperiode.',
        settingsDangerZoneDescriptionLocal:
            'Dit verwijdert de agent en al zijn bestanden permanent.',
        settingsScheduledDeletionDescription:
            'Gepland voor verwijdering op {{date}}. Annuleer om je instantie draaiend en je abonnement actief te houden.',
        settingsSave: 'Opslaan',
        settingsSaving: 'Opslaan...',
        settingsUpdated: 'Instellingen bijgewerkt.',
        settingsUpdateFailed: 'Instellingen bijwerken mislukt!',
        saveCanceledNavigation:
            'Opslaan onderbroken omdat je de pagina hebt verlaten.',
        savePasswordCanceledNavigation:
            'Wachtwoord opslaan onderbroken omdat je de pagina hebt verlaten.',
        saveGatewayTokenCanceledNavigation:
            'Gateway-token opslaan onderbroken omdat je de pagina hebt verlaten.',
        saveSSHKeyCanceledNavigation:
            'SSH-sleutel opslaan onderbroken omdat je de pagina hebt verlaten.',
        mockLogStarting: 'OpenClaw-agent starten...',
        mockLogLoadingModel: 'Model laden: claude-sonnet-4-5',
        mockLogAgentReady: 'Agent gereed op poort 3000',
        mockLogConnected: 'Verbonden met gateway',
        mockLogsContent:
            '2026-02-14T10:23:41Z {{starting}}\n2026-02-14T10:23:42Z {{loadingModel}}\n2026-02-14T10:23:43Z {{agentReady}}\n2026-02-14T10:23:44Z {{connected}}\n2026-02-14T10:24:01Z {{requestReceived}}\n2026-02-14T10:24:03Z {{responseSent1}}\n2026-02-14T10:25:12Z {{requestReceived}}\n2026-02-14T10:25:14Z {{responseSent2}}\n2026-02-14T10:26:30Z {{healthCheck}}',
        mockLogRequestReceived: 'Verzoek ontvangen: /chat',
        mockLogResponseSent1: 'Antwoord verzonden (1.2s)',
        mockLogResponseSent2: 'Antwoord verzonden (1.8s)',
        mockLogHealthCheck: 'Gezondheidscontrole geslaagd'
    },
    privacy: {
        title: 'Privacybeleid',
        description:
            'Lees hoe ClawHost je persoonlijke gegevens verzamelt, gebruikt en beschermt.',
        lastUpdated: 'Laatst bijgewerkt: 14 maart 2026',
        introTitle: '1. Inleiding',
        introText:
            'ClawHost ("wij", "ons" of "onze") zet zich in voor de bescherming van je privacy. Dit Privacybeleid legt uit hoe wij je informatie verzamelen, gebruiken, openbaar maken en beschermen wanneer je onze Service gebruikt.',
        authTitle: '2. Authenticatie',
        authText:
            'ClawHost gebruikt Google Firebase Authentication om gebruikersaccounts te beheren. Je kunt inloggen met e-mail, Google of GitHub. Door deze inlogmethoden te gebruiken, ga je akkoord met hun respectieve voorwaarden en privacybeleid. Deze providers kunnen basisgegevens verzamelen zoals je e-mailadres, naam en apparaatinformatie. Wij slaan alleen je e-mailadres en weergavenaam op.',
        collectTitle: '3. Informatie die wij verzamelen',
        collectText: 'Wij verzamelen informatie op de volgende manieren:',
        personalInfoTitle: 'Persoonlijke informatie',
        personalInfoEmail: 'E-mailadres (voor accountaanmaak en communicatie)',
        personalInfoName: 'Naam (optioneel, voor personalisatie)',
        personalInfoPayment:
            'Betalingsinformatie (veilig verwerkt door externe providers)',
        serverInfoTitle: 'Serverinformatie',
        serverInfoConfig: 'Serverconfiguratie en -status',
        serverInfoIp: 'Server-IP-adres en locatie',
        serverInfoResources: 'Resourcetoewijzing (CPU, RAM, opslag)',
        useTitle: '4. Hoe wij je informatie gebruiken',
        useText: 'Wij gebruiken de verzamelde informatie om:',
        useProvide: 'Onze Service te leveren en te onderhouden',
        useTransactions:
            'Transacties te verwerken en factureringsinformatie te verzenden',
        useNotices: 'Belangrijke mededelingen en updates te versturen',
        useSupport: 'Te reageren op klantenserviceverzoeken',
        useAnalyze:
            'Gebruikspatronen te monitoren en analyseren om onze Service te verbeteren',
        useFraud: 'Fraude of misbruik te detecteren en voorkomen',
        sharingTitle: '5. Gegevens delen en openbaar maken',
        sharingText:
            'Wij verkopen je persoonlijke informatie niet. Wij kunnen informatie delen met:',
        sharingProviders:
            'Serviceproviders die helpen bij het exploiteren van onze Service (bijv. cloudinfrastructuurproviders)',
        sharingLegal:
            'Juridische autoriteiten wanneer vereist door de wet of om onze rechten te beschermen',
        sharingBusiness:
            'Zakelijke partners in geval van fusie, overname of verkoop van activa',
        securityTitle: '6. Gegevensbeveiliging',
        securityText:
            'Wij implementeren passende technische en organisatorische maatregelen om je persoonlijke informatie te beschermen tegen ongeautoriseerde toegang, wijziging, openbaarmaking of vernietiging. Dit omvat encryptie, beveiligde servers en regelmatige beveiligingsbeoordelingen.',
        retentionTitle: '7. Gegevensbewaring',
        retentionText:
            'Wij bewaren je persoonlijke informatie zolang je account actief is of zolang nodig is om je diensten te leveren. Wij kunnen bepaalde informatie bewaren zoals vereist door de wet of voor legitieme zakelijke doeleinden.',
        rightsTitle: '8. Je rechten',
        rightsText: 'Afhankelijk van je locatie heb je mogelijk het recht om:',
        rightsAccess: 'Toegang te krijgen tot je persoonlijke gegevens',
        rightsCorrect: 'Onjuiste gegevens te corrigeren',
        rightsDelete: 'Verwijdering van je gegevens aan te vragen',
        rightsObject: 'Bezwaar te maken tegen de verwerking van je gegevens',
        rightsPortability: 'Gegevensoverdraagbaarheid',
        rightsWithdraw: 'Toestemming op elk moment in te trekken',
        cookiesTitle: '9. Cookies en tracking',
        cookiesText:
            'Wij gebruiken geen cookies. Authenticatie wordt afgehandeld via Firebase en is niet afhankelijk van cookies die in je browser zijn opgeslagen.',
        transfersTitle: '10. Internationale gegevensoverdracht',
        transfersText:
            'Je informatie kan worden overgedragen naar en verwerkt in landen anders dan je eigen land. Wij zorgen ervoor dat passende waarborgen aanwezig zijn om je gegevens te beschermen in overeenstemming met dit Privacybeleid.',
        eligibilityTitle: '11. Geschiktheid',
        eligibilityText:
            'Onze Service is beschikbaar voor iedereen. Er zijn geen leeftijdsbeperkingen voor het gebruik van ClawHost.',
        changesTitle: '12. Wijzigingen in dit beleid',
        changesText:
            'Wij kunnen dit Privacybeleid van tijd tot tijd bijwerken. Wij zullen je op de hoogte stellen van wijzigingen door het nieuwe Privacybeleid op deze pagina te plaatsen en de datum "Laatst bijgewerkt" bij te werken.',
        contactTitle: '13. Neem contact met ons op',
        contactText:
            'Als je vragen hebt over dit Privacybeleid of je rechten wilt uitoefenen, neem dan contact met ons op via'
    },
    terms: {
        title: 'Servicevoorwaarden',
        description:
            'Lees de algemene voorwaarden voor het gebruik van ClawHost-diensten.',
        lastUpdated: 'Laatst bijgewerkt: 14 maart 2026',
        acceptanceTitle: '1. Acceptatie van voorwaarden',
        acceptanceText:
            'Door ClawHost ("Service") te openen en te gebruiken, accepteer je en ga je akkoord met de voorwaarden en bepalingen van deze overeenkomst. Als je niet akkoord gaat met deze voorwaarden, gebruik onze Service dan niet.',
        serviceTitle: '2. Beschrijving van de Service',
        serviceText:
            'ClawHost biedt one-click deployment van OpenClaw en Hermes op dedicated servers. We stellen gebruikers in staat om vooraf geconfigureerde OpenClaw- en Hermes-instanties met volledige root-toegang en dedicated resources te deployen, beheren en benaderen.',
        authTitle: '3. Authenticatie',
        authText:
            'ClawHost gebruikt Google Firebase Authentication om inloggen te beheren. Je kunt authenticeren met e-mail, Google of GitHub. Door deze methoden te gebruiken, ga je akkoord met de respectieve voorwaarden en het privacybeleid van Google en GitHub. Deze providers kunnen basisinformatie verzamelen zoals je e-mailadres, naam en apparaatgegevens.',
        responsibilitiesTitle: '4. Verantwoordelijkheden van de gebruiker',
        responsibilitiesText: 'Je gaat akkoord om:',
        responsibilitiesAccurate:
            'Nauwkeurige en volledige registratie-informatie te verstrekken',
        responsibilitiesSecurity:
            'De beveiliging van je accountreferenties te handhaven',
        responsibilitiesCompliance:
            'De Service te gebruiken in overeenstemming met alle toepasselijke wetten',
        responsibilitiesLegal:
            'De Service niet te gebruiken voor illegale of ongeautoriseerde doeleinden',
        responsibilitiesAccess:
            'Geen ongeautoriseerde toegang te proberen te verkrijgen tot systemen of netwerken',
        prohibitedTitle: '5. Verboden gebruik',
        prohibitedText: 'Je mag onze Service niet gebruiken om:',
        prohibitedMalware:
            'Malware, virussen of schadelijke software te verspreiden',
        prohibitedDos:
            'Denial-of-service-aanvallen of netwerkmisbruik uit te voeren',
        prohibitedSpam: 'Spam of ongewenste communicatie te verzenden',
        prohibitedIllegal: 'Illegale inhoud te hosten of verspreiden',
        prohibitedIp:
            'Rechten van derden te schenden, inclusief intellectueel eigendom',
        prohibitedMining: 'Cryptocurrency te minen',
        prohibitedOther:
            'Andere onwettige of schadelijke activiteiten die wij naar eigen goeddunken als ongepast kunnen beschouwen',
        paymentTitle: '6. Betaling en facturering',
        paymentText:
            'Diensten worden gefactureerd op een vaste maandelijkse of jaarlijkse basis. Je kunt op elk moment wisselen tussen maandelijkse en jaarlijkse facturering, waarbij de wijziging ingaat aan het begin van je volgende factureringsperiode. Alle betalingen zijn niet-restitueerbaar. Wanneer je betaalt voor een server, heb je er toegang toe voor de volledige factureringsperiode. Als je annuleert, gaat de annulering in aan het einde van de huidige factureringsperiode. Prijzen kunnen wijzigen, maar wijzigingen gelden alleen voor nieuw gedeployde claws en hebben geen invloed op reeds gedeployde. Het niet betalen kan leiden tot opschorting of be\u00ebindiging van je account.',
        availabilityTitle: '7. Beschikbaarheid van de Service',
        availabilityText:
            'Wij streven naar hoge beschikbaarheid maar garanderen geen ononderbroken toegang tot de Service. Wij behouden ons het recht voor om elk onderdeel van de Service op elk moment te wijzigen, op te schorten of stop te zetten, met of zonder voorafgaande kennisgeving.',
        liabilityTitle: '8. Beperking van aansprakelijkheid',
        liabilityText:
            'Voor zover maximaal toegestaan door de wet, is ClawHost niet aansprakelijk voor indirecte, incidentele, speciale, gevolg- of punitieve schade, of enig verlies van winst of inkomsten, hetzij direct of indirect geleden.',
        terminationTitle: '9. Be\u00ebindiging',
        terminationText:
            'Wij kunnen je account en toegang tot de Service onmiddellijk be\u00ebindigen of opschorten, zonder voorafgaande kennisgeving, voor gedrag waarvan wij geloven dat het deze Voorwaarden schendt of schadelijk is voor andere gebruikers, ons of derden, of om welke andere reden dan ook.',
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
        changesToTermsTitle: '11. Wijzigingen in de voorwaarden',
        changesToTermsText:
            'Wij behouden ons het recht voor om deze voorwaarden op elk moment te wijzigen. Wij zullen gebruikers op de hoogte stellen van wezenlijke wijzigingen via e-mail of via de Service. Voortgezet gebruik van de Service na dergelijke wijzigingen vormt acceptatie van de bijgewerkte voorwaarden.',
        contactTitle: '12. Contactinformatie',
        contactText:
            'Als je vragen hebt over deze Voorwaarden, neem dan contact met ons op via'
    },
    hermesBanner: {
        title: 'Hermes Agent',
        message:
            'Hermes-agenten worden nu ondersteund voor deployment op ClawHost.'
    },
    compare: {
        title: 'Vergelijking',
        description:
            'Bekijk hoe ClawHost zich verhoudt tot andere OpenClaw-hostingplatforms.',
        badge: 'Vergelijking',
        feature: 'Platform',
        compareWith: 'Vergelijk met',
        lastUpdated: 'Laatst bijgewerkt: maart 2026',
        competitorClawHost: 'ClawHost',
        competitorLobsterFarm: 'LobsterFarm',
        competitorSimpleAgent: 'SimpleAgent',
        competitorMyAgentAi: 'MyAgent.ai',
        competitorQuickAgent: 'QuickAgent',
        categoryInfrastructure: 'Infrastructuur',
        categoryPricing: 'Prijzen & facturering',
        categoryDeployment: 'Deployment & installatie',
        categoryManagement: 'OpenClaw-beheer',
        categorySecurity: 'Gegevens & beveiliging',
        categoryMonitoring: 'Monitoring & onderhoud',
        categorySupport: 'Ondersteuning & platform',
        featureServerOwnership: 'Servereigendom',
        featureProviderChoice: 'Keuze cloudprovider',
        featureDedicatedResources: 'Toegewezen resources',
        featureRootAccess: 'Volledige root/SSH-toegang',
        featureServerLocations: 'Serverlocaties',
        featureStartingPrice: 'Startprijs',
        featureTransparentPricing: 'Transparante prijzen',
        featurePowerfulServers: 'Krachtige servers, lagere prijs',
        featureLocationSelection: 'Selecteer je serverlocatie',
        featureSubdomainAccess: 'Subdomeintoegang',
        featureThemes: 'Licht & donker thema',
        featureSetupTime: 'Installatietijd',
        featureOneClickDeploy: 'Deployment met \u00e9\u00e9n klik',
        featureMultipleInstances: 'Meerdere instanties',
        featureDataOwnership: 'Volledig gegevenseigendom',
        featureDataExport: 'Gegevensexport',
        featureBackups: 'Back-ups',
        featureSecurityHardening: 'Beveiligingsverharding',
        featureSslTls: 'SSL/TLS',
        featureOpenSource: 'Open source',
        featureAutoUpdates: 'Automatische updates',
        featureDiagnostics: 'Realtime diagnostiek',
        featureLogStreaming: 'Log-streaming',
        featureRepairTools: 'Reparatietools',
        featureSupportChannels: 'Ondersteuningskanalen',
        featureMultiLanguage: 'Meertalige UI',
        featureDesktopApp: 'Desktop-app',
        featureOneClickVersion: 'Versiewisseling met \u00e9\u00e9n klik',
        featureWebTerminal: 'Webterminal-toegang',
        featureSocials: 'Sociale media',
        dedicatedVps: 'Toegewijd VPS',
        sharedContainers: 'Gedeelde containers',
        isolatedContainers: 'Ge\u00efsoleerde containers',
        cloudWorkspaces: 'Cloudwerkruimtes',
        threeProviders: 'Cloud',
        singleProvider: 'E\u00e9n provider',
        fullyDedicated: 'Volledig dedicated',
        shared: 'Gedeeld',
        fullRootSsh: 'Volledige root + SSH',
        sshOnRequest: 'SSH op aanvraag',
        noAccess: 'Geen toegang',
        thirtyPlusLocations: '30+ locaties',
        limitedLocations: 'Beperkt',
        fourLocations: '4 locaties',
        fromTwentyFiveMonth: 'Vanaf $25/maand',
        aboutFortyFourMonth: '~$44/maand gem.',
        fromNineteenMonth: '$19–79/maand',
        nineteenMonth: '$19/maand',
        clearSpecsPricing: 'Duidelijke specificaties & prijzen',
        unclearPricing: 'Onduidelijke prijzen',
        fixedTiers: '3 vaste niveaus',
        creditBased: 'Tegoed-gebaseerd',
        minutes: 'Minuten',
        underOneMinute: 'Minder dan 1 minuut',
        thirtySeconds: '30 seconden',
        instant: 'Direct',
        noneRequired: 'Geen',
        minimal: 'Minimaal',
        unlimited: 'Onbeperkt',
        singleInstance: 'Enkelvoudig',
        noMarketplace: 'Geen marktplaats',
        appOnly: 'Alleen app',
        fullConfig: 'Volledige configuratie',
        limitedConfig: 'Beperkt',
        zipExport: 'ZIP-export',
        serverTransfer: 'Serveroverdracht',
        noExport: 'Geen export',
        volumeStorage: 'Volume-opslag',
        noBackups: 'Geen back-ups',
        dailyBackups: 'Dagelijkse back-ups',
        included: 'Inbegrepen',
        notIncluded: 'Niet inbegrepen',
        managed: 'Beheerd',
        manual: 'Handmatig',
        appStore: 'App Store',
        liveMonitoring: 'Realtime monitoring',
        liveLogs: 'Realtime logs',
        oneClickRepair: 'Reparatie met \u00e9\u00e9n klik',
        emailGithub: 'E-mail, GitHub',
        humanSupport: 'Menselijke ondersteuning',
        communityOnly: 'Alleen community',
        appSupport: 'App-ondersteuning',
        prioritySupport: '24/7 ondersteuning (Pro+)',
        fourLanguages: '4 talen',
        englishOnly: 'Alleen Engels',
        available: 'Beschikbaar',
        comingSoon: 'Binnenkort',
        macOsOnly: 'Alleen macOS',
        viaTelegram: 'Via Telegram',
        builtInTerminal: 'Geen SSH nodig',
        notAvailable: 'Niet beschikbaar',
        disclaimer: 'Iets veranderd of onjuist? Stuur ons een e-mail op',
        disclaimerOr: 'of open een pull request op',
        github: 'GitHub',
        ctaTitle: 'Klaar om het verschil te zien?',
        ctaDescription:
            'Deploy OpenClaw op je eigen dedicated server. Volledig eigendom, transparante prijzen en klaar in minuten.'
    },
    admin: {
        title: 'Admin',
        description: 'Beheer uw platformgebruikers en gegevens.',
        usersTab: 'Gebruikers',
        totalUsers: '{{count}} gebruikers',
        noUsers: 'Nog geen gebruikers',
        noUsersDescription:
            'Geen gebruikers gevonden die overeenkomen met uw filters.',
        genericErrorDescription: 'Er is iets misgegaan. Probeer het opnieuw.',
        genericEmptyDescription: 'Hier is nog niets te zien.',
        failedToLoadUsers: 'Kan gebruikers niet laden!',
        failedToLoadUsersDescription:
            'Er is iets misgegaan bij het laden van gebruikers. Probeer het opnieuw.',
        failedToLoadUserDetail: 'Kan gebruikersdetails niet laden!',
        userDetail: 'Gebruikersdetails',
        userInfo: 'Gebruikersinfo',
        email: 'E-mail',
        name: 'Naam',
        role: 'Rol',
        authMethods: 'Authenticatiemethoden',
        license: 'Licentie',
        referralCode: 'Verwijzingscode',
        referredBy: 'Verwezen door',
        joined: 'Geregistreerd',
        claws: 'Claws',
        sshKeys: 'SSH-sleutels',
        volumes: 'Volumes',
        billing: 'Facturering',
        noClaws: 'Geen Claws',
        noSshKeys: 'Geen SSH-sleutels',
        noVolumes: 'Geen Volumes',
        noBilling: 'Geen Factureringsgeschiedenis',
        hasLicense: 'Ja',
        noLicense: 'Nee',
        notSet: 'Niet ingesteld',
        searchPlaceholder: 'Zoeken op e-mail of naam...',
        filterAll: 'Alle gebruikers',
        filterWithClaws: 'Met claws',
        filterWithoutClaws: 'Zonder claws',
        sortNewest: 'Nieuwste eerst',
        sortOldest: 'Oudste eerst',
        editUser: 'Bewerken',
        saveUser: 'Opslaan',
        userUpdated: 'Gebruiker bijgewerkt.',
        userUpdateFailed: 'Bijwerken mislukt!',
        clawsTab: 'Claws',
        sshKeysTab: 'SSH-sleutels',
        volumesTab: 'Volumes',
        noClawsFound: 'Geen Claws',
        noSSHKeysFound: 'Geen SSH-sleutels',
        noVolumesFound: 'Geen Volumes',
        failedToLoadAgents: 'Kan agents niet laden!',
        failedToLoadSSHKeys: 'Kan SSH-sleutels niet laden!',
        failedToLoadVolumes: 'Kan volumes niet laden!',
        owner: 'Eigenaar',
        searchClaws: 'Claws zoeken...',
        searchSSHKeys: 'SSH-sleutels zoeken...',
        referralsTab: 'Verwijzingen',
        pendingClawsTab: 'Wachtend',
        waitlistTab: 'Wachtlijst',
        emailsTab: 'E-mails',
        analyticsTab: 'Analyse',
        billingTab: 'Facturering',
        settingsTab: 'Instellingen',
        settingsDescription: 'Beheer je beheerdersinstellingen.',
        showAllAgents: 'Toon alle agenten van alle gebruikers',
        billingFilterAll: 'Alle bestellingen',
        billingFilterService: 'Claw-service',
        billingFilterLicense: 'Licentie',
        billingOrderTypeLabel: ' · {{type}}',
        noBillingFound: 'Geen bestellingen',
        failedToLoadBilling: 'Bestellingen laden mislukt!',
        searchBilling: 'Zoek op productnaam...',
        billingReason: 'Reden',
        billingType: 'Type',
        billingSubtotal: 'Subtotaal',
        billingDiscount: 'Korting',
        billingTax: 'Belasting',
        billingTotal: 'Totaal',
        analyticsDay: 'Dag',
        analyticsWeek: 'Week',
        analyticsMonth: 'Maand',
        analyticsYear: 'Jaar',
        analyticsAllTime: 'Alle tijd',
        analyticsFilter: 'Filter',
        analyticsResources: 'Bronnen',
        analyticsSelectAll: 'Alles selecteren',
        analyticsDeselectAll: 'Alles deselecteren',
        failedToLoadAnalytics: 'Analyse laden mislukt!',
        noAnalyticsData: 'Geen analysegegevens beschikbaar.',
        noReferralsFound: 'Geen Verwijzingen',
        noPendingClawsFound: 'Geen Wachtende Claws',
        noWaitlistFound: 'Geen Wachtlijst',
        noEmailsFound: 'Geen E-mails',
        failedToLoadReferrals: 'Kan verwijzingen niet laden!',
        failedToLoadPendingClaws: 'Kan wachtende claws niet laden!',
        failedToLoadWaitlist: 'Kan wachtlijst niet laden!',
        failedToLoadEmails: 'Kan e-mails niet laden!',
        referrer: 'Verwijzer',
        referred: 'Verwezen',
        earned: 'Verdiend',
        searchWaitlist: 'Wachtlijst doorzoeken...',
        expiresAt: 'Verloopt',
        feature: 'Functie',
        sentAt: 'Verzonden',
        fileSize: 'Grootte',
        registered: 'Geregistreerd',
        status: 'Status',
        ip: 'IP',
        plan: 'Plan',
        location: 'Locatie',
        subdomain: 'Subdomein',
        subscription: 'Abonnement',
        billingInterval: 'Facturering',
        deletionScheduled: 'Verwijdering gepland',
        fingerprint: 'Vingerafdruk',
        price: 'Prijs',
        pricePerMonth: '{{price}}/mnd',
        statusRunning: 'Actief',
        statusStopped: 'Gestopt',
        adminBadge: 'Admin',
        unitGB: '{{size}} GB',
        unitKB: '{{size}} KB'
    },
    affiliate: {
        title: 'Affiliate',
        description: 'Earn rewards by referring friends to ClawHost.',
        subtitle: 'Share your referral link and earn rewards.',
        learnMore: 'Meer informatie over het partnerprogramma',
        referralCode: 'Referral Code',
        referrals: 'Referrals',
        payments: 'betalingen',
        earnings: 'Earnings',
        codeChangeHint: 'You can customize your referral code once.',
        codeAlreadyChanged: 'Your referral code has already been customized.',
        codeUpdated: 'Referral code updated.',
        codeUpdateFailed: 'Failed to update referral code!',
        invalidCodeLength:
            'Code must be between {{min}} and {{max}} characters!',
        referralHistory: 'Referral History',
        paymentHistory: 'Betalingsgeschiedenis',
        periodToday: 'Today',
        periodWeek: 'Week',
        periodMonth: 'Month',
        periodYear: 'Year',
        periodAll: 'All',
        confirmChangeTitle: 'Change Referral Code',
        confirmChangeDescription:
            'Are you sure? This action is permanent and cannot be undone. You will not be able to change your referral code again.',
        noReferralsYet: 'Geen verwijzingen',
        noReferralsDescription:
            'Share your referral link to start earning rewards.',
        noPaymentsYet: 'Geen betalingen',
        noPaymentsDescription:
            'Wanneer uw doorverwezen gebruikers aankopen doen, verschijnen hun betalingen hier.'
    },
    affiliateProgram: {
        title: 'Partnerprogramma',
        description:
            'Ontdek hoe het ClawHost-partnerprogramma werkt, hoeveel je kunt verdienen en de regels voor deelname.',
        lastUpdated: 'Laatst bijgewerkt: 1 april 2026',
        overviewTitle: '1. Overzicht',
        overviewText:
            'Het ClawHost-partnerprogramma laat je beloningen verdienen door nieuwe gebruikers naar ClawHost te verwijzen. Wanneer iemand een aankoop doet na ClawHost te hebben bezocht via jouw verwijzingslink, verdien je een commissie op hun betalingen. Het programma is gratis en beschikbaar voor alle geregistreerde ClawHost-gebruikers.',
        howItWorksTitle: '2. Hoe het werkt',
        howItWorksText:
            'Aan de slag gaan met het partnerprogramma is eenvoudig:',
        howItWorksStep1:
            'Maak een ClawHost-account aan. Er wordt automatisch een unieke verwijzingscode voor je gegenereerd.',
        howItWorksStep2:
            "Deel je verwijzingslink met vrienden, collega's of je publiek. Je link volgt het formaat: clawhost.cloud?ref=YOUR_CODE.",
        howItWorksStep3:
            'Wanneer iemand een aankoop doet na ClawHost te hebben bezocht via jouw link, wordt dit als jouw verwijzing geregistreerd.',
        howItWorksStep4:
            'Je verdient een commissie telkens wanneer je verwezen gebruiker een in aanmerking komende aankoop doet.',
        earningsTitle: '3. Verdiensten en uitbetalingen',
        earningsText: 'Zo werken de partnerverdiensten:',
        earningsCommission:
            'Je verdient een commissie van 15% op elke in aanmerking komende aankoop van je verwezen gebruikers. Commissies zijn van toepassing op zowel ClawHost Cloud- als ClawHost Go-abonnementen.',
        earningsMonthly:
            'Voor maandelijkse abonnementen verdien je commissies gedurende 1 jaar vanaf de datum van de verwijzing.',
        earningsYearly:
            'Voor jaarlijkse abonnementen verdien je een commissie alleen over het eerste jaar.',
        earningsPayout:
            'Het minimale opnamebedrag is $100 USD. Neem contact op met ons supportteam om een opname aan te vragen.',
        earningsPaymentMethod:
            'Opnames worden verwerkt via PayPal. Je moet een geldig PayPal-e-mailadres opgeven bij het aanvragen van een uitbetaling.',
        earningsCurrency:
            'Alle verdiensten worden berekend en weergegeven in USD.',
        referralCodeTitle: '4. Je verwijzingscode',
        referralCodeText:
            'Elke gebruiker ontvangt een unieke verwijzingscode bij registratie. Je kunt deze eenmalig aanpassen om hem beter te onthouden:',
        referralCodeUnique:
            'Je verwijzingscode is uniek voor je account en kan niet worden gedeeld met of overgedragen aan een andere gebruiker.',
        referralCodeOneChange:
            'Je kunt je verwijzingscode precies één keer aanpassen. Kies zorgvuldig — deze wijziging is permanent en kan niet ongedaan worden gemaakt.',
        referralCodeFormat:
            'Verwijzingscodes mogen alleen letters, cijfers, streepjes en underscores bevatten.',
        referralWindowTitle: '5. Verwijzings-attributievenster',
        referralWindowText:
            'Een verwijzing wordt aan jou toegeschreven voor 3 maanden vanaf het moment dat de verwezen gebruiker ClawHost voor het eerst via jouw link bezoekt. Als de verwezen gebruiker geen aankoop doet binnen dit venster van 3 maanden, vervalt de verwijzing en wordt er geen commissie verdiend. Als de gebruiker via een andere verwijzingslink bezoekt, vervangt de nieuwe verwijzing de vorige.',
        eligibilityTitle: '6. Geschiktheid',
        eligibilityText:
            'Om deel te nemen aan het partnerprogramma moet je aan de volgende vereisten voldoen:',
        eligibilityAccount:
            'Je moet een geregistreerd ClawHost-account hebben.',
        eligibilityStanding:
            'Je account moet in goede staat zijn zonder geschiedenis van beleidsschendingen.',
        eligibilityAge:
            'Je moet ten minste 18 jaar oud zijn of de meerderjarige leeftijd in je rechtsgebied hebben bereikt.',
        rulesTitle: '7. Programmaregels',
        rulesText:
            'Om de integriteit van het partnerprogramma te waarborgen, gelden de volgende regels:',
        rulesNoSelfReferral:
            'Zelfverwijzingen zijn strikt verboden. Je mag niet je eigen accounts of accounts die je beheert verwijzen.',
        rulesNoFakeAccounts:
            'Het aanmaken van nepaccounts, geautomatiseerde aanmeldingen of het gebruik van bots om verwijzingen te genereren is verboden.',
        rulesNoSpam:
            'Het versturen van ongevraagde bulkberichten (spam) om je verwijzingslink te promoten is niet toegestaan.',
        rulesNoMisrepresentation:
            'Je mag ClawHost, zijn diensten of het partnerprogramma op geen enkele manier verkeerd voorstellen.',
        rulesNoIncentivized:
            'Het aanbieden van directe financiële prikkels (bijv. gebruikers betalen om zich via jouw link aan te melden) is niet toegestaan.',
        terminationTitle: '8. Schending en beëindiging',
        terminationText:
            'Elke schending van deze regels resulteert in het onmiddellijke verlies van alle openstaande en verdiende beloningen. ClawHost behoudt zich het recht voor om je account van het partnerprogramma op te schorten of permanent te verbannen. In ernstige gevallen kan ook je ClawHost-account worden beëindigd. Alle beslissingen met betrekking tot schendingen zijn definitief.',
        marketingTitle: '9. Hoe te promoten',
        marketingText:
            'Er zijn veel creatieve en legitieme manieren om je verwijzingslink te delen en je inkomsten te laten groeien:',
        marketingSocial:
            'Deel je link op sociale mediaplatformen zoals X, LinkedIn, Reddit en Facebook. Schrijf over je ervaring met ClawHost en voeg je verwijzingslink toe.',
        marketingBlog:
            'Schrijf blogposts, tutorials of recensies over ClawHost. Verwerk je verwijzingslink op een natuurlijke manier in de content.',
        marketingVideo:
            'Maak videocontent op YouTube of TikTok waarin je laat zien hoe je ClawHost gebruikt om AI-agents te deployen en te beheren.',
        marketingCommunity:
            'Neem deel aan ontwikkelaarscommunities, forums en Discord-servers. Wanneer iemand vraagt naar cloudhosting of het deployen van AI-agents, beveel ClawHost aan met je link.',
        marketingNewsletter:
            'Als je een nieuwsbrief of mailinglijst beheert, vermeld ClawHost dan in een relevant nummer met je verwijzingslink.',
        marketingComparison:
            'Schrijf eerlijke vergelijkingsartikelen of gidsen die benadrukken wat ClawHost onderscheidt van andere platformen.',
        changesToProgramTitle: '10. Wijzigingen aan het programma',
        changesToProgramText:
            'ClawHost behoudt zich het recht voor om het partnerprogramma op elk moment zonder voorafgaande kennisgeving te wijzigen, op te schorten of stop te zetten. Dit omvat wijzigingen in commissietarieven, verwijzingsvensters, uitbetalingsdrempels en programmaregels. Voortgezette deelname na wijzigingen houdt aanvaarding van de bijgewerkte voorwaarden in.',
        getStartedTitle: '11. Aan de slag',
        getStartedText:
            'Klaar om te gaan verdienen? Ga naar je partnerdashboard om je verwijzingslink op te halen en begin met delen met je netwerk.',
        getStartedButton: 'Naar partnerdashboard',
        contactTitle: '12. Contact',
        contactText:
            'Als je vragen hebt over het partnerprogramma, hulp nodig hebt met je verwijzingscode of een schending wilt melden, neem dan contact met ons op via'
    }
}

export default nl