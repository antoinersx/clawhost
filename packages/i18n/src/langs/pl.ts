import type { Translations } from '#i18n/types'

const pl: Translations = {
    common: {
        loading: 'Ładowanie...',
        noResults: 'Nie znaleziono wyników.',
        save: 'Zapisz',
        cancel: 'Anuluj',
        confirm: 'Potwierdź',
        delete: 'Usuń',
        deleting: 'Usuwanie...',
        create: 'Utwórz',
        done: 'Gotowe',
        back: 'Wstecz',
        copy: 'Kopiuj',
        copied: 'Skopiowano.',
        copiedWithLabel: '{{label}} skopiowano.',
        show: 'Pokaż',
        hide: 'Ukryj',
        tryAgain: 'Spróbuj ponownie',
        addKey: 'Dodaj klucz',
        close: 'Zamknij',
        none: 'Brak',
        all: 'Wszystkie',
        unknown: 'Nieznany',
        pageNotFound: 'Nie znaleziono strony',
        closeNotification: 'Zamknij powiadomienie',
        beta: 'Beta',
        brandName: 'ClawHost',
        brandNameGo: 'ClawHost Go',
        brandNameGoVersion: 'ClawHost Go {{version}}',
        pageTitleWithBrand: '{{title}} - ClawHost',
        menuFile: 'Plik',
        menuEdit: 'Edycja',
        menuView: 'Widok',
        menuWindow: 'Okno',
        menuHelp: 'Pomoc',
        scrollToBottom: 'Przewiń na dół',
        second: 'sekunda',
        seconds: 'sekundy'
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
        switchLanguage: 'Język'
    },
    theme: {
        light: 'Jasny',
        dark: 'Ciemny',
        system: 'Systemowy',
        toggleTheme: 'Przełącz motyw'
    },
    nav: {
        claws: 'Claws',
        sshKeys: 'Klucze SSH',
        account: 'Konto',
        affiliate: 'Partner',
        license: 'Licencja',
        signOut: 'Wyloguj się',
        admin: 'Admin',
        login: 'Zaloguj się',
        deploy: 'Wdróż',
        deployOpenClaw: 'Wdróż OpenClaw',
        mainNavigation: 'Nawigacja główna',
        footerNavigation: 'Nawigacja stopki',
        toggleMenu: 'Przełącz menu',
        cloud: 'Cloud',
        cloudSubtitle: 'Techniczny',
        go: 'Go',
        goSubtitle: 'Nietechniczny'
    },
    go: {
        pageTitle: 'ClawHost Go',
        heroTitle1: 'Wdróż OpenClaw.',
        heroTitle2: 'Lokalnie. Natychmiast.',
        badge: 'OpenClaw i Hermes lokalnie',
        description:
            'Lekki klient desktopowy do zarządzania instancjami OpenClaw. Wdrażaj, monitoruj i kontroluj swoje claws — bezpośrednio ze swojego komputera.',
        features: 'Funkcje',
        whyClawHostGo: 'Wszystko w jednym',
        featuresDescription:
            'Dlaczego warto nas wypróbować — funkcje mówią same za siebie.',
        zeroConfigDescription:
            'Pomiń godziny konfiguracji serwera, OpenClaw i Hermes. Są preinstalowane i gotowe w kilka minut.',
        ownedDataDescription:
            'Wszystko działa na Twoim urządzeniu. Bez serwerów chmurowych, bez osób trzecich, bez danych opuszczających Twój komputer.',
        terminalAccessDescription:
            'Uzyskaj dostęp do terminala instancji OpenClaw bezpośrednio z aplikacji. Bez zewnętrznych klientów SSH.',
        simplePricing: 'Prosty cennik',
        simplePricingDescription:
            'Jedna licencja, bez ograniczeń. Bez miesięcznych rachunków, bez limitów, bez ukrytych opłat.',
        localDomain: 'Własna domena lokalna',
        localDomainDescription:
            'Uzyskaj dostęp do OpenClaw przez własną lokalną domenę. Czyste adresy URL w Twojej sieci.',
        secureDescription:
            'Twoje dane nigdy nie opuszczają urządzenia. W pełni izolowane, w pełni zaszyfrowane, w pełni Twoje.',
        pricing: 'Cennik',
        pricingTitle: 'Prosty, jednorazowy cennik',
        pricingDescription:
            'Bez subskrypcji, bez ukrytych opłat. Jedna licencja, nieograniczone użytkowanie.',
        pricingPrice: '${{price}}',
        pricingLabel: 'Jednorazowa płatność',
        pricingFeature1: 'Licencja dożywotnia',
        pricingFeature2: 'Nieograniczone claws',
        pricingFeature3: 'Wszystkie przyszłe aktualizacje',
        pricingFeature4: 'Bez limitów użytkowania',
        pricingFeature5: 'Priorytetowe wsparcie',
        pricingFeature6: 'Własna domena lokalna',
        comparison: 'Porównanie',
        comparisonTitle: 'Go vs Cloud',
        comparisonDescription:
            'Wybierz to, co Ci odpowiada. Go działa lokalnie, Cloud działa na dedykowanych serwerach.',
        comparisonLocalUs: 'Działa w pełni na Twoim urządzeniu',
        comparisonLocalOthers: 'Działa na zdalnych serwerach',
        comparisonPricingUs: 'Jednorazowa płatność',
        comparisonPricingOthers: 'Miesięczna subskrypcja',
        comparisonDataUs: 'Dane pozostają na Twoim komputerze',
        comparisonDataOthers: 'Dane na serwerach chmurowych',
        comparisonSetupUs: 'Zainstaluj i uruchom natychmiast',
        comparisonSetupOthers: 'Wdróż jednym kliknięciem',
        comparisonUpdatesUs: 'Automatyczne aktualizacje',
        comparisonUpdatesOthers: 'Automatyczne aktualizacje',
        faqTitle: 'Pytania',
        faqHeading: 'Często zadawane pytania',
        faqDescription: 'Wszystko, co musisz wiedzieć o ClawHost Go.',
        faq1Question: 'Czym jest ClawHost Go?',
        faq1Answer:
            'ClawHost Go to lekka aplikacja desktopowa, która pozwala uruchamiać OpenClaw lokalnie na Twoim komputerze. Bez serwerów chmurowych — zainstaluj, uruchom i zacznij korzystać z OpenClaw w kilka sekund.',
        faq2Question: 'Czym Go różni się od ClawHost Cloud?',
        faq2Answer:
            'ClawHost Cloud wdraża OpenClaw na dedykowanych zdalnych serwerach z dostępnością 24/7 i globalnym dostępem. ClawHost Go uruchamia wszystko lokalnie na Twoim urządzeniu — idealne dla prywatności, użytku offline i prostych konfiguracji.',
        faq3Question: 'Czy potrzebuję połączenia z internetem?',
        faq3Answer:
            'ClawHost Go działa offline do użytku lokalnego. Połączenie z internetem jest potrzebne tylko do początkowej konfiguracji, aktualizacji i funkcji wymagających zewnętrznych wywołań API.',
        faq4Question: 'Czy licencja to jednorazowa płatność?',
        faq4Answer:
            'Tak. Płacisz raz i otrzymujesz dożywotni dostęp do ClawHost Go, włącznie ze wszystkimi przyszłymi aktualizacjami. Bez subskrypcji, bez opłat cyklicznych.',
        faq5Question: 'Jakie systemy operacyjne są obsługiwane?',
        faq5Answer:
            'ClawHost Go obsługuje Windows i macOS. Obie platformy mają te same funkcje i otrzymują aktualizacje jednocześnie.',
        faq6Question: 'Czy mogę przejść z Go na Cloud później?',
        faq6Answer:
            'Oczywiście. Możesz wyeksportować konfigurację OpenClaw z Go i wdrożyć ją na ClawHost Cloud w dowolnym momencie. Obie platformy są w pełni kompatybilne.',
        statsPrice: '${{price}}',
        statsLifetime: 'Dożywotnia',
        statsOneTime: 'Jednorazowa',
        statsPayment: 'Płatność',
        statsLocal: 'Lokalna',
        statsLocally: 'Działa lokalnie',
        statsZero: 'Zero',
        statsZeroConfig: 'Zero konfiguracji',
        ctaTitle: 'Uruchom OpenClaw lokalnie',
        ctaDescription:
            'Jednorazowa płatność, dożywotnia licencja. Wdróż OpenClaw na swoim komputerze — bez chmury, bez subskrypcji, bez limitów. Twoje dane, Twoje zasady.',
        downloadForMac: 'Pobierz dla Mac',
        downloadVersion: 'Wersja {{version}}',
        downloadForWindows: 'Pobierz dla Windows',
        deviceNotSupported: 'Twoje urządzenie nie jest jeszcze obsługiwane przez ClawHost Go.',
        downloadFailed: 'Pobieranie nie powiodło się!',
        downloadStarted: 'Pobieranie rozpoczęte.',
        appleSilicon: 'Apple Silicon',
        intel: 'Intel',
        chooseMacArch: 'Jakiego Maca masz?',
        otherVersions: 'Inne wersje',
        joinWaitlist: 'Dołącz do listy oczekujących',
        joinedWaitlist: 'Na liście oczekujących',
        waitlistAlreadyJoinedToast: 'Ten email jest już na liście.',
        waitlistFailedToast: 'Nie udało się dołączyć do listy oczekujących !',
        waitlistEmailPlaceholder: 'Wpisz swój email',
        updateAvailable: 'Dostępna wersja {{version}}.',
        updateDownload: 'Pobierz',
        updateDismiss: 'Później',
        clawNotFound: 'Nie znaleziono claw !',
        clawNameAlreadyExists: 'Claw o tej nazwie już istnieje !',
        invalidSubdomain:
            'Nieprawidłowa subdomena. Użyj 3-20 małych liter i cyfr !',
        subdomainAlreadyInUse: 'Ta subdomena jest już w użyciu !',
        clawDirectoryNotFound: 'Nie znaleziono katalogu claw !',
        noVersionInstalled:
            'Nie zainstalowano żadnej wersji OpenClaw. Przejdź do zakładki Wersje i zainstaluj jedną najpierw !',
        failedToStartClaw: 'Nie udało się uruchomić claw !',
        noVersionAssigned: 'Nie przypisano wersji OpenClaw do tego claw !',
        invalidAgentName: 'Nieprawidłowa nazwa agenta !',
        invalidPath: 'Nieprawidłowa ścieżka !',
        fileNotFound: 'Nie znaleziono pliku !',
        purchasingNotAvailable: 'Zakupy nie są dostępne w trybie lokalnym !',
        exportFailed: 'Eksport nie powiódł się !',
        versionNotInstalled:
            'Wersja OpenClaw {{version}} nie jest zainstalowana !',
        failedToStartProcess: 'Nie udało się uruchomić procesu: {{reason}} !',
        gatewayNotReady: 'Agent nie był gotowy na czas!',
        processExitedImmediately:
            'Proces zakończył się natychmiast. Logi:\n{{logs}}',
        processExitedImmediatelyNoLogs:
            'Proces zakończył się natychmiast po uruchomieniu !',
        processExitedWithCode:
            'Proces zakończył się kodem {{code}}. Logi:\n{{logs}}',
        processExitedWithCodeNoLogs: 'Proces zakończył się kodem {{code}} !',
        processExitedUnexpectedly: 'Proces zakończył się niespodziewanie !',
        failedToInstallVersion:
            'Nie udało się zainstalować wersji {{version}}: {{reason}} !',
        oauthCancelled: 'Uwierzytelnianie anulowane !',
        diskFull: 'Brak miejsca na urządzeniu !',
        permissionDenied: 'Odmowa dostępu !',
        networkTimeout: 'Przekroczono limit czasu żądania sieciowego !',
        failedToFetchLatestVersion: 'Nie udało się pobrać najnowszej wersji!'
    },
    footer: {
        website: 'Strona internetowa',
        copyrightName: 'ClawHost',
        copyrightRights: 'Wszelkie prawa zastrzeżone.',
        termsOfService: 'Regulamin',
        privacyPolicy: 'Polityka prywatności',
        getInTouch: 'Skontaktuj się',
        brandDescription:
            'Wdróż OpenClaw na własnym VPS jednym kliknięciem. Pełna prywatność, dedykowane zasoby, bez współdzielonej infrastruktury.',
        builtBy: 'Stworzone przez',
        supportedBy: 'Wspierane przez',
        product: 'Produkt',
        howItWorks: 'Jak to działa',
        features: 'Funkcje',
        pricing: 'Cennik',
        faq: 'Pytania',
        changelog: 'Lista zmian',
        compare: 'Pełne porównanie',
        legalAndMore: 'Inne',
        affiliateProgram: 'Program partnerski',
        documentation: 'Dokumentacja',
        productDescription:
            'Wdrażaj agentów OpenClaw i Hermes w chmurze lub lokalnie jednym kliknięciem — buduj, łącz i skaluj swoich agentów AI szybciej z ClawHost.',
        ariaGithub: 'GitHub',
        ariaX: 'X',
        ariaFacebook: 'Facebook',
        ariaInstagram: 'Instagram',
        ariaThreads: 'Threads',
        ariaYoutube: 'YouTube',
        ariaTiktok: 'TikTok'
    },
    errors: {
        somethingWentWrong: 'Coś poszło nie tak !',
        couldNotLoadData: 'Nie udało się załadować danych. Spróbuj ponownie !',
        notFound: 'Nie znaleziono strony !',
        pageNotFoundDescription:
            'Strona, której szukasz, nie istnieje lub została przeniesiona.',
        goToHomepage: 'Przejdź do strony głównej',
        failedToLoadAgents: 'Nie udało się załadować agents !',
        failedToLoadAgentsDescription:
            'Nie udało się załadować Twoich Agents. Sprawdź połączenie i spróbuj ponownie !',
        failedToLoadSSHKeys: 'Nie udało się załadować kluczy SSH !',
        failedToLoadSSHKeysDescription:
            'Nie udało się załadować Twoich kluczy SSH. Sprawdź połączenie i spróbuj ponownie !',
        failedToUpdateProfile: 'Nie udało się zaktualizować profilu !',
        failedToAddSSHKey: 'Nie udało się dodać klucza SSH !',
        failedToCreateClaw: 'Nie udało się utworzyć claw !',
        failedToLoadLocations:
            'Nie udało się załadować lokalizacji. Spróbuj ponownie !',
        failedToLoadPlans: 'Nie udało się załadować planów. Spróbuj ponownie !',
        invalidPlan: 'Wybrany plan jest nieprawidłowy !',
        invalidLocation: 'Proszę wybrać lokalizację !',
        failedToGenerateKeyPair:
            'Nie udało się wygenerować pary kluczy. Wygeneruj klucze lokalnie !',
        unableToLoadPricing:
            'Nie udało się załadować cennika. Spróbuj ponownie później !',
        noPasswordAvailable: 'Brak dostępnego hasła dla tego claw !'
    },
    api: {
        missingRequiredFields: 'Brak wymaganych pól !',
        agentNotFound: 'Nie znaleziono agent !',
        agentRenamed: 'Nazwa agent została zmieniona.',
        agentEmojiUpdated: 'Emoji agenta zaktualizowane.',
        failedToUpdateEmoji: 'Nie udało się zaktualizować emoji!',
        invalidAgentName: 'Nazwa agent musi mieć od 1 do {{max}} znaków !',
        userNotFound: 'Nie znaleziono użytkownika !',
        sshKeyNotFound: 'Nie znaleziono klucza SSH !',
        pendingAgentNotFound: 'Nie znaleziono oczekującego agent !',
        agentNotScheduledForDeletion:
            'Agent nie jest zaplanowany do usunięcia !',
        agentDeletionAlreadyPassed: 'Data usunięcia już minęła!',
        agentLimitReached:
            'Osiągnięto limit {{max}} agents. Skontaktuj się ze wsparciem, aby zwiększyć ten limit !',
        sshKeyLimitReached:
            'Osiągnięto limit {{max}} kluczy SSH. Skontaktuj się ze wsparciem, aby zwiększyć ten limit !',
        volumeSizeInvalid:
            'Rozmiar wolumenu musi wynosić od {{min}} do {{max}} GB !',
        paymentNotConfigured:
            'Płatność nie jest skonfigurowana dla tego planu !',
        invalidSshKeyFormat: 'Nieprawidłowy format klucza publicznego SSH !',
        sshKeyInUse:
            'Ten klucz SSH jest obecnie używany przez jeden lub więcej agents !',
        inputTooLong: 'Dane przekraczają maksymalną dozwoloną długość !',
        invalidEmailFormat: 'Nieprawidłowy format adresu email !',
        plusAddressingNotAllowed:
            'Adresowanie z plusem nie jest dozwolone przy logowaniu email !',
        invalidRedirectUrl: 'Nieprawidłowy adres URL przekierowania !',
        fileTooLarge:
            'Zawartość pliku przekracza maksymalny dozwolony rozmiar !',
        nameAndKeyRequired: 'Nazwa i klucz publiczny są wymagane !',
        nameTooLong: 'Nazwa musi mieć maksymalnie {{max}} znaków !',
        noBillingAccount: 'Nie znaleziono konta rozliczeniowego !',
        orderIdRequired: 'ID zamówienia jest wymagane !',
        orderNotFound: 'Nie znaleziono zamówienia !',
        emailRequired: 'Adres email jest wymagany !',
        redirectUrlRequired: 'Adres URL przekierowania jest wymagany !',
        invalidWebhook: 'Nieprawidłowy webhook !',
        failedToStartAgent: 'Nie udało się uruchomić agent !',
        failedToStopAgent: 'Nie udało się zatrzymać agent !',
        failedToRestartAgent: 'Nie udało się zrestartować agent !',
        failedToDeleteAgent: 'Nie udało się usunąć agent !',
        failedToCreateAgent: 'Nie udało się utworzyć agent !',
        invalidProvider: 'Nieprawidłowy dostawca !',
        providerNotAllowed: 'Ten dostawca nie jest obecnie dostępny !',
        invalidPlan: 'Wybrany plan jest nieprawidłowy !',
        planBelowMinimumMemory:
            'Ten plan nie spełnia minimalnego wymagania pamięci !',
        invalidLocation: 'Wybrana lokalizacja jest nieprawidłowa !',
        planNotAvailableAtLocation:
            'Ten plan nie jest dostępny w wybranej lokalizacji !',
        failedToSyncAgent: 'Nie udało się zsynchronizować statusu serwera !',
        failedToProvisionAgent: 'Nie udało się zainicjować agent !',
        failedToInitiatePurchase: 'Nie udało się rozpocząć zakupu !',
        failedToCancelDeletion: 'Nie udało się anulować usunięcia !',
        failedToHardDeleteAgent: 'Nie udało się trwale usunąć agent !',
        failedToCancelScheduledDeletion:
            'Nie udało się anulować zaplanowanego usunięcia !',
        failedToCreateSshKey: 'Nie udało się utworzyć klucza SSH !',
        failedToDeleteSshKey: 'Nie udało się usunąć klucza SSH !',
        failedToUpdateProfile: 'Nie udało się zaktualizować profilu !',
        failedToGetProfile: 'Nie udało się pobrać profilu !',
        failedToGetInvoice: 'Nie udało się pobrać faktury !',
        failedToGetCustomerPortal: 'Nie udało się otworzyć portalu klienta !',
        failedToGetBillingHistory: 'Nie udało się pobrać historii płatności !',
        failedToGetStats: 'Nie udało się pobrać statystyk !',
        affiliateFetched: 'Affiliate info fetched successfully.',
        failedToGetAffiliate: 'Failed to get affiliate info!',
        invalidPeriod: 'Nieprawidłowy filtr okresu!',
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
        failedToFetchLocations: 'Nie udało się pobrać lokalizacji !',
        failedToFetchPlans: 'Nie udało się pobrać planów !',
        failedToFetchVolumePricing: 'Nie udało się pobrać cennika wolumenów !',
        failedToFetchPlanAvailability:
            'Nie udało się pobrać dostępności planów !',
        failedToSendEmail: 'Nie udało się wysłać emaila !',
        failedToGetVersion: 'Nie udało się pobrać wersji !',
        failedToGetVersions: 'Nie udało się pobrać wersji !',
        failedToInstallVersion: 'Nie udało się zainstalować wersji !',
        installVersionSuccess: 'Wersja zainstalowana pomyślnie.',
        invalidVersion: 'Nieprawidłowy format wersji !',
        outdatedVersion:
            'Ta wersja jest przestarzała i nie może zostać zainstalowana !',
        failedToGetDiagnostics: 'Nie udało się połączyć z instancją !',
        failedToGetDiagnosticsDescription:
            'Nie udało się pobrać diagnostyki. Instancja może być offline lub w trakcie uruchamiania.',
        failedToGetLogs: 'Nie udało się załadować logów !',
        failedToGetLogsDescription:
            'Nie udało się pobrać logów dla tej instancji. Spróbuj ponownie później.',
        failedToReinstallAgent:
            'Nie udało się ponownie zainstalować instancji !',
        reinstallSuccess: 'Instancja ponownie zainstalowana pomyślnie.',
        reinstallRateLimited:
            'Ponowną instalację można wykonać tylko raz na 24 godziny. Skontaktuj się z zespołem, jeśli chcesz usunąć ten limit.',
        subdomainRateLimited:
            'Subdomenę można zmienić tylko raz na 24 godziny. Skontaktuj się z zespołem, jeśli chcesz usunąć ten limit.',
        subdomainUpdated: 'Subdomena zaktualizowana pomyślnie.',
        invalidSubdomain:
            'Nieprawidłowa subdomena. Użyj 3-20 małych liter i cyfr !',
        subdomainAlreadyInUse: 'Ta subdomena jest już w użyciu !',
        subdomainNotSupported: 'Ten typ agenta nie używa subdomeny.',
        agentBusy: 'Agent jest obecnie inicjalizowany lub usuwany !',
        reinstallGatewayNotResponding:
            'Ponowna instalacja zakończona, ale gateway jeszcze nie odpowiada. Może potrzebować więcej czasu na uruchomienie.',
        failedToRepairAgent: 'Failed to repair the instance!',
        repairSuccess: 'Instance repaired successfully.',
        repairGatewayNotResponding:
            'Repair applied but gateway is not responding yet. It may need more time to start.',
        failedToExportAgent: 'Nie udało się wyeksportować danych agent !',
        agentNotReady: 'Agent nie jest gotowy do eksportu !',
        exportRateLimited:
            'Ten agent był niedawno wyeksportowany. Poczekaj przed ponownym eksportem !',
        failedToListFiles: 'Nie udało się wyświetlić plików instancji !',
        failedToReadFile: 'Nie udało się odczytać pliku !',
        failedToUpdateFile: 'Nie udało się zapisać pliku !',
        invalidFilePath: 'Nieprawidłowa ścieżka pliku !',
        fileNotEditable: 'Tego typu pliku nie można edytować !',
        invalidJsonConfig: 'Nieprawidłowy JSON !',
        fileSaveSuccess: 'Plik zapisany.',
        rateLimitExceeded: 'Poczekaj przed wysłaniem kolejnego kodu !',
        otpExpiredOrNotFound:
            'Kod wygasł lub nie został znaleziony. Poproś o nowy !',
        otpMaxAttemptsReached:
            'Zbyt wiele nieudanych prób. Poproś o nowy kod !',
        otpInvalidCode: 'Nieprawidłowy kod. Spróbuj ponownie !',
        licenseAlreadyPurchased: 'Licencja już zakupiona !',
        licenseNotAvailable: 'Produkt licencyjny nie jest dostępny !',
        licenseCheckoutCreated: 'Kasa licencji utworzona.',
        failedToPurchaseLicense: 'Nie udało się utworzyć kasy licencji !',
        internalServerError: 'Wystąpił błąd wewnętrzny !',
        invalidCredentials: 'Nieprawidłowe dane uwierzytelniające !',
        accountLinked: 'Konto połączone pomyślnie.',
        webhookProcessingFailed: 'Przetwarzanie webhooka nie powiodło się !',
        adminAccessDenied: 'Wymagany dostęp administratora !',
        agentsFetched: 'Agents pobrane pomyślnie.',
        agentFetched: 'Agent pobrany pomyślnie.',
        agentStarsFetched: 'Gwiazdki agenta pobrane pomyślnie.',
        agentSynced: 'Agent zsynchronizowany pomyślnie.',
        agentStarted: 'Agent uruchomiony pomyślnie.',
        agentStopped: 'Agent zatrzymany pomyślnie.',
        agentRestarted: 'Agent zrestartowany pomyślnie.',
        agentCreated: 'Agent utworzony pomyślnie.',
        agentDeleted: 'Agent usunięty pomyślnie.',
        agentDeletionScheduled: 'Usunięcie agent zaplanowane.',
        agentDeletionCancelled: 'Usunięcie agent anulowane.',
        agentHardDeleted: 'Agent trwale usunięty.',
        pendingAgentCancelled: 'Zakup anulowany.',
        failedToCancelPendingAgent: 'Nie udało się anulować zakupu !',
        agentPurchaseInitiated: 'Zakup rozpoczęty pomyślnie.',
        sshKeysFetched: 'Klucze SSH pobrane pomyślnie.',
        sshKeyCreated: 'Klucz SSH utworzony pomyślnie.',
        sshKeyDeleted: 'Klucz SSH usunięty pomyślnie.',
        profileFetched: 'Profil pobrany pomyślnie.',
        profileUpdated: 'Profil zaktualizowany pomyślnie.',
        statsFetched: 'Statystyki pobrane pomyślnie.',
        billingHistoryFetched: 'Historia płatności pobrana pomyślnie.',
        invoiceFetched: 'Faktura pobrana pomyślnie.',
        customerPortalFetched: 'Adres URL portalu klienta pobrany pomyślnie.',
        plansFetched: 'Plany pobrane pomyślnie.',
        locationsFetched: 'Lokalizacje pobrane pomyślnie.',
        volumePricingFetched: 'Cennik wolumenów pobrany pomyślnie.',
        planAvailabilityFetched: 'Dostępność planów pobrana pomyślnie.',
        diagnosticsFetched: 'Diagnostyka pobrana pomyślnie.',
        metricsFetched: 'Metryki pobrane pomyślnie.',
        failedToGetMetrics: 'Nie udało się pobrać metryk serwera!',
        overviewFetched: 'Przegląd pobrany pomyślnie.',
        failedToGetOverview: 'Nie udało się pobrać przeglądu bramy!',
        overviewUnsupported:
            'Ta wersja OpenClaw nie obsługuje funkcji przeglądu!',
        passwordRotated: 'Hasło root zostało pomyślnie zmienione.',
        failedToRotatePassword: 'Nie udało się zmienić hasła root!',
        gatewayTokenRotated: 'Token bramy został pomyślnie zmieniony.',
        failedToRotateGatewayToken: 'Nie udało się zmienić tokenu bramy!',
        sshKeyUpdated: 'Klucz SSH został pomyślnie zaktualizowany.',
        failedToUpdateSSHKey: 'Nie udało się zaktualizować klucza SSH!',
        invalidPassword: 'Hasło musi mieć od {{min}} do {{max}} znaków!',
        invalidGatewayToken:
            'Token bramy musi mieć od {{min}} do {{max}} znaków!',
        enablePreviewSuccess: 'Tryb podglądu włączony pomyślnie.',
        failedToEnablePreview: 'Nie udało się włączyć trybu podglądu!',
        logsFetched: 'Logi pobrane pomyślnie.',
        filesFetched: 'Pliki pobrane pomyślnie.',
        fileFetched: 'Plik pobrany pomyślnie.',
        otpSent: 'Kod wysłany pomyślnie.',
        otpVerified: 'Kod zweryfikowany pomyślnie.',
        webhookReceived: 'Webhook odebrany.',
        unauthorized: 'Brak autoryzacji !',
        invalidToken: 'Nieprawidłowy token !',
        notFound: 'Nie znaleziono !',
        healthOk: 'API działa.',
        featureVersionUnsupported:
            'Ta funkcja nie jest obsługiwana w wersji {{version}}. Zaktualizuj OpenClaw lub użyj Terminala do ręcznego zarządzania.',
        invalidAuthMethod: 'Nieprawidłowa metoda uwierzytelniania !',
        authMethodNotConnected:
            'Ta metoda uwierzytelniania nie jest połączona !',
        authMethodConnected: 'Metoda uwierzytelniania połączona pomyślnie.',
        authMethodDisconnected: 'Metoda uwierzytelniania odłączona pomyślnie.',
        failedToConnectAuthMethod:
            'Nie udało się połączyć metody uwierzytelniania !',
        failedToDisconnectAuthMethod:
            'Nie udało się odłączyć metody uwierzytelniania !',
        featureEmailsDisabled: 'Emaile o funkcjach są obecnie wyłączone.',
        featureEmailsSent: 'Emaile o funkcjach wysłane pomyślnie.',
        featureEmailsFailed: 'Nie udało się wysłać emaili o funkcjach !',
        invalidFeatureKey: 'Nieprawidłowy klucz funkcji !',
        waitlistJoined: 'Pomyślnie dołączono do listy oczekujących.',
        waitlistAlreadyJoined: 'Już na liście oczekujących.',
        waitlistJoinFailed: 'Nie udało się dołączyć do listy oczekujących !',
        waitlistRateLimited:
            'Za szybko ! Spróbuj ponownie za {{seconds}} {{unit}}.',
        waitlistStatusFetched: 'Status listy oczekujących pobrany.',
        waitlistCheckFailed:
            'Nie udało się sprawdzić statusu listy oczekujących !',
        adminUsersFetched: 'Użytkownicy pobrani pomyślnie.',
        failedToGetAdminUsers: 'Nie udało się pobrać użytkowników!',
        adminUserDetailFetched: 'Szczegóły użytkownika pobrane pomyślnie.',
        failedToGetAdminUserDetail:
            'Nie udało się pobrać szczegółów użytkownika!',
        adminUserUpdated: 'Użytkownik zaktualizowany.',
        failedToUpdateAdminUser: 'Nie udało się zaktualizować użytkownika!',
        adminStatsFetched: 'Statystyki pobrane.',
        failedToGetAdminStats: 'Nie udało się pobrać statystyk!',
        adminAnalyticsFetched: 'Analityka pobrana pomyślnie.',
        failedToGetAdminAnalytics: 'Nie udało się pobrać analityki!',
        adminBillingFetched: 'Rozliczenia pobrane pomyślnie.',
        failedToGetAdminBilling: 'Nie udało się pobrać rozliczeń!',
        adminAgentsFetched: 'Agents pobrane.',
        failedToGetAdminAgents: 'Nie udało się pobrać agents!',
        adminSSHKeysFetched: 'Klucze SSH pobrane.',
        failedToGetAdminSSHKeys: 'Nie udało się pobrać kluczy SSH!',
        adminVolumesFetched: 'Woluminy pobrane.',
        failedToGetAdminVolumes: 'Nie udało się pobrać woluminów!',
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
        otpSubject: 'Twój kod logowania ClawHost',
        otpPreview: 'Twój kod logowania ClawHost: {{code}}',
        otpHeading: 'Twój kod logowania to:',
        otpExpiry:
            'Kod wygasa za 10 minut. Jeśli to nie Ty, zignoruj tego emaila.',
        featureFooter:
            'Otrzymujesz tę wiadomość, ponieważ masz konto ClawHost.',
        features: {
            terminal: {
                subject: 'Czy wiesz? Masz terminal webowy',
                preview:
                    'Uzyskaj dostęp do serwera bezpośrednio z przeglądarki',
                tag: 'Terminal Web',
                heading: 'Twój serwer jest o jedno kliknięcie',
                description:
                    'Uzyskaj dostęp do serwera bezpośrednio z przeglądarki dzięki wbudowanemu terminalowi. Bez klienta SSH — po prostu otwórz ClawHost i zacznij wpisywać polecenia.',
                cta: 'Otwórz terminal'
            },
            logs: {
                subject: 'Czy wiesz? Logi w czasie rzeczywistym w panelu',
                preview: 'Monitoruj logi serwera bez opuszczania przeglądarki',
                tag: 'Logi na żywo',
                heading: 'Zobacz, co robi Twój serwer',
                description:
                    'Monitoruj logi serwera w czasie rzeczywistym z panelu ClawHost. Diagnozuj problemy, śledź wdrożenia i debuguj aplikacje bez opuszczania przeglądarki.',
                cta: 'Zobacz logi'
            },
            fileExplorer: {
                subject: 'Czy wiesz? Edytuj pliki serwera z przeglądarki',
                preview: 'Przeglądaj, czytaj i edytuj pliki bez SSH',
                tag: 'Eksplorator plików',
                heading: 'Twoje pliki na wyciągnięcie ręki',
                description:
                    'Przeglądaj, czytaj i edytuj pliki na serwerze bezpośrednio z panelu ClawHost. Podświetlanie składni, wyszukiwanie i natychmiastowy zapis — bez SSH.',
                cta: 'Otwórz eksplorator plików'
            },
            diagnostics: {
                subject: 'Czy wiesz? Wbudowane kontrole stanu',
                preview: 'Monitoruj stan serwera z panelu',
                tag: 'Diagnostyka',
                heading: 'Wiedz, że Twój serwer jest zdrowy',
                description:
                    'Uruchom diagnostykę claw, aby sprawdzić status usług, użycie pamięci i dostępność portów. Wykryj problemy, zanim staną się poważne.',
                cta: 'Uruchom diagnostykę'
            },
            sshKeys: {
                subject: 'Czy wiesz? Zarządzaj kluczami SSH z ClawHost',
                preview: 'Generuj i zarządzaj parami kluczy SSH w panelu',
                tag: 'Klucze SSH',
                heading: 'Klucze SSH, uproszczone',
                description:
                    'Generuj pary kluczy SSH, kopiuj klucze publiczne i pobieraj klucze prywatne — wszystko z panelu ClawHost. Przypisuj klucze do claws dla bezpiecznego dostępu.',
                cta: 'Zarządzaj kluczami SSH'
            },
            exportConfig: {
                subject: 'Czy wiesz? Eksportuj konfigurację claw',
                preview: 'Pobierz konfigurację claw jako przenośny plik',
                tag: 'Eksport konfiguracji',
                heading: 'Zabierz konfigurację ze sobą',
                description:
                    'Eksportuj konfigurację i ustawienia claw jako plik do pobrania. Zrób kopię zapasową lub użyj jej do replikacji środowiska.',
                cta: 'Eksportuj konfigurację'
            },
            multiLanguage: {
                subject: 'Czy wiesz? ClawHost mówi w Twoim języku',
                preview: 'Używaj ClawHost w 14 językach',
                tag: 'Wielojęzyczność',
                heading: 'ClawHost w Twoim języku',
                description:
                    'Przełącz cały panel ClawHost na dowolny z 14 języków. Wszystko od przycisków po komunikaty o błędach — w pełni przetłumaczone.',
                cta: 'Zmień język'
            },
            subdomain: {
                subject: 'Czy wiesz? Każdy claw ma własną subdomenę',
                preview:
                    'Uzyskaj dostęp do claw z dowolnego miejsca za pomocą własnego URL',
                tag: 'Niestandardowa subdomena',
                heading: 'Dostęp z dowolnego miejsca',
                description:
                    'Każdy claw otrzymuje unikalną subdomenę, dzięki czemu możesz uzyskać dostęp do instancji OpenClaw z dowolnego miejsca. Bez przekierowania portów, bez sieci lokalnych — tylko URL.',
                cta: 'Zobacz swoją subdomenę'
            },
            darkMode: {
                subject: 'Czy wiesz? ClawHost ma tryb ciemny',
                preview: 'Przełączaj między jasnym a ciemnym motywem',
                tag: 'Tryb ciemny',
                heading: 'Łagodny dla oczu',
                description:
                    'Przełączaj między jasnym a ciemnym motywem w panelu ClawHost. Twoje preferencje są zapisywane i stosowane automatycznie przy każdej wizycie.',
                cta: 'Wypróbuj tryb ciemny'
            },
            reinstall: {
                subject:
                    'Czy wiesz? Zainstaluj ponownie OpenClaw jednym kliknięciem',
                preview: 'Zresetuj instancję OpenClaw bez utraty serwera',
                tag: 'Ponowna instalacja',
                heading: 'Nowy start, ten sam serwer',
                description:
                    'Zainstaluj ponownie środowisko OpenClaw na istniejącym serwerze jednym kliknięciem. Twój serwer pozostaje nietknięty — tylko OpenClaw otrzymuje czystą instalację.',
                cta: 'Dowiedz się więcej'
            },
            yearlyPlans: {
                subject: 'Czy wiesz? Oszczędzaj z planami rocznymi',
                preview: 'Przejdź na rozliczenie roczne i płać mniej',
                tag: 'Plany roczne',
                heading: 'Płać mniej, zyskaj więcej',
                description:
                    'Przejdź na rozliczenie roczne i oszczędzaj na subskrypcji claw. Ta sama świetna usługa, niższa cena — anuluj w dowolnym momencie.',
                cta: 'Zobacz plany'
            }
        }
    },
    auth: {
        signIn: 'Uwierzytelnianie',
        signInDescription:
            'Zaloguj się na swoje konto ClawHost, aby zarządzać instancjami OpenClaw.',
        signingIn: 'Uwierzytelnianie...',
        verifyCode: 'Zweryfikuj kod',
        checkYourEmail: 'Sprawdź email',
        checkYourEmailHeading: 'Sprawdź swoją skrzynkę',
        codeSentTo: 'Wysłaliśmy 6-cyfrowy kod na',
        signInToDeployOpenClaw:
            'Uwierzytelnij się, aby zarządzać i wdrażać agentów jednym kliknięciem.',
        emailAddress: 'Adres email',
        emailPlaceholder: 'example@clawhost.cloud',
        continueWithEmail: 'Kontynuuj z emailem',
        otpDescription: 'Wyślemy Ci kod do logowania. Bez hasła.',
        welcomeBack: 'Witaj ponownie.',
        resendIn: 'Wyślij ponownie za {{seconds}}s',
        resendCode: 'Wyślij ponownie kod',
        changeEmail: 'Zmień email',
        invalidCode: 'Nieprawidłowy kod !',
        invalidEmailFormat: 'Wprowadź prawidłowy adres email !',
        plusAddressingNotAllowed:
            'Adresowanie z plusem nie jest dozwolone przy logowaniu email !',
        or: 'lub',
        continueWithGoogle: 'Kontynuuj z Google',
        continueWithGithub: 'Kontynuuj z GitHub',
        agreementNotice: 'Kontynuując, zgadzasz się na nasz',
        termsOfService: 'Regulamin',
        andWord: 'i',
        privacyPolicy: 'Politykę prywatności'
    },
    account: {
        title: 'Konto',
        description:
            'Zarządzaj ustawieniami konta ClawHost i informacjami profilowymi.',
        accountSettings: 'Konto',
        manageYourAccount: 'Zarządzaj profilem i ustawieniami konta.',
        profileInformation: 'Informacje o profilu',
        profileDescription: 'Twoje dane osobowe i nazwa wyświetlana.',
        noNameSet: 'Nie ustawiono nazwy',
        joined: 'Dołączył',
        claws: 'claws',
        sshKeys: 'klucze',
        displayName: 'Nazwa wyświetlana',
        enterYourName: 'Wpisz swoje imię',
        emailAddress: 'Adres email',
        emailNotEditable:
            'Email nie jest edytowalny. Skontaktuj się ze wsparciem.',
        profileUpdatedSuccessfully: 'Profil zaktualizowany pomyślnie.',
        billingAndSubscription: 'Płatności i Subskrypcja',
        billingAndSubscriptionDescription:
            'Zarządzaj metodami płatności, subskrypcjami i fakturami.',
        viewBillingHistory: 'Zobacz historię płatności, faktury i subskrypcje.',
        aboutApp: 'O aplikacji',
        aboutAppDescription: 'Informacje o aplikacji i wersja.',
        appVersion: 'Wersja aplikacji',
        operatingSystem: 'System operacyjny',
        architecture: 'Architektura',
        checkForUpdates: 'Sprawdź aktualizacje',
        checkNow: 'Sprawdź',
        updatesUpToDate: 'Masz najnowszą wersję.',
        updateReady: 'Wersja {{version}} gotowa do zainstalowania.',
        restartToInstall: 'Uruchom ponownie, aby zainstalować',
        connectedAccounts: 'Połączone konta',
        connectedAccountsDescription:
            'Zarządzaj metodami logowania połączonymi z Twoim kontem.',
        authEmail: 'Email',
        authGoogle: 'Google',
        authGithub: 'GitHub',
        authConnected: 'Połączono',
        authConnect: 'Połącz',
        authDisconnect: 'Odłącz',
        emailCannotBeDisconnected:
            'Email jest zawsze połączony jako główna metoda logowania.',
        providerConnected: '{{provider}} połączony pomyślnie.',
        providerDisconnected: '{{provider}} odłączony pomyślnie.',
        providerEmailMismatch:
            'Możesz połączyć tylko konta używające tego samego adresu email !',
        settings: 'Ustawienia',
        settingsDescription: 'Zarządzaj preferencjami panelu.',
        openLinksWindowed: 'Otwieraj linki w widoku okienkowym',
        openLinksWindowedDescription:
            'Po włączeniu linki zewnętrzne otwierają się wewnątrz aplikacji zamiast w przeglądarce systemowej.'
    },
    billing: {
        date: 'Data',
        product: 'Produkt',
        amount: 'Kwota',
        status: 'Status',
        statusPaid: 'Opłacone',
        statusPending: 'Oczekujące',
        statusRefunded: 'Zwrócone',
        statusPartiallyRefunded: 'Częściowo zwrócone',
        billingReasonPurchase: 'Zakup',
        billingReasonSubscriptionCreate: 'Nowa subskrypcja',
        billingReasonSubscriptionCycle: 'Odnowienie',
        billingReasonSubscriptionUpdate: 'Aktualizacja subskrypcji',
        failedToLoadBilling: 'Nie udało się załadować historii płatności !',
        downloadInvoice: 'Pobierz fakturę',
        invoiceCanceledNavigation:
            'Pobieranie faktury przerwane ponieważ opuściłeś stronę.',
        failedToLoadInvoice: 'Nie udało się załadować faktury !',
        couponApplied: 'Kupon: {{name}}',
        manageBilling: 'Zarządzaj płatnościami',
        failedToLoadPortal: 'Nie udało się otworzyć portalu płatności !',
        portalCanceledNavigation:
            'Portal płatności przerwany ponieważ opuściłeś stronę.'
    },
    license: {
        title: 'Licencja',
        description: 'Zarządzaj swoją licencją OpenClaw.',
        pageTitle: 'Licencja',
        pageDescription:
            'Kup licencję na samodzielne hostowanie instancji OpenClaw lokalnie za pomocą naszej aplikacji Go.',
        planName: 'Licencja ClawHost Go',
        oneTimePurchase: 'Jednorazowy zakup',
        price: '${{price}}',
        priceNote: 'Zapłać raz, posiadaj na zawsze.',
        purchaseLicense: 'Kup licencję',
        purchasing: 'Przekierowanie...',
        activated: 'Licencja aktywna',
        activatedDescription:
            'Twoja licencja jest aktywna. Dziękujemy za wsparcie.',
        paymentSuccess:
            'Płatność zakończona sukcesem. Twoja licencja jest teraz aktywna.',
        failedToPurchase: 'Nie udało się rozpocząć płatności !',
        featureUnlimitedClaws: 'Nieograniczone OpenClaws',
        featureDevices: 'Nieograniczone urządzenia',
        featureUpdates: 'Aktualizacje na zawsze',
        featureSupport: 'Priorytetowe wsparcie',
        featureCloud: 'Wszystkie funkcje chmury, lokalnie',
        whatsIncluded: 'Co zawiera',
        gateTitle: 'Wymagana licencja',
        gateDescription:
            'Potrzebujesz licencji ClawHost Go, aby wdrażać i zarządzać instancjami OpenClaw lokalnie.'
    },
    network: {
        offline: 'Brak połączenia z internetem',
        offlineDescription:
            'Jesteś obecnie offline. Funkcje wymagające dostępu do internetu będą niedostępne.'
    },
    dashboard: {
        title: 'Claws',
        description:
            'Przeglądaj i zarządzaj wdrożonymi instancjami OpenClaw. Uruchamiaj, zatrzymuj, restartuj i monitoruj serwery VPS.',
        claw: 'claw',
        clawsPlural: 'claws',
        clawCountLabel: '{{count}} claws',
        clawCountLabelSingular: '{{count}} claw',
        newClaw: 'Nowy Claw',
        searchAgents: 'Szukaj agentów...',
        searchAgentsCount: 'Szukaj {{count}} agentów...',
        noAgentsMatchSearch: 'Nie znaleziono agentów.',
        clawActions: 'Akcje claw',
        noAgentsYet: 'Brak Agentów',
        noAgentsDescription:
            'Nie znaleziono wdrożonego agenta. Ale możesz wdrożyć swojego pierwszego agenta w dowolnym momencie od $25/mies. Po prostu zrób to z AI.',
        deleteClaw: 'Usuń Claw',
        deleteClawConfirmation: 'Czy na pewno chcesz usunąć',
        deleteClawWarning:
            'Twoja subskrypcja zostanie anulowana, a serwer zostanie usunięty na koniec bieżącego okresu rozliczeniowego. Możesz z niego korzystać do tego czasu.',
        actionCannotBeUndone: 'Tej akcji nie można cofnąć.',
        start: 'Uruchom',
        startServer: 'Uruchom serwer',
        stop: 'Zatrzymaj',
        stopServer: 'Zatrzymaj serwer',
        restart: 'Restartuj',
        restartServer: 'Restartuj serwer',
        startClaw: 'Uruchom serwer',
        startClawConfirmation:
            'To uruchomi serwer i wszystkie jego procesy. Rób to tylko wtedy, gdy jest to potrzebne.',
        stopClaw: 'Zatrzymaj serwer',
        stopClawConfirmation:
            'To zakończy wszystkie uruchomione procesy na serwerze, w tym OpenClaw. Żadne dane nie zostaną utracone. Rób to tylko wtedy, gdy jest to potrzebne. Możesz go uruchomić ponownie w dowolnym momencie. Zatrzymanie nie wstrzymuje naliczania opłat — usuń serwer, aby przestać być obciążanym.',
        restartClaw: 'Restartuj serwer',
        restartClawConfirmation:
            'To zakończy wszystkie uruchomione procesy na serwerze, w tym OpenClaw, i uruchomi je ponownie. Żadne dane nie zostaną utracone. Rób to tylko wtedy, gdy jest to potrzebne.',
        copyPassword: 'Kopiuj hasło',
        copySshWithKey: 'Kopiuj SSH (z kluczem)',
        copySshWithPassword: 'Kopiuj SSH (z hasłem)',
        connect: 'Kopiuj polecenie SSH',
        viewServerCredentials: 'Dane serwera',
        serverCredentials: 'Dane serwera',
        serverCredentialsDescription:
            'Użyj tych danych, aby połączyć się z serwerem przez SSH.',
        sshCommand: 'Polecenie SSH',
        rootPassword: 'Hasło root',
        sshCommandCopied: 'Polecenie SSH skopiowane.',
        sshCommandWithPasswordCopied: 'Polecenie SSH z hasłem skopiowane.',
        passwordCopiedToClipboard: 'Hasło skopiowane do schowka.',
        plan: 'Serwer',
        location: 'Lokalizacja',
        ip: 'IP',
        domain: 'Domena',
        ipAddress: 'Adres IP',
        port: 'Port',
        subscription: 'Subskrypcja',
        history: 'Historia',
        planCost: 'Plan',
        serverId: 'ID serwera',
        created: 'Utworzono',
        sshKey: 'Klucz SSH',
        storage: 'Pamięć',
        nextBilling: 'Następna płatność',
        lastBilling: 'Ostatnia płatność',
        totalSpent: 'Łącznie wydane',
        version: 'Wersja',
        gatewayToken: 'Token gateway',
        gatewayTokenDescription:
            'Użyj tego tokenu do uwierzytelnienia z gateway',
        contactSupport: 'Kontakt z Pomocą',
        scheduledForDeletion: 'Zaplanowane do usunięcia',
        scheduledDeletionShort: 'Usunięcie {{date}}',
        deletionDate: 'Ten claw zostanie usunięty {{date}}',
        deletionTooltip:
            'Zaplanowane do usunięcia {{date}}. Aby anulować, użyj menu.',
        pastDue: 'Płatność nie powiodła się',
        deletionFailed: 'Usuwanie nie powiodło się',
        pastDueDescription:
            'Twoja płatność nie powiodła się. Jeśli nie zostanie rozwiązana w ciągu 14 dni, ten claw zostanie trwale usunięty.',
        updatePayment: 'Zaktualizuj płatność',
        cancelDeletion: 'Anuluj usunięcie',
        cancelDeletionConfirmation:
            'Czy na pewno? Twoja subskrypcja pozostanie aktywna i nadal będziesz obciążany. Instancja będzie nadal działać.',
        deletionCancelled: 'Usunięcie anulowane.',
        scheduleDeletion: 'Zaplanuj usunięcie',
        resumeCheckout: 'Wznów płatność',
        cancelPurchase: 'Anuluj zakup',
        hardDelete: 'Wymuś usunięcie',
        hardDeleteClaw: 'Wymuś usunięcie',
        hardDeleteConfirmation:
            'Czy na pewno chcesz natychmiast usunąć tego claw? Stracisz pozostały czas bieżącego okresu rozliczeniowego. Tej akcji nie można cofnąć.',
        diagnostics: 'Diagnostyka',
        diagnosticsDescription: 'Sprawdź stan instancji OpenClaw.',
        diagnosticsStatus: 'Status',
        diagnosticsLogs: 'Logi',
        diagnosticsRepair: 'Repair',
        diagnosticsRepairDescription:
            'Remove memory limits, apply latest service configuration, and restart the gateway. This fixes most common issues.',
        diagnosticsRepairSuccess: 'Instance repaired successfully.',
        diagnosticsRepairFailed:
            'Repair applied but gateway is not responding yet!',
        diagnosticsLoading: 'Łączenie z instancją...',
        diagnosticsNoLogs:
            'Brak dostępnych logów. Uruchom instancję, aby wygenerować logi.',
        diagnosticsNoLogsHermesTitle: 'Brama Hermes nie jest uruchomiona',
        diagnosticsNoLogsHermesDescription:
            'W zakładce Terminal uruchom `hermes gateway setup`, aby skonfigurować platformy, a następnie `sudo systemctl enable --now hermes-gateway`, aby uruchomić most.',
        diagnosticsIssueDetected: 'Wykryto problem z Twoją instancją.',
        diagnosticsHealthy: 'Twoja instancja działa normalnie.',
        diagnosticsPort: 'Port 18789',
        diagnosticsMemory: 'Pamięć',
        logsDescription:
            'Ostatnie 100 linii logu gateway, automatyczne odświeżanie.',
        fileExplorer: 'Eksplorator plików',
        fileExplorerRoot: 'openclaw',
        fileExplorerDescription:
            'Przeglądaj i edytuj pliki konfiguracyjne OpenClaw. Nieprawidłowe zmiany mogą uszkodzić instancję.',
        fileExplorerSelectFile: 'Wybierz plik, aby zobaczyć jego zawartość.',
        fileExplorerReadOnly: 'Tylko do odczytu',
        fileExplorerSave: 'Zapisz',
        fileExplorerSaved: 'Plik zapisany.',
        fileExplorerSaveCanceledNavigation:
            'Zapisywanie pliku przerwane ponieważ opuściłeś stronę.',
        fileExplorerInvalidJson:
            'Nieprawidłowy JSON. Napraw błędy składni przed zapisaniem !',
        fileExplorerNoFiles: 'Nie znaleziono plików',
        fileExplorerSearchFiles: 'Szukaj plików...',
        fileExplorerNoSearchResults: 'Brak pasujących plików.',
        startFailed: 'Nie udało się uruchomić claw !',
        renameSuccess: 'Nazwa claw zmieniona pomyślnie.',
        renameFailed: 'Nie udało się zmienić nazwy claw !',
        renameInvalidChars: 'Dozwolone są tylko litery, cyfry i myślniki !',
        reinstallInstance: 'Zainstaluj ponownie instancję',
        reinstallClaw: 'Zainstaluj ponownie instancję',
        reinstallClawConfirmation:
            'Spowoduje to całkowitą ponowną instalację {{agentName}} na tej instancji. Wszystkie konfiguracje, agenci i dane zostaną zresetowane. Tej akcji nie można cofnąć. Kontynuować?',
        reinstallInstanceSuccess: 'Instancja ponownie zainstalowana pomyślnie.',
        reinstallInstanceFailed:
            'Nie udało się ponownie zainstalować instancji !',
        reinstallCanceledNavigation:
            'Ponowna instalacja przerwana ponieważ opuściłeś stronę.',
        openControlPanel: 'Otwórz panel sterowania',
        exportData: 'Eksportuj Claw (.zip)',
        exportAgent: 'Eksport',
        exportAgentButton: 'Eksportuj dane',
        exportAgentTooltip:
            'Pobierz tego agenta i wszystkie jego dane jako plik .zip.',
        exportAgentInProgress:
            'Eksport może potrwać kilka minut w przypadku większych agentów.',
        exportStarted: 'Przygotowywanie eksportu, może to chwilę potrwać...',
        exportSuccess: 'Claw wyeksportowany pomyślnie.',
        exportFailed: 'Nie udało się wyeksportować danych claw !',
        exportCanceledNavigation:
            'Eksport anulowany ponieważ opuściłeś stronę.',
        scheduleDeletionCanceledNavigation:
            'Planowanie usunięcia przerwane ponieważ opuściłeś stronę.',
        cancelDeletionCanceledNavigation:
            'Anulowanie usunięcia przerwane ponieważ opuściłeś stronę.',
        hardDeleteCanceledNavigation:
            'Wymuszone usunięcie przerwane ponieważ opuściłeś stronę.',
        exportRateLimited:
            'Możesz wyeksportować ponownie za {{minutes}} minut.',
        exportRateLimitedOne: 'Możesz wyeksportować ponownie za 1 minutę.',
        configuringTooltip:
            'To może zająć trochę czasu. Zależy to od OpenClaw, lokalizacji serwera i Cloudflare DNS.',
        paymentSuccess: 'Twój claw jest tworzony i konfigurowany.',
        dnsSetupBanner:
            'Skonfiguruj lokalne DNS, aby uzyskać dostęp do claws przez subdomain.clawhost.',
        dnsSetupButton: 'Skonfiguruj DNS',
        dnsSetupSuccess: 'Resolver DNS skonfigurowany pomyślnie.',
        dnsSetupError: 'Nie udało się skonfigurować resolvera DNS !',
        userTab: 'Użytkownik',
        adminTab: 'Admin',
        adminTitle: 'Admin',
        adminDescription: 'Zarządzaj wszystkimi claws na platformie.',
        adminNoClaws: 'Brak claws na platformie.',
        adminAccessDenied: 'Nie masz uprawnień do dostępu do tej strony.',
        owner: 'Właściciel',
        agentType: 'Agent',
        status: {
            running: 'Działa',
            stopped: 'Zatrzymany',
            starting: 'Uruchamianie',
            stopping: 'Zatrzymywanie',
            creating: 'Tworzenie',
            configuring: 'Konfiguracja',
            initializing: 'Konfigurowanie',
            migrating: 'Migracja',
            rebuilding: 'Przebudowywanie',
            restarting: 'Restartowanie',
            unreachable: 'Nieosiągalny',
            deleting: 'Usuwanie',
            scheduledDeletion: 'Zaplanowane usunięcie',
            awaitingPayment: 'Oczekiwanie na płatność',
            unknown: 'Nieznany',
            checking: 'Sprawdzanie'
        },
        tabNotAvailableForAgent: 'Niedostępne dla tego typu agenta'
    },
    createClaw: {
        title: 'Wdróż OpenClaw',
        description: 'Skonfiguruj serwer i zacznij budować z AI.',
        clawName: 'Nazwa',
        clawNamePlaceholder: 'np. cozy-panda',
        clawNameInvalidChars: 'Dozwolone są tylko litery, cyfry i myślniki !',
        autoGenerateNameHint:
            'Pozostaw puste, aby wygenerować nazwę automatycznie.',
        agentType: 'Typ agenta',
        agentTypeOpenClaw: 'OpenClaw',
        agentTypeHermes: 'Hermes',
        agentTypeOpenClawDescription: '{{count}} gwiazdek',
        agentTypeHermesDescription: '{{count}} gwiazdek',
        location: 'Lokalizacja',
        locationUnavailable: 'Niedostępna',
        locationUnavailableForPlan: 'Niedostępna',
        plan: 'Serwer',
        planUnavailable: 'Niedostępny',
        planUnavailableForLocation: 'Niedostępny w tej lokalizacji',
        advancedOptions: 'Zaawansowane opcje dodatkowe',
        rootPassword: 'Hasło root',
        rootPasswordPlaceholder: 'Wpisz hasło lub wygeneruj',
        gatewayTokenPlaceholder: 'np. a1b2c3d4e5f6...',
        autoGenerateGatewayTokenHint: 'Generowany automatycznie, jeśli puste.',
        autoGeneratePasswordHint: 'Opcjonalne. Brak hasła, jeśli puste.',
        regeneratePassword: 'Regeneruj hasło',
        gatewayToken: 'Gateway Token',
        regenerateToken: 'Regeneruj token',
        tokenCopied: 'Token skopiowany.',
        sshKeyOptional: 'Klucz SSH',
        noSshKeyPasswordOnly: 'Bez klucza SSH (tylko hasło)',
        noSshKeysConfigured: 'Brak skonfigurowanych kluczy SSH',
        addSshKeyForPasswordlessLogin: 'Dodaj klucz SSH do logowania bez hasła',
        additionalStorageOptional: 'Dodatkowa pamięć',
        volumeStorage: 'Wolumen pamięci',
        vpsServer: 'Serwer VPS',
        openClawPreinstalled: 'OpenClaw preinstalowany',
        storageWithSize: 'Pamięć',
        billingInterval: 'Rozliczenie',
        monthly: 'Miesięczne',
        yearly: 'Roczne',
        yearlySaveBadge: '2 miesiące gratis',
        yearlySavings: 'Oszczędzasz',
        totalMonthly: 'Razem miesięcznie',
        totalYearly: 'Razem rocznie',
        creating: 'Tworzenie...',
        proceedToPayment: 'Zapłać ${{amount}} i wdróż',
        agreementNotice: 'Wdrażając, zgadzasz się na nasz',
        selectServerToContinue: 'Wybierz serwer, aby kontynuować',
        selectLocationToContinue: 'Wybierz lokalizację, aby kontynuować',
        clawCreated: 'Claw utworzony.',
        clawCreating: 'Tworzenie twojego claw, może to chwilę potrwać...',
        assigning: 'Przypisywanie...',
        rootPasswordSaveThis: 'Hasło root (zapisz to!)',
        sshCommandUsingKey: 'Polecenie SSH (z kluczem)',
        sshCommandWithPassword: 'Polecenie SSH (z hasłem)',
        passwordCopied: 'Hasło skopiowane.',
        planSpec: '{{cpu}} vCPU / {{memory}} GB RAM / {{disk}} GB SSD',
        volumeUnit: 'GB',
        volumeMin: '0 GB',
        volumeMax: '500 GB'
    },
    sshKeys: {
        title: 'Klucze SSH',
        description:
            'Zarządzaj kluczami SSH dla bezpiecznego dostępu bez hasła do instancji OpenClaw.',
        key: 'klucz SSH',
        keys: 'klucze SSH',
        keyCountDescription: '{{count}} {{label}}',
        addSshKey: 'Dodaj klucz SSH',
        howSshKeysWork: 'Jak podłączyć klucz SSH?',
        step1: 'Wygeneruj parę kluczy SSH na swoim komputerze (lub użyj istniejącej).',
        step2: 'Dodaj klucz publiczny tutaj.',
        step3: 'Wybierz klucz podczas tworzenia nowej instancji.',
        step4: 'Połącz się za pomocą',
        step4Command: 'ssh root@your-server-ip',
        step4Suffix: '- bez hasła.',
        noSshKeysYet: 'Brak kluczy SSH',
        noSshKeysDescription:
            'Brak dodanych kluczy SSH na Twoim koncie. Możesz je dodać w dowolnym momencie i połączyć się z wdrożonymi claws.',
        deleteConfirmation: 'Czy na pewno chcesz usunąć ten klucz SSH?',
        deleteKey: 'Usuń klucz SSH',
        deleteKeyConfirmation: 'Czy na pewno chcesz usunąć',
        sshKeyAddedSuccessfully: 'Klucz SSH dodany pomyślnie.',
        addSshKeyModalTitle: 'Dodaj klucz SSH',
        addSshKeyModalDescription:
            'Dodaj klucz SSH do uwierzytelniania bez hasła',
        iHaveAnSshKey: 'Istniejący klucz',
        generateNewKey: 'Utwórz nowy',
        name: 'Nazwa',
        namePlaceholder: 'np: mój-macbook',
        publicKey: 'Klucz publiczny',
        publicKeyPlaceholder: 'ssh-rsa AAAA... lub ssh-ed25519 AAAA...',
        publicKeyHint: 'Znajdź swój klucz publiczny w',
        publicKeyPath1: '~/.ssh/id_ed25519.pub',
        publicKeyPathOr: 'lub',
        publicKeyPath2: '~/.ssh/id_rsa.pub',
        important: 'Ważne:',
        dontHaveSshKey: 'Nie masz klucza SSH? Wygeneruj go:',
        sshKeygenCommand: 'ssh-keygen -t ed25519 -C "your-email@example.com"',
        keyName: 'Nazwa klucza',
        keyNamePlaceholder: 'Mój wygenerowany klucz',
        importantAfterGenerating:
            'Po wygenerowaniu musisz pobrać i zapisać swój klucz prywatny. Nie możemy go odzyskać, jeśli go stracisz !',
        generateKeyPair: 'Wygeneruj parę kluczy',
        orGenerateLocallyRecommended: 'Lub wygeneruj lokalnie (zalecane)',
        runThisInYourTerminal: 'Uruchom to w terminalu:',
        thenSwitchToIHave:
            'Następnie przełącz na „Istniejący klucz" i wklej klucz publiczny.',
        savePrivateKeyNow:
            'Zapisz swój klucz prywatny TERAZ! Pobierz go przed zamknięciem tego okna. Nie będziesz mógł go ponownie zobaczyć.',
        privateKeyKeepSecret: 'Klucz prywatny (zachowaj w tajemnicy!)',
        downloadPrivateKey: 'Pobierz klucz prywatny',
        publicKeyWillBeSaved: 'Klucz publiczny (zostanie zapisany)',
        savePublicKey: 'Zapisz klucz publiczny'
    },
    landing: {
        title: 'Wdróż OpenClaw. Jedno kliknięcie. Gotowe.',
        description:
            'Wdróż OpenClaw na własnym VPS jednym kliknięciem. Samodzielnie hostowalny hosting chmurowy z pełnym dostępem root, globalnymi lokalizacjami i przejrzystym cennikiem.',
        badge: 'OpenClaw i Hermes w chmurze',
        tutorialBadge: 'Obejrzyj. Wdróż.',
        tutorialVideoThumbnail: 'Miniatura filmu instruktażowego ClawHost',
        clawhostGoLogoAlt: 'ClawHost Go',
        trustMrrBadgeAlt: 'TrustMRR verified revenue badge',
        macosPreviewTime: '22:12',
        heroTitle1: 'Wdróż OpenClaw.',
        heroTitle2: 'Jedno kliknięcie. Gotowe.',
        heroDescription:
            'Wdrażaj agentów OpenClaw i Hermes w chmurze lub lokalnie jednym kliknięciem — buduj, łącz i skaluj swoich agentów AI szybciej z ClawHost.',
        selfHost: 'Open Source',
        startingPrice: 'Od',
        locations: 'Lokalizacje',
        servers: 'Serwery',
        zeroCount: 'Zero',
        zeroConfig: 'Zero konfiguracji',
        features: 'Funkcje',
        whyClawHost: 'Kompleksowe funkcje',
        featuresDescription:
            'Dlaczego warto nas wypróbować — funkcje mówią same za siebie.',
        zeroConfigDescription:
            'Pomiń godziny konfiguracji serwera i OpenClaw. Jest preinstalowany i gotowy w kilka minut.',
        ownedData: '100% własne dane',
        ownedDataDescription:
            'Twój serwer, Twoje dane. Bez współdzielonej infrastruktury, bez logów, bez osób trzecich. Online 24/7.',
        fullSpeed: 'Pełna prędkość',
        fullSpeedDescription:
            'Dedykowane zasoby VPS oznaczają brak ograniczeń, pełną przepustowość i błyskawiczny internet.',
        globalLocations: 'Globalne lokalizacje',
        globalLocationsDescription:
            'Wdróż OpenClaw i Hermes w wielu globalnych regionach i wybierz lokalizację najbliższą Tobie.',
        fullSshAccess: 'Bezpośredni dostęp SSH',
        fullSshAccessDescription:
            'Uzyskaj dostęp do terminala serwera bezpośrednio z platformy. Bez zewnętrznych klientów SSH.',
        secure: 'Bezpieczny',
        secureDescription:
            'Domyślnie chroniony przed lukami SSL, malware i typowymi zagrożeniami bezpieczeństwa.',
        payAsYouGo: 'Proste ceny',
        payAsYouGoDescription:
            'Cennik oparty na Twoich potrzebach. Bez wymuszonych wysokich rachunków za serwery niskiej jakości. Anuluj w dowolnym momencie.',
        bringYourCredits: 'Przynieś własne kredyty',
        bringYourCreditsDescription:
            'Używaj własnego klucza API Anthropic lub subskrypcji Claude. Płać bezpośrednio Anthropic — bez narzutów.',
        customSubdomains: 'Dostęp online',
        customSubdomainsDescription:
            'Zapomnij o sieciach lokalnych. Uzyskaj bezpieczny dostęp do OpenClaw z dowolnego miejsca za pomocą subdomeny.',
        autoUpdates: 'Kontrola wersji',
        autoUpdatesDescription:
            'Przełącz się na dowolną wersję OpenClaw lub Hermes jednym kliknięciem. Zawsze bądź na bieżąco lub cofnij, gdy to potrzebne.',
        openclawControl: 'Monitorowanie serwerów',
        openclawControlDescription:
            'Monitoruj swoje serwery OpenClaw i Hermes z metrykami, logami i diagnostyką w czasie rzeczywistym.',
        clawHostControl: 'Pełny dostęp do serwera',
        clawHostControlDescription:
            'Terminal w przeglądarce, eksplorator plików, logi, diagnostyka i zarządzanie wersjami — wszystko z poziomu panelu.',
        multipleClaws: 'Wielu agentów',
        multipleClawsDescription:
            'Wdrażaj i zarządzaj wieloma agentami OpenClaw i Hermes z jednego panelu. Skaluj wraz ze wzrostem.',
        pricing: 'Cennik',
        simpleTransparentPricing: 'Prosty, przejrzysty cennik',
        pricingDescription:
            'Wybierz plan dopasowany do swoich potrzeb. Bez ukrytych opłat.',
        planColumn: 'Serwer',
        vCpuColumn: 'vCPU',
        ramColumn: 'RAM',
        storageColumn: 'Dysk',
        monthlyColumn: 'Cena',
        tierShared: 'Współdzielony vCPU',
        tierDedicated: 'Dedykowany vCPU',
        tierArm: 'Ampere (ARM)',
        tierRegular: 'Standardowa wydajność',
        tierHighPerformance: 'Wysoka wydajność',
        tierHighFrequency: 'Wysoka częstotliwość',
        recommended: 'Zalecane',
        perMonth: '/mies.',
        perYear: '/rok',
        pricePerMonth: '${{price}}/mo',
        pricePerYear: '${{price}}/yr',
        volumePricePerMonth: '+${{price}}/mo',
        startingPriceValue: '${{price}}/mo',
        deploy: 'Deploy',
        select: 'Wybierz',
        selectPlanLabel: 'Wybierz plan {{plan}}',
        deployPlanLabel: 'Wdróż plan {{plan}}',
        openClawPreinstalled: 'OpenClaw preinstalowany',
        unlimitedBandwidth: 'Nieograniczona przepustowość',
        rootSshAccess: 'Pełny dostęp root SSH',
        onlineAllDay: 'Online 24/7',
        showAllPlans: 'Pokaż wszystkie plany',
        simplePricing: 'Uproszczone',
        planStarter: 'Starter',
        planStarterDesc: 'Do projektów osobistych i eksperymentów',
        planGrowth: 'Growth',
        planGrowthDesc: 'Do obciążeń produkcyjnych',
        planPro: 'Pro',
        planProDesc: 'Dla rozwijających się firm',
        planBusiness: 'Business',
        planBusinessDesc: 'Do operacji na dużą skalę',
        featureCpu: '{{count}} vCPU',
        featureRam: '{{count}} GB RAM',
        featureDisk: '{{count}} GB SSD',
        choosePlan: 'Wybierz plan',
        mostPopular: 'Najpopularniejszy',
        featurePreinstalled: 'Agent preinstalowany',
        featureBandwidth: 'Nieograniczona przepustowość',
        featureSsh: 'Dostęp SSH root',
        featureUptime: 'Online 24/7',
        featureDedicatedCpu: 'Dedykowany CPU',
        featureEmailSupport: 'Wsparcie e-mail',
        fastInternet: 'Szybki internet',
        emailSupport: 'Wsparcie e-mail',
        faqTitle: 'Pytania',
        frequentlyAskedQuestions: 'Często zadawane pytania',
        faqDescription: 'Każde często zadawane pytanie — z odpowiedzią.',
        faq1Question: 'Czym jest ClawHost?',
        faq1Answer:
            'ClawHost to platforma stworzona, by uczynić OpenClaw i Hermes dostępnymi dla każdego. Pozwala zarówno użytkownikom nietechnicznym, jak i deweloperom uruchamiać je bez zarządzania infrastrukturą. My zajmujemy się serwerami, uptime, bezpieczeństwem i konserwacją — Ty po prostu korzystasz ze swoich agentów.',
        faq2Question: 'Czym jest OpenClaw?',
        faq2Answer:
            'OpenClaw to samodzielnie hostowana warstwa bezpiecznego dostępu do narzędzi i usług AI. Jest wstępnie skonfigurowany pod kątem bezpieczeństwa i wydajności, więc możesz go wdrożyć i natychmiast się połączyć.',
        faqHermesQuestion: 'Czym jest Hermes?',
        faqHermesAnswer:
            'Hermes to autonomiczny agent AI z przeglądaniem stron, zarządzaniem kalendarzem, wnioskowaniem wielomodelowym i automatyzacją przeglądarki. Jest preinstalowany obok OpenClaw na każdym serwerze ClawHost.',
        faq3Question:
            'Czym to się różni od innych narzędzi AI lub hostowanych platform?',
        faq3Answer:
            'W przeciwieństwie do hostowanych narzędzi AI, ClawHost daje Ci prawdziwy serwer z zainstalowanymi OpenClaw i Hermes. Posiadasz infrastrukturę, kontrolujesz wszystko i nie ogranicza Cię współdzielona platforma ani model.',
        faq4Question: 'Czy potrzebuję wiedzy technicznej?',
        faq4Answer:
            'Nie. Zajmujemy się całą infrastrukturą, konfiguracją i utrzymaniem. OpenClaw konfigurujesz i zarządzasz przez interfejs, a Hermes uruchamia się prostymi poleceniami terminala — bez dotykania serwerów ani infrastruktury.',
        faq5Question: 'Jakie lokalizacje są dostępne?',
        faq5Answer:
            'Oferujemy wiele lokalizacji serwerów na całym świecie, w tym USA, Europę i Azję. Możesz wdrażać OpenClaw lub Hermes na wielu serwerach w różnych regionach, jeśli potrzeba.',
        faq6Question: 'Ile to kosztuje?',
        faq6Answer:
            'Ceny zależą od wybranego serwera. Dzięki wielu opcjom serwerów od podstawowych po wysokowydajne, wybierasz to, co odpowiada Twoim potrzebom i budżetowi.',
        faq7Question:
            'Czy mogę uzyskać dostęp do mojego agenta bezpośrednio przez link?',
        faq7Answer:
            'OpenClaw jest dostępny przez URL subdomeny z pełnym interfejsem webowym. Hermes działa przez polecenia terminala po SSH — brak linku, ale pełna kontrola z terminala serwera.',
        comparison: 'Porównanie',
        comparisonTitle: 'Czym się wyróżniamy',
        comparisonDescription:
            'Jest tylko jedna porównywalna platforma, a nasze podejście koncentruje się na prawdziwych serwerach i pełnej własności zamiast ograniczeń.',
        others: 'Inni',
        comparisonOpenClawUs: 'Pełny dostęp do OpenClaw',
        comparisonOpenClawOthers: 'Tylko czat, bez zarządzania',
        comparisonPricingUs: 'Przejrzysty cennik, jasne specyfikacje',
        comparisonPricingOthers: 'Ukryte specyfikacje, niejasny cennik',
        comparisonOwnershipUs: 'W pełni posiadasz swój serwer',
        comparisonOwnershipOthers: 'Nic nie posiadasz',
        comparisonSubdomainUs: 'Dostęp przez subdomenę',
        comparisonSubdomainOthers: 'Dostęp tylko przez platformy zewnętrzne',
        comparisonInfraUs: 'Infrastruktura na żądanie',
        comparisonInfraOthers: 'Ograniczone serwery',
        comparisonDataUs: 'Posiadasz swoje dane',
        comparisonDataOthers: 'Nie posiadasz swoich danych',
        comparisonMultipleUs: 'Wielu agentów OpenClaw i Hermes',
        comparisonMultipleOthers: 'Tylko jeden OpenClaw',
        comparisonOpenSourceUs: 'W pełni open source',
        comparisonOpenSourceOthers: 'Zamknięte źródło',
        comparisonExportUs: 'Eksportuj OpenClaw i Hermes wszędzie',
        comparisonExportOthers: 'Uzależnienie od dostawcy',
        comparisonProvidersUs: 'Wielu dostawców serwerów',
        comparisonProvidersOthers: 'Tylko jeden dostawca',
        comparisonVersionUs: 'Zmiana wersji jednym kliknięciem',
        comparisonVersionOthers: 'Tylko ręczne aktualizacje',
        comparisonTerminalUs: 'Wbudowany terminal webowy',
        comparisonTerminalOthers: 'Wymagany klient SSH',
        seeFullComparison: 'Zobacz pełne porównanie',
        comparisonCtaText:
            'Porównujemy się z SimpleAgent, MyAgent.ai i innymi — funkcja po funkcji.',
        selfHostInstead: 'Hostuj samodzielnie'
    },
    blog: {
        readingTime: '{{minutes}} min czytania',
        ctaTitle: 'Wdróż OpenClaw i Hermes jednym kliknięciem',
        ctaDescription:
            'Uzyskaj dedykowany serwer z preinstalowanymi OpenClaw i Hermes. Pełny dostęp root, globalne lokalizacje i gotowy w kilka minut. Jest Twój zawsze. Od 25 $.',
        ctaDeploy: 'Wdróż agenta',
        ctaGitHub: 'Zobacz na GitHub'
    },
    changelog: {
        title: 'Lista zmian',
        description: 'Śledź aktualizacje, nowe funkcje i ulepszenia ClawHost.',
        subtitle: 'Wszystkie aktualizacje, nowe funkcje i ulepszenia ClawHost.',
        release14Date: '1 kwietnia 2026',
        release14Title: 'Migracja na Hetzner, system afiliacyjny i nowe języki',
        release14Description:
            'Scentralizowanie całej infrastruktury na Hetzner dla najlepszych cen i wydajności, uruchomienie systemu afiliacyjnego z 15% prowizją, dodanie 10 nowych języków i stworzenie wewnętrznych narzędzi zapewniających stabilne wsparcie wersji.',
        release14Feature1:
            'Usunięto DigitalOcean i Vultr — cała infrastruktura działa teraz wyłącznie na Hetzner z nieskończoną pojemnością i bez ograniczeń po stronie dostawcy',
        release14Feature2:
            'System afiliacyjny umożliwiający użytkownikom zarabianie 15% prowizji od każdego poleconego zamówienia',
        release14Feature3:
            'Dodano 10 nowych języków: chiński, hindi, arabski, rosyjski, japoński, turecki, włoski, polski, holenderski i portugalski',
        release14Feature4:
            'Wewnętrzne narzędzia zapewniające stabilne wsparcie funkcji dla bieżących wersji OpenClaw, bez obsługi starszych wersji',
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
        release15Date: '11 kwietnia 2026',
        release15Title: 'Uproszczenie i niestandardowe subdomeny',
        release15Description:
            'Uproszczenie platformy poprzez migrację zarządzanych funkcji do OpenClaw, usunięcie widoku playground i wprowadzenie zmienialnych niestandardowych subdomen.',
        release15Feature1:
            'Uproszczenie i migracja zarządzanych funkcji do OpenClaw, koniec z czatem ClawHost, agentami, kanałami, zmiennymi i umiejętnościami',
        release15Feature2:
            'Enhanced file explorer with full editing support, 100+ language syntax highlighting, and export as .zip',
        release15Feature3:
            'Removed playground view for a cleaner, more focused dashboard experience',
        release15Feature4:
            'Changeable custom subdomains, update your claw subdomain to your loved one',
        release12Date: '14 marca 2026',
        release12Title: 'Plany roczne, tryb głosowy i więcej',
        release12Description:
            'Subskrypcje roczne z 2 miesiącami gratis, tryb głosowy, ponowna instalacja instancji i wstępna strona docelowa ClawHost Go.',
        release12Feature1:
            'Strona docelowa ClawHost Go, hosting lokalny z ClawHost',
        release12Feature2:
            'Obsługa subskrypcji rocznych z 2 miesiącami gratis przy rocznym rozliczeniu',
        release12Feature3:
            'Tryb głosowy do interakcji z agentami OpenClaw hostowanymi na ClawHost',
        release12Feature4:
            'Ponowna instalacja OpenClaw na instancji dla świeżego startu, dostępna raz dziennie',
        release11Date: '28 lutego 2026',
        release11Title:
            'Tekst na mowę, terminal, zakładki czatu i eksplorator plików',
        release11Description:
            'Słuchaj odpowiedzi agentów z tekstem na mowę, interakcja z VPS bezpośrednio przez terminal, szybsza nawigacja czatów z zakładkami panelu bocznego i przeglądanie plików z ulepszonym eksploratorem.',
        release11Feature1: 'Tekst na mowę w wiadomościach agentów w playground',
        release11Feature2:
            'Terminal do interakcji z instancjami VPS bezpośrednio z panelu',
        release11Feature3:
            'Zakładki widoku panelu bocznego czatu dla łatwego dostępu i nawigacji',
        release11Feature4:
            'Ulepszenia eksploratora plików z paskiem wyszukiwania plików',
        release11Feature5:
            'Naprawiono znaczniki czasu wiadomości nie odzwierciedlające rzeczywistego czasu',
        release10Date: '23 lutego 2026',
        release10Title:
            'Prośby o funkcje, eksplorator plików i poprawki błędów',
        release10Description:
            'Prośby o funkcje od społeczności, rozszerzona obsługa edycji plików i różne poprawki błędów.',
        release10Feature1:
            'Prośby o funkcje automatycznie zarządzane i publikowane przez agentów OpenClaw',
        release10Feature3:
            'Naprawiono przełączanie dostawcy modelu nie odzwierciedlające zmian i nadal używające początkowego modelu',
        release10Feature4: 'Wiele ulepszeń i poprawek błędów na platformie',
        release10Feature5:
            'Pliki TypeScript, Markdown i zwykły tekst są teraz edytowalne w eksploratorze plików',
        release9Date: '21 lutego 2026',
        release9Title: 'Porównania, refaktoryzacja playground i więcej',
        release9Description:
            'Strony porównawcze z konkurencją, restrukturyzacja funkcji playground, obsługa wielu języków i ogólne ulepszenia wydajności.',
        release9Feature1: 'Obsługa jasnego i ciemnego motywu',
        release9Feature2:
            'Obsługa wielu języków: angielski, francuski, hiszpański i niemiecki',
        release9Feature3:
            'Strony porównawcze z pełnym zestawieniem z konkurencją',
        release9Feature4:
            'Wersje OpenClaw, aktualizacja jednym kliknięciem lub natychmiastowa instalacja dowolnej wersji',
        release9Feature5:
            'Refaktoryzacja struktury funkcji playground i uproszczenia',
        release9Feature6: 'Ulepszenia wydajności, stabilności i responsywności',
        release8Date: '18 lutego 2026',
        release8Title: 'Jasny motyw, wydajność i stabilność',
        release8Description:
            'Obsługa jasnego motywu, ulepszenia wydajności i doświadczenia użytkownika oraz ulepszenia stabilności i responsywności.',
        release8Feature1: 'Tryby motywu jasny, ciemny i systemowy',
        release8Feature2: 'Ulepszenia wydajności i doświadczenia',
        release8Feature3: 'Ulepszenia stabilności i responsywności',
        release7Date: '16 lutego 2026',
        release7Title: 'Refaktoryzacja czatu i wejście głosowe',
        release7Description:
            'Duże ulepszenia czatu i playground z interakcją głosową i załącznikami plików dla agentów.',
        release7Feature1:
            'Refaktoryzacja czatu i playground dla płynniejszego, bardziej responsywnego doświadczenia',
        release7Feature2:
            'Interakcja głosowa z czatami, nagrywanie i transkrypcja mowy bezpośrednio w przeglądarce',
        release7Feature4:
            'Podgląd i użycie załączników dla agentów, wysyłanie obrazów i dokumentów w czacie',
        release6Date: '16 lutego 2026',
        release6Title: 'Czat z agentem',
        release6Description:
            'Pełna kontrola nad agentami OpenClaw. Zarządzaj i czatuj ze wszystkim bezpośrednio z panelu.',
        release6Feature3:
            'Czat z agentami z playground, interakcja z dowolnym agentem w czasie rzeczywistym',
        release6Feature4:
            'Logowanie przez Google lub GitHub, szybkie, bezpieczne uwierzytelnianie bez kodów email',
        release1Date: '8 lutego 2026',
        release1Title: 'Pierwsze wydanie',
        release1Description:
            'Pierwsze oficjalne wydanie ClawHost. Wdróż OpenClaw na własnym VPS jednym kliknięciem.',
        release1Feature1: 'Wdrożenie OpenClaw jednym kliknięciem',
        release1Feature2:
            'Panel do zarządzania claws, uruchamiania, zatrzymywania, restartowania i usuwania instancji',
        release1Feature3:
            '18 planów serwerów z dedykowanym vCPU, RAM i opcjami pamięci',
        release1Feature4: '6 lokalizacji serwerów w USA, Europie i Azji',
        release1Feature5:
            'Zarządzanie kluczami SSH dla dostępu do serwera bez hasła',
        release1Feature6: 'Dodatkowa pamięć wolumenowa do 10 TB',
        release1Feature7: 'Uwierzytelnianie magic link, bez potrzeby haseł',
        release1Feature8:
            'Dostęp online do OpenClaw przez bezpieczne subdomeny',
        release1Feature9:
            'Integracja płatności z przejrzystym cennikiem za serwer',
        release1Feature10: 'Historia płatności i zarządzanie fakturami',
        release1Feature11:
            'Automatyczne inicjowanie z preinstalowanym i skonfigurowanym OpenClaw',
        release2Date: '8 lutego 2026',
        release2Title: 'Changelog i więcej',
        release2Description:
            'Nowy sposób na śledzenie wszystkiego, co dotyczy ClawHost.',
        release2Feature1:
            'Strona z listą zmian do śledzenia wszystkich aktualizacji i wydań platformy',
        release3Date: '10 lutego 2026',
        release3Title: 'Informacje o serwerze',
        release3Description:
            'Głębszy wgląd i kontrola nad serwerami, bezpośrednio z panelu.',
        release3Feature1:
            'Logi serwera w czasie rzeczywistym przesyłane bezpośrednio w panelu',
        release3Feature2:
            'Diagnostyka serwera z automatyczną naprawą jednym kliknięciem dla problemów z usługami',
        release3Feature3:
            'Wbudowany eksplorator plików i edytor JSON dla plików konfiguracyjnych serwera',
        release4Date: '14 lutego 2026',
        release4Title: 'Agenci i eksport danych',
        release4Description:
            'Playground agentów, zarządzanie wieloma agentami i przenośny eksport danych dla instancji OpenClaw.',
        release4Feature1:
            'Playground agentów jednym kliknięciem i przegląd, dodawanie i zarządzanie wieloma agentami',
        release4Feature2: 'Eksportuj OpenClaw jako przenośne archiwum zip',
        release4Feature3:
            'Interaktywny playground z wizualizacją grafową Claws i agentów',
        release4Feature4:
            'Usunięto przełącznik widoku siatki i listy na rzecz jednolitego układu panelu'
    },
    clawDetail: {
        noAgentsYet: 'Brak Agentów',
        noAgentsDescription:
            'Wdróż swojego pierwszego Agenta, aby z nim interakcjonować.',
        collapseSidebar: 'Zwiń pasek boczny',
        expandSidebar: 'Rozwiń pasek boczny',
        selectClaw: 'Wybierz Agenta',
        selectClawDescription:
            'Wybierz Agenta z paska bocznego, aby zobaczyć szczegóły.',
        closeDetails: 'Zamknij',
        tabOverview: 'Przegląd',
        overviewTitle: 'Przegląd bramy',
        overviewGatewayStatus: 'Status bramy',
        overviewOnline: 'Online',
        overviewOffline: 'Offline',
        overviewVersion: 'Wersja',
        overviewUptime: 'Czas pracy',
        overviewSessions: 'Sesje',
        overviewSessionsCount: '{{count}} aktywnych',
        overviewNoSessions: 'Brak aktywnych sesji',
        overviewSessionName: 'Sesja',
        overviewSessionModel: 'Model',
        overviewSessionMessages: 'Wiadomości',
        overviewSessionLastActive: 'Ostatnia aktywność',
        overviewModels: 'Modele',
        overviewError: 'Nie udało się załadować przeglądu!',
        overviewErrorDescription:
            'Nie można połączyć się z bramą OpenClaw. Sprawdź, czy instancja jest uruchomiona.',
        overviewUnsupportedTitle: 'Przegląd nieobsługiwany',
        overviewUnsupportedDescription:
            'Twoja wersja OpenClaw nie obsługuje funkcji przeglądu. Zaktualizuj do najnowszej wersji.',
        overviewHermesTitle: 'Hermes działa w terminalu',
        overviewHermesDescription:
            'Hermes to agent TUI — otwórz kartę Terminal i uruchom `hermes`, aby rozpocząć sesję. Karty Pliki i Wersje umożliwiają edycję konfiguracji i aktualizację.',
        overviewHermesOpenTerminal: 'Otwórz terminal',
        viewDocs: 'Dokumentacja',
        overviewUptimeDays: '{{days}}d {{hours}}h {{minutes}}m',
        overviewUptimeHours: '{{hours}}h {{minutes}}m',
        overviewUptimeMinutes: '{{minutes}}m',
        overviewService: 'Usługa',
        overviewServiceActive: 'Aktywna',
        overviewServiceInactive: 'Nieaktywna',
        overviewPort: 'Port 18789',
        overviewPortOpen: 'Nasłuchuje',
        overviewPortClosed: 'Zamknięty',
        overviewReady: 'Gotowy',
        overviewNotReady: 'Niegotowy',
        overviewConfiguration: 'Konfiguracja',
        overviewBrowser: 'Browser',
        overviewCommands: 'Polecenia powłoki',
        overviewTools: 'Narzędzia',
        overviewSubdomain: 'Subdomena',
        overviewInstanceStatus: 'Status instancji',
        overviewModel: 'Model',
        overviewAgents: 'Agenci',
        overviewMemoryStatus: 'Pamięć',
        overviewHeartbeat: 'Heartbeat',
        overviewEvents: 'Zdarzenia',
        overviewProbes: 'Probes',
        overviewPlugins: 'Plugins',
        tabPreview: 'Podgląd',
        previewNotEnabled: 'Podgląd nie jest włączony dla tej instancji.',
        previewNotEnabledDescription:
            'Włącz podgląd, aby osadzić agenta bezpośrednio w panelu.',
        previewEnable: 'Włącz podgląd',
        previewEnabling: 'Włączanie...',
        previewEnabled: 'Podgląd włączony.',
        previewEnableFailed: 'Nie udało się włączyć podglądu!',
        previewEnableCanceledNavigation:
            'Włączanie podglądu przerwane ponieważ opuściłeś stronę.',
        previewError: 'Nie udało się załadować podglądu.',
        previewErrorDescription: 'Agent może być offline lub nieosiągalny.',
        previewRetry: 'Ponów',
        tabInfo: 'Info',
        tabLogs: 'Logi',
        tabTerminal: 'Terminal',
        terminalConnecting: 'Łączenie z terminalem...',
        terminalDisconnected: 'Terminal rozłączony.',
        terminalError: 'Nie udało się połączyć z terminalem !',
        terminalReconnect: 'Połącz ponownie',
        tabDisabledConfiguring:
            'Dostępne po zakończeniu konfiguracji instancji.',
        tabDisabledAwaitingPayment: 'Dostępne po przetworzeniu płatności.',
        creatingTitle: 'Konfigurowanie agenta',
        creatingDescription:
            'Zwykle zajmuje to minutę lub dwie. Możesz bezpiecznie zamknąć tę stronę i wrócić później.',
        creatingDescriptionLocal:
            'Zwykle zajmuje to chwilę. Nie zamykaj aplikacji, dopóki proces się nie zakończy.',
        configuringTitle: 'Instalowanie OpenClaw',
        configuringTitleHermes: 'Instalowanie Hermesa',
        loadingTipHermes1:
            'Hermes to agent TUI — po uruchomieniu otwórz kartę Terminal, aby z nim porozmawiać.',
        loadingTipHermes2:
            'Skonfiguruj dostawców modeli (OpenRouter, Anthropic itp.) w ~/.hermes/.env z karty Pliki.',
        loadingTipHermes3:
            'Połącz Telegram, Discord lub Slack z poziomu Terminala poleceniem `hermes gateway install`.',
        configuringDescription:
            'Zwykle zajmuje to minutę lub dwie. Możesz bezpiecznie zamknąć tę stronę i wrócić później.',
        configuringDescriptionLocal:
            'Instalowanie środowiska agenta lokalnie. Nie zamykaj aplikacji, dopóki proces się nie zakończy.',
        awaitingPaymentTitle: 'Oczekiwanie na płatność',
        awaitingPaymentDescription:
            'Dokończ płatność, aby rozpocząć aprowizację agenta. Ta rezerwacja wygasa za godzinę.',
        awaitingPaymentAction: 'Dokończ płatność',
        loadingTip1:
            'Czy wiesz, że możesz uruchomić wielu agentów w jednym OpenClaw?',
        loadingTip2: 'Czy wiesz, że OpenClaw jest open source?',
        loadingTip3:
            'ClawHost to pierwszy projekt umożliwiający hosting OpenClaw jednym kliknięciem.',
        loadingTip4:
            'Możesz uzyskać dostęp do swojego agenta przez SSH lub wbudowany terminal.',
        loadingTip5: 'Twój agent automatycznie otrzymuje własną subdomenę.',
        loadingTip6:
            'Możesz dostosować ikonę i nazwę swojego agenta w dowolnym momencie w Ustawieniach.',
        loadingTip7:
            'Cały ruch do twojego agenta jest szyfrowany za pomocą TLS.',
        loadingTip8:
            'Możesz monitorować użycie CPU, pamięci i dysku w zakładce Monitor.',
        loadingTip9:
            'Potrzebujesz pomocy? Dołącz do naszej społeczności na Discord.',
        loadingTip10:
            'Możesz wyeksportować całą konfigurację swojego agenta jako kopię zapasową.',
        loadingTip11:
            'Klucze SSH mogą być zastosowane na działających instancjach bez ponownej instalacji.',
        loadingTip12:
            'Możesz zmienić hasło root i token bramy w zakładce Bezpieczeństwo.',
        loadingTip13:
            'ClawHost obsługuje serwery w wielu regionach w Europie i USA.',
        tabSettings: 'Ustawienia',
        featureVersionUnsupported: '{{feature}} nie obsługiwane na {{version}}',
        featureVersionUnsupportedDescription:
            'Nie obsługujemy zarządzania {{feature}} w tej wersji przez nasz interfejs. Możesz nadal zarządzać tym przez SSH, Terminal lub panel sterowania OpenClaw.',
        featureVersionUnsupportedButton: 'Przejdź do Wersji',
        featureVersionUnsupportedSupported: 'Obsługiwane wersje:',
        featureVersionUnsupportedNewer: 'nowsze wersje',
        tabVersions: 'Wersje',
        tabFiles: 'Eksplorator plików',
        tabMonitor: 'Monitor',
        tabVolumes: 'Magazyn',
        tabSecurity: 'Bezpieczeństwo',
        securitySSHKey: 'Klucz SSH',
        securitySSHKeyHint:
            'Stosowany do działającej instancji i używany podczas ponownej instalacji.',
        securityPassword: 'Hasło root',
        securityGatewayToken: 'Token bramy',
        securityHostKey: 'Odcisk klucza hosta',
        securityRotatePassword: 'Zmień hasło',
        securityRotateToken: 'Zmień token',
        securityRandomize: 'Losuj',
        securitySavePassword: 'Zapisz hasło',
        securitySaveToken: 'Zapisz token',
        volumesTitle: 'Wolumeny',
        volumesCount: '{{count}} wolumenów',
        volumesEmpty: 'Brak podłączonych wolumenów.',
        volumesEmptyDescription:
            'Ta instancja nie ma trwałych wolumenów magazynowych.',
        volumesReadOnly:
            'Magazyn można dodać tylko podczas tworzenia instancji. Aby dodać magazyn, wdróż nową instancję z żądanym rozmiarem wolumenu lub skontaktuj się z',
        volumesContactSupport: 'zespołem wsparcia',
        metricsTitle: 'Metryki serwera',
        metricsLive: 'Na żywo',
        metricsCpu: 'Użycie CPU',
        metricsMemory: 'Użycie pamięci',
        metricsDisk: 'Użycie dysku',
        metricsNetwork: 'Sieć',
        metricsLoadAvg: 'Średnie obciążenie',
        metricsProcesses: 'Główne procesy',
        metricsUptime: 'Czas działania',
        metricsUsed: 'Użyte',
        metricsAvailable: 'Dostępne',
        metricsTotal: 'Łącznie',
        metricsReceived: 'Odebrane',
        metricsSent: 'Wysłane',
        metricsLoad1: '1 min',
        metricsLoad5: '5 min',
        metricsLoad15: '15 min',
        metricsProcessPid: 'PID',
        metricsProcessUser: 'Użytkownik',
        metricsProcessCpu: 'CPU %',
        metricsProcessMem: 'MEM %',
        metricsProcessCommand: 'Polecenie',
        metricsError: 'Nie udało się załadować metryk!',
        metricsErrorDescription:
            'Nie można połączyć się z serwerem w celu pobrania metryk. Sprawdź, czy instancja jest uruchomiona.',
        metricsAutoRefresh: 'Automatyczne odświeżanie co {{seconds}} sekund',
        tabBilling: 'Billing',
        billingEmpty: 'No billing history for this instance.',
        tabServer: 'Serwer',
        serverIpAddress: 'Adres IP',
        reinstallDescription:
            'Zainstaluj ponownie {{agentName}} na tym serwerze. Spowoduje to zresetowanie instalacji, ale zachowa twoje dane. Rób to tylko wtedy, gdy jest to potrzebne.',
        versionsSearch: 'Szukaj wersji...',
        versionsSearchCount: 'Szukaj {{count}} wersji...',
        versionsEmpty: 'Nie znaleziono wersji',
        versionsEmptyDescription: 'Brak wersji pasujących do wyszukiwania.',
        versionsErrorDescription:
            'Nie udało się załadować wersji. Sprawdź połączenie i spróbuj ponownie !',
        versionsChangelog: 'Zobacz listy zmian na npm',
        versionCurrent: 'Bieżąca',
        versionLatest: 'Najnowsza',
        updateAvailable: 'A newer version of OpenClaw is available',
        updateAvailableDescription:
            'A new version of OpenClaw ({{version}}) is available for your instance.',
        updateAvailableDescriptionHermes:
            'A new version of Hermes ({{version}}) is available for your instance.',
        goToVersions: 'Go to Versions',
        versionInstall: 'Zainstaluj',
        versionInstalling: 'Instalowanie...',
        versionInstallSuccess: 'Wersja {{version}} zainstalowana pomyślnie.',
        versionInstallFailed: 'Nie udało się zainstalować wersji !',
        installVersionCanceledNavigation:
            'Instalacja wersji przerwana ponieważ opuściłeś stronę.',
        versionDownloads: '{{count}} pobrań',
        versionChangelog: 'Lista zmian',
        versionOutdated: 'Przestarzała',
        versionSupported: 'Wspierana',
        versionSupportedTooltip:
            'Ta wersja pozwala zarządzać OpenClaw przez interfejs',
        versionInstallConfirmTitle: 'Zainstaluj wersję {{version}}',
        versionInstallConfirmDescription:
            'Zmiana wersji może spowodować nieoczekiwane zachowanie lub wymagać dodatkowej ręcznej konfiguracji, szczególnie w przypadku nowszych wersji, które nie zostały jeszcze w pełni zweryfikowane. Czy na pewno chcesz kontynuować?',
        settingsIcon: 'Ikona',
        settingsIconDescription: 'Kliknij, aby zmienić ikonę agenta.',
        settingsIconRandomize: 'Losowo',
        settingsIconRemove: 'Usuń ikonę',
        settingsBackground: 'Tło',
        settingsBackgroundReset: 'Resetuj',
        settingsName: 'Nazwa',
        settingsNamePlaceholder: 'Wpisz nazwę claw',
        settingsNameDescription: 'Tylko litery, cyfry i myślniki.',
        subdomain: 'Subdomena',
        subdomainPlaceholder: 'Wpisz subdomenę',
        subdomainDescription: 'Małe litery i cyfry, {{min}}-{{max}} znaków.',
        subdomainInvalid: 'Użyj {{min}}-{{max}} małych liter i cyfr.',
        subdomainUpdated: 'Subdomena zaktualizowana pomyślnie.',
        subdomainUpdateFailed: 'Nie udało się zaktualizować subdomeny !',
        subdomainInUse: 'Ta subdomena jest używana przez innego claw !',
        settingsDetails: 'Szczegóły',
        settingsDangerZone: 'Strefa zagrożenia',
        settingsDangerZoneDescription:
            'Twoja instancja zostanie usunięta na końcu bieżącego okresu rozliczeniowego.',
        settingsDangerZoneDescriptionLocal:
            'Spowoduje to trwałe usunięcie agenta i wszystkich jego plików.',
        settingsScheduledDeletionDescription:
            'Zaplanowano usunięcie na {{date}}. Anuluj, aby utrzymać instancję w działaniu i subskrypcję aktywną.',
        settingsSave: 'Zapisz',
        settingsSaving: 'Zapisywanie...',
        settingsUpdated: 'Ustawienia zaktualizowane.',
        settingsUpdateFailed: 'Nie udało się zaktualizować ustawień!',
        saveCanceledNavigation:
            'Zapisywanie przerwane ponieważ opuściłeś stronę.',
        savePasswordCanceledNavigation:
            'Zapisywanie hasła przerwane ponieważ opuściłeś stronę.',
        saveGatewayTokenCanceledNavigation:
            'Zapisywanie tokenu bramy przerwane ponieważ opuściłeś stronę.',
        saveSSHKeyCanceledNavigation:
            'Zapisywanie klucza SSH przerwane ponieważ opuściłeś stronę.',
        mockLogStarting: 'Uruchamianie agenta OpenClaw...',
        mockLogLoadingModel: 'Ładowanie modelu: claude-sonnet-4-5',
        mockLogAgentReady: 'Agent gotowy na porcie 3000',
        mockLogConnected: 'Połączono z gateway',
        mockLogsContent:
            '2026-02-14T10:23:41Z {{starting}}\n2026-02-14T10:23:42Z {{loadingModel}}\n2026-02-14T10:23:43Z {{agentReady}}\n2026-02-14T10:23:44Z {{connected}}\n2026-02-14T10:24:01Z {{requestReceived}}\n2026-02-14T10:24:03Z {{responseSent1}}\n2026-02-14T10:25:12Z {{requestReceived}}\n2026-02-14T10:25:14Z {{responseSent2}}\n2026-02-14T10:26:30Z {{healthCheck}}',
        mockLogRequestReceived: 'Odebrano żądanie: /chat',
        mockLogResponseSent1: 'Odpowiedź wysłana (1.2s)',
        mockLogResponseSent2: 'Odpowiedź wysłana (1.8s)',
        mockLogHealthCheck: 'Kontrola stanu przeszła'
    },
    privacy: {
        title: 'Polityka prywatności',
        description:
            'Dowiedz się, jak ClawHost zbiera, wykorzystuje i chroni Twoje dane osobowe.',
        lastUpdated: 'Ostatnia aktualizacja: 14 marca 2026',
        introTitle: '1. Wprowadzenie',
        introText:
            'ClawHost („my", „nas" lub „nasz") zobowiązuje się do ochrony Twojej prywatności. Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób zbieramy, wykorzystujemy, ujawniamy i chronimy Twoje informacje podczas korzystania z naszej Usługi.',
        authTitle: '2. Uwierzytelnianie',
        authText:
            'ClawHost używa Google Firebase Authentication do zarządzania kontami użytkowników. Możesz się zalogować za pomocą emaila, Google lub GitHub. Korzystając z tych metod logowania, zgadzasz się na ich odpowiednie regulaminy i polityki prywatności. Ci dostawcy mogą zbierać podstawowe dane, takie jak adres email, imię i informacje o urządzeniu. My przechowujemy tylko Twój adres email i nazwę wyświetlaną.',
        collectTitle: '3. Informacje, które zbieramy',
        collectText: 'Zbieramy informacje w następujący sposób:',
        personalInfoTitle: 'Informacje osobowe',
        personalInfoEmail: 'Adres email (do tworzenia konta i komunikacji)',
        personalInfoName: 'Imię (opcjonalnie, do personalizacji)',
        personalInfoPayment:
            'Informacje o płatności (przetwarzane bezpiecznie przez dostawców zewnętrznych)',
        serverInfoTitle: 'Informacje o serwerze',
        serverInfoConfig: 'Konfiguracja i status serwera',
        serverInfoIp: 'Adres IP i lokalizacja serwera',
        serverInfoResources: 'Przydział zasobów (CPU, RAM, pamięć)',
        useTitle: '4. Jak wykorzystujemy Twoje informacje',
        useText: 'Wykorzystujemy zebrane informacje do:',
        useProvide: 'Świadczenia i utrzymania naszej Usługi',
        useTransactions:
            'Przetwarzania transakcji i wysyłania informacji rozliczeniowych',
        useNotices: 'Wysyłania ważnych powiadomień i aktualizacji',
        useSupport: 'Odpowiadania na żądania obsługi klienta',
        useAnalyze:
            'Monitorowania i analizowania wzorców użytkowania w celu ulepszenia Usługi',
        useFraud: 'Wykrywania i zapobiegania oszustwom lub nadużyciom',
        sharingTitle: '5. Udostępnianie i ujawnianie danych',
        sharingText:
            'Nie sprzedajemy Twoich danych osobowych. Możemy udostępniać informacje:',
        sharingProviders:
            'Dostawcom usług, którzy pomagają w obsłudze naszej Usługi (np. dostawcy infrastruktury chmurowej)',
        sharingLegal:
            'Organom prawnym, gdy wymaga tego prawo lub w celu ochrony naszych praw',
        sharingBusiness:
            'Partnerom biznesowym w przypadku fuzji, przejęcia lub sprzedaży aktywów',
        securityTitle: '6. Bezpieczeństwo danych',
        securityText:
            'Wdrażamy odpowiednie środki techniczne i organizacyjne w celu ochrony Twoich danych osobowych przed nieuprawnionym dostępem, zmianą, ujawnieniem lub zniszczeniem. Obejmuje to szyfrowanie, bezpieczne serwery i regularne oceny bezpieczeństwa.',
        retentionTitle: '7. Przechowywanie danych',
        retentionText:
            'Przechowujemy Twoje dane osobowe tak długo, jak Twoje konto jest aktywne lub jak jest to potrzebne do świadczenia usług. Możemy przechowywać pewne informacje zgodnie z wymogami prawa lub w uzasadnionych celach biznesowych.',
        rightsTitle: '8. Twoje prawa',
        rightsText: 'W zależności od Twojej lokalizacji możesz mieć prawo do:',
        rightsAccess: 'Dostępu do swoich danych osobowych',
        rightsCorrect: 'Poprawienia niedokładnych danych',
        rightsDelete: 'Żądania usunięcia swoich danych',
        rightsObject: 'Sprzeciwu wobec przetwarzania danych',
        rightsPortability: 'Przenoszenia danych',
        rightsWithdraw: 'Wycofania zgody w dowolnym momencie',
        cookiesTitle: '9. Pliki cookie i śledzenie',
        cookiesText:
            'Nie używamy plików cookie. Uwierzytelnianie jest obsługiwane przez Firebase i nie opiera się na plikach cookie przechowywanych w przeglądarce.',
        transfersTitle: '10. Międzynarodowy transfer danych',
        transfersText:
            'Twoje informacje mogą być transferowane i przetwarzane w krajach innych niż Twój. Zapewniamy odpowiednie zabezpieczenia w celu ochrony Twoich danych zgodnie z niniejszą Polityką Prywatności.',
        eligibilityTitle: '11. Kwalifikowalność',
        eligibilityText:
            'Nasza Usługa jest dostępna dla każdego. Nie ma ograniczeń wiekowych dotyczących korzystania z ClawHost.',
        changesTitle: '12. Zmiany w tej Polityce',
        changesText:
            'Możemy od czasu do czasu aktualizować niniejszą Politykę Prywatności. Poinformujemy Cię o wszelkich zmianach, publikując nową Politykę Prywatności na tej stronie i aktualizując datę „Ostatnia aktualizacja".',
        contactTitle: '13. Kontakt',
        contactText:
            'Jeśli masz pytania dotyczące niniejszej Polityki Prywatności lub chcesz skorzystać ze swoich praw, skontaktuj się z nami pod adresem'
    },
    terms: {
        title: 'Regulamin',
        description: 'Przeczytaj warunki korzystania z usług ClawHost.',
        lastUpdated: 'Ostatnia aktualizacja: 14 marca 2026',
        acceptanceTitle: '1. Akceptacja warunków',
        acceptanceText:
            'Uzyskując dostęp do ClawHost („Usługa") i korzystając z niej, akceptujesz i zgadzasz się na warunki niniejszej umowy. Jeśli nie zgadzasz się z tymi warunkami, nie korzystaj z naszej Usługi.',
        serviceTitle: '2. Opis Usługi',
        serviceText:
            'ClawHost zapewnia wdrażanie OpenClaw i Hermes jednym kliknięciem na dedykowanych serwerach. Umożliwiamy użytkownikom wdrażanie, zarządzanie i dostęp do prekonfigurowanych instancji OpenClaw i Hermes z pełnym dostępem root i dedykowanymi zasobami.',
        authTitle: '3. Uwierzytelnianie',
        authText:
            'ClawHost używa Google Firebase Authentication do zarządzania logowaniem. Możesz się uwierzytelnić za pomocą emaila, Google lub GitHub. Korzystając z tych metod, zgadzasz się na odpowiednie regulaminy i polityki prywatności Google i GitHub. Ci dostawcy mogą zbierać podstawowe informacje, takie jak adres email, imię i dane urządzenia.',
        responsibilitiesTitle: '4. Obowiązki użytkownika',
        responsibilitiesText: 'Zgadzasz się na:',
        responsibilitiesAccurate:
            'Podawanie dokładnych i kompletnych informacji rejestracyjnych',
        responsibilitiesSecurity:
            'Utrzymanie bezpieczeństwa danych uwierzytelniających konta',
        responsibilitiesCompliance:
            'Korzystanie z Usługi zgodnie z obowiązującym prawem',
        responsibilitiesLegal:
            'Niekorzystanie z Usługi w celach nielegalnych lub nieautoryzowanych',
        responsibilitiesAccess:
            'Niepodejmowanie prób uzyskania nieautoryzowanego dostępu do jakichkolwiek systemów lub sieci',
        prohibitedTitle: '5. Zabronione użycie',
        prohibitedText: 'Nie możesz korzystać z naszej Usługi do:',
        prohibitedMalware:
            'Dystrybucji złośliwego oprogramowania, wirusów lub szkodliwego oprogramowania',
        prohibitedDos:
            'Przeprowadzania ataków denial-of-service lub nadużywania sieci',
        prohibitedSpam: 'Wysyłania spamu lub niezamówionych komunikatów',
        prohibitedIllegal: 'Hostowania lub dystrybucji nielegalnych treści',
        prohibitedIp:
            'Naruszania praw osób trzecich, w tym własności intelektualnej',
        prohibitedMining: 'Kopania kryptowalut',
        prohibitedOther:
            'Wszelkich innych nielegalnych lub szkodliwych działań, które według naszego uznania mogą być nieodpowiednie',
        paymentTitle: '6. Płatność i rozliczenia',
        paymentText:
            'Usługi są rozliczane na stałej podstawie miesięcznej lub rocznej. Możesz w dowolnym momencie przełączać się między rozliczeniem miesięcznym a rocznym, a zmiana wchodzi w życie na początku następnego okresu rozliczeniowego. Wszystkie płatności są bezzwrotne. Gdy płacisz za serwer, masz do niego dostęp przez cały okres rozliczeniowy. Jeśli anulujesz, anulowanie wchodzi w życie na koniec bieżącego okresu rozliczeniowego. Ceny mogą ulec zmianie, ale wszelkie zmiany będą dotyczyć tylko nowo wdrożonych claws i nie wpłyną na już wdrożone. Brak płatności może skutkować zawieszeniem lub zamknięciem konta.',
        availabilityTitle: '7. Dostępność Usługi',
        availabilityText:
            'Staramy się utrzymać wysoką dostępność, ale nie gwarantujemy nieprzerwanego dostępu do Usługi. Zastrzegamy sobie prawo do modyfikacji, zawieszenia lub zaprzestania dowolnej części Usługi w dowolnym momencie, z powiadomieniem lub bez.',
        liabilityTitle: '8. Ograniczenie odpowiedzialności',
        liabilityText:
            'W maksymalnym zakresie dozwolonym przez prawo, ClawHost nie ponosi odpowiedzialności za jakiekolwiek pośrednie, przypadkowe, specjalne, wynikowe lub karne szkody, ani za utratę zysków lub przychodów, poniesione bezpośrednio lub pośrednio.',
        terminationTitle: '9. Rozwiązanie',
        terminationText:
            'Możemy zamknąć lub zawiesić Twoje konto i dostęp do Usługi natychmiast, bez wcześniejszego powiadomienia, za zachowanie, które naszym zdaniem narusza niniejsze Warunki lub jest szkodliwe dla innych użytkowników, nas lub osób trzecich, lub z dowolnego innego powodu.',
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
        changesToTermsTitle: '11. Zmiany Warunków',
        changesToTermsText:
            'Zastrzegamy sobie prawo do modyfikacji tych warunków w dowolnym momencie. Powiadomimy użytkowników o wszelkich istotnych zmianach drogą emailową lub za pośrednictwem Usługi. Dalsze korzystanie z Usługi po takich zmianach oznacza akceptację zaktualizowanych warunków.',
        contactTitle: '12. Dane kontaktowe',
        contactText:
            'Jeśli masz pytania dotyczące niniejszych Warunków, skontaktuj się z nami pod adresem'
    },
    hermesBanner: {
        title: 'Hermes Agent',
        message: 'Agenci Hermes są teraz obsługiwani do wdrażania na ClawHost.'
    },
    compare: {
        title: 'Porównanie',
        description:
            'Zobacz, jak ClawHost wypada w porównaniu z innymi platformami hostingowymi OpenClaw.',
        badge: 'Porównanie',
        feature: 'Platforma',
        compareWith: 'Porównaj z',
        lastUpdated: 'Ostatnia aktualizacja: marzec 2026',
        competitorClawHost: 'ClawHost',
        competitorLobsterFarm: 'LobsterFarm',
        competitorSimpleAgent: 'SimpleAgent',
        competitorMyAgentAi: 'MyAgent.ai',
        competitorQuickAgent: 'QuickAgent',
        categoryInfrastructure: 'Infrastruktura',
        categoryPricing: 'Cennik i rozliczenia',
        categoryDeployment: 'Wdrożenie i konfiguracja',
        categoryManagement: 'Zarządzanie OpenClaw',
        categorySecurity: 'Dane i bezpieczeństwo',
        categoryMonitoring: 'Monitorowanie i konserwacja',
        categorySupport: 'Wsparcie i platforma',
        featureServerOwnership: 'Własność serwera',
        featureProviderChoice: 'Wybór dostawcy chmury',
        featureDedicatedResources: 'Dedykowane zasoby',
        featureRootAccess: 'Pełny dostęp root/SSH',
        featureServerLocations: 'Lokalizacje serwerów',
        featureStartingPrice: 'Cena początkowa',
        featureTransparentPricing: 'Przejrzysty cennik',
        featurePowerfulServers: 'Wydajne serwery, niższa cena',
        featureLocationSelection: 'Wybierz lokalizację serwera',
        featureSubdomainAccess: 'Dostęp przez subdomenę',
        featureThemes: 'Jasny i ciemny motyw',
        featureSetupTime: 'Czas konfiguracji',
        featureOneClickDeploy: 'Wdrożenie jednym kliknięciem',
        featureMultipleInstances: 'Wiele instancji',
        featureDataOwnership: 'Pełna własność danych',
        featureDataExport: 'Eksport danych',
        featureBackups: 'Kopie zapasowe',
        featureSecurityHardening: 'Utwardzanie bezpieczeństwa',
        featureSslTls: 'SSL/TLS',
        featureOpenSource: 'Open source',
        featureAutoUpdates: 'Automatyczne aktualizacje',
        featureDiagnostics: 'Diagnostyka w czasie rzeczywistym',
        featureLogStreaming: 'Strumieniowanie logów',
        featureRepairTools: 'Narzędzia naprawcze',
        featureSupportChannels: 'Kanały wsparcia',
        featureMultiLanguage: 'Wielojęzyczny interfejs',
        featureDesktopApp: 'Aplikacja desktopowa',
        featureOneClickVersion: 'Zmiana wersji jednym kliknięciem',
        featureWebTerminal: 'Dostęp przez terminal webowy',
        featureSocials: 'Media społecznościowe',
        dedicatedVps: 'Dedykowany VPS',
        sharedContainers: 'Współdzielone kontenery',
        isolatedContainers: 'Izolowane kontenery',
        cloudWorkspaces: 'Przestrzenie robocze w chmurze',
        threeProviders: 'Cloud',
        singleProvider: 'Jeden dostawca',
        fullyDedicated: 'W pełni dedykowany',
        shared: 'Współdzielony',
        fullRootSsh: 'Pełny root + SSH',
        sshOnRequest: 'SSH na żądanie',
        noAccess: 'Brak dostępu',
        thirtyPlusLocations: '30+ lokalizacji',
        limitedLocations: 'Ograniczone',
        fourLocations: '4 lokalizacje',
        fromTwentyFiveMonth: 'Od $25/mies.',
        aboutFortyFourMonth: '~$44/mies. śr.',
        fromNineteenMonth: '$19–79/mies.',
        nineteenMonth: '$19/mies.',
        clearSpecsPricing: 'Jasne specyfikacje i cennik',
        unclearPricing: 'Niejasny cennik',
        fixedTiers: '3 stałe plany',
        creditBased: 'Na bazie kredytów',
        minutes: 'Minuty',
        underOneMinute: 'Poniżej 1 minuty',
        thirtySeconds: '30 sekund',
        instant: 'Natychmiast',
        noneRequired: 'Brak',
        minimal: 'Minimalne',
        unlimited: 'Nieograniczone',
        singleInstance: 'Jedna',
        noMarketplace: 'Brak marketplace',
        appOnly: 'Tylko aplikacja',
        fullConfig: 'Pełna konfiguracja',
        limitedConfig: 'Ograniczona',
        zipExport: 'Eksport ZIP',
        serverTransfer: 'Transfer serwera',
        noExport: 'Brak eksportu',
        volumeStorage: 'Wolumen pamięci',
        noBackups: 'Brak kopii zapasowych',
        dailyBackups: 'Codzienne kopie zapasowe',
        included: 'Zawarte',
        notIncluded: 'Nie zawarte',
        managed: 'Zarządzane',
        manual: 'Ręczne',
        appStore: 'App Store',
        liveMonitoring: 'Monitorowanie na żywo',
        liveLogs: 'Logi na żywo',
        oneClickRepair: 'Naprawa jednym kliknięciem',
        emailGithub: 'Email, GitHub',
        humanSupport: 'Wsparcie ludzi',
        communityOnly: 'Tylko społeczność',
        appSupport: 'Wsparcie w aplikacji',
        prioritySupport: 'Wsparcie 24/7 (Pro+)',
        fourLanguages: '4 języki',
        englishOnly: 'Tylko angielski',
        available: 'Dostępne',
        comingSoon: 'Wkrótce',
        macOsOnly: 'Tylko macOS',
        viaTelegram: 'Przez Telegram',
        builtInTerminal: 'Bez potrzeby SSH',
        notAvailable: 'Niedostępne',
        disclaimer: 'Coś się zmieniło lub jest błąd? Napisz do nas na',
        disclaimerOr: 'lub otwórz pull request na',
        github: 'GitHub',
        ctaTitle: 'Gotowy zobaczyć różnicę?',
        ctaDescription:
            'Wdróż OpenClaw na własnym dedykowanym serwerze. Pełna własność, przejrzysty cennik, gotowy w kilka minut.'
    },
    admin: {
        title: 'Admin',
        description: 'Zarządzaj użytkownikami i danymi platformy.',
        usersTab: 'Użytkownicy',
        totalUsers: '{{count}} użytkowników',
        noUsers: 'Brak użytkowników',
        noUsersDescription:
            'Nie znaleziono użytkowników pasujących do filtrów.',
        genericErrorDescription: 'Coś poszło nie tak. Spróbuj ponownie.',
        genericEmptyDescription: 'Nie ma tu jeszcze nic do pokazania.',
        failedToLoadUsers: 'Nie udało się załadować użytkowników!',
        failedToLoadUsersDescription:
            'Coś poszło nie tak podczas ładowania użytkowników. Spróbuj ponownie.',
        failedToLoadUserDetail:
            'Nie udało się załadować szczegółów użytkownika!',
        userDetail: 'Szczegóły użytkownika',
        userInfo: 'Informacje o użytkowniku',
        email: 'E-mail',
        name: 'Imię',
        role: 'Rola',
        authMethods: 'Metody uwierzytelniania',
        license: 'Licencja',
        referralCode: 'Kod polecenia',
        referredBy: 'Polecony przez',
        joined: 'Dołączył',
        claws: 'Claws',
        sshKeys: 'Klucze SSH',
        volumes: 'Woluminy',
        billing: 'Rozliczenia',
        noClaws: 'Brak Claws',
        noSshKeys: 'Brak Kluczy SSH',
        noVolumes: 'Brak Woluminów',
        noBilling: 'Brak Historii Rozliczeń',
        hasLicense: 'Tak',
        noLicense: 'Nie',
        notSet: 'Nie ustawiono',
        searchPlaceholder: 'Szukaj po e-mailu lub nazwie...',
        filterAll: 'Wszyscy użytkownicy',
        filterWithClaws: 'Z claws',
        filterWithoutClaws: 'Bez claws',
        sortNewest: 'Najnowsi',
        sortOldest: 'Najstarsi',
        editUser: 'Edytuj',
        saveUser: 'Zapisz',
        userUpdated: 'Użytkownik zaktualizowany.',
        userUpdateFailed: 'Aktualizacja nie powiodła się!',
        clawsTab: 'Claws',
        sshKeysTab: 'Klucze SSH',
        volumesTab: 'Woluminy',
        noClawsFound: 'Brak Claws',
        noSSHKeysFound: 'Brak Kluczy SSH',
        noVolumesFound: 'Brak Woluminów',
        failedToLoadAgents: 'Nie udało się załadować agents!',
        failedToLoadSSHKeys: 'Nie udało się załadować kluczy SSH!',
        failedToLoadVolumes: 'Nie udało się załadować woluminów!',
        owner: 'Właściciel',
        searchClaws: 'Szukaj claws...',
        searchSSHKeys: 'Szukaj kluczy SSH...',
        referralsTab: 'Polecenia',
        pendingClawsTab: 'Oczekujące',
        waitlistTab: 'Lista oczekujących',
        emailsTab: 'E-maile',
        analyticsTab: 'Analityka',
        billingTab: 'Rozliczenia',
        settingsTab: 'Ustawienia',
        settingsDescription: 'Zarządzaj preferencjami administratora.',
        showAllAgents: 'Pokaż wszystkich agentów od wszystkich użytkowników',
        billingFilterAll: 'Wszystkie zamówienia',
        billingFilterService: 'Usługa Claw',
        billingFilterLicense: 'Licencja',
        billingOrderTypeLabel: ' · {{type}}',
        noBillingFound: 'Brak zamówień',
        failedToLoadBilling: 'Nie udało się załadować zamówień!',
        searchBilling: 'Szukaj po produkcie...',
        billingReason: 'Powód',
        billingType: 'Typ',
        billingSubtotal: 'Suma częściowa',
        billingDiscount: 'Rabat',
        billingTax: 'Podatek',
        billingTotal: 'Łącznie',
        analyticsDay: 'Dzień',
        analyticsWeek: 'Tydzień',
        analyticsMonth: 'Miesiąc',
        analyticsYear: 'Rok',
        analyticsAllTime: 'Cały czas',
        analyticsFilter: 'Filtruj',
        analyticsResources: 'Zasoby',
        analyticsSelectAll: 'Zaznacz wszystko',
        analyticsDeselectAll: 'Odznacz wszystko',
        failedToLoadAnalytics: 'Nie udało się załadować analityki!',
        noAnalyticsData: 'Brak danych analitycznych.',
        noReferralsFound: 'Brak Poleceń',
        noPendingClawsFound: 'Brak Oczekujących Claws',
        noWaitlistFound: 'Brak Listy Oczekujących',
        noEmailsFound: 'Brak E-maili',
        failedToLoadReferrals: 'Nie udało się załadować poleceń!',
        failedToLoadPendingClaws: 'Nie udało się załadować oczekujących claws!',
        failedToLoadWaitlist: 'Nie udało się załadować listy oczekujących!',
        failedToLoadEmails: 'Nie udało się załadować e-maili!',
        referrer: 'Polecający',
        referred: 'Polecony',
        earned: 'Zarobione',
        searchWaitlist: 'Szukaj na liście oczekujących...',
        expiresAt: 'Wygasa',
        feature: 'Funkcja',
        sentAt: 'Wysłano',
        fileSize: 'Rozmiar',
        registered: 'Zarejestrowany',
        status: 'Status',
        ip: 'IP',
        plan: 'Plan',
        location: 'Lokalizacja',
        subdomain: 'Subdomena',
        subscription: 'Subskrypcja',
        billingInterval: 'Rozliczenia',
        deletionScheduled: 'Usunięcie zaplanowane',
        fingerprint: 'Odcisk palca',
        price: 'Cena',
        pricePerMonth: '{{price}}/mies.',
        statusRunning: 'Uruchomiony',
        statusStopped: 'Zatrzymany',
        adminBadge: 'Admin',
        unitGB: '{{size}} GB',
        unitKB: '{{size}} KB'
    },
    affiliate: {
        title: 'Affiliate',
        description: 'Earn rewards by referring friends to ClawHost.',
        subtitle: 'Share your referral link and earn rewards.',
        learnMore: 'Dowiedz się więcej o programie partnerskim',
        referralCode: 'Referral Code',
        referrals: 'Referrals',
        payments: 'płatności',
        earnings: 'Earnings',
        codeChangeHint: 'You can customize your referral code once.',
        codeAlreadyChanged: 'Your referral code has already been customized.',
        codeUpdated: 'Referral code updated.',
        codeUpdateFailed: 'Failed to update referral code!',
        invalidCodeLength:
            'Code must be between {{min}} and {{max}} characters!',
        referralHistory: 'Referral History',
        paymentHistory: 'Historia płatności',
        periodToday: 'Today',
        periodWeek: 'Week',
        periodMonth: 'Month',
        periodYear: 'Year',
        periodAll: 'All',
        confirmChangeTitle: 'Change Referral Code',
        confirmChangeDescription:
            'Are you sure? This action is permanent and cannot be undone. You will not be able to change your referral code again.',
        noReferralsYet: 'Brak poleceń',
        noReferralsDescription:
            'Share your referral link to start earning rewards.',
        noPaymentsYet: 'Brak płatności',
        noPaymentsDescription:
            'Gdy poleceni użytkownicy dokonają zakupów, ich płatności pojawią się tutaj.'
    },
    affiliateProgram: {
        title: 'Program partnerski',
        description:
            'Dowiedz się, jak działa program partnerski ClawHost, ile możesz zarobić i jakie są zasady uczestnictwa.',
        lastUpdated: 'Ostatnia aktualizacja: 1 kwietnia 2026',
        overviewTitle: '1. Przegląd',
        overviewText:
            'Program partnerski ClawHost pozwala zarabiać nagrody poprzez polecanie nowych użytkowników do ClawHost. Gdy ktoś dokona zakupu po odwiedzeniu ClawHost przez Twój link polecający, zarabiasz prowizję od jego płatności. Program jest darmowy i dostępny dla wszystkich zarejestrowanych użytkowników ClawHost.',
        howItWorksTitle: '2. Jak to działa',
        howItWorksText:
            'Rozpoczęcie pracy z programem partnerskim jest proste:',
        howItWorksStep1:
            'Załóż konto ClawHost. Unikalny kod polecający zostanie automatycznie wygenerowany dla Ciebie.',
        howItWorksStep2:
            'Udostępnij swój link polecający znajomym, współpracownikom lub swojej publiczności. Twój link ma format: clawhost.cloud?ref=YOUR_CODE.',
        howItWorksStep3:
            'Gdy ktoś dokona zakupu po odwiedzeniu ClawHost przez Twój link, zostanie to zarejestrowane jako Twoje polecenie.',
        howItWorksStep4:
            'Zarabiasz prowizję za każdym razem, gdy polecony użytkownik dokona kwalifikującego się zakupu.',
        earningsTitle: '3. Zarobki i wypłaty',
        earningsText: 'Oto jak działają zarobki partnerskie:',
        earningsCommission:
            'Zarabiasz prowizję 15% od każdego kwalifikującego się zakupu dokonanego przez poleconych użytkowników. Prowizje dotyczą zarówno planów ClawHost Cloud, jak i ClawHost Go.',
        earningsMonthly:
            'W przypadku subskrypcji miesięcznych zarabiasz prowizje przez 1 rok od daty polecenia.',
        earningsYearly:
            'W przypadku subskrypcji rocznych zarabiasz prowizję tylko za pierwszy rok.',
        earningsPayout:
            'Minimalna kwota wypłaty wynosi 100 $ USD. Aby poprosić o wypłatę, skontaktuj się z naszym zespołem wsparcia.',
        earningsPaymentMethod:
            'Wypłaty są przetwarzane przez PayPal. Musisz podać prawidłowy adres e-mail PayPal podczas żądania wypłaty.',
        earningsCurrency: 'Wszystkie zarobki są obliczane i wyświetlane w USD.',
        referralCodeTitle: '4. Twój kod polecający',
        referralCodeText:
            'Każdy użytkownik otrzymuje unikalny kod polecający przy rejestracji. Możesz go dostosować raz, aby był łatwiejszy do zapamiętania:',
        referralCodeUnique:
            'Twój kod polecający jest unikalny dla Twojego konta i nie może być udostępniany ani przenoszony na innego użytkownika.',
        referralCodeOneChange:
            'Możesz dostosować swój kod polecający dokładnie jeden raz. Wybieraj ostrożnie — ta zmiana jest trwała i nie może być cofnięta.',
        referralCodeFormat:
            'Kody polecające mogą zawierać tylko litery, cyfry, myślniki i podkreślenia.',
        referralWindowTitle: '5. Okno atrybucji poleceń',
        referralWindowText:
            'Polecenie jest przypisywane do Ciebie przez 3 miesiące od momentu, gdy polecony użytkownik po raz pierwszy odwiedzi ClawHost przez Twój link. Jeśli polecony użytkownik nie dokona zakupu w tym 3-miesięcznym oknie, polecenie wygasa i żadna prowizja nie zostanie naliczona. Jeśli użytkownik odwiedzi ClawHost przez inny link polecający, nowe polecenie zastępuje poprzednie.',
        eligibilityTitle: '6. Kwalifikowalność',
        eligibilityText:
            'Aby uczestniczyć w programie partnerskim, musisz spełnić następujące wymagania:',
        eligibilityAccount: 'Musisz mieć zarejestrowane konto ClawHost.',
        eligibilityStanding:
            'Twoje konto musi być w dobrym stanie, bez historii naruszeń zasad.',
        eligibilityAge:
            'Musisz mieć co najmniej 18 lat lub osiągnąć wiek pełnoletności w swojej jurysdykcji.',
        rulesTitle: '7. Zasady programu',
        rulesText:
            'Aby zachować integralność programu partnerskiego, obowiązują następujące zasady:',
        rulesNoSelfReferral:
            'Samopolecenia są surowo zabronione. Nie możesz polecać własnych kont ani kont, które kontrolujesz.',
        rulesNoFakeAccounts:
            'Tworzenie fałszywych kont, automatycznych rejestracji lub używanie botów do generowania poleceń jest zabronione.',
        rulesNoSpam:
            'Wysyłanie niechcianych masowych wiadomości (spamu) w celu promowania linku polecającego jest niedozwolone.',
        rulesNoMisrepresentation:
            'Nie możesz fałszywie przedstawiać ClawHost, jego usług ani programu partnerskiego w żaden sposób.',
        rulesNoIncentivized:
            'Oferowanie bezpośrednich zachęt finansowych (np. płacenie użytkownikom za rejestrację przez Twój link) jest niedozwolone.',
        terminationTitle: '8. Naruszenie i rozwiązanie',
        terminationText:
            'Każde naruszenie tych zasad spowoduje natychmiastową utratę wszystkich oczekujących i zarobionych nagród. ClawHost zastrzega sobie prawo do zawieszenia lub trwałego zablokowania Twojego konta w programie partnerskim. W poważnych przypadkach Twoje konto ClawHost może również zostać zamknięte. Wszystkie decyzje dotyczące naruszeń są ostateczne.',
        marketingTitle: '9. Jak promować',
        marketingText:
            'Istnieje wiele kreatywnych i legalnych sposobów na udostępnianie linku polecającego i zwiększanie zarobków:',
        marketingSocial:
            'Udostępnij swój link na platformach społecznościowych, takich jak X, LinkedIn, Reddit i Facebook. Napisz o swoim doświadczeniu z ClawHost i dołącz swój link polecający.',
        marketingBlog:
            'Pisz posty na blogu, poradniki lub recenzje o ClawHost. Dołącz swój link polecający w naturalny sposób w treści.',
        marketingVideo:
            'Twórz treści wideo na YouTube lub TikTok pokazujące, jak używasz ClawHost do wdrażania i zarządzania agentami AI.',
        marketingCommunity:
            'Uczestnicz w społecznościach deweloperów, na forach i serwerach Discord. Gdy ktoś pyta o hosting w chmurze lub wdrażanie agentów AI, poleć ClawHost ze swoim linkiem.',
        marketingNewsletter:
            'Jeśli prowadzisz newsletter lub listę mailingową, wspomnij o ClawHost w odpowiednim wydaniu ze swoim linkiem polecającym.',
        marketingComparison:
            'Pisz uczciwe artykuły porównawcze lub przewodniki, które podkreślają, co wyróżnia ClawHost na tle innych platform.',
        changesToProgramTitle: '10. Zmiany w programie',
        changesToProgramText:
            'ClawHost zastrzega sobie prawo do modyfikacji, zawieszenia lub zakończenia programu partnerskiego w dowolnym momencie bez wcześniejszego powiadomienia. Obejmuje to zmiany stawek prowizji, okien polecających, progów wypłat i zasad programu. Dalsze uczestnictwo po zmianach stanowi akceptację zaktualizowanych warunków.',
        getStartedTitle: '11. Zacznij',
        getStartedText:
            'Gotowy, aby zacząć zarabiać? Przejdź do swojego panelu partnerskiego, aby pobrać link polecający i zacznij udostępniać go w swojej sieci.',
        getStartedButton: 'Przejdź do panelu partnerskiego',
        contactTitle: '12. Kontakt',
        contactText:
            'Jeśli masz pytania dotyczące programu partnerskiego, potrzebujesz pomocy z kodem polecającym lub chcesz zgłosić naruszenie, skontaktuj się z nami pod adresem'
    }
}

export default pl