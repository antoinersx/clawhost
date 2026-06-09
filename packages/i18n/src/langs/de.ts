import type { Translations } from '#i18n/types'

const de: Translations = {
    common: {
        loading: 'Laden...',
        noResults: 'Keine Ergebnisse gefunden.',
        save: 'Speichern',
        cancel: 'Abbrechen',
        confirm: 'Bestätigen',
        delete: 'Löschen',
        deleting: 'Wird gelöscht...',
        back: 'Zurück',
        create: 'Erstellen',
        done: 'Fertig',
        copy: 'Kopieren',
        copied: 'Kopiert.',
        copiedWithLabel: '{{label}} kopiert.',
        show: 'Anzeigen',
        hide: 'Ausblenden',
        tryAgain: 'Erneut versuchen',
        addKey: 'Schlüssel hinzufügen',
        close: 'Schließen',
        none: 'Keine',
        all: 'Alle',
        unknown: 'Unbekannt',
        pageNotFound: 'Seite nicht gefunden',
        closeNotification: 'Benachrichtigung schließen',
        beta: 'Beta',
        brandName: 'ClawHost',
        brandNameGo: 'ClawHost Go',
        brandNameGoVersion: 'ClawHost Go {{version}}',
        pageTitleWithBrand: '{{title}} - ClawHost',
        menuFile: 'Ablage',
        menuEdit: 'Bearbeiten',
        menuView: 'Darstellung',
        menuWindow: 'Fenster',
        menuHelp: 'Hilfe',

        scrollToBottom: 'Nach unten scrollen',
        second: 'Sekunde',
        seconds: 'Sekunden'
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
        switchLanguage: 'Sprache'
    },
    theme: {
        light: 'Hell',
        dark: 'Dunkel',
        system: 'System',
        toggleTheme: 'Design wechseln'
    },
    nav: {
        claws: 'Claws',
        sshKeys: 'SSH-Schlüssel',
        account: 'Konto',
        affiliate: 'Partner',
        license: 'Lizenz',
        signOut: 'Abmelden',
        admin: 'Admin',
        login: 'Anmelden',
        deploy: 'Deployen',
        deployOpenClaw: 'OpenClaw deployen',
        mainNavigation: 'Hauptnavigation',
        footerNavigation: 'Fusszeilen-Navigation',
        toggleMenu: 'Menu umschalten',
        cloud: 'Cloud',
        cloudSubtitle: 'Technisch',
        go: 'Go',
        goSubtitle: 'Nicht-technisch'
    },
    go: {
        pageTitle: 'ClawHost Go',
        heroTitle1: 'OpenClaw bereitstellen.',
        heroTitle2: 'Lokal. Sofort.',
        badge: 'OpenClaw & Hermes lokal',
        tutorialBadge: 'Erste Schritte mit Go',
        description:
            'Ein leichtgewichtiger Desktop-Client zur Verwaltung Ihrer OpenClaw-Instanzen. Bereitstellen, überwachen und steuern Sie Ihre Claws — direkt von Ihrem Rechner.',
        features: 'Funktionen',
        whyClawHostGo: 'Alles-in-einem-Funktionen',
        featuresDescription:
            'Warum es sich lohnt – Funktionen sprechen für sich.',
        zeroConfigDescription:
            'Spare dir Stunden für Server-, OpenClaw- und Hermes-Setup. Alles ist vorinstalliert und in Minuten bereit.',
        ownedDataDescription:
            'Alles läuft auf Ihrem Gerät. Keine Cloud-Server, keine Drittanbieter, keine Daten verlassen Ihren Rechner.',
        terminalAccessDescription:
            'Greifen Sie direkt aus der App auf das Terminal Ihrer OpenClaw-Instanz zu. Kein externer SSH-Client erforderlich.',
        simplePricing: 'Einfache Preise',
        simplePricingDescription:
            'Eine Lizenz, alles unbegrenzt. Keine monatlichen Rechnungen, keine Nutzungslimits, keine versteckten Gebühren.',
        localDomain: 'Benutzerdefinierte lokale Domain',
        localDomainDescription:
            'Greifen Sie über eine benutzerdefinierte lokale Domain auf Ihr OpenClaw zu. Saubere URLs in Ihrem eigenen Netzwerk.',
        secureDescription:
            'Ihre Daten verlassen niemals Ihr Gerät. Vollständig isoliert, vollständig verschlüsselt, vollständig Ihres.',
        pricing: 'Preise',
        pricingTitle: 'Einfacher Einmalpreis',
        pricingDescription:
            'Keine Abonnements, keine versteckten Gebühren. Eine Lizenz, unbegrenzte Nutzung.',
        pricingPrice: '{{price}} $',
        pricingLabel: 'Einmalzahlung',
        pricingFeature1: 'Lebenslange Lizenz',
        pricingFeature2: 'Unbegrenzte Claws',
        pricingFeature3: 'Alle zukünftigen Updates',
        pricingFeature4: 'Keine Nutzungslimits',
        pricingFeature5: 'Prioritäts-Support',
        pricingFeature6: 'Benutzerdefinierte lokale Domain',
        comparison: 'Vergleich',
        comparisonTitle: 'Go vs Cloud',
        comparisonDescription:
            'Wählen Sie, was für Sie funktioniert. Go läuft lokal, Cloud auf dedizierten Servern.',
        comparisonLocalUs: 'Läuft vollständig auf Ihrem Gerät',
        comparisonLocalOthers: 'Läuft auf Remote-Servern',
        comparisonPricingUs: 'Einmalzahlung',
        comparisonPricingOthers: 'Monatliches Abonnement',
        comparisonDataUs: 'Daten bleiben auf Ihrem Gerät',
        comparisonDataOthers: 'Daten auf Cloud-Servern',
        comparisonSetupUs: 'Installieren und sofort starten',
        comparisonSetupOthers: 'Mit einem Klick bereitstellen',
        comparisonUpdatesUs: 'Automatische Updates',
        comparisonUpdatesOthers: 'Automatische Updates',
        faqTitle: 'Fragen',
        faqHeading: 'Häufige Fragen',
        faqDescription: 'Alles, was Sie über ClawHost Go wissen müssen.',
        faq1Question: 'Was ist ClawHost Go?',
        faq1Answer:
            'ClawHost Go ist eine leichtgewichtige Desktop-Anwendung, mit der Sie OpenClaw lokal auf Ihrem Gerät ausführen können. Keine Cloud-Server nötig — installieren, starten und OpenClaw in Sekunden nutzen.',
        faq2Question: 'Wie unterscheidet sich Go von ClawHost Cloud?',
        faq2Answer:
            'ClawHost Cloud stellt OpenClaw auf dedizierten Remote-Servern mit 24/7-Verfügbarkeit und globalem Zugriff bereit. ClawHost Go führt alles lokal auf Ihrem Gerät aus — ideal für Datenschutz, Offline-Nutzung und einfache Setups.',
        faq3Question: 'Brauche ich eine Internetverbindung?',
        faq3Answer:
            'ClawHost Go funktioniert offline für lokale Nutzung. Eine Internetverbindung wird nur für die Ersteinrichtung, Updates und Funktionen benötigt, die externe API-Aufrufe erfordern.',
        faq4Question: 'Ist die Lizenz eine Einmalzahlung?',
        faq4Answer:
            'Ja. Sie zahlen einmal und erhalten lebenslangen Zugang zu ClawHost Go, einschließlich aller zukünftigen Updates. Keine Abonnements, keine wiederkehrenden Gebühren.',
        faq5Question: 'Welche Betriebssysteme werden unterstützt?',
        faq5Answer:
            'ClawHost Go unterstützt Windows und macOS. Beide Plattformen erhalten die gleichen Funktionen und Updates gleichzeitig.',
        faq6Question: 'Kann ich später von Go zu Cloud wechseln?',
        faq6Answer:
            'Absolut. Sie können Ihre OpenClaw-Konfiguration aus Go exportieren und jederzeit auf ClawHost Cloud bereitstellen. Beide Plattformen sind vollständig kompatibel.',
        statsPrice: '{{price}} $',
        statsLifetime: 'Lebenslang',
        statsOneTime: 'Einmalig',
        statsPayment: 'Zahlung',
        statsLocal: 'Lokal',
        statsLocally: 'Läuft lokal',
        statsZero: 'Null',
        statsZeroConfig: 'Null Konfiguration',
        ctaTitle: 'OpenClaw lokal ausführen',
        ctaDescription:
            'Einmalige Zahlung, lebenslange Lizenz. Stellen Sie OpenClaw auf Ihrem eigenen Gerät bereit — kein Cloud, keine Abonnements, keine Grenzen. Ihre Daten, Ihre Regeln.',
        downloadForMac: 'Für Mac herunterladen',
        downloadVersion: 'Version {{version}}',
        downloadForWindows: 'Für Windows herunterladen',
        deviceNotSupported: 'Ihr Gerät wird von ClawHost Go noch nicht unterstützt.',
        downloadFailed: 'Download fehlgeschlagen!',
        downloadStarted: 'Download gestartet.',
        appleSilicon: 'Apple Silicon',
        intel: 'Intel',
        chooseMacArch: 'Welchen Mac haben Sie?',
        otherVersions: 'Andere Versionen',
        updateAvailable: 'Version {{version}} ist verfügbar.',
        updateDownload: 'Herunterladen',
        updateDismiss: 'Später',
        clawNotFound: 'Claw nicht gefunden!',
        clawNameAlreadyExists: 'Ein Claw mit diesem Namen existiert bereits!',
        invalidSubdomain:
            'Ungültige Subdomain. Verwende 3-20 Kleinbuchstaben und Zahlen!',
        subdomainAlreadyInUse: 'Diese Subdomain wird bereits verwendet!',
        clawDirectoryNotFound: 'Claw-Verzeichnis nicht gefunden!',
        noVersionInstalled:
            'Keine OpenClaw-Version installiert. Gehe zum Tab Versionen und installiere zuerst eine!',
        failedToStartClaw: 'Claw konnte nicht gestartet werden!',
        noVersionAssigned: 'Keine OpenClaw-Version diesem Claw zugewiesen!',
        invalidAgentName: 'Ungültiger Agentenname!',
        invalidPath: 'Ungültiger Pfad!',
        fileNotFound: 'Datei nicht gefunden!',
        purchasingNotAvailable: 'Kauf ist im lokalen Modus nicht verfügbar!',
        exportFailed: 'Export fehlgeschlagen!',
        versionNotInstalled:
            'OpenClaw Version {{version}} ist nicht installiert!',
        failedToStartProcess:
            'Prozess konnte nicht gestartet werden: {{reason}}!',
        gatewayNotReady: 'Der Agent wurde nicht rechtzeitig bereit!',
        processExitedImmediately:
            'Prozess wurde sofort beendet. Logs:\n{{logs}}',
        processExitedImmediatelyNoLogs:
            'Prozess wurde sofort nach dem Start beendet!',
        processExitedWithCode:
            'Prozess wurde mit Code {{code}} beendet. Logs:\n{{logs}}',
        processExitedWithCodeNoLogs: 'Prozess wurde mit Code {{code}} beendet!',
        processExitedUnexpectedly: 'Prozess wurde unerwartet beendet!',
        failedToInstallVersion:
            'Installation von Version {{version}} fehlgeschlagen: {{reason}}!',
        oauthCancelled: 'Authentifizierung abgebrochen!',
        diskFull: 'Kein Speicherplatz mehr auf dem Gerät!',
        permissionDenied: 'Zugriff verweigert!',
        networkTimeout: 'Netzwerkanfrage ist abgelaufen!',
        failedToFetchLatestVersion:
            'Die neueste Version konnte nicht abgerufen werden!'
    },
    footer: {
        website: 'Webseite',
        copyrightName: 'ClawHost',
        copyrightRights: 'Alle Rechte vorbehalten.',
        termsOfService: 'Nutzungsbedingungen',
        privacyPolicy: 'Datenschutzerklärung',
        getInTouch: 'Kontakt',
        brandDescription:
            'Stelle OpenClaw mit einem Klick auf deinem eigenen VPS bereit. Volle Privatsphäre, dedizierte Ressourcen, keine geteilte Infrastruktur.',
        builtBy: 'Entwickelt von',
        supportedBy: 'Unterstützt von',
        product: 'Produkt',
        howItWorks: 'Ablauf',
        features: 'Funktionen',
        pricing: 'Preise',
        faq: 'Fragen',
        changelog: 'Änderungsprotokoll',
        compare: 'Vollständiger Vergleich',
        legalAndMore: 'Sonstiges',
        affiliateProgram: 'Partnerprogramm',
        documentation: 'Dokumentation',
        productDescription:
            'OpenClaw- und Hermes-Agenten in der Cloud oder lokal mit einem Klick bereitstellen – erstelle, verbinde und skaliere deine KI-Agenten schneller mit ClawHost.',
        ariaGithub: 'GitHub',
        ariaX: 'X',
        ariaFacebook: 'Facebook',
        ariaInstagram: 'Instagram',
        ariaThreads: 'Threads',
        ariaYoutube: 'YouTube',
        ariaTiktok: 'TikTok'
    },
    errors: {
        somethingWentWrong: 'Etwas ist schiefgelaufen!',
        couldNotLoadData:
            'Die Daten konnten nicht geladen werden. Bitte versuche es erneut!',
        notFound: 'Seite nicht gefunden!',
        pageNotFoundDescription:
            'Die gesuchte Seite existiert nicht oder wurde verschoben.',
        goToHomepage: 'Zur Startseite',
        failedToLoadAgents: 'Agents konnten nicht geladen werden!',
        failedToLoadAgentsDescription:
            'Deine Agents konnten nicht geladen werden. Bitte überprüfe deine Verbindung und versuche es erneut!',
        failedToLoadSSHKeys: 'SSH-Schlüssel konnten nicht geladen werden!',
        failedToLoadSSHKeysDescription:
            'Deine SSH-Schlüssel konnten nicht geladen werden. Bitte überprüfe deine Verbindung und versuche es erneut!',
        failedToUpdateProfile: 'Profil konnte nicht aktualisiert werden!',
        failedToAddSSHKey: 'SSH-Schlüssel konnte nicht hinzugefügt werden!',
        failedToCreateClaw: 'Claw konnte nicht erstellt werden!',
        failedToLoadLocations:
            'Standorte konnten nicht geladen werden. Bitte versuche es erneut!',
        failedToLoadPlans:
            'Pläne konnten nicht geladen werden. Bitte versuche es erneut!',
        invalidPlan: 'Ungültiger Plan ausgewählt!',
        invalidLocation: 'Bitte wähle einen Standort!',
        failedToGenerateKeyPair:
            'Schlüsselpaar konnte nicht generiert werden. Bitte generiere die Schlüssel lokal!',
        unableToLoadPricing:
            'Preise konnten nicht geladen werden. Bitte versuche es später erneut!',
        noPasswordAvailable: 'Kein Passwort für diesen Claw verfügbar!'
    },
    api: {
        missingRequiredFields: 'Pflichtfelder fehlen!',
        agentNotFound: 'Agent nicht gefunden!',
        agentRenamed: 'Agent erfolgreich umbenannt.',
        agentEmojiUpdated: 'Agent-Emoji aktualisiert.',
        failedToUpdateEmoji: 'Emoji konnte nicht aktualisiert werden!',
        invalidAgentName:
            'Der Agent-Name muss zwischen 1 und {{max}} Zeichen lang sein!',
        userNotFound: 'Benutzer nicht gefunden!',
        sshKeyNotFound: 'SSH-Schlüssel nicht gefunden!',
        pendingAgentNotFound: 'Ausstehender Agent nicht gefunden!',
        agentNotScheduledForDeletion:
            'Agent ist nicht zur Löschung vorgemerkt!',
        agentDeletionAlreadyPassed: 'Löschdatum ist bereits vergangen!',
        agentLimitReached:
            'Du hast das Limit von {{max}} Agents erreicht. Bitte kontaktiere den Support, um dieses Limit zu erhöhen!',
        sshKeyLimitReached:
            'Du hast das Limit von {{max}} SSH-Schlüsseln erreicht. Bitte kontaktiere den Support, um dieses Limit zu erhöhen!',
        volumeSizeInvalid:
            'Die Volumengröße muss zwischen {{min}} und {{max}} GB liegen!',
        paymentNotConfigured: 'Zahlung ist für diesen Plan nicht konfiguriert!',
        invalidSshKeyFormat: 'Ungültiges SSH-Public-Key-Format!',
        sshKeyInUse:
            'Dieser SSH-Schlüssel wird derzeit von einem oder mehreren Agents verwendet!',
        inputTooLong: 'Eingabe überschreitet die maximal zulässige Länge!',
        invalidEmailFormat: 'Ungültiges E-Mail-Format!',
        plusAddressingNotAllowed:
            'Plus-Adressierung ist für die E-Mail-Anmeldung nicht erlaubt!',
        invalidRedirectUrl: 'Ungültige Weiterleitungs-URL!',
        fileTooLarge: 'Dateiinhalt überschreitet die maximal zulässige Größe!',
        nameAndKeyRequired:
            'Name und öffentlicher Schlüssel sind erforderlich!',
        nameTooLong: 'Der Name darf maximal {{max}} Zeichen lang sein!',
        noBillingAccount: 'Kein Abrechnungskonto gefunden!',
        orderIdRequired: 'Bestell-ID ist erforderlich!',
        orderNotFound: 'Bestellung nicht gefunden!',
        emailRequired: 'E-Mail ist erforderlich!',
        redirectUrlRequired: 'Weiterleitungs-URL ist erforderlich!',
        invalidWebhook: 'Ungültiger Webhook!',
        failedToStartAgent: 'Agent konnte nicht gestartet werden!',
        failedToStopAgent: 'Agent konnte nicht gestoppt werden!',
        failedToRestartAgent: 'Agent konnte nicht neu gestartet werden!',
        failedToDeleteAgent: 'Agent konnte nicht gelöscht werden!',
        failedToCreateAgent: 'Agent konnte nicht erstellt werden!',
        invalidProvider: 'Ungültiger Anbieter!',
        providerNotAllowed: 'Dieser Anbieter ist derzeit nicht verfügbar!',
        invalidPlan: 'Ungültiger Plan ausgewählt!',
        planBelowMinimumMemory:
            'Dieser Plan erfüllt nicht die Mindestanforderung an Arbeitsspeicher!',
        invalidLocation: 'Ungültiger Standort ausgewählt!',
        planNotAvailableAtLocation:
            'Dieser Plan ist am ausgewählten Standort nicht verfügbar!',
        failedToSyncAgent: 'Serverstatus konnte nicht synchronisiert werden!',
        failedToProvisionAgent: 'Agent konnte nicht bereitgestellt werden!',
        failedToInitiatePurchase: 'Kauf konnte nicht eingeleitet werden!',
        failedToCancelDeletion: 'Löschung konnte nicht abgebrochen werden!',
        failedToHardDeleteAgent:
            'Agent konnte nicht endgültig gelöscht werden!',
        failedToCancelScheduledDeletion:
            'Die geplante Löschung konnte nicht abgebrochen werden!',
        failedToCreateSshKey: 'SSH-Schlüssel konnte nicht erstellt werden!',
        failedToDeleteSshKey: 'SSH-Schlüssel konnte nicht gelöscht werden!',
        failedToUpdateProfile: 'Profil konnte nicht aktualisiert werden!',
        failedToGetProfile: 'Profil konnte nicht abgerufen werden!',
        failedToGetInvoice: 'Rechnung konnte nicht abgerufen werden!',
        failedToGetCustomerPortal:
            'Kundenportal konnte nicht abgerufen werden!',
        failedToGetBillingHistory:
            'Abrechnungsverlauf konnte nicht abgerufen werden!',
        failedToGetStats: 'Statistiken konnten nicht abgerufen werden!',
        affiliateFetched: 'Partnerinformationen erfolgreich abgerufen.',
        failedToGetAffiliate:
            'Partnerinformationen konnten nicht abgerufen werden!',
        invalidPeriod: 'Ungültiger Zeitraumfilter!',
        referralCodeUpdated: 'Empfehlungscode erfolgreich aktualisiert.',
        failedToUpdateReferralCode:
            'Empfehlungscode konnte nicht aktualisiert werden!',
        invalidReferralCodeLength:
            'Der Empfehlungscode muss zwischen {{min}} und {{max}} Zeichen lang sein!',
        invalidReferralCodeFormat:
            'Der Empfehlungscode darf nur Buchstaben, Zahlen, Bindestriche und Unterstriche enthalten!',
        referralCodeAlreadyChanged:
            'Der Empfehlungscode kann nur einmal geändert werden!',
        referralCodeTaken: 'Dieser Empfehlungscode ist bereits vergeben!',
        referralCodeGenerated: 'Empfehlungscode generiert.',
        failedToGenerateReferralCode:
            'Empfehlungscode konnte nicht generiert werden!',
        failedToFetchLocations: 'Standorte konnten nicht abgerufen werden!',
        failedToFetchPlans: 'Pläne konnten nicht abgerufen werden!',
        failedToFetchVolumePricing:
            'Volumenpreise konnten nicht abgerufen werden!',
        failedToFetchPlanAvailability:
            'Planverfügbarkeit konnte nicht abgerufen werden!',
        failedToSendEmail: 'E-Mail konnte nicht gesendet werden!',
        failedToGetVersion: 'Version konnte nicht abgerufen werden!',
        failedToGetVersions: 'Versionen konnten nicht abgerufen werden!',
        failedToInstallVersion: 'Version konnte nicht installiert werden!',
        installVersionSuccess: 'Version erfolgreich installiert.',
        invalidVersion: 'Ungültiges Versionsformat!',
        outdatedVersion:
            'Diese Version ist veraltet und kann nicht installiert werden!',
        failedToGetDiagnostics: 'Verbindung zur Instanz fehlgeschlagen!',
        failedToGetDiagnosticsDescription:
            'Diagnose konnte nicht abgerufen werden. Die Instanz ist möglicherweise offline oder wird gestartet!',
        failedToGetLogs: 'Logs konnten nicht geladen werden!',
        failedToGetLogsDescription:
            'Logs für diese Instanz konnten nicht abgerufen werden. Bitte versuche es später erneut!',
        failedToReinstallAgent: 'Instanz konnte nicht neu installiert werden!',
        reinstallSuccess: 'Instanz erfolgreich neu installiert.',
        reinstallRateLimited:
            'Du kannst nur einmal alle 24 Stunden neu installieren. Kontaktiere das Team, falls du dieses Limit aufheben möchtest.',
        subdomainRateLimited:
            'Du kannst deine Subdomain nur einmal alle 24 Stunden ändern. Kontaktiere das Team, falls du dieses Limit aufheben möchtest.',
        subdomainUpdated: 'Subdomain erfolgreich aktualisiert.',
        invalidSubdomain:
            'Ungültige Subdomain. Verwende 3-20 Kleinbuchstaben und Zahlen!',
        subdomainAlreadyInUse: 'Diese Subdomain wird bereits verwendet!',
        subdomainNotSupported: 'Dieser Agententyp verwendet keine Subdomain.',
        agentBusy: 'Agent wird derzeit bereitgestellt oder gelöscht!',
        reinstallGatewayNotResponding:
            'Neuinstallation abgeschlossen, aber das Gateway antwortet noch nicht. Es benötigt möglicherweise mehr Zeit zum Starten!',
        failedToRepairAgent: 'Failed to repair the instance!',
        repairSuccess: 'Instance repaired successfully.',
        repairGatewayNotResponding:
            'Repair applied but gateway is not responding yet. It may need more time to start.',
        failedToExportAgent: 'Agent-Daten konnten nicht exportiert werden!',
        agentNotReady: 'Agent ist nicht bereit für den Export!',
        exportRateLimited:
            'Dieser Agent wurde kürzlich exportiert. Bitte warte, bevor du erneut exportierst!',
        failedToListFiles: 'Instanzdateien konnten nicht aufgelistet werden!',
        failedToReadFile: 'Datei konnte nicht gelesen werden!',
        failedToUpdateFile: 'Datei konnte nicht gespeichert werden!',
        invalidFilePath: 'Ungültiger Dateipfad!',
        fileNotEditable: 'Dieser Dateityp kann nicht bearbeitet werden!',
        invalidJsonConfig: 'Ungültiges JSON!',
        fileSaveSuccess: 'Datei gespeichert.',
        rateLimitExceeded: 'Bitte warte, bevor du einen neuen Code anforderst!',
        otpExpiredOrNotFound:
            'Code abgelaufen oder nicht gefunden. Bitte fordere einen neuen an!',
        otpMaxAttemptsReached:
            'Zu viele fehlgeschlagene Versuche. Bitte fordere einen neuen Code an!',
        otpInvalidCode: 'Ungültiger Code. Bitte versuche es erneut!',
        licenseAlreadyPurchased: 'Lizenz bereits erworben!',
        licenseNotAvailable: 'Das Lizenzprodukt ist nicht verfügbar!',
        licenseCheckoutCreated: 'Lizenzkauf erstellt.',
        failedToPurchaseLicense: 'Lizenzkauf konnte nicht erstellt werden!',
        internalServerError: 'Ein interner Fehler ist aufgetreten!',
        invalidCredentials: 'Ungültige Anmeldedaten!',
        accountLinked: 'Konto erfolgreich verknüpft.',
        webhookProcessingFailed: 'Webhook-Verarbeitung fehlgeschlagen!',
        adminAccessDenied: 'Administratorzugang erforderlich!',
        agentsFetched: 'Agents erfolgreich abgerufen.',
        agentFetched: 'Agent erfolgreich abgerufen.',
        agentStarsFetched: 'Agent-Sterne erfolgreich abgerufen.',
        agentSynced: 'Agent erfolgreich synchronisiert.',
        agentStarted: 'Agent erfolgreich gestartet.',
        agentStopped: 'Agent erfolgreich gestoppt.',
        agentRestarted: 'Agent erfolgreich neu gestartet.',
        agentCreated: 'Agent erfolgreich erstellt.',
        agentDeleted: 'Agent erfolgreich gelöscht.',
        agentDeletionScheduled: 'Agent-Löschung geplant.',
        agentDeletionCancelled: 'Agent-Löschung abgebrochen.',
        agentHardDeleted: 'Agent endgültig gelöscht.',
        pendingAgentCancelled: 'Kauf abgebrochen.',
        failedToCancelPendingAgent: 'Kauf konnte nicht abgebrochen werden!',
        agentPurchaseInitiated: 'Kauf erfolgreich eingeleitet.',
        sshKeysFetched: 'SSH-Schlüssel erfolgreich abgerufen.',
        sshKeyCreated: 'SSH-Schlüssel erfolgreich erstellt.',
        sshKeyDeleted: 'SSH-Schlüssel erfolgreich gelöscht.',
        profileFetched: 'Profil erfolgreich abgerufen.',
        profileUpdated: 'Profil erfolgreich aktualisiert.',
        statsFetched: 'Statistiken erfolgreich abgerufen.',
        billingHistoryFetched: 'Abrechnungsverlauf erfolgreich abgerufen.',
        invoiceFetched: 'Rechnung erfolgreich abgerufen.',
        customerPortalFetched: 'Kundenportal-URL erfolgreich abgerufen.',
        plansFetched: 'Pläne erfolgreich abgerufen.',
        locationsFetched: 'Standorte erfolgreich abgerufen.',
        volumePricingFetched: 'Volumenpreise erfolgreich abgerufen.',
        planAvailabilityFetched: 'Planverfügbarkeit erfolgreich abgerufen.',
        diagnosticsFetched: 'Diagnose erfolgreich abgerufen.',
        metricsFetched: 'Metriken erfolgreich abgerufen.',
        failedToGetMetrics: 'Servermetriken konnten nicht abgerufen werden!',
        overviewFetched: 'Übersicht erfolgreich abgerufen.',
        failedToGetOverview: 'Gateway-Übersicht konnte nicht abgerufen werden!',
        overviewUnsupported:
            'Diese OpenClaw-Version unterstützt die Übersichtsfunktion nicht!',
        passwordRotated: 'Root-Passwort erfolgreich rotiert.',
        failedToRotatePassword: 'Root-Passwort konnte nicht rotiert werden!',
        gatewayTokenRotated: 'Gateway-Token erfolgreich rotiert.',
        failedToRotateGatewayToken:
            'Gateway-Token konnte nicht rotiert werden!',
        sshKeyUpdated: 'SSH-Schlüssel erfolgreich aktualisiert.',
        failedToUpdateSSHKey: 'SSH-Schlüssel konnte nicht aktualisiert werden!',
        invalidPassword:
            'Das Passwort muss zwischen {{min}} und {{max}} Zeichen lang sein!',
        invalidGatewayToken:
            'Das Gateway-Token muss zwischen {{min}} und {{max}} Zeichen lang sein!',
        enablePreviewSuccess: 'Vorschaumodus erfolgreich aktiviert.',
        failedToEnablePreview: 'Vorschaumodus konnte nicht aktiviert werden!',
        logsFetched: 'Logs erfolgreich abgerufen.',
        filesFetched: 'Dateien erfolgreich abgerufen.',
        fileFetched: 'Datei erfolgreich abgerufen.',
        otpSent: 'Code erfolgreich gesendet.',
        otpVerified: 'Code erfolgreich verifiziert.',
        webhookReceived: 'Webhook empfangen.',
        unauthorized: 'Nicht autorisiert!',
        invalidToken: 'Ungültiges Token!',
        notFound: 'Nicht gefunden!',
        healthOk: 'API läuft.',
        featureVersionUnsupported:
            'Diese Funktion wird in Version {{version}} nicht unterstützt. Bitte aktualisieren Sie OpenClaw oder verwenden Sie das Terminal zur manuellen Verwaltung.',
        invalidAuthMethod: 'Ungültige Authentifizierungsmethode!',
        authMethodNotConnected:
            'Diese Authentifizierungsmethode ist nicht verbunden!',
        authMethodConnected: 'Authentifizierungsmethode erfolgreich verbunden.',
        authMethodDisconnected:
            'Authentifizierungsmethode erfolgreich getrennt.',
        failedToConnectAuthMethod:
            'Authentifizierungsmethode konnte nicht verbunden werden!',
        failedToDisconnectAuthMethod:
            'Authentifizierungsmethode konnte nicht getrennt werden!',
        featureEmailsDisabled: 'Feature-E-Mails sind derzeit deaktiviert.',
        featureEmailsSent: 'Feature-E-Mails erfolgreich gesendet.',
        featureEmailsFailed: 'Fehler beim Senden der Feature-E-Mails!',
        invalidFeatureKey: 'Ungültiger Feature-Schlüssel!',
        adminUsersFetched: 'Benutzer erfolgreich abgerufen.',
        failedToGetAdminUsers: 'Benutzer konnten nicht abgerufen werden!',
        adminUserDetailFetched: 'Benutzerdetails erfolgreich abgerufen.',
        failedToGetAdminUserDetail:
            'Benutzerdetails konnten nicht abgerufen werden!',
        adminUserUpdated: 'Benutzer aktualisiert.',
        failedToUpdateAdminUser: 'Benutzer konnte nicht aktualisiert werden!',
        adminStatsFetched: 'Statistiken abgerufen.',
        failedToGetAdminStats: 'Statistiken konnten nicht abgerufen werden!',
        adminAnalyticsFetched: 'Analysen erfolgreich abgerufen.',
        failedToGetAdminAnalytics: 'Analysen konnten nicht abgerufen werden!',
        adminBillingFetched: 'Abrechnungen erfolgreich abgerufen.',
        failedToGetAdminBilling: 'Abrechnungen konnten nicht abgerufen werden!',
        adminAgentsFetched: 'Agents abgerufen.',
        failedToGetAdminAgents: 'Agents konnten nicht abgerufen werden!',
        adminSSHKeysFetched: 'SSH-Schlüssel abgerufen.',
        failedToGetAdminSSHKeys:
            'SSH-Schlüssel konnten nicht abgerufen werden!',
        adminVolumesFetched: 'Volumes abgerufen.',
        failedToGetAdminVolumes: 'Volumes konnten nicht abgerufen werden!',
        adminReferralsFetched: 'Referrals fetched.',
        failedToGetAdminReferrals: 'Failed to fetch referrals!',
        adminPendingAgentsFetched: 'Pending agents fetched.',
        failedToGetAdminPendingAgents: 'Failed to fetch pending agents!',
        adminExportsFetched: 'Exports fetched.',
        adminEmailsFetched: 'Emails fetched.',
        failedToGetAdminEmails: 'Failed to fetch emails!'
    },
    emails: {
        otpSubject: 'Dein ClawHost-Anmeldecode',
        otpPreview: 'Dein ClawHost-Anmeldecode: {{code}}',
        otpHeading: 'Dein Anmeldecode lautet:',
        otpExpiry:
            'Der Code läuft in 10 Minuten ab. Falls du das nicht warst, ignoriere diese E-Mail.',
        featureFooter:
            'Du erhältst diese E-Mail, weil du ein ClawHost-Konto hast.',
        features: {
            terminal: {
                subject: 'Du hast ein Web-Terminal',
                preview: 'Befehle im Browser ausführen, ohne SSH',
                tag: 'Web-Terminal',
                heading: 'Befehle direkt im Browser',
                description:
                    "Ein vollständiges Terminal in deinem Dashboard. Klick auf deinen Claw, los geht's. Kein SSH-Client nötig.",
                cta: 'Terminal Öffnen'
            },
            logs: {
                subject: 'Echtzeit-Logs in deinem Dashboard',
                preview: 'Server-Logs live verfolgen',
                tag: 'Live-Logs',
                heading: 'Deine Logs live',
                description:
                    'Jede Anfrage, jeder Fehler, live auf dein Dashboard gestreamt. Kein manuelles Log-Durchsuchen per SSH mehr.',
                cta: 'Logs Anzeigen'
            },
            fileExplorer: {
                subject: 'Server-Dateien im Browser bearbeiten',
                preview: 'Dateien durchsuchen und bearbeiten ohne SSH',
                tag: 'Datei-Explorer',
                heading: 'Dateien bearbeiten ohne SSH',
                description:
                    'Durchsuche, bearbeite und speichere Dateien mit Syntaxhervorhebung. Kein SSH, kein FTP — klicken und tippen.',
                cta: 'Explorer Öffnen'
            },
            diagnostics: {
                subject: 'Integrierte Gesundheitschecks',
                preview: 'Server-Gesundheit mit einem Klick prüfen',
                tag: 'Diagnose',
                heading: 'Ist dein Server gesund?',
                description:
                    'Services, Speicher, Festplatte und Ports mit einem Klick prüfen. Probleme erkennen bevor sie zu Ausfällen werden.',
                cta: 'Diagnose Starten'
            },
            sshKeys: {
                subject: 'SSH-Schlüssel von ClawHost verwalten',
                preview: 'Schlüsselpaare einfach generieren und verwalten',
                tag: 'SSH-Schlüssel',
                heading: 'SSH-Schlüssel, vereinfacht',
                description:
                    'Schlüsselpaare generieren, öffentliche kopieren, private herunterladen — alles vom Dashboard.',
                cta: 'SSH-Schlüssel Verwalten'
            },
            exportConfig: {
                subject: 'Claw-Config exportieren',
                preview: 'Konfiguration als Datei herunterladen',
                tag: 'Config Exportieren',
                heading: 'Config mitnehmen',
                description:
                    'Agenten und Einstellungen als eine Datei exportieren. Sichern oder Setup replizieren.',
                cta: 'Config Exportieren'
            },
            multiLanguage: {
                subject: 'ClawHost spricht 14 Sprachen',
                preview: 'Dashboard-Sprache wechseln',
                tag: 'Mehrsprachig',
                heading: '14 Sprachen, vollständig übersetzt',
                description:
                    'Wechsle ClawHost zu Deutsch, Englisch, Französisch, Spanisch und 10 weitere. Jeder Button, jede Nachricht.',
                cta: 'Sprache Ändern'
            },
            subdomain: {
                subject: 'Dein Claw hat eine eigene URL',
                preview: 'Greife von überall auf deinen Claw zu',
                tag: 'Subdomain',
                heading: 'Dein Claw, deine URL',
                description:
                    'Jeder Claw bekommt eine einzigartige Subdomain wie meinclaw.clawhost.cloud. Von überall erreichbar, ohne VPN.',
                cta: 'Deine Subdomain Anzeigen'
            },
            darkMode: {
                subject: 'Dunkelmodus ist da',
                preview: 'Zwischen hellem und dunklem Theme wechseln',
                tag: 'Dunkelmodus',
                heading: 'Schonend für die Augen',
                description:
                    'Mit einem Klick zwischen Hell und Dunkel wechseln. Deine Einstellung wird automatisch gespeichert.',
                cta: 'Dunkelmodus Testen'
            },
            reinstall: {
                subject: 'Neuanfang, ein Klick',
                preview: 'OpenClaw neu installieren ohne Server zu verlieren',
                tag: 'Neuinstallation',
                heading: 'Neuanfang, gleicher Server',
                description:
                    'Neuinstallation löscht die OpenClaw-Runtime und gibt dir eine saubere Seite. Server, IP und Schlüssel bleiben gleich.',
                cta: 'Mehr Erfahren'
            },
            yearlyPlans: {
                subject: 'Sparen mit jährlicher Abrechnung',
                preview: 'Gleicher Service, niedrigerer Preis',
                tag: 'Jahrespläne',
                heading: 'Gleicher Claw, kleinere Rechnung',
                description:
                    'Wechsle zur jährlichen Abrechnung und zahle weniger. Keine Funktionsunterschiede. Jederzeit wechselbar.',
                cta: 'Pläne Anzeigen'
            }
        }
    },
    auth: {
        signIn: 'Authentifizierung',
        signInDescription:
            'Melde dich bei deinem ClawHost-Konto an, um deine OpenClaw-Instanzen zu verwalten.',
        signingIn: 'Authentifizierung läuft...',
        verifyCode: 'Code bestätigen',
        checkYourEmail: 'Prüfe deine E-Mail',
        checkYourEmailHeading: 'Prüfe deine E-Mail',
        codeSentTo: 'Wir haben einen 6-stelligen Code gesendet an',
        signInToDeployOpenClaw:
            'Authentifiziere dich, um Agenten mit einem Klick zu verwalten und bereitzustellen.',
        emailAddress: 'E-Mail-Adresse',
        emailPlaceholder: 'beispiel@clawhost.cloud',
        continueWithEmail: 'Weiter mit E-Mail',
        otpDescription:
            'Wir senden dir einen Code zum Anmelden. Kein Passwort nötig.',
        welcomeBack: 'Willkommen zurück.',
        resendIn: 'Erneut senden in {{seconds}}s',
        resendCode: 'Code erneut senden',
        changeEmail: 'E-Mail ändern',
        invalidCode: 'Ungültiger Code!',
        invalidEmailFormat: 'Bitte geben Sie eine gültige E-Mail-Adresse ein!',
        plusAddressingNotAllowed:
            'Plus-Adressierung ist für die E-Mail-Anmeldung nicht erlaubt!',
        or: 'oder',
        continueWithGoogle: 'Weiter mit Google',
        continueWithGithub: 'Weiter mit GitHub',
        agreementNotice: 'Durch Fortfahren stimmst du unseren',
        termsOfService: 'Nutzungsbedingungen',
        andWord: 'und',
        privacyPolicy: 'Datenschutzerklärung'
    },
    account: {
        title: 'Konto',
        description:
            'Verwalte deine ClawHost-Kontoeinstellungen und Profilinformationen.',
        accountSettings: 'Konto',
        manageYourAccount: 'Verwalte dein Profil und deine Kontoeinstellungen.',
        profileInformation: 'Profilinformationen',
        profileDescription: 'Deine persönlichen Daten und dein Anzeigename.',
        noNameSet: 'Kein Name festgelegt',
        joined: 'Beigetreten',
        claws: 'Claws',
        sshKeys: 'Schlüssel',
        displayName: 'Anzeigename',
        enterYourName: 'Gib deinen Namen ein',
        emailAddress: 'E-Mail-Adresse',
        emailNotEditable:
            'E-Mail kann nicht bearbeitet werden. Kontaktiere den Support.',
        profileUpdatedSuccessfully: 'Profil erfolgreich aktualisiert.',
        billingAndSubscription: 'Abrechnung & Abonnement',
        billingAndSubscriptionDescription:
            'Verwalte deine Zahlungsmethoden, Abonnements und Rechnungen.',
        viewBillingHistory:
            'Zahlungsverlauf, Rechnungen und Abonnements einsehen.',
        aboutApp: 'Über',
        aboutAppDescription: 'App-Informationen und Version.',
        appVersion: 'App-Version',
        operatingSystem: 'Betriebssystem',
        architecture: 'Architektur',
        checkForUpdates: 'Nach Updates suchen',
        checkNow: 'Jetzt prüfen',
        updatesUpToDate: 'Sie haben die neueste Version.',
        updateReady: 'Version {{version}} bereit zur Installation.',
        restartToInstall: 'Neu starten zur Installation',
        connectedAccounts: 'Verbundene Konten',
        connectedAccountsDescription:
            'Verwalte die mit deinem Konto verknüpften Anmeldemethoden.',
        authEmail: 'E-Mail',
        authGoogle: 'Google',
        authGithub: 'GitHub',
        authConnected: 'Verbunden',
        authConnect: 'Verbinden',
        authDisconnect: 'Trennen',
        emailCannotBeDisconnected:
            'E-Mail ist immer als primäre Anmeldemethode verbunden.',
        providerConnected: '{{provider}} erfolgreich verbunden.',
        providerDisconnected: '{{provider}} erfolgreich getrennt.',
        providerEmailMismatch:
            'Du kannst nur Konten verknüpfen, die dieselbe E-Mail-Adresse verwenden!',
        settings: 'Einstellungen',
        settingsDescription: 'Verwalte deine Dashboard-Einstellungen.',
        openLinksWindowed: 'Links in einer Fensteransicht öffnen',
        openLinksWindowedDescription:
            'Wenn aktiviert, werden externe Links in der App statt im Systembrowser geöffnet.'
    },
    billing: {
        date: 'Datum',
        product: 'Produkt',
        amount: 'Betrag',
        status: 'Status',
        statusPaid: 'Bezahlt',
        statusPending: 'Ausstehend',
        statusRefunded: 'Erstattet',
        statusPartiallyRefunded: 'Teilweise erstattet',
        billingReasonPurchase: 'Kauf',
        billingReasonSubscriptionCreate: 'Neues Abonnement',
        billingReasonSubscriptionCycle: 'Verlängerung',
        billingReasonSubscriptionUpdate: 'Abonnement-Änderung',
        failedToLoadBilling: 'Abrechnungsverlauf konnte nicht geladen werden!',
        downloadInvoice: 'Rechnung herunterladen',
        invoiceCanceledNavigation:
            'Rechnungsdownload unterbrochen weil du die Seite verlassen hast.',
        failedToLoadInvoice: 'Rechnung konnte nicht geladen werden!',
        couponApplied: 'Gutschein: {{name}}',
        manageBilling: 'Abrechnung verwalten',
        failedToLoadPortal: 'Abrechnungsportal konnte nicht geöffnet werden!',
        portalCanceledNavigation:
            'Abrechnungsportal unterbrochen weil du die Seite verlassen hast.'
    },
    license: {
        title: 'Lizenz',
        description: 'Verwalte deine OpenClaw-Lizenz.',
        pageTitle: 'Lizenz',
        pageDescription:
            'Kaufe deine Lizenz für das lokale Self-Hosting von OpenClaw-Instanzen mit unserer Go-App.',
        planName: 'ClawHost Go Lizenz',
        oneTimePurchase: 'Einmalkauf',
        price: '{{price}} $',
        priceNote: 'Einmal zahlen, für immer besitzen.',
        purchaseLicense: 'Lizenz kaufen',
        purchasing: 'Weiterleitung...',
        activated: 'Lizenz aktiv',
        activatedDescription:
            'Deine Lizenz ist aktiv. Danke für deine Unterstützung.',
        paymentSuccess: 'Zahlung erfolgreich. Deine Lizenz ist jetzt aktiv.',
        failedToPurchase: 'Checkout konnte nicht gestartet werden!',
        featureUnlimitedClaws: 'Unbegrenzte OpenClaws',
        featureDevices: 'Unbegrenzte Geräte',
        featureUpdates: 'Updates für immer',
        featureSupport: 'Prioritäts-Support',
        featureCloud: 'Alle Cloud-Funktionen, lokal',
        whatsIncluded: 'Was enthalten ist',
        gateTitle: 'Lizenz erforderlich',
        gateDescription:
            'Du benötigst eine ClawHost Go Lizenz, um OpenClaw-Instanzen lokal bereitzustellen und zu verwalten.'
    },
    network: {
        offline: 'Keine Internetverbindung',
        offlineDescription:
            'Du bist derzeit offline. Funktionen, die Internetzugang erfordern, sind nicht verfügbar.'
    },
    dashboard: {
        title: 'Claws',
        description:
            'Sieh deine bereitgestellten OpenClaw-Instanzen ein und verwalte sie. Starte, stoppe, starte neu und überwache deine VPS-Server.',
        claw: 'Claw',
        clawsPlural: 'Claws',
        clawCountLabel: '{{count}} Claws',
        clawCountLabelSingular: '{{count}} Claw',
        newClaw: 'Neuer Claw',
        searchAgents: 'Agenten suchen...',
        searchAgentsCount: '{{count}} Agenten suchen...',
        noAgentsMatchSearch: 'Keine Agenten gefunden.',
        clawActions: 'Claw-Aktionen',
        noAgentsYet: 'Keine Agenten',
        noAgentsDescription:
            'Kein bereitgestellter Agent gefunden. Aber du kannst jederzeit deinen ersten Agent ab 25 $/Monat bereitstellen. Einfach per KI.',
        deleteClaw: 'Claw löschen',
        deleteClawConfirmation: 'Bist du sicher, dass du löschen möchtest',
        deleteClawWarning:
            'Dein Abonnement wird gekündigt und der Server wird am Ende deines aktuellen Abrechnungszeitraums gelöscht. Du kannst ihn bis dahin weiter nutzen.',
        actionCannotBeUndone:
            'Diese Aktion kann nicht rückgängig gemacht werden.',
        start: 'Starten',
        startServer: 'Server starten',
        stop: 'Stoppen',
        stopServer: 'Server stoppen',
        restart: 'Neustarten',
        restartServer: 'Server neustarten',
        startClaw: 'Server starten',
        startClawConfirmation:
            'Dies startet den Server und alle seine Prozesse. Tue dies nur, wenn nötig.',
        stopClaw: 'Server stoppen',
        stopClawConfirmation:
            'Dies beendet alle laufenden Prozesse auf dem Server, einschließlich OpenClaw. Es gehen keine Daten verloren. Tue dies nur, wenn nötig. Du kannst ihn jederzeit wieder starten. Stoppen beendet nicht die Abrechnung – lösche den Server, um keine Kosten mehr zu haben.',
        restartClaw: 'Server neustarten',
        restartClawConfirmation:
            'Dies beendet alle laufenden Prozesse auf dem Server, einschließlich OpenClaw, und startet sie neu. Es gehen keine Daten verloren. Tue dies nur, wenn nötig.',
        copyPassword: 'Passwort kopieren',
        copySshWithKey: 'SSH kopieren (mit Schlüssel)',
        copySshWithPassword: 'SSH kopieren (mit Passwort)',
        connect: 'SSH-Befehl kopieren',
        viewServerCredentials: 'Server-Zugangsdaten anzeigen',
        serverCredentials: 'Server-Zugangsdaten',
        serverCredentialsDescription:
            'Verwende diese Zugangsdaten, um dich per SSH mit deinem Server zu verbinden.',
        sshCommand: 'SSH-Befehl',
        rootPassword: 'Root-Passwort',
        sshCommandCopied: 'SSH-Befehl kopiert.',
        sshCommandWithPasswordCopied: 'SSH-Befehl mit Passwort kopiert.',
        passwordCopiedToClipboard: 'Passwort in die Zwischenablage kopiert.',
        plan: 'Server',
        location: 'Standort',
        ip: 'IP',
        domain: 'Domain',
        ipAddress: 'IP-Adresse',
        port: 'Port',
        subscription: 'Abonnement',
        history: 'Verlauf',
        planCost: 'Tarif',
        serverId: 'Server-ID',
        created: 'Erstellt',
        sshKey: 'SSH-Schlüssel',
        storage: 'Speicher',
        nextBilling: 'Nächste Abrechnung',
        lastBilling: 'Letzte Abrechnung',
        totalSpent: 'Gesamtausgaben',
        version: 'Version',
        gatewayToken: 'Gateway-Token',
        gatewayTokenDescription:
            'Verwende dieses Token zur Authentifizierung mit deinem Gateway',
        contactSupport: 'Support kontaktieren',
        scheduledForDeletion: 'Zur Löschung vorgemerkt',
        scheduledDeletionShort: 'Löschung am {{date}}',
        deletionDate: 'Dieser Claw wird am {{date}} gelöscht',
        deletionTooltip:
            'Zur Löschung am {{date}} vorgemerkt. Zum Abbrechen verwende das Menü.',
        pastDue: 'Zahlung fehlgeschlagen',
        deletionFailed: 'Löschung fehlgeschlagen',
        pastDueDescription:
            'Deine Zahlung ist fehlgeschlagen. Wenn nicht innerhalb von 14 Tagen gelöst, wird dieser Claw dauerhaft gelöscht.',
        updatePayment: 'Zahlung aktualisieren',
        cancelDeletion: 'Löschung abbrechen',
        cancelDeletionConfirmation:
            'Sind Sie sicher? Ihr Abonnement bleibt aktiv und Ihnen werden weiterhin Gebühren berechnet. Die Instanz läuft weiter.',
        deletionCancelled: 'Löschung abgebrochen.',
        scheduleDeletion: 'Löschung planen',
        resumeCheckout: 'Zahlung fortsetzen',
        cancelPurchase: 'Kauf abbrechen',
        hardDelete: 'Sofort löschen',
        hardDeleteClaw: 'Sofort löschen',
        hardDeleteConfirmation:
            'Bist du sicher, dass du diesen Claw sofort löschen möchtest? Du verlierst die verbleibende Zeit deines aktuellen Abrechnungszeitraums. Diese Aktion kann nicht rückgängig gemacht werden.',
        diagnostics: 'Diagnose',
        diagnosticsDescription:
            'Überprüfe den Zustand deiner OpenClaw-Instanz.',
        diagnosticsStatus: 'Status',
        diagnosticsLogs: 'Logs',
        diagnosticsRepair: 'Repair',
        diagnosticsRepairDescription:
            'Remove memory limits, apply latest service configuration, and restart the gateway. This fixes most common issues.',
        diagnosticsRepairSuccess: 'Instance repaired successfully.',
        diagnosticsRepairFailed:
            'Repair applied but gateway is not responding yet!',
        diagnosticsLoading: 'Verbindung zur Instanz wird hergestellt...',
        diagnosticsNoLogs:
            'Keine Logs verfügbar. Starte deine Instanz, um Logs zu generieren.',
        diagnosticsNoLogsHermesTitle: 'Hermes Gateway läuft nicht',
        diagnosticsNoLogsHermesDescription:
            'Führe im Terminal-Tab `hermes gateway setup` aus, um Plattformen zu konfigurieren, und dann `sudo systemctl enable --now hermes-gateway`, um die Bridge zu starten.',
        diagnosticsIssueDetected:
            'Ein Problem mit deiner Instanz wurde erkannt.',
        diagnosticsHealthy: 'Deine Instanz läuft normal.',
        diagnosticsPort: 'Port 18789',
        diagnosticsMemory: 'Arbeitsspeicher',
        logsDescription:
            'Die letzten 100 Zeilen deines Gateway-Logs, automatisch aktualisiert.',
        fileExplorer: 'Datei-Explorer',
        fileExplorerRoot: 'openclaw',
        fileExplorerDescription:
            'Durchsuche und bearbeite deine OpenClaw-Konfigurationsdateien. Falsche Änderungen können deine Instanz beschädigen.',
        fileExplorerSelectFile:
            'Wähle eine Datei aus, um ihren Inhalt anzuzeigen.',
        fileExplorerReadOnly: 'Nur lesen',
        fileExplorerSave: 'Speichern',
        fileExplorerSaved: 'Datei gespeichert.',
        fileExplorerSaveCanceledNavigation:
            'Datei-Speichern unterbrochen weil du die Seite verlassen hast.',
        fileExplorerInvalidJson:
            'Ungültiges JSON. Bitte behebe Syntaxfehler vor dem Speichern!',
        fileExplorerNoFiles: 'Keine Dateien gefunden',
        fileExplorerSearchFiles: 'Dateien suchen...',
        fileExplorerNoSearchResults: 'Keine passenden Dateien.',
        startFailed: 'Claw konnte nicht gestartet werden!',
        renameSuccess: 'Claw erfolgreich umbenannt.',
        renameFailed: 'Claw konnte nicht umbenannt werden!',
        renameInvalidChars:
            'Nur Buchstaben, Zahlen und Bindestriche sind erlaubt!',
        reinstallInstance: 'Instanz neu installieren',
        reinstallClaw: 'Instanz neu installieren',
        reinstallClawConfirmation:
            'Dies wird {{agentName}} auf dieser Instanz vollständig neu installieren. Alle Konfigurationen, Agenten und Daten werden zurückgesetzt. Diese Aktion kann nicht rückgängig gemacht werden. Fortfahren?',
        reinstallInstanceSuccess: 'Instanz erfolgreich neu installiert.',
        reinstallInstanceFailed: 'Instanz konnte nicht neu installiert werden!',
        reinstallCanceledNavigation:
            'Neuinstallation unterbrochen weil du die Seite verlassen hast.',
        openControlPanel: 'Systemsteuerung öffnen',
        exportData: 'Claw exportieren (.zip)',
        exportAgent: 'Export',
        exportAgentButton: 'Daten exportieren',
        exportAgentTooltip:
            'Diesen Agent und alle seine Daten als .zip-Datei herunterladen.',
        exportAgentInProgress:
            'Der Export kann bei größeren Agents einige Minuten dauern.',
        exportStarted:
            'Export wird vorbereitet, das kann einen Moment dauern...',
        exportSuccess: 'Claw erfolgreich exportiert.',
        exportFailed: 'Claw-Daten konnten nicht exportiert werden!',
        exportCanceledNavigation:
            'Export abgebrochen weil du die Seite verlassen hast.',
        scheduleDeletionCanceledNavigation:
            'Löschplanung unterbrochen weil du die Seite verlassen hast.',
        cancelDeletionCanceledNavigation:
            'Löschabbruch unterbrochen weil du die Seite verlassen hast.',
        hardDeleteCanceledNavigation:
            'Erzwungene Löschung unterbrochen weil du die Seite verlassen hast.',
        exportRateLimited:
            'Du kannst in {{minutes}} Minuten erneut exportieren!',
        exportRateLimitedOne: 'Du kannst in 1 Minute erneut exportieren!',
        configuringTooltip:
            'Dies kann einige Zeit dauern. Es hängt von OpenClaw, dem Serverstandort und Cloudflare DNS ab.',
        paymentSuccess: 'Dein Claw wird erstellt und konfiguriert.',
        dnsSetupBanner:
            'Richte lokales DNS ein, um auf deine Claws über subdomain.clawhost zuzugreifen.',
        dnsSetupButton: 'DNS einrichten',
        dnsSetupSuccess: 'DNS-Resolver erfolgreich konfiguriert.',
        dnsSetupError: 'DNS-Resolver konnte nicht konfiguriert werden!',
        userTab: 'Benutzer',
        adminTab: 'Admin',
        adminTitle: 'Admin',
        adminDescription: 'Verwalte alle Claws auf der Plattform.',
        adminNoClaws: 'Noch keine Claws auf der Plattform.',
        adminAccessDenied:
            'Du hast keine Berechtigung, auf diese Seite zuzugreifen!',
        owner: 'Besitzer',
        agentType: 'Agent',
        status: {
            running: 'Läuft',
            stopped: 'Gestoppt',
            starting: 'Wird gestartet',
            stopping: 'Wird gestoppt',
            creating: 'Wird erstellt',
            configuring: 'Wird konfiguriert',
            initializing: 'Wird eingerichtet',
            migrating: 'Wird migriert',
            rebuilding: 'Wird neu aufgebaut',
            restarting: 'Wird neu gestartet',
            unreachable: 'Nicht erreichbar',
            deleting: 'Wird gelöscht',
            scheduledDeletion: 'Löschung geplant',
            awaitingPayment: 'Wartet auf Zahlung',
            unknown: 'Unbekannt',
            checking: 'Wird überprüft'
        },
        tabNotAvailableForAgent: 'Nicht verfügbar für diesen Agententyp'
    },
    createClaw: {
        title: 'OpenClaw bereitstellen',
        description:
            'Konfiguriere deinen Server und beginne mit KI zu arbeiten.',
        clawName: 'Name',
        clawNamePlaceholder: 'z. B. cozy-panda',
        clawNameInvalidChars:
            'Nur Buchstaben, Zahlen und Bindestriche sind erlaubt!',
        autoGenerateNameHint:
            'Leer lassen, um automatisch einen Namen zu generieren.',
        agentType: 'Agententyp',
        agentTypeOpenClaw: 'OpenClaw',
        agentTypeHermes: 'Hermes',
        agentTypeOpenClawDescription: '{{count}} Sterne',
        agentTypeHermesDescription: '{{count}} Sterne',
        location: 'Standort',
        locationUnavailable: 'Nicht verfügbar',
        locationUnavailableForPlan: 'Nicht verfügbar',
        plan: 'Server',
        planUnavailable: 'Nicht verfügbar',
        planUnavailableForLocation: 'An diesem Standort nicht verfügbar',
        advancedOptions: 'Erweiterte optionale Optionen',
        rootPassword: 'Root-Passwort',
        rootPasswordPlaceholder: 'Passwort eingeben oder generieren',
        gatewayTokenPlaceholder: 'z.B. a1b2c3d4e5f6...',
        autoGenerateGatewayTokenHint:
            'Automatisch generiert, wenn leer gelassen.',
        autoGeneratePasswordHint:
            'Optional. Kein Passwort, wenn leer gelassen.',
        regeneratePassword: 'Passwort neu generieren',
        gatewayToken: 'Gateway Token',
        regenerateToken: 'Token neu generieren',
        tokenCopied: 'Token kopiert.',
        sshKeyOptional: 'SSH-Schlüssel',
        noSshKeyPasswordOnly: 'Kein SSH-Schlüssel (nur Passwort)',
        noSshKeysConfigured: 'Keine SSH-Schlüssel konfiguriert',
        addSshKeyForPasswordlessLogin:
            'Füge einen SSH-Schlüssel für passwortlose Anmeldung hinzu',
        additionalStorageOptional: 'Zusätzlicher Speicher',
        volumeStorage: 'Volumenspeicher',
        vpsServer: 'VPS-Server',
        openClawPreinstalled: 'OpenClaw vorinstalliert',
        storageWithSize: 'Speicher',
        billingInterval: 'Abrechnung',
        monthly: 'Monatlich',
        yearly: 'Jährlich',
        yearlySaveBadge: '2 Monate gratis',
        yearlySavings: 'Sie sparen',
        totalMonthly: 'Monatlich gesamt',
        totalYearly: 'Jährlich gesamt',
        creating: 'Wird erstellt...',
        proceedToPayment: '{{amount}} $ zahlen zum Bereitstellen',
        agreementNotice: 'Mit der Bereitstellung stimmst du unseren',
        selectServerToContinue: 'Wähle einen Server, um fortzufahren',
        selectLocationToContinue: 'Wähle einen Standort, um fortzufahren',
        clawCreated: 'Claw erstellt.',
        clawCreating: 'Claw wird erstellt, dies kann einen Moment dauern...',
        assigning: 'Wird zugewiesen...',
        rootPasswordSaveThis: 'Root-Passwort (bitte speichern!)',
        sshCommandUsingKey: 'SSH-Befehl (mit deinem Schlüssel)',
        sshCommandWithPassword: 'SSH-Befehl (mit Passwort)',
        passwordCopied: 'Passwort kopiert.',
        planSpec: '{{cpu}} vCPU / {{memory}} GB RAM / {{disk}} GB SSD',
        volumeUnit: 'GB',
        volumeMin: '0 GB',
        volumeMax: '500 GB'
    },
    sshKeys: {
        title: 'SSH-Schlüssel',
        description:
            'Verwalte deine SSH-Schlüssel für sicheren, passwortlosen Zugriff auf deine OpenClaw-Instanzen.',
        key: 'SSH-Schlüssel',
        keys: 'SSH-Schlüssel',
        keyCountDescription: '{{count}} {{label}}',
        addSshKey: 'SSH-Schlüssel hinzufügen',
        howSshKeysWork: 'Wie verbinde ich einen SSH-Schlüssel?',
        step1: 'Generiere ein SSH-Schlüsselpaar auf deinem Computer (oder verwende ein vorhandenes).',
        step2: 'Füge den öffentlichen Schlüssel hier hinzu.',
        step3: 'Wähle den Schlüssel beim Erstellen einer neuen Instanz aus.',
        step4: 'Verbinde dich mit',
        step4Command: 'ssh root@deine-server-ip',
        step4Suffix: '– kein Passwort nötig.',
        noSshKeysYet: 'Keine SSH-Schlüssel',
        noSshKeysDescription:
            'Keine SSH-Schlüssel in deinem Konto vorhanden. Du kannst sie jederzeit hinzufügen und dich mit deinen bereitgestellten Claws verbinden.',
        deleteConfirmation:
            'Bist du sicher, dass du diesen SSH-Schlüssel löschen möchtest?',
        deleteKey: 'SSH-Schlüssel löschen',
        deleteKeyConfirmation: 'Bist du sicher, dass du löschen möchtest',
        sshKeyAddedSuccessfully: 'SSH-Schlüssel erfolgreich hinzugefügt.',
        addSshKeyModalTitle: 'SSH-Schlüssel hinzufügen',
        addSshKeyModalDescription:
            'Füge einen SSH-Schlüssel für passwortlose Authentifizierung hinzu',
        iHaveAnSshKey: 'Vorhandener Schlüssel',
        generateNewKey: 'Neuen erstellen',
        name: 'Name',
        namePlaceholder: 'z. B.: mein-macbook',
        publicKey: 'Öffentlicher Schlüssel',
        publicKeyPlaceholder: 'ssh-rsa AAAA... oder ssh-ed25519 AAAA...',
        publicKeyHint: 'Deinen öffentlichen Schlüssel findest du unter',
        publicKeyPath1: '~/.ssh/id_ed25519.pub',
        publicKeyPathOr: 'oder',
        publicKeyPath2: '~/.ssh/id_rsa.pub',
        important: 'Wichtig:',
        dontHaveSshKey: 'Keinen SSH-Schlüssel? Generiere einen:',
        sshKeygenCommand: 'ssh-keygen -t ed25519 -C "deine-email@example.com"',
        keyName: 'Schlüsselname',
        keyNamePlaceholder: 'Mein generierter Schlüssel',
        importantAfterGenerating:
            'Nach der Generierung musst du deinen privaten Schlüssel herunterladen und speichern. Wir können ihn nicht wiederherstellen, wenn du ihn verlierst!',
        generateKeyPair: 'Schlüsselpaar generieren',
        orGenerateLocallyRecommended: 'Oder lokal generieren (empfohlen)',
        runThisInYourTerminal: 'Führe dies in deinem Terminal aus:',
        thenSwitchToIHave:
            'Wechsle dann zu „Vorhandener Schlüssel" und füge den öffentlichen Schlüssel ein.',
        savePrivateKeyNow:
            'Speichere deinen privaten Schlüssel JETZT! Lade ihn herunter, bevor du diesen Dialog schließt. Du wirst ihn nicht erneut sehen können.',
        privateKeyKeepSecret: 'Privater Schlüssel (geheim halten!)',
        downloadPrivateKey: 'Privaten Schlüssel herunterladen',
        publicKeyWillBeSaved: 'Öffentlicher Schlüssel (wird gespeichert)',
        savePublicKey: 'Öffentlichen Schlüssel speichern'
    },
    landing: {
        title: 'OpenClaw bereitstellen. Ein Klick. Fertig.',
        description:
            'Stelle OpenClaw mit einem Klick auf deinem eigenen VPS bereit. Selbst-hostbares Cloud-Hosting mit vollem Root-Zugriff, globalen Standorten und transparenten Preisen.',
        badge: 'OpenClaw & Hermes in der Cloud',
        tutorialBadge: 'Erste Schritte in der Cloud',
        tutorialVideoThumbnail: 'ClawHost Tutorial-Video Vorschaubild',
        clawhostGoLogoAlt: 'ClawHost Go',
        trustMrrBadgeAlt: 'TrustMRR verifiziertes Umsatz-Badge',
        macosPreviewTime: '22:12',
        heroTitle1: 'OpenClaw bereitstellen.',
        heroTitle2: 'Ein Klick. Fertig.',
        heroDescription:
            'OpenClaw- und Hermes-Agenten in der Cloud oder lokal mit einem Klick bereitstellen – erstelle, verbinde und skaliere deine KI-Agenten schneller mit ClawHost.',
        selfHost: 'Open Source',
        startingPrice: 'Ab',
        locations: 'Standorte',
        servers: 'Server',
        zeroCount: 'Null',
        zeroConfig: 'Keine Konfiguration',
        features: 'Funktionen',
        whyClawHost: 'Alles-in-einem-Funktionen',
        featuresDescription:
            'Warum es sich lohnt – Funktionen sprechen für sich.',
        zeroConfigDescription:
            'Überspringe stundenlange Server- und OpenClaw-Einrichtung. Es ist vorinstalliert und innerhalb von Minuten bereit.',
        ownedData: '100 % deine Daten',
        ownedDataDescription:
            'Dein eigener Server, deine Daten. Keine geteilte Infrastruktur, keine Logs, keine Drittanbieter. 24/7 online.',
        fullSpeed: 'Volle Geschwindigkeit',
        fullSpeedDescription:
            'Dedizierte VPS-Ressourcen bedeuten kein Drosseln, volle Bandbreite und blitzschnelles Internet.',
        globalLocations: 'Globale Standorte',
        globalLocationsDescription:
            'Stelle OpenClaw und Hermes in mehreren globalen Regionen bereit und wähle den Standort, der dir am nächsten ist.',
        fullSshAccess: 'Direkter SSH-Zugriff',
        fullSshAccessDescription:
            'Greife direkt von der Plattform auf das Terminal deines Servers zu. Keine externen SSH-Clients nötig.',
        secure: 'Sicher',
        secureDescription:
            'Standardmäßig geschützt vor SSL-Schwachstellen, Malware und gängigen Sicherheitsbedrohungen.',
        payAsYouGo: 'Einfache Preise',
        payAsYouGoDescription:
            'Preise basierend auf deinem Bedarf. Keine erzwungenen hohen Rechnungen für Server niedriger Qualität. Jederzeit kündbar.',
        bringYourCredits: 'Bring dein eigenes Guthaben mit',
        bringYourCreditsDescription:
            'Nutze deinen eigenen Anthropic-API-Schlüssel oder dein Claude-Abo. Zahle direkt an Anthropic — kein Aufschlag.',
        customSubdomains: 'Online-Zugang',
        customSubdomainsDescription:
            'Vergiss lokale Netzwerke. Greife von überall sicher auf dein OpenClaw über eine Subdomain zu.',
        autoUpdates: 'Versionskontrolle',
        autoUpdatesDescription:
            'Wechsle mit einem Klick zu jeder OpenClaw- oder Hermes-Version. Bleib immer aktuell oder geh bei Bedarf zurück.',
        openclawControl: 'Server-Überwachung',
        openclawControlDescription:
            'Überwache deine OpenClaw- und Hermes-Server mit Echtzeit-Metriken, Logs und Diagnose.',
        clawHostControl: 'Voller Serverzugang',
        clawHostControlDescription:
            'Browser-Terminal, Datei-Explorer, Logs, Diagnose und Versionsverwaltung — alles aus deinem Dashboard.',
        multipleClaws: 'Mehrere Agenten',
        multipleClawsDescription:
            'Stelle mehrere OpenClaw- und Hermes-Agenten über ein einziges Dashboard bereit und verwalte sie. Skaliere nach Bedarf.',
        pricing: 'Preise',
        simpleTransparentPricing: 'Einfache, transparente Preise',
        pricingDescription:
            'Wähle einen Plan, der zu deinen Bedürfnissen passt. Keine versteckten Gebühren.',
        planColumn: 'Server',
        vCpuColumn: 'vCPU',
        ramColumn: 'RAM',
        storageColumn: 'Speicher',
        monthlyColumn: 'Preis',
        tierShared: 'Geteilte vCPU',
        tierDedicated: 'Dedizierte vCPU',
        tierArm: 'Ampere (ARM)',
        tierRegular: 'Reguläre Leistung',
        tierHighPerformance: 'Hohe Leistung',
        tierHighFrequency: 'Hohe Frequenz',
        recommended: 'Empfohlen',
        perMonth: '/Mo.',
        perYear: '/Jahr',
        pricePerMonth: '${{price}}/mo',
        pricePerYear: '${{price}}/yr',
        volumePricePerMonth: '+${{price}}/mo',
        startingPriceValue: '${{price}}/mo',
        deploy: 'Bereitstellen',
        select: 'Auswählen',
        selectPlanLabel: '{{plan}}-Plan auswählen',
        deployPlanLabel: '{{plan}}-Plan bereitstellen',
        openClawPreinstalled: 'OpenClaw vorinstalliert',
        unlimitedBandwidth: 'Unbegrenzte Bandbreite',
        rootSshAccess: 'Voller Root-SSH-Zugriff',
        onlineAllDay: '24/7 online',
        showAllPlans: 'Alle Pläne anzeigen',
        simplePricing: 'Vereinfacht',
        planStarter: 'Starter',
        planStarterDesc: 'Für persönliche Projekte und Experimente',
        planGrowth: 'Growth',
        planGrowthDesc: 'Für Produktions-Workloads',
        planPro: 'Pro',
        planProDesc: 'Für wachsende Unternehmen',
        planBusiness: 'Business',
        planBusinessDesc: 'Für groß angelegte Operationen',
        featureCpu: '{{count}} vCPU',
        featureRam: '{{count}} GB RAM',
        featureDisk: '{{count}} GB SSD',
        choosePlan: 'Plan wählen',
        mostPopular: 'Am beliebtesten',
        featurePreinstalled: 'Agent vorinstalliert',
        featureBandwidth: 'Unbegrenzte Bandbreite',
        featureSsh: 'Root-SSH-Zugang',
        featureUptime: '24/7 online',
        featureDedicatedCpu: 'Dedizierte CPU',
        featureEmailSupport: 'E-Mail-Support',
        fastInternet: 'Schnelles Internet',
        emailSupport: 'E-Mail-Support',
        faqTitle: 'Fragen',
        frequentlyAskedQuestions: 'Häufige Fragen',
        faqDescription: 'Jede häufig gestellte Frage, beantwortet.',
        faq1Question: 'Was ist ClawHost?',
        faq1Answer:
            'ClawHost ist eine Plattform, die OpenClaw und Hermes für alle zugänglich macht. Sie ermöglicht sowohl nicht-technischen Nutzern als auch Entwicklern, sie ohne Infrastruktur-Verwaltung zu betreiben. Wir kümmern uns um Server, Uptime, Sicherheit und Wartung — du nutzt einfach deine Agenten.',
        faq2Question: 'Was ist OpenClaw?',
        faq2Answer:
            'OpenClaw ist eine selbst-gehostete sichere Zugriffsschicht für deine KI-Werkzeuge und -Dienste. Es ist vorkonfiguriert für Sicherheit und Leistung, sodass du es bereitstellen und sofort verbinden kannst.',
        faqHermesQuestion: 'Was ist Hermes?',
        faqHermesAnswer:
            'Hermes ist ein autonomer KI-Agent mit Web-Browsing, Kalenderverwaltung, Multi-Modell-Reasoning und Browser-Automatisierung. Er ist auf jedem ClawHost-Server zusammen mit OpenClaw vorinstalliert.',
        faq3Question:
            'Wie unterscheidet sich das von anderen KI-Werkzeugen oder gehosteten Plattformen?',
        faq3Answer:
            'Im Gegensatz zu gehosteten KI-Tools bietet dir ClawHost einen echten Server mit OpenClaw und Hermes installiert. Du besitzt die Infrastruktur, kontrollierst alles und bist nicht durch eine geteilte Plattform oder ein Modell eingeschränkt.',
        faq4Question: 'Brauche ich technisches Wissen?',
        faq4Answer:
            'Nein. Wir kümmern uns um die gesamte Infrastruktur, Einrichtung und Wartung. Du kannst OpenClaw über die Oberfläche konfigurieren und verwalten, während Hermes über einfache Terminal-Befehle läuft — ohne Server oder Infrastruktur anzufassen.',
        faq5Question: 'Welche Standorte sind verfügbar?',
        faq5Answer:
            'Wir bieten mehrere Serverstandorte weltweit, einschließlich USA, Europa und Asien. Bei Bedarf kannst du OpenClaw oder Hermes auf mehreren Servern in verschiedenen Regionen bereitstellen.',
        faq6Question: 'Wie viel kostet es?',
        faq6Answer:
            'Die Preise hängen vom gewählten Server ab. Mit mehreren Serveroptionen von Einsteiger bis Hochleistung wählst du das, was zu deinen Anforderungen und deinem Budget passt.',
        faq7Question:
            'Kann ich auf meinen Agenten direkt über einen Link zugreifen?',
        faq7Answer:
            'OpenClaw ist über eine Subdomain-URL mit voller Web-UI erreichbar. Hermes läuft über Terminal-Befehle via SSH — kein Link, aber volle Kontrolle über das Terminal deines Servers.',
        comparison: 'Vergleich',
        comparisonTitle: 'Wie wir uns unterscheiden',
        comparisonDescription:
            'Es gibt nur eine vergleichbare Plattform, und unser Ansatz setzt auf echte Server und volles Eigentum statt Einschränkungen.',
        others: 'Andere',
        comparisonOpenClawUs: 'Voller Zugriff auf OpenClaw',
        comparisonOpenClawOthers: 'Nur Chat, keine Verwaltung',
        comparisonPricingUs: 'Transparente Preise, klare Spezifikationen',
        comparisonPricingOthers: 'Versteckte Spezifikationen, unklare Preise',
        comparisonOwnershipUs: 'Du besitzt deinen Server vollständig',
        comparisonOwnershipOthers: 'Du besitzt nichts',
        comparisonSubdomainUs: 'Zugriff über Subdomain',
        comparisonSubdomainOthers: 'Zugriff nur über Drittanbieter-Plattformen',
        comparisonInfraUs: 'On-Demand-Infrastruktur',
        comparisonInfraOthers: 'Begrenzte Server',
        comparisonDataUs: 'Deine Daten gehören dir',
        comparisonDataOthers: 'Deine Daten gehören dir nicht',
        comparisonMultipleUs: 'Mehrere OpenClaw- und Hermes-Agenten',
        comparisonMultipleOthers: 'Nur ein OpenClaw',
        comparisonOpenSourceUs: 'Vollständig Open Source',
        comparisonOpenSourceOthers: 'Closed Source',
        comparisonExportUs: 'Exportiere OpenClaw und Hermes überall hin',
        comparisonExportOthers: 'Anbieterabhängigkeit',
        comparisonProvidersUs: 'Mehrere Serveranbieter',
        comparisonProvidersOthers: 'Nur ein einzelner Anbieter',
        comparisonVersionUs: 'Versionswechsel mit einem Klick',
        comparisonVersionOthers: 'Nur manuelle Updates',
        comparisonTerminalUs: 'Integriertes Web-Terminal',
        comparisonTerminalOthers: 'SSH-Client erforderlich',
        seeFullComparison: 'Vollständigen Vergleich anzeigen',
        comparisonCtaText:
            'Wir vergleichen mit SimpleAgent, MyAgent.ai und mehr — Funktion für Funktion.',
        selfHostInstead: 'Stattdessen selbst hosten'
    },
    blog: {
        readingTime: '{{minutes}} Min. Lesezeit',
        ctaTitle: 'OpenClaw und Hermes mit einem Klick bereitstellen',
        ctaDescription:
            'Erhalte einen dedizierten Server mit vorinstalliertem OpenClaw und Hermes. Voller Root-Zugriff, globale Standorte und in Minuten einsatzbereit. Er gehört dir jederzeit. Ab 25 $.',
        ctaDeploy: 'Agent bereitstellen',
        ctaGitHub: 'Auf GitHub ansehen'
    },
    changelog: {
        title: 'Änderungsprotokoll',
        description:
            'Verfolge Updates, neue Funktionen und Verbesserungen an ClawHost.',
        subtitle:
            'Alle Updates, neue Funktionen und Verbesserungen an ClawHost.',
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
        release15Date: '11. April 2026',
        release15Title: 'Vereinfachung & benutzerdefinierte Subdomains',
        release15Description:
            'Vereinfachung der Plattform durch Migration der verwalteten Funktionen zu OpenClaw, Entfernung der Playground-Ansicht und Einführung änderbarer benutzerdefinierter Subdomains.',
        release15Feature1:
            'Vereinfachung und Migration der verwalteten Funktionen zu OpenClaw, kein ClawHost-Chat, Agenten, Kanäle, Variablen und Fähigkeiten mehr',
        release15Feature2:
            'Enhanced file explorer with full editing support, 100+ language syntax highlighting, and export as .zip',
        release15Feature3:
            'Removed playground view for a cleaner, more focused dashboard experience',
        release15Feature4:
            'Changeable custom subdomains, update your claw subdomain to your loved one',
        release14Date: '1. April 2026',
        release14Title: 'Hetzner-Migration, Affiliate-System & neue Sprachen',
        release14Description:
            'Zentralisierung der gesamten Infrastruktur auf Hetzner für beste Preise und Leistung, Start des Affiliate-Systems mit 15% Provision, Hinzufügen von 10 neuen Sprachen und Entwicklung interner Tools für stabilen Versions-Support.',
        release14Feature1:
            'DigitalOcean und Vultr entfernt — die gesamte Infrastruktur läuft jetzt ausschließlich auf Hetzner mit unendlicher Kapazität und ohne anbieterseitige Einschränkungen',
        release14Feature2:
            'Affiliate-System, mit dem Benutzer 15% Provision auf jede empfohlene Bestellung verdienen können',
        release14Feature3:
            '10 neue Sprachen hinzugefügt: Chinesisch, Hindi, Arabisch, Russisch, Japanisch, Türkisch, Italienisch, Polnisch, Niederländisch und Portugiesisch',
        release14Feature4:
            'Interne Tools für stabile Feature-Unterstützung aktueller OpenClaw-Versionen, ohne Unterstützung älterer Versionen',
        release12Date: '14. März 2026',
        release12Title: 'Jahresabonnements, Sprachmodus & mehr',
        release12Description:
            'Jahresabonnements mit 2 Monaten gratis, Sprachmodus, Instanz-Neuinstallation und eine erste Landingpage für ClawHost Go.',
        release12Feature1:
            'Landingpage für ClawHost Go, lokales Hosting mit ClawHost',
        release12Feature2:
            'Jahresabonnement-Support mit 2 Monaten gratis bei jährlicher Buchung',
        release12Feature3:
            'Sprachmodus zur Interaktion mit den auf ClawHost gehosteten OpenClaw-Agenten',
        release12Feature4:
            'OpenClaw auf Ihrer Instanz neu installieren, um von vorne zu beginnen, einmal pro Tag verfügbar',
        release11Date: '28. Februar 2026',
        release11Title: 'Text-zu-Sprache, Terminal, Chat-Tabs & Datei-Explorer',
        release11Description:
            'Hören Sie sich Agentenantworten mit Text-zu-Sprache an, interagieren Sie direkt über das Terminal mit Ihrem VPS, navigieren Sie schneller in Chats mit Seitenleisten-Tabs und durchsuchen Sie Dateien mit dem verbesserten Datei-Explorer.',
        release11Feature1:
            'Text-zu-Sprache für Agentennachrichten im Playground',
        release11Feature2:
            'Terminal zur direkten Interaktion mit Ihren VPS-Instanzen vom Dashboard aus',
        release11Feature3:
            'Chat-Seitenleisten-Tabs für einfachen Zugriff und Navigation',
        release11Feature4:
            'Verbesserungen am Datei-Explorer mit Suchleiste zum Durchsuchen von Dateien',
        release11Feature5:
            'Behebung von Nachrichtenzeitstempeln, die nicht in Echtzeit angezeigt wurden',
        release10Date: '22. Februar 2026',
        release10Title: 'Feature-Anfragen, Datei-Explorer & Fehlerbehebungen',
        release10Description:
            'Community-getriebene Feature-Anfragen, erweiterte Dateibearbeitungsunterstützung und verschiedene Fehlerbehebungen.',
        release10Feature1:
            'Feature-Anfragen automatisch verwaltet und veröffentlicht durch OpenClaw-Agenten',
        release10Feature3:
            'Behebung des Modellanbieterwechsels, der sich nicht auswirkte und weiterhin das ursprüngliche Modell verwendete',
        release10Feature4:
            'Mehrere Verbesserungen und Fehlerbehebungen auf der Plattform',
        release10Feature5:
            'TypeScript-, Markdown- und Textdateien sind jetzt im Datei-Explorer bearbeitbar',
        release9Date: '21. Februar 2026',
        release9Title: 'Vergleiche, Playground-Refactoring & Mehr',
        release9Description:
            'Vergleichsseiten mit Wettbewerbern, Umstrukturierung der Playground-Funktionen, mehrsprachige Unterstützung und allgemeine Leistungsverbesserungen.',
        release9Feature1: 'Unterstützung für dunkles und helles Design',
        release9Feature2:
            'Mehrsprachige Unterstützung mit Englisch, Französisch, Spanisch und Deutsch',
        release9Feature3:
            'Vergleichsseiten mit vollständigen Analysen gegenüber Wettbewerbern',
        release9Feature4:
            'OpenClaw-Versionen, mit einem Klick aktualisieren oder jede Version sofort installieren',
        release9Feature5:
            'Refactoring der Playground-Funktionsstruktur und Vereinfachungen',
        release9Feature6:
            'Verbesserungen bei Leistung, Stabilität und Reaktionsfähigkeit',
        release8Date: '18. Februar 2026',
        release8Title: 'Helles Design, Leistung & Stabilität',
        release8Description:
            'Helles Design, Leistungs- und Erfahrungsverbesserungen sowie Stabilitäts- und Reaktionsfähigkeitsverbesserungen.',
        release8Feature1: 'Helles, dunkles und systembasiertes Design',
        release8Feature2: 'Leistungs- und Erfahrungsverbesserungen',
        release8Feature3: 'Stabilitäts- und Reaktionsfähigkeitsverbesserungen',
        release7Date: '16. Februar 2026',
        release7Title: 'Chat-Refactoring & Spracheingabe',
        release7Description:
            'Große Chat- und Playground-Verbesserungen mit Sprachinteraktion und Dateianhängen für Agenten.',
        release7Feature1:
            'Chat- und Playground-Refactoring für ein flüssigeres, reaktionsschnelleres Erlebnis',
        release7Feature2:
            'Sprachinteraktion mit Chats, Sprache direkt im Browser aufnehmen und transkribieren',
        release7Feature4:
            'Anhänge-Ansicht und -Nutzung für Agenten, Bilder und Dokumente im Chat senden',
        release6Date: '16. Februar 2026',
        release6Title: 'Agenten-Chat',
        release6Description:
            'Volle Kontrolle über deine OpenClaw-Agenten. Verwalte und chatte mit allem direkt vom Dashboard aus.',
        release6Feature3:
            'Chatte mit deinen Agenten im Playground, interagiere mit jedem Agenten in Echtzeit',
        release6Feature4:
            'Anmeldung mit Google oder GitHub, schnelle, sichere Authentifizierung ohne E-Mail-Codes',
        release1Date: '8. Februar 2026',
        release1Title: 'Erstveröffentlichung',
        release1Description:
            'Die erste offizielle Veröffentlichung von ClawHost. Stelle OpenClaw mit einem Klick auf deinem eigenen VPS bereit.',
        release1Feature1: 'Ein-Klick-OpenClaw-Bereitstellung',
        release1Feature2:
            'Dashboard zur Verwaltung von Claws – Instanzen starten, stoppen, neustarten und löschen',
        release1Feature3:
            '18 Serverpläne mit dedizierter vCPU, RAM und Speicheroptionen',
        release1Feature4: '6 Serverstandorte in den USA, Europa und Asien',
        release1Feature5:
            'SSH-Schlüsselverwaltung für passwortlosen Serverzugriff',
        release1Feature6: 'Zusätzlicher Volumenspeicher bis zu 10 TB',
        release1Feature7:
            'Magic-Link-Authentifizierung, keine Passwörter nötig',
        release1Feature8: 'Online-Zugriff auf OpenClaw über sichere Subdomains',
        release1Feature9:
            'Zahlungsintegration mit transparenter Preisgestaltung pro Server',
        release1Feature10: 'Abrechnungsverlauf und Rechnungsverwaltung',
        release1Feature11:
            'Automatische Bereitstellung mit vorinstalliertem und konfiguriertem OpenClaw',
        release2Date: '8. Februar 2026',
        release2Title: 'Changelog & mehr',
        release2Description:
            'Eine neue Möglichkeit, über alles rund um ClawHost informiert zu bleiben.',
        release2Feature1:
            'Änderungsprotokoll-Seite zur Verfolgung aller Plattform-Updates und -Veröffentlichungen',
        release3Date: '10. Februar 2026',
        release3Title: 'Server-Einblicke',
        release3Description:
            'Tiefere Einblicke und Kontrolle über deine Server, direkt vom Dashboard aus.',
        release3Feature1: 'Echtzeit-Server-Logs direkt im Dashboard gestreamt',
        release3Feature2:
            'Serverdiagnose mit automatischer Ein-Klick-Reparatur bei Dienstproblemen',
        release3Feature3:
            'Integrierter Datei-Explorer und JSON-Editor für Serverkonfigurationsdateien',
        release4Date: '14. Februar 2026',
        release4Title: 'Agenten & Datenexport',
        release4Description:
            'Agenten-Playground, Multi-Agenten-Verwaltung und portabler Datenexport für deine OpenClaw-Instanzen.',
        release4Feature1:
            'Ein-Klick-Agenten-Playground und -Übersicht, mehrere Agenten hinzufügen und verwalten',
        release4Feature2: 'Exportiere dein OpenClaw als portables ZIP-Archiv',
        release4Feature3:
            'Interaktiver Playground mit graphbasierter Visualisierung von Claws und Agenten',
        release4Feature4:
            'Raster- und Listenansicht-Umschalter zugunsten eines einheitlichen Dashboard-Layouts entfernt'
    },
    clawDetail: {
        noAgentsYet: 'Keine Agenten',
        noAgentsDescription:
            'Stelle deinen ersten Agent bereit, um mit ihm zu interagieren.',
        collapseSidebar: 'Seitenleiste einklappen',
        expandSidebar: 'Seitenleiste ausklappen',
        selectClaw: 'Wähle einen Agenten',
        selectClawDescription:
            'Wähle einen Agenten in der Seitenleiste aus, um seine Details anzuzeigen.',
        closeDetails: 'Schließen',
        tabOverview: 'Übersicht',
        overviewTitle: 'Gateway-Übersicht',
        overviewGatewayStatus: 'Gateway-Status',
        overviewOnline: 'Online',
        overviewOffline: 'Offline',
        overviewVersion: 'Version',
        overviewUptime: 'Betriebszeit',
        overviewSessions: 'Sitzungen',
        overviewSessionsCount: '{{count}} aktiv',
        overviewNoSessions: 'Keine aktiven Sitzungen',
        overviewSessionName: 'Sitzung',
        overviewSessionModel: 'Modell',
        overviewSessionMessages: 'Nachrichten',
        overviewSessionLastActive: 'Zuletzt aktiv',
        overviewModels: 'Modelle',
        overviewError: 'Übersicht konnte nicht geladen werden!',
        overviewErrorDescription:
            'Verbindung zum OpenClaw-Gateway konnte nicht hergestellt werden. Bitte überprüfen Sie, ob die Instanz läuft.',
        overviewUnsupportedTitle: 'Übersicht nicht unterstützt',
        overviewUnsupportedDescription:
            'Ihre OpenClaw-Version unterstützt die Übersichtsfunktion nicht. Bitte aktualisieren Sie auf die neueste Version.',
        overviewHermesTitle: 'Hermes läuft im Terminal',
        overviewHermesDescription:
            'Hermes ist ein TUI-Agent — öffnen Sie den Terminal-Tab und führen Sie `hermes` aus, um eine Sitzung zu starten. Über die Tabs Dateien und Versionen können Sie die Konfiguration bearbeiten und aktualisieren.',
        overviewHermesOpenTerminal: 'Terminal öffnen',
        viewDocs: 'Dokumentation',
        overviewUptimeDays: '{{days}}d {{hours}}h {{minutes}}m',
        overviewUptimeHours: '{{hours}}h {{minutes}}m',
        overviewUptimeMinutes: '{{minutes}}m',
        overviewService: 'Dienst',
        overviewServiceActive: 'Aktiv',
        overviewServiceInactive: 'Inaktiv',
        overviewPort: 'Port 18789',
        overviewPortOpen: 'Lauschend',
        overviewPortClosed: 'Geschlossen',
        overviewReady: 'Bereit',
        overviewNotReady: 'Nicht bereit',
        overviewConfiguration: 'Konfiguration',
        overviewBrowser: 'Browser',
        overviewCommands: 'Shell-Befehle',
        overviewTools: 'Werkzeuge',
        overviewSubdomain: 'Subdomain',
        overviewInstanceStatus: 'Instanzstatus',
        overviewModel: 'Model',
        overviewAgents: 'Agenten',
        overviewMemoryStatus: 'Speicher',
        overviewHeartbeat: 'Heartbeat',
        overviewEvents: 'Ereignisse',
        overviewProbes: 'Probes',
        overviewPlugins: 'Plugins',
        tabPreview: 'Vorschau',
        previewNotEnabled: 'Vorschau ist für diese Instanz nicht aktiviert.',
        previewNotEnabledDescription:
            'Aktivieren Sie die Vorschau, um Ihren Agent direkt im Dashboard einzubetten.',
        previewEnable: 'Vorschau aktivieren',
        previewEnabling: 'Wird aktiviert...',
        previewEnabled: 'Vorschau aktiviert.',
        previewEnableFailed: 'Vorschau konnte nicht aktiviert werden!',
        previewEnableCanceledNavigation:
            'Vorschauaktivierung unterbrochen weil du die Seite verlassen hast.',
        previewError: 'Vorschau konnte nicht geladen werden.',
        previewErrorDescription:
            'Der Agent ist möglicherweise offline oder nicht erreichbar.',
        previewRetry: 'Erneut versuchen',
        tabInfo: 'Info',
        tabLogs: 'Logs',
        tabTerminal: 'Terminal',
        terminalConnecting: 'Verbindung zum Terminal...',
        terminalDisconnected: 'Terminal getrennt.',
        terminalError: 'Verbindung zum Terminal fehlgeschlagen!',
        terminalReconnect: 'Erneut verbinden',
        tabDisabledConfiguring:
            'Verfügbar, sobald die Instanz fertig konfiguriert ist.',
        tabDisabledAwaitingPayment:
            'Verfügbar, sobald die Zahlung verarbeitet wurde.',
        creatingTitle: 'Dein Agent wird eingerichtet',
        creatingDescription:
            'Das dauert normalerweise ein bis zwei Minuten. Du kannst diese Seite bedenkenlos schließen und später zurückkommen.',
        creatingDescriptionLocal:
            'Das dauert normalerweise nur einen Moment. Lasse die App geöffnet, bis es fertig ist.',
        configuringTitle: 'OpenClaw wird installiert',
        configuringTitleHermes: 'Hermes wird installiert',
        loadingTipHermes1:
            'Hermes ist ein TUI-Agent — öffnen Sie nach dem Start den Terminal-Tab, um mit ihm zu chatten.',
        loadingTipHermes2:
            'Konfigurieren Sie Modellanbieter (OpenRouter, Anthropic usw.) in ~/.hermes/.env über den Tab Dateien.',
        loadingTipHermes3:
            'Verbinden Sie Telegram, Discord oder Slack im Terminal mit `hermes gateway install`.',
        configuringDescription:
            'Das dauert normalerweise ein bis zwei Minuten. Du kannst diese Seite bedenkenlos schließen und später zurückkommen.',
        configuringDescriptionLocal:
            'Die Agent-Laufzeit wird lokal installiert. Lasse die App geöffnet, bis es fertig ist.',
        awaitingPaymentTitle: 'Zahlung ausstehend',
        awaitingPaymentDescription:
            'Schließe die Zahlung ab, um die Bereitstellung deines Agenten zu starten. Diese Reservierung läuft in einer Stunde ab.',
        awaitingPaymentAction: 'Zahlung abschließen',
        loadingTip1:
            'Wusstest du, dass du mehrere Agenten in einem OpenClaw betreiben kannst?',
        loadingTip2: 'Wusstest du, dass OpenClaw Open Source ist?',
        loadingTip3:
            'ClawHost ist das erste Projekt überhaupt, das Ein-Klick-OpenClaw-Hosting ermöglicht.',
        loadingTip4:
            'Du kannst auf deinen Agenten per SSH oder über das integrierte Terminal zugreifen.',
        loadingTip5: 'Dein Agent erhält automatisch eine eigene Subdomain.',
        loadingTip6:
            'Du kannst das Symbol und den Namen deines Agenten jederzeit in den Einstellungen anpassen.',
        loadingTip7:
            'Der gesamte Datenverkehr zu deinem Agenten ist mit TLS verschlüsselt.',
        loadingTip8:
            'Du kannst CPU-, Speicher- und Festplattennutzung im Monitor-Tab überwachen.',
        loadingTip9:
            'Brauchst du Hilfe? Tritt unserer Community auf Discord bei.',
        loadingTip10:
            'Du kannst die gesamte Konfiguration deines Agenten als Backup exportieren.',
        loadingTip11:
            'SSH-Schlüssel können auf laufende Instanzen angewendet werden, ohne neu zu installieren.',
        loadingTip12:
            'Du kannst dein Root-Passwort und Gateway-Token im Sicherheits-Tab rotieren.',
        loadingTip13:
            'ClawHost unterstützt Server in mehreren Regionen in Europa und den USA.',
        tabSettings: 'Einstellungen',
        featureVersionUnsupported:
            '{{feature}} nicht unterstützt auf {{version}}',
        featureVersionUnsupportedDescription:
            'Wir unterstützen die Verwaltung von {{feature}} mit dieser Version über unsere Benutzeroberfläche nicht. Sie können es weiterhin über SSH, Terminal oder das OpenClaw-Kontrollpanel verwalten.',
        featureVersionUnsupportedButton: 'Zu Versionen',
        featureVersionUnsupportedSupported: 'Unterstützte Versionen:',
        featureVersionUnsupportedNewer: 'neuere Versionen',
        tabVersions: 'Versionen',
        tabFiles: 'Datei-Explorer',
        tabMonitor: 'Monitor',
        tabVolumes: 'Speicher',
        tabSecurity: 'Sicherheit',
        securitySSHKey: 'SSH-Schlüssel',
        securitySSHKeyHint:
            'Wird auf die laufende Instanz angewendet und bei der Neuinstallation verwendet.',
        securityPassword: 'Root-Passwort',
        securityGatewayToken: 'Gateway-Token',
        securityHostKey: 'Host-Schlüssel-Fingerabdruck',
        securityRotatePassword: 'Passwort rotieren',
        securityRotateToken: 'Token rotieren',
        securityRandomize: 'Zufällig generieren',
        securitySavePassword: 'Passwort speichern',
        securitySaveToken: 'Token speichern',
        volumesTitle: 'Volumes',
        volumesCount: '{{count}} Volumes',
        volumesEmpty: 'Keine Volumes angehängt.',
        volumesEmptyDescription:
            'Diese Instanz hat keine persistenten Speicher-Volumes.',
        volumesReadOnly:
            'Speicher kann nur während der Instanzerstellung hinzugefügt werden. Um Speicher hinzuzufügen, stellen Sie eine neue Instanz mit der gewünschten Volume-Größe bereit, oder kontaktieren Sie das',
        volumesContactSupport: 'Support-Team',
        metricsTitle: 'Server-Metriken',
        metricsLive: 'Live',
        metricsCpu: 'CPU-Auslastung',
        metricsMemory: 'Speicherauslastung',
        metricsDisk: 'Festplattenauslastung',
        metricsNetwork: 'Netzwerk',
        metricsLoadAvg: 'Durchschnittliche Last',
        metricsProcesses: 'Top-Prozesse',
        metricsUptime: 'Betriebszeit',
        metricsUsed: 'Belegt',
        metricsAvailable: 'Verfügbar',
        metricsTotal: 'Gesamt',
        metricsReceived: 'Empfangen',
        metricsSent: 'Gesendet',
        metricsLoad1: '1 min',
        metricsLoad5: '5 min',
        metricsLoad15: '15 min',
        metricsProcessPid: 'PID',
        metricsProcessUser: 'Benutzer',
        metricsProcessCpu: 'CPU %',
        metricsProcessMem: 'MEM %',
        metricsProcessCommand: 'Befehl',
        metricsError: 'Metriken konnten nicht geladen werden!',
        metricsErrorDescription:
            'Verbindung zum Server konnte nicht hergestellt werden, um Metriken abzurufen. Bitte überprüfen Sie, ob die Instanz läuft.',
        metricsAutoRefresh:
            'Automatische Aktualisierung alle {{seconds}} Sekunden',
        tabBilling: 'Billing',
        billingEmpty: 'No billing history for this instance.',
        tabServer: 'Server',
        serverIpAddress: 'IP-Adresse',
        reinstallDescription:
            '{{agentName}} auf diesem Server neu installieren. Dies setzt die Installation zurück, behält aber deine Daten bei. Tue dies nur, wenn nötig.',
        versionsSearch: 'Versionen suchen...',
        versionsSearchCount: '{{count}} Versionen durchsuchen...',
        versionsEmpty: 'Keine Versionen gefunden',
        versionsEmptyDescription:
            'Keine Versionen stimmen mit Ihrer Suche überein.',
        versionsErrorDescription:
            'Versionen konnten nicht geladen werden. Bitte überprüfen Sie Ihre Verbindung und versuchen Sie es erneut!',
        versionsChangelog: 'Changelogs auf npm ansehen',
        versionCurrent: 'Aktuell',
        versionLatest: 'Neueste',
        updateAvailable: 'A newer version of OpenClaw is available',
        updateAvailableDescription:
            'A new version of OpenClaw ({{version}}) is available for your instance.',
        updateAvailableDescriptionHermes:
            'A new version of Hermes ({{version}}) is available for your instance.',
        goToVersions: 'Go to Versions',
        versionInstall: 'Installieren',
        versionInstalling: 'Installiert...',
        versionInstallSuccess: 'Version {{version}} erfolgreich installiert.',
        versionInstallFailed: 'Version konnte nicht installiert werden!',
        installVersionCanceledNavigation:
            'Versionsinstallation unterbrochen weil du die Seite verlassen hast.',
        versionDownloads: '{{count}} Downloads',
        versionChangelog: 'Changelog',
        versionOutdated: 'Veraltet',
        versionSupported: 'Unterstützt',
        versionSupportedTooltip:
            'Diese Version ermöglicht die Verwaltung von OpenClaw über die Benutzeroberfläche',
        versionInstallConfirmTitle: 'Version {{version}} installieren',
        versionInstallConfirmDescription:
            'Ein Versionswechsel kann unerwartetes Verhalten verursachen oder zusätzliche manuelle Konfiguration erfordern, insbesondere bei neueren Versionen, die noch nicht vollständig überprüft wurden. Möchten Sie fortfahren?',
        settingsIcon: 'Symbol',
        settingsIconDescription: 'Klicken Sie, um das Agent-Symbol zu ändern.',
        settingsIconRandomize: 'Zufällig',
        settingsIconRemove: 'Symbol entfernen',
        settingsBackground: 'Hintergrund',
        settingsBackgroundReset: 'Zurücksetzen',
        settingsName: 'Name',
        settingsNamePlaceholder: 'Claw-Name eingeben',
        settingsNameDescription: 'Nur Buchstaben, Zahlen und Bindestriche.',
        subdomain: 'Subdomain',
        subdomainPlaceholder: 'Subdomain eingeben',
        subdomainDescription:
            'Kleinbuchstaben und Zahlen, {{min}}-{{max}} Zeichen.',
        subdomainInvalid:
            'Nur {{min}}-{{max}} Kleinbuchstaben und Zahlen verwenden!',
        subdomainUpdated: 'Subdomain erfolgreich aktualisiert.',
        subdomainUpdateFailed: 'Subdomain konnte nicht aktualisiert werden!',
        subdomainInUse:
            'Diese Subdomain wird bereits von einem anderen Claw verwendet!',
        settingsDetails: 'Details',
        settingsDangerZone: 'Gefahrenzone',
        settingsDangerZoneDescription:
            'Deine Instanz wird am Ende deines aktuellen Abrechnungszeitraums gelöscht.',
        settingsDangerZoneDescriptionLocal:
            'Dies löscht den Agenten und alle seine Dateien dauerhaft.',
        settingsScheduledDeletionDescription:
            'Zur Löschung am {{date}} geplant. Abbrechen, um deine Instanz aktiv und dein Abonnement bestehen zu lassen.',
        settingsSave: 'Speichern',
        settingsSaving: 'Speichern...',
        settingsUpdated: 'Einstellungen aktualisiert.',
        settingsUpdateFailed:
            'Einstellungen konnten nicht aktualisiert werden!',
        saveCanceledNavigation:
            'Speichern unterbrochen weil du die Seite verlassen hast.',
        savePasswordCanceledNavigation:
            'Passwortspeicherung unterbrochen weil du die Seite verlassen hast.',
        saveGatewayTokenCanceledNavigation:
            'Gateway-Token-Speicherung unterbrochen weil du die Seite verlassen hast.',
        saveSSHKeyCanceledNavigation:
            'SSH-Schlüssel-Speicherung unterbrochen weil du die Seite verlassen hast.',
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
        title: 'Datenschutzerklärung',
        description:
            'Erfahre, wie ClawHost deine personenbezogenen Daten erhebt, verwendet und schützt.',
        lastUpdated: 'Zuletzt aktualisiert: 14. März 2026',
        introTitle: '1. Einleitung',
        introText:
            'ClawHost („wir", „unser" oder „uns") ist dem Schutz deiner Privatsphäre verpflichtet. Diese Datenschutzerklärung erläutert, wie wir deine Daten erheben, verwenden, offenlegen und schützen, wenn du unseren Dienst nutzt.',
        authTitle: '2. Authentifizierung',
        authText:
            'ClawHost verwendet Google Firebase Authentication zur Verwaltung von Benutzerkonten. Du kannst dich mit E-Mail, Google oder GitHub anmelden. Durch die Nutzung dieser Anmeldemethoden stimmst du den jeweiligen Nutzungsbedingungen und Datenschutzerklärungen zu. Diese Anbieter können grundlegende Daten wie deine E-Mail-Adresse, deinen Namen und Geräteinformationen erheben. Wir speichern nur deine E-Mail-Adresse und deinen Anzeigenamen.',
        collectTitle: '3. Von uns erhobene Daten',
        collectText: 'Wir erheben Daten auf folgende Weise:',
        personalInfoTitle: 'Personenbezogene Daten',
        personalInfoEmail:
            'E-Mail-Adresse (für Kontoerstellung und Kommunikation)',
        personalInfoName: 'Name (optional, zur Personalisierung)',
        personalInfoPayment:
            'Zahlungsinformationen (werden sicher durch Drittanbieter verarbeitet)',
        serverInfoTitle: 'Serverinformationen',
        serverInfoConfig: 'Serverkonfiguration und -status',
        serverInfoIp: 'Server-IP-Adresse und -Standort',
        serverInfoResources: 'Ressourcenzuweisung (CPU, RAM, Speicher)',
        useTitle: '4. Verwendung deiner Daten',
        useText: 'Wir verwenden die erhobenen Daten, um:',
        useProvide: 'Unseren Dienst bereitzustellen und zu pflegen',
        useTransactions:
            'Transaktionen zu verarbeiten und Abrechnungsinformationen zu senden',
        useNotices: 'Wichtige Hinweise und Updates zu senden',
        useSupport: 'Auf Supportanfragen zu reagieren',
        useAnalyze:
            'Nutzungsmuster zu überwachen und zu analysieren, um unseren Dienst zu verbessern',
        useFraud: 'Betrug oder Missbrauch zu erkennen und zu verhindern',
        sharingTitle: '5. Datenweitergabe und Offenlegung',
        sharingText:
            'Wir verkaufen deine personenbezogenen Daten nicht. Wir können Daten teilen mit:',
        sharingProviders:
            'Dienstleistern, die uns beim Betrieb unseres Dienstes unterstützen (z. B. Cloud-Infrastrukturanbieter)',
        sharingLegal:
            'Behörden, wenn dies gesetzlich vorgeschrieben ist oder um unsere Rechte zu schützen',
        sharingBusiness:
            'Geschäftspartnern im Falle einer Fusion, Übernahme oder eines Verkaufs von Vermögenswerten',
        securityTitle: '6. Datensicherheit',
        securityText:
            'Wir setzen angemessene technische und organisatorische Maßnahmen ein, um deine personenbezogenen Daten gegen unbefugten Zugriff, Änderung, Offenlegung oder Zerstörung zu schützen. Dazu gehören Verschlüsselung, sichere Server und regelmäßige Sicherheitsbewertungen.',
        retentionTitle: '7. Datenspeicherung',
        retentionText:
            'Wir speichern deine personenbezogenen Daten, solange dein Konto aktiv ist oder es für die Bereitstellung unserer Dienste erforderlich ist. Bestimmte Daten können wir aufgrund gesetzlicher Verpflichtungen oder berechtigter Geschäftsinteressen aufbewahren.',
        rightsTitle: '8. Deine Rechte',
        rightsText: 'Je nach Standort hast du möglicherweise das Recht auf:',
        rightsAccess: 'Zugang zu deinen personenbezogenen Daten',
        rightsCorrect: 'Berichtigung unrichtiger Daten',
        rightsDelete: 'Löschung deiner Daten',
        rightsObject: 'Widerspruch gegen die Verarbeitung deiner Daten',
        rightsPortability: 'Datenübertragbarkeit',
        rightsWithdraw: 'Widerruf der Einwilligung jederzeit',
        cookiesTitle: '9. Cookies und Tracking',
        cookiesText:
            'Wir verwenden keine Cookies. Die Authentifizierung wird über Firebase abgewickelt und ist nicht auf in deinem Browser gespeicherte Cookies angewiesen.',
        transfersTitle: '10. Internationale Datenübermittlungen',
        transfersText:
            'Deine Daten können in andere Länder als dein eigenes übermittelt und dort verarbeitet werden. Wir stellen sicher, dass angemessene Schutzmaßnahmen zum Schutz deiner Daten gemäß dieser Datenschutzerklärung vorhanden sind.',
        eligibilityTitle: '11. Berechtigung',
        eligibilityText:
            'Unser Dienst steht jedem zur Verfügung. Es gibt keine Altersbeschränkungen für die Nutzung von ClawHost.',
        changesTitle: '12. Änderungen dieser Richtlinie',
        changesText:
            'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden dich über Änderungen informieren, indem wir die neue Datenschutzerklärung auf dieser Seite veröffentlichen und das Datum „Zuletzt aktualisiert" anpassen.',
        contactTitle: '13. Kontakt',
        contactText:
            'Bei Fragen zu dieser Datenschutzerklärung oder zur Ausübung deiner Rechte kontaktiere uns bitte unter'
    },
    terms: {
        title: 'Nutzungsbedingungen',
        description:
            'Lies die Geschäftsbedingungen für die Nutzung der ClawHost-Dienste.',
        lastUpdated: 'Zuletzt aktualisiert: 14. März 2026',
        acceptanceTitle: '1. Annahme der Bedingungen',
        acceptanceText:
            'Durch den Zugriff auf und die Nutzung von ClawHost („Dienst") akzeptierst du die Bedingungen und Bestimmungen dieser Vereinbarung und erklärst dich damit einverstanden, daran gebunden zu sein. Wenn du diesen Bedingungen nicht zustimmst, nutze bitte unseren Dienst nicht.',
        serviceTitle: '2. Beschreibung des Dienstes',
        serviceText:
            'ClawHost bietet die Ein-Klick-Bereitstellung von OpenClaw und Hermes auf dedizierten Servern. Wir ermöglichen Nutzern, vorkonfigurierte OpenClaw- und Hermes-Instanzen mit vollem Root-Zugriff und dedizierten Ressourcen bereitzustellen, zu verwalten und darauf zuzugreifen.',
        authTitle: '3. Authentifizierung',
        authText:
            'ClawHost verwendet Google Firebase Authentication zur Anmeldungsverwaltung. Du kannst dich mit E-Mail, Google oder GitHub authentifizieren. Durch die Nutzung dieser Methoden stimmst du den jeweiligen Nutzungsbedingungen und Datenschutzerklärungen von Google und GitHub zu. Diese Anbieter können grundlegende Daten wie deine E-Mail-Adresse, deinen Namen und Gerätedaten erheben.',
        responsibilitiesTitle: '4. Benutzerpflichten',
        responsibilitiesText: 'Du stimmst zu:',
        responsibilitiesAccurate:
            'Genaue und vollständige Registrierungsdaten anzugeben',
        responsibilitiesSecurity:
            'Die Sicherheit deiner Kontodaten zu gewährleisten',
        responsibilitiesCompliance:
            'Den Dienst unter Einhaltung aller geltenden Gesetze zu nutzen',
        responsibilitiesLegal:
            'Den Dienst nicht für illegale oder unbefugte Zwecke zu nutzen',
        responsibilitiesAccess:
            'Keinen unbefugten Zugriff auf Systeme oder Netzwerke zu versuchen',
        prohibitedTitle: '5. Verbotene Nutzung',
        prohibitedText: 'Du darfst unseren Dienst nicht verwenden, um:',
        prohibitedMalware:
            'Malware, Viren oder sonstige schädliche Software zu verbreiten',
        prohibitedDos:
            'Denial-of-Service-Angriffe oder Netzwerkmissbrauch durchzuführen',
        prohibitedSpam: 'Spam oder unerwünschte Kommunikation zu versenden',
        prohibitedIllegal: 'Illegale Inhalte zu hosten oder zu verbreiten',
        prohibitedIp:
            'Rechte Dritter einschließlich geistigen Eigentums zu verletzen',
        prohibitedMining: 'Kryptowährung zu schürfen',
        prohibitedOther:
            'Jede andere rechtswidrige oder schädliche Aktivität, die wir nach eigenem Ermessen als unangemessen erachten',
        paymentTitle: '6. Zahlung und Abrechnung',
        paymentText:
            'Dienste werden monatlich oder jährlich pauschal abgerechnet. Du kannst jederzeit zwischen monatlicher und jährlicher Abrechnung wechseln, wobei die Änderung zu Beginn deines nächsten Abrechnungszeitraums wirksam wird. Alle Zahlungen sind nicht erstattungsfähig. Wenn du für einen Server zahlst, hast du für den gesamten Abrechnungszeitraum Zugriff darauf. Bei einer Kündigung wird diese am Ende des aktuellen Abrechnungszeitraums wirksam. Preise können sich ändern, jedoch gelten Änderungen nur für neu bereitgestellte Claws und haben keinen Einfluss auf bereits bestehende. Nichtzahlung kann zur Aussetzung oder Kündigung deines Kontos führen.',
        availabilityTitle: '7. Dienstverfügbarkeit',
        availabilityText:
            'Wir bemühen uns um hohe Verfügbarkeit, garantieren jedoch keinen ununterbrochenen Zugang zum Dienst. Wir behalten uns das Recht vor, Teile des Dienstes jederzeit mit oder ohne Vorankündigung zu ändern, auszusetzen oder einzustellen.',
        liabilityTitle: '8. Haftungsbeschränkung',
        liabilityText:
            'Im größtmöglichen gesetzlich zulässigen Umfang haftet ClawHost nicht für indirekte, zufällige, besondere, Folge- oder Strafschäden oder für entgangene Gewinne oder Einnahmen, unabhängig davon, ob sie direkt oder indirekt entstanden sind.',
        terminationTitle: '9. Kündigung',
        terminationText:
            'Wir können dein Konto und den Zugang zum Dienst sofort und ohne vorherige Ankündigung sperren oder kündigen, wenn wir der Ansicht sind, dass dein Verhalten gegen diese Bedingungen verstößt oder anderen Nutzern, uns oder Dritten schadet, oder aus jedem anderen Grund.',
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
        changesToTermsTitle: '11. Änderungen der Bedingungen',
        changesToTermsText:
            'Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Wir werden Benutzer über wesentliche Änderungen per E-Mail oder über den Dienst informieren. Die fortgesetzte Nutzung des Dienstes nach solchen Änderungen gilt als Annahme der aktualisierten Bedingungen.',
        contactTitle: '12. Kontaktinformationen',
        contactText:
            'Bei Fragen zu diesen Bedingungen kontaktiere uns bitte unter'
    },
    productHunt: {
        liveOn: 'Live auf',
        productHunt: 'Product Hunt',
        celebrate: 'Unterstütze uns & genieße',
        discount: '10% Rabatt',
        yourFirstMonth: 'auf deine erste Bestellung',
        upvoteNow: 'Stimme für uns'
    },
    hermesBanner: {
        title: 'Hermes Agent',
        message:
            'Hermes-Agenten werden jetzt für die Bereitstellung auf ClawHost unterstützt.'
    },
    compare: {
        title: 'Vergleich',
        description:
            'Erfahre, wie sich ClawHost von anderen OpenClaw-Hosting-Plattformen unterscheidet.',
        badge: 'Vergleich',
        feature: 'Plattform',
        compareWith: 'Vergleichen mit',
        lastUpdated: 'Zuletzt aktualisiert: März 2026',
        competitorClawHost: 'ClawHost',
        competitorLobsterFarm: 'LobsterFarm',
        competitorSimpleAgent: 'SimpleAgent',
        competitorMyAgentAi: 'MyAgent.ai',
        competitorQuickAgent: 'QuickAgent',
        categoryInfrastructure: 'Infrastruktur',
        categoryPricing: 'Preise & Abrechnung',
        categoryDeployment: 'Bereitstellung & Einrichtung',
        categoryManagement: 'OpenClaw-Verwaltung',
        categorySecurity: 'Daten & Sicherheit',
        categoryMonitoring: 'Überwachung & Wartung',
        categorySupport: 'Support & Plattform',
        featureServerOwnership: 'Server-Eigentum',
        featureProviderChoice: 'Cloud-Anbieter-Auswahl',
        featureDedicatedResources: 'Dedizierte Ressourcen',
        featureRootAccess: 'Voller Root-/SSH-Zugang',
        featureServerLocations: 'Serverstandorte',
        featureStartingPrice: 'Einstiegspreis',
        featureTransparentPricing: 'Transparente Preise',
        featurePowerfulServers: 'Leistungsstarke Server, günstiger Preis',
        featureLocationSelection: 'Serverstandort auswählen',
        featureSubdomainAccess: 'Zugang über Subdomain',
        featureThemes: 'Helles und dunkles Theme',
        featureSetupTime: 'Einrichtungszeit',
        featureOneClickDeploy: 'Ein-Klick-Bereitstellung',
        featureMultipleInstances: 'Mehrere Instanzen',
        featureDataOwnership: 'Vollständiges Dateneigentum',
        featureDataExport: 'Datenexport',
        featureBackups: 'Backups',
        featureSecurityHardening: 'Sicherheitshärtung',
        featureSslTls: 'SSL/TLS',
        featureOpenSource: 'Open Source',
        featureAutoUpdates: 'Automatische Updates',
        featureDiagnostics: 'Echtzeit-Diagnose',
        featureLogStreaming: 'Log-Streaming',
        featureRepairTools: 'Reparatur-Tools',
        featureSupportChannels: 'Support-Kanäle',
        featureMultiLanguage: 'Mehrsprachige Oberfläche',
        featureDesktopApp: 'Desktop-App',
        featureOneClickVersion: 'Versionswechsel mit einem Klick',
        featureWebTerminal: 'Web-Terminal',
        featureSocials: 'Soziale Medien',
        dedicatedVps: 'Dedizierter VPS',
        sharedContainers: 'Geteilte Container',
        isolatedContainers: 'Isolierte Container',
        cloudWorkspaces: 'Cloud-Arbeitsbereiche',
        threeProviders: 'Cloud',
        singleProvider: 'Einzelner Anbieter',
        fullyDedicated: 'Vollständig dediziert',
        shared: 'Geteilt',
        fullRootSsh: 'Vollständiger Root + SSH',
        sshOnRequest: 'SSH auf Anfrage',
        noAccess: 'Kein Zugang',
        thirtyPlusLocations: '30+ Standorte',
        limitedLocations: 'Begrenzt',
        fourLocations: '4 Standorte',
        fromTwentyFiveMonth: 'Ab 25 $/Monat',
        aboutFortyFourMonth: '~44 $/Monat durchschnittlich',
        fromNineteenMonth: '19–79 $/Monat',
        nineteenMonth: '19 $/Monat',
        clearSpecsPricing: 'Klare Spezifikationen & Preise',
        unclearPricing: 'Unklare Preise',
        fixedTiers: '3 feste Stufen',
        creditBased: 'Kreditbasiert',
        minutes: 'Minuten',
        underOneMinute: 'Unter 1 Minute',
        thirtySeconds: '30 Sekunden',
        instant: 'Sofort',
        noneRequired: 'Keine',
        minimal: 'Minimal',
        unlimited: 'Unbegrenzt',
        singleInstance: 'Einzeln',
        noMarketplace: 'Kein Marktplatz',
        appOnly: 'Nur App',
        fullConfig: 'Vollständige Konfiguration',
        limitedConfig: 'Begrenzt',
        zipExport: 'ZIP-Export',
        serverTransfer: 'Servertransfer',
        noExport: 'Kein Export',
        volumeStorage: 'Volume-Speicher',
        noBackups: 'Keine Backups',
        dailyBackups: 'Tägliche Backups',
        included: 'Enthalten',
        notIncluded: 'Nicht enthalten',
        managed: 'Verwaltet',
        manual: 'Manuell',
        appStore: 'App Store',
        liveMonitoring: 'Live-Überwachung',
        liveLogs: 'Live-Logs',
        oneClickRepair: 'Ein-Klick-Reparatur',
        emailGithub: 'E-Mail, GitHub',
        humanSupport: 'Menschlicher Support',
        communityOnly: 'Nur Community',
        appSupport: 'App-Support',
        prioritySupport: '24/7-Support (Pro+)',
        fourLanguages: '4 Sprachen',
        englishOnly: 'Nur Englisch',
        available: 'Verfügbar',
        comingSoon: 'Demnächst verfügbar',
        macOsOnly: 'Nur macOS',
        viaTelegram: 'Über Telegram',
        builtInTerminal: 'Kein SSH nötig',
        notAvailable: 'Nicht verfügbar',
        disclaimer: 'Etwas geändert oder falsch? Schreib uns an',
        disclaimerOr: 'oder öffne einen Pull Request auf',
        github: 'GitHub',
        ctaTitle: 'Bereit, den Unterschied zu sehen?',
        ctaDescription:
            'Stelle OpenClaw auf deinem eigenen dedizierten Server bereit. Vollständiges Eigentum, transparente Preise und in Minuten einsatzbereit.'
    },
    admin: {
        title: 'Admin',
        description: 'Verwalten Sie Ihre Plattformbenutzer und Daten.',
        usersTab: 'Benutzer',
        totalUsers: '{{count}} Benutzer',
        noUsers: 'Noch keine Benutzer',
        noUsersDescription:
            'Keine Benutzer gefunden, die Ihren Filtern entsprechen.',
        genericErrorDescription:
            'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
        genericEmptyDescription: 'Hier gibt es noch nichts anzuzeigen.',
        failedToLoadUsers: 'Benutzer konnten nicht geladen werden!',
        failedToLoadUsersDescription:
            'Beim Laden der Benutzer ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
        failedToLoadUserDetail: 'Benutzerdetails konnten nicht geladen werden!',
        userDetail: 'Benutzerdetails',
        userInfo: 'Benutzerinfo',
        email: 'E-Mail',
        name: 'Name',
        role: 'Rolle',
        authMethods: 'Authentifizierungsmethoden',
        license: 'Lizenz',
        referralCode: 'Empfehlungscode',
        referredBy: 'Empfohlen von',
        joined: 'Beigetreten',
        claws: 'Claws',
        sshKeys: 'SSH-Schlüssel',
        volumes: 'Volumes',
        billing: 'Abrechnung',
        noClaws: 'Keine Claws',
        noSshKeys: 'Keine SSH-Schlüssel',
        noVolumes: 'Keine Volumes',
        noBilling: 'Kein Abrechnungsverlauf',
        hasLicense: 'Ja',
        noLicense: 'Nein',
        notSet: 'Nicht festgelegt',
        searchPlaceholder: 'Nach E-Mail oder Name suchen...',
        filterAll: 'Alle Benutzer',
        filterWithClaws: 'Mit Claws',
        filterWithoutClaws: 'Ohne Claws',
        sortNewest: 'Neueste zuerst',
        sortOldest: 'Älteste zuerst',
        editUser: 'Bearbeiten',
        saveUser: 'Speichern',
        userUpdated: 'Benutzer aktualisiert.',
        userUpdateFailed: 'Aktualisierung fehlgeschlagen!',
        clawsTab: 'Claws',
        sshKeysTab: 'SSH-Schlüssel',
        volumesTab: 'Volumes',
        noClawsFound: 'Keine Claws',
        noSSHKeysFound: 'Keine SSH-Schlüssel',
        noVolumesFound: 'Keine Volumes',
        failedToLoadAgents: 'Agents konnten nicht geladen werden!',
        failedToLoadSSHKeys: 'SSH-Schlüssel konnten nicht geladen werden!',
        failedToLoadVolumes: 'Volumes konnten nicht geladen werden!',
        owner: 'Besitzer',
        searchClaws: 'Claws suchen...',
        searchSSHKeys: 'SSH-Schlüssel suchen...',
        referralsTab: 'Empfehlungen',
        pendingClawsTab: 'Ausstehend',
        emailsTab: 'E-Mails',
        analyticsTab: 'Analysen',
        billingTab: 'Abrechnung',
        settingsTab: 'Einstellungen',
        settingsDescription: 'Verwalte deine Administratoreinstellungen.',
        showAllAgents: 'Alle Agenten aller Benutzer anzeigen',
        billingFilterAll: 'Alle Bestellungen',
        billingFilterService: 'Claw-Dienst',
        billingFilterLicense: 'Lizenz',
        billingOrderTypeLabel: ' · {{type}}',
        noBillingFound: 'Keine Bestellungen',
        failedToLoadBilling: 'Bestellungen konnten nicht geladen werden!',
        searchBilling: 'Nach Produktname suchen...',
        billingReason: 'Grund',
        billingType: 'Typ',
        billingSubtotal: 'Zwischensumme',
        billingDiscount: 'Rabatt',
        billingTax: 'Steuer',
        billingTotal: 'Gesamt',
        analyticsDay: 'Tag',
        analyticsWeek: 'Woche',
        analyticsMonth: 'Monat',
        analyticsYear: 'Jahr',
        analyticsAllTime: 'Gesamter Zeitraum',
        analyticsFilter: 'Filter',
        analyticsResources: 'Ressourcen',
        analyticsSelectAll: 'Alle auswählen',
        analyticsDeselectAll: 'Alle abwählen',
        failedToLoadAnalytics: 'Analysen konnten nicht geladen werden!',
        noAnalyticsData: 'Keine Analysedaten verfügbar.',
        noReferralsFound: 'Keine Empfehlungen',
        noPendingClawsFound: 'Keine Ausstehenden Claws',
        noEmailsFound: 'Keine E-Mails',
        failedToLoadReferrals: 'Empfehlungen konnten nicht geladen werden!',
        failedToLoadPendingClaws:
            'Ausstehende Claws konnten nicht geladen werden!',
        failedToLoadEmails: 'E-Mails konnten nicht geladen werden!',
        referrer: 'Empfehlender',
        referred: 'Empfohlener',
        earned: 'Verdient',
        expiresAt: 'Läuft ab',
        feature: 'Funktion',
        sentAt: 'Gesendet',
        fileSize: 'Größe',
        registered: 'Registriert',
        status: 'Status',
        ip: 'IP',
        plan: 'Plan',
        location: 'Standort',
        subdomain: 'Subdomain',
        subscription: 'Abonnement',
        billingInterval: 'Abrechnung',
        deletionScheduled: 'Löschung geplant',
        fingerprint: 'Fingerabdruck',
        price: 'Preis',
        pricePerMonth: '{{price}}/Mo.',
        statusRunning: 'Läuft',
        statusStopped: 'Gestoppt',
        adminBadge: 'Admin',
        unitGB: '{{size}} GB',
        unitKB: '{{size}} KB'
    },
    affiliate: {
        title: 'Partner',
        description:
            'Verdiene Belohnungen, indem du Freunde zu ClawHost einlädst.',
        subtitle: 'Teile deinen Empfehlungslink und verdiene Belohnungen.',
        learnMore: 'Mehr über das Partnerprogramm erfahren',
        referralCode: 'Empfehlungscode',
        referrals: 'Empfehlungen',
        payments: 'Zahlungen',
        earnings: 'Einnahmen',
        codeChangeHint: 'Du kannst deinen Empfehlungscode einmalig anpassen.',
        codeAlreadyChanged: 'Dein Empfehlungscode wurde bereits angepasst.',
        codeUpdated: 'Empfehlungscode aktualisiert.',
        codeUpdateFailed: 'Empfehlungscode konnte nicht aktualisiert werden!',
        invalidCodeLength:
            'Der Code muss zwischen {{min}} und {{max}} Zeichen lang sein!',
        referralHistory: 'Empfehlungsverlauf',
        paymentHistory: 'Zahlungsverlauf',
        periodToday: 'Heute',
        periodWeek: 'Woche',
        periodMonth: 'Monat',
        periodYear: 'Jahr',
        periodAll: 'Alle',
        confirmChangeTitle: 'Empfehlungscode ändern',
        confirmChangeDescription:
            'Bist du sicher? Diese Aktion ist dauerhaft und kann nicht rückgängig gemacht werden. Du kannst deinen Empfehlungscode nicht erneut ändern.',
        noReferralsYet: 'Keine Empfehlungen',
        noReferralsDescription:
            'Teile deinen Empfehlungslink, um Belohnungen zu verdienen.',
        noPaymentsYet: 'Keine Zahlungen',
        noPaymentsDescription:
            'Wenn Ihre geworbenen Nutzer Käufe tätigen, werden ihre Zahlungen hier angezeigt.'
    },
    affiliateProgram: {
        title: 'Partnerprogramm',
        description:
            'Erfahre, wie das ClawHost-Partnerprogramm funktioniert, wie viel du verdienen kannst und welche Regeln für die Teilnahme gelten.',
        lastUpdated: 'Zuletzt aktualisiert: 1. April 2026',
        overviewTitle: '1. Übersicht',
        overviewText:
            'Das ClawHost-Partnerprogramm ermöglicht es dir, Belohnungen zu verdienen, indem du neue Benutzer an ClawHost empfiehlst. Wenn jemand einen Kauf tätigt, nachdem er ClawHost über deinen Empfehlungslink besucht hat, erhältst du eine Provision auf seine Zahlungen. Das Programm ist kostenlos und steht allen registrierten ClawHost-Benutzern zur Verfügung.',
        howItWorksTitle: '2. So funktioniert es',
        howItWorksText: 'Der Einstieg in das Partnerprogramm ist einfach:',
        howItWorksStep1:
            'Erstelle ein ClawHost-Konto. Ein einzigartiger Empfehlungscode wird automatisch für dich generiert.',
        howItWorksStep2:
            'Teile deinen Empfehlungslink mit Freunden, Kollegen oder deinem Publikum. Dein Link hat das Format: clawhost.cloud?ref=YOUR_CODE.',
        howItWorksStep3:
            'Wenn jemand einen Kauf tätigt, nachdem er ClawHost über deinen Link besucht hat, wird dies als deine Empfehlung erfasst.',
        howItWorksStep4:
            'Du verdienst eine Provision jedes Mal, wenn dein empfohlener Benutzer einen qualifizierenden Kauf tätigt.',
        earningsTitle: '3. Verdienste und Auszahlungen',
        earningsText: 'So funktionieren die Partnerverdienste:',
        earningsCommission:
            'Du verdienst eine Provision von 15% auf jeden qualifizierenden Kauf deiner empfohlenen Benutzer. Provisionen gelten sowohl für ClawHost Cloud- als auch ClawHost Go-Pläne.',
        earningsMonthly:
            'Bei monatlichen Abonnements verdienst du Provisionen für 1 Jahr ab dem Datum der Empfehlung.',
        earningsYearly:
            'Bei jährlichen Abonnements verdienst du eine Provision nur für das erste Jahr.',
        earningsPayout:
            'Der Mindestbetrag für eine Auszahlung beträgt 100 $ USD. Um eine Auszahlung anzufordern, kontaktiere unser Support-Team.',
        earningsPaymentMethod:
            'Auszahlungen werden über PayPal abgewickelt. Du musst bei der Auszahlungsanfrage eine gültige PayPal-E-Mail-Adresse angeben.',
        earningsCurrency:
            'Alle Verdienste werden in USD berechnet und angezeigt.',
        referralCodeTitle: '4. Dein Empfehlungscode',
        referralCodeText:
            'Jeder Benutzer erhält bei der Registrierung einen einzigartigen Empfehlungscode. Du kannst ihn einmal anpassen, um ihn einprägsamer zu machen:',
        referralCodeUnique:
            'Dein Empfehlungscode ist einzigartig für dein Konto und kann nicht mit einem anderen Benutzer geteilt oder übertragen werden.',
        referralCodeOneChange:
            'Du kannst deinen Empfehlungscode genau einmal anpassen. Wähle sorgfältig — diese Änderung ist dauerhaft und kann nicht rückgängig gemacht werden.',
        referralCodeFormat:
            'Empfehlungscodes dürfen nur Buchstaben, Zahlen, Bindestriche und Unterstriche enthalten.',
        referralWindowTitle: '5. Empfehlungs-Zuordnungsfenster',
        referralWindowText:
            'Eine Empfehlung wird dir für 3 Monate ab dem Moment zugeordnet, in dem der empfohlene Benutzer ClawHost zum ersten Mal über deinen Link besucht. Wenn der empfohlene Benutzer innerhalb dieses 3-monatigen Fensters keinen Kauf tätigt, verfällt die Empfehlung und es wird keine Provision verdient. Wenn der Benutzer über einen anderen Empfehlungslink besucht, ersetzt die neue Empfehlung die vorherige.',
        eligibilityTitle: '6. Teilnahmeberechtigung',
        eligibilityText:
            'Um am Partnerprogramm teilzunehmen, musst du die folgenden Voraussetzungen erfüllen:',
        eligibilityAccount: 'Du musst ein registriertes ClawHost-Konto haben.',
        eligibilityStanding:
            'Dein Konto muss in gutem Zustand sein, ohne Verstöße gegen die Richtlinien.',
        eligibilityAge:
            'Du musst mindestens 18 Jahre alt sein oder das Volljährigkeitsalter in deiner Gerichtsbarkeit erreicht haben.',
        rulesTitle: '7. Programmregeln',
        rulesText:
            'Um die Integrität des Partnerprogramms zu wahren, gelten die folgenden Regeln:',
        rulesNoSelfReferral:
            'Selbstempfehlungen sind streng verboten. Du darfst nicht deine eigenen Konten oder Konten, die du kontrollierst, empfehlen.',
        rulesNoFakeAccounts:
            'Das Erstellen gefälschter Konten, automatisierter Anmeldungen oder die Verwendung von Bots zur Generierung von Empfehlungen ist verboten.',
        rulesNoSpam:
            'Das Versenden unerwünschter Massennachrichten (Spam) zur Bewerbung deines Empfehlungslinks ist nicht gestattet.',
        rulesNoMisrepresentation:
            'Du darfst ClawHost, seine Dienste oder das Partnerprogramm in keiner Weise falsch darstellen.',
        rulesNoIncentivized:
            'Das Anbieten direkter finanzieller Anreize (z. B. Benutzer dafür zu bezahlen, sich über deinen Link anzumelden) ist nicht gestattet.',
        terminationTitle: '8. Verstoß und Kündigung',
        terminationText:
            'Jeder Verstoß gegen diese Regeln führt zum sofortigen Verlust aller ausstehenden und verdienten Belohnungen. ClawHost behält sich das Recht vor, dein Konto vom Partnerprogramm zu sperren oder dauerhaft auszuschließen. In schweren Fällen kann auch dein ClawHost-Konto gekündigt werden. Alle Entscheidungen bezüglich Verstößen sind endgültig.',
        marketingTitle: '9. Wie man wirbt',
        marketingText:
            'Es gibt viele kreative und legitime Möglichkeiten, deinen Empfehlungslink zu teilen und deine Einnahmen zu steigern:',
        marketingSocial:
            'Teile deinen Link auf Social-Media-Plattformen wie X, LinkedIn, Reddit und Facebook. Schreibe über deine Erfahrung mit ClawHost und füge deinen Empfehlungslink ein.',
        marketingBlog:
            'Schreibe Blogbeiträge, Tutorials oder Bewertungen über ClawHost. Füge deinen Empfehlungslink natürlich in den Inhalt ein.',
        marketingVideo:
            'Erstelle Videoinhalte auf YouTube oder TikTok, die zeigen, wie du ClawHost zum Bereitstellen und Verwalten von KI-Agenten verwendest.',
        marketingCommunity:
            'Nimm an Entwicklergemeinschaften, Foren und Discord-Servern teil. Wenn jemand nach Cloud-Hosting oder KI-Agenten-Bereitstellung fragt, empfehle ClawHost mit deinem Link.',
        marketingNewsletter:
            'Wenn du einen Newsletter oder eine E-Mail-Liste betreibst, erwähne ClawHost in einer relevanten Ausgabe mit deinem Empfehlungslink.',
        marketingComparison:
            'Schreibe ehrliche Vergleichsartikel oder Leitfäden, die hervorheben, was ClawHost von anderen Plattformen unterscheidet.',
        changesToProgramTitle: '10. Änderungen am Programm',
        changesToProgramText:
            'ClawHost behält sich das Recht vor, das Partnerprogramm jederzeit ohne vorherige Ankündigung zu ändern, auszusetzen oder einzustellen. Dies umfasst Änderungen an Provisionssätzen, Empfehlungsfenstern, Auszahlungsschwellen und Programmregeln. Die fortgesetzte Teilnahme nach Änderungen gilt als Akzeptanz der aktualisierten Bedingungen.',
        getStartedTitle: '11. Loslegen',
        getStartedText:
            'Bereit zu verdienen? Gehe zu deinem Partner-Dashboard, um deinen Empfehlungslink zu erhalten und beginne, ihn mit deinem Netzwerk zu teilen.',
        getStartedButton: 'Zum Partner-Dashboard',
        contactTitle: '12. Kontakt',
        contactText:
            'Wenn du Fragen zum Partnerprogramm hast, Hilfe mit deinem Empfehlungscode benötigst oder einen Verstoß melden möchtest, kontaktiere uns unter'
    }
}

export default de