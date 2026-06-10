import type { Translations } from '#i18n/types'

const hi: Translations = {
    common: {
        loading: 'लोड हो रहा है...',
        noResults: 'कोई परिणाम नहीं मिला.',
        save: 'सहेजें',
        cancel: 'रद्द करें',
        confirm: 'पुष्टि करें',
        delete: 'हटाएँ',
        deleting: 'हटाया जा रहा है...',
        create: 'बनाएँ',
        done: 'हो गया',
        back: 'वापस',
        copy: 'कॉपी करें',
        copied: 'कॉपी हो गया.',
        copiedWithLabel: '{{label}} कॉपी हो गया.',
        show: 'दिखाएँ',
        hide: 'छुपाएँ',
        tryAgain: 'पुनः प्रयास करें',
        addKey: 'कुंजी जोड़ें',
        close: 'बंद करें',
        none: 'कोई नहीं',
        all: 'सभी',
        unknown: 'अज्ञात',
        pageNotFound: 'पृष्ठ नहीं मिला',
        closeNotification: 'सूचना बंद करें',
        beta: 'बीटा',
        brandName: 'ClawHost',
        brandNameGo: 'ClawHost Go',
        brandNameGoVersion: 'ClawHost Go {{version}}',
        pageTitleWithBrand: '{{title}} - ClawHost',
        menuFile: 'फ़ाइल',
        menuEdit: 'संपादन',
        menuView: 'दृश्य',
        menuWindow: 'विंडो',
        menuHelp: 'सहायता',
        scrollToBottom: 'नीचे स्क्रॉल करें',
        second: 'सेकंड',
        seconds: 'सेकंड'
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
        switchLanguage: 'भाषा'
    },
    theme: {
        light: 'लाइट',
        dark: 'डार्क',
        system: 'सिस्टम',
        toggleTheme: 'थीम बदलें'
    },
    nav: {
        claws: 'क्लॉज़',
        sshKeys: 'SSH कुंजियाँ',
        account: 'खाता',
        affiliate: 'सहबद्ध',
        license: 'लाइसेंस',
        signOut: 'साइन आउट',
        admin: 'एडमिन',
        login: 'लॉगिन',
        deploy: 'डिप्लॉय',
        deployOpenClaw: 'OpenClaw डिप्लॉय करें',
        mainNavigation: 'मुख्य नेविगेशन',
        footerNavigation: 'फ़ुटर नेविगेशन',
        toggleMenu: 'मेनू टॉगल करें',
        cloud: 'क्लाउड',
        cloudSubtitle: 'तकनीकी',
        go: 'Go',
        goSubtitle: 'गैर-तकनीकी'
    },
    go: {
        pageTitle: 'ClawHost Go',
        heroTitle1: 'OpenClaw डिप्लॉय करें.',
        heroTitle2: 'स्थानीय रूप से. तुरंत.',
        badge: 'OpenClaw और Hermes स्थानीय रूप से',
        tutorialBadge: 'Go पर शुरुआत कैसे करें',
        description:
            'अपने OpenClaw इंस्टेंस प्रबंधित करने के लिए एक हल्का डेस्कटॉप क्लाइंट. अपनी मशीन से ही डिप्लॉय, मॉनिटर और नियंत्रित करें.',
        features: 'विशेषताएँ',
        whyClawHostGo: 'ऑल-इन-वन विशेषताएँ',
        featuresDescription:
            'हम क्यों आज़माने लायक हैं, विशेषताएँ झूठ नहीं बोलतीं.',
        zeroConfigDescription:
            'सर्वर, OpenClaw और Hermes सेटअप के घंटों बचाएं. पहले से इंस्टॉल और मिनटों में तैयार.',
        ownedDataDescription:
            'सब कुछ आपके डिवाइस पर चलता है. कोई क्लाउड सर्वर नहीं, कोई तृतीय पक्ष नहीं, कोई डेटा आपकी मशीन से बाहर नहीं जाता.',
        terminalAccessDescription:
            'अपने OpenClaw इंस्टेंस टर्मिनल को सीधे ऐप से एक्सेस करें. किसी बाहरी SSH क्लाइंट की ज़रूरत नहीं.',
        simplePricing: 'सरल मूल्य निर्धारण',
        simplePricingDescription:
            'एक लाइसेंस, असीमित सब कुछ. कोई मासिक बिल नहीं, कोई उपयोग सीमा नहीं, कोई छिपी फ़ीस नहीं.',
        localDomain: 'कस्टम लोकल डोमेन',
        localDomainDescription:
            'कस्टम ब्रांडेड लोकल डोमेन के ज़रिए अपने OpenClaw तक पहुँचें. आपके अपने नेटवर्क पर साफ़ URL.',
        secureDescription:
            'आपका डेटा कभी आपके डिवाइस से बाहर नहीं जाता. पूरी तरह अलग, पूरी तरह एन्क्रिप्टेड, पूरी तरह आपका.',
        pricing: 'मूल्य निर्धारण',
        pricingTitle: 'सरल, एक बार का मूल्य',
        pricingDescription:
            'कोई सब्सक्रिप्शन नहीं, कोई छिपी फ़ीस नहीं. एक लाइसेंस, असीमित उपयोग.',
        pricingPrice: '${{price}}',
        pricingLabel: 'एक बार का भुगतान',
        pricingFeature1: 'आजीवन लाइसेंस',
        pricingFeature2: 'असीमित क्लॉज़',
        pricingFeature3: 'सभी भविष्य के अपडेट',
        pricingFeature4: 'कोई उपयोग सीमा नहीं',
        pricingFeature5: 'प्राथमिकता सहायता',
        pricingFeature6: 'कस्टम लोकल डोमेन',
        comparison: 'तुलना',
        comparisonTitle: 'Go बनाम Cloud',
        comparisonDescription:
            'जो आपके लिए सही हो वह चुनें. Go स्थानीय रूप से चलता है, Cloud समर्पित सर्वर पर.',
        comparisonLocalUs: 'पूरी तरह आपके डिवाइस पर चलता है',
        comparisonLocalOthers: 'रिमोट सर्वर पर चलता है',
        comparisonPricingUs: 'एक बार का भुगतान',
        comparisonPricingOthers: 'मासिक सब्सक्रिप्शन',
        comparisonDataUs: 'डेटा आपकी मशीन पर रहता है',
        comparisonDataOthers: 'डेटा क्लाउड सर्वर पर',
        comparisonSetupUs: 'इंस्टॉल करें और तुरंत चलाएँ',
        comparisonSetupOthers: 'एक क्लिक में डिप्लॉय करें',
        comparisonUpdatesUs: 'स्वचालित अपडेट',
        comparisonUpdatesOthers: 'स्वचालित अपडेट',
        faqTitle: 'प्रश्न',
        faqHeading: 'सामान्य प्रश्न',
        faqDescription:
            'ClawHost Go के बारे में वह सब कुछ जो आपको जानना चाहिए.',
        faq1Question: 'ClawHost Go क्या है?',
        faq1Answer:
            'ClawHost Go एक हल्का डेस्कटॉप एप्लिकेशन है जो आपको अपनी मशीन पर स्थानीय रूप से OpenClaw चलाने देता है. कोई क्लाउड सर्वर नहीं चाहिए — इंस्टॉल करें, लॉन्च करें और सेकंडों में OpenClaw का उपयोग शुरू करें.',
        faq2Question: 'Go, ClawHost Cloud से कैसे अलग है?',
        faq2Answer:
            'ClawHost Cloud, OpenClaw को 24/7 अपटाइम और वैश्विक पहुँच के साथ समर्पित रिमोट सर्वर पर डिप्लॉय करता है. ClawHost Go सब कुछ आपके डिवाइस पर स्थानीय रूप से चलाता है — गोपनीयता, ऑफ़लाइन उपयोग और सरल सेटअप के लिए बढ़िया.',
        faq3Question: 'क्या मुझे इंटरनेट कनेक्शन चाहिए?',
        faq3Answer:
            'ClawHost Go स्थानीय उपयोग के लिए ऑफ़लाइन काम करता है. इंटरनेट कनेक्शन केवल प्रारंभिक सेटअप, अपडेट और बाहरी API कॉल वाली सुविधाओं के लिए आवश्यक है.',
        faq4Question: 'क्या लाइसेंस एक बार का भुगतान है?',
        faq4Answer:
            'हाँ. आप एक बार भुगतान करते हैं और सभी भविष्य के अपडेट सहित ClawHost Go तक आजीवन पहुँच प्राप्त करते हैं. कोई सब्सक्रिप्शन नहीं, कोई आवर्ती शुल्क नहीं.',
        faq5Question: 'कौन से ऑपरेटिंग सिस्टम समर्थित हैं?',
        faq5Answer:
            'ClawHost Go, Windows और macOS को सपोर्ट करता है. दोनों प्लेटफ़ॉर्म पर समान सुविधाएँ मिलती हैं और एक साथ अपडेट आते हैं.',
        faq6Question: 'क्या मैं बाद में Go से Cloud पर स्विच कर सकता हूँ?',
        faq6Answer:
            'बिल्कुल. आप Go से अपना OpenClaw कॉन्फ़िगरेशन निर्यात कर सकते हैं और इसे कभी भी ClawHost Cloud पर डिप्लॉय कर सकते हैं. दोनों प्लेटफ़ॉर्म पूरी तरह संगत हैं.',
        statsPrice: '${{price}}',
        statsLifetime: 'आजीवन',
        statsOneTime: 'एक बार',
        statsPayment: 'भुगतान',
        statsLocal: 'स्थानीय',
        statsLocally: 'स्थानीय रूप से चलता है',
        statsZero: 'शून्य',
        statsZeroConfig: 'शून्य कॉन्फ़िग',
        ctaTitle: 'OpenClaw स्थानीय रूप से चलाएँ',
        ctaDescription:
            'एक बार का भुगतान, आजीवन लाइसेंस. अपनी मशीन पर OpenClaw डिप्लॉय करें — कोई क्लाउड नहीं, कोई सब्सक्रिप्शन नहीं, कोई सीमा नहीं. आपका डेटा, आपके नियम.',
        downloadForMac: 'Mac के लिए डाउनलोड करें',
        downloadVersion: 'संस्करण {{version}}',
        downloadForWindows: 'Windows के लिए डाउनलोड करें',
        deviceNotSupported: 'आपका डिवाइस अभी ClawHost Go द्वारा समर्थित नहीं है।',
        downloadFailed: 'डाउनलोड विफल!',
        downloadStarted: 'डाउनलोड शुरू हुआ।',
        appleSilicon: 'Apple Silicon',
        intel: 'Intel',
        chooseMacArch: 'आपके पास कौन सा Mac है?',
        otherVersions: 'अन्य संस्करण',
        updateAvailable: 'संस्करण {{version}} उपलब्ध है.',
        updateDownload: 'डाउनलोड',
        updateDismiss: 'बाद में',
        clawNotFound: 'क्लॉ नहीं मिला!',
        clawNameAlreadyExists: 'इस नाम का एक क्लॉ पहले से मौजूद है!',
        invalidSubdomain:
            'अमान्य सबडोमेन. 3-20 छोटे अक्षर और संख्याएँ उपयोग करें!',
        subdomainAlreadyInUse: 'यह सबडोमेन पहले से उपयोग में है!',
        clawDirectoryNotFound: 'क्लॉ डायरेक्टरी नहीं मिली!',
        noVersionInstalled:
            'कोई OpenClaw संस्करण इंस्टॉल नहीं है. Versions टैब पर जाएँ और पहले एक इंस्टॉल करें!',
        failedToStartClaw: 'क्लॉ शुरू करने में विफल!',
        noVersionAssigned:
            'इस क्लॉ को कोई OpenClaw संस्करण असाइन नहीं किया गया है!',
        invalidAgentName: 'अमान्य एजेंट नाम!',
        invalidPath: 'अमान्य पथ!',
        fileNotFound: 'फ़ाइल नहीं मिली!',
        purchasingNotAvailable: 'स्थानीय मोड में खरीदारी उपलब्ध नहीं है!',
        exportFailed: 'निर्यात विफल!',
        versionNotInstalled: 'OpenClaw संस्करण {{version}} इंस्टॉल नहीं है!',
        failedToStartProcess: 'प्रक्रिया शुरू करने में विफल: {{reason}}!',
        gatewayNotReady: 'एजेंट समय पर तैयार नहीं हो सका!',
        processExitedImmediately: 'प्रक्रिया तुरंत बंद हो गई. लॉग:\n{{logs}}',
        processExitedImmediatelyNoLogs:
            'शुरू होने के तुरंत बाद प्रक्रिया बंद हो गई!',
        processExitedWithCode:
            'प्रक्रिया कोड {{code}} के साथ बंद हुई. लॉग:\n{{logs}}',
        processExitedWithCodeNoLogs: 'प्रक्रिया कोड {{code}} के साथ बंद हुई!',
        processExitedUnexpectedly: 'प्रक्रिया अप्रत्याशित रूप से बंद हो गई!',
        failedToInstallVersion:
            'संस्करण {{version}} इंस्टॉल करने में विफल: {{reason}}!',
        oauthCancelled: 'प्रमाणीकरण रद्द कर दिया गया!',
        diskFull: 'डिवाइस पर कोई जगह नहीं बची!',
        permissionDenied: 'अनुमति अस्वीकृत!',
        networkTimeout: 'नेटवर्क अनुरोध का समय समाप्त हो गया!',
        failedToFetchLatestVersion: 'नवीनतम संस्करण प्राप्त करने में विफल!'
    },
    footer: {
        website: 'वेबसाइट',
        copyrightName: 'ClawHost',
        copyrightRights: 'सर्वाधिकार सुरक्षित.',
        termsOfService: 'सेवा की शर्तें',
        privacyPolicy: 'गोपनीयता नीति',
        getInTouch: 'संपर्क करें',
        brandDescription:
            'एक क्लिक में अपने VPS पर OpenClaw डिप्लॉय करें. पूर्ण गोपनीयता, समर्पित संसाधन, कोई साझा बुनियादी ढाँचा नहीं.',
        builtBy: 'द्वारा निर्मित',
        supportedBy: 'द्वारा समर्थित',
        product: 'उत्पाद',
        howItWorks: 'यह कैसे काम करता है',
        features: 'विशेषताएँ',
        pricing: 'मूल्य निर्धारण',
        faq: 'प्रश्न',
        changelog: 'परिवर्तन लॉग',
        compare: 'पूर्ण तुलना',
        legalAndMore: 'अन्य',
        affiliateProgram: 'एफिलिएट प्रोग्राम',
        documentation: 'दस्तावेज़ीकरण',
        productDescription:
            'एक क्लिक में क्लाउड या स्थानीय रूप से OpenClaw और Hermes एजेंट डिप्लॉय करें — ClawHost के साथ अपने AI एजेंट तेज़ी से बनाएँ, कनेक्ट करें और स्केल करें.',
        ariaGithub: 'GitHub',
        ariaX: 'X',
        ariaFacebook: 'Facebook',
        ariaInstagram: 'Instagram',
        ariaThreads: 'Threads',
        ariaYoutube: 'YouTube',
        ariaTiktok: 'TikTok'
    },
    errors: {
        somethingWentWrong: 'कुछ गलत हो गया!',
        connectionFailed:
            'सर्वर से कनेक्ट करते समय कुछ गलत हो गया। कृपया अपना कनेक्शन जांचें और पुनः प्रयास करें!',
        couldNotLoadData: 'हम डेटा लोड नहीं कर सके. कृपया पुनः प्रयास करें!',
        notFound: 'पृष्ठ नहीं मिला!',
        pageNotFoundDescription:
            'जो पृष्ठ आप खोज रहे हैं वह मौजूद नहीं है या स्थानांतरित कर दिया गया है.',
        goToHomepage: 'होमपेज पर जाएँ',
        failedToLoadAgents: 'एजेंट्स लोड करने में विफल!',
        failedToLoadAgentsDescription:
            'हम आपके एजेंट्स लोड नहीं कर सके. कृपया अपना कनेक्शन जाँचें और पुनः प्रयास करें!',
        failedToLoadSSHKeys: 'SSH कुंजियाँ लोड करने में विफल!',
        failedToLoadSSHKeysDescription:
            'हम आपकी SSH कुंजियाँ लोड नहीं कर सके. कृपया अपना कनेक्शन जाँचें और पुनः प्रयास करें!',
        failedToUpdateProfile: 'प्रोफ़ाइल अपडेट करने में विफल!',
        failedToAddSSHKey: 'SSH कुंजी जोड़ने में विफल!',
        failedToCreateClaw: 'क्लॉ बनाने में विफल!',
        failedToLoadLocations:
            'स्थान लोड करने में विफल. कृपया पुनः प्रयास करें!',
        failedToLoadPlans: 'प्लान लोड करने में विफल. कृपया पुनः प्रयास करें!',
        invalidPlan: 'अमान्य प्लान चयनित!',
        invalidLocation: 'कृपया एक स्थान चुनें!',
        failedToGenerateKeyPair:
            'कुंजी जोड़ी बनाने में विफल. कृपया स्थानीय रूप से कुंजियाँ बनाएँ!',
        unableToLoadPricing:
            'मूल्य निर्धारण लोड करने में असमर्थ. कृपया बाद में पुनः प्रयास करें!',
        noPasswordAvailable: 'इस क्लॉ के लिए कोई पासवर्ड उपलब्ध नहीं!'
    },
    api: {
        missingRequiredFields: 'आवश्यक फ़ील्ड गायब हैं!',
        agentNotFound: 'एजेंट नहीं मिला!',
        agentRenamed: 'एजेंट का नाम सफलतापूर्वक बदला गया.',
        agentEmojiUpdated: 'एजेंट इमोजी अपडेट किया गया।',
        failedToUpdateEmoji: 'इमोजी अपडेट करने में विफल!',
        invalidAgentName:
            'एजेंट का नाम 1 से {{max}} अक्षरों के बीच होना चाहिए!',
        userNotFound: 'उपयोगकर्ता नहीं मिला!',
        sshKeyNotFound: 'SSH कुंजी नहीं मिली!',
        pendingAgentNotFound: 'लंबित एजेंट नहीं मिला!',
        agentNotScheduledForDeletion: 'एजेंट हटाने के लिए शेड्यूल नहीं है!',
        agentDeletionAlreadyPassed: 'हटाने की तारीख पहले ही बीत चुकी है!',
        agentLimitReached:
            'आप {{max}} एजेंट्स की सीमा तक पहुँच गए हैं. कृपया इस सीमा को बढ़ाने के लिए सहायता से संपर्क करें!',
        sshKeyLimitReached:
            'आप {{max}} SSH कुंजियों की सीमा तक पहुँच गए हैं. कृपया इस सीमा को बढ़ाने के लिए सहायता से संपर्क करें!',
        volumeSizeInvalid:
            'वॉल्यूम का आकार {{min}} और {{max}} GB के बीच होना चाहिए!',
        paymentNotConfigured: 'इस प्लान के लिए भुगतान कॉन्फ़िगर नहीं है!',
        invalidSshKeyFormat: 'अमान्य SSH सार्वजनिक कुंजी प्रारूप!',
        sshKeyInUse:
            'यह SSH कुंजी वर्तमान में एक या अधिक एजेंट्स द्वारा उपयोग में है!',
        inputTooLong: 'इनपुट अधिकतम अनुमत लंबाई से अधिक है!',
        invalidEmailFormat: 'अमान्य ईमेल प्रारूप!',
        plusAddressingNotAllowed:
            'ईमेल लॉगिन के लिए प्लस एड्रेसिंग की अनुमति नहीं है!',
        invalidRedirectUrl: 'अमान्य रीडायरेक्ट URL!',
        fileTooLarge: 'फ़ाइल सामग्री अधिकतम अनुमत आकार से अधिक है!',
        nameAndKeyRequired: 'नाम और सार्वजनिक कुंजी आवश्यक हैं!',
        nameTooLong: 'नाम {{max}} अक्षर या उससे कम होना चाहिए!',
        noBillingAccount: 'कोई बिलिंग खाता नहीं मिला!',
        orderIdRequired: 'ऑर्डर ID आवश्यक है!',
        orderNotFound: 'ऑर्डर नहीं मिला!',
        emailRequired: 'ईमेल आवश्यक है!',
        redirectUrlRequired: 'रीडायरेक्ट URL आवश्यक है!',
        invalidWebhook: 'अमान्य वेबहुक!',
        failedToStartAgent: 'एजेंट शुरू करने में विफल!',
        failedToStopAgent: 'एजेंट रोकने में विफल!',
        failedToRestartAgent: 'एजेंट पुनः शुरू करने में विफल!',
        failedToDeleteAgent: 'एजेंट हटाने में विफल!',
        failedToCreateAgent: 'एजेंट बनाने में विफल!',
        invalidProvider: 'अमान्य प्रदाता!',
        providerNotAllowed: 'यह प्रदाता वर्तमान में उपलब्ध नहीं है!',
        invalidPlan: 'अमान्य प्लान चयनित!',
        planBelowMinimumMemory:
            'यह प्लान न्यूनतम मेमोरी आवश्यकता को पूरा नहीं करता!',
        invalidLocation: 'अमान्य स्थान चयनित!',
        planNotAvailableAtLocation: 'यह प्लान चयनित स्थान पर उपलब्ध नहीं है!',
        failedToSyncAgent: 'सर्वर स्थिति सिंक करने में विफल!',
        failedToProvisionAgent: 'एजेंट प्रावधान करने में विफल!',
        failedToInitiatePurchase: 'खरीद शुरू करने में विफल!',
        failedToCancelDeletion: 'हटाना रद्द करने में विफल!',
        failedToHardDeleteAgent: 'एजेंट स्थायी रूप से हटाने में विफल!',
        failedToCancelScheduledDeletion:
            'शेड्यूल किए गए हटाने को रद्द करने में विफल!',
        failedToCreateSshKey: 'SSH कुंजी बनाने में विफल!',
        failedToDeleteSshKey: 'SSH कुंजी हटाने में विफल!',
        failedToUpdateProfile: 'प्रोफ़ाइल अपडेट करने में विफल!',
        failedToGetProfile: 'प्रोफ़ाइल प्राप्त करने में विफल!',
        failedToGetInvoice: 'चालान प्राप्त करने में विफल!',
        failedToGetCustomerPortal: 'ग्राहक पोर्टल प्राप्त करने में विफल!',
        failedToGetBillingHistory: 'बिलिंग इतिहास प्राप्त करने में विफल!',
        failedToGetStats: 'आँकड़े प्राप्त करने में विफल!',
        affiliateFetched: 'Affiliate info fetched successfully.',
        failedToGetAffiliate: 'Failed to get affiliate info!',
        invalidPeriod: 'अमान्य अवधि फ़िल्टर!',
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
        failedToFetchLocations: 'स्थान प्राप्त करने में विफल!',
        failedToFetchPlans: 'प्लान प्राप्त करने में विफल!',
        failedToFetchVolumePricing: 'वॉल्यूम मूल्य प्राप्त करने में विफल!',
        failedToFetchPlanAvailability: 'प्लान उपलब्धता प्राप्त करने में विफल!',
        failedToSendEmail: 'ईमेल भेजने में विफल!',
        failedToGetVersion: 'संस्करण प्राप्त करने में विफल!',
        failedToGetVersions: 'संस्करण प्राप्त करने में विफल!',
        failedToInstallVersion: 'संस्करण इंस्टॉल करने में विफल!',
        installVersionSuccess: 'संस्करण सफलतापूर्वक इंस्टॉल हो गया.',
        invalidVersion: 'अमान्य संस्करण प्रारूप!',
        outdatedVersion: 'यह संस्करण पुराना है और इंस्टॉल नहीं किया जा सकता!',
        failedToGetDiagnostics: 'इंस्टेंस से कनेक्ट करने में विफल!',
        failedToGetDiagnosticsDescription:
            'डायग्नोस्टिक्स प्राप्त नहीं हो सके. इंस्टेंस ऑफ़लाइन हो सकता है या शुरू हो रहा है.',
        failedToGetLogs: 'लॉग लोड करने में विफल!',
        failedToGetLogsDescription:
            'इस इंस्टेंस के लॉग प्राप्त नहीं हो सके. कृपया बाद में पुनः प्रयास करें.',
        failedToReinstallAgent: 'इंस्टेंस पुनः इंस्टॉल करने में विफल!',
        reinstallSuccess: 'इंस्टेंस सफलतापूर्वक पुनः इंस्टॉल हो गया.',
        reinstallRateLimited:
            'आप हर 24 घंटे में केवल एक बार पुनः इंस्टॉल कर सकते हैं. यदि आप यह सीमा हटाना चाहते हैं तो कृपया टीम से संपर्क करें.',
        subdomainRateLimited:
            'आप हर 24 घंटे में केवल एक बार सबडोमेन बदल सकते हैं. यदि आप यह सीमा हटाना चाहते हैं तो कृपया टीम से संपर्क करें.',
        subdomainUpdated: 'सबडोमेन सफलतापूर्वक अपडेट हो गया.',
        invalidSubdomain:
            'अमान्य सबडोमेन. 3-20 छोटे अक्षर और संख्याएँ उपयोग करें!',
        subdomainAlreadyInUse: 'यह सबडोमेन पहले से उपयोग में है!',
        subdomainNotSupported: 'यह एजेंट प्रकार सबडोमेन का उपयोग नहीं करता।',
        agentBusy: 'एजेंट वर्तमान में प्रावधान या हटाया जा रहा है!',
        reinstallGatewayNotResponding:
            'पुनः इंस्टॉल पूरा हो गया लेकिन गेटवे अभी तक प्रतिक्रिया नहीं दे रहा. इसे शुरू होने में और समय लग सकता है.',
        failedToRepairAgent: 'Failed to repair the instance!',
        repairSuccess: 'Instance repaired successfully.',
        repairGatewayNotResponding:
            'Repair applied but gateway is not responding yet. It may need more time to start.',
        failedToExportAgent: 'एजेंट डेटा निर्यात करने में विफल!',
        agentNotReady: 'एजेंट निर्यात के लिए तैयार नहीं है!',
        exportRateLimited:
            'यह एजेंट हाल ही में निर्यात किया गया था. कृपया दोबारा निर्यात करने से पहले प्रतीक्षा करें!',
        failedToListFiles: 'इंस्टेंस फ़ाइलें सूचीबद्ध करने में विफल!',
        failedToReadFile: 'फ़ाइल पढ़ने में विफल!',
        failedToUpdateFile: 'फ़ाइल सहेजने में विफल!',
        invalidFilePath: 'अमान्य फ़ाइल पथ!',
        fileNotEditable: 'इस फ़ाइल प्रकार को संपादित नहीं किया जा सकता!',
        invalidJsonConfig: 'अमान्य JSON!',
        fileSaveSuccess: 'फ़ाइल सहेजी गई.',
        rateLimitExceeded:
            'कृपया एक और कोड अनुरोध करने से पहले प्रतीक्षा करें!',
        otpExpiredOrNotFound:
            'कोड समाप्त हो गया या नहीं मिला. कृपया नया अनुरोध करें!',
        otpMaxAttemptsReached:
            'बहुत अधिक विफल प्रयास. कृपया नया कोड अनुरोध करें!',
        otpInvalidCode: 'अमान्य कोड. कृपया पुनः प्रयास करें!',
        licenseAlreadyPurchased: 'लाइसेंस पहले से खरीदा गया है!',
        licenseNotAvailable: 'लाइसेंस उत्पाद उपलब्ध नहीं है!',
        licenseCheckoutCreated: 'लाइसेंस चेकआउट बनाया गया.',
        failedToPurchaseLicense: 'लाइसेंस चेकआउट बनाने में विफल!',
        internalServerError: 'एक आंतरिक त्रुटि हुई!',
        invalidCredentials: 'अमान्य क्रेडेंशियल!',
        accountLinked: 'खाता सफलतापूर्वक लिंक किया गया.',
        webhookProcessingFailed: 'वेबहुक प्रोसेसिंग विफल!',
        adminAccessDenied: 'एडमिन एक्सेस आवश्यक!',
        agentsFetched: 'एजेंट्स सफलतापूर्वक प्राप्त हुए.',
        agentFetched: 'एजेंट सफलतापूर्वक प्राप्त हुआ.',
        agentStarsFetched: 'एजेंट स्टार सफलतापूर्वक प्राप्त हुए.',
        agentSynced: 'एजेंट सफलतापूर्वक सिंक हुआ.',
        agentStarted: 'एजेंट सफलतापूर्वक शुरू हुआ.',
        agentStopped: 'एजेंट सफलतापूर्वक रुका.',
        agentRestarted: 'एजेंट सफलतापूर्वक पुनः शुरू हुआ.',
        agentCreated: 'एजेंट सफलतापूर्वक बनाया गया.',
        agentDeleted: 'एजेंट सफलतापूर्वक हटाया गया.',
        agentDeletionScheduled: 'एजेंट हटाना शेड्यूल किया गया.',
        agentDeletionCancelled: 'एजेंट हटाना रद्द किया गया.',
        agentHardDeleted: 'एजेंट स्थायी रूप से हटाया गया.',
        pendingAgentCancelled: 'खरीद रद्द की गई.',
        failedToCancelPendingAgent: 'खरीद रद्द करने में विफल!',
        agentPurchaseInitiated: 'खरीद सफलतापूर्वक शुरू हुई.',
        sshKeysFetched: 'SSH कुंजियाँ सफलतापूर्वक प्राप्त हुईं.',
        sshKeyCreated: 'SSH कुंजी सफलतापूर्वक बनाई गई.',
        sshKeyDeleted: 'SSH कुंजी सफलतापूर्वक हटाई गई.',
        profileFetched: 'प्रोफ़ाइल सफलतापूर्वक प्राप्त हुई.',
        profileUpdated: 'प्रोफ़ाइल सफलतापूर्वक अपडेट हुई.',
        statsFetched: 'आँकड़े सफलतापूर्वक प्राप्त हुए.',
        billingHistoryFetched: 'बिलिंग इतिहास सफलतापूर्वक प्राप्त हुआ.',
        invoiceFetched: 'चालान सफलतापूर्वक प्राप्त हुआ.',
        customerPortalFetched: 'ग्राहक पोर्टल URL सफलतापूर्वक प्राप्त हुआ.',
        plansFetched: 'प्लान सफलतापूर्वक प्राप्त हुए.',
        locationsFetched: 'स्थान सफलतापूर्वक प्राप्त हुए.',
        volumePricingFetched: 'वॉल्यूम मूल्य सफलतापूर्वक प्राप्त हुआ.',
        planAvailabilityFetched: 'प्लान उपलब्धता सफलतापूर्वक प्राप्त हुई.',
        diagnosticsFetched: 'डायग्नोस्टिक्स सफलतापूर्वक प्राप्त हुए.',
        metricsFetched: 'मेट्रिक्स सफलतापूर्वक प्राप्त हुए.',
        failedToGetMetrics: 'सर्वर मेट्रिक्स प्राप्त करने में विफल!',
        overviewFetched: 'अवलोकन सफलतापूर्वक प्राप्त हुआ.',
        failedToGetOverview: 'गेटवे अवलोकन प्राप्त करने में विफल!',
        overviewUnsupported:
            'यह OpenClaw संस्करण अवलोकन सुविधा का समर्थन नहीं करता!',
        passwordRotated: 'Root पासवर्ड सफलतापूर्वक बदला गया.',
        failedToRotatePassword: 'Root पासवर्ड बदलने में विफल!',
        gatewayTokenRotated: 'गेटवे टोकन सफलतापूर्वक बदला गया.',
        failedToRotateGatewayToken: 'गेटवे टोकन बदलने में विफल!',
        sshKeyUpdated: 'SSH कुंजी सफलतापूर्वक अपडेट की गई.',
        failedToUpdateSSHKey: 'SSH कुंजी अपडेट करने में विफल!',
        invalidPassword:
            'पासवर्ड {{min}} और {{max}} अक्षरों के बीच होना चाहिए!',
        invalidGatewayToken:
            'गेटवे टोकन {{min}} और {{max}} अक्षरों के बीच होना चाहिए!',
        enablePreviewSuccess: 'प्रीव्यू मोड सफलतापूर्वक सक्रिय किया गया.',
        failedToEnablePreview: 'प्रीव्यू मोड सक्रिय करने में विफल!',
        logsFetched: 'लॉग सफलतापूर्वक प्राप्त हुए.',
        filesFetched: 'फ़ाइलें सफलतापूर्वक प्राप्त हुईं.',
        fileFetched: 'फ़ाइल सफलतापूर्वक प्राप्त हुई.',
        otpSent: 'कोड सफलतापूर्वक भेजा गया.',
        otpVerified: 'कोड सफलतापूर्वक सत्यापित हुआ.',
        webhookReceived: 'वेबहुक प्राप्त हुआ.',
        unauthorized: 'अनधिकृत!',
        invalidToken: 'अमान्य टोकन!',
        notFound: 'नहीं मिला!',
        healthOk: 'API चल रही है.',
        featureVersionUnsupported:
            'यह सुविधा संस्करण {{version}} पर समर्थित नहीं है। कृपया OpenClaw अपडेट करें या मैन्युअल रूप से प्रबंधित करने के लिए टर्मिनल का उपयोग करें।',
        invalidAuthMethod: 'अमान्य प्रमाणीकरण विधि!',
        authMethodNotConnected: 'यह प्रमाणीकरण विधि कनेक्ट नहीं है!',
        authMethodConnected: 'प्रमाणीकरण विधि सफलतापूर्वक कनेक्ट हुई.',
        authMethodDisconnected: 'प्रमाणीकरण विधि सफलतापूर्वक डिस्कनेक्ट हुई.',
        failedToConnectAuthMethod: 'प्रमाणीकरण विधि कनेक्ट करने में विफल!',
        failedToDisconnectAuthMethod:
            'प्रमाणीकरण विधि डिस्कनेक्ट करने में विफल!',
        featureEmailsDisabled: 'फ़ीचर ईमेल वर्तमान में अक्षम हैं.',
        featureEmailsSent: 'फ़ीचर ईमेल सफलतापूर्वक भेजे गए.',
        featureEmailsFailed: 'फ़ीचर ईमेल भेजने में विफल!',
        invalidFeatureKey: 'अमान्य फ़ीचर कुंजी!',
        adminUsersFetched: 'उपयोगकर्ता सफलतापूर्वक प्राप्त हुए।',
        failedToGetAdminUsers: 'उपयोगकर्ता प्राप्त करने में विफल!',
        adminUserDetailFetched: 'उपयोगकर्ता विवरण सफलतापूर्वक प्राप्त हुआ।',
        failedToGetAdminUserDetail: 'उपयोगकर्ता विवरण प्राप्त करने में विफल!',
        adminUserUpdated: 'उपयोगकर्ता अपडेट किया गया।',
        failedToUpdateAdminUser: 'उपयोगकर्ता अपडेट करने में विफल!',
        adminStatsFetched: 'आँकड़े प्राप्त हुए।',
        failedToGetAdminStats: 'आँकड़े प्राप्त करने में विफल!',
        adminAnalyticsFetched: 'विश्लेषण सफलतापूर्वक प्राप्त.',
        failedToGetAdminAnalytics: 'विश्लेषण प्राप्त करने में विफल!',
        adminBillingFetched: 'बिलिंग सफलतापूर्वक प्राप्त.',
        failedToGetAdminBilling: 'बिलिंग प्राप्त करने में विफल!',
        adminAgentsFetched: 'Agents प्राप्त हुए।',
        failedToGetAdminAgents: 'Agents प्राप्त करने में विफल!',
        adminSSHKeysFetched: 'SSH कुंजियाँ प्राप्त हुईं।',
        failedToGetAdminSSHKeys: 'SSH कुंजियाँ प्राप्त करने में विफल!',
        adminVolumesFetched: 'वॉल्यूम प्राप्त हुए।',
        failedToGetAdminVolumes: 'वॉल्यूम प्राप्त करने में विफल!',
        adminReferralsFetched: 'Referrals fetched.',
        failedToGetAdminReferrals: 'Failed to fetch referrals!',
        adminPendingAgentsFetched: 'Pending agents fetched.',
        failedToGetAdminPendingAgents: 'Failed to fetch pending agents!',
        adminExportsFetched: 'Exports fetched.',
        adminEmailsFetched: 'Emails fetched.',
        failedToGetAdminEmails: 'Failed to fetch emails!'
    },
    emails: {
        otpSubject: 'आपका ClawHost साइन-इन कोड',
        otpPreview: 'आपका ClawHost साइन-इन कोड: {{code}}',
        otpHeading: 'आपका साइन-इन कोड है:',
        otpExpiry:
            'कोड 10 मिनट में समाप्त हो जाएगा. यदि यह आप नहीं थे, तो इस ईमेल को अनदेखा करें.',
        featureFooter:
            'आपको यह इसलिए प्राप्त हो रहा है क्योंकि आपके पास एक ClawHost खाता है.',
        features: {
            terminal: {
                subject: 'क्या आप जानते हैं? आपके पास एक वेब टर्मिनल है',
                preview: 'अपने सर्वर को सीधे ब्राउज़र से एक्सेस करें',
                tag: 'वेब टर्मिनल',
                heading: 'आपका सर्वर एक क्लिक दूर है',
                description:
                    'हमारे बिल्ट-इन टर्मिनल से अपने सर्वर को सीधे ब्राउज़र से एक्सेस करें. कोई SSH क्लाइंट नहीं चाहिए — बस ClawHost खोलें और कमांड टाइप करना शुरू करें.',
                cta: 'टर्मिनल खोलें'
            },
            logs: {
                subject: 'क्या आप जानते हैं? आपके डैशबोर्ड में रीयल-टाइम लॉग',
                preview: 'ब्राउज़र छोड़े बिना अपने सर्वर लॉग मॉनिटर करें',
                tag: 'लाइव लॉग्स',
                heading: 'देखें आपका सर्वर क्या कर रहा है',
                description:
                    'ClawHost डैशबोर्ड से रीयल टाइम में अपने सर्वर लॉग मॉनिटर करें. ब्राउज़र छोड़े बिना समस्याओं का निदान करें, डिप्लॉयमेंट ट्रैक करें और अपने एप्लिकेशन डीबग करें.',
                cta: 'लॉग देखें'
            },
            fileExplorer: {
                subject:
                    'क्या आप जानते हैं? ब्राउज़र से सर्वर फ़ाइलें संपादित करें',
                preview:
                    'SSH के बिना फ़ाइलें ब्राउज़ करें, पढ़ें और संपादित करें',
                tag: 'फ़ाइल एक्सप्लोरर',
                heading: 'आपकी फ़ाइलें, आपकी उँगलियों पर',
                description:
                    'ClawHost डैशबोर्ड से सीधे अपने सर्वर पर फ़ाइलें ब्राउज़ करें, पढ़ें और संपादित करें. सिंटैक्स हाइलाइटिंग, खोज और तुरंत सहेजना — कोई SSH नहीं चाहिए.',
                cta: 'फ़ाइल एक्सप्लोरर खोलें'
            },
            diagnostics: {
                subject: 'क्या आप जानते हैं? बिल्ट-इन हेल्थ चेक',
                preview: 'डैशबोर्ड से अपने सर्वर की सेहत मॉनिटर करें',
                tag: 'डायग्नोस्टिक्स',
                heading: 'जानें कि आपका सर्वर स्वस्थ है',
                description:
                    'सर्विस स्टेटस, मेमोरी उपयोग और पोर्ट उपलब्धता जाँचने के लिए अपने क्लॉ पर डायग्नोस्टिक्स चलाएँ. समस्याओं को बड़ा होने से पहले पकड़ें.',
                cta: 'डायग्नोस्टिक्स चलाएँ'
            },
            sshKeys: {
                subject:
                    'क्या आप जानते हैं? ClawHost से SSH कुंजियाँ प्रबंधित करें',
                preview: 'डैशबोर्ड में SSH कुंजी जोड़ी बनाएँ और प्रबंधित करें',
                tag: 'SSH कीज़',
                heading: 'SSH कुंजियाँ, सरलीकृत',
                description:
                    'SSH कुंजी जोड़ी बनाएँ, सार्वजनिक कुंजियाँ कॉपी करें और निजी कुंजियाँ डाउनलोड करें — सब कुछ ClawHost डैशबोर्ड से. सुरक्षित पहुँच के लिए क्लॉज़ को कुंजियाँ असाइन करें.',
                cta: 'SSH कुंजियाँ प्रबंधित करें'
            },
            exportConfig: {
                subject:
                    'क्या आप जानते हैं? अपना क्लॉ कॉन्फ़िगरेशन निर्यात करें',
                preview:
                    'अपना क्लॉ सेटअप पोर्टेबल कॉन्फ़िग के रूप में डाउनलोड करें',
                tag: 'एक्सपोर्ट कॉन्फिग',
                heading: 'अपना कॉन्फ़िग साथ ले जाएँ',
                description:
                    'अपना क्लॉ कॉन्फ़िगरेशन और सेटिंग्स डाउनलोड करने योग्य फ़ाइल के रूप में निर्यात करें. अपना सेटअप बैकअप करें या अपने वातावरण की प्रतिकृति बनाने के लिए उपयोग करें.',
                cta: 'कॉन्फ़िग निर्यात करें'
            },
            multiLanguage: {
                subject: 'क्या आप जानते हैं? ClawHost आपकी भाषा बोलता है',
                preview: 'ClawHost को 14 भाषाओं में उपयोग करें',
                tag: 'मल्टी-लैंग्वेज',
                heading: 'आपकी भाषा में ClawHost',
                description:
                    'पूरे ClawHost डैशबोर्ड को 14 भाषाओं में से किसी में भी बदलें. बटनों से लेकर त्रुटि संदेशों तक — सब कुछ पूरी तरह अनुवादित.',
                cta: 'भाषा बदलें'
            },
            subdomain: {
                subject: 'क्या आप जानते हैं? हर क्लॉ को अपना सबडोमेन मिलता है',
                preview: 'कस्टम URL से कहीं से भी अपने क्लॉ तक पहुँचें',
                tag: 'कस्टम सबडोमेन',
                heading: 'कहीं से भी एक्सेस करें',
                description:
                    'हर क्लॉ को एक अनूठा सबडोमेन मिलता है ताकि आप कहीं से भी अपने OpenClaw इंस्टेंस तक पहुँच सकें. कोई पोर्ट फ़ॉरवर्डिंग नहीं, कोई लोकल नेटवर्क नहीं — बस एक URL.',
                cta: 'अपना सबडोमेन देखें'
            },
            darkMode: {
                subject: 'क्या आप जानते हैं? ClawHost में डार्क मोड है',
                preview: 'लाइट और डार्क थीम के बीच स्विच करें',
                tag: 'डार्क मोड',
                heading: 'आँखों पर आसान',
                description:
                    'ClawHost डैशबोर्ड में लाइट और डार्क थीम के बीच टॉगल करें. आपकी पसंद सहेजी जाती है और हर बार स्वचालित रूप से लागू होती है.',
                cta: 'डार्क मोड आज़माएँ'
            },
            reinstall: {
                subject:
                    'क्या आप जानते हैं? एक क्लिक में OpenClaw पुनः इंस्टॉल करें',
                preview:
                    'अपना सर्वर खोए बिना अपना OpenClaw इंस्टेंस रीसेट करें',
                tag: 'रीइंस्टॉल',
                heading: 'नई शुरुआत, वही सर्वर',
                description:
                    'एक क्लिक में अपने मौजूदा सर्वर पर OpenClaw रनटाइम पुनः इंस्टॉल करें. आपका सर्वर बरकरार रहता है — केवल OpenClaw को क्लीन इंस्टॉलेशन मिलता है.',
                cta: 'और जानें'
            },
            hermesAgentLaunch: {
                subject: 'Hermes Agent आ गया है',
                preview: 'Hermes एजेंट सीधे ClawHost पर तैनात करें।',
                tag: 'Hermes Agent',
                heading: 'Hermes एजेंट, अब ClawHost पर',
                description:
                    'Hermes Agent अब ClawHost पर समर्थित है। मिनटों में Hermes-संचालित claw चालू करें, Files टैब से मॉडल प्रदाताओं को कॉन्फ़िगर करें, और बिल्ट-इन टर्मिनल से इसके साथ चैट करें। कोई अतिरिक्त सेटअप नहीं, कोई ग्लू कोड नहीं।',
                cta: 'Hermes तैनात करें'
            },
            clawHostGoLaunch: {
                subject: 'ClawHost Go आ गया है',
                preview: 'अपनी मशीन पर स्थानीय रूप से OpenClaw चलाने के लिए एक नेटिव डेस्कटॉप ऐप।',
                tag: 'ClawHost Go',
                heading: 'आपके claws, आपकी डेस्क पर',
                description:
                    'ClawHost Go macOS और Windows के लिए एक नेटिव डेस्कटॉप ऐप है। अपनी मशीन पर सीधे OpenClaw इंस्टेंस तैनात और प्रबंधित करें — कोई क्लाउड नहीं, कोई सब्सक्रिप्शन नहीं, बस एक बार का लाइसेंस। इसमें बिल्ट-इन टर्मिनल, फ़ाइल एडिटर, वर्शन मैनेजर और ज़ीरो-कॉन्फिग लोकल DNS शामिल है।',
                cta: 'ClawHost Go डाउनलोड करें'
            },
            productHuntLaunch: {
                subject: 'Product Hunt पर हमारे लॉन्च में मदद करें',
                preview: 'हमने अभी Product Hunt पर लॉन्च किया है। आपका वोट मायने रखता है।',
                tag: 'Product Hunt लॉन्च',
                heading: 'हम Product Hunt पर लाइव हैं',
                description:
                    'आज हमने Product Hunt पर ClawHost लॉन्च किया है। अगर हमने आपको तेज़ी से शिप करने में मदद की है, तो एक अपवोट बहुत मायने रखेगा। धन्यवाद स्वरूप, अपने पहले ऑर्डर पर 10% छूट के लिए PH10 कोड का उपयोग करें।',
                cta: 'Product Hunt पर अपवोट करें'
            },
            yearlyPlans: {
                subject: 'क्या आप जानते हैं? वार्षिक प्लान से बचत करें',
                preview: 'वार्षिक बिलिंग पर स्विच करें और कम भुगतान करें',
                tag: 'वार्षिक प्लान्स',
                heading: 'कम भुगतान करें, अधिक पाएँ',
                description:
                    'वार्षिक बिलिंग पर स्विच करें और अपनी क्लॉ सब्सक्रिप्शन पर बचत करें. वही शानदार सेवा, कम कीमत — कभी भी रद्द करें.',
                cta: 'प्लान देखें'
            }
        }
    },
    auth: {
        signIn: 'प्रमाणीकरण',
        signInDescription:
            'अपने OpenClaw इंस्टेंस प्रबंधित करने के लिए अपने ClawHost खाते में साइन इन करें.',
        signingIn: 'प्रमाणित हो रहा है...',
        verifyCode: 'कोड सत्यापित करें',
        checkYourEmail: 'अपना ईमेल जाँचें',
        checkYourEmailHeading: 'अपना ईमेल जाँचें',
        codeSentTo: 'हमने 6 अंकों का कोड भेजा है',
        signInToDeployOpenClaw:
            'एक क्लिक में एजेंट प्रबंधित और डिप्लॉय करने के लिए प्रमाणित करें.',
        emailAddress: 'ईमेल पता',
        emailPlaceholder: 'example@clawhost.cloud',
        continueWithEmail: 'ईमेल से जारी रखें',
        otpDescription:
            'हम आपको साइन इन करने के लिए एक कोड भेजेंगे. कोई पासवर्ड नहीं चाहिए.',
        welcomeBack: 'वापसी पर स्वागत है.',
        resendIn: '{{seconds}}s में पुनः भेजें',
        resendCode: 'कोड पुनः भेजें',
        changeEmail: 'ईमेल बदलें',
        invalidCode: 'अमान्य कोड!',
        invalidEmailFormat: 'कृपया एक मान्य ईमेल पता दर्ज करें!',
        plusAddressingNotAllowed:
            'ईमेल लॉगिन के लिए प्लस एड्रेसिंग की अनुमति नहीं है!',
        or: 'या',
        continueWithGoogle: 'Google से जारी रखें',
        continueWithGithub: 'GitHub से जारी रखें',
        agreementNotice: 'जारी रखकर, आप हमारी',
        termsOfService: 'सेवा की शर्तों',
        andWord: 'और',
        privacyPolicy: 'गोपनीयता नीति'
    },
    account: {
        title: 'खाता',
        description:
            'अपने ClawHost खाते की सेटिंग्स और प्रोफ़ाइल जानकारी प्रबंधित करें.',
        accountSettings: 'खाता',
        manageYourAccount: 'अपनी प्रोफ़ाइल और खाता सेटिंग्स प्रबंधित करें.',
        profileInformation: 'प्रोफ़ाइल जानकारी',
        profileDescription: 'आपकी व्यक्तिगत जानकारी और प्रदर्शन नाम.',
        noNameSet: 'कोई नाम सेट नहीं',
        joined: 'शामिल हुए',
        claws: 'क्लॉज़',
        sshKeys: 'कुंजियाँ',
        displayName: 'प्रदर्शन नाम',
        enterYourName: 'अपना नाम दर्ज करें',
        emailAddress: 'ईमेल पता',
        emailNotEditable: 'ईमेल संपादन योग्य नहीं है. सहायता से संपर्क करें.',
        profileUpdatedSuccessfully: 'प्रोफ़ाइल सफलतापूर्वक अपडेट हुई.',
        billingAndSubscription: 'बिलिंग और सदस्यता',
        billingAndSubscriptionDescription:
            'अपनी भुगतान विधियाँ, सदस्यताएँ और चालान प्रबंधित करें.',
        viewBillingHistory: 'अपना भुगतान इतिहास, चालान और सदस्यताएँ देखें.',
        aboutApp: 'ऐप के बारे में',
        aboutAppDescription: 'ऐप की जानकारी और संस्करण।',
        appVersion: 'ऐप संस्करण',
        operatingSystem: 'ऑपरेटिंग सिस्टम',
        architecture: 'आर्किटेक्चर',
        checkForUpdates: 'अपडेट जांचें',
        checkNow: 'अभी जांचें',
        updatesUpToDate: 'आप नवीनतम संस्करण पर हैं।',
        updateReady: 'संस्करण {{version}} इंस्टॉल के लिए तैयार।',
        restartToInstall: 'इंस्टॉल करने के लिए पुनः आरंभ करें',
        connectedAccounts: 'कनेक्टेड खाते',
        connectedAccountsDescription:
            'अपने खाते से जुड़ी साइन-इन विधियाँ प्रबंधित करें.',
        authEmail: 'ईमेल',
        authGoogle: 'Google',
        authGithub: 'GitHub',
        authConnected: 'कनेक्टेड',
        authConnect: 'कनेक्ट करें',
        authDisconnect: 'डिस्कनेक्ट करें',
        emailCannotBeDisconnected:
            'ईमेल हमेशा आपकी प्राथमिक साइन-इन विधि के रूप में कनेक्टेड रहता है.',
        providerConnected: '{{provider}} सफलतापूर्वक कनेक्ट हुआ.',
        providerDisconnected: '{{provider}} सफलतापूर्वक डिस्कनेक्ट हुआ.',
        providerEmailMismatch:
            'आप केवल उन खातों को कनेक्ट कर सकते हैं जो समान ईमेल पते का उपयोग करते हैं!',
        settings: 'सेटिंग्स',
        settingsDescription: 'अपनी डैशबोर्ड प्राथमिकताएँ प्रबंधित करें.',
        openLinksWindowed: 'विंडो व्यू में लिंक खोलें',
        openLinksWindowedDescription:
            'सक्षम होने पर, बाहरी लिंक सिस्टम ब्राउज़र के बजाय ऐप के अंदर खुलते हैं.'
    },
    billing: {
        date: 'दिनांक',
        product: 'उत्पाद',
        amount: 'राशि',
        status: 'स्थिति',
        statusPaid: 'भुगतान किया गया',
        statusPending: 'लंबित',
        statusRefunded: 'वापस किया गया',
        statusPartiallyRefunded: 'आंशिक रूप से वापस किया गया',
        billingReasonPurchase: 'खरीद',
        billingReasonSubscriptionCreate: 'नई सब्सक्रिप्शन',
        billingReasonSubscriptionCycle: 'नवीनीकरण',
        billingReasonSubscriptionUpdate: 'सब्सक्रिप्शन अपडेट',
        failedToLoadBilling: 'बिलिंग इतिहास लोड करने में विफल!',
        downloadInvoice: 'चालान डाउनलोड करें',
        invoiceCanceledNavigation:
            'चालान डाउनलोड बाधित क्योंकि आप पृष्ठ से चले गए।',
        failedToLoadInvoice: 'चालान लोड करने में विफल!',
        couponApplied: 'कूपन: {{name}}',
        manageBilling: 'बिलिंग प्रबंधित करें',
        failedToLoadPortal: 'बिलिंग पोर्टल खोलने में विफल!',
        portalCanceledNavigation:
            'बिलिंग पोर्टल बाधित क्योंकि आप पृष्ठ से चले गए।'
    },
    license: {
        title: 'लाइसेंस',
        description: 'अपना OpenClaw लाइसेंस प्रबंधित करें.',
        pageTitle: 'लाइसेंस',
        pageDescription:
            'हमारे Go ऐप के साथ स्थानीय रूप से OpenClaw इंस्टेंस सेल्फ-होस्ट करने के लिए अपना लाइसेंस खरीदें.',
        planName: 'ClawHost Go लाइसेंस',
        oneTimePurchase: 'एक बार की खरीद',
        price: '${{price}}',
        priceNote: 'एक बार भुगतान करें, हमेशा के लिए रखें.',
        purchaseLicense: 'लाइसेंस खरीदें',
        purchasing: 'रीडायरेक्ट हो रहा है...',
        activated: 'लाइसेंस सक्रिय',
        activatedDescription:
            'आपका लाइसेंस सक्रिय है. आपके समर्थन के लिए धन्यवाद.',
        paymentSuccess: 'भुगतान सफल. आपका लाइसेंस अब सक्रिय है.',
        failedToPurchase: 'चेकआउट शुरू करने में विफल!',
        featureUnlimitedClaws: 'असीमित OpenClaws',
        featureDevices: 'असीमित डिवाइस',
        featureUpdates: 'हमेशा के लिए अपडेट',
        featureSupport: 'प्राथमिकता सहायता',
        featureCloud: 'सभी क्लाउड सुविधाएँ, स्थानीय रूप से',
        whatsIncluded: 'क्या शामिल है',
        gateTitle: 'लाइसेंस आवश्यक',
        gateDescription:
            'स्थानीय रूप से OpenClaw इंस्टेंस डिप्लॉय और प्रबंधित करने के लिए आपको ClawHost Go लाइसेंस की आवश्यकता है.'
    },
    network: {
        offline: 'कोई इंटरनेट कनेक्शन नहीं',
        offlineDescription:
            'आप वर्तमान में ऑफ़लाइन हैं. इंटरनेट एक्सेस की आवश्यकता वाली सुविधाएँ अनुपलब्ध होंगी.'
    },
    dashboard: {
        title: 'क्लॉज़',
        description:
            'अपने डिप्लॉय किए गए OpenClaw इंस्टेंस देखें और प्रबंधित करें. अपने VPS सर्वर शुरू, बंद, पुनः शुरू और मॉनिटर करें.',
        claw: 'क्लॉ',
        clawsPlural: 'क्लॉज़',
        clawCountLabel: '{{count}} क्लॉज़',
        clawCountLabelSingular: '{{count}} क्लॉ',
        newClaw: 'नया क्लॉ',
        searchAgents: 'एजेंट खोजें...',
        searchAgentsCount: '{{count}} एजेंट खोजें...',
        noAgentsMatchSearch: 'कोई एजेंट नहीं मिला.',
        clawActions: 'क्लॉ कार्य',
        noAgentsYet: 'कोई एजेंट नहीं',
        noAgentsDescription:
            'कोई डिप्लॉय किया गया एजेंट नहीं मिला. लेकिन आप $25/माह से शुरू करके कभी भी अपना पहला एजेंट डिप्लॉय कर सकते हैं. बस AI करें.',
        deleteClaw: 'क्लॉ हटाएँ',
        deleteClawConfirmation: 'क्या आप वाकई हटाना चाहते हैं',
        deleteClawWarning:
            'आपकी सब्सक्रिप्शन रद्द हो जाएगी और सर्वर आपकी वर्तमान बिलिंग अवधि के अंत में हटा दिया जाएगा. तब तक आप इसका उपयोग जारी रख सकते हैं.',
        actionCannotBeUndone: 'यह कार्य पूर्ववत नहीं किया जा सकता.',
        start: 'शुरू करें',
        startServer: 'सर्वर शुरू करें',
        stop: 'बंद करें',
        stopServer: 'सर्वर बंद करें',
        restart: 'पुनः शुरू करें',
        restartServer: 'सर्वर पुनः शुरू करें',
        startClaw: 'सर्वर शुरू करें',
        startClawConfirmation:
            'यह सर्वर और उसकी सभी प्रक्रियाओं को शुरू करेगा. यह केवल आवश्यकता होने पर ही करें.',
        stopClaw: 'सर्वर बंद करें',
        stopClawConfirmation:
            'यह सर्वर पर चल रही सभी प्रक्रियाओं को बंद कर देगा, जिसमें OpenClaw भी शामिल है. कोई डेटा नहीं खोएगा. यह केवल आवश्यकता होने पर ही करें. आप इसे कभी भी फिर से शुरू कर सकते हैं. बंद करने से बिलिंग नहीं रुकती — चार्ज होना बंद करने के लिए सर्वर हटाएँ.',
        restartClaw: 'सर्वर पुनः शुरू करें',
        restartClawConfirmation:
            'यह सर्वर पर चल रही सभी प्रक्रियाओं को बंद कर देगा, जिसमें OpenClaw भी शामिल है, और उन्हें फिर से शुरू करेगा. कोई डेटा नहीं खोएगा. यह केवल आवश्यकता होने पर ही करें.',
        copyPassword: 'पासवर्ड कॉपी करें',
        copySshWithKey: 'SSH कॉपी करें (कुंजी के साथ)',
        copySshWithPassword: 'SSH कॉपी करें (पासवर्ड के साथ)',
        connect: 'SSH कमांड कॉपी करें',
        viewServerCredentials: 'सर्वर क्रेडेंशियल',
        serverCredentials: 'सर्वर क्रेडेंशियल',
        serverCredentialsDescription:
            'SSH के माध्यम से अपने सर्वर से कनेक्ट करने के लिए इन क्रेडेंशियल का उपयोग करें.',
        sshCommand: 'SSH कमांड',
        rootPassword: 'रूट पासवर्ड',
        sshCommandCopied: 'SSH कमांड कॉपी हो गई.',
        sshCommandWithPasswordCopied: 'पासवर्ड के साथ SSH कमांड कॉपी हो गई.',
        passwordCopiedToClipboard: 'पासवर्ड क्लिपबोर्ड पर कॉपी हो गया.',
        plan: 'सर्वर',
        location: 'स्थान',
        ip: 'IP',
        domain: 'डोमेन',
        ipAddress: 'IP पता',
        port: 'पोर्ट',
        subscription: 'सदस्यता',
        history: 'इतिहास',
        planCost: 'प्लान',
        serverId: 'सर्वर ID',
        created: 'बनाया गया',
        sshKey: 'SSH कुंजी',
        storage: 'स्टोरेज',
        nextBilling: 'अगली बिलिंग',
        lastBilling: 'पिछली बिलिंग',
        totalSpent: 'कुल खर्च',
        version: 'संस्करण',
        gatewayToken: 'गेटवे टोकन',
        gatewayTokenDescription:
            'अपने गेटवे से प्रमाणित करने के लिए इस टोकन का उपयोग करें',
        contactSupport: 'सहायता से संपर्क करें',
        scheduledForDeletion: 'हटाने के लिए शेड्यूल',
        scheduledDeletionShort: '{{date}} को हटाया जाएगा',
        deletionDate: 'यह क्लॉ {{date}} को हटाया जाएगा',
        deletionTooltip:
            '{{date}} को हटाने के लिए शेड्यूल किया गया. रद्द करने के लिए मेनू का उपयोग करें.',
        pastDue: 'भुगतान विफल',
        deletionFailed: 'हटाना विफल',
        pastDueDescription:
            'आपका भुगतान विफल हो गया. यदि 14 दिनों में हल नहीं हुआ, तो यह क्लॉ स्थायी रूप से हटा दिया जाएगा.',
        updatePayment: 'भुगतान अपडेट करें',
        cancelDeletion: 'हटाना रद्द करें',
        cancelDeletionConfirmation:
            'क्या आप सुनिश्चित हैं? आपकी सदस्यता सक्रिय रहेगी और आपसे शुल्क लिया जाता रहेगा। इंस्टेंस चलता रहेगा।',
        deletionCancelled: 'हटाना रद्द किया गया.',
        scheduleDeletion: 'हटाना शेड्यूल करें',
        resumeCheckout: 'चेकआउट जारी रखें',
        cancelPurchase: 'खरीद रद्द करें',
        hardDelete: 'बलपूर्वक हटाएँ',
        hardDeleteClaw: 'बलपूर्वक हटाएँ',
        hardDeleteConfirmation:
            'क्या आप वाकई इस क्लॉ को तुरंत हटाना चाहते हैं? आप अपनी वर्तमान बिलिंग अवधि का शेष समय खो देंगे. यह कार्य पूर्ववत नहीं किया जा सकता.',
        diagnostics: 'डायग्नोस्टिक्स',
        diagnosticsDescription: 'अपने OpenClaw इंस्टेंस की सेहत जाँचें.',
        diagnosticsStatus: 'स्थिति',
        diagnosticsLogs: 'लॉग',
        diagnosticsRepair: 'Repair',
        diagnosticsRepairDescription:
            'Remove memory limits, apply latest service configuration, and restart the gateway. This fixes most common issues.',
        diagnosticsRepairSuccess: 'Instance repaired successfully.',
        diagnosticsRepairFailed:
            'Repair applied but gateway is not responding yet!',
        diagnosticsLoading: 'इंस्टेंस से कनेक्ट हो रहा है...',
        diagnosticsNoLogs:
            'कोई लॉग उपलब्ध नहीं. लॉग जनरेट करने के लिए अपना इंस्टेंस शुरू करें.',
        diagnosticsNoLogsHermesTitle: 'Hermes गेटवे नहीं चल रहा है',
        diagnosticsNoLogsHermesDescription:
            'Terminal टैब में, प्लेटफ़ॉर्म कॉन्फ़िगर करने के लिए `hermes gateway setup` चलाएं, फिर ब्रिज शुरू करने के लिए `sudo systemctl enable --now hermes-gateway` चलाएं.',
        diagnosticsIssueDetected: 'आपके इंस्टेंस में एक समस्या पाई गई.',
        diagnosticsHealthy: 'आपका इंस्टेंस सामान्य रूप से चल रहा है.',
        diagnosticsPort: 'पोर्ट 18789',
        diagnosticsMemory: 'मेमोरी',
        logsDescription:
            'आपके गेटवे लॉग की नवीनतम 100 पंक्तियाँ, स्वतः रिफ़्रेश हो रही हैं.',
        fileExplorer: 'फ़ाइल एक्सप्लोरर',
        fileExplorerRoot: 'openclaw',
        fileExplorerDescription:
            'अपनी OpenClaw कॉन्फ़िग फ़ाइलें ब्राउज़ और संपादित करें. गलत परिवर्तन आपके इंस्टेंस को तोड़ सकते हैं.',
        fileExplorerSelectFile: 'सामग्री देखने के लिए एक फ़ाइल चुनें.',
        fileExplorerReadOnly: 'केवल पठन',
        fileExplorerSave: 'सहेजें',
        fileExplorerSaved: 'फ़ाइल सहेजी गई.',
        fileExplorerSaveCanceledNavigation:
            'फ़ाइल सहेजना बाधित क्योंकि आप पृष्ठ से चले गए।',
        fileExplorerInvalidJson:
            'अमान्य JSON. कृपया सहेजने से पहले सिंटैक्स त्रुटियाँ ठीक करें!',
        fileExplorerNoFiles: 'कोई फ़ाइलें नहीं मिलीं',
        fileExplorerSearchFiles: 'फ़ाइलें खोजें...',
        fileExplorerNoSearchResults: 'कोई मिलती-जुलती फ़ाइलें नहीं.',
        startFailed: 'क्लॉ शुरू करने में विफल!',
        renameSuccess: 'क्लॉ का नाम सफलतापूर्वक बदला गया.',
        renameFailed: 'क्लॉ का नाम बदलने में विफल!',
        renameInvalidChars: 'केवल अक्षर, संख्याएँ और डैश की अनुमति है!',
        reinstallInstance: 'इंस्टेंस पुनः इंस्टॉल करें',
        reinstallClaw: 'इंस्टेंस पुनः इंस्टॉल करें',
        reinstallClawConfirmation:
            'यह इस इंस्टेंस पर {{agentName}} को पूरी तरह पुनः इंस्टॉल करेगा. सभी कॉन्फ़िगरेशन, एजेंट और डेटा रीसेट हो जाएँगे. यह कार्य पूर्ववत नहीं किया जा सकता. जारी रखें?',
        reinstallInstanceSuccess: 'इंस्टेंस सफलतापूर्वक पुनः इंस्टॉल हुआ.',
        reinstallInstanceFailed: 'इंस्टेंस पुनः इंस्टॉल करने में विफल!',
        reinstallCanceledNavigation:
            'पुनः स्थापना बाधित क्योंकि आप पृष्ठ से चले गए।',
        openControlPanel: 'कंट्रोल पैनल खोलें',
        exportData: 'क्लॉ निर्यात करें (.zip)',
        exportAgent: 'निर्यात',
        exportAgentButton: 'डेटा निर्यात करें',
        exportAgentTooltip:
            'इस एजेंट और इसके सभी डेटा को .zip फ़ाइल के रूप में डाउनलोड करें।',
        exportAgentInProgress:
            'बड़े एजेंट्स के लिए निर्यात में कुछ मिनट लग सकते हैं।',
        exportStarted: 'निर्यात तैयार हो रहा है, इसमें कुछ समय लग सकता है...',
        exportSuccess: 'क्लॉ सफलतापूर्वक निर्यात हुआ.',
        exportFailed: 'क्लॉ डेटा निर्यात करने में विफल!',
        exportCanceledNavigation: 'निर्यात रद्द क्योंकि आप पृष्ठ से चले गए।',
        scheduleDeletionCanceledNavigation:
            'विलोपन शेड्यूल बाधित क्योंकि आप पृष्ठ से चले गए।',
        cancelDeletionCanceledNavigation:
            'विलोपन निरस्तीकरण बाधित क्योंकि आप पृष्ठ से चले गए।',
        hardDeleteCanceledNavigation:
            'बलपूर्वक विलोपन बाधित क्योंकि आप पृष्ठ से चले गए।',
        exportRateLimited:
            'आप {{minutes}} मिनट में फिर से निर्यात कर सकते हैं.',
        exportRateLimitedOne: 'आप 1 मिनट में फिर से निर्यात कर सकते हैं.',
        configuringTooltip:
            'इसमें कुछ समय लग सकता है. यह OpenClaw, सर्वर स्थान और Cloudflare DNS पर निर्भर करता है.',
        paymentSuccess: 'आपका क्लॉ बनाया और कॉन्फ़िगर किया जा रहा है.',
        dnsSetupBanner:
            'subdomain.clawhost के माध्यम से अपने क्लॉज़ तक पहुँचने के लिए स्थानीय DNS सेट करें.',
        dnsSetupButton: 'DNS सेट करें',
        dnsSetupSuccess: 'DNS रिज़ॉल्वर सफलतापूर्वक कॉन्फ़िगर हुआ.',
        dnsSetupError: 'DNS रिज़ॉल्वर कॉन्फ़िगर करने में विफल!',
        userTab: 'उपयोगकर्ता',
        adminTab: 'एडमिन',
        adminTitle: 'एडमिन',
        adminDescription: 'प्लेटफ़ॉर्म पर सभी क्लॉज़ प्रबंधित करें.',
        adminNoClaws: 'प्लेटफ़ॉर्म पर अभी तक कोई क्लॉज़ नहीं.',
        adminAccessDenied: 'आपको इस पृष्ठ तक पहुँचने की अनुमति नहीं है.',
        owner: 'मालिक',
        agentType: 'Agent',
        status: {
            running: 'चल रहा है',
            stopped: 'रुका हुआ',
            starting: 'शुरू हो रहा है',
            stopping: 'रुक रहा है',
            creating: 'बनाया जा रहा है',
            configuring: 'कॉन्फ़िगर हो रहा है',
            initializing: 'सेटअप हो रहा है',
            migrating: 'माइग्रेट हो रहा है',
            rebuilding: 'पुनर्निर्माण हो रहा है',
            restarting: 'पुनः शुरू हो रहा है',
            unreachable: 'अप्राप्य',
            deleting: 'हटाया जा रहा है',
            scheduledDeletion: 'हटाना शेड्यूल किया गया',
            awaitingPayment: 'भुगतान की प्रतीक्षा',
            unknown: 'अज्ञात',
            checking: 'जाँच हो रही है'
        },
        tabNotAvailableForAgent: 'इस एजेंट प्रकार के लिए उपलब्ध नहीं'
    },
    createClaw: {
        title: 'OpenClaw डिप्लॉय करें',
        description:
            'अपना सर्वर कॉन्फ़िगर करें और AI के साथ निर्माण शुरू करें.',
        clawName: 'नाम',
        clawNamePlaceholder: 'उदा. cozy-panda',
        clawNameInvalidChars: 'केवल अक्षर, संख्याएँ और डैश की अनुमति है!',
        autoGenerateNameHint: 'स्वतः नाम बनाने के लिए खाली छोड़ें.',
        agentType: 'एजेंट प्रकार',
        agentTypeOpenClaw: 'OpenClaw',
        agentTypeHermes: 'Hermes',
        agentTypeOpenClawDescription: '{{count}} स्टार',
        agentTypeHermesDescription: '{{count}} स्टार',
        location: 'स्थान',
        locationUnavailable: 'अनुपलब्ध',
        locationUnavailableForPlan: 'अनुपलब्ध',
        plan: 'सर्वर',
        planUnavailable: 'अनुपलब्ध',
        planUnavailableForLocation: 'इस स्थान पर उपलब्ध नहीं',
        advancedOptions: 'उन्नत वैकल्पिक विकल्प',
        rootPassword: 'रूट पासवर्ड',
        rootPasswordPlaceholder: 'पासवर्ड दर्ज करें या जनरेट करें',
        gatewayTokenPlaceholder: 'उदा. a1b2c3d4e5f6...',
        autoGenerateGatewayTokenHint: 'खाली छोड़ने पर स्वतः जनरेट होता है.',
        autoGeneratePasswordHint: 'वैकल्पिक. खाली छोड़ने पर कोई पासवर्ड नहीं.',
        regeneratePassword: 'पासवर्ड पुनः जनरेट करें',
        gatewayToken: 'Gateway Token',
        regenerateToken: 'टोकन पुनः जनरेट करें',
        tokenCopied: 'टोकन कॉपी हो गया.',
        sshKeyOptional: 'SSH कुंजी',
        noSshKeyPasswordOnly: 'कोई SSH कुंजी नहीं (केवल पासवर्ड)',
        noSshKeysConfigured: 'कोई SSH कुंजियाँ कॉन्फ़िगर नहीं',
        addSshKeyForPasswordlessLogin:
            'पासवर्ड-रहित लॉगिन के लिए SSH कुंजी जोड़ें',
        additionalStorageOptional: 'अतिरिक्त स्टोरेज',
        volumeStorage: 'वॉल्यूम स्टोरेज',
        vpsServer: 'VPS सर्वर',
        openClawPreinstalled: 'OpenClaw पूर्व-इंस्टॉल',
        storageWithSize: 'स्टोरेज',
        billingInterval: 'बिलिंग',
        monthly: 'मासिक',
        yearly: 'वार्षिक',
        yearlySaveBadge: '2 महीने मुफ़्त',
        yearlySavings: 'आप बचाते हैं',
        totalMonthly: 'कुल मासिक',
        totalYearly: 'कुल वार्षिक',
        creating: 'बनाया जा रहा है...',
        proceedToPayment: 'डिप्लॉय करने के लिए ${{amount}} भुगतान करें',
        agreementNotice: 'डिप्लॉय करके, आप हमारी',
        selectServerToContinue: 'जारी रखने के लिए एक सर्वर चुनें',
        selectLocationToContinue: 'जारी रखने के लिए एक स्थान चुनें',
        clawCreated: 'क्लॉ बनाया गया.',
        clawCreating: 'आपका क्लॉ बनाया जा रहा है, इसमें कुछ समय लग सकता है...',
        assigning: 'असाइन हो रहा है...',
        rootPasswordSaveThis: 'रूट पासवर्ड (इसे सहेजें!)',
        sshCommandUsingKey: 'SSH कमांड (आपकी कुंजी का उपयोग करके)',
        sshCommandWithPassword: 'SSH कमांड (पासवर्ड के साथ)',
        passwordCopied: 'पासवर्ड कॉपी हो गया.',
        planSpec: '{{cpu}} vCPU / {{memory}} GB RAM / {{disk}} GB SSD',
        volumeUnit: 'GB',
        volumeMin: '0 GB',
        volumeMax: '500 GB'
    },
    sshKeys: {
        title: 'SSH कुंजियाँ',
        description:
            'अपने OpenClaw इंस्टेंस तक सुरक्षित, पासवर्ड-रहित पहुँच के लिए अपनी SSH कुंजियाँ प्रबंधित करें.',
        key: 'ssh कुंजी',
        keys: 'ssh कुंजियाँ',
        keyCountDescription: '{{count}} {{label}}',
        addSshKey: 'SSH कुंजी जोड़ें',
        howSshKeysWork: 'SSH कुंजी कैसे कनेक्ट करें?',
        step1: 'अपने कंप्यूटर पर SSH कुंजी जोड़ी बनाएँ (या मौजूदा का उपयोग करें).',
        step2: 'यहाँ सार्वजनिक कुंजी जोड़ें.',
        step3: 'नया इंस्टेंस बनाते समय कुंजी चुनें.',
        step4: 'इससे कनेक्ट करें',
        step4Command: 'ssh root@your-server-ip',
        step4Suffix: '- कोई पासवर्ड नहीं चाहिए.',
        noSshKeysYet: 'कोई SSH कुंजियाँ नहीं',
        noSshKeysDescription:
            'आपके खाते पर कोई SSH कुंजियाँ नहीं जोड़ी गई हैं, आप उन्हें कभी भी जोड़ सकते हैं और अपने डिप्लॉय किए गए क्लॉज़ से कनेक्ट कर सकते हैं.',
        deleteConfirmation: 'क्या आप वाकई इस SSH कुंजी को हटाना चाहते हैं?',
        deleteKey: 'SSH कुंजी हटाएँ',
        deleteKeyConfirmation: 'क्या आप वाकई हटाना चाहते हैं',
        sshKeyAddedSuccessfully: 'SSH कुंजी सफलतापूर्वक जोड़ी गई.',
        addSshKeyModalTitle: 'SSH कुंजी जोड़ें',
        addSshKeyModalDescription:
            'पासवर्ड-रहित प्रमाणीकरण के लिए SSH कुंजी जोड़ें',
        iHaveAnSshKey: 'मौजूदा कुंजी',
        generateNewKey: 'नई बनाएँ',
        name: 'नाम',
        namePlaceholder: 'उदा: my-macbook',
        publicKey: 'सार्वजनिक कुंजी',
        publicKeyPlaceholder: 'ssh-rsa AAAA... या ssh-ed25519 AAAA...',
        publicKeyHint: 'अपनी सार्वजनिक कुंजी यहाँ खोजें',
        publicKeyPath1: '~/.ssh/id_ed25519.pub',
        publicKeyPathOr: 'या',
        publicKeyPath2: '~/.ssh/id_rsa.pub',
        important: 'महत्वपूर्ण:',
        dontHaveSshKey: 'SSH कुंजी नहीं है? एक बनाएँ:',
        sshKeygenCommand: 'ssh-keygen -t ed25519 -C "your-email@example.com"',
        keyName: 'कुंजी का नाम',
        keyNamePlaceholder: 'मेरी जनरेट की गई कुंजी',
        importantAfterGenerating:
            'जनरेट करने के बाद, आपको अपनी निजी कुंजी डाउनलोड और सहेजना होगा. यदि आप इसे खो देते हैं तो हम इसे पुनर्प्राप्त नहीं कर सकते!',
        generateKeyPair: 'कुंजी जोड़ी बनाएँ',
        orGenerateLocallyRecommended: 'या स्थानीय रूप से बनाएँ (अनुशंसित)',
        runThisInYourTerminal: 'इसे अपने टर्मिनल में चलाएँ:',
        thenSwitchToIHave:
            'फिर "मौजूदा कुंजी" पर स्विच करें और सार्वजनिक कुंजी पेस्ट करें.',
        savePrivateKeyNow:
            'अभी अपनी निजी कुंजी सहेजें! इस डायलॉग को बंद करने से पहले इसे डाउनलोड करें. आप इसे फिर से नहीं देख पाएँगे.',
        privateKeyKeepSecret: 'निजी कुंजी (गुप्त रखें!)',
        downloadPrivateKey: 'निजी कुंजी डाउनलोड करें',
        publicKeyWillBeSaved: 'सार्वजनिक कुंजी (सहेजी जाएगी)',
        savePublicKey: 'सार्वजनिक कुंजी सहेजें'
    },
    landing: {
        title: 'OpenClaw डिप्लॉय करें. एक क्लिक. हो गया.',
        description:
            'एक क्लिक में अपने VPS पर OpenClaw डिप्लॉय करें. पूर्ण रूट एक्सेस, वैश्विक स्थान और पारदर्शी मूल्य निर्धारण के साथ सेल्फ-होस्टेबल क्लाउड होस्टिंग.',
        badge: 'OpenClaw और Hermes क्लाउड पर',
        tutorialBadge: 'Cloud पर शुरुआत कैसे करें',
        tutorialVideoThumbnail: 'ClawHost ट्यूटोरियल वीडियो थंबनेल',
        clawhostGoLogoAlt: 'ClawHost Go',
        trustMrrBadgeAlt: 'TrustMRR verified revenue badge',
        macosPreviewTime: '22:12',
        heroTitle1: 'OpenClaw डिप्लॉय करें.',
        heroTitle2: 'एक क्लिक. हो गया.',
        heroDescription:
            'एक क्लिक में क्लाउड या स्थानीय रूप से OpenClaw और Hermes एजेंट डिप्लॉय करें — ClawHost के साथ अपने AI एजेंट तेज़ी से बनाएँ, कनेक्ट करें और स्केल करें.',
        selfHost: 'ओपन सोर्स',
        startingPrice: 'शुरुआती',
        locations: 'स्थान',
        servers: 'सर्वर',
        zeroCount: 'शून्य',
        zeroConfig: 'शून्य कॉन्फ़िग',
        features: 'विशेषताएँ',
        whyClawHost: 'ऑल-इन-वन विशेषताएँ',
        featuresDescription:
            'हम क्यों आज़माने लायक हैं, विशेषताएँ झूठ नहीं बोलतीं.',
        zeroConfigDescription:
            'घंटों के सर्वर और OpenClaw सेटअप को छोड़ दें. यह मिनटों में पूर्व-इंस्टॉल और तैयार है.',
        ownedData: '100% स्वामित्व वाला डेटा',
        ownedDataDescription:
            'आपका अपना सर्वर, आपका डेटा. कोई साझा बुनियादी ढाँचा नहीं, कोई लॉग नहीं, कोई तृतीय पक्ष नहीं. 24/7 ऑनलाइन.',
        fullSpeed: 'पूरी गति',
        fullSpeedDescription:
            'समर्पित VPS संसाधन का मतलब है कोई थ्रॉटलिंग नहीं, पूर्ण बैंडविड्थ और बिजली जैसा तेज़ इंटरनेट.',
        globalLocations: 'वैश्विक स्थान',
        globalLocationsDescription:
            'OpenClaw और Hermes को कई वैश्विक क्षेत्रों में डिप्लॉय करें और अपने सबसे निकटतम स्थान का चयन करें.',
        fullSshAccess: 'सीधा SSH एक्सेस',
        fullSshAccessDescription:
            'प्लेटफ़ॉर्म से सीधे अपने सर्वर टर्मिनल तक पहुँचें. किसी बाहरी SSH क्लाइंट की ज़रूरत नहीं.',
        secure: 'सुरक्षित',
        secureDescription:
            'SSL कमज़ोरियों, मैलवेयर और सामान्य सुरक्षा खतरों से डिफ़ॉल्ट रूप से सुरक्षित.',
        payAsYouGo: 'सरल मूल्य निर्धारण',
        payAsYouGoDescription:
            'आपकी ज़रूरत पर आधारित मूल्य. कम गुणवत्ता के सर्वरों के लिए कोई ज़बरदस्ती उच्च बिल नहीं. कभी भी रद्द करें.',
        bringYourCredits: 'अपने क्रेडिट लाएं',
        bringYourCreditsDescription:
            'अपनी Anthropic API कुंजी या Claude सदस्यता का उपयोग करें. सीधे Anthropic को भुगतान करें — कोई मार्कअप नहीं.',
        customSubdomains: 'ऑनलाइन एक्सेस',
        customSubdomainsDescription:
            'लोकल नेटवर्क भूल जाएँ. सबडोमेन के साथ कहीं से भी सुरक्षित रूप से अपने OpenClaw तक पहुँचें.',
        autoUpdates: 'संस्करण नियंत्रण',
        autoUpdatesDescription:
            'एक क्लिक में किसी भी OpenClaw या Hermes संस्करण पर स्विच करें. हमेशा अप टू डेट रहें या ज़रूरत पड़ने पर वापस जाएँ.',
        openclawControl: 'सर्वर निगरानी',
        openclawControlDescription:
            'अपने OpenClaw और Hermes सर्वरों की वास्तविक समय में मेट्रिक्स, लॉग और डायग्नोस्टिक्स के साथ निगरानी करें.',
        clawHostControl: 'पूर्ण सर्वर एक्सेस',
        clawHostControlDescription:
            'ब्राउज़र टर्मिनल, फ़ाइल एक्सप्लोरर, लॉग, डायग्नोस्टिक्स और वर्शन प्रबंधन — सब कुछ आपके डैशबोर्ड से.',
        multipleClaws: 'एकाधिक एजेंट',
        multipleClawsDescription:
            'एक ही डैशबोर्ड से कई OpenClaw और Hermes एजेंट डिप्लॉय और प्रबंधित करें. जैसे-जैसे आप बढ़ें, स्केल करें.',
        pricing: 'मूल्य निर्धारण',
        simpleTransparentPricing: 'सरल, पारदर्शी मूल्य निर्धारण',
        pricingDescription:
            'अपनी जरूरतों के अनुसार एक योजना चुनें। कोई छुपी हुई फीस नहीं।',
        planColumn: 'सर्वर',
        vCpuColumn: 'vCPU',
        ramColumn: 'RAM',
        storageColumn: 'स्टोरेज',
        monthlyColumn: 'कीमत',
        tierShared: 'साझा vCPU',
        tierDedicated: 'समर्पित vCPU',
        tierArm: 'Ampere (ARM)',
        tierRegular: 'सामान्य प्रदर्शन',
        tierHighPerformance: 'उच्च प्रदर्शन',
        tierHighFrequency: 'उच्च आवृत्ति',
        recommended: 'अनुशंसित',
        perMonth: '/माह',
        perYear: '/वर्ष',
        pricePerMonth: '${{price}}/mo',
        pricePerYear: '${{price}}/yr',
        volumePricePerMonth: '+${{price}}/mo',
        startingPriceValue: '${{price}}/mo',
        deploy: 'डिप्लॉय',
        select: 'चुनें',
        selectPlanLabel: '{{plan}} प्लान चुनें',
        deployPlanLabel: '{{plan}} प्लान डिप्लॉय करें',
        openClawPreinstalled: 'OpenClaw पूर्व-इंस्टॉल',
        unlimitedBandwidth: 'असीमित बैंडविड्थ',
        rootSshAccess: 'पूर्ण रूट SSH एक्सेस',
        onlineAllDay: '24/7 ऑनलाइन',
        showAllPlans: 'सभी योजनाएं देखें',
        simplePricing: 'सरलीकृत',
        planStarter: 'Starter',
        planStarterDesc: 'व्यक्तिगत परियोजनाओं और प्रयोगों के लिए',
        planGrowth: 'Growth',
        planGrowthDesc: 'उत्पादन वर्कलोड के लिए',
        planPro: 'Pro',
        planProDesc: 'बढ़ते व्यवसायों के लिए',
        planBusiness: 'Business',
        planBusinessDesc: 'बड़े पैमाने के संचालन के लिए',
        featureCpu: '{{count}} vCPU',
        featureRam: '{{count}} GB RAM',
        featureDisk: '{{count}} GB SSD',
        choosePlan: 'योजना चुनें',
        mostPopular: 'सबसे लोकप्रिय',
        featurePreinstalled: 'एजेंट पहले से इंस्टॉल',
        featureBandwidth: 'असीमित बैंडविड्थ',
        featureSsh: 'रूट SSH एक्सेस',
        featureUptime: '24/7 ऑनलाइन',
        featureDedicatedCpu: 'समर्पित CPU',
        featureEmailSupport: 'ईमेल सहायता',
        fastInternet: 'तेज़ इंटरनेट',
        emailSupport: 'ईमेल सहायता',
        faqTitle: 'प्रश्न',
        frequentlyAskedQuestions: 'सामान्य प्रश्न',
        faqDescription: 'हर एक अक्सर पूछे जाने वाला प्रश्न, उत्तर सहित.',
        faq1Question: 'ClawHost क्या है?',
        faq1Answer:
            'ClawHost एक प्लेटफ़ॉर्म है जो OpenClaw और Hermes को सभी के लिए सुलभ बनाने के लिए बनाया गया है. यह गैर-तकनीकी उपयोगकर्ताओं और डेवलपर्स दोनों को बुनियादी ढांचे का प्रबंधन किए बिना उन्हें चलाने देता है. हम सर्वर, अपटाइम, सुरक्षा और रखरखाव संभालते हैं — आप बस अपने एजेंट का उपयोग करते हैं.',
        faq2Question: 'OpenClaw क्या है?',
        faq2Answer:
            'OpenClaw आपके AI टूल और सेवाओं के लिए एक सेल्फ-होस्टेड सुरक्षित एक्सेस लेयर है. यह सुरक्षा और प्रदर्शन के लिए पूर्व-कॉन्फ़िगर है, ताकि आप इसे डिप्लॉय करें और तुरंत कनेक्ट हों.',
        faqHermesQuestion: 'Hermes क्या है?',
        faqHermesAnswer:
            'Hermes एक स्वायत्त AI एजेंट है जिसमें वेब ब्राउज़िंग, कैलेंडर प्रबंधन, बहु-मॉडल तर्क और ब्राउज़र स्वचालन शामिल है. यह हर ClawHost सर्वर पर OpenClaw के साथ पहले से इंस्टॉल आता है.',
        faq3Question: 'यह अन्य AI टूल या होस्टेड प्लेटफ़ॉर्म से कैसे अलग है?',
        faq3Answer:
            'होस्टेड AI टूल के विपरीत, ClawHost आपको OpenClaw और Hermes स्थापित एक वास्तविक सर्वर देता है. आप बुनियादी ढांचे के मालिक हैं, सब कुछ नियंत्रित करते हैं, और साझा प्लेटफ़ॉर्म या मॉडल द्वारा सीमित नहीं हैं.',
        faq4Question: 'क्या मुझे तकनीकी ज्ञान चाहिए?',
        faq4Answer:
            'नहीं. हम सभी इन्फ्रास्ट्रक्चर, सेटअप और रखरखाव संभालते हैं. आप OpenClaw को इसके UI से कॉन्फ़िगर और प्रबंधित कर सकते हैं, जबकि Hermes सरल टर्मिनल कमांड से चलता है — बिना सर्वर या इन्फ्रास्ट्रक्चर को छुए.',
        faq5Question: 'कौन से स्थान उपलब्ध हैं?',
        faq5Answer:
            'हम दुनिया भर में अमेरिका, यूरोप और एशिया सहित कई सर्वर स्थान प्रदान करते हैं. आप ज़रूरत पड़ने पर विभिन्न क्षेत्रों के कई सर्वरों पर OpenClaw या Hermes डिप्लॉय कर सकते हैं.',
        faq6Question: 'इसकी कीमत कितनी है?',
        faq6Answer:
            'कीमतें आपके द्वारा चुने गए सर्वर पर निर्भर करती हैं. बेसिक से लेकर उच्च प्रदर्शन तक कई सर्वर विकल्पों के साथ, आप अपनी आवश्यकताओं और बजट के अनुसार चुनें.',
        faq7Question: 'क्या मैं अपने एजेंट को सीधे लिंक से एक्सेस कर सकता हूँ?',
        faq7Answer:
            'OpenClaw सबडोमेन URL और पूर्ण वेब UI के माध्यम से एक्सेस किया जा सकता है. Hermes SSH पर टर्मिनल कमांड से चलता है — कोई लिंक नहीं, लेकिन आप अपने सर्वर के टर्मिनल से इसे पूरी तरह नियंत्रित कर सकते हैं.',
        comparison: 'तुलना',
        comparisonTitle: 'हम कैसे अलग हैं',
        comparisonDescription:
            'केवल एक तुलनीय प्लेटफ़ॉर्म है, और हमारा दृष्टिकोण सीमाओं के बजाय वास्तविक सर्वर और पूर्ण स्वामित्व पर केंद्रित है.',
        others: 'अन्य',
        comparisonOpenClawUs: 'OpenClaw तक पूर्ण एक्सेस',
        comparisonOpenClawOthers: 'केवल चैट, कोई प्रबंधन नहीं',
        comparisonPricingUs: 'पारदर्शी मूल्य, स्पष्ट स्पेक्स',
        comparisonPricingOthers: 'छिपी स्पेक्स, अस्पष्ट मूल्य',
        comparisonOwnershipUs: 'आप पूरी तरह अपने सर्वर के मालिक हैं',
        comparisonOwnershipOthers: 'आपके पास कुछ नहीं है',
        comparisonSubdomainUs: 'सबडोमेन के माध्यम से एक्सेस',
        comparisonSubdomainOthers: 'केवल तृतीय-पक्ष प्लेटफ़ॉर्म से एक्सेस',
        comparisonInfraUs: 'ऑन-डिमांड बुनियादी ढाँचा',
        comparisonInfraOthers: 'सीमित सर्वर',
        comparisonDataUs: 'अपने डेटा के मालिक बनें',
        comparisonDataOthers: 'अपने डेटा के मालिक नहीं',
        comparisonMultipleUs: 'कई OpenClaw और Hermes एजेंट',
        comparisonMultipleOthers: 'केवल एक OpenClaw',
        comparisonOpenSourceUs: 'पूर्ण रूप से ओपन सोर्स',
        comparisonOpenSourceOthers: 'क्लोज़्ड सोर्स',
        comparisonExportUs: 'अपने OpenClaw और Hermes को कहीं भी निर्यात करें',
        comparisonExportOthers: 'वेंडर लॉक-इन',
        comparisonProvidersUs: 'एकाधिक सर्वर प्रदाता',
        comparisonProvidersOthers: 'केवल एक प्रदाता',
        comparisonVersionUs: 'एक-क्लिक संस्करण स्विचिंग',
        comparisonVersionOthers: 'केवल मैनुअल अपडेट',
        comparisonTerminalUs: 'बिल्ट-इन वेब टर्मिनल',
        comparisonTerminalOthers: 'SSH क्लाइंट आवश्यक',
        seeFullComparison: 'पूर्ण तुलना देखें',
        comparisonCtaText:
            'हम SimpleAgent, MyAgent.ai और अन्य से तुलना करते हैं — सुविधा दर सुविधा.',
        selfHostInstead: 'स्वयं होस्ट करें'
    },
    blog: {
        readingTime: '{{minutes}} मिनट पढ़ने का समय',
        ctaTitle: 'एक क्लिक में OpenClaw और Hermes डिप्लॉय करें',
        ctaDescription:
            'OpenClaw और Hermes पहले से इंस्टॉल एक डेडिकेटेड सर्वर प्राप्त करें. पूर्ण रूट एक्सेस, वैश्विक स्थान, और मिनटों में तैयार. यह हमेशा आपका है. $25 से शुरू.',
        ctaDeploy: 'एजेंट डिप्लॉय करें',
        ctaGitHub: 'GitHub पर देखें'
    },
    changelog: {
        title: 'परिवर्तन लॉग',
        description: 'ClawHost के अपडेट, नई सुविधाएँ और सुधारों को ट्रैक करें.',
        subtitle: 'ClawHost के सभी अपडेट, नई सुविधाएँ और सुधार.',
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
        release15Date: '11 अप्रैल 2026',
        release15Title: 'सरलीकरण और कस्टम सबडोमेन',
        release15Description:
            'प्रबंधित सुविधाओं को OpenClaw में माइग्रेट करके प्लेटफ़ॉर्म को सरल बनाया, प्लेग्राउंड व्यू हटाया और बदलने योग्य कस्टम सबडोमेन पेश किए।',
        release15Feature1:
            'सरलीकरण और प्रबंधित सुविधाओं को OpenClaw में माइग्रेट किया, अब कोई ClawHost चैट, एजेंट, चैनल, वेरिएबल और स्किल नहीं',
        release15Feature2:
            'Enhanced file explorer with full editing support, 100+ language syntax highlighting, and export as .zip',
        release15Feature3:
            'Removed playground view for a cleaner, more focused dashboard experience',
        release15Feature4:
            'Changeable custom subdomains, update your claw subdomain to your loved one',
        release14Date: '1 अप्रैल 2026',
        release14Title: 'Hetzner माइग्रेशन, एफिलिएट सिस्टम और नई भाषाएं',
        release14Description:
            'सर्वोत्तम मूल्य निर्धारण और प्रदर्शन के लिए सभी बुनियादी ढांचे को Hetzner पर केंद्रित किया, 15% कमीशन के साथ एफिलिएट सिस्टम लॉन्च किया, 10 नई भाषाएं जोड़ीं, और स्थिर संस्करण सपोर्ट के लिए आंतरिक टूल्स बनाए।',
        release14Feature1:
            'DigitalOcean और Vultr को हटाया गया — सभी बुनियादी ढांचा अब विशेष रूप से Hetzner पर चलता है, असीमित क्षमता और प्रदाता-पक्ष की कोई सीमा नहीं',
        release14Feature2:
            'एफिलिएट सिस्टम जो उपयोगकर्ताओं को हर रेफर किए गए ऑर्डर पर 15% कमीशन कमाने की अनुमति देता है',
        release14Feature3:
            '10 नई भाषाएँ जोड़ी गईं: चीनी, हिंदी, अरबी, रूसी, जापानी, तुर्की, इतालवी, पोलिश, डच और पुर्तगाली',
        release14Feature4:
            'वर्तमान OpenClaw संस्करणों के लिए स्थिर सुविधा समर्थन प्रदान करने वाले आंतरिक उपकरण, पुराने संस्करणों का समर्थन नहीं',
        release12Date: '14 मार्च 2026',
        release12Title: 'वार्षिक प्लान, वॉइस मोड और अधिक',
        release12Description:
            '2 महीने मुफ़्त के साथ वार्षिक सब्सक्रिप्शन, वॉइस मोड, इंस्टेंस पुनः इंस्टॉल और ClawHost Go के लिए प्रारंभिक लैंडिंग पेज.',
        release12Feature1:
            'ClawHost Go के लिए लैंडिंग पेज, ClawHost के साथ स्थानीय होस्टिंग',
        release12Feature2:
            'वार्षिक सब्सक्रिप्शन समर्थन, वार्षिक सब्सक्राइब करने पर 2 महीने मुफ़्त',
        release12Feature3:
            'ClawHost पर होस्ट किए गए OpenClaw एजेंट के साथ बातचीत करने के लिए वॉइस मोड',
        release12Feature4:
            'नई शुरुआत के लिए अपने इंस्टेंस पर OpenClaw पुनः इंस्टॉल करें, प्रति दिन एक बार उपलब्ध',
        release11Date: '28 फ़रवरी 2026',
        release11Title:
            'टेक्स्ट-टू-स्पीच, टर्मिनल, चैट टैब और फ़ाइल एक्सप्लोरर',
        release11Description:
            'टेक्स्ट-टू-स्पीच से एजेंट प्रतिक्रियाएँ सुनें, टर्मिनल के माध्यम से सीधे अपने VPS से बातचीत करें, साइडबार व्यू टैब से तेज़ी से चैट नेविगेट करें और बेहतर फ़ाइल एक्सप्लोरर से फ़ाइलें एक्सप्लोर करें.',
        release11Feature1: 'प्लेग्राउंड में एजेंट संदेशों पर टेक्स्ट-टू-स्पीच',
        release11Feature2:
            'डैशबोर्ड से सीधे अपने VPS इंस्टेंस के साथ बातचीत करने के लिए टर्मिनल',
        release11Feature3: 'आसान पहुँच और नेविगेशन के लिए चैट साइडबार व्यू टैब',
        release11Feature4:
            'फ़ाइलों में खोजने के लिए सर्च बार के साथ फ़ाइल एक्सप्लोरर सुधार',
        release11Feature5:
            'संदेश टाइमस्टैम्प वास्तविक समय को न दर्शाने की समस्या ठीक की',
        release10Date: '23 फ़रवरी 2026',
        release10Title: 'फ़ीचर अनुरोध, फ़ाइल एक्सप्लोरर और बग फ़िक्स',
        release10Description:
            'समुदाय-संचालित फ़ीचर अनुरोध, विस्तारित फ़ाइल संपादन समर्थन और विभिन्न बग फ़िक्स.',
        release10Feature1:
            'OpenClaw एजेंट द्वारा स्वचालित रूप से प्रबंधित और प्रकाशित फ़ीचर अनुरोध',
        release10Feature3:
            'मॉडल प्रदाता स्विचिंग प्रतिबिंबित न होने और अभी भी प्रारंभिक मॉडल का उपयोग करने की समस्या ठीक की',
        release10Feature4: 'प्लेटफ़ॉर्म भर में कई सुधार और बग फ़िक्स',
        release10Feature5:
            'TypeScript, Markdown और सादा टेक्स्ट फ़ाइलें अब फ़ाइल एक्सप्लोरर में संपादन योग्य हैं',
        release9Date: '21 फ़रवरी 2026',
        release9Title: 'तुलना, प्लेग्राउंड पुनर्गठन और अधिक',
        release9Description:
            'प्रतिस्पर्धी तुलना पृष्ठ, प्लेग्राउंड सुविधा पुनर्गठन, बहु-भाषा समर्थन और समग्र प्रदर्शन सुधार.',
        release9Feature1: 'डार्क और लाइट थीम सपोर्ट',
        release9Feature2:
            'अंग्रेज़ी, फ़्रेंच, स्पेनिश और जर्मन के साथ बहु-भाषा समर्थन',
        release9Feature3:
            'प्रतिस्पर्धियों के विरुद्ध पूर्ण विश्लेषण के साथ तुलना पृष्ठ',
        release9Feature4:
            'OpenClaw संस्करण, एक क्लिक से अपग्रेड करें या तुरंत कोई भी संस्करण इंस्टॉल करें',
        release9Feature5: 'प्लेग्राउंड सुविधा संरचना का पुनर्गठन और सरलीकरण',
        release9Feature6: 'प्रदर्शन, स्थिरता और प्रतिक्रियाशीलता में सुधार',
        release8Date: '18 फ़रवरी 2026',
        release8Title: 'लाइट थीम, प्रदर्शन और स्थिरता',
        release8Description:
            'लाइट थीम सपोर्ट, प्रदर्शन और अनुभव सुधार, और स्थिरता और प्रतिक्रियाशीलता में सुधार.',
        release8Feature1: 'लाइट, डार्क और सिस्टम थीम मोड',
        release8Feature2: 'प्रदर्शन और अनुभव सुधार',
        release8Feature3: 'स्थिरता और प्रतिक्रियाशीलता में सुधार',
        release7Date: '16 फ़रवरी 2026',
        release7Title: 'चैट पुनर्गठन और वॉइस इनपुट',
        release7Description:
            'वॉइस इंटरैक्शन और एजेंट के लिए फ़ाइल अटैचमेंट के साथ प्रमुख चैट और प्लेग्राउंड सुधार.',
        release7Feature1:
            'एक सहज, अधिक प्रतिक्रियाशील अनुभव के लिए चैट और प्लेग्राउंड पुनर्गठन',
        release7Feature2:
            'चैट में वॉइस इंटरैक्शन, ब्राउज़र में सीधे स्पीच रिकॉर्ड और ट्रांसक्राइब करें',
        release7Feature4:
            'एजेंट के लिए अटैचमेंट व्यू और उपयोग, चैट में चित्र और दस्तावेज़ भेजें',
        release6Date: '16 फ़रवरी 2026',
        release6Title: 'एजेंट चैट',
        release6Description:
            'अपने OpenClaw एजेंट पर पूर्ण नियंत्रण. डैशबोर्ड से सीधे सब कुछ प्रबंधित और चैट करें.',
        release6Feature3:
            'प्लेग्राउंड से अपने एजेंट से चैट करें, किसी भी एजेंट से रीयल टाइम में बातचीत करें',
        release6Feature4:
            'Google या GitHub से साइन इन करें, ईमेल कोड के बिना तेज़, सुरक्षित प्रमाणीकरण',
        release1Date: '8 फ़रवरी 2026',
        release1Title: 'प्रारंभिक रिलीज़',
        release1Description:
            'ClawHost की पहली आधिकारिक रिलीज़. एक क्लिक में अपने VPS पर OpenClaw डिप्लॉय करें.',
        release1Feature1: 'एक-क्लिक OpenClaw डिप्लॉयमेंट',
        release1Feature2:
            'क्लॉज़ प्रबंधित करने, इंस्टेंस शुरू, बंद, पुनः शुरू और हटाने के लिए डैशबोर्ड',
        release1Feature3:
            'समर्पित vCPU, RAM और स्टोरेज विकल्पों के साथ 18 सर्वर प्लान',
        release1Feature4: 'अमेरिका, यूरोप और एशिया में 6 सर्वर स्थान',
        release1Feature5: 'पासवर्ड-रहित सर्वर एक्सेस के लिए SSH कुंजी प्रबंधन',
        release1Feature6: '10 TB तक अतिरिक्त वॉल्यूम स्टोरेज सपोर्ट',
        release1Feature7: 'मैजिक लिंक प्रमाणीकरण, कोई पासवर्ड नहीं चाहिए',
        release1Feature8:
            'सुरक्षित सबडोमेन के माध्यम से OpenClaw तक ऑनलाइन एक्सेस',
        release1Feature9: 'पारदर्शी प्रति-सर्वर मूल्य के साथ भुगतान एकीकरण',
        release1Feature10: 'बिलिंग इतिहास और चालान प्रबंधन',
        release1Feature11:
            'OpenClaw पूर्व-इंस्टॉल और कॉन्फ़िगर के साथ स्वतः प्रावधान',
        release2Date: '8 फ़रवरी 2026',
        release2Title: 'Changelog और अधिक',
        release2Description: 'ClawHost के बारे में अपडेट रहने का एक नया तरीका.',
        release2Feature1:
            'सभी प्लेटफ़ॉर्म अपडेट और रिलीज़ ट्रैक करने के लिए परिवर्तन लॉग पृष्ठ',
        release3Date: '10 फ़रवरी 2026',
        release3Title: 'सर्वर इनसाइट्स',
        release3Description:
            'डैशबोर्ड से सीधे अपने सर्वरों पर गहरी दृश्यता और नियंत्रण.',
        release3Feature1:
            'डैशबोर्ड में सीधे स्ट्रीम किए गए रीयल-टाइम सर्वर लॉग',
        release3Feature2:
            'सर्विस समस्याओं के लिए एक-क्लिक स्वचालित मरम्मत के साथ सर्वर डायग्नोस्टिक्स',
        release3Feature3:
            'सर्वर कॉन्फ़िगरेशन फ़ाइलों के लिए बिल्ट-इन फ़ाइल एक्सप्लोरर और JSON संपादक',
        release4Date: '14 फ़रवरी 2026',
        release4Title: 'एजेंट और डेटा निर्यात',
        release4Description:
            'एजेंट प्लेग्राउंड, बहु-एजेंट प्रबंधन और आपके OpenClaw इंस्टेंस के लिए पोर्टेबल डेटा निर्यात.',
        release4Feature1:
            'एक-क्लिक एजेंट प्लेग्राउंड और अवलोकन, एकाधिक एजेंट जोड़ें और प्रबंधित करें',
        release4Feature2:
            'अपने OpenClaw को पोर्टेबल zip आर्काइव के रूप में निर्यात करें',
        release4Feature3:
            'क्लॉज़ और एजेंट के ग्राफ़-आधारित विज़ुअलाइज़ेशन के साथ इंटरैक्टिव प्लेग्राउंड',
        release4Feature4:
            'एकीकृत डैशबोर्ड लेआउट के पक्ष में ग्रिड और सूची व्यू टॉगल हटाया गया'
    },
    clawDetail: {
        noAgentsYet: 'कोई एजेंट नहीं',
        noAgentsDescription:
            'इसके साथ बातचीत करने के लिए अपना पहला एजेंट डिप्लॉय करें.',
        collapseSidebar: 'साइडबार संक्षिप्त करें',
        expandSidebar: 'साइडबार विस्तृत करें',
        selectClaw: 'एक एजेंट चुनें',
        selectClawDescription: 'विवरण देखने के लिए साइडबार से एक एजेंट चुनें.',
        closeDetails: 'बंद करें',
        tabOverview: 'अवलोकन',
        overviewTitle: 'गेटवे अवलोकन',
        overviewGatewayStatus: 'गेटवे स्थिति',
        overviewOnline: 'ऑनलाइन',
        overviewOffline: 'ऑफलाइन',
        overviewVersion: 'संस्करण',
        overviewUptime: 'अपटाइम',
        overviewSessions: 'सत्र',
        overviewSessionsCount: '{{count}} सक्रिय',
        overviewNoSessions: 'कोई सक्रिय सत्र नहीं',
        overviewSessionName: 'सत्र',
        overviewSessionModel: 'मॉडल',
        overviewSessionMessages: 'संदेश',
        overviewSessionLastActive: 'अंतिम सक्रिय',
        overviewModels: 'मॉडल',
        overviewError: 'अवलोकन लोड करने में विफल!',
        overviewErrorDescription:
            'OpenClaw गेटवे से कनेक्ट नहीं हो सका। कृपया जांचें कि इंस्टेंस चल रहा है।',
        overviewUnsupportedTitle: 'अवलोकन समर्थित नहीं है',
        overviewUnsupportedDescription:
            'आपका OpenClaw संस्करण अवलोकन सुविधा का समर्थन नहीं करता। कृपया नवीनतम संस्करण में अपडेट करें।',
        overviewHermesTitle: 'Hermes टर्मिनल में चलता है',
        overviewHermesDescription:
            'Hermes एक TUI एजेंट है — टर्मिनल टैब खोलें और सत्र शुरू करने के लिए `hermes` चलाएँ। फ़ाइलें और संस्करण टैब कॉन्फ़िग संपादित करने और अपग्रेड करने देते हैं।',
        overviewHermesOpenTerminal: 'टर्मिनल खोलें',
        viewDocs: 'दस्तावेज़',
        overviewUptimeDays: '{{days}}d {{hours}}h {{minutes}}m',
        overviewUptimeHours: '{{hours}}h {{minutes}}m',
        overviewUptimeMinutes: '{{minutes}}m',
        overviewService: 'सेवा',
        overviewServiceActive: 'सक्रिय',
        overviewServiceInactive: 'निष्क्रिय',
        overviewPort: 'Port 18789',
        overviewPortOpen: 'सुन रहा है',
        overviewPortClosed: 'बंद',
        overviewReady: 'तैयार',
        overviewNotReady: 'तैयार नहीं',
        overviewConfiguration: 'कॉन्फ़िगरेशन',
        overviewBrowser: 'Browser',
        overviewCommands: 'शेल कमांड',
        overviewTools: 'उपकरण',
        overviewSubdomain: 'सबडोमेन',
        overviewInstanceStatus: 'इंस्टेंस स्थिति',
        overviewModel: 'Model',
        overviewAgents: 'एजेंट',
        overviewMemoryStatus: 'मेमोरी',
        overviewHeartbeat: 'Heartbeat',
        overviewEvents: 'इवेंट',
        overviewProbes: 'Probes',
        overviewPlugins: 'Plugins',
        tabPreview: 'पूर्वावलोकन',
        previewNotEnabled: 'इस इंस्टेंस के लिए पूर्वावलोकन सक्षम नहीं है।',
        previewNotEnabledDescription:
            'अपने एजेंट को सीधे डैशबोर्ड में एम्बेड करने के लिए पूर्वावलोकन सक्षम करें।',
        previewEnable: 'पूर्वावलोकन सक्षम करें',
        previewEnabling: 'सक्षम हो रहा है...',
        previewEnabled: 'पूर्वावलोकन सक्षम।',
        previewEnableFailed: 'पूर्वावलोकन सक्षम करने में विफल!',
        previewEnableCanceledNavigation:
            'पूर्वावलोकन सक्षम करना बाधित क्योंकि आप पृष्ठ से चले गए।',
        previewError: 'पूर्वावलोकन लोड करने में विफल।',
        previewErrorDescription: 'एजेंट ऑफ़लाइन या अनुपलब्ध हो सकता है।',
        previewRetry: 'पुनः प्रयास करें',
        tabInfo: 'जानकारी',
        tabLogs: 'लॉग',
        tabTerminal: 'टर्मिनल',
        terminalConnecting: 'टर्मिनल से कनेक्ट हो रहा है...',
        terminalDisconnected: 'टर्मिनल डिस्कनेक्ट हो गया.',
        terminalError: 'टर्मिनल से कनेक्ट करने में विफल!',
        terminalReconnect: 'पुनः कनेक्ट करें',
        tabDisabledConfiguring:
            'इंस्टेंस का कॉन्फ़िगरेशन पूरा होने के बाद उपलब्ध.',
        tabDisabledAwaitingPayment: 'भुगतान प्रोसेस होने के बाद उपलब्ध.',
        creatingTitle: 'आपका एजेंट सेटअप किया जा रहा है',
        creatingDescription:
            'इसमें आमतौर पर एक या दो मिनट लगते हैं। आप इस पेज को सुरक्षित रूप से बंद कर सकते हैं और बाद में वापस आ सकते हैं।',
        creatingDescriptionLocal:
            'इसमें आमतौर पर कुछ ही समय लगता है। पूरा होने तक ऐप को खुला रखें।',
        configuringTitle: 'OpenClaw इंस्टॉल किया जा रहा है',
        configuringTitleHermes: 'Hermes इंस्टॉल किया जा रहा है',
        loadingTipHermes1:
            'Hermes एक TUI एजेंट है — बूट होने के बाद इसके साथ चैट करने के लिए टर्मिनल टैब खोलें।',
        loadingTipHermes2:
            'फ़ाइलें टैब से ~/.hermes/.env में मॉडल प्रदाता (OpenRouter, Anthropic आदि) कॉन्फ़िगर करें।',
        loadingTipHermes3:
            'टर्मिनल से `hermes gateway install` के साथ Telegram, Discord या Slack कनेक्ट करें।',
        configuringDescription:
            'इसमें आमतौर पर एक या दो मिनट लगते हैं। आप इस पेज को सुरक्षित रूप से बंद कर सकते हैं और बाद में वापस आ सकते हैं।',
        configuringDescriptionLocal:
            'एजेंट रनटाइम स्थानीय रूप से इंस्टॉल किया जा रहा है। पूरा होने तक ऐप को खुला रखें।',
        awaitingPaymentTitle: 'भुगतान की प्रतीक्षा में',
        awaitingPaymentDescription:
            'अपने एजेंट का प्रोविजनिंग शुरू करने के लिए भुगतान पूरा करें। यह आरक्षण एक घंटे में समाप्त हो जाएगा।',
        awaitingPaymentAction: 'भुगतान पूरा करें',
        loadingTip1:
            'क्या आप जानते हैं कि आप एक OpenClaw में कई एजेंट चला सकते हैं?',
        loadingTip2: 'क्या आप जानते हैं कि OpenClaw ओपन-सोर्स है?',
        loadingTip3:
            'ClawHost एक-क्लिक OpenClaw होस्टिंग की अनुमति देने वाला पहला प्रोजेक्ट है.',
        loadingTip4:
            'आप अपने एजेंट को SSH या बिल्ट-इन टर्मिनल के माध्यम से एक्सेस कर सकते हैं.',
        loadingTip5: 'आपके एजेंट को स्वचालित रूप से अपना सबडोमेन मिलता है.',
        loadingTip6:
            'आप सेटिंग्स से कभी भी अपने एजेंट का आइकन और नाम बदल सकते हैं.',
        loadingTip7: 'आपके एजेंट का सारा ट्रैफ़िक TLS से एन्क्रिप्टेड है.',
        loadingTip8:
            'आप मॉनिटर टैब में CPU, मेमोरी और डिस्क उपयोग की निगरानी कर सकते हैं.',
        loadingTip9: 'मदद चाहिए? Discord पर हमारे समुदाय से जुड़ें.',
        loadingTip10:
            'आप अपने एजेंट की पूरी कॉन्फ़िगरेशन को बैकअप के रूप में एक्सपोर्ट कर सकते हैं.',
        loadingTip11:
            'SSH कुंजियाँ बिना पुनः इंस्टॉल किए चल रहे इंस्टेंस पर लागू की जा सकती हैं.',
        loadingTip12:
            'आप सुरक्षा टैब से अपना रूट पासवर्ड और गेटवे टोकन बदल सकते हैं.',
        loadingTip13:
            'ClawHost यूरोप और अमेरिका में कई क्षेत्रों में सर्वर का समर्थन करता है.',
        tabSettings: 'सेटिंग्स',
        featureVersionUnsupported: '{{feature}} {{version}} पर समर्थित नहीं है',
        featureVersionUnsupportedDescription:
            'हम इस संस्करण में UI के माध्यम से {{feature}} प्रबंधन का समर्थन नहीं करते। आप SSH, टर्मिनल या OpenClaw कंट्रोल पैनल के माध्यम से इसे प्रबंधित कर सकते हैं।',
        featureVersionUnsupportedButton: 'संस्करणों पर जाएं',
        featureVersionUnsupportedSupported: 'समर्थित संस्करण:',
        featureVersionUnsupportedNewer: 'नए संस्करण',
        tabVersions: 'संस्करण',
        tabFiles: 'फ़ाइल एक्सप्लोरर',
        tabMonitor: 'मॉनिटर',
        tabVolumes: 'स्टोरेज',
        tabSecurity: 'सुरक्षा',
        securitySSHKey: 'SSH कुंजी',
        securitySSHKeyHint:
            'चल रहे इंस्टेंस पर लागू किया जाता है और पुनः इंस्टॉल करते समय उपयोग किया जाता है.',
        securityPassword: 'Root पासवर्ड',
        securityGatewayToken: 'गेटवे टोकन',
        securityHostKey: 'होस्ट कुंजी फिंगरप्रिंट',
        securityRotatePassword: 'पासवर्ड बदलें',
        securityRotateToken: 'टोकन बदलें',
        securityRandomize: 'यादृच्छिक बनाएं',
        securitySavePassword: 'पासवर्ड सहेजें',
        securitySaveToken: 'टोकन सहेजें',
        volumesTitle: 'वॉल्यूम',
        volumesCount: '{{count}} वॉल्यूम',
        volumesEmpty: 'कोई वॉल्यूम संलग्न नहीं है।',
        volumesEmptyDescription:
            'इस इंस्टेंस में कोई स्थायी स्टोरेज वॉल्यूम नहीं है।',
        volumesReadOnly:
            'स्टोरेज केवल इंस्टेंस निर्माण के दौरान जोड़ा जा सकता है। स्टोरेज जोड़ने के लिए, वांछित वॉल्यूम आकार के साथ एक नई इंस्टेंस तैनात करें, या संपर्क करें',
        volumesContactSupport: 'सहायता टीम',
        metricsTitle: 'सर्वर मेट्रिक्स',
        metricsLive: 'लाइव',
        metricsCpu: 'CPU उपयोग',
        metricsMemory: 'मेमोरी उपयोग',
        metricsDisk: 'डिस्क उपयोग',
        metricsNetwork: 'नेटवर्क',
        metricsLoadAvg: 'औसत लोड',
        metricsProcesses: 'शीर्ष प्रक्रियाएं',
        metricsUptime: 'अपटाइम',
        metricsUsed: 'उपयोग किया गया',
        metricsAvailable: 'उपलब्ध',
        metricsTotal: 'कुल',
        metricsReceived: 'प्राप्त',
        metricsSent: 'भेजा गया',
        metricsLoad1: '1 मिनट',
        metricsLoad5: '5 मिनट',
        metricsLoad15: '15 मिनट',
        metricsProcessPid: 'PID',
        metricsProcessUser: 'उपयोगकर्ता',
        metricsProcessCpu: 'CPU %',
        metricsProcessMem: 'MEM %',
        metricsProcessCommand: 'कमांड',
        metricsError: 'मेट्रिक्स लोड करने में विफल!',
        metricsErrorDescription:
            'मेट्रिक्स प्राप्त करने के लिए सर्वर से कनेक्ट नहीं हो सका। कृपया जांचें कि इंस्टेंस चल रहा है।',
        metricsAutoRefresh: 'हर {{seconds}} सेकंड में ऑटो-रिफ्रेश',
        tabBilling: 'Billing',
        billingEmpty: 'No billing history for this instance.',
        tabServer: 'सर्वर',
        serverIpAddress: 'IP पता',
        reinstallDescription:
            'इस सर्वर पर {{agentName}} को पुनः स्थापित करें। यह इंस्टॉलेशन को रीसेट करेगा लेकिन आपका डेटा सुरक्षित रहेगा। यह केवल आवश्यकता होने पर ही करें।',
        versionsSearch: 'संस्करण खोजें...',
        versionsSearchCount: '{{count}} संस्करण खोजें...',
        versionsEmpty: 'कोई संस्करण नहीं मिला',
        versionsEmptyDescription: 'आपकी खोज से कोई संस्करण मेल नहीं खाता.',
        versionsErrorDescription:
            'संस्करण लोड करने में विफल. कृपया अपना कनेक्शन जाँचें और पुनः प्रयास करें!',
        versionsChangelog: 'npm पर चेंजलॉग देखें',
        versionCurrent: 'वर्तमान',
        versionLatest: 'नवीनतम',
        updateAvailable: 'A newer version of OpenClaw is available',
        updateAvailableDescription:
            'A new version of OpenClaw ({{version}}) is available for your instance.',
        updateAvailableDescriptionHermes:
            'A new version of Hermes ({{version}}) is available for your instance.',
        goToVersions: 'Go to Versions',
        versionInstall: 'इंस्टॉल',
        versionInstalling: 'इंस्टॉल हो रहा है...',
        versionInstallSuccess: 'संस्करण {{version}} सफलतापूर्वक इंस्टॉल हुआ.',
        versionInstallFailed: 'संस्करण इंस्टॉल करने में विफल!',
        installVersionCanceledNavigation:
            'संस्करण स्थापना बाधित क्योंकि आप पृष्ठ से चले गए।',
        versionDownloads: '{{count}} डाउनलोड',
        versionChangelog: 'परिवर्तन लॉग',
        versionOutdated: 'पुराना',
        versionSupported: 'समर्थित',
        versionSupportedTooltip:
            'यह संस्करण आपको UI के माध्यम से OpenClaw संचालित करने की अनुमति देता है',
        versionInstallConfirmTitle: 'संस्करण {{version}} इंस्टॉल करें',
        versionInstallConfirmDescription:
            'संस्करण बदलने से अप्रत्याशित व्यवहार हो सकता है या अतिरिक्त मैनुअल कॉन्फ़िगरेशन की आवश्यकता हो सकती है, विशेषकर नए संस्करणों के लिए जो अभी तक पूरी तरह सत्यापित नहीं हुए हैं. क्या आप वाकई आगे बढ़ना चाहते हैं?',
        settingsIcon: 'आइकन',
        settingsIconDescription: 'एजेंट आइकन बदलने के लिए क्लिक करें।',
        settingsIconRandomize: 'यादृच्छिक',
        settingsIconRemove: 'आइकन हटाएं',
        settingsBackground: 'पृष्ठभूमि',
        settingsBackgroundReset: 'रीसेट',
        settingsName: 'नाम',
        settingsNamePlaceholder: 'क्लॉ नाम दर्ज करें',
        settingsNameDescription: 'केवल अक्षर, संख्याएँ और डैश.',
        subdomain: 'सबडोमेन',
        subdomainPlaceholder: 'सबडोमेन दर्ज करें',
        subdomainDescription: 'छोटे अक्षर और संख्याएँ, {{min}}-{{max}} अक्षर.',
        subdomainInvalid:
            'केवल {{min}}-{{max}} छोटे अक्षर और संख्याएँ उपयोग करें.',
        subdomainUpdated: 'सबडोमेन सफलतापूर्वक अपडेट हुआ.',
        subdomainUpdateFailed: 'सबडोमेन अपडेट करने में विफल!',
        subdomainInUse: 'यह सबडोमेन किसी अन्य क्लॉ द्वारा उपयोग में है!',
        settingsDetails: 'विवरण',
        settingsDangerZone: 'खतरनाक क्षेत्र',
        settingsDangerZoneDescription:
            'आपका इंस्टेंस आपकी वर्तमान बिलिंग अवधि के अंत में हटा दिया जाएगा।',
        settingsDangerZoneDescriptionLocal:
            'यह एजेंट और उसकी सभी फ़ाइलों को स्थायी रूप से हटा देगा।',
        settingsScheduledDeletionDescription:
            '{{date}} को हटाने के लिए निर्धारित। अपना इंस्टेंस चालू और सदस्यता सक्रिय रखने के लिए रद्द करें।',
        settingsSave: 'सहेजें',
        settingsSaving: 'सहेजा जा रहा है...',
        settingsUpdated: 'सेटिंग्स अपडेट की गईं।',
        settingsUpdateFailed: 'सेटिंग्स अपडेट करने में विफल!',
        saveCanceledNavigation: 'सहेजना बाधित क्योंकि आप पृष्ठ से चले गए।',
        savePasswordCanceledNavigation:
            'पासवर्ड सहेजना बाधित क्योंकि आप पृष्ठ से चले गए।',
        saveGatewayTokenCanceledNavigation:
            'गेटवे टोकन सहेजना बाधित क्योंकि आप पृष्ठ से चले गए।',
        saveSSHKeyCanceledNavigation:
            'SSH कुंजी सहेजना बाधित क्योंकि आप पृष्ठ से चले गए।',
        mockLogStarting: 'OpenClaw एजेंट शुरू हो रहा है...',
        mockLogLoadingModel: 'मॉडल लोड हो रहा है: claude-sonnet-4-5',
        mockLogAgentReady: 'एजेंट पोर्ट 3000 पर तैयार',
        mockLogConnected: 'गेटवे से कनेक्ट हुआ',
        mockLogsContent:
            '2026-02-14T10:23:41Z {{starting}}\n2026-02-14T10:23:42Z {{loadingModel}}\n2026-02-14T10:23:43Z {{agentReady}}\n2026-02-14T10:23:44Z {{connected}}\n2026-02-14T10:24:01Z {{requestReceived}}\n2026-02-14T10:24:03Z {{responseSent1}}\n2026-02-14T10:25:12Z {{requestReceived}}\n2026-02-14T10:25:14Z {{responseSent2}}\n2026-02-14T10:26:30Z {{healthCheck}}',
        mockLogRequestReceived: 'अनुरोध प्राप्त: /chat',
        mockLogResponseSent1: 'प्रतिक्रिया भेजी गई (1.2s)',
        mockLogResponseSent2: 'प्रतिक्रिया भेजी गई (1.8s)',
        mockLogHealthCheck: 'हेल्थ चेक पास हुआ'
    },
    privacy: {
        title: 'गोपनीयता नीति',
        description:
            'जानें कि ClawHost आपका व्यक्तिगत डेटा कैसे एकत्र, उपयोग और सुरक्षित करता है.',
        lastUpdated: 'अंतिम अपडेट: 14 मार्च 2026',
        introTitle: '1. परिचय',
        introText:
            'ClawHost ("हम", "हमारा" या "हमें") आपकी गोपनीयता की रक्षा के लिए प्रतिबद्ध है. यह गोपनीयता नीति बताती है कि जब आप हमारी सेवा का उपयोग करते हैं तो हम आपकी जानकारी कैसे एकत्र, उपयोग, प्रकट और सुरक्षित करते हैं.',
        authTitle: '2. प्रमाणीकरण',
        authText:
            'ClawHost उपयोगकर्ता खातों को प्रबंधित करने के लिए Google Firebase Authentication का उपयोग करता है. आप ईमेल, Google या GitHub से साइन इन कर सकते हैं. इन साइन-इन विधियों का उपयोग करके, आप उनकी संबंधित शर्तों और गोपनीयता नीतियों से सहमत होते हैं. ये प्रदाता आपके ईमेल पते, नाम और डिवाइस जानकारी जैसा बुनियादी डेटा एकत्र कर सकते हैं. हम केवल आपका ईमेल पता और प्रदर्शन नाम संग्रहीत करते हैं.',
        collectTitle: '3. हम कौन सी जानकारी एकत्र करते हैं',
        collectText: 'हम निम्नलिखित तरीकों से जानकारी एकत्र करते हैं:',
        personalInfoTitle: 'व्यक्तिगत जानकारी',
        personalInfoEmail: 'ईमेल पता (खाता निर्माण और संचार के लिए)',
        personalInfoName: 'नाम (वैकल्पिक, वैयक्तिकरण के लिए)',
        personalInfoPayment:
            'भुगतान जानकारी (तृतीय-पक्ष प्रदाताओं द्वारा सुरक्षित रूप से प्रोसेस की जाती है)',
        serverInfoTitle: 'सर्वर जानकारी',
        serverInfoConfig: 'सर्वर कॉन्फ़िगरेशन और स्थिति',
        serverInfoIp: 'सर्वर IP पता और स्थान',
        serverInfoResources: 'संसाधन आवंटन (CPU, RAM, स्टोरेज)',
        useTitle: '4. हम आपकी जानकारी कैसे उपयोग करते हैं',
        useText: 'हम एकत्रित जानकारी का उपयोग करते हैं:',
        useProvide: 'हमारी सेवा प्रदान और बनाए रखने के लिए',
        useTransactions: 'लेनदेन प्रोसेस करने और बिलिंग जानकारी भेजने के लिए',
        useNotices: 'महत्वपूर्ण सूचनाएँ और अपडेट भेजने के लिए',
        useSupport: 'ग्राहक सहायता अनुरोधों का जवाब देने के लिए',
        useAnalyze:
            'हमारी सेवा में सुधार के लिए उपयोग पैटर्न की निगरानी और विश्लेषण करने के लिए',
        useFraud: 'धोखाधड़ी या दुरुपयोग का पता लगाने और रोकने के लिए',
        sharingTitle: '5. डेटा साझाकरण और प्रकटीकरण',
        sharingText:
            'हम आपकी व्यक्तिगत जानकारी नहीं बेचते. हम निम्नलिखित के साथ जानकारी साझा कर सकते हैं:',
        sharingProviders:
            'हमारी सेवा के संचालन में सहायता करने वाले सेवा प्रदाता (उदा., क्लाउड बुनियादी ढाँचा प्रदाता)',
        sharingLegal:
            'कानून द्वारा आवश्यक होने पर या हमारे अधिकारों की रक्षा के लिए कानूनी प्राधिकरण',
        sharingBusiness:
            'विलय, अधिग्रहण या संपत्ति बिक्री के मामले में व्यावसायिक भागीदार',
        securityTitle: '6. डेटा सुरक्षा',
        securityText:
            'हम आपकी व्यक्तिगत जानकारी को अनधिकृत पहुँच, परिवर्तन, प्रकटीकरण या विनाश से बचाने के लिए उचित तकनीकी और संगठनात्मक उपाय लागू करते हैं. इसमें एन्क्रिप्शन, सुरक्षित सर्वर और नियमित सुरक्षा आकलन शामिल हैं.',
        retentionTitle: '7. डेटा प्रतिधारण',
        retentionText:
            'हम आपकी व्यक्तिगत जानकारी तब तक बनाए रखते हैं जब तक आपका खाता सक्रिय है या आपको सेवाएँ प्रदान करने के लिए आवश्यक है. हम कानून द्वारा आवश्यक या वैध व्यावसायिक उद्देश्यों के लिए कुछ जानकारी बनाए रख सकते हैं.',
        rightsTitle: '8. आपके अधिकार',
        rightsText:
            'आपके स्थान के आधार पर, आपको निम्नलिखित का अधिकार हो सकता है:',
        rightsAccess: 'अपने व्यक्तिगत डेटा तक पहुँच',
        rightsCorrect: 'गलत डेटा को सही करना',
        rightsDelete: 'अपने डेटा को हटाने का अनुरोध करना',
        rightsObject: 'अपने डेटा के प्रसंस्करण पर आपत्ति करना',
        rightsPortability: 'डेटा पोर्टेबिलिटी',
        rightsWithdraw: 'किसी भी समय सहमति वापस लेना',
        cookiesTitle: '9. कुकीज़ और ट्रैकिंग',
        cookiesText:
            'हम कुकीज़ का उपयोग नहीं करते. प्रमाणीकरण Firebase के माध्यम से किया जाता है और आपके ब्राउज़र में संग्रहीत कुकीज़ पर निर्भर नहीं करता.',
        transfersTitle: '10. अंतर्राष्ट्रीय डेटा स्थानांतरण',
        transfersText:
            'आपकी जानकारी आपके अपने देश के अलावा अन्य देशों में स्थानांतरित और प्रोसेस की जा सकती है. हम इस गोपनीयता नीति के अनुसार आपके डेटा की सुरक्षा के लिए उचित सुरक्षा उपाय सुनिश्चित करते हैं.',
        eligibilityTitle: '11. पात्रता',
        eligibilityText:
            'हमारी सेवा किसी के लिए भी उपलब्ध है. ClawHost का उपयोग करने के लिए कोई आयु प्रतिबंध नहीं है.',
        changesTitle: '12. इस नीति में परिवर्तन',
        changesText:
            'हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं. हम इस पृष्ठ पर नई गोपनीयता नीति पोस्ट करके और "अंतिम अपडेट" तिथि को अपडेट करके किसी भी बदलाव की सूचना देंगे.',
        contactTitle: '13. हमसे संपर्क करें',
        contactText:
            'यदि आपके पास इस गोपनीयता नीति के बारे में प्रश्न हैं या अपने अधिकारों का प्रयोग करना चाहते हैं, तो कृपया हमसे संपर्क करें'
    },
    terms: {
        title: 'सेवा की शर्तें',
        description:
            'ClawHost सेवाओं का उपयोग करने के लिए नियम और शर्तें पढ़ें.',
        lastUpdated: 'अंतिम अपडेट: 14 मार्च 2026',
        acceptanceTitle: '1. शर्तों की स्वीकृति',
        acceptanceText:
            'ClawHost ("सेवा") तक पहुँचकर और इसका उपयोग करके, आप इस समझौते की शर्तों और प्रावधानों से बाध्य होने को स्वीकार और सहमत होते हैं. यदि आप इन शर्तों से सहमत नहीं हैं, तो कृपया हमारी सेवा का उपयोग न करें.',
        serviceTitle: '2. सेवा का विवरण',
        serviceText:
            'ClawHost डेडिकेटेड सर्वरों पर OpenClaw और Hermes की एक-क्लिक डिप्लॉयमेंट प्रदान करता है. हम उपयोगकर्ताओं को पूर्ण रूट एक्सेस और डेडिकेटेड संसाधनों के साथ पूर्व-कॉन्फ़िगर OpenClaw और Hermes इंस्टेंस को डिप्लॉय, प्रबंधित और एक्सेस करने में सक्षम बनाते हैं.',
        authTitle: '3. प्रमाणीकरण',
        authText:
            'ClawHost साइन-इन प्रबंधित करने के लिए Google Firebase Authentication का उपयोग करता है. आप ईमेल, Google या GitHub से प्रमाणित कर सकते हैं. इन विधियों का उपयोग करके, आप Google और GitHub की संबंधित शर्तों और गोपनीयता नीतियों से सहमत होते हैं. ये प्रदाता आपके ईमेल पते, नाम और डिवाइस डेटा जैसी बुनियादी जानकारी एकत्र कर सकते हैं.',
        responsibilitiesTitle: '4. उपयोगकर्ता ज़िम्मेदारियाँ',
        responsibilitiesText: 'आप सहमत होते हैं:',
        responsibilitiesAccurate: 'सटीक और पूर्ण पंजीकरण जानकारी प्रदान करना',
        responsibilitiesSecurity:
            'अपने खाते के क्रेडेंशियल की सुरक्षा बनाए रखना',
        responsibilitiesCompliance:
            'सभी लागू कानूनों के अनुपालन में सेवा का उपयोग करना',
        responsibilitiesLegal:
            'किसी भी अवैध या अनधिकृत उद्देश्य के लिए सेवा का उपयोग नहीं करना',
        responsibilitiesAccess:
            'किसी भी सिस्टम या नेटवर्क तक अनधिकृत पहुँच प्राप्त करने का प्रयास नहीं करना',
        prohibitedTitle: '5. निषिद्ध उपयोग',
        prohibitedText:
            'आप हमारी सेवा का उपयोग निम्नलिखित के लिए नहीं कर सकते:',
        prohibitedMalware:
            'मैलवेयर, वायरस या कोई हानिकारक सॉफ़्टवेयर वितरित करना',
        prohibitedDos: 'डिनायल-ऑफ़-सर्विस हमले या नेटवर्क दुरुपयोग करना',
        prohibitedSpam: 'स्पैम या अवांछित संचार भेजना',
        prohibitedIllegal: 'अवैध सामग्री होस्ट या वितरित करना',
        prohibitedIp:
            'बौद्धिक संपदा सहित किसी भी तृतीय-पक्ष अधिकारों का उल्लंघन करना',
        prohibitedMining: 'क्रिप्टोकरेंसी माइनिंग करना',
        prohibitedOther:
            'कोई भी अन्य गैरकानूनी या हानिकारक गतिविधियाँ जो हम अपने विवेक पर अनुचित मान सकते हैं',
        paymentTitle: '6. भुगतान और बिलिंग',
        paymentText:
            'सेवाओं का बिल निश्चित मासिक या वार्षिक आधार पर किया जाता है. आप कभी भी मासिक और वार्षिक बिलिंग के बीच स्विच कर सकते हैं, परिवर्तन आपकी अगली बिलिंग अवधि की शुरुआत में प्रभावी होगा. सभी भुगतान गैर-वापसी योग्य हैं. जब आप सर्वर के लिए भुगतान करते हैं, तो आपके पास पूरी बिलिंग अवधि के लिए उस तक पहुँच होती है. यदि आप रद्द करते हैं, तो रद्दीकरण वर्तमान बिलिंग अवधि के अंत में प्रभावी होता है. कीमतें बदल सकती हैं, लेकिन कोई भी बदलाव केवल नए डिप्लॉय किए गए क्लॉज़ पर लागू होगा और पहले से डिप्लॉय किए गए क्लॉज़ को प्रभावित नहीं करेगा. भुगतान में विफलता से आपके खाते का निलंबन या समाप्ति हो सकती है.',
        availabilityTitle: '7. सेवा उपलब्धता',
        availabilityText:
            'हम उच्च उपलब्धता बनाए रखने का प्रयास करते हैं लेकिन सेवा तक निर्बाध पहुँच की गारंटी नहीं देते. हम किसी भी समय सूचना के साथ या बिना सेवा के किसी भी हिस्से को संशोधित, निलंबित या बंद करने का अधिकार सुरक्षित रखते हैं.',
        liabilityTitle: '8. दायित्व की सीमा',
        liabilityText:
            'कानून द्वारा अनुमत अधिकतम सीमा तक, ClawHost किसी भी अप्रत्यक्ष, आकस्मिक, विशेष, परिणामी या दंडात्मक क्षति, या प्रत्यक्ष या अप्रत्यक्ष रूप से हुए लाभ या राजस्व के किसी भी नुकसान के लिए उत्तरदायी नहीं होगा.',
        terminationTitle: '9. समाप्ति',
        terminationText:
            'हम आपके खाते और सेवा तक पहुँच को तुरंत, बिना पूर्व सूचना के, ऐसे आचरण के लिए समाप्त या निलंबित कर सकते हैं जो हमें लगता है कि इन शर्तों का उल्लंघन करता है या अन्य उपयोगकर्ताओं, हमें या तृतीय पक्षों के लिए हानिकारक है, या किसी अन्य कारण से.',
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
        changesToTermsTitle: '11. शर्तों में परिवर्तन',
        changesToTermsText:
            'हम किसी भी समय इन शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं. हम ईमेल या सेवा के माध्यम से किसी भी महत्वपूर्ण बदलाव की सूचना उपयोगकर्ताओं को देंगे. ऐसे संशोधनों के बाद सेवा का निरंतर उपयोग अपडेट की गई शर्तों की स्वीकृति माना जाएगा.',
        contactTitle: '12. संपर्क जानकारी',
        contactText:
            'यदि इन शर्तों के बारे में आपके कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें'
    },
    productHunt: {
        liveOn: 'लाइव है',
        productHunt: 'Product Hunt',
        celebrate: 'हमें समर्थन दें और पाएँ',
        discount: '10% की छूट',
        yourFirstMonth: 'आपके पहले ऑर्डर पर',
        upvoteNow: 'हमें अपवोट करें'
    },
    hermesBanner: {
        title: 'Hermes Agent',
        message: 'Hermes एजेंट अब ClawHost पर डिप्लॉयमेंट के लिए समर्थित हैं।'
    },
    compare: {
        title: 'तुलना',
        description:
            'देखें कि ClawHost अन्य OpenClaw होस्टिंग प्लेटफ़ॉर्म की तुलना में कैसा है.',
        badge: 'तुलना',
        feature: 'प्लेटफ़ॉर्म',
        compareWith: 'तुलना करें',
        lastUpdated: 'अंतिम अपडेट: मार्च 2026',
        competitorClawHost: 'ClawHost',
        competitorLobsterFarm: 'LobsterFarm',
        competitorSimpleAgent: 'SimpleAgent',
        competitorMyAgentAi: 'MyAgent.ai',
        competitorQuickAgent: 'QuickAgent',
        categoryInfrastructure: 'बुनियादी ढाँचा',
        categoryPricing: 'मूल्य निर्धारण और बिलिंग',
        categoryDeployment: 'डिप्लॉयमेंट और सेटअप',
        categoryManagement: 'OpenClaw प्रबंधन',
        categorySecurity: 'डेटा और सुरक्षा',
        categoryMonitoring: 'मॉनिटरिंग और रखरखाव',
        categorySupport: 'सहायता और प्लेटफ़ॉर्म',
        featureServerOwnership: 'सर्वर स्वामित्व',
        featureProviderChoice: 'क्लाउड प्रदाता विकल्प',
        featureDedicatedResources: 'समर्पित संसाधन',
        featureRootAccess: 'पूर्ण रूट/SSH एक्सेस',
        featureServerLocations: 'सर्वर स्थान',
        featureStartingPrice: 'शुरुआती कीमत',
        featureTransparentPricing: 'पारदर्शी मूल्य निर्धारण',
        featurePowerfulServers: 'शक्तिशाली सर्वर, कम कीमत',
        featureLocationSelection: 'अपना सर्वर स्थान चुनें',
        featureSubdomainAccess: 'सबडोमेन एक्सेस',
        featureThemes: 'लाइट और डार्क थीम',
        featureSetupTime: 'सेटअप समय',
        featureOneClickDeploy: 'एक-क्लिक डिप्लॉय',
        featureMultipleInstances: 'एकाधिक इंस्टेंस',
        featureDataOwnership: 'पूर्ण डेटा स्वामित्व',
        featureDataExport: 'डेटा निर्यात',
        featureBackups: 'बैकअप',
        featureSecurityHardening: 'सुरक्षा हार्डनिंग',
        featureSslTls: 'SSL/TLS',
        featureOpenSource: 'ओपन सोर्स',
        featureAutoUpdates: 'स्वतः अपडेट',
        featureDiagnostics: 'रीयल-टाइम डायग्नोस्टिक्स',
        featureLogStreaming: 'लॉग स्ट्रीमिंग',
        featureRepairTools: 'मरम्मत उपकरण',
        featureSupportChannels: 'सहायता चैनल',
        featureMultiLanguage: 'बहु-भाषा UI',
        featureDesktopApp: 'डेस्कटॉप ऐप',
        featureOneClickVersion: 'एक-क्लिक संस्करण स्विच',
        featureWebTerminal: 'वेब टर्मिनल एक्सेस',
        featureSocials: 'सोशल मीडिया',
        dedicatedVps: 'समर्पित VPS',
        sharedContainers: 'साझा कंटेनर',
        isolatedContainers: 'पृथक कंटेनर',
        cloudWorkspaces: 'क्लाउड वर्कस्पेस',
        threeProviders: 'Cloud',
        singleProvider: 'एकल प्रदाता',
        fullyDedicated: 'पूरी तरह समर्पित',
        shared: 'साझा',
        fullRootSsh: 'पूर्ण रूट + SSH',
        sshOnRequest: 'अनुरोध पर SSH',
        noAccess: 'कोई एक्सेस नहीं',
        thirtyPlusLocations: '30+ स्थान',
        limitedLocations: 'सीमित',
        fourLocations: '4 स्थान',
        fromTwentyFiveMonth: '$25/माह से',
        aboutFortyFourMonth: '~$44/माह औसत',
        fromNineteenMonth: '$19–79/माह',
        nineteenMonth: '$19/माह',
        clearSpecsPricing: 'स्पष्ट स्पेक्स और मूल्य',
        unclearPricing: 'अस्पष्ट मूल्य निर्धारण',
        fixedTiers: '3 निश्चित टियर',
        creditBased: 'क्रेडिट-आधारित',
        minutes: 'मिनट',
        underOneMinute: '1 मिनट से कम',
        thirtySeconds: '30 सेकंड',
        instant: 'तुरंत',
        noneRequired: 'कोई नहीं',
        minimal: 'न्यूनतम',
        unlimited: 'असीमित',
        singleInstance: 'एकल',
        noMarketplace: 'कोई मार्केटप्लेस नहीं',
        appOnly: 'केवल ऐप',
        fullConfig: 'पूर्ण कॉन्फ़िगरेशन',
        limitedConfig: 'सीमित',
        zipExport: 'ZIP निर्यात',
        serverTransfer: 'सर्वर ट्रांसफ़र',
        noExport: 'कोई निर्यात नहीं',
        volumeStorage: 'वॉल्यूम स्टोरेज',
        noBackups: 'कोई बैकअप नहीं',
        dailyBackups: 'दैनिक बैकअप',
        included: 'शामिल',
        notIncluded: 'शामिल नहीं',
        managed: 'प्रबंधित',
        manual: 'मैनुअल',
        appStore: 'App Store',
        liveMonitoring: 'लाइव मॉनिटरिंग',
        liveLogs: 'लाइव लॉग',
        oneClickRepair: 'एक-क्लिक मरम्मत',
        emailGithub: 'ईमेल, GitHub',
        humanSupport: 'मानव सहायता',
        communityOnly: 'केवल समुदाय',
        appSupport: 'ऐप सहायता',
        prioritySupport: '24/7 सहायता (Pro+)',
        fourLanguages: '4 भाषाएँ',
        englishOnly: 'केवल अंग्रेज़ी',
        available: 'उपलब्ध',
        comingSoon: 'जल्द आ रहा है',
        macOsOnly: 'केवल macOS',
        viaTelegram: 'Telegram के माध्यम से',
        builtInTerminal: 'कोई SSH नहीं चाहिए',
        notAvailable: 'उपलब्ध नहीं',
        disclaimer: 'कुछ बदला या गलत है? हमें ईमेल करें',
        disclaimerOr: 'या पुल रिक्वेस्ट खोलें',
        github: 'GitHub',
        ctaTitle: 'अंतर देखने के लिए तैयार हैं?',
        ctaDescription:
            'अपने समर्पित सर्वर पर OpenClaw डिप्लॉय करें. पूर्ण स्वामित्व, पारदर्शी मूल्य और मिनटों में तैयार.'
    },
    admin: {
        title: 'एडमिन',
        description: 'अपने प्लेटफ़ॉर्म उपयोगकर्ताओं और डेटा को प्रबंधित करें।',
        usersTab: 'उपयोगकर्ता',
        totalUsers: '{{count}} उपयोगकर्ता',
        noUsers: 'कोई उपयोगकर्ता नहीं',
        noUsersDescription:
            'आपके फ़िल्टर से मेल खाने वाला कोई उपयोगकर्ता नहीं मिला.',
        genericErrorDescription: 'कुछ गलत हो गया. कृपया पुनः प्रयास करें.',
        genericEmptyDescription: 'यहाँ अभी कुछ दिखाने को नहीं है.',
        failedToLoadUsers: 'उपयोगकर्ता लोड करने में विफल!',
        failedToLoadUsersDescription:
            'उपयोगकर्ता लोड करते समय कुछ गलत हो गया। कृपया पुनः प्रयास करें।',
        failedToLoadUserDetail: 'उपयोगकर्ता विवरण लोड करने में विफल!',
        userDetail: 'उपयोगकर्ता विवरण',
        userInfo: 'उपयोगकर्ता जानकारी',
        email: 'ईमेल',
        name: 'नाम',
        role: 'भूमिका',
        authMethods: 'प्रमाणीकरण विधियाँ',
        license: 'लाइसेंस',
        referralCode: 'रेफ़रल कोड',
        referredBy: 'रेफ़र किया गया',
        joined: 'पंजीकरण तिथि',
        claws: 'Claws',
        sshKeys: 'SSH कुंजियाँ',
        volumes: 'वॉल्यूम',
        billing: 'बिलिंग',
        noClaws: 'कोई Claw नहीं',
        noSshKeys: 'कोई SSH कुंजी नहीं',
        noVolumes: 'कोई वॉल्यूम नहीं',
        noBilling: 'कोई बिलिंग इतिहास नहीं',
        hasLicense: 'हाँ',
        noLicense: 'नहीं',
        notSet: 'सेट नहीं',
        searchPlaceholder: 'ईमेल या नाम से खोजें...',
        filterAll: 'सभी उपयोगकर्ता',
        filterWithClaws: 'Claws के साथ',
        filterWithoutClaws: 'Claws के बिना',
        sortNewest: 'नवीनतम पहले',
        sortOldest: 'सबसे पुराने पहले',
        editUser: 'संपादित करें',
        saveUser: 'सहेजें',
        userUpdated: 'उपयोगकर्ता अपडेट किया गया।',
        userUpdateFailed: 'अपडेट विफल!',
        clawsTab: 'Claws',
        sshKeysTab: 'SSH कुंजियाँ',
        volumesTab: 'वॉल्यूम',
        noClawsFound: 'कोई Claw नहीं',
        noSSHKeysFound: 'कोई SSH कुंजी नहीं',
        noVolumesFound: 'कोई वॉल्यूम नहीं',
        failedToLoadAgents: 'Agents लोड करने में विफल!',
        failedToLoadSSHKeys: 'SSH कुंजियाँ लोड करने में विफल!',
        failedToLoadVolumes: 'वॉल्यूम लोड करने में विफल!',
        owner: 'मालिक',
        searchClaws: 'Claws खोजें...',
        searchSSHKeys: 'SSH कुंजियाँ खोजें...',
        referralsTab: 'रेफ़रल',
        pendingClawsTab: 'लंबित',
        emailsTab: 'ईमेल',
        analyticsTab: 'विश्लेषण',
        billingTab: 'बिलिंग',
        settingsTab: 'सेटिंग्स',
        settingsDescription: 'अपनी व्यवस्थापक प्राथमिकताएँ प्रबंधित करें.',
        showAllAgents: 'सभी उपयोगकर्ताओं के सभी एजेंट दिखाएँ',
        billingFilterAll: 'सभी ऑर्डर',
        billingFilterService: 'Claw सेवा',
        billingFilterLicense: 'लाइसेंस',
        billingOrderTypeLabel: ' · {{type}}',
        noBillingFound: 'कोई बिलिंग ऑर्डर नहीं',
        failedToLoadBilling: 'बिलिंग ऑर्डर लोड करने में विफल!',
        searchBilling: 'उत्पाद नाम से खोजें...',
        billingReason: 'कारण',
        billingType: 'प्रकार',
        billingSubtotal: 'उप-योग',
        billingDiscount: 'छूट',
        billingTax: 'कर',
        billingTotal: 'कुल',
        analyticsDay: 'दिन',
        analyticsWeek: 'सप्ताह',
        analyticsMonth: 'महीना',
        analyticsYear: 'वर्ष',
        analyticsAllTime: 'सभी समय',
        analyticsFilter: 'फ़िल्टर',
        analyticsResources: 'संसाधन',
        analyticsSelectAll: 'सभी चुनें',
        analyticsDeselectAll: 'सभी अचयनित करें',
        failedToLoadAnalytics: 'विश्लेषण लोड करने में विफल!',
        noAnalyticsData: 'कोई विश्लेषण डेटा उपलब्ध नहीं.',
        noReferralsFound: 'कोई रेफरल नहीं',
        noPendingClawsFound: 'कोई लंबित Claw नहीं',
        noEmailsFound: 'कोई ईमेल नहीं',
        failedToLoadReferrals: 'रेफ़रल लोड करने में विफल!',
        failedToLoadPendingClaws: 'लंबित Claws लोड करने में विफल!',
        failedToLoadEmails: 'ईमेल लोड करने में विफल!',
        referrer: 'रेफ़रर',
        referred: 'रेफ़र किया गया',
        earned: 'अर्जित',
        expiresAt: 'समाप्ति',
        feature: 'सुविधा',
        sentAt: 'भेजा गया',
        fileSize: 'आकार',
        registered: 'पंजीकृत',
        status: 'स्थिति',
        ip: 'IP',
        plan: 'प्लान',
        location: 'स्थान',
        subdomain: 'सबडोमेन',
        subscription: 'सदस्यता',
        billingInterval: 'बिलिंग',
        deletionScheduled: 'हटाना निर्धारित',
        fingerprint: 'फिंगरप्रिंट',
        price: 'कीमत',
        pricePerMonth: '{{price}}/माह',
        statusRunning: 'चल रहा है',
        statusStopped: 'रुका हुआ',
        adminBadge: 'एडमिन',
        unitGB: '{{size}} GB',
        unitKB: '{{size}} KB'
    },
    affiliate: {
        title: 'Affiliate',
        description: 'Earn rewards by referring friends to ClawHost.',
        subtitle: 'Share your referral link and earn rewards.',
        learnMore: 'एफिलिएट प्रोग्राम के बारे में और जानें',
        referralCode: 'Referral Code',
        referrals: 'Referrals',
        payments: 'भुगतान',
        earnings: 'Earnings',
        codeChangeHint: 'You can customize your referral code once.',
        codeAlreadyChanged: 'Your referral code has already been customized.',
        codeUpdated: 'Referral code updated.',
        codeUpdateFailed: 'Failed to update referral code!',
        invalidCodeLength:
            'Code must be between {{min}} and {{max}} characters!',
        referralHistory: 'Referral History',
        paymentHistory: 'भुगतान इतिहास',
        periodToday: 'Today',
        periodWeek: 'Week',
        periodMonth: 'Month',
        periodYear: 'Year',
        periodAll: 'All',
        confirmChangeTitle: 'Change Referral Code',
        confirmChangeDescription:
            'Are you sure? This action is permanent and cannot be undone. You will not be able to change your referral code again.',
        noReferralsYet: 'कोई रेफरल नहीं',
        noReferralsDescription:
            'Share your referral link to start earning rewards.',
        noPaymentsYet: 'कोई भुगतान नहीं',
        noPaymentsDescription:
            'जब आपके रेफ़र किए गए उपयोगकर्ता खरीदारी करेंगे, तो उनके भुगतान यहाँ दिखाई देंगे।'
    },
    affiliateProgram: {
        title: 'सहबद्ध कार्यक्रम',
        description:
            'जानें कि ClawHost सहबद्ध कार्यक्रम कैसे काम करता है, आप कितना कमा सकते हैं और भाग लेने के नियम क्या हैं।',
        lastUpdated: 'अंतिम अपडेट: 1 अप्रैल 2026',
        overviewTitle: '1. अवलोकन',
        overviewText:
            'ClawHost सहबद्ध कार्यक्रम आपको नए उपयोगकर्ताओं को ClawHost पर रेफर करके पुरस्कार अर्जित करने देता है। जब कोई आपके रेफरल लिंक के माध्यम से ClawHost पर जाने के बाद खरीदारी करता है, तो आप उनके भुगतान पर कमीशन कमाते हैं। कार्यक्रम में शामिल होना मुफ्त है और सभी पंजीकृत ClawHost उपयोगकर्ताओं के लिए उपलब्ध है।',
        howItWorksTitle: '2. यह कैसे काम करता है',
        howItWorksText: 'सहबद्ध कार्यक्रम शुरू करना आसान है:',
        howItWorksStep1:
            'एक ClawHost खाता बनाएं। आपके लिए स्वचालित रूप से एक अद्वितीय रेफरल कोड तैयार किया जाता है।',
        howItWorksStep2:
            'अपना रेफरल लिंक दोस्तों, सहकर्मियों या अपने दर्शकों के साथ साझा करें। आपका लिंक इस प्रारूप का अनुसरण करता है: clawhost.cloud?ref=YOUR_CODE।',
        howItWorksStep3:
            'जब कोई आपके लिंक के माध्यम से ClawHost पर जाने के बाद खरीदारी करता है, तो इसे आपके रेफरल के रूप में ट्रैक किया जाता है।',
        howItWorksStep4:
            'जब भी आपका रेफर किया गया उपयोगकर्ता योग्य खरीदारी करता है, आप कमीशन कमाते हैं।',
        earningsTitle: '3. कमाई और भुगतान',
        earningsText: 'सहबद्ध कमाई इस प्रकार काम करती है:',
        earningsCommission:
            'आप अपने रेफर किए गए उपयोगकर्ताओं द्वारा की गई हर योग्य खरीदारी पर 15% कमीशन कमाते हैं। कमीशन ClawHost Cloud और ClawHost Go दोनों योजनाओं पर लागू होते हैं।',
        earningsMonthly:
            'मासिक सदस्यता के लिए, आप रेफरल की तारीख से 1 वर्ष तक कमीशन कमाते हैं।',
        earningsYearly:
            'वार्षिक सदस्यता के लिए, आप केवल पहले वर्ष पर कमीशन कमाते हैं।',
        earningsPayout:
            'न्यूनतम निकासी राशि $100 USD है। निकासी का अनुरोध करने के लिए, हमारी सहायता टीम से संपर्क करें।',
        earningsPaymentMethod:
            'निकासी PayPal के माध्यम से संसाधित की जाती है। भुगतान का अनुरोध करते समय आपको एक वैध PayPal ईमेल पता प्रदान करना होगा।',
        earningsCurrency: 'सभी कमाई USD में गणना और प्रदर्शित की जाती है।',
        referralCodeTitle: '4. आपका रेफरल कोड',
        referralCodeText:
            'प्रत्येक उपयोगकर्ता को पंजीकरण पर एक अद्वितीय रेफरल कोड प्राप्त होता है। आप इसे अधिक यादगार बनाने के लिए एक बार अनुकूलित कर सकते हैं:',
        referralCodeUnique:
            'आपका रेफरल कोड आपके खाते के लिए अद्वितीय है और इसे किसी अन्य उपयोगकर्ता के साथ साझा या स्थानांतरित नहीं किया जा सकता।',
        referralCodeOneChange:
            'आप अपना रेफरल कोड ठीक एक बार अनुकूलित कर सकते हैं। सावधानी से चुनें — यह परिवर्तन स्थायी है और पूर्ववत नहीं किया जा सकता।',
        referralCodeFormat:
            'रेफरल कोड में केवल अक्षर, संख्याएं, हाइफन और अंडरस्कोर हो सकते हैं।',
        referralWindowTitle: '5. रेफरल एट्रिब्यूशन विंडो',
        referralWindowText:
            'रेफरल आपको उस समय से 3 महीने तक श्रेय दिया जाता है जब रेफर किया गया उपयोगकर्ता पहली बार आपके लिंक के माध्यम से ClawHost पर जाता है। यदि रेफर किया गया उपयोगकर्ता इस 3 महीने की विंडो के भीतर खरीदारी नहीं करता है, तो रेफरल समाप्त हो जाता है और कोई कमीशन नहीं मिलता। यदि उपयोगकर्ता किसी अलग रेफरल लिंक के माध्यम से जाता है, तो नया रेफरल पिछले को बदल देता है।',
        eligibilityTitle: '6. पात्रता',
        eligibilityText:
            'सहबद्ध कार्यक्रम में भाग लेने के लिए, आपको निम्नलिखित आवश्यकताओं को पूरा करना होगा:',
        eligibilityAccount: 'आपके पास एक पंजीकृत ClawHost खाता होना चाहिए।',
        eligibilityStanding:
            'आपका खाता नीति उल्लंघन के इतिहास के बिना अच्छी स्थिति में होना चाहिए।',
        eligibilityAge:
            'आपकी आयु कम से कम 18 वर्ष या आपके अधिकार क्षेत्र में वयस्कता की आयु होनी चाहिए।',
        rulesTitle: '7. कार्यक्रम नियम',
        rulesText:
            'सहबद्ध कार्यक्रम की अखंडता बनाए रखने के लिए, निम्नलिखित नियम लागू होते हैं:',
        rulesNoSelfReferral:
            'स्व-रेफरल सख्ती से प्रतिबंधित है। आप अपने स्वयं के खातों या आपके नियंत्रण वाले खातों को रेफर नहीं कर सकते।',
        rulesNoFakeAccounts:
            'नकली खाते बनाना, स्वचालित साइनअप या रेफरल उत्पन्न करने के लिए बॉट का उपयोग करना प्रतिबंधित है।',
        rulesNoSpam:
            'अपने रेफरल लिंक को बढ़ावा देने के लिए अवांछित बल्क संदेश (स्पैम) भेजना अनुमत नहीं है।',
        rulesNoMisrepresentation:
            'आप किसी भी तरह से ClawHost, इसकी सेवाओं या सहबद्ध कार्यक्रम को गलत तरीके से प्रस्तुत नहीं कर सकते।',
        rulesNoIncentivized:
            'प्रत्यक्ष मौद्रिक प्रोत्साहन देना (जैसे, उपयोगकर्ताओं को आपके लिंक के माध्यम से साइन अप करने के लिए भुगतान करना) अनुमत नहीं है।',
        terminationTitle: '8. उल्लंघन और समाप्ति',
        terminationText:
            'इन नियमों के किसी भी उल्लंघन का परिणाम सभी लंबित और अर्जित पुरस्कारों की तत्काल जब्ती होगी। ClawHost सहबद्ध कार्यक्रम से आपके खाते को निलंबित या स्थायी रूप से प्रतिबंधित करने का अधिकार सुरक्षित रखता है। गंभीर मामलों में, आपका ClawHost खाता भी समाप्त किया जा सकता है। उल्लंघनों के संबंध में सभी निर्णय अंतिम हैं।',
        marketingTitle: '9. कैसे प्रचार करें',
        marketingText:
            'अपना रेफरल लिंक साझा करने और अपनी कमाई बढ़ाने के कई रचनात्मक और वैध तरीके हैं:',
        marketingSocial:
            'X, LinkedIn, Reddit और Facebook जैसे सोशल मीडिया प्लेटफॉर्म पर अपना लिंक साझा करें। ClawHost के साथ अपने अनुभव के बारे में लिखें और अपना रेफरल लिंक शामिल करें।',
        marketingBlog:
            'ClawHost के बारे में ब्लॉग पोस्ट, ट्यूटोरियल या समीक्षाएं लिखें। सामग्री में स्वाभाविक रूप से अपना रेफरल लिंक शामिल करें।',
        marketingVideo:
            'YouTube या TikTok पर वीडियो सामग्री बनाएं जो दिखाए कि आप AI एजेंटों को तैनात और प्रबंधित करने के लिए ClawHost का उपयोग कैसे करते हैं।',
        marketingCommunity:
            'डेवलपर समुदायों, फोरम और Discord सर्वर में भाग लें। जब कोई क्लाउड होस्टिंग या AI एजेंट तैनाती के बारे में पूछे, तो अपने लिंक के साथ ClawHost की सिफारिश करें।',
        marketingNewsletter:
            'यदि आप न्यूज़लेटर या ईमेल सूची चलाते हैं, तो किसी प्रासंगिक अंक में अपने रेफरल लिंक के साथ ClawHost का उल्लेख करें।',
        marketingComparison:
            'ईमानदार तुलना लेख या गाइड लिखें जो यह उजागर करें कि ClawHost को अन्य प्लेटफॉर्म से क्या अलग बनाता है।',
        changesToProgramTitle: '10. कार्यक्रम में परिवर्तन',
        changesToProgramText:
            'ClawHost बिना पूर्व सूचना के किसी भी समय सहबद्ध कार्यक्रम को संशोधित, निलंबित या बंद करने का अधिकार सुरक्षित रखता है। इसमें कमीशन दरों, रेफरल विंडो, भुगतान सीमा और कार्यक्रम नियमों में परिवर्तन शामिल हैं। परिवर्तनों के बाद निरंतर भागीदारी अद्यतन शर्तों की स्वीकृति मानी जाती है।',
        getStartedTitle: '11. शुरू करें',
        getStartedText:
            'कमाई शुरू करने के लिए तैयार हैं? अपना रेफरल लिंक प्राप्त करने के लिए अपने सहबद्ध डैशबोर्ड पर जाएं और इसे अपने नेटवर्क के साथ साझा करना शुरू करें।',
        getStartedButton: 'सहबद्ध डैशबोर्ड पर जाएं',
        contactTitle: '12. संपर्क',
        contactText:
            'यदि आपके पास सहबद्ध कार्यक्रम के बारे में प्रश्न हैं, अपने रेफरल कोड में सहायता चाहिए या उल्लंघन की रिपोर्ट करना चाहते हैं, तो हमसे संपर्क करें'
    }
}

export default hi