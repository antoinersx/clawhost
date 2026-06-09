import type { Translations } from '#i18n/types'

const tr: Translations = {
    common: {
        loading: 'Yükleniyor...',
        noResults: 'Sonuç bulunamadı.',
        save: 'Kaydet',
        cancel: 'İptal',
        confirm: 'Onayla',
        delete: 'Sil',
        deleting: 'Siliniyor...',
        create: 'Oluştur',
        done: 'Tamam',
        back: 'Geri',
        copy: 'Kopyala',
        copied: 'Kopyalandı.',
        copiedWithLabel: '{{label}} kopyalandı.',
        show: 'Göster',
        hide: 'Gizle',
        tryAgain: 'Tekrar dene',
        addKey: 'Anahtar Ekle',
        close: 'Kapat',
        none: 'Yok',
        all: 'Tümü',
        unknown: 'Bilinmiyor',
        pageNotFound: 'Sayfa Bulunamadı',
        closeNotification: 'Bildirimi kapat',
        beta: 'Beta',
        brandName: 'ClawHost',
        brandNameGo: 'ClawHost Go',
        brandNameGoVersion: 'ClawHost Go {{version}}',
        pageTitleWithBrand: '{{title}} - ClawHost',
        menuFile: 'Dosya',
        menuEdit: 'Düzen',
        menuView: 'Görünüm',
        menuWindow: 'Pencere',
        menuHelp: 'Yardım',
        scrollToBottom: 'Alta Kaydır',
        second: 'saniye',
        seconds: 'saniye'
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
        switchLanguage: 'Dil'
    },
    theme: {
        light: 'Açık',
        dark: 'Koyu',
        system: 'Sistem',
        toggleTheme: 'Temayı değiştir'
    },
    nav: {
        claws: "Claw'lar",
        sshKeys: 'SSH Anahtarları',
        account: 'Hesap',
        affiliate: 'Ortaklık',
        license: 'Lisans',
        signOut: 'Çıkış yap',
        admin: 'Yönetici',
        login: 'Giriş Yap',
        deploy: 'Dağıt',
        deployOpenClaw: 'OpenClaw Dağıt',
        mainNavigation: 'Ana navigasyon',
        footerNavigation: 'Alt navigasyon',
        toggleMenu: 'Menüyü aç/kapat',
        cloud: 'Cloud',
        cloudSubtitle: 'Teknik',
        go: 'Go',
        goSubtitle: 'Teknik olmayan'
    },
    go: {
        pageTitle: 'ClawHost Go',
        heroTitle1: 'OpenClaw Dağıt.',
        heroTitle2: 'Yerel. Anında.',
        badge: 'OpenClaw ve Hermes Yerel',
        tutorialBadge: 'Go’da Nasıl Başlanır',
        description:
            "OpenClaw örneklerinizi yönetmek için hafif bir masaüstü istemcisi. Claw'larınızı doğrudan bilgisayarınızdan dağıtın, izleyin ve kontrol edin.",
        features: 'Özellikler',
        whyClawHostGo: 'Hepsi Bir Arada Özellikler',
        featuresDescription:
            'Neden denemeye değeriz, özellikler burada yalan söylemez.',
        zeroConfigDescription:
            'Sunucu, OpenClaw ve Hermes kurulumu için saatler harcamayın. Önceden yüklenmiş ve dakikalar içinde hazır.',
        ownedDataDescription:
            'Her şey cihazınızda çalışır. Bulut sunucusu yok, üçüncü taraf yok, verileriniz cihazınızdan çıkmaz.',
        terminalAccessDescription:
            'OpenClaw örneğinizin terminaline doğrudan uygulamadan erişin. Harici SSH istemcisi gerekmez.',
        simplePricing: 'Basit Fiyatlandırma',
        simplePricingDescription:
            'Tek lisans, sınırsız her şey. Aylık fatura yok, kullanım limiti yok, gizli ücret yok.',
        localDomain: 'Özel Yerel Alan Adı',
        localDomainDescription:
            "OpenClaw'a özel markalı yerel alan adıyla erişin. Kendi ağınızda temiz URL'ler.",
        secureDescription:
            'Verileriniz asla cihazınızdan ayrılmaz. Tamamen izole, tamamen şifreli, tamamen sizin.',
        pricing: 'Fiyatlandırma',
        pricingTitle: 'Basit, Tek Seferlik Fiyatlandırma',
        pricingDescription:
            'Abonelik yok, gizli ücret yok. Tek lisans, sınırsız kullanım.',
        pricingPrice: '${{price}}',
        pricingLabel: 'Tek Seferlik Ödeme',
        pricingFeature1: 'Ömür boyu lisans',
        pricingFeature2: 'Sınırsız claw',
        pricingFeature3: 'Tüm gelecek güncellemeler',
        pricingFeature4: 'Kullanım limiti yok',
        pricingFeature5: 'Öncelikli destek',
        pricingFeature6: 'Özel yerel alan adı',
        comparison: 'Karşılaştırma',
        comparisonTitle: 'Go ve Cloud',
        comparisonDescription:
            'Size uygun olanı seçin. Go yerel çalışır, Cloud özel sunucularda çalışır.',
        comparisonLocalUs: 'Tamamen cihazınızda çalışır',
        comparisonLocalOthers: 'Uzak sunucularda çalışır',
        comparisonPricingUs: 'Tek seferlik ödeme',
        comparisonPricingOthers: 'Aylık abonelik',
        comparisonDataUs: 'Veriler bilgisayarınızda kalır',
        comparisonDataOthers: 'Veriler bulut sunucularında',
        comparisonSetupUs: 'Kur ve anında çalıştır',
        comparisonSetupOthers: 'Tek tıkla dağıt',
        comparisonUpdatesUs: 'Otomatik güncellemeler',
        comparisonUpdatesOthers: 'Otomatik güncellemeler',
        faqTitle: 'Sorular',
        faqHeading: 'Sık Sorulan Sorular',
        faqDescription: 'ClawHost Go hakkında bilmeniz gereken her şey.',
        faq1Question: 'ClawHost Go nedir?',
        faq1Answer:
            "ClawHost Go, OpenClaw'u kendi bilgisayarınızda yerel olarak çalıştırmanızı sağlayan hafif bir masaüstü uygulamasıdır. Bulut sunucusu gerekmez — kurun, başlatın ve OpenClaw'u saniyeler içinde kullanmaya başlayın.",
        faq2Question: "Go, ClawHost Cloud'dan nasıl farklıdır?",
        faq2Answer:
            "ClawHost Cloud, OpenClaw'u 7/24 çalışma süresi ve küresel erişimle özel uzak sunuculara dağıtır. ClawHost Go her şeyi cihazınızda yerel olarak çalıştırır — gizlilik, çevrimdışı kullanım ve basit kurulumlar için idealdir.",
        faq3Question: 'İnternet bağlantısına ihtiyacım var mı?',
        faq3Answer:
            'ClawHost Go yerel kullanım için çevrimdışı çalışır. İnternet bağlantısı yalnızca ilk kurulum, güncellemeler ve harici API çağrıları gerektiren özellikler için gereklidir.',
        faq4Question: 'Lisans tek seferlik bir ödeme mi?',
        faq4Answer:
            "Evet. Bir kez ödersiniz ve tüm gelecek güncellemeler dahil ClawHost Go'ya ömür boyu erişim elde edersiniz. Abonelik yok, tekrarlayan ücret yok.",
        faq5Question: 'Hangi işletim sistemleri destekleniyor?',
        faq5Answer:
            "ClawHost Go, Windows ve macOS'u destekler. Her iki platform da aynı özelliklere sahiptir ve güncellemeleri aynı anda alır.",
        faq6Question: "Daha sonra Go'dan Cloud'a geçebilir miyim?",
        faq6Answer:
            "Kesinlikle. OpenClaw yapılandırmanızı Go'dan dışa aktarabilir ve istediğiniz zaman ClawHost Cloud'a dağıtabilirsiniz. Her iki platform tamamen uyumludur.",
        statsPrice: '${{price}}',
        statsLifetime: 'Ömür Boyu',
        statsOneTime: 'Tek Seferlik',
        statsPayment: 'Ödeme',
        statsLocal: 'Yerel',
        statsLocally: 'Yerel Çalışır',
        statsZero: 'Sıfır',
        statsZeroConfig: 'Sıfır Yapılandırma',
        ctaTitle: "OpenClaw'u Yerel Çalıştırın",
        ctaDescription:
            "Tek seferlik ödeme, ömür boyu lisans. OpenClaw'u kendi bilgisayarınıza dağıtın — bulut yok, abonelik yok, limit yok. Verileriniz, kurallarınız.",
        downloadForMac: 'Mac için İndir',
        downloadVersion: 'Sürüm {{version}}',
        downloadForWindows: 'Windows için İndir',
        deviceNotSupported: 'Cihazınız henüz ClawHost Go tarafından desteklenmiyor.',
        downloadFailed: 'İndirme başarısız!',
        downloadStarted: 'İndirme başladı.',
        appleSilicon: 'Apple Silicon',
        intel: 'Intel',
        chooseMacArch: 'Hangi Macʼiniz var?',
        otherVersions: 'Diğer sürümler',
        updateAvailable: 'Sürüm {{version}} mevcut.',
        updateDownload: 'İndir',
        updateDismiss: 'Sonra',
        clawNotFound: 'Claw bulunamadı!',
        clawNameAlreadyExists: 'Bu isimde bir claw zaten var!',
        invalidSubdomain:
            'Geçersiz alt alan adı. 3-20 küçük harf ve rakam kullanın!',
        subdomainAlreadyInUse: 'Bu alt alan adı zaten kullanımda!',
        clawDirectoryNotFound: 'Claw dizini bulunamadı!',
        noVersionInstalled:
            'OpenClaw sürümü yüklü değil. Sürümler sekmesine gidin ve önce bir tane yükleyin!',
        failedToStartClaw: 'Claw başlatılamadı!',
        noVersionAssigned: "Bu claw'a atanmış OpenClaw sürümü yok!",
        invalidAgentName: 'Geçersiz ajan adı!',
        invalidPath: 'Geçersiz yol!',
        fileNotFound: 'Dosya bulunamadı!',
        purchasingNotAvailable: 'Yerel modda satın alma mevcut değil!',
        exportFailed: 'Dışa aktarma başarısız!',
        versionNotInstalled: 'OpenClaw sürümü {{version}} yüklü değil!',
        failedToStartProcess: 'İşlem başlatılamadı: {{reason}}!',
        gatewayNotReady: 'Ajan zamanında hazır olmadı!',
        processExitedImmediately: 'İşlem hemen sonlandı. Günlükler:\n{{logs}}',
        processExitedImmediatelyNoLogs:
            'İşlem başladıktan hemen sonra sonlandı!',
        processExitedWithCode:
            'İşlem {{code}} koduyla sonlandı. Günlükler:\n{{logs}}',
        processExitedWithCodeNoLogs: 'İşlem {{code}} koduyla sonlandı!',
        processExitedUnexpectedly: 'İşlem beklenmedik şekilde sonlandı!',
        failedToInstallVersion: '{{version}} sürümü kurulamadı: {{reason}}!',
        oauthCancelled: 'Kimlik doğrulama iptal edildi!',
        diskFull: 'Cihazda boş alan kalmadı!',
        permissionDenied: 'İzin reddedildi!',
        networkTimeout: 'Ağ isteği zaman aşımına uğradı!',
        failedToFetchLatestVersion: 'En son sürüm alınamadı!'
    },
    footer: {
        website: 'Web Sitesi',
        copyrightName: 'ClawHost',
        copyrightRights: 'Tüm hakları saklıdır.',
        termsOfService: 'Hizmet Şartları',
        privacyPolicy: 'Gizlilik Politikası',
        getInTouch: 'İletişime Geçin',
        brandDescription:
            "OpenClaw'u tek tıkla kendi VPS'inize dağıtın. Tam gizlilik, özel kaynaklar, paylaşımlı altyapı yok.",
        builtBy: 'Yapımcı',
        supportedBy: 'Destekleyen',
        product: 'Ürün',
        howItWorks: 'Nasıl Çalışır',
        features: 'Özellikler',
        pricing: 'Fiyatlandırma',
        faq: 'Sorular',
        changelog: 'Değişiklik Günlüğü',
        compare: 'Tam Karşılaştırma',
        legalAndMore: 'Diğer',
        affiliateProgram: 'Ortaklık Programı',
        documentation: 'Belgeler',
        productDescription:
            'OpenClaw ve Hermes ajanlarını bulutta veya yerel olarak tek tıkla dağıtın — ClawHost ile yapay zeka ajanlarınızı daha hızlı oluşturun, bağlayın ve ölçeklendirin.',
        ariaGithub: 'GitHub',
        ariaX: 'X',
        ariaFacebook: 'Facebook',
        ariaInstagram: 'Instagram',
        ariaThreads: 'Threads',
        ariaYoutube: 'YouTube',
        ariaTiktok: 'TikTok'
    },
    errors: {
        somethingWentWrong: 'Bir şeyler ters gitti!',
        couldNotLoadData: 'Veriler yüklenemedi. Lütfen tekrar deneyin!',
        notFound: 'Sayfa bulunamadı!',
        pageNotFoundDescription: 'Aradığınız sayfa mevcut değil veya taşınmış.',
        goToHomepage: 'Ana Sayfaya Git',
        failedToLoadAgents: 'Agents yüklenemedi!',
        failedToLoadAgentsDescription:
            'Agents yüklenemedi. Lütfen bağlantınızı kontrol edip tekrar deneyin!',
        failedToLoadSSHKeys: 'SSH anahtarları yüklenemedi!',
        failedToLoadSSHKeysDescription:
            'SSH anahtarlarınız yüklenemedi. Lütfen bağlantınızı kontrol edip tekrar deneyin!',
        failedToUpdateProfile: 'Profil güncellenemedi!',
        failedToAddSSHKey: 'SSH anahtarı eklenemedi!',
        failedToCreateClaw: 'Claw oluşturulamadı!',
        failedToLoadLocations: 'Konumlar yüklenemedi. Lütfen tekrar deneyin!',
        failedToLoadPlans: 'Planlar yüklenemedi. Lütfen tekrar deneyin!',
        invalidPlan: 'Geçersiz plan seçildi!',
        invalidLocation: 'Lütfen bir konum seçin!',
        failedToGenerateKeyPair:
            'Anahtar çifti oluşturulamadı. Lütfen anahtarları yerel olarak oluşturun!',
        unableToLoadPricing:
            'Fiyatlandırma yüklenemiyor. Lütfen daha sonra tekrar deneyin!',
        noPasswordAvailable: 'Bu claw için şifre mevcut değil!'
    },
    api: {
        missingRequiredFields: 'Gerekli alanlar eksik!',
        agentNotFound: 'Agent bulunamadı!',
        agentRenamed: 'Agent başarıyla yeniden adlandırıldı.',
        agentEmojiUpdated: 'Ajan emojisi güncellendi.',
        failedToUpdateEmoji: 'Emoji güncellenemedi!',
        invalidAgentName:
            'Agent adı 1 ile {{max}} karakter arasında olmalıdır!',
        userNotFound: 'Kullanıcı bulunamadı!',
        sshKeyNotFound: 'SSH anahtarı bulunamadı!',
        pendingAgentNotFound: 'Bekleyen agent bulunamadı!',
        agentNotScheduledForDeletion: 'Agent silinmek üzere planlanmamış!',
        agentDeletionAlreadyPassed: 'Silme tarihi zaten geçmiş!',
        agentLimitReached:
            '{{max}} agent sınırına ulaştınız. Bu limiti artırmak için lütfen destekle iletişime geçin!',
        sshKeyLimitReached:
            '{{max}} SSH anahtarı sınırına ulaştınız. Bu limiti artırmak için lütfen destekle iletişime geçin!',
        volumeSizeInvalid:
            'Birim boyutu {{min}} ile {{max}} GB arasında olmalıdır!',
        paymentNotConfigured: 'Bu plan için ödeme yapılandırılmamış!',
        invalidSshKeyFormat: 'Geçersiz SSH açık anahtar biçimi!',
        sshKeyInUse:
            'Bu SSH anahtarı şu anda bir veya daha fazla agent tarafından kullanılıyor!',
        inputTooLong: 'Girdi izin verilen maksimum uzunluğu aşıyor!',
        invalidEmailFormat: 'Geçersiz e-posta biçimi!',
        plusAddressingNotAllowed:
            'E-posta girişi için artı adresleme izin verilmiyor!',
        invalidRedirectUrl: 'Geçersiz yönlendirme URL!',
        fileTooLarge: 'Dosya içeriği izin verilen maksimum boyutu aşıyor!',
        nameAndKeyRequired: 'Ad ve açık anahtar gereklidir!',
        nameTooLong: 'Ad {{max}} karakter veya daha az olmalıdır!',
        noBillingAccount: 'Faturalama hesabı bulunamadı!',
        orderIdRequired: 'Sipariş kimliği gereklidir!',
        orderNotFound: 'Sipariş bulunamadı!',
        emailRequired: 'E-posta gereklidir!',
        redirectUrlRequired: 'Yönlendirme URL gereklidir!',
        invalidWebhook: 'Geçersiz webhook!',
        failedToStartAgent: 'Agent başlatılamadı!',
        failedToStopAgent: 'Agent durdurulamadı!',
        failedToRestartAgent: 'Agent yeniden başlatılamadı!',
        failedToDeleteAgent: 'Agent silinemedi!',
        failedToCreateAgent: 'Agent oluşturulamadı!',
        invalidProvider: 'Geçersiz sağlayıcı!',
        providerNotAllowed: 'Bu sağlayıcı şu anda kullanılamıyor!',
        invalidPlan: 'Geçersiz plan seçildi!',
        planBelowMinimumMemory:
            'Bu plan minimum bellek gereksinimini karşılamıyor!',
        invalidLocation: 'Geçersiz konum seçildi!',
        planNotAvailableAtLocation: 'Bu plan seçilen konumda mevcut değil!',
        failedToSyncAgent: 'Sunucu durumu senkronize edilemedi!',
        failedToProvisionAgent: 'Agent hazırlanamadı!',
        failedToInitiatePurchase: 'Satın alma başlatılamadı!',
        failedToCancelDeletion: 'Silme iptal edilemedi!',
        failedToHardDeleteAgent: 'Agent kalıcı olarak silinemedi!',
        failedToCancelScheduledDeletion: 'Planlanmış silme iptal edilemedi!',
        failedToCreateSshKey: 'SSH anahtarı oluşturulamadı!',
        failedToDeleteSshKey: 'SSH anahtarı silinemedi!',
        failedToUpdateProfile: 'Profil güncellenemedi!',
        failedToGetProfile: 'Profil alınamadı!',
        failedToGetInvoice: 'Fatura alınamadı!',
        failedToGetCustomerPortal: 'Müşteri portalı alınamadı!',
        failedToGetBillingHistory: 'Faturalama geçmişi alınamadı!',
        failedToGetStats: 'İstatistikler alınamadı!',
        affiliateFetched: 'Affiliate info fetched successfully.',
        failedToGetAffiliate: 'Failed to get affiliate info!',
        invalidPeriod: 'Geçersiz dönem filtresi!',
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
        failedToFetchLocations: 'Konumlar getirilemedi!',
        failedToFetchPlans: 'Planlar getirilemedi!',
        failedToFetchVolumePricing: 'Birim fiyatlandırması getirilemedi!',
        failedToFetchPlanAvailability: 'Plan uygunluğu getirilemedi!',
        failedToSendEmail: 'E-posta gönderilemedi!',
        failedToGetVersion: 'Sürüm alınamadı!',
        failedToGetVersions: 'Sürümler alınamadı!',
        failedToInstallVersion: 'Sürüm yüklenemedi!',
        installVersionSuccess: 'Sürüm başarıyla yüklendi.',
        invalidVersion: 'Geçersiz sürüm biçimi!',
        outdatedVersion: 'Bu sürüm eski ve yüklenemez!',
        failedToGetDiagnostics: 'Örneğe bağlanılamadı!',
        failedToGetDiagnosticsDescription:
            'Tanılama bilgileri alınamadı. Örnek çevrimdışı olabilir veya başlatılıyor olabilir.',
        failedToGetLogs: 'Günlükler yüklenemedi!',
        failedToGetLogsDescription:
            'Bu örnek için günlükler alınamadı. Lütfen daha sonra tekrar deneyin.',
        failedToReinstallAgent: 'Örnek yeniden yüklenemedi!',
        reinstallSuccess: 'Örnek başarıyla yeniden yüklendi.',
        reinstallRateLimited:
            'Yalnızca 24 saatte bir yeniden yükleme yapabilirsiniz. Bu limiti kaldırmak istiyorsanız lütfen ekiple iletişime geçin.',
        subdomainRateLimited:
            'Alt alan adınızı yalnızca 24 saatte bir değiştirebilirsiniz. Bu limiti kaldırmak istiyorsanız lütfen ekiple iletişime geçin.',
        subdomainUpdated: 'Alt alan adı başarıyla güncellendi.',
        invalidSubdomain:
            'Geçersiz alt alan adı. 3-20 küçük harf ve rakam kullanın!',
        subdomainAlreadyInUse: 'Bu alt alan adı zaten kullanımda!',
        subdomainNotSupported: 'Bu ajan türü alt alan adı kullanmıyor.',
        agentBusy: 'Agent şu anda hazırlanıyor veya siliniyor!',
        reinstallGatewayNotResponding:
            'Yeniden yükleme tamamlandı ancak ağ geçidi henüz yanıt vermiyor. Başlaması için daha fazla zamana ihtiyacı olabilir.',
        failedToRepairAgent: 'Failed to repair the instance!',
        repairSuccess: 'Instance repaired successfully.',
        repairGatewayNotResponding:
            'Repair applied but gateway is not responding yet. It may need more time to start.',
        failedToExportAgent: 'Agent verileri dışa aktarılamadı!',
        agentNotReady: 'Agent dışa aktarma için hazır değil!',
        exportRateLimited:
            'Bu agent yakın zamanda dışa aktarıldı. Tekrar dışa aktarmadan önce lütfen bekleyin!',
        failedToListFiles: 'Örnek dosyaları listelenemedi!',
        failedToReadFile: 'Dosya okunamadı!',
        failedToUpdateFile: 'Dosya kaydedilemedi!',
        invalidFilePath: 'Geçersiz dosya yolu!',
        fileNotEditable: 'Bu dosya türü düzenlenemez!',
        invalidJsonConfig: 'Geçersiz JSON!',
        fileSaveSuccess: 'Dosya kaydedildi.',
        rateLimitExceeded: 'Başka bir kod talep etmeden önce lütfen bekleyin!',
        otpExpiredOrNotFound:
            'Kodun süresi dolmuş veya bulunamadı. Lütfen yeni bir tane talep edin!',
        otpMaxAttemptsReached:
            'Çok fazla başarısız deneme. Lütfen yeni bir kod talep edin!',
        otpInvalidCode: 'Geçersiz kod. Lütfen tekrar deneyin!',
        licenseAlreadyPurchased: 'Lisans zaten satın alınmış!',
        licenseNotAvailable: 'Lisans ürünü mevcut değil!',
        licenseCheckoutCreated: 'Lisans ödeme sayfası oluşturuldu.',
        failedToPurchaseLicense: 'Lisans ödeme sayfası oluşturulamadı!',
        internalServerError: 'Dahili bir hata oluştu!',
        invalidCredentials: 'Geçersiz kimlik bilgileri!',
        accountLinked: 'Hesap başarıyla bağlandı.',
        webhookProcessingFailed: 'Webhook işleme başarısız!',
        adminAccessDenied: 'Yönetici erişimi gerekli!',
        agentsFetched: "Agent'lar başarıyla getirildi.",
        agentFetched: 'Agent başarıyla getirildi.',
        agentStarsFetched: 'Agent yıldızları başarıyla getirildi.',
        agentSynced: 'Agent başarıyla senkronize edildi.',
        agentStarted: 'Agent başarıyla başlatıldı.',
        agentStopped: 'Agent başarıyla durduruldu.',
        agentRestarted: 'Agent başarıyla yeniden başlatıldı.',
        agentCreated: 'Agent başarıyla oluşturuldu.',
        agentDeleted: 'Agent başarıyla silindi.',
        agentDeletionScheduled: 'Agent silme planlandı.',
        agentDeletionCancelled: 'Agent silme iptal edildi.',
        agentHardDeleted: 'Agent kalıcı olarak silindi.',
        pendingAgentCancelled: 'Satın alma iptal edildi.',
        failedToCancelPendingAgent: 'Satın alma iptal edilemedi!',
        agentPurchaseInitiated: 'Satın alma başarıyla başlatıldı.',
        sshKeysFetched: 'SSH anahtarları başarıyla getirildi.',
        sshKeyCreated: 'SSH anahtarı başarıyla oluşturuldu.',
        sshKeyDeleted: 'SSH anahtarı başarıyla silindi.',
        profileFetched: 'Profil başarıyla getirildi.',
        profileUpdated: 'Profil başarıyla güncellendi.',
        statsFetched: 'İstatistikler başarıyla getirildi.',
        billingHistoryFetched: 'Faturalama geçmişi başarıyla getirildi.',
        invoiceFetched: 'Fatura başarıyla getirildi.',
        customerPortalFetched: 'Müşteri portalı URL başarıyla getirildi.',
        plansFetched: 'Planlar başarıyla getirildi.',
        locationsFetched: 'Konumlar başarıyla getirildi.',
        volumePricingFetched: 'Birim fiyatlandırması başarıyla getirildi.',
        planAvailabilityFetched: 'Plan uygunluğu başarıyla getirildi.',
        diagnosticsFetched: 'Tanılama başarıyla getirildi.',
        metricsFetched: 'Metrikler başarıyla getirildi.',
        failedToGetMetrics: 'Sunucu metrikleri alınamadı!',
        overviewFetched: 'Genel bakış başarıyla getirildi.',
        failedToGetOverview: 'Ağ geçidi genel bakışı alınamadı!',
        overviewUnsupported:
            'Bu OpenClaw sürümü genel bakış özelliğini desteklemiyor!',
        passwordRotated: 'Root şifresi başarıyla değiştirildi.',
        failedToRotatePassword: 'Root şifresi değiştirilemedi!',
        gatewayTokenRotated: 'Ağ geçidi jetonu başarıyla değiştirildi.',
        failedToRotateGatewayToken: 'Ağ geçidi jetonu değiştirilemedi!',
        sshKeyUpdated: 'SSH anahtarı başarıyla güncellendi.',
        failedToUpdateSSHKey: 'SSH anahtarı güncellenemedi!',
        invalidPassword:
            'Şifre {{min}} ile {{max}} karakter arasında olmalıdır!',
        invalidGatewayToken:
            'Ağ geçidi jetonu {{min}} ile {{max}} karakter arasında olmalıdır!',
        enablePreviewSuccess: 'Önizleme modu başarıyla etkinleştirildi.',
        failedToEnablePreview: 'Önizleme modu etkinleştirilemedi!',
        logsFetched: 'Günlükler başarıyla getirildi.',
        filesFetched: 'Dosyalar başarıyla getirildi.',
        fileFetched: 'Dosya başarıyla getirildi.',
        otpSent: 'Kod başarıyla gönderildi.',
        otpVerified: 'Kod başarıyla doğrulandı.',
        webhookReceived: 'Webhook alındı.',
        unauthorized: 'Yetkisiz!',
        invalidToken: 'Geçersiz token!',
        notFound: 'Bulunamadı!',
        healthOk: 'API çalışıyor.',
        featureVersionUnsupported:
            "Bu özellik {{version}} sürümünde desteklenmiyor. Lütfen OpenClaw'ı güncelleyin veya manuel yönetim için Terminali kullanın.",
        invalidAuthMethod: 'Geçersiz kimlik doğrulama yöntemi!',
        authMethodNotConnected: 'Bu kimlik doğrulama yöntemi bağlı değil!',
        authMethodConnected: 'Kimlik doğrulama yöntemi başarıyla bağlandı.',
        authMethodDisconnected:
            'Kimlik doğrulama yöntemi başarıyla bağlantısı kesildi.',
        failedToConnectAuthMethod: 'Kimlik doğrulama yöntemi bağlanamadı!',
        failedToDisconnectAuthMethod:
            'Kimlik doğrulama yöntemi bağlantısı kesilemedi!',
        featureEmailsDisabled: 'Özellik e-postaları şu anda devre dışı.',
        featureEmailsSent: 'Özellik e-postaları başarıyla gönderildi.',
        featureEmailsFailed: 'Özellik e-postaları gönderilemedi!',
        invalidFeatureKey: 'Geçersiz özellik anahtarı!',
        adminUsersFetched: 'Kullanıcılar başarıyla alındı.',
        failedToGetAdminUsers: 'Kullanıcılar alınamadı!',
        adminUserDetailFetched: 'Kullanıcı detayları başarıyla alındı.',
        failedToGetAdminUserDetail: 'Kullanıcı detayları alınamadı!',
        adminUserUpdated: 'Kullanıcı güncellendi.',
        failedToUpdateAdminUser: 'Kullanıcı güncellenemedi!',
        adminStatsFetched: 'İstatistikler alındı.',
        failedToGetAdminStats: 'İstatistikler alınamadı!',
        adminAnalyticsFetched: 'Analitik başarıyla alındı.',
        failedToGetAdminAnalytics: 'Analitik alınamadı!',
        adminBillingFetched: 'Faturalandırma başarıyla alındı.',
        failedToGetAdminBilling: 'Faturalandırma alınamadı!',
        adminAgentsFetched: 'Agents alındı.',
        failedToGetAdminAgents: 'Agents alınamadı!',
        adminSSHKeysFetched: 'SSH anahtarları alındı.',
        failedToGetAdminSSHKeys: 'SSH anahtarları alınamadı!',
        adminVolumesFetched: 'Birimler alındı.',
        failedToGetAdminVolumes: 'Birimler alınamadı!',
        adminReferralsFetched: 'Referrals fetched.',
        failedToGetAdminReferrals: 'Failed to fetch referrals!',
        adminPendingAgentsFetched: 'Pending agents fetched.',
        failedToGetAdminPendingAgents: 'Failed to fetch pending agents!',
        adminExportsFetched: 'Exports fetched.',
        adminEmailsFetched: 'Emails fetched.',
        failedToGetAdminEmails: 'Failed to fetch emails!'
    },
    emails: {
        otpSubject: 'ClawHost giriş kodunuz',
        otpPreview: 'ClawHost giriş kodunuz: {{code}}',
        otpHeading: 'Giriş kodunuz:',
        otpExpiry:
            'Kodun süresi 10 dakika içinde dolar. Bu siz değilseniz, bu e-postayı görmezden gelin.',
        featureFooter:
            'Bu e-postayı ClawHost hesabınız olduğu için alıyorsunuz.',
        features: {
            terminal: {
                subject: 'Biliyor muydunuz? Web terminaliniz var',
                preview: 'Sunucunuza doğrudan tarayıcıdan erişin',
                tag: 'Web Terminal',
                heading: 'Sunucunuz bir tık uzağınızda',
                description:
                    "Yerleşik terminalimizle sunucunuza doğrudan tarayıcınızdan erişin. SSH istemcisi gerekmez — ClawHost'u açın ve komut yazmaya başlayın.",
                cta: 'Terminali Aç'
            },
            logs: {
                subject:
                    'Biliyor muydunuz? Panelinizdeki gerçek zamanlı günlükler',
                preview: 'Sunucu günlüklerinizi tarayıcıdan ayrılmadan izleyin',
                tag: 'Canlı Günlükler',
                heading: 'Sunucunuzun ne yaptığını görün',
                description:
                    'ClawHost panelinden sunucu günlüklerinizi gerçek zamanlı izleyin. Sorunları teşhis edin, dağıtımları takip edin ve uygulamalarınızı tarayıcıdan ayrılmadan hata ayıklayın.',
                cta: 'Günlükleri Görüntüle'
            },
            fileExplorer: {
                subject:
                    'Biliyor muydunuz? Sunucu dosyalarını tarayıcıdan düzenleyin',
                preview: 'SSH olmadan dosyaları göz atın, okuyun ve düzenleyin',
                tag: 'Dosya Gezgini',
                heading: 'Dosyalarınız, parmaklarınızın ucunda',
                description:
                    'ClawHost panelinden sunucunuzdaki dosyaları doğrudan göz atın, okuyun ve düzenleyin. Sözdizimi vurgulama, arama ve anında kaydetme — SSH gerekmez.',
                cta: 'Dosya Gezginini Aç'
            },
            diagnostics: {
                subject: 'Biliyor muydunuz? Yerleşik sağlık kontrolleri',
                preview: 'Sunucu sağlığını panelden izleyin',
                tag: 'Tanılama',
                heading: 'Sunucunuzun sağlıklı olduğunu bilin',
                description:
                    "Servis durumu, bellek kullanımı ve port erişilebilirliğini kontrol etmek için claw'ınızda tanılama çalıştırın. Sorunları problem olmadan önce tespit edin.",
                cta: 'Tanılama Çalıştır'
            },
            sshKeys: {
                subject:
                    "Biliyor muydunuz? ClawHost'tan SSH anahtarlarını yönetin",
                preview: 'Panelde SSH anahtar çiftleri oluşturun ve yönetin',
                tag: 'SSH Anahtarları',
                heading: 'SSH anahtarları, basitleştirilmiş',
                description:
                    "SSH anahtar çiftleri oluşturun, açık anahtarları kopyalayın ve özel anahtarları indirin — hepsi ClawHost panelinden. Güvenli erişim için anahtarları claw'lara atayın.",
                cta: 'SSH Anahtarlarını Yönet'
            },
            exportConfig: {
                subject: 'Biliyor muydunuz? Claw yapılandırmanızı dışa aktarın',
                preview:
                    'Claw kurulumunuzu taşınabilir yapılandırma olarak indirin',
                tag: 'Yapılandırma Dışa Aktarma',
                heading: 'Yapılandırmanızı yanınızda taşıyın',
                description:
                    'Claw yapılandırmanızı ve ayarlarınızı indirilebilir bir dosya olarak dışa aktarın. Kurulumunuzu yedekleyin veya ortamınızı çoğaltmak için kullanın.',
                cta: 'Yapılandırmayı Dışa Aktar'
            },
            multiLanguage: {
                subject: 'Biliyor muydunuz? ClawHost sizin dilinizi konuşuyor',
                preview: "ClawHost'u 14 dilde kullanın",
                tag: 'Çok Dil',
                heading: 'Kendi dilinizde ClawHost',
                description:
                    'Tüm ClawHost panelini 14 dilden herhangi birine geçirin. Düğmelerden hata mesajlarına kadar her şey — tamamen çevrilmiş.',
                cta: 'Dili Değiştir'
            },
            subdomain: {
                subject: 'Biliyor muydunuz? Her claw kendi alt alan adını alır',
                preview: "Claw'ınıza her yerden özel bir URL ile erişin",
                tag: 'Özel Alt Alan Adı',
                heading: 'Her yerden erişin',
                description:
                    'Her claw benzersiz bir alt alan adı alır, böylece OpenClaw örneğinize her yerden erişebilirsiniz. Port yönlendirme yok, yerel ağ yok — sadece bir URL.',
                cta: 'Alt Alan Adınızı Görüntüleyin'
            },
            darkMode: {
                subject: "Biliyor muydunuz? ClawHost'un koyu modu var",
                preview: 'Açık ve koyu temalar arasında geçiş yapın',
                tag: 'Karanlık Mod',
                heading: 'Göze hoş gelen',
                description:
                    'ClawHost panelinde açık ve koyu temalar arasında geçiş yapın. Tercihiniz kaydedilir ve her ziyarette otomatik olarak uygulanır.',
                cta: 'Koyu Modu Deneyin'
            },
            reinstall: {
                subject:
                    "Biliyor muydunuz? OpenClaw'u tek tıkla yeniden yükleyin",
                preview:
                    'Sunucunuzu kaybetmeden OpenClaw örneğinizi sıfırlayın',
                tag: 'Yeniden Yükle',
                heading: 'Temiz başlangıç, aynı sunucu',
                description:
                    'Mevcut sunucunuzda OpenClaw çalışma zamanını tek tıkla yeniden yükleyin. Sunucunuz olduğu gibi kalır — sadece OpenClaw temiz bir kurulum alır.',
                cta: 'Daha Fazla Bilgi'
            },
            hermesAgentLaunch: {
                subject: 'Hermes Agent burada',
                preview: 'Hermes ajanlarını doğrudan ClawHost\'a dağıtın.',
                tag: 'Hermes Ajanı',
                heading: 'Hermes ajanları, artık ClawHost\'ta',
                description:
                    'Hermes Agent artık ClawHost\'ta destekleniyor. Birkaç dakikada Hermes destekli bir claw çalıştırın, model sağlayıcılarını Dosyalar sekmesinden yapılandırın ve yerleşik terminalden onunla sohbet edin. Ek kurulum yok, yapıştırıcı kod yok.',
                cta: 'Hermes\'i dağıt'
            },
            clawHostGoLaunch: {
                subject: 'ClawHost Go burada',
                preview: 'OpenClaw\'u makinenizde yerel olarak çalıştırmak için yerel bir masaüstü uygulaması.',
                tag: 'ClawHost Go',
                heading: 'Claw\'larınız, masanızda',
                description:
                    'ClawHost Go, macOS ve Windows için yerel bir masaüstü uygulamasıdır. OpenClaw örneklerini doğrudan makinenizde dağıtın ve yönetin — bulut yok, abonelik yok, sadece tek seferlik lisans. Yerleşik terminal, dosya düzenleyici, sürüm yöneticisi ve sıfır yapılandırmalı yerel DNS ile birlikte gelir.',
                cta: 'ClawHost Go\'yu indir'
            },
            productHuntLaunch: {
                subject: 'Product Hunt\'taki lansmanımıza yardım edin',
                preview: 'Product Hunt\'ta yayına yeni girdik. Oyunuz önemli.',
                tag: 'Product Hunt Lansmanı',
                heading: 'Product Hunt\'ta yayındayız',
                description:
                    'Bugün ClawHost\'u Product Hunt\'ta yayınlıyoruz. Daha hızlı kargo göndermenize yardımcı olduysak, bir oy bizim için çok şey ifade eder. Teşekkür olarak, ilk siparişinizde %10 indirim için PH10 kodunu kullanın.',
                cta: 'Product Hunt\'ta oy ver'
            },
            yearlyPlans: {
                subject: 'Biliyor muydunuz? Yıllık planlarla tasarruf edin',
                preview: 'Yıllık faturalamaya geçin ve daha az ödeyin',
                tag: 'Yıllık Planlar',
                heading: 'Daha az ödeyin, daha fazla alın',
                description:
                    'Yıllık faturalamaya geçin ve claw aboneliğinizde tasarruf edin. Aynı harika hizmet, daha düşük fiyat — istediğiniz zaman iptal edin.',
                cta: 'Planları Görüntüle'
            }
        }
    },
    auth: {
        signIn: 'Kimlik Doğrulama',
        signInDescription:
            'OpenClaw örneklerinizi yönetmek için ClawHost hesabınıza giriş yapın.',
        signingIn: 'Kimlik doğrulanıyor...',
        verifyCode: 'Kodu Doğrula',
        checkYourEmail: 'E-postanızı Kontrol Edin',
        checkYourEmailHeading: 'E-postanızı kontrol edin',
        codeSentTo: '6 haneli bir kod gönderdik:',
        signInToDeployOpenClaw:
            'Tek tıkla ajanları yönetmek ve dağıtmak için kimlik doğrulayın.',
        emailAddress: 'E-posta Adresi',
        emailPlaceholder: 'example@clawhost.cloud',
        continueWithEmail: 'E-posta ile Devam Et',
        otpDescription:
            'Giriş yapmanız için size bir kod göndereceğiz. Şifre gerekmez.',
        welcomeBack: 'Tekrar hoş geldiniz.',
        resendIn: '{{seconds}}s sonra tekrar gönder',
        resendCode: 'Kodu tekrar gönder',
        changeEmail: 'E-postayı değiştir',
        invalidCode: 'Geçersiz kod!',
        invalidEmailFormat: 'Lütfen geçerli bir e-posta adresi girin!',
        plusAddressingNotAllowed:
            'E-posta girişi için artı adresleme izin verilmiyor!',
        or: 'veya',
        continueWithGoogle: 'Google ile Devam Et',
        continueWithGithub: 'GitHub ile Devam Et',
        agreementNotice: 'Devam ederek şunları kabul edersiniz:',
        termsOfService: 'Hizmet Şartları',
        andWord: 've',
        privacyPolicy: 'Gizlilik Politikası'
    },
    account: {
        title: 'Hesap',
        description:
            'ClawHost hesap ayarlarınızı ve profil bilgilerinizi yönetin.',
        accountSettings: 'Hesap',
        manageYourAccount: 'Profilinizi ve hesap ayarlarınızı yönetin.',
        profileInformation: 'Profil Bilgileri',
        profileDescription: 'Kişisel bilgileriniz ve görünen adınız.',
        noNameSet: 'Ad belirlenmemiş',
        joined: 'Katılım',
        claws: 'claw',
        sshKeys: 'anahtar',
        displayName: 'Görünen Ad',
        enterYourName: 'Adınızı girin',
        emailAddress: 'E-posta Adresi',
        emailNotEditable: 'E-posta düzenlenemez. Destekle iletişime geçin.',
        profileUpdatedSuccessfully: 'Profil başarıyla güncellendi.',
        billingAndSubscription: 'Faturalama ve Abonelik',
        billingAndSubscriptionDescription:
            'Ödeme yöntemlerini, abonelikleri ve faturaları yönetin.',
        viewBillingHistory:
            'Ödeme geçmişinizi, faturalarınızı ve aboneliklerinizi görüntüleyin.',
        aboutApp: 'Hakkında',
        aboutAppDescription: 'Uygulama bilgileri ve sürümü.',
        appVersion: 'Uygulama sürümü',
        operatingSystem: 'İşletim sistemi',
        architecture: 'Mimari',
        checkForUpdates: 'Güncellemeleri denetle',
        checkNow: 'Denetle',
        updatesUpToDate: 'En son sürüm yüklü.',
        updateReady: 'Sürüm {{version}} yüklemeye hazır.',
        restartToInstall: 'Kurmak için yeniden başlat',
        connectedAccounts: 'Bağlı Hesaplar',
        connectedAccountsDescription:
            'Hesabınıza bağlı giriş yöntemlerini yönetin.',
        authEmail: 'E-posta',
        authGoogle: 'Google',
        authGithub: 'GitHub',
        authConnected: 'Bağlı',
        authConnect: 'Bağla',
        authDisconnect: 'Bağlantıyı Kes',
        emailCannotBeDisconnected:
            'E-posta her zaman birincil giriş yönteminiz olarak bağlıdır.',
        providerConnected: '{{provider}} başarıyla bağlandı.',
        providerDisconnected: '{{provider}} başarıyla bağlantısı kesildi.',
        providerEmailMismatch:
            'Yalnızca aynı e-posta adresini kullanan hesapları bağlayabilirsiniz!',
        settings: 'Ayarlar',
        settingsDescription: 'Panel tercihlerinizi yönetin.',
        openLinksWindowed: 'Bağlantıları pencereli görünümde aç',
        openLinksWindowedDescription:
            'Etkinleştirildiğinde, harici bağlantılar sistem tarayıcısı yerine uygulama içinde açılır.'
    },
    billing: {
        date: 'Tarih',
        product: 'Ürün',
        amount: 'Tutar',
        status: 'Durum',
        statusPaid: 'Ödendi',
        statusPending: 'Bekliyor',
        statusRefunded: 'İade Edildi',
        statusPartiallyRefunded: 'Kısmen İade Edildi',
        billingReasonPurchase: 'Satın Alma',
        billingReasonSubscriptionCreate: 'Yeni Abonelik',
        billingReasonSubscriptionCycle: 'Yenileme',
        billingReasonSubscriptionUpdate: 'Abonelik Güncelleme',
        failedToLoadBilling: 'Faturalama geçmişi yüklenemedi!',
        downloadInvoice: 'Faturayı İndir',
        invoiceCanceledNavigation:
            'Fatura indirme yarıda kesildi çünkü sayfadan ayrıldınız.',
        failedToLoadInvoice: 'Fatura yüklenemedi!',
        couponApplied: 'Kupon: {{name}}',
        manageBilling: 'Faturalamayı Yönet',
        failedToLoadPortal: 'Faturalama portalı açılamadı!',
        portalCanceledNavigation:
            'Faturalama portalı yarıda kesildi çünkü sayfadan ayrıldınız.'
    },
    license: {
        title: 'Lisans',
        description: 'OpenClaw lisansınızı yönetin.',
        pageTitle: 'Lisans',
        pageDescription:
            'Go uygulamamızla OpenClaw örneklerini yerel olarak barındırmak için lisansınızı satın alın.',
        planName: 'ClawHost Go Lisansı',
        oneTimePurchase: 'Tek seferlik satın alma',
        price: '${{price}}',
        priceNote: 'Bir kez ödeyin, sonsuza kadar sahip olun.',
        purchaseLicense: 'Lisans Satın Al',
        purchasing: 'Yönlendiriliyor...',
        activated: 'Lisans Aktif',
        activatedDescription:
            'Lisansınız aktif. Desteğiniz için teşekkür ederiz.',
        paymentSuccess: 'Ödeme başarılı. Lisansınız artık aktif.',
        failedToPurchase: 'Ödeme sayfası başlatılamadı!',
        featureUnlimitedClaws: 'Sınırsız OpenClaw',
        featureDevices: 'Sınırsız Cihaz',
        featureUpdates: 'Sonsuz Güncellemeler',
        featureSupport: 'Öncelikli Destek',
        featureCloud: 'Tüm Bulut Özellikleri, Yerel Olarak',
        whatsIncluded: 'Neler dahil',
        gateTitle: 'Lisans Gerekli',
        gateDescription:
            'OpenClaw örneklerini yerel olarak dağıtmak ve yönetmek için ClawHost Go Lisansına ihtiyacınız var.'
    },
    network: {
        offline: 'İnternet Bağlantısı Yok',
        offlineDescription:
            'Şu anda çevrimdışısınız. İnternet erişimi gerektiren özellikler kullanılamayacak.'
    },
    dashboard: {
        title: "Claw'lar",
        description:
            'Dağıtılmış OpenClaw örneklerinizi görüntüleyin ve yönetin. VPS sunucularınızı başlatın, durdurun, yeniden başlatın ve izleyin.',
        claw: 'claw',
        clawsPlural: 'claw',
        clawCountLabel: '{{count}} claw',
        clawCountLabelSingular: '{{count}} claw',
        newClaw: 'Yeni Claw',
        searchAgents: 'Ajan ara...',
        searchAgentsCount: '{{count}} ajan ara...',
        noAgentsMatchSearch: 'Ajan bulunamadı.',
        clawActions: 'Claw işlemleri',
        noAgentsYet: 'Ajan Yok',
        noAgentsDescription:
            "Dağıtılmış ajan bulunamadı. Ancak ilk ajanınızı $25/ay'dan başlayan fiyatlarla istediğiniz zaman dağıtabilirsiniz. Yapay zeka ile yapın.",
        deleteClaw: "Claw'u Sil",
        deleteClawConfirmation: 'Silmek istediğinizden emin misiniz:',
        deleteClawWarning:
            'Aboneliğiniz iptal edilecek ve sunucu mevcut faturalama döneminizin sonunda silinecek. O zamana kadar kullanmaya devam edebilirsiniz.',
        actionCannotBeUndone: 'Bu işlem geri alınamaz.',
        start: 'Başlat',
        startServer: 'Sunucuyu Başlat',
        stop: 'Durdur',
        stopServer: 'Sunucuyu Durdur',
        restart: 'Yeniden Başlat',
        restartServer: 'Sunucuyu Yeniden Başlat',
        startClaw: 'Sunucuyu Başlat',
        startClawConfirmation:
            'Bu, sunucuyu ve tüm süreçlerini başlatacaktır. Bunu yalnızca gerekli olduğunda yapın.',
        stopClaw: 'Sunucuyu Durdur',
        stopClawConfirmation:
            'Bu, OpenClaw dahil sunucudaki tüm çalışan süreçleri sonlandıracaktır. Hiçbir veri kaybolmayacaktır. Bunu yalnızca gerekli olduğunda yapın. İstediğiniz zaman tekrar başlatabilirsiniz. Durdurmak faturalamayı durdurmaz — ücretlendirilmeyi durdurmak için sunucuyu silin.',
        restartClaw: 'Sunucuyu Yeniden Başlat',
        restartClawConfirmation:
            'Bu, OpenClaw dahil sunucudaki tüm çalışan süreçleri sonlandıracak ve yeniden başlatacaktır. Hiçbir veri kaybolmayacaktır. Bunu yalnızca gerekli olduğunda yapın.',
        copyPassword: 'Şifreyi Kopyala',
        copySshWithKey: 'SSH Kopyala (anahtar ile)',
        copySshWithPassword: 'SSH Kopyala (şifre ile)',
        connect: 'SSH Komutunu Kopyala',
        viewServerCredentials: 'Sunucu Kimlik Bilgileri',
        serverCredentials: 'Sunucu Kimlik Bilgileri',
        serverCredentialsDescription:
            'Sunucunuza SSH ile bağlanmak için bu kimlik bilgilerini kullanın.',
        sshCommand: 'SSH Komutu',
        rootPassword: 'Root Şifresi',
        sshCommandCopied: 'SSH komutu kopyalandı.',
        sshCommandWithPasswordCopied: 'Şifreli SSH komutu kopyalandı.',
        passwordCopiedToClipboard: 'Şifre panoya kopyalandı.',
        plan: 'Sunucu',
        location: 'Konum',
        ip: 'IP',
        domain: 'Alan Adı',
        ipAddress: 'IP Adresi',
        port: 'Port',
        subscription: 'Abonelik',
        history: 'Geçmiş',
        planCost: 'Plan',
        serverId: 'Sunucu Kimliği',
        created: 'Oluşturulma',
        sshKey: 'SSH Anahtarı',
        storage: 'Depolama',
        nextBilling: 'Sonraki Faturalama',
        lastBilling: 'Son Faturalama',
        totalSpent: 'Toplam Harcama',
        version: 'Sürüm',
        gatewayToken: 'Ağ Geçidi Token',
        gatewayTokenDescription:
            "Ağ geçidinizle kimlik doğrulamak için bu token'ı kullanın",
        contactSupport: 'Destek ile İletişim',
        scheduledForDeletion: 'Silme Planlandı',
        scheduledDeletionShort: '{{date}} tarihinde silinecek',
        deletionDate: 'Bu claw {{date}} tarihinde silinecek',
        deletionTooltip:
            '{{date}} tarihinde silinmek üzere planlandı. İptal etmek için menüyü kullanın.',
        pastDue: 'Ödeme Başarısız',
        deletionFailed: 'Silme başarısız',
        pastDueDescription:
            'Ödemeniz başarısız oldu. 14 gün içinde çözülmezse, bu claw kalıcı olarak silinecektir.',
        updatePayment: 'Ödemeyi Güncelle',
        cancelDeletion: 'Silmeyi İptal Et',
        cancelDeletionConfirmation:
            'Emin misiniz? Aboneliğiniz aktif kalacak ve ücretlendirilmeye devam edeceksiniz. Örnek çalışmaya devam edecek.',
        deletionCancelled: 'Silme iptal edildi.',
        scheduleDeletion: 'Silme Planla',
        resumeCheckout: 'Ödemeye Devam Et',
        cancelPurchase: 'Satın Almayı İptal Et',
        hardDelete: 'Zorla Sil',
        hardDeleteClaw: 'Zorla Sil',
        hardDeleteConfirmation:
            "Bu claw'u hemen silmek istediğinizden emin misiniz? Mevcut faturalama döneminizde kalan süreyi kaybedeceksiniz. Bu işlem geri alınamaz.",
        diagnostics: 'Tanılama',
        diagnosticsDescription: 'OpenClaw örneğinizin sağlığını kontrol edin.',
        diagnosticsStatus: 'Durum',
        diagnosticsLogs: 'Günlükler',
        diagnosticsRepair: 'Repair',
        diagnosticsRepairDescription:
            'Remove memory limits, apply latest service configuration, and restart the gateway. This fixes most common issues.',
        diagnosticsRepairSuccess: 'Instance repaired successfully.',
        diagnosticsRepairFailed:
            'Repair applied but gateway is not responding yet!',
        diagnosticsLoading: 'Örneğe bağlanılıyor...',
        diagnosticsNoLogs:
            'Günlük mevcut değil. Günlük oluşturmak için örneğinizi başlatın.',
        diagnosticsNoLogsHermesTitle: 'Hermes ağ geçidi çalışmıyor',
        diagnosticsNoLogsHermesDescription:
            'Terminal sekmesinde platformları yapılandırmak için `hermes gateway setup` çalıştırın, ardından köprüyü başlatmak için `sudo systemctl enable --now hermes-gateway` çalıştırın.',
        diagnosticsIssueDetected: 'Örneğinizde bir sorun tespit edildi.',
        diagnosticsHealthy: 'Örneğiniz normal çalışıyor.',
        diagnosticsPort: 'Port 18789',
        diagnosticsMemory: 'Bellek',
        logsDescription:
            'Ağ geçidi günlüğünüzün son 100 satırı, otomatik yenileniyor.',
        fileExplorer: 'Dosya Gezgini',
        fileExplorerRoot: 'openclaw',
        fileExplorerDescription:
            'OpenClaw yapılandırma dosyalarınızı göz atın ve düzenleyin. Yanlış değişiklikler örneğinizi bozabilir.',
        fileExplorerSelectFile: 'İçeriğini görüntülemek için bir dosya seçin.',
        fileExplorerReadOnly: 'Salt okunur',
        fileExplorerSave: 'Kaydet',
        fileExplorerSaved: 'Dosya kaydedildi.',
        fileExplorerSaveCanceledNavigation:
            'Dosya kaydetme yarıda kesildi çünkü sayfadan ayrıldınız.',
        fileExplorerInvalidJson:
            'Geçersiz JSON. Lütfen kaydetmeden önce sözdizimi hatalarını düzeltin!',
        fileExplorerNoFiles: 'Dosya bulunamadı',
        fileExplorerSearchFiles: 'Dosya ara...',
        fileExplorerNoSearchResults: 'Eşleşen dosya yok.',
        startFailed: 'Claw başlatılamadı!',
        renameSuccess: 'Claw başarıyla yeniden adlandırıldı.',
        renameFailed: 'Claw yeniden adlandırılamadı!',
        renameInvalidChars: 'Yalnızca harf, rakam ve tire kullanılabilir!',
        reinstallInstance: 'Örneği Yeniden Yükle',
        reinstallClaw: 'Örneği Yeniden Yükle',
        reinstallClawConfirmation:
            "Bu, {{agentName}}'u bu örnekte tamamen yeniden yükleyecektir. Tüm yapılandırmalar, ajanlar ve veriler sıfırlanacaktır. Bu işlem geri alınamaz. Devam edilsin mi?",
        reinstallInstanceSuccess: 'Örnek başarıyla yeniden yüklendi.',
        reinstallInstanceFailed: 'Örnek yeniden yüklenemedi!',
        reinstallCanceledNavigation:
            'Yeniden yükleme yarıda kesildi çünkü sayfadan ayrıldınız.',
        openControlPanel: 'Kontrol Panelini Aç',
        exportData: "Claw'u Dışa Aktar (.zip)",
        exportAgent: 'Dışa Aktar',
        exportAgentButton: 'Verileri Dışa Aktar',
        exportAgentTooltip:
            'Bu ajanı ve tüm verilerini .zip dosyası olarak indirin.',
        exportAgentInProgress:
            'Daha büyük ajanlar için dışa aktarma birkaç dakika sürebilir.',
        exportStarted: 'Dışa aktarma hazırlanıyor, bu biraz zaman alabilir...',
        exportSuccess: 'Claw başarıyla dışa aktarıldı.',
        exportFailed: 'Claw verileri dışa aktarılamadı!',
        exportCanceledNavigation:
            'Dışa aktarma iptal edildi çünkü sayfadan ayrıldınız.',
        scheduleDeletionCanceledNavigation:
            'Silme planlaması yarıda kesildi çünkü sayfadan ayrıldınız.',
        cancelDeletionCanceledNavigation:
            'Silme iptali yarıda kesildi çünkü sayfadan ayrıldınız.',
        hardDeleteCanceledNavigation:
            'Zorla silme yarıda kesildi çünkü sayfadan ayrıldınız.',
        exportRateLimited:
            '{{minutes}} dakika sonra tekrar dışa aktarabilirsiniz.',
        exportRateLimitedOne: '1 dakika sonra tekrar dışa aktarabilirsiniz.',
        configuringTooltip:
            "Bu biraz zaman alabilir. OpenClaw, sunucu konumu ve Cloudflare DNS'e bağlıdır.",
        paymentSuccess: "Claw'ınız oluşturuluyor ve yapılandırılıyor.",
        dnsSetupBanner:
            "Claw'larınıza subdomain.clawhost üzerinden erişmek için yerel DNS ayarlayın.",
        dnsSetupButton: 'DNS Ayarla',
        dnsSetupSuccess: 'DNS çözümleyici başarıyla yapılandırıldı.',
        dnsSetupError: 'DNS çözümleyici yapılandırılamadı!',
        userTab: 'Kullanıcı',
        adminTab: 'Yönetici',
        adminTitle: 'Yönetici',
        adminDescription: "Platformdaki tüm claw'ları yönetin.",
        adminNoClaws: 'Platformda henüz claw yok.',
        adminAccessDenied: 'Bu sayfaya erişim izniniz yok.',
        owner: 'Sahip',
        agentType: 'Agent',
        status: {
            running: 'Çalışıyor',
            stopped: 'Durduruldu',
            starting: 'Başlatılıyor',
            stopping: 'Durduruluyor',
            creating: 'Oluşturuluyor',
            configuring: 'Yapılandırılıyor',
            initializing: 'Kuruluyor',
            migrating: 'Taşınıyor',
            rebuilding: 'Yeniden Oluşturuluyor',
            restarting: 'Yeniden Başlatılıyor',
            unreachable: 'Erişilemiyor',
            deleting: 'Siliniyor',
            scheduledDeletion: 'Silme Planlandı',
            awaitingPayment: 'Ödeme Bekleniyor',
            unknown: 'Bilinmiyor',
            checking: 'Kontrol Ediliyor'
        },
        tabNotAvailableForAgent: 'Bu ajan türü için mevcut değil'
    },
    createClaw: {
        title: 'OpenClaw Dağıt',
        description:
            'Sunucunuzu yapılandırın ve yapay zeka ile inşa etmeye başlayın.',
        clawName: 'Ad',
        clawNamePlaceholder: 'örn. cozy-panda',
        clawNameInvalidChars: 'Yalnızca harf, rakam ve tire kullanılabilir!',
        autoGenerateNameHint: 'Otomatik ad oluşturmak için boş bırakın.',
        agentType: 'Ajan Türü',
        agentTypeOpenClaw: 'OpenClaw',
        agentTypeHermes: 'Hermes',
        agentTypeOpenClawDescription: '{{count}} yıldız',
        agentTypeHermesDescription: '{{count}} yıldız',
        location: 'Konum',
        locationUnavailable: 'Kullanılamaz',
        locationUnavailableForPlan: 'Kullanılamaz',
        plan: 'Sunucu',
        planUnavailable: 'Kullanılamaz',
        planUnavailableForLocation: 'Bu konumda mevcut değil',
        advancedOptions: 'Gelişmiş İsteğe Bağlı Seçenekler',
        rootPassword: 'Root Şifresi',
        rootPasswordPlaceholder: 'Şifre girin veya oluşturun',
        gatewayTokenPlaceholder: 'örn. a1b2c3d4e5f6...',
        autoGenerateGatewayTokenHint: 'Boş bırakılırsa otomatik oluşturulur.',
        autoGeneratePasswordHint: 'İsteğe bağlı. Boş bırakılırsa şifre olmaz.',
        regeneratePassword: 'Şifreyi yeniden oluştur',
        gatewayToken: 'Gateway Token',
        regenerateToken: 'Token yeniden oluştur',
        tokenCopied: 'Token kopyalandı.',
        sshKeyOptional: 'SSH Anahtarı',
        noSshKeyPasswordOnly: 'SSH anahtarı yok (yalnızca şifre)',
        noSshKeysConfigured: 'SSH anahtarı yapılandırılmamış',
        addSshKeyForPasswordlessLogin:
            'Şifresiz giriş için SSH anahtarı ekleyin',
        additionalStorageOptional: 'Ek Depolama',
        volumeStorage: 'Birim Depolama',
        vpsServer: 'VPS Sunucu',
        openClawPreinstalled: 'OpenClaw Önceden Yüklü',
        storageWithSize: 'Depolama',
        billingInterval: 'Faturalama',
        monthly: 'Aylık',
        yearly: 'Yıllık',
        yearlySaveBadge: '2 Ay Ücretsiz',
        yearlySavings: 'Tasarruf',
        totalMonthly: 'Aylık toplam',
        totalYearly: 'Yıllık toplam',
        creating: 'Oluşturuluyor...',
        proceedToPayment: 'Dağıtmak için ${{amount}} ödeyin',
        agreementNotice: 'Dağıtarak şunları kabul edersiniz:',
        selectServerToContinue: 'Devam etmek için bir sunucu seçin',
        selectLocationToContinue: 'Devam etmek için bir konum seçin',
        clawCreated: 'Claw oluşturuldu.',
        clawCreating: 'Claw oluşturuluyor, bu biraz zaman alabilir...',
        assigning: 'Atanıyor...',
        rootPasswordSaveThis: 'Root Şifresi (bunu kaydedin!)',
        sshCommandUsingKey: 'SSH Komutu (anahtarınızı kullanarak)',
        sshCommandWithPassword: 'SSH Komutu (şifre ile)',
        passwordCopied: 'Şifre kopyalandı.',
        planSpec: '{{cpu}} vCPU / {{memory}} GB RAM / {{disk}} GB SSD',
        volumeUnit: 'GB',
        volumeMin: '0 GB',
        volumeMax: '500 GB'
    },
    sshKeys: {
        title: 'SSH Anahtarları',
        description:
            'OpenClaw örneklerinize güvenli, şifresiz erişim için SSH anahtarlarınızı yönetin.',
        key: 'ssh anahtarı',
        keys: 'ssh anahtarı',
        keyCountDescription: '{{count}} {{label}}',
        addSshKey: 'SSH Anahtarı Ekle',
        howSshKeysWork: 'SSH anahtarı nasıl bağlanır?',
        step1: 'Bilgisayarınızda bir SSH anahtar çifti oluşturun (veya mevcut birini kullanın).',
        step2: 'Açık anahtarı buraya ekleyin.',
        step3: 'Yeni bir örnek oluştururken anahtarı seçin.',
        step4: 'Şununla bağlanın:',
        step4Command: 'ssh root@your-server-ip',
        step4Suffix: '- şifre gerekmez.',
        noSshKeysYet: 'SSH Anahtarı Yok',
        noSshKeysDescription:
            "Hesabınızda eklenmiş SSH anahtarı yok, istediğiniz zaman ekleyebilir ve dağıtılmış claw'larınıza bağlanabilirsiniz.",
        deleteConfirmation:
            'Bu SSH anahtarını silmek istediğinizden emin misiniz?',
        deleteKey: 'SSH Anahtarını Sil',
        deleteKeyConfirmation: 'Silmek istediğinizden emin misiniz:',
        sshKeyAddedSuccessfully: 'SSH anahtarı başarıyla eklendi.',
        addSshKeyModalTitle: 'SSH Anahtarı Ekle',
        addSshKeyModalDescription:
            'Şifresiz kimlik doğrulama için SSH anahtarı ekleyin',
        iHaveAnSshKey: 'Mevcut Anahtar',
        generateNewKey: 'Yeni Oluştur',
        name: 'Ad',
        namePlaceholder: 'örn: my-macbook',
        publicKey: 'Açık Anahtar',
        publicKeyPlaceholder: 'ssh-rsa AAAA... veya ssh-ed25519 AAAA...',
        publicKeyHint: 'Açık anahtarınızı şurada bulun:',
        publicKeyPath1: '~/.ssh/id_ed25519.pub',
        publicKeyPathOr: 'veya',
        publicKeyPath2: '~/.ssh/id_rsa.pub',
        important: 'Önemli:',
        dontHaveSshKey: 'SSH anahtarınız yok mu? Bir tane oluşturun:',
        sshKeygenCommand: 'ssh-keygen -t ed25519 -C "your-email@example.com"',
        keyName: 'Anahtar Adı',
        keyNamePlaceholder: 'Oluşturulan Anahtarım',
        importantAfterGenerating:
            'Oluşturduktan sonra özel anahtarınızı indirmeniz ve kaydetmeniz gerekir. Kaybederseniz kurtaramayız!',
        generateKeyPair: 'Anahtar Çifti Oluştur',
        orGenerateLocallyRecommended: 'Veya yerel olarak oluşturun (önerilen)',
        runThisInYourTerminal: 'Bunu terminalinizde çalıştırın:',
        thenSwitchToIHave:
            'Ardından "Mevcut Anahtar" sekmesine geçin ve açık anahtarı yapıştırın.',
        savePrivateKeyNow:
            'Özel anahtarınızı ŞİMDİ kaydedin! Bu pencereyi kapatmadan önce indirin. Tekrar göremeyeceksiniz.',
        privateKeyKeepSecret: 'Özel Anahtar (gizli tutun!)',
        downloadPrivateKey: 'Özel Anahtarı İndir',
        publicKeyWillBeSaved: 'Açık Anahtar (kaydedilecek)',
        savePublicKey: 'Açık Anahtarı Kaydet'
    },
    landing: {
        title: 'OpenClaw Dağıt. Tek tık. Tamam.',
        description:
            "OpenClaw'u tek tıkla kendi VPS'inize dağıtın. Tam root erişimi, küresel konumlar ve şeffaf fiyatlandırma ile kendi kendine barındırılabilir bulut barındırma.",
        badge: 'OpenClaw ve Hermes Bulutta',
        tutorialBadge: 'Cloud’da Nasıl Başlanır',
        tutorialVideoThumbnail: 'ClawHost eğitim videosu küçük resmi',
        clawhostGoLogoAlt: 'ClawHost Go',
        trustMrrBadgeAlt: 'TrustMRR verified revenue badge',
        macosPreviewTime: '22:12',
        heroTitle1: 'OpenClaw Dağıt.',
        heroTitle2: 'Tek tık. Tamam.',
        heroDescription:
            'OpenClaw ve Hermes ajanlarını bulutta veya yerel olarak tek tıkla dağıtın — ClawHost ile yapay zeka ajanlarınızı daha hızlı oluşturun, bağlayın ve ölçeklendirin.',
        selfHost: 'Açık Kaynak',
        startingPrice: 'Başlangıç',
        locations: 'Konumlar',
        servers: 'Sunucular',
        zeroCount: 'Sıfır',
        zeroConfig: 'Sıfır Yapılandırma',
        features: 'Özellikler',
        whyClawHost: 'Hepsi Bir Arada Özellikler',
        featuresDescription:
            'Neden denemeye değeriz, özellikler burada yalan söylemez.',
        zeroConfigDescription:
            'Saatlerce süren sunucu ve OpenClaw kurulumunu atlayın. Dakikalar içinde önceden yüklü ve hazır.',
        ownedData: '%100 Sahip Olunan Veri',
        ownedDataDescription:
            'Kendi sunucunuz, kendi verileriniz. Paylaşımlı altyapı yok, günlük yok, üçüncü taraf yok. 7/24 çevrimiçi.',
        fullSpeed: 'Tam Hız',
        fullSpeedDescription:
            'Özel VPS kaynakları, kısıtlama yok, tam bant genişliği ve yıldırım hızında internet demektir.',
        globalLocations: 'Küresel Konumlar',
        globalLocationsDescription:
            "OpenClaw ve Hermes'i birden fazla küresel bölgede dağıtın ve size en yakın konumu seçin.",
        fullSshAccess: 'Doğrudan SSH Erişimi',
        fullSshAccessDescription:
            'Sunucu terminalinize doğrudan platformdan erişin. Harici SSH istemcisi gerekmez.',
        secure: 'Güvenli',
        secureDescription:
            'SSL güvenlik açıklarından, kötü amaçlı yazılımlardan ve yaygın güvenlik tehditlerinden varsayılan olarak korumalı.',
        payAsYouGo: 'Basit Fiyatlandırma',
        payAsYouGoDescription:
            'İhtiyacınıza göre fiyatlandırma. Düşük kaliteli sunucular için zorunlu yüksek fatura yok. İstediğiniz zaman iptal edin.',
        bringYourCredits: 'Kendi kredilerini getir',
        bringYourCreditsDescription:
            "Kendi Anthropic API anahtarınızı veya Claude aboneliğinizi kullanın. Doğrudan Anthropic'e ödeme yapın — ek ücret yok.",
        customSubdomains: 'Çevrimiçi Erişim',
        customSubdomainsDescription:
            "Yerel ağları unutun. OpenClaw'unuza bir alt alan adıyla her yerden güvenli erişin.",
        autoUpdates: 'Sürüm Kontrolü',
        autoUpdatesDescription:
            'Tek tıkla herhangi bir OpenClaw veya Hermes sürümüne geçin. Her zaman güncel kalın veya gerektiğinde geri dönün.',
        openclawControl: 'Sunucu İzleme',
        openclawControlDescription:
            'OpenClaw ve Hermes sunucularınızı gerçek zamanlı metrikler, loglar ve tanılama ile izleyin.',
        clawHostControl: 'Tam Sunucu Erişimi',
        clawHostControlDescription:
            'Tarayıcı terminali, dosya gezgini, loglar, tanılama ve sürüm yönetimi — hepsi kontrol panelinizden.',
        multipleClaws: 'Birden Fazla Ajan',
        multipleClawsDescription:
            'Tek bir panelden birden fazla OpenClaw ve Hermes ajanını dağıtın ve yönetin. Büyüdükçe ölçeklendirin.',
        pricing: 'Fiyatlandırma',
        simpleTransparentPricing: 'Basit, Şeffaf Fiyatlandırma',
        pricingDescription:
            'İhtiyaçlarınıza uygun bir plan seçin. Gizli ücret yok.',
        planColumn: 'Sunucu',
        vCpuColumn: 'vCPU',
        ramColumn: 'RAM',
        storageColumn: 'Depolama',
        monthlyColumn: 'Fiyat',
        tierShared: 'Paylaşımlı vCPU',
        tierDedicated: 'Özel vCPU',
        tierArm: 'Ampere (ARM)',
        tierRegular: 'Normal Performans',
        tierHighPerformance: 'Yüksek Performans',
        tierHighFrequency: 'Yüksek Frekans',
        recommended: 'Önerilen',
        perMonth: '/ay',
        perYear: '/yıl',
        pricePerMonth: '${{price}}/mo',
        pricePerYear: '${{price}}/yr',
        volumePricePerMonth: '+${{price}}/mo',
        startingPriceValue: '${{price}}/mo',
        deploy: 'Dağıt',
        select: 'Seç',
        selectPlanLabel: '{{plan}} planını seç',
        deployPlanLabel: '{{plan}} planını dağıt',
        openClawPreinstalled: 'OpenClaw Önceden Yüklü',
        unlimitedBandwidth: 'Sınırsız Bant Genişliği',
        rootSshAccess: 'Tam Root SSH Erişimi',
        onlineAllDay: '7/24 Çevrimiçi',
        showAllPlans: 'Tüm planları göster',
        simplePricing: 'Basitleştirilmiş',
        planStarter: 'Starter',
        planStarterDesc: 'Kişisel projeler ve denemeler için',
        planGrowth: 'Growth',
        planGrowthDesc: 'Üretim iş yükleri için',
        planPro: 'Pro',
        planProDesc: 'Büyüyen işletmeler için',
        planBusiness: 'Business',
        planBusinessDesc: 'Büyük ölçekli operasyonlar için',
        featureCpu: '{{count}} vCPU',
        featureRam: '{{count}} GB RAM',
        featureDisk: '{{count}} GB SSD',
        choosePlan: 'Plan seç',
        mostPopular: 'En popüler',
        featurePreinstalled: 'Ajan önceden yüklü',
        featureBandwidth: 'Sınırsız bant genişliği',
        featureSsh: 'Root SSH erişimi',
        featureUptime: '7/24 çevrimiçi',
        featureDedicatedCpu: 'Özel CPU',
        featureEmailSupport: 'E-posta desteği',
        fastInternet: 'Hızlı internet',
        emailSupport: 'E-posta desteği',
        faqTitle: 'Sorular',
        frequentlyAskedQuestions: 'Sık Sorulan Sorular',
        faqDescription: 'Her sık sorulan soru, cevaplanmış.',
        faq1Question: 'ClawHost nedir?',
        faq1Answer:
            "ClawHost, OpenClaw'u herkes için erişilebilir kılmak amacıyla oluşturulmuş bir platformdur. Hem teknik olmayan kullanıcıların hem de geliştiricilerin altyapı yönetmeden OpenClaw çalıştırmasını sağlar. Sunucuları, çalışma süresini, güvenliği ve bakımı biz yönetiyoruz — siz sadece OpenClaw'u kullanın.",
        faq2Question: 'OpenClaw nedir?',
        faq2Answer:
            'OpenClaw, yapay zeka araçlarınız ve hizmetleriniz için kendi kendine barındırılan güvenli bir erişim katmanıdır. Güvenlik ve performans için önceden yapılandırılmıştır, böylece dağıtabilir ve anında bağlanabilirsiniz.',
        faqHermesQuestion: 'Hermes nedir?',
        faqHermesAnswer:
            'Hermes; web tarama, takvim yönetimi, çoklu model akıl yürütme ve tarayıcı otomasyonu ile donatılmış otonom bir yapay zeka ajanıdır. Her ClawHost sunucusunda OpenClaw ile birlikte önceden yüklü gelir.',
        faq3Question:
            'Bu, diğer yapay zeka araçlarından veya barındırılan platformlardan nasıl farklı?',
        faq3Answer:
            'Barındırılan yapay zeka araçlarının aksine, ClawHost size OpenClaw ve Hermes yüklü gerçek bir sunucu sunar. Altyapıya sahip olur, her şeyi kontrol eder ve paylaşımlı bir platform veya modelle sınırlanmazsınız.',
        faq4Question: 'Teknik bilgiye ihtiyacım var mı?',
        faq4Answer:
            "Hayır. Tüm altyapı, kurulum ve bakımı biz yönetiyoruz. OpenClaw'u arayüzü üzerinden yapılandırabilir ve yönetebilir ve kullanımı özelleştirebilirsiniz — sunuculara veya altyapıya dokunmadan.",
        faq5Question: 'Hangi konumlar mevcut?',
        faq5Answer:
            "ABD, Avrupa ve daha fazlası dahil olmak üzere dünya genelinde birden fazla sunucu konumu sunuyoruz. Gerekirse OpenClaw'u farklı bölgelerdeki birden fazla sunucuda dağıtabilirsiniz.",
        faq6Question: 'Maliyeti ne kadar?',
        faq6Answer:
            'Fiyatlar seçtiğiniz sunucuya bağlıdır. Giriş seviyesinden yüksek performansa kadar birden fazla sunucu seçeneğiyle, ihtiyaçlarınıza ve bütçenize uygun olanı seçersiniz.',
        faq7Question:
            'Ajanıma doğrudan bir bağlantı üzerinden erişebilir miyim?',
        faq7Answer:
            "Evet. Alt alan adı URL'si üzerinden OpenClaw erişiminin yanı sıra, sunucuya ve temel altyapısına tam erişiminiz vardır, bu da ihtiyacınız olan her şeyi özelleştirme ve çalıştırma özgürlüğü verir.",
        comparison: 'Karşılaştırma',
        comparisonTitle: 'Nasıl Farklıyız',
        comparisonDescription:
            'Yalnızca bir karşılaştırılabilir platform var ve yaklaşımımız sınırlamalar yerine gerçek sunuculara ve tam sahipliğe odaklanıyor.',
        others: 'Diğerleri',
        comparisonOpenClawUs: "OpenClaw'a tam erişim",
        comparisonOpenClawOthers: 'Yalnızca sohbet, yönetim yok',
        comparisonPricingUs: 'Şeffaf fiyatlandırma, net özellikler',
        comparisonPricingOthers: 'Gizli özellikler, belirsiz fiyatlandırma',
        comparisonOwnershipUs: 'Sunucunuzun tam sahibisiniz',
        comparisonOwnershipOthers: 'Hiçbir şeyin sahibi değilsiniz',
        comparisonSubdomainUs: 'Alt alan adı ile erişim',
        comparisonSubdomainOthers: 'Yalnızca üçüncü taraf platformlarla erişim',
        comparisonInfraUs: 'İsteğe bağlı altyapı',
        comparisonInfraOthers: 'Sınırlı sunucular',
        comparisonDataUs: 'Verilerinizin sahibisiniz',
        comparisonDataOthers: 'Verilerinizin sahibi değilsiniz',
        comparisonMultipleUs: 'Birden fazla OpenClaw ve Hermes ajanı',
        comparisonMultipleOthers: 'Yalnızca tek OpenClaw',
        comparisonOpenSourceUs: 'Tamamen açık kaynak',
        comparisonOpenSourceOthers: 'Kapalı kaynak',
        comparisonExportUs: "OpenClaw ve Hermes'i her yere taşıyın",
        comparisonExportOthers: 'Satıcı bağımlılığı',
        comparisonProvidersUs: 'Birden fazla sunucu sağlayıcısı',
        comparisonProvidersOthers: 'Yalnızca tek sağlayıcı',
        comparisonVersionUs: 'Tek tıkla sürüm değiştirme',
        comparisonVersionOthers: 'Yalnızca manuel güncellemeler',
        comparisonTerminalUs: 'Yerleşik web terminali',
        comparisonTerminalOthers: 'SSH istemcisi gerekli',
        seeFullComparison: 'Tam Karşılaştırmayı Görün',
        comparisonCtaText:
            'SimpleAgent, MyAgent.ai ve daha fazlasıyla özellik özellik karşılaştırıyoruz.',
        selfHostInstead: 'Kendi Sunucunda Barındır'
    },
    blog: {
        readingTime: '{{minutes}} dk okuma',
        ctaTitle: "OpenClaw ve Hermes'i tek tıkla dağıtın",
        ctaDescription:
            "OpenClaw ve Hermes önceden yüklü dedike bir sunucu edinin. Tam root erişimi, küresel konumlar ve dakikalar içinde hazır. Her zaman size aittir. 25 $'dan başlar.",
        ctaDeploy: 'Ajan dağıt',
        ctaGitHub: "GitHub'da Görüntüle"
    },
    changelog: {
        title: 'Değişiklik Günlüğü',
        description:
            'ClawHost güncellemelerini, yeni özelliklerini ve iyileştirmelerini takip edin.',
        subtitle:
            "ClawHost'un tüm güncellemeleri, yeni özellikleri ve iyileştirmeleri.",
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
            'Preview tab to embed and interact with your OpenClaw instance directly in the dashboard',
        release16Feature2:
            'Monitor tab with live server metrics including CPU, memory, disk, and network usage',
        release16Feature3:
            'Storage tab to view attached volumes configured during instance creation',
        release16Feature4:
            'Security tab to manage gateway token, root password, SSH keys, and host key fingerprint',
        release16Feature5:
            'Billing tab with per-instance subscription details, billing history, and manage billing access',
        release16Feature6:
            'Server tab with IP address, location, server type, SSH command, and reinstall option',
        release16Feature7:
            'Server tab with IP address, location, server type, SSH command, and reinstall option',
        release16Feature8:
            'Server customizations with emoji icons and background colors for easy identification',
        release16Feature9:
            'New simplified UI with streamlined navigation, search agents, and a cleaner experience',
        release15Date: '11 Nisan 2026',
        release15Title: 'Sadeleştirme ve özel alt alan adları',
        release15Description:
            "Yönetilen özelliklerin OpenClaw'a taşınmasıyla platform sadeleştirildi, playground görünümü kaldırıldı ve değiştirilebilir özel alt alan adları tanıtıldı.",
        release15Feature1:
            "Yönetilen özellikler sadeleştirildi ve OpenClaw'a taşındı, artık ClawHost sohbet, ajanlar, kanallar, değişkenler ve beceriler yok",
        release15Feature2:
            'Enhanced file explorer with full editing support, 100+ language syntax highlighting, and export as .zip',
        release15Feature3:
            'Removed playground view for a cleaner, more focused dashboard experience',
        release15Feature4:
            'Changeable custom subdomains, update your claw subdomain to your loved one',
        release14Date: '1 Nisan 2026',
        release14Title: 'Hetzner geçişi, ortaklık sistemi ve yeni diller',
        release14Description:
            'En iyi fiyatlandırma ve performans için tüm altyapı Hetzner üzerinde merkezileştirildi, %15 komisyonlu ortaklık sistemi başlatıldı, 10 yeni dil eklendi ve kararlı sürüm desteği için dahili araçlar oluşturuldu.',
        release14Feature1:
            'DigitalOcean ve Vultr kaldırıldı — tüm altyapı artık yalnızca Hetzner üzerinde çalışıyor, sınırsız kapasite ve sağlayıcı tarafı sınırlamaları yok',
        release14Feature2:
            'Kullanıcıların yönlendirilen her siparişte %15 komisyon kazanmasını sağlayan ortaklık sistemi',
        release14Feature3:
            '10 yeni dil eklendi: Çince, Hintçe, Arapça, Rusça, Japonca, Türkçe, İtalyanca, Lehçe, Felemenkçe ve Portekizce',
        release14Feature4:
            'Mevcut OpenClaw sürümleri için kararlı özellik desteği sağlayan dahili araçlar, eski sürümler desteklenmemektedir',
        release12Date: '14 Mart 2026',
        release12Title: 'Yıllık Planlar, Ses Modu ve Daha Fazlası',
        release12Description:
            '2 ay ücretsiz yıllık abonelikler, ses modu, örnek yeniden yükleme ve ClawHost Go için ilk açılış sayfası.',
        release12Feature1:
            'ClawHost Go için açılış sayfası, ClawHost ile yerel barındırma',
        release12Feature2:
            'Yıllık abone olduğunuzda 2 ay ücretsiz yıllık abonelik desteği',
        release12Feature3:
            "ClawHost'ta barındırılan OpenClaw ajanlarıyla etkileşim için Ses Modu",
        release12Feature4:
            "Temiz başlangıç için örneğinizde OpenClaw'u yeniden yükleyin, günde bir kez kullanılabilir",
        release11Date: '28 Şubat 2026',
        release11Title:
            'Metinden Konuşmaya, Terminal, Sohbet Sekmeleri ve Dosya Gezgini',
        release11Description:
            "Metinden konuşmaya ile ajan yanıtlarını dinleyin, terminal üzerinden VPS'inizle doğrudan etkileşime geçin, kenar çubuğu görünüm sekmeleriyle sohbetlerde daha hızlı gezinin ve geliştirilmiş dosya gezginiyle dosyaları keşfedin.",
        release11Feature1: "Playground'da ajan mesajlarında metinden konuşmaya",
        release11Feature2:
            'Panelden doğrudan VPS örneklerinizle etkileşim için terminal',
        release11Feature3:
            'Kolay erişim ve gezinme için sohbet kenar çubuğu görünüm sekmeleri',
        release11Feature4:
            'Dosyalar arasında arama yapmak için arama çubuğuyla dosya gezgini iyileştirmeleri',
        release11Feature5:
            'Mesaj zaman damgalarının gerçek zamanı yansıtmaması düzeltildi',
        release10Date: '23 Şubat 2026',
        release10Title: 'Özellik İstekleri, Dosya Gezgini ve Hata Düzeltmeleri',
        release10Description:
            'Topluluk odaklı özellik istekleri, genişletilmiş dosya düzenleme desteği ve çeşitli hata düzeltmeleri.',
        release10Feature1:
            'OpenClaw ajanları tarafından otomatik olarak yönetilen ve yayınlanan özellik istekleri',
        release10Feature3:
            'Model sağlayıcı değiştirmenin yansımaması ve hâlâ ilk modeli kullanması düzeltildi',
        release10Feature4:
            'Platform genelinde çeşitli iyileştirmeler ve hata düzeltmeleri',
        release10Feature5:
            'TypeScript, Markdown ve düz metin dosyaları artık Dosya Gezgininde düzenlenebilir',
        release9Date: '21 Şubat 2026',
        release9Title:
            'Karşılaştırmalar, Playground Yeniden Düzenleme ve Daha Fazlası',
        release9Description:
            'Rakip karşılaştırma sayfaları, playground özellik yeniden yapılandırması, çoklu dil desteği ve genel performans iyileştirmeleri.',
        release9Feature1: 'Koyu ve açık tema desteği',
        release9Feature2:
            'İngilizce, Fransızca, İspanyolca ve Almanca ile çoklu dil desteği',
        release9Feature3:
            'Rakiplere karşı tam karşılaştırmalı karşılaştırma sayfaları',
        release9Feature4:
            'OpenClaw Sürümleri, tek tıkla yükseltin veya herhangi bir sürümü anında yükleyin',
        release9Feature5:
            'Playground özellik yapısının yeniden düzenlenmesi ve sadeleştirilmesi',
        release9Feature6:
            'Performans, kararlılık ve yanıt verme iyileştirmeleri',
        release8Date: '18 Şubat 2026',
        release8Title: 'Açık Tema, Performans ve Kararlılık',
        release8Description:
            'Açık tema desteği, performans ve deneyim iyileştirmeleri ve kararlılık ve yanıt verme geliştirmeleri.',
        release8Feature1: 'Açık, koyu ve sistem tema modları',
        release8Feature2: 'Performans ve deneyim iyileştirmeleri',
        release8Feature3: 'Kararlılık ve yanıt verme geliştirmeleri',
        release7Date: '16 Şubat 2026',
        release7Title: 'Sohbet Yeniden Düzenleme ve Sesli Giriş',
        release7Description:
            'Sesli etkileşim ve ajanlar için dosya ekleri ile büyük sohbet ve playground iyileştirmeleri.',
        release7Feature1:
            'Daha akıcı, daha duyarlı bir deneyim için sohbet ve playground yeniden düzenlemesi',
        release7Feature2:
            'Sohbetlerle sesli etkileşim, doğrudan tarayıcıda konuşma kaydedin ve yazıya dökün',
        release7Feature4:
            'Ajanlar için ek görünümü ve kullanımı, sohbette resim ve belge gönderin',
        release6Date: '16 Şubat 2026',
        release6Title: 'Ajan Sohbeti',
        release6Description:
            'OpenClaw ajanlarınız üzerinde tam kontrol. Her şeyi doğrudan panelden yönetin ve sohbet edin.',
        release6Feature3:
            "Playground'dan ajanlarınızla sohbet edin, herhangi bir ajanla gerçek zamanlı etkileşime geçin",
        release6Feature4:
            'Google veya GitHub ile giriş yapın, e-posta kodları olmadan hızlı, güvenli kimlik doğrulama',
        release1Date: '8 Şubat 2026',
        release1Title: 'İlk Sürüm',
        release1Description:
            "ClawHost'un ilk resmi sürümü. OpenClaw'u tek tıkla kendi VPS'inize dağıtın.",
        release1Feature1: 'Tek tıkla OpenClaw dağıtımı',
        release1Feature2:
            "Claw'ları yönetmek, örnekleri başlatmak, durdurmak, yeniden başlatmak ve silmek için panel",
        release1Feature3:
            'Özel vCPU, RAM ve depolama seçenekleriyle 18 sunucu planı',
        release1Feature4: 'ABD, Avrupa ve Asya genelinde 6 sunucu konumu',
        release1Feature5: 'Şifresiz sunucu erişimi için SSH anahtar yönetimi',
        release1Feature6: "10 TB'a kadar ek birim depolama desteği",
        release1Feature7: 'Sihirli bağlantı kimlik doğrulaması, şifre gerekmez',
        release1Feature8:
            "Güvenli alt alan adları aracılığıyla OpenClaw'a çevrimiçi erişim",
        release1Feature9:
            'Şeffaf sunucu başına fiyatlandırma ile ödeme entegrasyonu',
        release1Feature10: 'Faturalama geçmişi ve fatura yönetimi',
        release1Feature11:
            'OpenClaw önceden yüklü ve yapılandırılmış otomatik hazırlama',
        release2Date: '8 Şubat 2026',
        release2Title: 'Changelog ve Daha Fazlası',
        release2Description: 'ClawHost hakkında güncel kalmanın yeni bir yolu.',
        release2Feature1:
            'Tüm platform güncellemelerini ve sürümlerini takip etmek için değişiklik günlüğü sayfası',
        release3Date: '10 Şubat 2026',
        release3Title: 'Sunucu Bilgileri',
        release3Description:
            'Sunucularınız üzerinde daha derin görünürlük ve kontrol, doğrudan panelden.',
        release3Feature1:
            'Doğrudan panelde gerçek zamanlı sunucu günlükleri akışı',
        release3Feature2:
            'Servis sorunları için tek tıkla otomatik onarımlı sunucu tanılama',
        release3Feature3:
            'Sunucu yapılandırma dosyaları için yerleşik dosya gezgini ve JSON düzenleyici',
        release4Date: '14 Şubat 2026',
        release4Title: 'Ajanlar ve Veri Dışa Aktarma',
        release4Description:
            'Ajan playground, çoklu ajan yönetimi ve OpenClaw örnekleriniz için taşınabilir veri dışa aktarma.',
        release4Feature1:
            'Tek tıkla ajan playground ve genel bakış, birden fazla ajan ekleme ve yönetme',
        release4Feature2:
            "OpenClaw'unuzu taşınabilir zip arşivi olarak dışa aktarın",
        release4Feature3:
            "Claw'ların ve ajanların grafik tabanlı görselleştirmesiyle etkileşimli playground",
        release4Feature4:
            'Birleşik panel düzeni lehine ızgara ve liste görünümü geçişi kaldırıldı'
    },
    clawDetail: {
        noAgentsYet: 'Ajan Yok',
        noAgentsDescription: 'Etkileşime geçmek için ilk Ajanınızı dağıtın.',
        collapseSidebar: 'Kenar çubuğunu daralt',
        expandSidebar: 'Kenar çubuğunu genişlet',
        selectClaw: 'Bir Ajan Seçin',
        selectClawDescription:
            'Ayrıntılarını görüntülemek için kenar çubuğundan bir Ajan seçin.',
        closeDetails: 'Kapat',
        tabOverview: 'Genel Bakış',
        overviewTitle: 'Ağ Geçidi Genel Bakışı',
        overviewGatewayStatus: 'Ağ Geçidi Durumu',
        overviewOnline: 'Çevrimiçi',
        overviewOffline: 'Çevrimdışı',
        overviewVersion: 'Sürüm',
        overviewUptime: 'Çalışma Süresi',
        overviewSessions: 'Oturumlar',
        overviewSessionsCount: '{{count}} aktif',
        overviewNoSessions: 'Aktif oturum yok',
        overviewSessionName: 'Oturum',
        overviewSessionModel: 'Model',
        overviewSessionMessages: 'Mesajlar',
        overviewSessionLastActive: 'Son Aktivite',
        overviewModels: 'Modeller',
        overviewError: 'Genel bakış yüklenemedi!',
        overviewErrorDescription:
            'OpenClaw ağ geçidine bağlanılamadı. Lütfen örneğin çalışıp çalışmadığını kontrol edin.',
        overviewUnsupportedTitle: 'Genel bakış desteklenmiyor',
        overviewUnsupportedDescription:
            'OpenClaw sürümünüz genel bakış özelliğini desteklemiyor. Lütfen en son sürüme güncelleyin.',
        overviewHermesTitle: 'Hermes terminalde çalışır',
        overviewHermesDescription:
            'Hermes bir TUI ajanıdır — Terminal sekmesini açın ve oturum başlatmak için `hermes` komutunu çalıştırın. Dosyalar ve Sürümler sekmeleri yapılandırmayı düzenlemenize ve yükseltmenize olanak tanır.',
        overviewHermesOpenTerminal: 'Terminali aç',
        viewDocs: 'Belgeleri görüntüle',
        overviewUptimeDays: '{{days}}g {{hours}}s {{minutes}}d',
        overviewUptimeHours: '{{hours}}s {{minutes}}d',
        overviewUptimeMinutes: '{{minutes}}d',
        overviewService: 'Hizmet',
        overviewServiceActive: 'Aktif',
        overviewServiceInactive: 'Pasif',
        overviewPort: 'Port 18789',
        overviewPortOpen: 'Dinliyor',
        overviewPortClosed: 'Kapalı',
        overviewReady: 'Hazır',
        overviewNotReady: 'Hazır değil',
        overviewConfiguration: 'Yapılandırma',
        overviewBrowser: 'Browser',
        overviewCommands: 'Kabuk Komutları',
        overviewTools: 'Araçlar',
        overviewSubdomain: 'Alt alan adı',
        overviewInstanceStatus: 'Örnek durumu',
        overviewModel: 'Model',
        overviewAgents: 'Ajanlar',
        overviewMemoryStatus: 'Bellek',
        overviewHeartbeat: 'Heartbeat',
        overviewEvents: 'Olaylar',
        overviewProbes: 'Probes',
        overviewPlugins: 'Plugins',
        tabPreview: 'Önizleme',
        previewNotEnabled: 'Bu örnek için önizleme etkin değil.',
        previewNotEnabledDescription:
            'Ajanınızı doğrudan panele gömmek için önizlemeyi etkinleştirin.',
        previewEnable: 'Önizlemeyi Etkinleştir',
        previewEnabling: 'Etkinleştiriliyor...',
        previewEnabled: 'Önizleme etkinleştirildi.',
        previewEnableFailed: 'Önizleme etkinleştirilemedi!',
        previewEnableCanceledNavigation:
            'Önizleme etkinleştirme yarıda kesildi çünkü sayfadan ayrıldınız.',
        previewError: 'Önizleme yüklenemedi.',
        previewErrorDescription: 'Ajan çevrimdışı veya erişilemez olabilir.',
        previewRetry: 'Tekrar dene',
        tabInfo: 'Bilgi',
        tabLogs: 'Günlükler',
        tabTerminal: 'Terminal',
        terminalConnecting: 'Terminale bağlanılıyor...',
        terminalDisconnected: 'Terminal bağlantısı kesildi.',
        terminalError: 'Terminale bağlanılamadı!',
        terminalReconnect: 'Yeniden Bağlan',
        tabDisabledConfiguring:
            'Örnek yapılandırmayı bitirdiğinde kullanılabilir.',
        tabDisabledAwaitingPayment: 'Ödeme işlendikten sonra kullanılabilir.',
        creatingTitle: 'Ajanınız kuruluyor',
        creatingDescription:
            'Bu genellikle bir iki dakika sürer. Bu sayfayı güvenle kapatabilir ve daha sonra geri dönebilirsiniz.',
        creatingDescriptionLocal:
            'Bu genellikle kısa sürer. İşlem bitene kadar uygulamayı açık tutun.',
        configuringTitle: 'OpenClaw kuruluyor',
        configuringTitleHermes: 'Hermes kuruluyor',
        loadingTipHermes1:
            'Hermes bir TUI ajanıdır — açıldıktan sonra onunla sohbet etmek için Terminal sekmesini açın.',
        loadingTipHermes2:
            'Model sağlayıcılarını (OpenRouter, Anthropic vb.) Dosyalar sekmesinden ~/.hermes/.env içinde yapılandırın.',
        loadingTipHermes3:
            "Telegram, Discord veya Slack'ı Terminalden `hermes gateway install` ile bağlayın.",
        configuringDescription:
            'Bu genellikle bir iki dakika sürer. Bu sayfayı güvenle kapatabilir ve daha sonra geri dönebilirsiniz.',
        configuringDescriptionLocal:
            'Ajan çalışma zamanı yerel olarak kuruluyor. İşlem bitene kadar uygulamayı açık tutun.',
        awaitingPaymentTitle: 'Ödeme bekleniyor',
        awaitingPaymentDescription:
            'Ajanınızın sağlanmasını başlatmak için ödemeyi tamamlayın. Bu rezervasyon bir saat içinde sona erer.',
        awaitingPaymentAction: 'Ödemeyi tamamla',
        loadingTip1:
            'Tek bir OpenClaw içinde birden fazla ajan çalıştırabileceğinizi biliyor muydunuz?',
        loadingTip2: "OpenClaw'un açık kaynak olduğunu biliyor muydunuz?",
        loadingTip3:
            'ClawHost, tek tıkla OpenClaw barındırmaya izin veren ilk projedir.',
        loadingTip4:
            'Ajanınıza SSH veya yerleşik terminal aracılığıyla erişebilirsiniz.',
        loadingTip5: 'Ajanınız otomatik olarak kendi alt alan adını alır.',
        loadingTip6:
            "Ajanınızın simgesini ve adını istediğiniz zaman Ayarlar'dan özelleştirebilirsiniz.",
        loadingTip7: 'Ajanınıza giden tüm trafik TLS ile şifrelenir.',
        loadingTip8:
            'İzleme sekmesinde CPU, bellek ve disk kullanımını izleyebilirsiniz.',
        loadingTip9:
            "Yardıma mı ihtiyacınız var? Discord'daki topluluğumuza katılın.",
        loadingTip10:
            'Tüm ajan yapılandırmanızı yedek olarak dışa aktarabilirsiniz.',
        loadingTip11:
            'SSH anahtarları yeniden yükleme yapmadan çalışan örneklere uygulanabilir.',
        loadingTip12:
            'Güvenlik sekmesinden root şifrenizi ve ağ geçidi jetonunuzu değiştirebilirsiniz.',
        loadingTip13:
            'ClawHost, Avrupa ve ABD genelinde birden fazla bölgede sunucuları destekler.',
        tabSettings: 'Ayarlar',
        featureVersionUnsupported:
            '{{feature}} {{version}} üzerinde desteklenmiyor',
        featureVersionUnsupportedDescription:
            'Bu sürümde arayüzümüz üzerinden {{feature}} yönetimini desteklemiyoruz. SSH, Terminal veya OpenClaw kontrol paneli aracılığıyla yönetebilirsiniz.',
        featureVersionUnsupportedButton: 'Sürümlere Git',
        featureVersionUnsupportedSupported: 'Desteklenen sürümler:',
        featureVersionUnsupportedNewer: 'daha yeni sürümler',
        tabVersions: 'Sürümler',
        tabFiles: 'Dosya Gezgini',
        tabMonitor: 'İzleme',
        tabVolumes: 'Depolama',
        tabSecurity: 'Güvenlik',
        securitySSHKey: 'SSH Anahtarı',
        securitySSHKeyHint:
            'Çalışan örneğe uygulanır ve yeniden yüklerken kullanılır.',
        securityPassword: 'Root Şifresi',
        securityGatewayToken: 'Ağ Geçidi Jetonu',
        securityHostKey: 'Ana Bilgisayar Anahtar Parmak İzi',
        securityRotatePassword: 'Şifreyi Değiştir',
        securityRotateToken: 'Jetonu Değiştir',
        securityRandomize: 'Rastgele Oluştur',
        securitySavePassword: 'Şifreyi Kaydet',
        securitySaveToken: 'Jetonu Kaydet',
        volumesTitle: 'Birimler',
        volumesCount: '{{count}} birim',
        volumesEmpty: 'Bağlı birim yok.',
        volumesEmptyDescription:
            'Bu örneğin kalıcı depolama birimi bulunmuyor.',
        volumesReadOnly:
            'Depolama yalnızca örnek oluşturma sırasında eklenebilir. Depolama eklemek için istenen birim boyutuyla yeni bir örnek dağıtın veya',
        volumesContactSupport: 'destek ekibi',
        metricsTitle: 'Sunucu Metrikleri',
        metricsLive: 'Canlı',
        metricsCpu: 'CPU Kullanımı',
        metricsMemory: 'Bellek Kullanımı',
        metricsDisk: 'Disk Kullanımı',
        metricsNetwork: 'Ağ',
        metricsLoadAvg: 'Ortalama Yük',
        metricsProcesses: 'Üst İşlemler',
        metricsUptime: 'Çalışma Süresi',
        metricsUsed: 'Kullanılan',
        metricsAvailable: 'Kullanılabilir',
        metricsTotal: 'Toplam',
        metricsReceived: 'Alınan',
        metricsSent: 'Gönderilen',
        metricsLoad1: '1 dk',
        metricsLoad5: '5 dk',
        metricsLoad15: '15 dk',
        metricsProcessPid: 'PID',
        metricsProcessUser: 'Kullanıcı',
        metricsProcessCpu: 'CPU %',
        metricsProcessMem: 'MEM %',
        metricsProcessCommand: 'Komut',
        metricsError: 'Metrikler yüklenemedi!',
        metricsErrorDescription:
            'Metrikleri almak için sunucuya bağlanılamadı. Lütfen örneğin çalışır durumda olduğunu kontrol edin.',
        metricsAutoRefresh: 'Her {{seconds}} saniyede otomatik yenileme',
        tabBilling: 'Billing',
        billingEmpty: 'No billing history for this instance.',
        tabServer: 'Sunucu',
        serverIpAddress: 'IP Adresi',
        reinstallDescription:
            "Bu sunucuda {{agentName}}'u yeniden kurun. Bu, kurulumu sıfırlar ancak verilerinizi korur. Bunu yalnızca gerekli olduğunda yapın.",
        versionsSearch: 'Sürüm ara...',
        versionsSearchCount: '{{count}} sürüm ara...',
        versionsEmpty: 'Sürüm bulunamadı',
        versionsEmptyDescription: 'Aramanızla eşleşen sürüm yok.',
        versionsErrorDescription:
            'Sürümler yüklenemedi. Lütfen bağlantınızı kontrol edip tekrar deneyin!',
        versionsChangelog: 'npm üzerinde değişiklik günlüklerini görüntüle',
        versionCurrent: 'Mevcut',
        versionLatest: 'En Son',
        updateAvailable: 'A newer version of OpenClaw is available',
        updateAvailableDescription:
            'A new version of OpenClaw ({{version}}) is available for your instance.',
        updateAvailableDescriptionHermes:
            'A new version of Hermes ({{version}}) is available for your instance.',
        goToVersions: 'Go to Versions',
        versionInstall: 'Yükle',
        versionInstalling: 'Yükleniyor...',
        versionInstallSuccess: 'Sürüm {{version}} başarıyla yüklendi.',
        versionInstallFailed: 'Sürüm yüklenemedi!',
        installVersionCanceledNavigation:
            'Sürüm yüklemesi yarıda kesildi çünkü sayfadan ayrıldınız.',
        versionDownloads: '{{count}} indirme',
        versionChangelog: 'Değişiklik Günlüğü',
        versionOutdated: 'Eski',
        versionSupported: 'Desteklenen',
        versionSupportedTooltip:
            "Bu sürüm OpenClaw'ı arayüz üzerinden yönetmenize olanak tanır",
        versionInstallConfirmTitle: 'Sürüm {{version}} Yükle',
        versionInstallConfirmDescription:
            'Sürüm değiştirmek beklenmedik davranışlara neden olabilir veya ek manuel yapılandırma gerektirebilir, özellikle henüz tam olarak doğrulanmamış daha yeni sürümler için. Devam etmek istediğinizden emin misiniz?',
        settingsIcon: 'Simge',
        settingsIconDescription: 'Ajan simgesini değiştirmek için tıklayın.',
        settingsIconRandomize: 'Rastgele',
        settingsIconRemove: 'Simgeyi kaldır',
        settingsBackground: 'Arka plan',
        settingsBackgroundReset: 'Sıfırla',
        settingsName: 'Ad',
        settingsNamePlaceholder: 'Claw adını girin',
        settingsNameDescription: 'Yalnızca harf, rakam ve tire.',
        subdomain: 'Alt Alan Adı',
        subdomainPlaceholder: 'Alt alan adı girin',
        subdomainDescription:
            'Küçük harf ve rakamlar, {{min}}-{{max}} karakter.',
        subdomainInvalid:
            'Yalnızca {{min}}-{{max}} küçük harf ve rakam kullanın.',
        subdomainUpdated: 'Alt alan adı başarıyla güncellendi.',
        subdomainUpdateFailed: 'Alt alan adı güncellenemedi!',
        subdomainInUse:
            'Bu alt alan adı başka bir claw tarafından kullanılıyor!',
        settingsDetails: 'Detaylar',
        settingsDangerZone: 'Tehlikeli Bölge',
        settingsDangerZoneDescription:
            'Örneğiniz mevcut fatura döneminizin sonunda silinecektir.',
        settingsDangerZoneDescriptionLocal:
            'Bu, ajanı ve tüm dosyalarını kalıcı olarak silecektir.',
        settingsScheduledDeletionDescription:
            '{{date}} tarihinde silinmek üzere planlandı. Örneğinizi çalışır ve aboneliğinizi aktif tutmak için iptal edin.',
        settingsSave: 'Kaydet',
        settingsSaving: 'Kaydediliyor...',
        settingsUpdated: 'Ayarlar güncellendi.',
        settingsUpdateFailed: 'Ayarlar güncellenemedi!',
        saveCanceledNavigation:
            'Kaydetme yarıda kesildi çünkü sayfadan ayrıldınız.',
        savePasswordCanceledNavigation:
            'Parola kaydetme yarıda kesildi çünkü sayfadan ayrıldınız.',
        saveGatewayTokenCanceledNavigation:
            'Ağ geçidi belirteci kaydetme yarıda kesildi çünkü sayfadan ayrıldınız.',
        saveSSHKeyCanceledNavigation:
            'SSH anahtarı kaydetme yarıda kesildi çünkü sayfadan ayrıldınız.',
        mockLogStarting: 'OpenClaw ajanı başlatılıyor...',
        mockLogLoadingModel: 'Model yükleniyor: claude-sonnet-4-5',
        mockLogAgentReady: "Ajan port 3000'de hazır",
        mockLogConnected: 'Ağ geçidine bağlandı',
        mockLogsContent:
            '2026-02-14T10:23:41Z {{starting}}\n2026-02-14T10:23:42Z {{loadingModel}}\n2026-02-14T10:23:43Z {{agentReady}}\n2026-02-14T10:23:44Z {{connected}}\n2026-02-14T10:24:01Z {{requestReceived}}\n2026-02-14T10:24:03Z {{responseSent1}}\n2026-02-14T10:25:12Z {{requestReceived}}\n2026-02-14T10:25:14Z {{responseSent2}}\n2026-02-14T10:26:30Z {{healthCheck}}',
        mockLogRequestReceived: 'İstek alındı: /chat',
        mockLogResponseSent1: 'Yanıt gönderildi (1.2s)',
        mockLogResponseSent2: 'Yanıt gönderildi (1.8s)',
        mockLogHealthCheck: 'Sağlık kontrolü geçti'
    },
    privacy: {
        title: 'Gizlilik Politikası',
        description:
            "ClawHost'un kişisel verilerinizi nasıl topladığını, kullandığını ve koruduğunu öğrenin.",
        lastUpdated: 'Son güncelleme: 14 Mart 2026',
        introTitle: '1. Giriş',
        introText:
            'ClawHost ("biz", "bizim" veya "bizi") gizliliğinizi korumaya kararlıdır. Bu Gizlilik Politikası, Hizmetimizi kullanırken bilgilerinizi nasıl topladığımızı, kullandığımızı, ifşa ettiğimizi ve koruduğumuzu açıklar.',
        authTitle: '2. Kimlik Doğrulama',
        authText:
            'ClawHost, kullanıcı hesaplarını yönetmek için Google Firebase Authentication kullanır. E-posta, Google veya GitHub ile giriş yapabilirsiniz. Bu giriş yöntemlerini kullanarak, ilgili şartlarını ve gizlilik politikalarını kabul edersiniz. Bu sağlayıcılar e-posta adresiniz, adınız ve cihaz bilgileriniz gibi temel veriler toplayabilir. Biz yalnızca e-posta adresinizi ve görünen adınızı saklarız.',
        collectTitle: '3. Topladığımız Bilgiler',
        collectText: 'Bilgileri aşağıdaki yollarla topluyoruz:',
        personalInfoTitle: 'Kişisel Bilgiler',
        personalInfoEmail: 'E-posta adresi (hesap oluşturma ve iletişim için)',
        personalInfoName: 'Ad (isteğe bağlı, kişiselleştirme için)',
        personalInfoPayment:
            'Ödeme bilgileri (üçüncü taraf sağlayıcılar tarafından güvenli şekilde işlenir)',
        serverInfoTitle: 'Sunucu Bilgileri',
        serverInfoConfig: 'Sunucu yapılandırması ve durumu',
        serverInfoIp: 'Sunucu IP adresi ve konumu',
        serverInfoResources: 'Kaynak tahsisi (CPU, RAM, depolama)',
        useTitle: '4. Bilgilerinizi Nasıl Kullanıyoruz',
        useText: 'Toplanan bilgileri şunlar için kullanıyoruz:',
        useProvide: 'Hizmetimizi sağlamak ve sürdürmek',
        useTransactions:
            'İşlemleri gerçekleştirmek ve faturalama bilgisi göndermek',
        useNotices: 'Önemli bildirimler ve güncellemeler göndermek',
        useSupport: 'Müşteri destek taleplerine yanıt vermek',
        useAnalyze:
            'Hizmetimizi geliştirmek için kullanım kalıplarını izlemek ve analiz etmek',
        useFraud:
            'Dolandırıcılık veya kötüye kullanımı tespit etmek ve önlemek',
        sharingTitle: '5. Veri Paylaşımı ve İfşa',
        sharingText:
            'Kişisel bilgilerinizi satmıyoruz. Bilgileri şunlarla paylaşabiliriz:',
        sharingProviders:
            'Hizmetimizin işletilmesine yardımcı olan hizmet sağlayıcılar (örn. bulut altyapı sağlayıcıları)',
        sharingLegal:
            'Yasal otoriteler, yasa gereği veya haklarımızı korumak için',
        sharingBusiness:
            'Birleşme, satın alma veya varlık satışı durumunda iş ortakları',
        securityTitle: '6. Veri Güvenliği',
        securityText:
            'Kişisel bilgilerinizi yetkisiz erişime, değişikliğe, ifşaya veya imhaya karşı korumak için uygun teknik ve organizasyonel önlemler uyguluyoruz. Bu, şifreleme, güvenli sunucular ve düzenli güvenlik değerlendirmelerini içerir.',
        retentionTitle: '7. Veri Saklama',
        retentionText:
            'Kişisel bilgilerinizi hesabınız aktif olduğu sürece veya size hizmet sağlamak için gerekli olduğu sürece saklıyoruz. Yasal gereklilikler veya meşru ticari amaçlar için belirli bilgileri saklayabiliriz.',
        rightsTitle: '8. Haklarınız',
        rightsText: 'Konumunuza bağlı olarak, şu haklara sahip olabilirsiniz:',
        rightsAccess: 'Kişisel verilerinize erişim',
        rightsCorrect: 'Yanlış verileri düzeltme',
        rightsDelete: 'Verilerinizin silinmesini talep etme',
        rightsObject: 'Verilerinizin işlenmesine itiraz etme',
        rightsPortability: 'Veri taşınabilirliği',
        rightsWithdraw: 'Onayı istediğiniz zaman geri çekme',
        cookiesTitle: '9. Çerezler ve İzleme',
        cookiesText:
            'Çerez kullanmıyoruz. Kimlik doğrulama Firebase aracılığıyla yönetilir ve tarayıcınızda saklanan çerezlere bağlı değildir.',
        transfersTitle: '10. Uluslararası Veri Transferleri',
        transfersText:
            'Bilgileriniz kendi ülkeniz dışındaki ülkelere aktarılabilir ve buralarda işlenebilir. Bu Gizlilik Politikasına uygun olarak verilerinizi korumak için uygun güvencelerin mevcut olmasını sağlıyoruz.',
        eligibilityTitle: '11. Uygunluk',
        eligibilityText:
            'Hizmetimiz herkes için kullanılabilir. ClawHost kullanımı için yaş kısıtlaması yoktur.',
        changesTitle: '12. Bu Politikadaki Değişiklikler',
        changesText:
            'Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Yeni Gizlilik Politikasını bu sayfada yayınlayarak ve "Son güncelleme" tarihini güncelleyerek herhangi bir değişikliği size bildireceğiz.',
        contactTitle: '13. Bize Ulaşın',
        contactText:
            'Bu Gizlilik Politikası hakkında sorularınız varsa veya haklarınızı kullanmak istiyorsanız, lütfen şu adresten bize ulaşın:'
    },
    terms: {
        title: 'Hizmet Şartları',
        description:
            'ClawHost hizmetlerini kullanma şart ve koşullarını okuyun.',
        lastUpdated: 'Son güncelleme: 14 Mart 2026',
        acceptanceTitle: '1. Şartların Kabulü',
        acceptanceText:
            'ClawHost\'a ("Hizmet") erişerek ve kullanarak, bu sözleşmenin şart ve hükümlerine bağlı olmayı kabul edersiniz. Bu şartları kabul etmiyorsanız, lütfen Hizmetimizi kullanmayın.',
        serviceTitle: '2. Hizmet Açıklaması',
        serviceText:
            'ClawHost, dedike sunucularda tek tıkla OpenClaw ve Hermes dağıtımı sunar. Kullanıcılarımızın tam root erişimine ve dedike kaynaklara sahip önceden yapılandırılmış OpenClaw ve Hermes örneklerini dağıtmasına, yönetmesine ve bunlara erişmesine olanak tanırız.',
        authTitle: '3. Kimlik Doğrulama',
        authText:
            "ClawHost, giriş yönetimi için Google Firebase Authentication kullanır. E-posta, Google veya GitHub ile kimlik doğrulayabilirsiniz. Bu yöntemleri kullanarak, Google ve GitHub'ın ilgili şartlarını ve gizlilik politikalarını kabul edersiniz. Bu sağlayıcılar e-posta adresiniz, adınız ve cihaz verileriniz gibi temel bilgiler toplayabilir.",
        responsibilitiesTitle: '4. Kullanıcı Sorumlulukları',
        responsibilitiesText: 'Şunları kabul edersiniz:',
        responsibilitiesAccurate: 'Doğru ve eksiksiz kayıt bilgileri sağlamak',
        responsibilitiesSecurity:
            'Hesap kimlik bilgilerinizin güvenliğini sağlamak',
        responsibilitiesCompliance:
            'Hizmeti tüm geçerli yasalara uygun şekilde kullanmak',
        responsibilitiesLegal:
            'Hizmeti herhangi bir yasadışı veya yetkisiz amaç için kullanmamak',
        responsibilitiesAccess:
            'Herhangi bir sisteme veya ağa yetkisiz erişim sağlamaya çalışmamak',
        prohibitedTitle: '5. Yasaklanan Kullanımlar',
        prohibitedText: 'Hizmetimizi şunlar için kullanamazsınız:',
        prohibitedMalware:
            'Kötü amaçlı yazılım, virüs veya zararlı yazılım dağıtmak',
        prohibitedDos:
            'Hizmet reddi saldırıları veya ağ kötüye kullanımı yapmak',
        prohibitedSpam: 'Spam veya istenmeyen iletişimler göndermek',
        prohibitedIllegal: 'Yasadışı içerik barındırmak veya dağıtmak',
        prohibitedIp: 'Fikri mülkiyet dahil üçüncü taraf haklarını ihlal etmek',
        prohibitedMining: 'Kripto para madenciliği yapmak',
        prohibitedOther:
            'Takdirimize bağlı olarak uygunsuz olarak belirleyebileceğimiz diğer yasadışı veya zararlı faaliyetler',
        paymentTitle: '6. Ödeme ve Faturalama',
        paymentText:
            "Hizmetler sabit aylık veya yıllık bazda faturalandırılır. İstediğiniz zaman aylık ve yıllık faturalama arasında geçiş yapabilirsiniz, değişiklik bir sonraki faturalama döneminin başında yürürlüğe girer. Tüm ödemeler iade edilemez. Bir sunucu için ödeme yaptığınızda, tam faturalama dönemi boyunca erişiminiz vardır. İptal ederseniz, iptal mevcut faturalama döneminin sonunda yürürlüğe girer. Fiyatlar değişebilir, ancak herhangi bir değişiklik yalnızca yeni dağıtılan claw'lar için geçerli olacak ve zaten dağıtılmış olanları etkilemeyecektir. Ödeme yapılmaması hesabınızın askıya alınması veya sonlandırılmasıyla sonuçlanabilir.",
        availabilityTitle: '7. Hizmet Kullanılabilirliği',
        availabilityText:
            'Yüksek kullanılabilirlik sağlamaya çalışıyoruz ancak Hizmete kesintisiz erişimi garanti etmiyoruz. Hizmetin herhangi bir bölümünü, bildirimli veya bildirimsiz, istediğimiz zaman değiştirme, askıya alma veya sonlandırma hakkımızı saklı tutuyoruz.',
        liabilityTitle: '8. Sorumluluk Sınırlaması',
        liabilityText:
            'Yasaların izin verdiği azami ölçüde, ClawHost doğrudan veya dolaylı olarak ortaya çıkan herhangi bir dolaylı, arızi, özel, sonuç niteliğinde veya cezai zarar veya kâr veya gelir kaybından sorumlu olmayacaktır.',
        terminationTitle: '9. Sonlandırma',
        terminationText:
            'Bu Şartları ihlal ettiğine veya diğer kullanıcılara, bize veya üçüncü taraflara zararlı olduğuna inandığımız davranışlar veya herhangi bir başka nedenle, önceden bildirimde bulunmaksızın hesabınızı ve Hizmete erişiminizi derhal sonlandırabilir veya askıya alabiliriz.',
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
        changesToTermsTitle: '11. Şart Değişiklikleri',
        changesToTermsText:
            'Bu şartları istediğimiz zaman değiştirme hakkımızı saklı tutuyoruz. Herhangi bir önemli değişikliği e-posta yoluyla veya Hizmet aracılığıyla kullanıcılara bildireceğiz. Bu tür değişikliklerden sonra Hizmeti kullanmaya devam etmek, güncellenen şartların kabul edildiği anlamına gelir.',
        contactTitle: '12. İletişim Bilgileri',
        contactText:
            'Bu Şartlar hakkında sorularınız varsa, lütfen şu adresten bize ulaşın:'
    },
    productHunt: {
        liveOn: 'Yayında',
        productHunt: 'Product Hunt',
        celebrate: 'Bizi destekleyin ve',
        discount: '%10 indirim',
        yourFirstMonth: 'ilk siparişinizde',
        upvoteNow: 'Oy Verin'
    },
    hermesBanner: {
        title: 'Hermes Agent',
        message:
            'Hermes ajanları artık ClawHost üzerinde dağıtım için desteklenmektedir.'
    },
    compare: {
        title: 'Karşılaştırma',
        description:
            "ClawHost'un diğer OpenClaw barındırma platformlarıyla nasıl karşılaştırıldığını görün.",
        badge: 'Karşılaştırma',
        feature: 'Platform',
        compareWith: 'Şununla karşılaştır:',
        lastUpdated: 'Son güncelleme: Mart 2026',
        competitorClawHost: 'ClawHost',
        competitorLobsterFarm: 'LobsterFarm',
        competitorSimpleAgent: 'SimpleAgent',
        competitorMyAgentAi: 'MyAgent.ai',
        competitorQuickAgent: 'QuickAgent',
        categoryInfrastructure: 'Altyapı',
        categoryPricing: 'Fiyatlandırma ve Faturalama',
        categoryDeployment: 'Dağıtım ve Kurulum',
        categoryManagement: 'OpenClaw Yönetimi',
        categorySecurity: 'Veri ve Güvenlik',
        categoryMonitoring: 'İzleme ve Bakım',
        categorySupport: 'Destek ve Platform',
        featureServerOwnership: 'Sunucu sahipliği',
        featureProviderChoice: 'Bulut sağlayıcı seçimi',
        featureDedicatedResources: 'Özel kaynaklar',
        featureRootAccess: 'Tam root/SSH erişimi',
        featureServerLocations: 'Sunucu konumları',
        featureStartingPrice: 'Başlangıç fiyatı',
        featureTransparentPricing: 'Şeffaf fiyatlandırma',
        featurePowerfulServers: 'Güçlü sunucular, düşük fiyat',
        featureLocationSelection: 'Sunucu konumunuzu seçin',
        featureSubdomainAccess: 'Alt alan adı erişimi',
        featureThemes: 'Açık ve koyu temalar',
        featureSetupTime: 'Kurulum süresi',
        featureOneClickDeploy: 'Tek tıkla dağıtım',
        featureMultipleInstances: 'Birden fazla örnek',
        featureDataOwnership: 'Tam veri sahipliği',
        featureDataExport: 'Veri dışa aktarma',
        featureBackups: 'Yedeklemeler',
        featureSecurityHardening: 'Güvenlik güçlendirme',
        featureSslTls: 'SSL/TLS',
        featureOpenSource: 'Açık kaynak',
        featureAutoUpdates: 'Otomatik güncellemeler',
        featureDiagnostics: 'Gerçek zamanlı tanılama',
        featureLogStreaming: 'Günlük akışı',
        featureRepairTools: 'Onarım araçları',
        featureSupportChannels: 'Destek kanalları',
        featureMultiLanguage: 'Çoklu dil arayüzü',
        featureDesktopApp: 'Masaüstü uygulaması',
        featureOneClickVersion: 'Tek tıkla sürüm değiştirme',
        featureWebTerminal: 'Web terminal erişimi',
        featureSocials: 'Sosyal medya',
        dedicatedVps: 'Özel VPS',
        sharedContainers: 'Paylaşımlı konteynerler',
        isolatedContainers: 'İzole konteynerler',
        cloudWorkspaces: 'Bulut çalışma alanları',
        threeProviders: 'Cloud',
        singleProvider: 'Tek sağlayıcı',
        fullyDedicated: 'Tamamen özel',
        shared: 'Paylaşımlı',
        fullRootSsh: 'Tam root + SSH',
        sshOnRequest: 'Talep üzerine SSH',
        noAccess: 'Erişim yok',
        thirtyPlusLocations: '30+ konum',
        limitedLocations: 'Sınırlı',
        fourLocations: '4 konum',
        fromTwentyFiveMonth: "$25/ay'dan",
        aboutFortyFourMonth: '~$44/ay ort.',
        fromNineteenMonth: '$19–79/ay',
        nineteenMonth: '$19/ay',
        clearSpecsPricing: 'Net özellikler ve fiyatlandırma',
        unclearPricing: 'Belirsiz fiyatlandırma',
        fixedTiers: '3 sabit kademe',
        creditBased: 'Kredi tabanlı',
        minutes: 'Dakikalar',
        underOneMinute: '1 dakikadan az',
        thirtySeconds: '30 saniye',
        instant: 'Anında',
        noneRequired: 'Yok',
        minimal: 'Minimal',
        unlimited: 'Sınırsız',
        singleInstance: 'Tek',
        noMarketplace: 'Pazaryeri yok',
        appOnly: 'Yalnızca uygulama',
        fullConfig: 'Tam yapılandırma',
        limitedConfig: 'Sınırlı',
        zipExport: 'ZIP dışa aktarma',
        serverTransfer: 'Sunucu transferi',
        noExport: 'Dışa aktarma yok',
        volumeStorage: 'Birim depolama',
        noBackups: 'Yedekleme yok',
        dailyBackups: 'Günlük yedeklemeler',
        included: 'Dahil',
        notIncluded: 'Dahil değil',
        managed: 'Yönetilen',
        manual: 'Manuel',
        appStore: 'App Store',
        liveMonitoring: 'Canlı izleme',
        liveLogs: 'Canlı günlükler',
        oneClickRepair: 'Tek tıkla onarım',
        emailGithub: 'E-posta, GitHub',
        humanSupport: 'İnsan desteği',
        communityOnly: 'Yalnızca topluluk',
        appSupport: 'Uygulama desteği',
        prioritySupport: '7/24 destek (Pro+)',
        fourLanguages: '4 dil',
        englishOnly: 'Yalnızca İngilizce',
        available: 'Mevcut',
        comingSoon: 'Yakında',
        macOsOnly: 'Yalnızca macOS',
        viaTelegram: 'Telegram üzerinden',
        builtInTerminal: 'SSH gerekmez',
        notAvailable: 'Mevcut değil',
        disclaimer: 'Bir şey değişti veya yanlış mı? Bize e-posta gönderin:',
        disclaimerOr: 'veya şurada bir pull request açın:',
        github: 'GitHub',
        ctaTitle: 'Farkı görmeye hazır mısınız?',
        ctaDescription:
            "OpenClaw'u kendi özel sunucunuza dağıtın. Tam sahiplik, şeffaf fiyatlandırma ve dakikalar içinde hazır."
    },
    admin: {
        title: 'Yönetici',
        description: 'Platform kullanıcılarınızı ve verilerinizi yönetin.',
        usersTab: 'Kullanıcılar',
        totalUsers: '{{count}} kullanıcı',
        noUsers: 'Kullanıcı yok',
        noUsersDescription: 'Filtrelerinize uyan kullanıcı bulunamadı.',
        genericErrorDescription:
            'Bir şeyler yanlış gitti. Lütfen tekrar deneyin.',
        genericEmptyDescription: 'Henüz burada gösterilecek bir şey yok.',
        failedToLoadUsers: 'Kullanıcılar yüklenemedi!',
        failedToLoadUsersDescription:
            'Kullanıcılar yüklenirken bir hata oluştu. Lütfen tekrar deneyin.',
        failedToLoadUserDetail: 'Kullanıcı detayları yüklenemedi!',
        userDetail: 'Kullanıcı Detayları',
        userInfo: 'Kullanıcı Bilgisi',
        email: 'E-posta',
        name: 'İsim',
        role: 'Rol',
        authMethods: 'Kimlik doğrulama yöntemleri',
        license: 'Lisans',
        referralCode: 'Referans kodu',
        referredBy: 'Yönlendiren',
        joined: 'Kayıt tarihi',
        claws: 'Claws',
        sshKeys: 'SSH Anahtarları',
        volumes: 'Birimler',
        billing: 'Faturalama',
        noClaws: 'Claw Yok',
        noSshKeys: 'SSH Anahtarı Yok',
        noVolumes: 'Birim Yok',
        noBilling: 'Faturalama Geçmişi Yok',
        hasLicense: 'Evet',
        noLicense: 'Hayır',
        notSet: 'Ayarlanmadı',
        searchPlaceholder: 'E-posta veya isimle ara...',
        filterAll: 'Tüm kullanıcılar',
        filterWithClaws: 'Claw sahipleri',
        filterWithoutClaws: 'Claw olmayanlar',
        sortNewest: 'En yeni',
        sortOldest: 'En eski',
        editUser: 'Düzenle',
        saveUser: 'Kaydet',
        userUpdated: 'Kullanıcı güncellendi.',
        userUpdateFailed: 'Güncelleme başarısız!',
        clawsTab: 'Claws',
        sshKeysTab: 'SSH Anahtarları',
        volumesTab: 'Birimler',
        noClawsFound: 'Claw Yok',
        noSSHKeysFound: 'SSH Anahtarı Yok',
        noVolumesFound: 'Birim Yok',
        failedToLoadAgents: 'Agents yüklenemedi!',
        failedToLoadSSHKeys: 'SSH anahtarları yüklenemedi!',
        failedToLoadVolumes: 'Birimler yüklenemedi!',
        owner: 'Sahip',
        searchClaws: 'Claw ara...',
        searchSSHKeys: 'SSH anahtarı ara...',
        referralsTab: 'Yönlendirmeler',
        pendingClawsTab: 'Bekleyen',
        emailsTab: 'E-postalar',
        analyticsTab: 'Analitik',
        billingTab: 'Faturalandırma',
        settingsTab: 'Ayarlar',
        settingsDescription: 'Yönetici tercihlerinizi yönetin.',
        showAllAgents: 'Tüm kullanıcılardan tüm ajanları göster',
        billingFilterAll: 'Tüm siparişler',
        billingFilterService: 'Claw Hizmeti',
        billingFilterLicense: 'Lisans',
        billingOrderTypeLabel: ' · {{type}}',
        noBillingFound: 'Sipariş yok',
        failedToLoadBilling: 'Siparişler yüklenemedi!',
        searchBilling: 'Ürün adına göre ara...',
        billingReason: 'Neden',
        billingType: 'Tür',
        billingSubtotal: 'Ara toplam',
        billingDiscount: 'İndirim',
        billingTax: 'Vergi',
        billingTotal: 'Toplam',
        analyticsDay: 'Gün',
        analyticsWeek: 'Hafta',
        analyticsMonth: 'Ay',
        analyticsYear: 'Yıl',
        analyticsAllTime: 'Tüm zamanlar',
        analyticsFilter: 'Filtre',
        analyticsResources: 'Kaynaklar',
        analyticsSelectAll: 'Tümünü seç',
        analyticsDeselectAll: 'Tümünü kaldır',
        failedToLoadAnalytics: 'Analitik yüklenemedi!',
        noAnalyticsData: 'Analitik verisi mevcut değil.',
        noReferralsFound: 'Yönlendirme Yok',
        noPendingClawsFound: 'Bekleyen Claw Yok',
        noEmailsFound: 'E-posta Yok',
        failedToLoadReferrals: 'Yönlendirmeler yüklenemedi!',
        failedToLoadPendingClaws: 'Bekleyen clawlar yüklenemedi!',
        failedToLoadEmails: 'E-postalar yüklenemedi!',
        referrer: 'Yönlendiren',
        referred: 'Yönlendirilen',
        earned: 'Kazanılan',
        expiresAt: 'Sona eriyor',
        feature: 'Özellik',
        sentAt: 'Gönderildi',
        fileSize: 'Boyut',
        registered: 'Kayıtlı',
        status: 'Durum',
        ip: 'IP',
        plan: 'Plan',
        location: 'Konum',
        subdomain: 'Alt alan adı',
        subscription: 'Abonelik',
        billingInterval: 'Faturalama',
        deletionScheduled: 'Silme planlandı',
        fingerprint: 'Parmak izi',
        price: 'Fiyat',
        pricePerMonth: '{{price}}/ay',
        statusRunning: 'Çalışıyor',
        statusStopped: 'Durduruldu',
        adminBadge: 'Yönetici',
        unitGB: '{{size}} GB',
        unitKB: '{{size}} KB'
    },
    affiliate: {
        title: 'Affiliate',
        description: 'Earn rewards by referring friends to ClawHost.',
        subtitle: 'Share your referral link and earn rewards.',
        learnMore: 'Ortaklık programı hakkında daha fazla bilgi',
        referralCode: 'Referral Code',
        referrals: 'Referrals',
        payments: 'ödeme',
        earnings: 'Earnings',
        codeChangeHint: 'You can customize your referral code once.',
        codeAlreadyChanged: 'Your referral code has already been customized.',
        codeUpdated: 'Referral code updated.',
        codeUpdateFailed: 'Failed to update referral code!',
        invalidCodeLength:
            'Code must be between {{min}} and {{max}} characters!',
        referralHistory: 'Referral History',
        paymentHistory: 'Ödeme geçmişi',
        periodToday: 'Today',
        periodWeek: 'Week',
        periodMonth: 'Month',
        periodYear: 'Year',
        periodAll: 'All',
        confirmChangeTitle: 'Change Referral Code',
        confirmChangeDescription:
            'Are you sure? This action is permanent and cannot be undone. You will not be able to change your referral code again.',
        noReferralsYet: 'Referans yok',
        noReferralsDescription:
            'Share your referral link to start earning rewards.',
        noPaymentsYet: 'Ödeme yok',
        noPaymentsDescription:
            'Yönlendirdiğiniz kullanıcılar satın alma yaptığında, ödemeleri burada görünecektir.'
    },
    affiliateProgram: {
        title: 'Ortaklık Programı',
        description:
            'ClawHost ortaklık programının nasıl çalıştığını, ne kadar kazanabileceğinizi ve katılım kurallarını öğrenin.',
        lastUpdated: 'Son güncelleme: 1 Nisan 2026',
        overviewTitle: '1. Genel Bakış',
        overviewText:
            "ClawHost Ortaklık Programı, yeni kullanıcıları ClawHost'a yönlendirerek ödüller kazanmanızı sağlar. Birisi yönlendirme bağlantınız aracılığıyla ClawHost'u ziyaret ettikten sonra bir satın alma yaptığında, ödemelerinden komisyon kazanırsınız. Program ücretsizdir ve tüm kayıtlı ClawHost kullanıcılarına açıktır.",
        howItWorksTitle: '2. Nasıl Çalışır',
        howItWorksText: 'Ortaklık programına başlamak basittir:',
        howItWorksStep1:
            'Bir ClawHost hesabı oluşturun. Sizin için otomatik olarak benzersiz bir yönlendirme kodu oluşturulur.',
        howItWorksStep2:
            'Yönlendirme bağlantınızı arkadaşlarınız, meslektaşlarınız veya kitlenizle paylaşın. Bağlantınız şu formatı takip eder: clawhost.cloud?ref=YOUR_CODE.',
        howItWorksStep3:
            "Birisi bağlantınız aracılığıyla ClawHost'u ziyaret ettikten sonra bir satın alma yaptığında, bu yönlendirmeniz olarak kaydedilir.",
        howItWorksStep4:
            'Yönlendirdiğiniz kullanıcı uygun bir satın alma yaptığında her seferinde komisyon kazanırsınız.',
        earningsTitle: '3. Kazançlar ve Ödemeler',
        earningsText: 'Ortaklık kazançları şöyle çalışır:',
        earningsCommission:
            'Yönlendirdiğiniz kullanıcıların yaptığı her uygun satın alma üzerinden 15% komisyon kazanırsınız. Komisyonlar hem ClawHost Cloud hem de ClawHost Go planları için geçerlidir.',
        earningsMonthly:
            'Aylık abonelikler için, yönlendirme tarihinden itibaren 1 yıl boyunca komisyon kazanırsınız.',
        earningsYearly:
            'Yıllık abonelikler için, yalnızca ilk yıl üzerinden komisyon kazanırsınız.',
        earningsPayout:
            "Minimum çekim tutarı 100 $ USD'dir. Çekim talebinde bulunmak için destek ekibimizle iletişime geçin.",
        earningsPaymentMethod:
            'Çekimler PayPal aracılığıyla işlenir. Ödeme talep ederken geçerli bir PayPal e-posta adresi sağlamanız gerekmektedir.',
        earningsCurrency:
            'Tüm kazançlar USD olarak hesaplanır ve görüntülenir.',
        referralCodeTitle: '4. Yönlendirme Kodunuz',
        referralCodeText:
            'Her kullanıcı kayıt sırasında benzersiz bir yönlendirme kodu alır. Daha akılda kalıcı hale getirmek için bir kez özelleştirebilirsiniz:',
        referralCodeUnique:
            'Yönlendirme kodunuz hesabınıza özgüdür ve başka bir kullanıcıyla paylaşılamaz veya devredilemez.',
        referralCodeOneChange:
            'Yönlendirme kodunuzu tam olarak bir kez özelleştirebilirsiniz. Dikkatli seçin — bu değişiklik kalıcıdır ve geri alınamaz.',
        referralCodeFormat:
            'Yönlendirme kodları yalnızca harfler, rakamlar, tireler ve alt çizgiler içerebilir.',
        referralWindowTitle: '5. Yönlendirme Atıf Penceresi',
        referralWindowText:
            "Bir yönlendirme, yönlendirilen kullanıcının bağlantınız aracılığıyla ClawHost'u ilk ziyaret ettiği andan itibaren 3 ay boyunca size atfedilir. Yönlendirilen kullanıcı bu 3 aylık pencere içinde bir satın alma yapmazsa, yönlendirme sona erer ve komisyon kazanılmaz. Kullanıcı farklı bir yönlendirme bağlantısı aracılığıyla ziyaret ederse, yeni yönlendirme öncekinin yerini alır.",
        eligibilityTitle: '6. Uygunluk',
        eligibilityText:
            'Ortaklık programına katılmak için aşağıdaki gereksinimleri karşılamanız gerekir:',
        eligibilityAccount: 'Kayıtlı bir ClawHost hesabınız olmalıdır.',
        eligibilityStanding:
            'Hesabınız iyi durumda olmalı ve politika ihlali geçmişi bulunmamalıdır.',
        eligibilityAge:
            'En az 18 yaşında veya yargı bölgenizdeki reşitlik yaşında olmalısınız.',
        rulesTitle: '7. Program Kuralları',
        rulesText:
            'Ortaklık programının bütünlüğünü korumak için aşağıdaki kurallar geçerlidir:',
        rulesNoSelfReferral:
            'Kendi kendine yönlendirme kesinlikle yasaktır. Kendi hesaplarınızı veya kontrol ettiğiniz hesapları yönlendiremezsiniz.',
        rulesNoFakeAccounts:
            'Sahte hesaplar oluşturmak, otomatik kayıtlar yapmak veya yönlendirme oluşturmak için bot kullanmak yasaktır.',
        rulesNoSpam:
            'Yönlendirme bağlantınızı tanıtmak için istenmeyen toplu mesajlar (spam) göndermek yasaktır.',
        rulesNoMisrepresentation:
            "ClawHost'u, hizmetlerini veya ortaklık programını hiçbir şekilde yanlış tanıtamazsınız.",
        rulesNoIncentivized:
            'Doğrudan parasal teşvikler sunmak (örneğin, bağlantınız aracılığıyla kaydolmaları için kullanıcılara ödeme yapmak) yasaktır.',
        terminationTitle: '8. İhlal ve Fesih',
        terminationText:
            'Bu kuralların herhangi birinin ihlali, bekleyen ve kazanılan tüm ödüllerin derhal kaybedilmesiyle sonuçlanır. ClawHost, hesabınızı ortaklık programından askıya alma veya kalıcı olarak yasaklama hakkını saklı tutar. Ciddi durumlarda ClawHost hesabınız da feshedilebilir. İhlallerle ilgili tüm kararlar kesindir.',
        marketingTitle: '9. Nasıl Tanıtılır',
        marketingText:
            'Yönlendirme bağlantınızı paylaşmanın ve kazançlarınızı artırmanın birçok yaratıcı ve meşru yolu vardır:',
        marketingSocial:
            'Bağlantınızı X, LinkedIn, Reddit ve Facebook gibi sosyal medya platformlarında paylaşın. ClawHost ile deneyiminiz hakkında yazın ve yönlendirme bağlantınızı ekleyin.',
        marketingBlog:
            'ClawHost hakkında blog yazıları, öğreticiler veya incelemeler yazın. Yönlendirme bağlantınızı içeriğe doğal bir şekilde dahil edin.',
        marketingVideo:
            "YouTube veya TikTok'ta ClawHost'u AI ajanlarını dağıtmak ve yönetmek için nasıl kullandığınızı gösteren video içerikleri oluşturun.",
        marketingCommunity:
            "Geliştirici topluluklarına, forumlara ve Discord sunucularına katılın. Birisi bulut barındırma veya AI ajanı dağıtımı hakkında sorduğunda, bağlantınızla ClawHost'u önerin.",
        marketingNewsletter:
            "Bir bülten veya e-posta listesi yönetiyorsanız, ilgili bir sayıda yönlendirme bağlantınızla ClawHost'tan bahsedin.",
        marketingComparison:
            "ClawHost'u diğer platformlardan farklı kılan özellikleri vurgulayan dürüst karşılaştırma makaleleri veya rehberler yazın.",
        changesToProgramTitle: '10. Programdaki Değişiklikler',
        changesToProgramText:
            'ClawHost, ortaklık programını herhangi bir zamanda önceden bildirimde bulunmaksızın değiştirme, askıya alma veya sonlandırma hakkını saklı tutar. Bu, komisyon oranları, yönlendirme pencereleri, ödeme eşikleri ve program kurallarındaki değişiklikleri içerir. Değişikliklerden sonra katılımın devam etmesi, güncellenen koşulların kabul edildiği anlamına gelir.',
        getStartedTitle: '11. Başlayın',
        getStartedText:
            'Kazanmaya hazır mısınız? Yönlendirme bağlantınızı almak için ortaklık panelinize gidin ve ağınızla paylaşmaya başlayın.',
        getStartedButton: 'Ortaklık Paneline Git',
        contactTitle: '12. İletişim',
        contactText:
            'Ortaklık programı hakkında sorularınız varsa, yönlendirme kodunuzla ilgili yardıma ihtiyacınız varsa veya bir ihlal bildirmek istiyorsanız, bize ulaşın'
    }
}

export default tr