import type { Translations } from '#i18n/types'

const ru: Translations = {
    common: {
        loading: 'Загрузка...',
        noResults: 'Результаты не найдены.',
        save: 'Сохранить',
        cancel: 'Отмена',
        confirm: 'Подтвердить',
        delete: 'Удалить',
        deleting: 'Удаление...',
        create: 'Создать',
        done: 'Готово',
        back: 'Назад',
        copy: 'Копировать',
        copied: 'Скопировано.',
        copiedWithLabel: '{{label}} скопирован.',
        show: 'Показать',
        hide: 'Скрыть',
        tryAgain: 'Попробовать снова',
        addKey: 'Добавить ключ',
        close: 'Закрыть',
        none: 'Нет',
        all: 'Все',
        unknown: 'Неизвестно',
        pageNotFound: 'Страница не найдена',
        closeNotification: 'Закрыть уведомление',
        beta: 'Бета',
        brandName: 'ClawHost',
        brandNameGo: 'ClawHost Go',
        brandNameGoVersion: 'ClawHost Go {{version}}',
        pageTitleWithBrand: '{{title}} - ClawHost',
        menuFile: 'Файл',
        menuEdit: 'Правка',
        menuView: 'Вид',
        menuWindow: 'Окно',
        menuHelp: 'Справка',
        scrollToBottom: 'Прокрутить вниз',
        second: 'секунда',
        seconds: 'секунд'
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
        switchLanguage: 'Язык'
    },
    theme: {
        light: 'Светлая',
        dark: 'Тёмная',
        system: 'Системная',
        toggleTheme: 'Переключить тему'
    },
    nav: {
        claws: 'Claws',
        sshKeys: 'SSH-ключи',
        account: 'Аккаунт',
        affiliate: 'Партнёр',
        license: 'Лицензия',
        signOut: 'Выйти',
        admin: 'Админ',
        login: 'Войти',
        deploy: 'Развернуть',
        deployOpenClaw: 'Развернуть OpenClaw',
        mainNavigation: 'Основная навигация',
        footerNavigation: 'Навигация в подвале',
        toggleMenu: 'Переключить меню',
        cloud: 'Cloud',
        cloudSubtitle: 'Техническое',
        go: 'Go',
        goSubtitle: 'Нетехническое'
    },
    go: {
        pageTitle: 'ClawHost Go',
        heroTitle1: 'Разверните OpenClaw.',
        heroTitle2: 'Локально. Мгновенно.',
        badge: 'OpenClaw и Hermes локально',
        description:
            'Лёгкий настольный клиент для управления вашими экземплярами OpenClaw. Разворачивайте, отслеживайте и управляйте claws — прямо с вашего компьютера.',
        features: 'Возможности',
        whyClawHostGo: 'Все возможности в одном месте',
        featuresDescription:
            'Почему стоит попробовать — возможности говорят сами за себя.',
        zeroConfigDescription:
            'Сэкономьте часы на настройке сервера, OpenClaw и Hermes. Они предустановлены и готовы за минуты.',
        ownedDataDescription:
            'Всё работает на вашем устройстве. Никаких облачных серверов, третьих сторон и утечки данных.',
        terminalAccessDescription:
            'Получите доступ к терминалу вашего экземпляра OpenClaw прямо из приложения. Внешние SSH-клиенты не нужны.',
        simplePricing: 'Простые цены',
        simplePricingDescription:
            'Одна лицензия, безлимитное использование. Без ежемесячных платежей, ограничений и скрытых комиссий.',
        localDomain: 'Пользовательский локальный домен',
        localDomainDescription:
            'Получите доступ к OpenClaw через собственный локальный домен. Чистые URL-адреса в вашей сети.',
        secureDescription:
            'Ваши данные никогда не покидают устройство. Полная изоляция, полное шифрование, полный контроль.',
        pricing: 'Цены',
        pricingTitle: 'Просто и разово',
        pricingDescription:
            'Без подписок, без скрытых комиссий. Одна лицензия, безлимитное использование.',
        pricingPrice: '${{price}}',
        pricingLabel: 'Разовый платёж',
        pricingFeature1: 'Пожизненная лицензия',
        pricingFeature2: 'Безлимитные claws',
        pricingFeature3: 'Все будущие обновления',
        pricingFeature4: 'Без ограничений использования',
        pricingFeature5: 'Приоритетная поддержка',
        pricingFeature6: 'Пользовательский локальный домен',
        comparison: 'Сравнение',
        comparisonTitle: 'Go vs Cloud',
        comparisonDescription:
            'Выберите то, что подходит вам. Go работает локально, Cloud — на выделенных серверах.',
        comparisonLocalUs: 'Полностью работает на вашем устройстве',
        comparisonLocalOthers: 'Работает на удалённых серверах',
        comparisonPricingUs: 'Разовый платёж',
        comparisonPricingOthers: 'Ежемесячная подписка',
        comparisonDataUs: 'Данные остаются на вашем устройстве',
        comparisonDataOthers: 'Данные на облачных серверах',
        comparisonSetupUs: 'Установите и запустите мгновенно',
        comparisonSetupOthers: 'Развёртывание в один клик',
        comparisonUpdatesUs: 'Автоматические обновления',
        comparisonUpdatesOthers: 'Автоматические обновления',
        faqTitle: 'Вопросы',
        faqHeading: 'Частые вопросы',
        faqDescription: 'Всё, что нужно знать о ClawHost Go.',
        faq1Question: 'Что такое ClawHost Go?',
        faq1Answer:
            'ClawHost Go — это лёгкое настольное приложение, позволяющее запускать OpenClaw локально на вашем компьютере. Облачные серверы не нужны — установите, запустите и начните использовать OpenClaw за секунды.',
        faq2Question: 'Чем Go отличается от ClawHost Cloud?',
        faq2Answer:
            'ClawHost Cloud разворачивает OpenClaw на выделенных удалённых серверах с круглосуточной доступностью и глобальным доступом. ClawHost Go запускает всё локально на вашем устройстве — идеально для конфиденциальности, автономной работы и простых сценариев.',
        faq3Question: 'Нужно ли интернет-соединение?',
        faq3Answer:
            'ClawHost Go работает офлайн для локального использования. Интернет-соединение необходимо только для первоначальной настройки, обновлений и функций, требующих внешних API-вызовов.',
        faq4Question: 'Лицензия оплачивается разово?',
        faq4Answer:
            'Да. Вы платите один раз и получаете пожизненный доступ к ClawHost Go, включая все будущие обновления. Без подписок, без периодических платежей.',
        faq5Question: 'Какие операционные системы поддерживаются?',
        faq5Answer:
            'ClawHost Go поддерживает Windows и macOS. Обе платформы получают одинаковые функции и обновления одновременно.',
        faq6Question: 'Можно ли перейти с Go на Cloud позже?',
        faq6Answer:
            'Конечно. Вы можете экспортировать конфигурацию OpenClaw из Go и развернуть её в ClawHost Cloud в любое время. Обе платформы полностью совместимы.',
        statsPrice: '${{price}}',
        statsLifetime: 'Навсегда',
        statsOneTime: 'Разово',
        statsPayment: 'Платёж',
        statsLocal: 'Локально',
        statsLocally: 'Работает локально',
        statsZero: 'Ноль',
        statsZeroConfig: 'Без настройки',
        ctaTitle: 'Запустите OpenClaw локально',
        ctaDescription:
            'Разовый платёж, пожизненная лицензия. Разверните OpenClaw на своём компьютере — без облака, без подписок, без ограничений. Ваши данные, ваши правила.',
        downloadForMac: 'Скачать для Mac',
        downloadVersion: 'Версия {{version}}',
        downloadForWindows: 'Скачать для Windows',
        deviceNotSupported: 'Ваше устройство пока не поддерживается ClawHost Go.',
        downloadFailed: 'Ошибка загрузки!',
        downloadStarted: 'Загрузка началась.',
        appleSilicon: 'Apple Silicon',
        intel: 'Intel',
        chooseMacArch: 'Какой у вас Mac?',
        otherVersions: 'Другие версии',
        updateAvailable: 'Доступна версия {{version}}.',
        updateDownload: 'Скачать',
        updateDismiss: 'Позже',
        clawNotFound: 'Claw не найден!',
        clawNameAlreadyExists: 'Claw с таким именем уже существует!',
        invalidSubdomain:
            'Недопустимый поддомен. Используйте 3-20 строчных букв и цифр!',
        subdomainAlreadyInUse: 'Этот поддомен уже используется!',
        clawDirectoryNotFound: 'Директория claw не найдена!',
        noVersionInstalled:
            'Версия OpenClaw не установлена. Перейдите на вкладку «Версии» и установите одну!',
        failedToStartClaw: 'Не удалось запустить claw!',
        noVersionAssigned: 'Этому claw не назначена версия OpenClaw!',
        invalidAgentName: 'Недопустимое имя агента!',
        invalidPath: 'Недопустимый путь!',
        fileNotFound: 'Файл не найден!',
        purchasingNotAvailable: 'Покупка недоступна в локальном режиме!',
        exportFailed: 'Экспорт не удался!',
        versionNotInstalled: 'Версия OpenClaw {{version}} не установлена!',
        failedToStartProcess: 'Не удалось запустить процесс: {{reason}}!',
        gatewayNotReady: 'Агент не успел стать готовым!',
        processExitedImmediately: 'Процесс завершился сразу. Логи:\n{{logs}}',
        processExitedImmediatelyNoLogs:
            'Процесс завершился сразу после запуска!',
        processExitedWithCode:
            'Процесс завершился с кодом {{code}}. Логи:\n{{logs}}',
        processExitedWithCodeNoLogs: 'Процесс завершился с кодом {{code}}!',
        processExitedUnexpectedly: 'Процесс завершился неожиданно!',
        failedToInstallVersion:
            'Не удалось установить версию {{version}}: {{reason}}!',
        oauthCancelled: 'Аутентификация отменена!',
        diskFull: 'На устройстве нет свободного места!',
        permissionDenied: 'Доступ запрещён!',
        networkTimeout: 'Превышено время ожидания сетевого запроса!',
        failedToFetchLatestVersion: 'Не удалось получить последнюю версию!'
    },
    footer: {
        website: 'Сайт',
        copyrightName: 'ClawHost',
        copyrightRights: 'Все права защищены.',
        termsOfService: 'Условия использования',
        privacyPolicy: 'Политика конфиденциальности',
        getInTouch: 'Связаться с нами',
        brandDescription:
            'Разверните OpenClaw на собственном VPS в один клик. Полная конфиденциальность, выделенные ресурсы, никакой общей инфраструктуры.',
        builtBy: 'Разработано',
        supportedBy: 'При поддержке',
        product: 'Продукт',
        howItWorks: 'Как это работает',
        features: 'Возможности',
        pricing: 'Цены',
        faq: 'Вопросы',
        changelog: 'Список изменений',
        compare: 'Полное сравнение',
        legalAndMore: 'Прочее',
        affiliateProgram: 'Партнёрская программа',
        documentation: 'Документация',
        productDescription:
            'Разворачивайте агентов OpenClaw и Hermes в облаке или локально в один клик — создавайте, подключайте и масштабируйте ваших ИИ-агентов быстрее с ClawHost.',
        ariaGithub: 'GitHub',
        ariaX: 'X',
        ariaFacebook: 'Facebook',
        ariaInstagram: 'Instagram',
        ariaThreads: 'Threads',
        ariaYoutube: 'YouTube',
        ariaTiktok: 'TikTok'
    },
    errors: {
        somethingWentWrong: 'Что-то пошло не так!',
        couldNotLoadData:
            'Не удалось загрузить данные. Пожалуйста, попробуйте снова!',
        notFound: 'Страница не найдена!',
        pageNotFoundDescription:
            'Страница, которую вы ищете, не существует или была перемещена.',
        goToHomepage: 'На главную',
        failedToLoadAgents: 'Не удалось загрузить agents!',
        failedToLoadAgentsDescription:
            'Не удалось загрузить ваши Agents. Проверьте подключение и попробуйте снова!',
        failedToLoadSSHKeys: 'Не удалось загрузить SSH-ключи!',
        failedToLoadSSHKeysDescription:
            'Не удалось загрузить ваши SSH-ключи. Проверьте подключение и попробуйте снова!',
        failedToUpdateProfile: 'Не удалось обновить профиль!',
        failedToAddSSHKey: 'Не удалось добавить SSH-ключ!',
        failedToCreateClaw: 'Не удалось создать claw!',
        failedToLoadLocations:
            'Не удалось загрузить локации. Пожалуйста, попробуйте снова!',
        failedToLoadPlans:
            'Не удалось загрузить тарифы. Пожалуйста, попробуйте снова!',
        invalidPlan: 'Выбран недопустимый тариф!',
        invalidLocation: 'Пожалуйста, выберите локацию!',
        failedToGenerateKeyPair:
            'Не удалось сгенерировать пару ключей. Пожалуйста, сгенерируйте ключи локально!',
        unableToLoadPricing: 'Не удалось загрузить цены. Попробуйте позже!',
        noPasswordAvailable: 'Пароль для этого claw недоступен!'
    },
    api: {
        missingRequiredFields: 'Отсутствуют обязательные поля!',
        agentNotFound: 'Agent не найден!',
        agentRenamed: 'Agent успешно переименован.',
        agentEmojiUpdated: 'Эмодзи агента обновлен.',
        failedToUpdateEmoji: 'Не удалось обновить эмодзи!',
        invalidAgentName:
            'Имя agent должно содержать от 1 до {{max}} символов!',
        userNotFound: 'Пользователь не найден!',
        sshKeyNotFound: 'SSH-ключ не найден!',
        pendingAgentNotFound: 'Ожидающий agent не найден!',
        agentNotScheduledForDeletion: 'Agent не запланирован к удалению!',
        agentDeletionAlreadyPassed: 'Дата удаления уже прошла!',
        agentLimitReached:
            'Вы достигли лимита в {{max}} agents. Свяжитесь с поддержкой для увеличения лимита!',
        sshKeyLimitReached:
            'Вы достигли лимита в {{max}} SSH-ключей. Свяжитесь с поддержкой для увеличения лимита!',
        volumeSizeInvalid: 'Размер тома должен быть от {{min}} до {{max}} ГБ!',
        paymentNotConfigured: 'Оплата не настроена для этого тарифа!',
        invalidSshKeyFormat: 'Недопустимый формат публичного SSH-ключа!',
        sshKeyInUse: 'Этот SSH-ключ используется одним или несколькими agents!',
        inputTooLong: 'Ввод превышает максимально допустимую длину!',
        invalidEmailFormat: 'Недопустимый формат email!',
        plusAddressingNotAllowed:
            'Plus-адресация не разрешена для входа по email!',
        invalidRedirectUrl: 'Недопустимый URL перенаправления!',
        fileTooLarge:
            'Содержимое файла превышает максимально допустимый размер!',
        nameAndKeyRequired: 'Имя и публичный ключ обязательны!',
        nameTooLong: 'Имя должно содержать не более {{max}} символов!',
        noBillingAccount: 'Платёжный аккаунт не найден!',
        orderIdRequired: 'Требуется ID заказа!',
        orderNotFound: 'Заказ не найден!',
        emailRequired: 'Email обязателен!',
        redirectUrlRequired: 'URL перенаправления обязателен!',
        invalidWebhook: 'Недопустимый вебхук!',
        failedToStartAgent: 'Не удалось запустить agent!',
        failedToStopAgent: 'Не удалось остановить agent!',
        failedToRestartAgent: 'Не удалось перезапустить agent!',
        failedToDeleteAgent: 'Не удалось удалить agent!',
        failedToCreateAgent: 'Не удалось создать agent!',
        invalidProvider: 'Недопустимый провайдер!',
        providerNotAllowed: 'Этот провайдер в настоящее время недоступен!',
        invalidPlan: 'Выбран недопустимый тариф!',
        planBelowMinimumMemory:
            'Этот тариф не соответствует минимальным требованиям к памяти!',
        invalidLocation: 'Выбрана недопустимая локация!',
        planNotAvailableAtLocation:
            'Этот тариф недоступен в выбранной локации!',
        failedToSyncAgent: 'Не удалось синхронизировать статус сервера!',
        failedToProvisionAgent: 'Не удалось подготовить agent!',
        failedToInitiatePurchase: 'Не удалось инициировать покупку!',
        failedToCancelDeletion: 'Не удалось отменить удаление!',
        failedToHardDeleteAgent: 'Не удалось окончательно удалить agent!',
        failedToCancelScheduledDeletion:
            'Не удалось отменить запланированное удаление!',
        failedToCreateSshKey: 'Не удалось создать SSH-ключ!',
        failedToDeleteSshKey: 'Не удалось удалить SSH-ключ!',
        failedToUpdateProfile: 'Не удалось обновить профиль!',
        failedToGetProfile: 'Не удалось получить профиль!',
        failedToGetInvoice: 'Не удалось получить счёт!',
        failedToGetCustomerPortal: 'Не удалось получить портал клиента!',
        failedToGetBillingHistory: 'Не удалось получить историю платежей!',
        failedToGetStats: 'Не удалось получить статистику!',
        affiliateFetched: 'Affiliate info fetched successfully.',
        failedToGetAffiliate: 'Failed to get affiliate info!',
        invalidPeriod: 'Недопустимый фильтр периода!',
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
        failedToFetchLocations: 'Не удалось загрузить локации!',
        failedToFetchPlans: 'Не удалось загрузить тарифы!',
        failedToFetchVolumePricing: 'Не удалось загрузить цены на тома!',
        failedToFetchPlanAvailability:
            'Не удалось загрузить доступность тарифов!',
        failedToSendEmail: 'Не удалось отправить email!',
        failedToGetVersion: 'Не удалось получить версию!',
        failedToGetVersions: 'Не удалось получить список версий!',
        failedToInstallVersion: 'Не удалось установить версию!',
        installVersionSuccess: 'Версия успешно установлена.',
        invalidVersion: 'Недопустимый формат версии!',
        outdatedVersion: 'Эта версия устарела и не может быть установлена!',
        failedToGetDiagnostics: 'Не удалось подключиться к экземпляру!',
        failedToGetDiagnosticsDescription:
            'Не удалось получить диагностику. Экземпляр может быть офлайн или запускается.',
        failedToGetLogs: 'Не удалось загрузить логи!',
        failedToGetLogsDescription:
            'Не удалось получить логи для этого экземпляра. Пожалуйста, попробуйте позже.',
        failedToReinstallAgent: 'Не удалось переустановить экземпляр!',
        reinstallSuccess: 'Экземпляр успешно переустановлен.',
        reinstallRateLimited:
            'Переустановка возможна только раз в 24 часа. Свяжитесь с командой, если хотите снять это ограничение.',
        subdomainRateLimited:
            'Изменение поддомена возможно только раз в 24 часа. Свяжитесь с командой, если хотите снять это ограничение.',
        subdomainUpdated: 'Поддомен успешно обновлён.',
        invalidSubdomain:
            'Недопустимый поддомен. Используйте 3-20 строчных букв и цифр!',
        subdomainAlreadyInUse: 'Этот поддомен уже используется!',
        subdomainNotSupported: 'Этот тип агента не использует поддомен.',
        agentBusy: 'Agent в данный момент подготавливается или удаляется!',
        reinstallGatewayNotResponding:
            'Переустановка завершена, но шлюз пока не отвечает. Ему может потребоваться больше времени для запуска.',
        failedToRepairAgent: 'Failed to repair the instance!',
        repairSuccess: 'Instance repaired successfully.',
        repairGatewayNotResponding:
            'Repair applied but gateway is not responding yet. It may need more time to start.',
        failedToExportAgent: 'Не удалось экспортировать данные agent!',
        agentNotReady: 'Agent не готов к экспорту!',
        exportRateLimited:
            'Этот agent был экспортирован недавно. Подождите перед повторным экспортом!',
        failedToListFiles: 'Не удалось получить список файлов экземпляра!',
        failedToReadFile: 'Не удалось прочитать файл!',
        failedToUpdateFile: 'Не удалось сохранить файл!',
        invalidFilePath: 'Недопустимый путь к файлу!',
        fileNotEditable: 'Этот тип файла нельзя редактировать!',
        invalidJsonConfig: 'Недопустимый JSON!',
        fileSaveSuccess: 'Файл сохранён.',
        rateLimitExceeded: 'Подождите перед запросом нового кода!',
        otpExpiredOrNotFound: 'Код истёк или не найден. Запросите новый!',
        otpMaxAttemptsReached:
            'Слишком много неудачных попыток. Запросите новый код!',
        otpInvalidCode: 'Недопустимый код. Попробуйте снова!',
        licenseAlreadyPurchased: 'Лицензия уже приобретена!',
        licenseNotAvailable: 'Лицензионный продукт недоступен!',
        licenseCheckoutCreated: 'Оформление лицензии создано.',
        failedToPurchaseLicense: 'Не удалось создать оформление лицензии!',
        internalServerError: 'Произошла внутренняя ошибка!',
        invalidCredentials: 'Недопустимые учётные данные!',
        accountLinked: 'Аккаунт успешно привязан.',
        webhookProcessingFailed: 'Обработка вебхука не удалась!',
        adminAccessDenied: 'Требуется доступ администратора!',
        agentsFetched: 'Agents успешно загружены.',
        agentFetched: 'Agent успешно загружен.',
        agentStarsFetched: 'Звёзды агента успешно получены.',
        agentSynced: 'Agent успешно синхронизирован.',
        agentStarted: 'Agent успешно запущен.',
        agentStopped: 'Agent успешно остановлен.',
        agentRestarted: 'Agent успешно перезапущен.',
        agentCreated: 'Agent успешно создан.',
        agentDeleted: 'Agent успешно удалён.',
        agentDeletionScheduled: 'Удаление agent запланировано.',
        agentDeletionCancelled: 'Удаление agent отменено.',
        agentHardDeleted: 'Agent окончательно удалён.',
        pendingAgentCancelled: 'Покупка отменена.',
        failedToCancelPendingAgent: 'Не удалось отменить покупку!',
        agentPurchaseInitiated: 'Покупка успешно инициирована.',
        sshKeysFetched: 'SSH-ключи успешно загружены.',
        sshKeyCreated: 'SSH-ключ успешно создан.',
        sshKeyDeleted: 'SSH-ключ успешно удалён.',
        profileFetched: 'Профиль успешно загружен.',
        profileUpdated: 'Профиль успешно обновлён.',
        statsFetched: 'Статистика успешно загружена.',
        billingHistoryFetched: 'История платежей успешно загружена.',
        invoiceFetched: 'Счёт успешно загружен.',
        customerPortalFetched: 'URL портала клиента успешно загружен.',
        plansFetched: 'Тарифы успешно загружены.',
        locationsFetched: 'Локации успешно загружены.',
        volumePricingFetched: 'Цены на тома успешно загружены.',
        planAvailabilityFetched: 'Доступность тарифов успешно загружена.',
        diagnosticsFetched: 'Диагностика успешно загружена.',
        metricsFetched: 'Метрики успешно загружены.',
        failedToGetMetrics: 'Не удалось получить метрики сервера!',
        overviewFetched: 'Обзор успешно загружен.',
        failedToGetOverview: 'Не удалось загрузить обзор шлюза!',
        overviewUnsupported:
            'Эта версия OpenClaw не поддерживает функцию обзора!',
        passwordRotated: 'Пароль root успешно изменён.',
        failedToRotatePassword: 'Не удалось изменить пароль root!',
        gatewayTokenRotated: 'Токен шлюза успешно изменён.',
        failedToRotateGatewayToken: 'Не удалось изменить токен шлюза!',
        sshKeyUpdated: 'SSH-ключ успешно обновлён.',
        failedToUpdateSSHKey: 'Не удалось обновить SSH-ключ!',
        invalidPassword:
            'Пароль должен содержать от {{min}} до {{max}} символов!',
        invalidGatewayToken:
            'Токен шлюза должен содержать от {{min}} до {{max}} символов!',
        enablePreviewSuccess:
            'Режим предварительного просмотра успешно включён.',
        failedToEnablePreview:
            'Не удалось включить режим предварительного просмотра!',
        logsFetched: 'Логи успешно загружены.',
        filesFetched: 'Файлы успешно загружены.',
        fileFetched: 'Файл успешно загружен.',
        otpSent: 'Код успешно отправлен.',
        otpVerified: 'Код успешно подтверждён.',
        webhookReceived: 'Вебхук получен.',
        unauthorized: 'Не авторизован!',
        invalidToken: 'Недопустимый токен!',
        notFound: 'Не найдено!',
        healthOk: 'API работает.',
        featureVersionUnsupported:
            'Эта функция не поддерживается в версии {{version}}. Обновите OpenClaw или используйте Терминал для ручного управления.',
        invalidAuthMethod: 'Недопустимый метод аутентификации!',
        authMethodNotConnected: 'Этот метод аутентификации не подключён!',
        authMethodConnected: 'Метод аутентификации успешно подключён.',
        authMethodDisconnected: 'Метод аутентификации успешно отключён.',
        failedToConnectAuthMethod:
            'Не удалось подключить метод аутентификации!',
        failedToDisconnectAuthMethod:
            'Не удалось отключить метод аутентификации!',
        featureEmailsDisabled:
            'Информационные письма в настоящее время отключены.',
        featureEmailsSent: 'Информационные письма успешно отправлены.',
        featureEmailsFailed: 'Не удалось отправить информационные письма!',
        invalidFeatureKey: 'Недействительный ключ функции!',
        adminUsersFetched: 'Пользователи получены.',
        failedToGetAdminUsers: 'Не удалось получить пользователей!',
        adminUserDetailFetched: 'Данные пользователя получены.',
        failedToGetAdminUserDetail: 'Не удалось получить данные пользователя!',
        adminUserUpdated: 'Пользователь обновлён.',
        failedToUpdateAdminUser: 'Не удалось обновить пользователя!',
        adminStatsFetched: 'Статистика получена.',
        failedToGetAdminStats: 'Не удалось получить статистику!',
        adminAnalyticsFetched: 'Аналитика получена успешно.',
        failedToGetAdminAnalytics: 'Не удалось получить аналитику!',
        adminBillingFetched: 'Биллинг получен успешно.',
        failedToGetAdminBilling: 'Не удалось получить биллинг!',
        adminAgentsFetched: 'Agents получены.',
        failedToGetAdminAgents: 'Не удалось получить agents!',
        adminSSHKeysFetched: 'SSH-ключи получены.',
        failedToGetAdminSSHKeys: 'Не удалось получить SSH-ключи!',
        adminVolumesFetched: 'Тома получены.',
        failedToGetAdminVolumes: 'Не удалось получить тома!',
        adminReferralsFetched: 'Referrals fetched.',
        failedToGetAdminReferrals: 'Failed to fetch referrals!',
        adminPendingAgentsFetched: 'Pending agents fetched.',
        failedToGetAdminPendingAgents: 'Failed to fetch pending agents!',
        adminExportsFetched: 'Exports fetched.',
        adminEmailsFetched: 'Emails fetched.',
        failedToGetAdminEmails: 'Failed to fetch emails!'
    },
    emails: {
        otpSubject: 'Ваш код для входа в ClawHost',
        otpPreview: 'Ваш код для входа в ClawHost: {{code}}',
        otpHeading: 'Ваш код для входа:',
        otpExpiry:
            'Срок действия кода истекает через 10 минут. Если это были не вы, проигнорируйте это письмо.',
        featureFooter:
            'Вы получили это письмо, потому что у вас есть аккаунт ClawHost.',
        features: {
            terminal: {
                subject: 'Знаете ли вы? У вас есть веб-терминал',
                preview: 'Доступ к серверу прямо из браузера',
                tag: 'Веб-терминал',
                heading: 'Ваш сервер в одном клике',
                description:
                    'Получите доступ к серверу прямо из браузера с помощью встроенного терминала. Не нужен SSH-клиент — просто откройте ClawHost и начните вводить команды.',
                cta: 'Открыть терминал'
            },
            logs: {
                subject: 'Знаете ли вы? Логи в реальном времени в панели',
                preview: 'Отслеживайте логи сервера, не покидая браузер',
                tag: 'Живые логи',
                heading: 'Смотрите, что делает ваш сервер',
                description:
                    'Отслеживайте логи сервера в реальном времени из панели ClawHost. Диагностируйте проблемы, отслеживайте развёртывания и отлаживайте приложения, не покидая браузер.',
                cta: 'Просмотреть логи'
            },
            fileExplorer: {
                subject: 'Знаете ли вы? Редактируйте файлы сервера из браузера',
                preview: 'Просматривайте, читайте и редактируйте файлы без SSH',
                tag: 'Файловый менеджер',
                heading: 'Ваши файлы под рукой',
                description:
                    'Просматривайте, читайте и редактируйте файлы на сервере прямо из панели ClawHost. Подсветка синтаксиса, поиск и мгновенное сохранение — без SSH.',
                cta: 'Открыть проводник'
            },
            diagnostics: {
                subject: 'Знаете ли вы? Встроенные проверки состояния',
                preview: 'Контролируйте состояние сервера из панели',
                tag: 'Диагностика',
                heading: 'Знайте, что ваш сервер здоров',
                description:
                    'Запустите диагностику клоу для проверки состояния служб, использования памяти и доступности портов. Обнаруживайте проблемы до их возникновения.',
                cta: 'Запустить диагностику'
            },
            sshKeys: {
                subject: 'Знаете ли вы? Управляйте SSH-ключами из ClawHost',
                preview: 'Генерируйте и управляйте парами SSH-ключей в панели',
                tag: 'SSH-ключи',
                heading: 'SSH-ключи — просто',
                description:
                    'Генерируйте пары SSH-ключей, копируйте открытые ключи и скачивайте закрытые — всё из панели ClawHost. Назначайте ключи клоу для безопасного доступа.',
                cta: 'Управление SSH-ключами'
            },
            exportConfig: {
                subject: 'Знаете ли вы? Экспортируйте конфигурацию клоу',
                preview: 'Скачайте настройки клоу как переносимый файл',
                tag: 'Экспорт конфига',
                heading: 'Возьмите конфигурацию с собой',
                description:
                    'Экспортируйте конфигурацию и настройки клоу в виде загружаемого файла. Создайте резервную копию или используйте для воспроизведения окружения.',
                cta: 'Экспорт конфигурации'
            },
            multiLanguage: {
                subject: 'Знаете ли вы? ClawHost говорит на вашем языке',
                preview: 'Используйте ClawHost на 14 языках',
                tag: 'Мультиязычность',
                heading: 'ClawHost на вашем языке',
                description:
                    'Переключите всю панель ClawHost на любой из 14 языков. Всё — от кнопок до сообщений об ошибках — полностью переведено.',
                cta: 'Сменить язык'
            },
            subdomain: {
                subject: 'Знаете ли вы? Каждый клоу получает свой поддомен',
                preview:
                    'Доступ к клоу из любой точки мира по пользовательскому URL',
                tag: 'Пользовательский поддомен',
                heading: 'Доступ отовсюду',
                description:
                    'Каждый клоу получает уникальный поддомен, чтобы вы могли получить доступ к экземпляру OpenClaw из любого места. Без проброса портов, без локальных сетей — просто URL.',
                cta: 'Просмотреть ваш поддомен'
            },
            darkMode: {
                subject: 'Знаете ли вы? В ClawHost есть тёмная тема',
                preview: 'Переключайтесь между светлой и тёмной темами',
                tag: 'Тёмный режим',
                heading: 'Комфорт для глаз',
                description:
                    'Переключайтесь между светлой и тёмной темами в панели ClawHost. Ваши предпочтения сохраняются и применяются автоматически при каждом посещении.',
                cta: 'Попробовать тёмную тему'
            },
            reinstall: {
                subject: 'Знаете ли вы? Переустановка OpenClaw в один клик',
                preview: 'Сбросьте экземпляр OpenClaw без потери сервера',
                tag: 'Переустановка',
                heading: 'Чистый старт, тот же сервер',
                description:
                    'Переустановите среду OpenClaw на существующем сервере одним кликом. Сервер остаётся нетронутым — только OpenClaw получает чистую установку.',
                cta: 'Узнать больше'
            },
            yearlyPlans: {
                subject: 'Знаете ли вы? Экономьте с годовыми тарифами',
                preview: 'Перейдите на годовую оплату и платите меньше',
                tag: 'Годовые планы',
                heading: 'Платите меньше, получайте больше',
                description:
                    'Перейдите на годовую оплату и экономьте на подписке клоу. Тот же отличный сервис, ниже цена — отмена в любое время.',
                cta: 'Просмотреть тарифы'
            }
        }
    },
    auth: {
        signIn: 'Аутентификация',
        signInDescription:
            'Войдите в аккаунт ClawHost для управления экземплярами OpenClaw.',
        signingIn: 'Аутентификация...',
        verifyCode: 'Подтвердить код',
        checkYourEmail: 'Проверьте почту',
        checkYourEmailHeading: 'Проверьте почту',
        codeSentTo: 'Мы отправили 6-значный код на',
        signInToDeployOpenClaw:
            'Авторизуйтесь для управления и развёртывания агентов в один клик.',
        emailAddress: 'Адрес электронной почты',
        emailPlaceholder: 'example@clawhost.cloud',
        continueWithEmail: 'Продолжить с Email',
        otpDescription: 'Мы отправим вам код для входа. Пароль не нужен.',
        welcomeBack: 'С возвращением.',
        resendIn: 'Отправить повторно через {{seconds}}с',
        resendCode: 'Отправить код повторно',
        changeEmail: 'Изменить email',
        invalidCode: 'Неверный код !',
        invalidEmailFormat: 'Введите корректный адрес электронной почты !',
        plusAddressingNotAllowed:
            'Плюс-адресация не разрешена для входа по email !',
        or: 'или',
        continueWithGoogle: 'Продолжить с Google',
        continueWithGithub: 'Продолжить с GitHub',
        agreementNotice: 'Продолжая, вы соглашаетесь с нашими',
        termsOfService: 'Условиями использования',
        andWord: 'и',
        privacyPolicy: 'Политикой конфиденциальности'
    },
    account: {
        title: 'Аккаунт',
        description:
            'Управляйте настройками аккаунта ClawHost и информацией профиля.',
        accountSettings: 'Аккаунт',
        manageYourAccount: 'Управляйте профилем и настройками аккаунта.',
        profileInformation: 'Информация профиля',
        profileDescription: 'Ваши личные данные и отображаемое имя.',
        noNameSet: 'Имя не задано',
        joined: 'Регистрация',
        claws: 'клоу',
        sshKeys: 'ключей',
        displayName: 'Отображаемое имя',
        enterYourName: 'Введите ваше имя',
        emailAddress: 'Адрес электронной почты',
        emailNotEditable: 'Email нельзя изменить. Обратитесь в поддержку.',
        profileUpdatedSuccessfully: 'Профиль успешно обновлён.',
        billingAndSubscription: 'Оплата и Подписка',
        billingAndSubscriptionDescription:
            'Управляйте способами оплаты, подписками и счетами.',
        viewBillingHistory: 'Просмотрите историю платежей, счета и подписки.',
        aboutApp: 'О приложении',
        aboutAppDescription: 'Информация о приложении и версия.',
        appVersion: 'Версия приложения',
        operatingSystem: 'Операционная система',
        architecture: 'Архитектура',
        checkForUpdates: 'Проверить обновления',
        checkNow: 'Проверить',
        updatesUpToDate: 'У вас последняя версия.',
        updateReady: 'Версия {{version}} готова к установке.',
        restartToInstall: 'Перезапустить для установки',
        connectedAccounts: 'Подключённые аккаунты',
        connectedAccountsDescription:
            'Управляйте способами входа, привязанными к вашему аккаунту.',
        authEmail: 'Email',
        authGoogle: 'Google',
        authGithub: 'GitHub',
        authConnected: 'Подключён',
        authConnect: 'Подключить',
        authDisconnect: 'Отключить',
        emailCannotBeDisconnected:
            'Email всегда подключён как основной способ входа.',
        providerConnected: '{{provider}} успешно подключён.',
        providerDisconnected: '{{provider}} успешно отключён.',
        providerEmailMismatch:
            'Вы можете подключить только аккаунты с тем же адресом электронной почты !',
        settings: 'Настройки',
        settingsDescription: 'Управляйте настройками панели.',
        openLinksWindowed: 'Открывать ссылки во встроенном окне',
        openLinksWindowedDescription:
            'При включении внешние ссылки открываются внутри приложения, а не в системном браузере.'
    },
    billing: {
        date: 'Дата',
        product: 'Продукт',
        amount: 'Сумма',
        status: 'Статус',
        statusPaid: 'Оплачено',
        statusPending: 'Ожидание',
        statusRefunded: 'Возвращено',
        statusPartiallyRefunded: 'Частично возвращено',
        billingReasonPurchase: 'Покупка',
        billingReasonSubscriptionCreate: 'Новая подписка',
        billingReasonSubscriptionCycle: 'Продление',
        billingReasonSubscriptionUpdate: 'Обновление подписки',
        failedToLoadBilling: 'Не удалось загрузить историю платежей !',
        downloadInvoice: 'Скачать счёт',
        invoiceCanceledNavigation:
            'Загрузка счёта прервана так как вы покинули страницу.',
        failedToLoadInvoice: 'Не удалось загрузить счёт !',
        couponApplied: 'Купон: {{name}}',
        manageBilling: 'Управление платежами',
        failedToLoadPortal: 'Не удалось открыть платёжный портал !',
        portalCanceledNavigation:
            'Платёжный портал прерван так как вы покинули страницу.'
    },
    license: {
        title: 'Лицензия',
        description: 'Управляйте лицензией OpenClaw.',
        pageTitle: 'Лицензия',
        pageDescription:
            'Приобретите лицензию для локального хостинга экземпляров OpenClaw с помощью нашего приложения Go.',
        planName: 'Лицензия ClawHost Go',
        oneTimePurchase: 'Единоразовая покупка',
        price: '${{price}}',
        priceNote: 'Заплатите один раз, владейте навсегда.',
        purchaseLicense: 'Приобрести лицензию',
        purchasing: 'Перенаправление...',
        activated: 'Лицензия активна',
        activatedDescription: 'Ваша лицензия активна. Спасибо за поддержку.',
        paymentSuccess: 'Оплата прошла успешно. Ваша лицензия теперь активна.',
        failedToPurchase: 'Не удалось начать оформление !',
        featureUnlimitedClaws: 'Неограниченное количество OpenClaw',
        featureDevices: 'Неограниченное количество устройств',
        featureUpdates: 'Обновления навсегда',
        featureSupport: 'Приоритетная поддержка',
        featureCloud: 'Все облачные функции — локально',
        whatsIncluded: 'Что включено',
        gateTitle: 'Требуется лицензия',
        gateDescription:
            'Вам нужна лицензия ClawHost Go для развёртывания и управления экземплярами OpenClaw локально.'
    },
    network: {
        offline: 'Нет подключения к интернету',
        offlineDescription:
            'Вы сейчас не в сети. Функции, требующие подключения к интернету, будут недоступны.'
    },
    dashboard: {
        title: 'Клоу',
        description:
            'Просматривайте и управляйте развёрнутыми экземплярами OpenClaw. Запускайте, останавливайте, перезапускайте и отслеживайте ваши VPS-серверы.',
        claw: 'клоу',
        clawsPlural: 'клоу',
        clawCountLabel: '{{count}} клоу',
        clawCountLabelSingular: '{{count}} клоу',
        newClaw: 'Новый клоу',
        searchAgents: 'Поиск агентов...',
        searchAgentsCount: 'Поиск {{count}} агентов...',
        noAgentsMatchSearch: 'Агенты не найдены.',
        clawActions: 'Действия с клоу',
        noAgentsYet: 'Нет агентов',
        noAgentsDescription:
            'Развёрнутых агентов не найдено. Но вы можете развернуть своего первого агента в любое время от $25/мес. Просто ИИ это.',
        deleteClaw: 'Удалить клоу',
        deleteClawConfirmation: 'Вы уверены, что хотите удалить',
        deleteClawWarning:
            'Ваша подписка будет отменена, и сервер будет удалён по окончании текущего расчётного периода. Вы можете использовать его до этого момента.',
        actionCannotBeUndone: 'Это действие нельзя отменить.',
        start: 'Запустить',
        startServer: 'Запустить сервер',
        stop: 'Остановить',
        stopServer: 'Остановить сервер',
        restart: 'Перезапустить',
        restartServer: 'Перезапустить сервер',
        startClaw: 'Запустить сервер',
        startClawConfirmation:
            'Это запустит сервер и все его процессы. Делайте это только при необходимости.',
        stopClaw: 'Остановить сервер',
        stopClawConfirmation:
            'Это завершит все запущенные процессы на сервере, включая OpenClaw. Данные не будут потеряны. Делайте это только при необходимости. Вы можете запустить его снова в любое время. Остановка не прекращает оплату — удалите сервер, чтобы прекратить начисления.',
        restartClaw: 'Перезапустить сервер',
        restartClawConfirmation:
            'Это завершит все запущенные процессы на сервере, включая OpenClaw, и запустит их снова. Данные не будут потеряны. Делайте это только при необходимости.',
        copyPassword: 'Копировать пароль',
        copySshWithKey: 'Копировать SSH (с ключом)',
        copySshWithPassword: 'Копировать SSH (с паролем)',
        connect: 'Копировать SSH-команду',
        viewServerCredentials: 'Учётные данные сервера',
        serverCredentials: 'Учётные данные сервера',
        serverCredentialsDescription:
            'Используйте эти учётные данные для подключения к серверу через SSH.',
        sshCommand: 'SSH-команда',
        rootPassword: 'Пароль root',
        sshCommandCopied: 'SSH-команда скопирована.',
        sshCommandWithPasswordCopied: 'SSH-команда с паролем скопирована.',
        passwordCopiedToClipboard: 'Пароль скопирован в буфер обмена.',
        plan: 'Сервер',
        location: 'Расположение',
        ip: 'IP',
        domain: 'Домен',
        ipAddress: 'IP-адрес',
        port: 'Порт',
        subscription: 'Подписка',
        history: 'История',
        planCost: 'Тариф',
        serverId: 'ID сервера',
        created: 'Создан',
        sshKey: 'SSH-ключ',
        storage: 'Хранилище',
        nextBilling: 'Следующий платёж',
        lastBilling: 'Последний платёж',
        totalSpent: 'Всего потрачено',
        version: 'Версия',
        gatewayToken: 'Токен шлюза',
        gatewayTokenDescription:
            'Используйте этот токен для аутентификации со шлюзом',
        contactSupport: 'Связаться с поддержкой',
        scheduledForDeletion: 'Запланировано удаление',
        scheduledDeletionShort: 'Удаление {{date}}',
        deletionDate: 'Этот клоу будет удалён {{date}}',
        deletionTooltip:
            'Удаление запланировано на {{date}}. Чтобы отменить, используйте меню.',
        pastDue: 'Ошибка оплаты',
        deletionFailed: 'Удаление не удалось',
        pastDueDescription:
            'Ваш платёж не прошёл. Если не будет решено в течение 14 дней, этот клоу будет удалён навсегда.',
        updatePayment: 'Обновить оплату',
        cancelDeletion: 'Отменить удаление',
        cancelDeletionConfirmation:
            'Вы уверены? Ваша подписка останется активной, и с вас продолжат взимать плату. Экземпляр продолжит работу.',
        deletionCancelled: 'Удаление отменено.',
        scheduleDeletion: 'Запланировать удаление',
        resumeCheckout: 'Продолжить оплату',
        cancelPurchase: 'Отменить покупку',
        hardDelete: 'Принудительное удаление',
        hardDeleteClaw: 'Принудительное удаление',
        hardDeleteConfirmation:
            'Вы уверены, что хотите немедленно удалить этот клоу? Вы потеряете оставшееся время текущего расчётного периода. Это действие нельзя отменить.',
        diagnostics: 'Диагностика',
        diagnosticsDescription:
            'Проверьте состояние вашего экземпляра OpenClaw.',
        diagnosticsStatus: 'Статус',
        diagnosticsLogs: 'Логи',
        diagnosticsRepair: 'Repair',
        diagnosticsRepairDescription:
            'Remove memory limits, apply latest service configuration, and restart the gateway. This fixes most common issues.',
        diagnosticsRepairSuccess: 'Instance repaired successfully.',
        diagnosticsRepairFailed:
            'Repair applied but gateway is not responding yet!',
        diagnosticsLoading: 'Подключение к экземпляру...',
        diagnosticsNoLogs:
            'Логи недоступны. Запустите экземпляр для генерации логов.',
        diagnosticsNoLogsHermesTitle: 'Шлюз Hermes не запущен',
        diagnosticsNoLogsHermesDescription:
            'На вкладке Terminal выполните `hermes gateway setup`, чтобы настроить платформы, затем `sudo systemctl enable --now hermes-gateway`, чтобы запустить мост.',
        diagnosticsIssueDetected: 'Обнаружена проблема с вашим экземпляром.',
        diagnosticsHealthy: 'Ваш экземпляр работает нормально.',
        diagnosticsPort: 'Порт 18789',
        diagnosticsMemory: 'Память',
        logsDescription: 'Последние 100 строк лога шлюза, автообновление.',
        fileExplorer: 'Проводник',
        fileExplorerRoot: 'openclaw',
        fileExplorerDescription:
            'Просматривайте и редактируйте конфигурационные файлы OpenClaw. Неверные изменения могут повредить экземпляр.',
        fileExplorerSelectFile: 'Выберите файл для просмотра содержимого.',
        fileExplorerReadOnly: 'Только чтение',
        fileExplorerSave: 'Сохранить',
        fileExplorerSaved: 'Файл сохранён.',
        fileExplorerSaveCanceledNavigation:
            'Сохранение файла прервано так как вы покинули страницу.',
        fileExplorerInvalidJson:
            'Некорректный JSON. Исправьте синтаксические ошибки перед сохранением !',
        fileExplorerNoFiles: 'Файлы не найдены',
        fileExplorerSearchFiles: 'Поиск файлов...',
        fileExplorerNoSearchResults: 'Совпадающих файлов нет.',
        startFailed: 'Не удалось запустить клоу !',
        renameSuccess: 'Клоу успешно переименован.',
        renameFailed: 'Не удалось переименовать клоу !',
        renameInvalidChars: 'Допускаются только буквы, цифры и дефисы !',
        reinstallInstance: 'Переустановить экземпляр',
        reinstallClaw: 'Переустановить экземпляр',
        reinstallClawConfirmation:
            'Это полностью переустановит {{agentName}} на этом экземпляре. Все конфигурации, агенты и данные будут сброшены. Это действие нельзя отменить. Продолжить?',
        reinstallInstanceSuccess: 'Экземпляр успешно переустановлен.',
        reinstallInstanceFailed: 'Не удалось переустановить экземпляр !',
        reinstallCanceledNavigation:
            'Переустановка прервана так как вы покинули страницу.',
        openControlPanel: 'Открыть панель управления',
        exportData: 'Экспорт клоу (.zip)',
        exportAgent: 'Экспорт',
        exportAgentButton: 'Экспортировать данные',
        exportAgentTooltip:
            'Скачать этого агента и все его данные как .zip-файл.',
        exportAgentInProgress:
            'Экспорт может занять несколько минут для более крупных агентов.',
        exportStarted:
            'Подготовка экспорта, это может занять некоторое время...',
        exportSuccess: 'Клоу успешно экспортирован.',
        exportFailed: 'Не удалось экспортировать данные клоу !',
        exportCanceledNavigation:
            'Экспорт отменён так как вы покинули страницу.',
        scheduleDeletionCanceledNavigation:
            'Планирование удаления прервано так как вы покинули страницу.',
        cancelDeletionCanceledNavigation:
            'Отмена удаления прервана так как вы покинули страницу.',
        hardDeleteCanceledNavigation:
            'Принудительное удаление прервано так как вы покинули страницу.',
        exportRateLimited:
            'Вы сможете экспортировать снова через {{minutes}} минут.',
        exportRateLimitedOne: 'Вы сможете экспортировать снова через 1 минуту.',
        configuringTooltip:
            'Это может занять некоторое время. Зависит от OpenClaw, расположения сервера и Cloudflare DNS.',
        paymentSuccess: 'Ваш клоу создаётся и настраивается.',
        dnsSetupBanner:
            'Настройте локальный DNS для доступа к клоу через subdomain.clawhost.',
        dnsSetupButton: 'Настроить DNS',
        dnsSetupSuccess: 'DNS-резолвер успешно настроен.',
        dnsSetupError: 'Не удалось настроить DNS-резолвер !',
        userTab: 'Пользователь',
        adminTab: 'Админ',
        adminTitle: 'Админ',
        adminDescription: 'Управляйте всеми клоу на платформе.',
        adminNoClaws: 'На платформе пока нет клоу.',
        adminAccessDenied: 'У вас нет прав для доступа к этой странице.',
        owner: 'Владелец',
        agentType: 'Agent',
        status: {
            running: 'Работает',
            stopped: 'Остановлен',
            starting: 'Запуск',
            stopping: 'Остановка',
            creating: 'Создание',
            configuring: 'Настройка',
            initializing: 'Подготовка',
            migrating: 'Миграция',
            rebuilding: 'Пересборка',
            restarting: 'Перезапуск',
            unreachable: 'Недоступен',
            deleting: 'Удаление',
            scheduledDeletion: 'Удаление запланировано',
            awaitingPayment: 'Ожидание оплаты',
            unknown: 'Неизвестно',
            checking: 'Проверка'
        },
        tabNotAvailableForAgent: 'Недоступно для этого типа агента'
    },
    createClaw: {
        title: 'Развернуть OpenClaw',
        description: 'Настройте сервер и начните работу с ИИ.',
        clawName: 'Имя',
        clawNamePlaceholder: 'напр. cozy-panda',
        clawNameInvalidChars: 'Допускаются только буквы, цифры и дефисы !',
        autoGenerateNameHint: 'Оставьте пустым для автогенерации имени.',
        agentType: 'Тип агента',
        agentTypeOpenClaw: 'OpenClaw',
        agentTypeHermes: 'Hermes',
        agentTypeOpenClawDescription: '{{count}} звёзд',
        agentTypeHermesDescription: '{{count}} звёзд',
        location: 'Расположение',
        locationUnavailable: 'Недоступно',
        locationUnavailableForPlan: 'Недоступно',
        plan: 'Сервер',
        planUnavailable: 'Недоступно',
        planUnavailableForLocation: 'Недоступно в этом расположении',
        advancedOptions: 'Дополнительные параметры',
        rootPassword: 'Пароль root',
        rootPasswordPlaceholder: 'Введите пароль или сгенерируйте',
        gatewayTokenPlaceholder: 'напр. a1b2c3d4e5f6...',
        autoGenerateGatewayTokenHint:
            'Генерируется автоматически, если оставить пустым.',
        autoGeneratePasswordHint:
            'Необязательно. Без пароля, если оставить пустым.',
        regeneratePassword: 'Сгенерировать пароль заново',
        gatewayToken: 'Gateway Token',
        regenerateToken: 'Сгенерировать токен заново',
        tokenCopied: 'Токен скопирован.',
        sshKeyOptional: 'SSH-ключ',
        noSshKeyPasswordOnly: 'Без SSH-ключа (только пароль)',
        noSshKeysConfigured: 'SSH-ключи не настроены',
        addSshKeyForPasswordlessLogin: 'Добавьте SSH-ключ для входа без пароля',
        additionalStorageOptional: 'Дополнительное хранилище',
        volumeStorage: 'Объёмное хранилище',
        vpsServer: 'VPS-сервер',
        openClawPreinstalled: 'OpenClaw предустановлен',
        storageWithSize: 'Хранилище',
        billingInterval: 'Оплата',
        monthly: 'Ежемесячно',
        yearly: 'Ежегодно',
        yearlySaveBadge: '2 месяца бесплатно',
        yearlySavings: 'Вы экономите',
        totalMonthly: 'Итого в месяц',
        totalYearly: 'Итого в год',
        creating: 'Создание...',
        proceedToPayment: 'Оплатить ${{amount}} для развёртывания',
        agreementNotice: 'Развёртывая, вы соглашаетесь с нашими',
        selectServerToContinue: 'Выберите сервер для продолжения',
        selectLocationToContinue: 'Выберите расположение для продолжения',
        clawCreated: 'Клоу создан.',
        clawCreating: 'Создаём ваш клоу, это может занять некоторое время...',
        assigning: 'Назначение...',
        rootPasswordSaveThis: 'Пароль root (сохраните!)',
        sshCommandUsingKey: 'SSH-команда (с вашим ключом)',
        sshCommandWithPassword: 'SSH-команда (с паролем)',
        passwordCopied: 'Пароль скопирован.',
        planSpec: '{{cpu}} vCPU / {{memory}} ГБ RAM / {{disk}} ГБ SSD',
        volumeUnit: 'ГБ',
        volumeMin: '0 ГБ',
        volumeMax: '500 ГБ'
    },
    sshKeys: {
        title: 'SSH-ключи',
        description:
            'Управляйте SSH-ключами для безопасного доступа к экземплярам OpenClaw без пароля.',
        key: 'ssh-ключ',
        keys: 'ssh-ключей',
        keyCountDescription: '{{count}} {{label}}',
        addSshKey: 'Добавить SSH-ключ',
        howSshKeysWork: 'Как подключить SSH-ключ?',
        step1: 'Сгенерируйте пару SSH-ключей на компьютере (или используйте существующую).',
        step2: 'Добавьте открытый ключ здесь.',
        step3: 'Выберите ключ при создании нового экземпляра.',
        step4: 'Подключитесь с помощью',
        step4Command: 'ssh root@your-server-ip',
        step4Suffix: '— пароль не нужен.',
        noSshKeysYet: 'Нет SSH-ключей',
        noSshKeysDescription:
            'На вашем аккаунте нет SSH-ключей. Вы можете добавить их в любое время и подключаться к развёрнутым клоу.',
        deleteConfirmation: 'Вы уверены, что хотите удалить этот SSH-ключ?',
        deleteKey: 'Удалить SSH-ключ',
        deleteKeyConfirmation: 'Вы уверены, что хотите удалить',
        sshKeyAddedSuccessfully: 'SSH-ключ успешно добавлен.',
        addSshKeyModalTitle: 'Добавить SSH-ключ',
        addSshKeyModalDescription:
            'Добавьте SSH-ключ для аутентификации без пароля',
        iHaveAnSshKey: 'Существующий ключ',
        generateNewKey: 'Создать новый',
        name: 'Имя',
        namePlaceholder: 'напр.: my-macbook',
        publicKey: 'Открытый ключ',
        publicKeyPlaceholder: 'ssh-rsa AAAA... или ssh-ed25519 AAAA...',
        publicKeyHint: 'Найдите ваш открытый ключ в',
        publicKeyPath1: '~/.ssh/id_ed25519.pub',
        publicKeyPathOr: 'или',
        publicKeyPath2: '~/.ssh/id_rsa.pub',
        important: 'Важно:',
        dontHaveSshKey: 'Нет SSH-ключа? Сгенерируйте:',
        sshKeygenCommand: 'ssh-keygen -t ed25519 -C "your-email@example.com"',
        keyName: 'Имя ключа',
        keyNamePlaceholder: 'Мой сгенерированный ключ',
        importantAfterGenerating:
            'После генерации вы должны скачать и сохранить закрытый ключ. Мы не сможем его восстановить, если вы его потеряете !',
        generateKeyPair: 'Сгенерировать пару ключей',
        orGenerateLocallyRecommended:
            'Или сгенерируйте локально (рекомендуется)',
        runThisInYourTerminal: 'Выполните в терминале:',
        thenSwitchToIHave:
            'Затем переключитесь на «Существующий ключ» и вставьте открытый ключ.',
        savePrivateKeyNow:
            'Сохраните закрытый ключ СЕЙЧАС! Скачайте его перед закрытием этого окна. Вы не сможете увидеть его снова.',
        privateKeyKeepSecret: 'Закрытый ключ (храните в секрете!)',
        downloadPrivateKey: 'Скачать закрытый ключ',
        publicKeyWillBeSaved: 'Открытый ключ (будет сохранён)',
        savePublicKey: 'Сохранить открытый ключ'
    },
    landing: {
        title: 'Развернуть OpenClaw. Один клик. Готово.',
        description:
            'Разверните OpenClaw на собственном VPS в один клик. Самостоятельный облачный хостинг с полным root-доступом, глобальными локациями и прозрачными ценами.',
        badge: 'OpenClaw и Hermes в облаке',
        tutorialBadge: 'Смотрите. Разворачивайте.',
        tutorialVideoThumbnail: 'Миниатюра обучающего видео ClawHost',
        clawhostGoLogoAlt: 'ClawHost Go',
        trustMrrBadgeAlt: 'TrustMRR verified revenue badge',
        macosPreviewTime: '22:12',
        heroTitle1: 'Развернуть OpenClaw.',
        heroTitle2: 'Один клик. Готово.',
        heroDescription:
            'Разворачивайте агентов OpenClaw и Hermes в облаке или локально в один клик — создавайте, подключайте и масштабируйте ваших ИИ-агентов быстрее с ClawHost.',
        selfHost: 'Открытый код',
        startingPrice: 'От',
        locations: 'Локации',
        servers: 'Серверы',
        zeroCount: 'Ноль',
        zeroConfig: 'Без настройки',
        features: 'Возможности',
        whyClawHost: 'Всё в одном',
        featuresDescription:
            'Почему стоит попробовать — возможности говорят сами за себя.',
        zeroConfigDescription:
            'Пропустите часы настройки сервера и OpenClaw. Всё предустановлено и готово за минуты.',
        ownedData: '100% ваши данные',
        ownedDataDescription:
            'Ваш сервер, ваши данные. Без общей инфраструктуры, без логов, без третьих сторон. Онлайн 24/7.',
        fullSpeed: 'Полная скорость',
        fullSpeedDescription:
            'Выделенные ресурсы VPS означают отсутствие ограничений, полную пропускную способность и молниеносный интернет.',
        globalLocations: 'Глобальные локации',
        globalLocationsDescription:
            'Разворачивайте OpenClaw и Hermes в нескольких глобальных регионах и выбирайте ближайшее к вам расположение.',
        fullSshAccess: 'Прямой SSH-доступ',
        fullSshAccessDescription:
            'Получите доступ к терминалу сервера прямо из платформы. Внешние SSH-клиенты не нужны.',
        secure: 'Безопасность',
        secureDescription:
            'Защита по умолчанию от SSL-уязвимостей, вредоносного ПО и распространённых угроз безопасности.',
        payAsYouGo: 'Простые цены',
        payAsYouGoDescription:
            'Цены основаны на ваших потребностях. Никаких навязанных высоких счетов за низкокачественные серверы. Отмена в любое время.',
        bringYourCredits: 'Используйте свои кредиты',
        bringYourCreditsDescription:
            'Используйте собственный API-ключ Anthropic или подписку Claude. Платите Anthropic напрямую — без наценок.',
        customSubdomains: 'Онлайн-доступ',
        customSubdomainsDescription:
            'Забудьте о локальных сетях. Доступ к OpenClaw безопасно из любой точки мира через поддомен.',
        autoUpdates: 'Управление версиями',
        autoUpdatesDescription:
            'Переключайтесь на любую версию OpenClaw или Hermes одним кликом. Всегда будьте в курсе или откатывайтесь при необходимости.',
        openclawControl: 'Мониторинг серверов',
        openclawControlDescription:
            'Отслеживайте серверы OpenClaw и Hermes с метриками, логами и диагностикой в реальном времени.',
        clawHostControl: 'Полный доступ к серверу',
        clawHostControlDescription:
            'Терминал в браузере, файловый менеджер, логи, диагностика и управление версиями — всё из вашей панели.',
        multipleClaws: 'Несколько агентов',
        multipleClawsDescription:
            'Разворачивайте и управляйте несколькими агентами OpenClaw и Hermes из одной панели. Масштабируйтесь по мере роста.',
        pricing: 'Цены',
        simpleTransparentPricing: 'Простые, прозрачные цены',
        pricingDescription:
            'Выберите план, который подходит вам. Никаких скрытых платежей.',
        planColumn: 'Сервер',
        vCpuColumn: 'vCPU',
        ramColumn: 'RAM',
        storageColumn: 'Хранилище',
        monthlyColumn: 'Цена',
        tierShared: 'Общий vCPU',
        tierDedicated: 'Выделенный vCPU',
        tierArm: 'Ampere (ARM)',
        tierRegular: 'Обычная производительность',
        tierHighPerformance: 'Высокая производительность',
        tierHighFrequency: 'Высокая частота',
        recommended: 'Рекомендуемый',
        perMonth: '/мес',
        perYear: '/год',
        pricePerMonth: '${{price}}/mo',
        pricePerYear: '${{price}}/yr',
        volumePricePerMonth: '+${{price}}/mo',
        startingPriceValue: '${{price}}/mo',
        deploy: 'Развернуть',
        select: 'Выбрать',
        selectPlanLabel: 'Выбрать тариф {{plan}}',
        deployPlanLabel: 'Развернуть тариф {{plan}}',
        openClawPreinstalled: 'OpenClaw предустановлен',
        unlimitedBandwidth: 'Безлимитный трафик',
        rootSshAccess: 'Полный root SSH-доступ',
        onlineAllDay: 'Онлайн 24/7',
        showAllPlans: 'Показать все планы',
        simplePricing: 'Упрощённый',
        planStarter: 'Starter',
        planStarterDesc: 'Для личных проектов и экспериментов',
        planGrowth: 'Growth',
        planGrowthDesc: 'Для производственных нагрузок',
        planPro: 'Pro',
        planProDesc: 'Для растущих компаний',
        planBusiness: 'Business',
        planBusinessDesc: 'Для крупномасштабных операций',
        featureCpu: '{{count}} vCPU',
        featureRam: '{{count}} GB RAM',
        featureDisk: '{{count}} GB SSD',
        choosePlan: 'Выбрать план',
        mostPopular: 'Самый популярный',
        featurePreinstalled: 'Агент предустановлен',
        featureBandwidth: 'Безлимитная пропускная способность',
        featureSsh: 'Root SSH доступ',
        featureUptime: 'Онлайн 24/7',
        featureDedicatedCpu: 'Выделенный CPU',
        featureEmailSupport: 'Поддержка по email',
        fastInternet: 'Быстрый интернет',
        emailSupport: 'Поддержка по email',
        faqTitle: 'Вопросы',
        frequentlyAskedQuestions: 'Частые вопросы',
        faqDescription: 'Каждый часто задаваемый вопрос — с ответом.',
        faq1Question: 'Что такое ClawHost?',
        faq1Answer:
            'ClawHost — это платформа, которая делает OpenClaw и Hermes доступными для всех. Она позволяет как нетехническим пользователям, так и разработчикам запускать их без управления инфраструктурой. Мы берём на себя серверы, аптайм, безопасность и обслуживание — а вы просто используете своих агентов.',
        faq2Question: 'Что такое OpenClaw?',
        faq2Answer:
            'OpenClaw — это самостоятельно размещаемый безопасный уровень доступа к вашим ИИ-инструментам и сервисам. Он предварительно настроен для безопасности и производительности, поэтому вы можете развернуть его и подключиться мгновенно.',
        faqHermesQuestion: 'Что такое Hermes?',
        faqHermesAnswer:
            'Hermes — это автономный ИИ-агент с веб-просмотром, управлением календарём, мультимодельным рассуждением и автоматизацией браузера. Он предустановлен вместе с OpenClaw на каждом сервере ClawHost.',
        faq3Question:
            'Чем это отличается от других ИИ-инструментов или хостинговых платформ?',
        faq3Answer:
            'В отличие от хостинговых ИИ-инструментов, ClawHost предоставляет вам настоящий сервер с установленными OpenClaw и Hermes. Вы владеете инфраструктурой, контролируете всё и не ограничены общей платформой или моделью.',
        faq4Question: 'Нужны ли технические знания?',
        faq4Answer:
            'Нет. Мы берём на себя всю инфраструктуру, установку и обслуживание. OpenClaw настраивается и управляется через интерфейс, а Hermes работает через простые команды терминала — без необходимости касаться серверов или инфраструктуры.',
        faq5Question: 'Какие локации доступны?',
        faq5Answer:
            'Мы предлагаем серверы по всему миру, включая США, Европу и Азию. При необходимости вы можете развернуть OpenClaw или Hermes на нескольких серверах в разных регионах.',
        faq6Question: 'Сколько это стоит?',
        faq6Answer:
            'Цены зависят от выбранного сервера. С несколькими вариантами серверов от начального уровня до высокопроизводительных вы выбираете то, что соответствует вашим потребностям и бюджету.',
        faq7Question:
            'Можно ли получить доступ к моему агенту напрямую по ссылке?',
        faq7Answer:
            'OpenClaw доступен по URL поддомена с полным веб-интерфейсом. Hermes работает через команды терминала по SSH — ссылки нет, но полный контроль через терминал вашего сервера.',
        comparison: 'Сравнение',
        comparisonTitle: 'Чем мы отличаемся',
        comparisonDescription:
            'Существует только одна сопоставимая платформа, и наш подход делает ставку на реальные серверы и полное владение вместо ограничений.',
        others: 'Другие',
        comparisonOpenClawUs: 'Полный доступ к OpenClaw',
        comparisonOpenClawOthers: 'Только чат, без управления',
        comparisonPricingUs: 'Прозрачные цены, чёткие характеристики',
        comparisonPricingOthers: 'Скрытые характеристики, непонятные цены',
        comparisonOwnershipUs: 'Вы полностью владеете сервером',
        comparisonOwnershipOthers: 'Вы не владеете ничем',
        comparisonSubdomainUs: 'Доступ через поддомен',
        comparisonSubdomainOthers: 'Доступ только через сторонние платформы',
        comparisonInfraUs: 'Инфраструктура по запросу',
        comparisonInfraOthers: 'Ограниченные серверы',
        comparisonDataUs: 'Владейте своими данными',
        comparisonDataOthers: 'Вы не владеете данными',
        comparisonMultipleUs: 'Несколько агентов OpenClaw и Hermes',
        comparisonMultipleOthers: 'Только один OpenClaw',
        comparisonOpenSourceUs: 'Полностью открытый код',
        comparisonOpenSourceOthers: 'Закрытый код',
        comparisonExportUs: 'Экспортируйте OpenClaw и Hermes куда угодно',
        comparisonExportOthers: 'Привязка к вендору',
        comparisonProvidersUs: 'Несколько серверных провайдеров',
        comparisonProvidersOthers: 'Только один провайдер',
        comparisonVersionUs: 'Переключение версии в один клик',
        comparisonVersionOthers: 'Только ручные обновления',
        comparisonTerminalUs: 'Встроенный веб-терминал',
        comparisonTerminalOthers: 'Нужен SSH-клиент',
        seeFullComparison: 'Полное сравнение',
        comparisonCtaText:
            'Мы сравниваем себя с SimpleAgent, MyAgent.ai и другими — функция за функцией.',
        selfHostInstead: 'Самостоятельный хостинг'
    },
    blog: {
        readingTime: '{{minutes}} мин чтения',
        ctaTitle: 'Разверните OpenClaw и Hermes одним кликом',
        ctaDescription:
            'Получите выделенный сервер с предустановленными OpenClaw и Hermes. Полный root-доступ, глобальные локации и готовность за минуты. Он ваш всегда. От 25 $.',
        ctaDeploy: 'Развернуть агента',
        ctaGitHub: 'Смотреть на GitHub'
    },
    changelog: {
        title: 'Журнал изменений',
        description:
            'Отслеживайте обновления, новые функции и улучшения ClawHost.',
        subtitle: 'Все обновления, новые функции и улучшения ClawHost.',
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
        release15Date: '11 апреля 2026',
        release15Title: 'Упрощение и пользовательские поддомены',
        release15Description:
            'Упрощение платформы путём переноса управляемых функций в OpenClaw, удаление представления playground и введение изменяемых пользовательских поддоменов.',
        release15Feature1:
            'Упрощение и перенос управляемых функций в OpenClaw, больше никаких чата ClawHost, агентов, каналов, переменных и навыков',
        release15Feature2:
            'Enhanced file explorer with full editing support, 100+ language syntax highlighting, and export as .zip',
        release15Feature3:
            'Removed playground view for a cleaner, more focused dashboard experience',
        release15Feature4:
            'Changeable custom subdomains, update your claw subdomain to your loved one',
        release14Date: '1 апреля 2026',
        release14Title:
            'Миграция на Hetzner, партнёрская система и новые языки',
        release14Description:
            'Централизация всей инфраструктуры на Hetzner для лучших цен и производительности, запуск партнёрской системы с 15% комиссией, добавление 10 новых языков и создание внутренних инструментов для стабильной поддержки версий.',
        release14Feature1:
            'Удалены DigitalOcean и Vultr — вся инфраструктура теперь работает исключительно на Hetzner с бесконечной ёмкостью и без ограничений со стороны провайдера',
        release14Feature2:
            'Партнёрская система, позволяющая пользователям зарабатывать 15% комиссии с каждого приведённого заказа',
        release14Feature3:
            'Добавлено 10 новых языков: китайский, хинди, арабский, русский, японский, турецкий, итальянский, польский, нидерландский и португальский',
        release14Feature4:
            'Внутренние инструменты для стабильной поддержки функций текущих версий OpenClaw без поддержки старых версий',
        release12Date: '14 марта 2026',
        release12Title: 'Годовые тарифы, голосовой режим и другое',
        release12Description:
            'Годовые подписки с 2 бесплатными месяцами, голосовой режим, переустановка экземпляра и начальный лендинг для ClawHost Go.',
        release12Feature1:
            'Лендинг для ClawHost Go, локальный хостинг с ClawHost',
        release12Feature2:
            'Поддержка годовых подписок с 2 бесплатными месяцами при годовой оплате',
        release12Feature3:
            'Голосовой режим для взаимодействия с агентами OpenClaw на ClawHost',
        release12Feature4:
            'Переустановка OpenClaw на экземпляре для чистого старта, доступна раз в день',
        release11Date: '28 февраля 2026',
        release11Title: 'Синтез речи, терминал, вкладки чата и проводник',
        release11Description:
            'Слушайте ответы агентов с помощью синтеза речи, взаимодействуйте с VPS через терминал, быстрее навигируйте по чатам с вкладками и исследуйте файлы с улучшенным проводником.',
        release11Feature1: 'Синтез речи для сообщений агентов в Playground',
        release11Feature2:
            'Терминал для взаимодействия с VPS-экземплярами прямо из панели',
        release11Feature3:
            'Вкладки бокового меню чата для удобного доступа и навигации',
        release11Feature4: 'Улучшения проводника с поиском по файлам',
        release11Feature5:
            'Исправлены метки времени сообщений, не отражавшие реальное время',
        release10Date: '23 февраля 2026',
        release10Title: 'Запросы функций, проводник и исправления',
        release10Description:
            'Запросы функций от сообщества, расширенная поддержка редактирования файлов и различные исправления ошибок.',
        release10Feature1:
            'Запросы функций, автоматически управляемые и публикуемые агентами OpenClaw',
        release10Feature3:
            'Исправлено переключение провайдера модели, которое не применялось и продолжало использовать начальную модель',
        release10Feature4:
            'Множество улучшений и исправлений ошибок по всей платформе',
        release10Feature5:
            'Файлы TypeScript, Markdown и текстовые файлы теперь редактируются в проводнике',
        release9Date: '21 февраля 2026',
        release9Title: 'Сравнения, рефакторинг Playground и другое',
        release9Description:
            'Страницы сравнения с конкурентами, реструктуризация Playground, мультиязычная поддержка и общие улучшения производительности.',
        release9Feature1: 'Поддержка тёмной и светлой тем',
        release9Feature2:
            'Мультиязычная поддержка: английский, французский, испанский и немецкий',
        release9Feature3: 'Страницы сравнения с подробным разбором конкурентов',
        release9Feature4:
            'Версии OpenClaw, обновление в один клик или мгновенная установка любой версии',
        release9Feature5: 'Рефакторинг структуры Playground и упрощения',
        release9Feature6:
            'Улучшения производительности, стабильности и отзывчивости',
        release8Date: '18 февраля 2026',
        release8Title: 'Светлая тема, производительность и стабильность',
        release8Description:
            'Поддержка светлой темы, улучшения производительности и взаимодействия, повышение стабильности и отзывчивости.',
        release8Feature1: 'Режимы светлой, тёмной и системной тем',
        release8Feature2: 'Улучшения производительности и взаимодействия',
        release8Feature3: 'Повышение стабильности и отзывчивости',
        release7Date: '16 февраля 2026',
        release7Title: 'Рефакторинг чата и голосовой ввод',
        release7Description:
            'Крупные улучшения чата и Playground с голосовым взаимодействием и вложениями файлов для агентов.',
        release7Feature1:
            'Рефакторинг чата и Playground для более плавного и отзывчивого взаимодействия',
        release7Feature2:
            'Голосовое взаимодействие с чатами, запись и транскрипция речи прямо в браузере',
        release7Feature4:
            'Просмотр и использование вложений для агентов, отправка изображений и документов в чате',
        release6Date: '16 февраля 2026',
        release6Title: 'Чат с агентами',
        release6Description:
            'Полный контроль над агентами OpenClaw. Управляйте и общайтесь со всем прямо из панели.',
        release6Feature3:
            'Чат с агентами из Playground, взаимодействие с любым агентом в реальном времени',
        release6Feature4:
            'Вход через Google или GitHub, быстрая и безопасная аутентификация без кодов по email',
        release1Date: '8 февраля 2026',
        release1Title: 'Первый релиз',
        release1Description:
            'Первый официальный релиз ClawHost. Разверните OpenClaw на собственном VPS в один клик.',
        release1Feature1: 'Развёртывание OpenClaw в один клик',
        release1Feature2:
            'Панель управления клоу: запуск, остановка, перезапуск и удаление экземпляров',
        release1Feature3:
            '18 серверных тарифов с выделенными vCPU, RAM и вариантами хранилища',
        release1Feature4: '6 серверных локаций в США, Европе и Азии',
        release1Feature5:
            'Управление SSH-ключами для беспарольного доступа к серверу',
        release1Feature6:
            'Поддержка дополнительного объёмного хранилища до 10 ТБ',
        release1Feature7: 'Аутентификация по магической ссылке, без паролей',
        release1Feature8: 'Онлайн-доступ к OpenClaw через безопасные поддомены',
        release1Feature9: 'Интеграция платежей с прозрачной ценой за сервер',
        release1Feature10: 'История платежей и управление счетами',
        release1Feature11:
            'Автоматическое развёртывание с предустановленным и настроенным OpenClaw',
        release2Date: '8 февраля 2026',
        release2Title: 'Changelog и другое',
        release2Description:
            'Новый способ быть в курсе всего, что касается ClawHost.',
        release2Feature1:
            'Страница журнала изменений для отслеживания всех обновлений и релизов платформы',
        release3Date: '10 февраля 2026',
        release3Title: 'Информация о сервере',
        release3Description:
            'Глубокая видимость и контроль над серверами прямо из панели.',
        release3Feature1: 'Логи сервера в реальном времени прямо в панели',
        release3Feature2:
            'Диагностика сервера с автоматическим восстановлением в один клик для проблем с сервисами',
        release3Feature3:
            'Встроенный проводник и JSON-редактор для конфигурационных файлов сервера',
        release4Date: '14 февраля 2026',
        release4Title: 'Агенты и экспорт данных',
        release4Description:
            'Playground для агентов, управление несколькими агентами и переносимый экспорт данных для экземпляров OpenClaw.',
        release4Feature1:
            'Playground для агентов в один клик, добавление и управление несколькими агентами',
        release4Feature2: 'Экспорт OpenClaw как переносимого zip-архива',
        release4Feature3:
            'Интерактивный Playground с граф-визуализацией клоу и агентов',
        release4Feature4:
            'Удалён переключатель вида сетка/список в пользу единого макета панели'
    },
    clawDetail: {
        noAgentsYet: 'Нет агентов',
        noAgentsDescription:
            'Разверните своего первого агента, чтобы взаимодействовать с ним.',
        collapseSidebar: 'Свернуть боковую панель',
        expandSidebar: 'Развернуть боковую панель',
        selectClaw: 'Выберите агента',
        selectClawDescription:
            'Выберите агента на боковой панели, чтобы просмотреть его детали.',
        closeDetails: 'Закрыть',
        tabOverview: 'Обзор',
        overviewTitle: 'Обзор шлюза',
        overviewGatewayStatus: 'Статус шлюза',
        overviewOnline: 'Онлайн',
        overviewOffline: 'Офлайн',
        overviewVersion: 'Версия',
        overviewUptime: 'Время работы',
        overviewSessions: 'Сессии',
        overviewSessionsCount: '{{count}} активных',
        overviewNoSessions: 'Нет активных сессий',
        overviewSessionName: 'Сессия',
        overviewSessionModel: 'Модель',
        overviewSessionMessages: 'Сообщения',
        overviewSessionLastActive: 'Последняя активность',
        overviewModels: 'Модели',
        overviewError: 'Не удалось загрузить обзор!',
        overviewErrorDescription:
            'Не удалось подключиться к шлюзу OpenClaw. Убедитесь, что экземпляр запущен.',
        overviewUnsupportedTitle: 'Обзор не поддерживается',
        overviewUnsupportedDescription:
            'Ваша версия OpenClaw не поддерживает функцию обзора. Пожалуйста, обновите до последней версии.',
        overviewHermesTitle: 'Hermes работает в терминале',
        overviewHermesDescription:
            'Hermes — это TUI-агент. Откройте вкладку «Терминал» и выполните `hermes`, чтобы начать сеанс. Вкладки «Файлы» и «Версии» позволяют редактировать конфигурацию и обновляться.',
        overviewHermesOpenTerminal: 'Открыть терминал',
        viewDocs: 'Документация',
        overviewUptimeDays: '{{days}}д {{hours}}ч {{minutes}}м',
        overviewUptimeHours: '{{hours}}ч {{minutes}}м',
        overviewUptimeMinutes: '{{minutes}}м',
        overviewService: 'Сервис',
        overviewServiceActive: 'Активен',
        overviewServiceInactive: 'Неактивен',
        overviewPort: 'Port 18789',
        overviewPortOpen: 'Прослушивает',
        overviewPortClosed: 'Закрыт',
        overviewReady: 'Готов',
        overviewNotReady: 'Не готов',
        overviewConfiguration: 'Конфигурация',
        overviewBrowser: 'Browser',
        overviewCommands: 'Команды оболочки',
        overviewTools: 'Инструменты',
        overviewSubdomain: 'Поддомен',
        overviewInstanceStatus: 'Статус экземпляра',
        overviewModel: 'Model',
        overviewAgents: 'Агенты',
        overviewMemoryStatus: 'Память',
        overviewHeartbeat: 'Heartbeat',
        overviewEvents: 'События',
        overviewProbes: 'Probes',
        overviewPlugins: 'Plugins',
        tabPreview: 'Предпросмотр',
        previewNotEnabled: 'Предпросмотр не включен для этого экземпляра.',
        previewNotEnabledDescription:
            'Включите предпросмотр, чтобы встроить агента прямо в панель управления.',
        previewEnable: 'Включить предпросмотр',
        previewEnabling: 'Включение...',
        previewEnabled: 'Предпросмотр включен.',
        previewEnableFailed: 'Не удалось включить предпросмотр!',
        previewEnableCanceledNavigation:
            'Включение предпросмотра прервано так как вы покинули страницу.',
        previewError: 'Не удалось загрузить предпросмотр.',
        previewErrorDescription: 'Агент может быть офлайн или недоступен.',
        previewRetry: 'Повторить',
        tabInfo: 'Инфо',
        tabLogs: 'Логи',
        tabTerminal: 'Терминал',
        terminalConnecting: 'Подключение к терминалу...',
        terminalDisconnected: 'Терминал отключён.',
        terminalError: 'Не удалось подключиться к терминалу !',
        terminalReconnect: 'Переподключиться',
        tabDisabledConfiguring:
            'Доступно после завершения настройки экземпляра.',
        tabDisabledAwaitingPayment: 'Доступно после обработки платежа.',
        creatingTitle: 'Настройка вашего агента',
        creatingDescription:
            'Обычно это занимает одну-две минуты. Вы можете безопасно закрыть эту страницу и вернуться позже.',
        creatingDescriptionLocal:
            'Обычно это занимает мгновение. Не закрывайте приложение до завершения.',
        configuringTitle: 'Установка OpenClaw',
        configuringTitleHermes: 'Установка Hermes',
        loadingTipHermes1:
            'Hermes — это TUI-агент. После запуска откройте вкладку «Терминал», чтобы пообщаться с ним.',
        loadingTipHermes2:
            'Настройте провайдеров моделей (OpenRouter, Anthropic и др.) в ~/.hermes/.env через вкладку «Файлы».',
        loadingTipHermes3:
            'Подключите Telegram, Discord или Slack из «Терминала» командой `hermes gateway install`.',
        configuringDescription:
            'Обычно это занимает одну-две минуты. Вы можете безопасно закрыть эту страницу и вернуться позже.',
        configuringDescriptionLocal:
            'Локальная установка среды выполнения агента. Не закрывайте приложение до завершения.',
        awaitingPaymentTitle: 'Ожидание оплаты',
        awaitingPaymentDescription:
            'Завершите оплату, чтобы начать настройку вашего агента. Эта резервация истекает через один час.',
        awaitingPaymentAction: 'Завершить оплату',
        loadingTip1:
            'Знаете ли вы, что можно запускать нескольких агентов в одном OpenClaw?',
        loadingTip2: 'Знаете ли вы, что OpenClaw — это открытый код?',
        loadingTip3:
            'ClawHost — первый в мире проект, позволяющий хостить OpenClaw в один клик.',
        loadingTip4:
            'Вы можете получить доступ к своему агенту через SSH или встроенный терминал.',
        loadingTip5: 'Ваш агент автоматически получает собственный поддомен.',
        loadingTip6:
            'Вы можете изменить иконку и имя агента в любое время в Настройках.',
        loadingTip7: 'Весь трафик к вашему агенту зашифрован с помощью TLS.',
        loadingTip8:
            'Вы можете отслеживать использование CPU, памяти и диска во вкладке Мониторинг.',
        loadingTip9:
            'Нужна помощь? Присоединяйтесь к нашему сообществу в Discord.',
        loadingTip10:
            'Вы можете экспортировать всю конфигурацию агента в качестве резервной копии.',
        loadingTip11:
            'SSH-ключи можно применять к работающим экземплярам без переустановки.',
        loadingTip12:
            'Вы можете сменить пароль root и токен шлюза во вкладке Безопасность.',
        loadingTip13:
            'ClawHost поддерживает серверы в нескольких регионах Европы и США.',
        tabSettings: 'Настройки',
        featureVersionUnsupported:
            '{{feature}} не поддерживается на {{version}}',
        featureVersionUnsupportedDescription:
            'Мы не поддерживаем управление {{feature}} с этой версией через наш интерфейс. Вы можете управлять этим через SSH, Терминал или панель управления OpenClaw.',
        featureVersionUnsupportedButton: 'Перейти к Версиям',
        featureVersionUnsupportedSupported: 'Поддерживаемые версии:',
        featureVersionUnsupportedNewer: 'более новые версии',
        tabVersions: 'Версии',
        tabFiles: 'Проводник',
        tabMonitor: 'Монитор',
        tabVolumes: 'Хранилище',
        tabSecurity: 'Безопасность',
        securitySSHKey: 'SSH-ключ',
        securitySSHKeyHint:
            'Применяется к работающему экземпляру и используется при переустановке.',
        securityPassword: 'Пароль root',
        securityGatewayToken: 'Токен шлюза',
        securityHostKey: 'Отпечаток ключа хоста',
        securityRotatePassword: 'Сменить пароль',
        securityRotateToken: 'Сменить токен',
        securityRandomize: 'Сгенерировать случайно',
        securitySavePassword: 'Сохранить пароль',
        securitySaveToken: 'Сохранить токен',
        volumesTitle: 'Тома',
        volumesCount: '{{count}} томов',
        volumesEmpty: 'Нет подключённых томов.',
        volumesEmptyDescription:
            'У этого экземпляра нет постоянных томов хранения.',
        volumesReadOnly:
            'Хранилище можно добавить только при создании экземпляра. Чтобы добавить хранилище, разверните новый экземпляр с нужным размером тома или свяжитесь с',
        volumesContactSupport: 'командой поддержки',
        metricsTitle: 'Метрики сервера',
        metricsLive: 'В реальном времени',
        metricsCpu: 'Использование CPU',
        metricsMemory: 'Использование памяти',
        metricsDisk: 'Использование диска',
        metricsNetwork: 'Сеть',
        metricsLoadAvg: 'Средняя нагрузка',
        metricsProcesses: 'Основные процессы',
        metricsUptime: 'Время работы',
        metricsUsed: 'Использовано',
        metricsAvailable: 'Доступно',
        metricsTotal: 'Всего',
        metricsReceived: 'Получено',
        metricsSent: 'Отправлено',
        metricsLoad1: '1 мин',
        metricsLoad5: '5 мин',
        metricsLoad15: '15 мин',
        metricsProcessPid: 'PID',
        metricsProcessUser: 'Пользователь',
        metricsProcessCpu: 'CPU %',
        metricsProcessMem: 'MEM %',
        metricsProcessCommand: 'Команда',
        metricsError: 'Не удалось загрузить метрики!',
        metricsErrorDescription:
            'Не удалось подключиться к серверу для получения метрик. Пожалуйста, проверьте, что экземпляр запущен.',
        metricsAutoRefresh:
            'Автоматическое обновление каждые {{seconds}} секунд',
        tabBilling: 'Billing',
        billingEmpty: 'No billing history for this instance.',
        tabServer: 'Сервер',
        serverIpAddress: 'IP-адрес',
        reinstallDescription:
            'Переустановить {{agentName}} на этом сервере. Это сбросит установку, но сохранит ваши данные. Делайте это только при необходимости.',
        versionsSearch: 'Поиск версий...',
        versionsSearchCount: 'Поиск {{count}} версий...',
        versionsEmpty: 'Версии не найдены',
        versionsEmptyDescription: 'Версии по вашему запросу не найдены.',
        versionsErrorDescription:
            'Не удалось загрузить версии. Проверьте подключение и попробуйте снова !',
        versionsChangelog: 'Просмотреть журнал изменений на npm',
        versionCurrent: 'Текущая',
        versionLatest: 'Последняя',
        updateAvailable: 'A newer version of OpenClaw is available',
        updateAvailableDescription:
            'A new version of OpenClaw ({{version}}) is available for your instance.',
        updateAvailableDescriptionHermes:
            'A new version of Hermes ({{version}}) is available for your instance.',
        goToVersions: 'Go to Versions',
        versionInstall: 'Установить',
        versionInstalling: 'Установка...',
        versionInstallSuccess: 'Версия {{version}} успешно установлена.',
        versionInstallFailed: 'Не удалось установить версию !',
        installVersionCanceledNavigation:
            'Установка версии прервана так как вы покинули страницу.',
        versionDownloads: '{{count}} загрузок',
        versionChangelog: 'Журнал изменений',
        versionOutdated: 'Устаревшая',
        versionSupported: 'Поддерживается',
        versionSupportedTooltip:
            'Эта версия позволяет управлять OpenClaw через интерфейс',
        versionInstallConfirmTitle: 'Установить версию {{version}}',
        versionInstallConfirmDescription:
            'Переключение версий может вызвать непредвиденное поведение или потребовать дополнительной ручной настройки, особенно для новых версий, которые ещё не были полностью проверены. Вы уверены, что хотите продолжить?',
        settingsIcon: 'Иконка',
        settingsIconDescription: 'Нажмите, чтобы изменить иконку агента.',
        settingsIconRandomize: 'Случайно',
        settingsIconRemove: 'Удалить иконку',
        settingsBackground: 'Фон',
        settingsBackgroundReset: 'Сбросить',
        settingsName: 'Имя',
        settingsNamePlaceholder: 'Введите имя клоу',
        settingsNameDescription: 'Только буквы, цифры и дефисы.',
        subdomain: 'Поддомен',
        subdomainPlaceholder: 'Введите поддомен',
        subdomainDescription:
            'Строчные буквы и цифры, {{min}}-{{max}} символов.',
        subdomainInvalid: 'Используйте {{min}}-{{max}} строчных букв и цифр.',
        subdomainUpdated: 'Поддомен успешно обновлён.',
        subdomainUpdateFailed: 'Не удалось обновить поддомен !',
        subdomainInUse: 'Этот поддомен используется другим клоу !',
        settingsDetails: 'Подробности',
        settingsDangerZone: 'Опасная зона',
        settingsDangerZoneDescription:
            'Ваш экземпляр будет удалён в конце текущего расчётного периода.',
        settingsDangerZoneDescriptionLocal:
            'Это навсегда удалит агента и все его файлы.',
        settingsScheduledDeletionDescription:
            'Запланировано удаление на {{date}}. Отмените, чтобы сохранить экземпляр работающим и подписку активной.',
        settingsSave: 'Сохранить',
        settingsSaving: 'Сохранение...',
        settingsUpdated: 'Настройки обновлены.',
        settingsUpdateFailed: 'Не удалось обновить настройки!',
        saveCanceledNavigation:
            'Сохранение прервано так как вы покинули страницу.',
        savePasswordCanceledNavigation:
            'Сохранение пароля прервано так как вы покинули страницу.',
        saveGatewayTokenCanceledNavigation:
            'Сохранение токена шлюза прервано так как вы покинули страницу.',
        saveSSHKeyCanceledNavigation:
            'Сохранение SSH-ключа прервано так как вы покинули страницу.',
        mockLogStarting: 'Запуск агента OpenClaw...',
        mockLogLoadingModel: 'Загрузка модели: claude-sonnet-4-5',
        mockLogAgentReady: 'Агент готов на порту 3000',
        mockLogConnected: 'Подключён к шлюзу',
        mockLogsContent:
            '2026-02-14T10:23:41Z {{starting}}\n2026-02-14T10:23:42Z {{loadingModel}}\n2026-02-14T10:23:43Z {{agentReady}}\n2026-02-14T10:23:44Z {{connected}}\n2026-02-14T10:24:01Z {{requestReceived}}\n2026-02-14T10:24:03Z {{responseSent1}}\n2026-02-14T10:25:12Z {{requestReceived}}\n2026-02-14T10:25:14Z {{responseSent2}}\n2026-02-14T10:26:30Z {{healthCheck}}',
        mockLogRequestReceived: 'Получен запрос: /chat',
        mockLogResponseSent1: 'Ответ отправлен (1.2с)',
        mockLogResponseSent2: 'Ответ отправлен (1.8с)',
        mockLogHealthCheck: 'Проверка состояния пройдена'
    },
    privacy: {
        title: 'Политика конфиденциальности',
        description:
            'Узнайте, как ClawHost собирает, использует и защищает ваши персональные данные.',
        lastUpdated: 'Последнее обновление: 14 марта 2026',
        introTitle: '1. Введение',
        introText:
            'ClawHost («мы», «наш» или «нас») стремится защищать вашу конфиденциальность. Эта Политика конфиденциальности объясняет, как мы собираем, используем, раскрываем и защищаем вашу информацию при использовании нашего Сервиса.',
        authTitle: '2. Аутентификация',
        authText:
            'ClawHost использует Google Firebase Authentication для управления учётными записями. Вы можете войти через email, Google или GitHub. Используя эти способы входа, вы соглашаетесь с соответствующими условиями и политиками конфиденциальности. Эти провайдеры могут собирать базовые данные, такие как адрес электронной почты, имя и информацию об устройстве. Мы храним только ваш адрес электронной почты и отображаемое имя.',
        collectTitle: '3. Информация, которую мы собираем',
        collectText: 'Мы собираем информацию следующими способами:',
        personalInfoTitle: 'Персональная информация',
        personalInfoEmail:
            'Адрес электронной почты (для создания аккаунта и связи)',
        personalInfoName: 'Имя (необязательно, для персонализации)',
        personalInfoPayment:
            'Платёжная информация (обрабатывается безопасно сторонними провайдерами)',
        serverInfoTitle: 'Информация о сервере',
        serverInfoConfig: 'Конфигурация и статус сервера',
        serverInfoIp: 'IP-адрес и расположение сервера',
        serverInfoResources: 'Распределение ресурсов (CPU, RAM, хранилище)',
        useTitle: '4. Как мы используем вашу информацию',
        useText: 'Мы используем собранную информацию для:',
        useProvide: 'Предоставления и поддержки нашего Сервиса',
        useTransactions: 'Обработки транзакций и отправки платёжной информации',
        useNotices: 'Отправки важных уведомлений и обновлений',
        useSupport: 'Ответа на запросы службы поддержки',
        useAnalyze:
            'Мониторинга и анализа паттернов использования для улучшения нашего Сервиса',
        useFraud:
            'Обнаружения и предотвращения мошенничества или злоупотреблений',
        sharingTitle: '5. Обмен данными и раскрытие информации',
        sharingText:
            'Мы не продаём вашу персональную информацию. Мы можем делиться информацией с:',
        sharingProviders:
            'Поставщиками услуг, помогающими в работе нашего Сервиса (например, провайдерами облачной инфраструктуры)',
        sharingLegal:
            'Правовыми органами, когда это требуется по закону или для защиты наших прав',
        sharingBusiness:
            'Деловыми партнёрами в случае слияния, поглощения или продажи активов',
        securityTitle: '6. Безопасность данных',
        securityText:
            'Мы применяем надлежащие технические и организационные меры для защиты вашей персональной информации от несанкционированного доступа, изменения, раскрытия или уничтожения. Это включает шифрование, безопасные серверы и регулярные оценки безопасности.',
        retentionTitle: '7. Хранение данных',
        retentionText:
            'Мы храним вашу персональную информацию до тех пор, пока ваш аккаунт активен или пока это необходимо для предоставления услуг. Мы можем хранить определённую информацию по требованию закона или для законных деловых целей.',
        rightsTitle: '8. Ваши права',
        rightsText:
            'В зависимости от вашего местоположения вы можете иметь право:',
        rightsAccess: 'Получить доступ к вашим персональным данным',
        rightsCorrect: 'Исправить неточные данные',
        rightsDelete: 'Запросить удаление ваших данных',
        rightsObject: 'Возражать против обработки ваших данных',
        rightsPortability: 'Переносимость данных',
        rightsWithdraw: 'Отозвать согласие в любое время',
        cookiesTitle: '9. Файлы cookie и отслеживание',
        cookiesText:
            'Мы не используем файлы cookie. Аутентификация осуществляется через Firebase и не зависит от файлов cookie, хранящихся в вашем браузере.',
        transfersTitle: '10. Международная передача данных',
        transfersText:
            'Ваша информация может быть передана и обработана в странах, отличных от вашей. Мы обеспечиваем надлежащие меры защиты для защиты ваших данных в соответствии с этой Политикой конфиденциальности.',
        eligibilityTitle: '11. Право на использование',
        eligibilityText:
            'Наш Сервис доступен для всех. Ограничений по возрасту для использования ClawHost нет.',
        changesTitle: '12. Изменения данной Политики',
        changesText:
            'Мы можем время от времени обновлять эту Политику конфиденциальности. Мы уведомим вас о любых изменениях, опубликовав новую Политику конфиденциальности на этой странице и обновив дату «Последнее обновление».',
        contactTitle: '13. Свяжитесь с нами',
        contactText:
            'Если у вас есть вопросы об этой Политике конфиденциальности или вы хотите воспользоваться своими правами, свяжитесь с нами по адресу'
    },
    terms: {
        title: 'Условия использования',
        description:
            'Ознакомьтесь с условиями использования сервисов ClawHost.',
        lastUpdated: 'Последнее обновление: 14 марта 2026',
        acceptanceTitle: '1. Принятие условий',
        acceptanceText:
            'Получая доступ и используя ClawHost («Сервис»), вы принимаете и соглашаетесь соблюдать условия и положения данного соглашения. Если вы не согласны с этими условиями, пожалуйста, не используйте наш Сервис.',
        serviceTitle: '2. Описание Сервиса',
        serviceText:
            'ClawHost обеспечивает развёртывание OpenClaw и Hermes в один клик на выделенных серверах. Мы позволяем пользователям разворачивать, управлять и получать доступ к предварительно настроенным экземплярам OpenClaw и Hermes с полным root-доступом и выделенными ресурсами.',
        authTitle: '3. Аутентификация',
        authText:
            'ClawHost использует Google Firebase Authentication для управления входом. Вы можете аутентифицироваться через email, Google или GitHub. Используя эти методы, вы соглашаетесь с соответствующими условиями и политиками конфиденциальности Google и GitHub. Эти провайдеры могут собирать базовую информацию, такую как адрес электронной почты, имя и данные устройства.',
        responsibilitiesTitle: '4. Обязанности пользователя',
        responsibilitiesText: 'Вы соглашаетесь:',
        responsibilitiesAccurate:
            'Предоставлять точную и полную регистрационную информацию',
        responsibilitiesSecurity:
            'Обеспечивать безопасность учётных данных вашего аккаунта',
        responsibilitiesCompliance:
            'Использовать Сервис в соответствии со всеми применимыми законами',
        responsibilitiesLegal:
            'Не использовать Сервис для незаконных или несанкционированных целей',
        responsibilitiesAccess:
            'Не пытаться получить несанкционированный доступ к системам или сетям',
        prohibitedTitle: '5. Запрещённое использование',
        prohibitedText: 'Вы не можете использовать наш Сервис для:',
        prohibitedMalware:
            'Распространения вредоносного ПО, вирусов или любого вредоносного программного обеспечения',
        prohibitedDos: 'Проведения DDoS-атак или сетевых злоупотреблений',
        prohibitedSpam: 'Отправки спама или нежелательных сообщений',
        prohibitedIllegal:
            'Размещения или распространения нелегального контента',
        prohibitedIp:
            'Нарушения прав третьих лиц, включая интеллектуальную собственность',
        prohibitedMining: 'Майнинга криптовалют',
        prohibitedOther:
            'Любой другой незаконной или вредоносной деятельности, которую мы можем признать неприемлемой по нашему усмотрению',
        paymentTitle: '6. Оплата и выставление счетов',
        paymentText:
            'Услуги оплачиваются на фиксированной ежемесячной или ежегодной основе. Вы можете переключаться между ежемесячной и ежегодной оплатой в любое время, при этом изменение вступает в силу в начале следующего расчётного периода. Все платежи не подлежат возврату. Оплачивая сервер, вы получаете доступ к нему на весь расчётный период. При отмене подписка прекращается по окончании текущего расчётного периода. Цены могут изменяться, но любые изменения применяются только к вновь развёрнутым клоу и не затрагивают уже развёрнутые. Неуплата может привести к приостановке или прекращению действия вашего аккаунта.',
        availabilityTitle: '7. Доступность Сервиса',
        availabilityText:
            'Мы стремимся поддерживать высокую доступность, но не гарантируем бесперебойный доступ к Сервису. Мы оставляем за собой право изменять, приостанавливать или прекращать работу любой части Сервиса в любое время с уведомлением или без него.',
        liabilityTitle: '8. Ограничение ответственности',
        liabilityText:
            'В максимальной степени, допускаемой законом, ClawHost не несёт ответственности за любой косвенный, случайный, особый, последующий или штрафной ущерб, а также за потерю прибыли или доходов, понесённых прямо или косвенно.',
        terminationTitle: '9. Прекращение',
        terminationText:
            'Мы можем прекратить или приостановить действие вашего аккаунта и доступ к Сервису немедленно, без предварительного уведомления, за поведение, которое, по нашему мнению, нарушает эти Условия или наносит вред другим пользователям, нам или третьим лицам, или по любой другой причине.',
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
        changesToTermsTitle: '11. Изменения Условий',
        changesToTermsText:
            'Мы оставляем за собой право изменять эти условия в любое время. Мы уведомим пользователей о любых существенных изменениях по электронной почте или через Сервис. Продолжение использования Сервиса после таких изменений означает принятие обновлённых условий.',
        contactTitle: '12. Контактная информация',
        contactText:
            'Если у вас есть вопросы об этих Условиях, свяжитесь с нами по адресу'
    },
    hermesBanner: {
        title: 'Hermes Agent',
        message:
            'Агенты Hermes теперь поддерживаются для развёртывания на ClawHost.'
    },
    compare: {
        title: 'Сравнение',
        description:
            'Посмотрите, как ClawHost сравнивается с другими платформами хостинга OpenClaw.',
        badge: 'Сравнение',
        feature: 'Платформа',
        compareWith: 'Сравнить с',
        lastUpdated: 'Последнее обновление: март 2026',
        competitorClawHost: 'ClawHost',
        competitorLobsterFarm: 'LobsterFarm',
        competitorSimpleAgent: 'SimpleAgent',
        competitorMyAgentAi: 'MyAgent.ai',
        competitorQuickAgent: 'QuickAgent',
        categoryInfrastructure: 'Инфраструктура',
        categoryPricing: 'Цены и оплата',
        categoryDeployment: 'Развёртывание и настройка',
        categoryManagement: 'Управление OpenClaw',
        categorySecurity: 'Данные и безопасность',
        categoryMonitoring: 'Мониторинг и обслуживание',
        categorySupport: 'Поддержка и платформа',
        featureServerOwnership: 'Владение сервером',
        featureProviderChoice: 'Выбор облачного провайдера',
        featureDedicatedResources: 'Выделенные ресурсы',
        featureRootAccess: 'Полный root/SSH-доступ',
        featureServerLocations: 'Серверные локации',
        featureStartingPrice: 'Начальная цена',
        featureTransparentPricing: 'Прозрачные цены',
        featurePowerfulServers: 'Мощные серверы, низкая цена',
        featureLocationSelection: 'Выбор расположения сервера',
        featureSubdomainAccess: 'Доступ через поддомен',
        featureThemes: 'Светлая и тёмная темы',
        featureSetupTime: 'Время настройки',
        featureOneClickDeploy: 'Развёртывание в один клик',
        featureMultipleInstances: 'Несколько экземпляров',
        featureDataOwnership: 'Полное владение данными',
        featureDataExport: 'Экспорт данных',
        featureBackups: 'Резервные копии',
        featureSecurityHardening: 'Укрепление безопасности',
        featureSslTls: 'SSL/TLS',
        featureOpenSource: 'Открытый код',
        featureAutoUpdates: 'Автообновления',
        featureDiagnostics: 'Диагностика в реальном времени',
        featureLogStreaming: 'Потоковые логи',
        featureRepairTools: 'Инструменты восстановления',
        featureSupportChannels: 'Каналы поддержки',
        featureMultiLanguage: 'Мультиязычный интерфейс',
        featureDesktopApp: 'Настольное приложение',
        featureOneClickVersion: 'Переключение версии в один клик',
        featureWebTerminal: 'Доступ через веб-терминал',
        featureSocials: 'Социальные сети',
        dedicatedVps: 'Выделенный VPS',
        sharedContainers: 'Общие контейнеры',
        isolatedContainers: 'Изолированные контейнеры',
        cloudWorkspaces: 'Облачные рабочие пространства',
        threeProviders: 'Cloud',
        singleProvider: 'Один провайдер',
        fullyDedicated: 'Полностью выделенный',
        shared: 'Общий',
        fullRootSsh: 'Полный root + SSH',
        sshOnRequest: 'SSH по запросу',
        noAccess: 'Нет доступа',
        thirtyPlusLocations: '30+ локаций',
        limitedLocations: 'Ограниченные',
        fourLocations: '4 локации',
        fromTwentyFiveMonth: 'От $25/мес',
        aboutFortyFourMonth: '~$44/мес в среднем',
        fromNineteenMonth: '$19–79/мес',
        nineteenMonth: '$19/мес',
        clearSpecsPricing: 'Чёткие характеристики и цены',
        unclearPricing: 'Непонятные цены',
        fixedTiers: '3 фиксированных уровня',
        creditBased: 'На основе кредитов',
        minutes: 'Минуты',
        underOneMinute: 'Менее 1 минуты',
        thirtySeconds: '30 секунд',
        instant: 'Мгновенно',
        noneRequired: 'Не требуются',
        minimal: 'Минимальные',
        unlimited: 'Неограниченно',
        singleInstance: 'Один',
        noMarketplace: 'Нет маркетплейса',
        appOnly: 'Только приложение',
        fullConfig: 'Полная конфигурация',
        limitedConfig: 'Ограниченная',
        zipExport: 'ZIP-экспорт',
        serverTransfer: 'Перенос сервера',
        noExport: 'Нет экспорта',
        volumeStorage: 'Объёмное хранилище',
        noBackups: 'Нет резервных копий',
        dailyBackups: 'Ежедневные резервные копии',
        included: 'Включено',
        notIncluded: 'Не включено',
        managed: 'Управляемый',
        manual: 'Ручной',
        appStore: 'App Store',
        liveMonitoring: 'Мониторинг в реальном времени',
        liveLogs: 'Логи в реальном времени',
        oneClickRepair: 'Восстановление в один клик',
        emailGithub: 'Email, GitHub',
        humanSupport: 'Живая поддержка',
        communityOnly: 'Только сообщество',
        appSupport: 'Поддержка в приложении',
        prioritySupport: 'Поддержка 24/7 (Pro+)',
        fourLanguages: '4 языка',
        englishOnly: 'Только английский',
        available: 'Доступно',
        comingSoon: 'Скоро',
        macOsOnly: 'Только macOS',
        viaTelegram: 'Через Telegram',
        builtInTerminal: 'SSH не нужен',
        notAvailable: 'Недоступно',
        disclaimer: 'Что-то изменилось или неверно? Напишите нам на',
        disclaimerOr: 'или откройте пул-реквест на',
        github: 'GitHub',
        ctaTitle: 'Готовы увидеть разницу?',
        ctaDescription:
            'Разверните OpenClaw на собственном выделенном сервере. Полное владение, прозрачные цены и готовность за минуты.'
    },
    admin: {
        title: 'Админ',
        description: 'Управляйте пользователями и данными платформы.',
        usersTab: 'Пользователи',
        totalUsers: '{{count}} пользователей',
        noUsers: 'Нет пользователей',
        noUsersDescription:
            'Не найдено пользователей, соответствующих вашим фильтрам.',
        genericErrorDescription:
            'Что-то пошло не так. Пожалуйста, попробуйте снова.',
        genericEmptyDescription: 'Здесь пока нечего показывать.',
        failedToLoadUsers: 'Не удалось загрузить пользователей!',
        failedToLoadUsersDescription:
            'Произошла ошибка при загрузке пользователей. Попробуйте снова.',
        failedToLoadUserDetail: 'Не удалось загрузить данные пользователя!',
        userDetail: 'Данные пользователя',
        userInfo: 'Информация о пользователе',
        email: 'Эл. почта',
        name: 'Имя',
        role: 'Роль',
        authMethods: 'Методы аутентификации',
        license: 'Лицензия',
        referralCode: 'Реферальный код',
        referredBy: 'Приглашён',
        joined: 'Дата регистрации',
        claws: 'Claws',
        sshKeys: 'SSH-ключи',
        volumes: 'Тома',
        billing: 'Платежи',
        noClaws: 'Нет Claws',
        noSshKeys: 'Нет SSH-ключей',
        noVolumes: 'Нет Томов',
        noBilling: 'Нет Истории Платежей',
        hasLicense: 'Да',
        noLicense: 'Нет',
        notSet: 'Не задано',
        searchPlaceholder: 'Поиск по email или имени...',
        filterAll: 'Все пользователи',
        filterWithClaws: 'С claws',
        filterWithoutClaws: 'Без claws',
        sortNewest: 'Сначала новые',
        sortOldest: 'Сначала старые',
        editUser: 'Редактировать',
        saveUser: 'Сохранить',
        userUpdated: 'Пользователь обновлён.',
        userUpdateFailed: 'Не удалось обновить!',
        clawsTab: 'Claws',
        sshKeysTab: 'SSH-ключи',
        volumesTab: 'Тома',
        noClawsFound: 'Нет Claws',
        noSSHKeysFound: 'Нет SSH-ключей',
        noVolumesFound: 'Нет Томов',
        failedToLoadAgents: 'Не удалось загрузить agents!',
        failedToLoadSSHKeys: 'Не удалось загрузить SSH-ключи!',
        failedToLoadVolumes: 'Не удалось загрузить тома!',
        owner: 'Владелец',
        searchClaws: 'Поиск claws...',
        searchSSHKeys: 'Поиск SSH-ключей...',
        referralsTab: 'Рефералы',
        pendingClawsTab: 'Ожидающие',
        emailsTab: 'Письма',
        analyticsTab: 'Аналитика',
        billingTab: 'Биллинг',
        settingsTab: 'Настройки',
        settingsDescription: 'Управляйте настройками администратора.',
        showAllAgents: 'Показать всех агентов всех пользователей',
        billingFilterAll: 'Все заказы',
        billingFilterService: 'Сервис Claw',
        billingFilterLicense: 'Лицензия',
        billingOrderTypeLabel: ' · {{type}}',
        noBillingFound: 'Нет заказов',
        failedToLoadBilling: 'Не удалось загрузить заказы!',
        searchBilling: 'Поиск по продукту...',
        billingReason: 'Причина',
        billingType: 'Тип',
        billingSubtotal: 'Подытог',
        billingDiscount: 'Скидка',
        billingTax: 'Налог',
        billingTotal: 'Итого',
        analyticsDay: 'День',
        analyticsWeek: 'Неделя',
        analyticsMonth: 'Месяц',
        analyticsYear: 'Год',
        analyticsAllTime: 'Всё время',
        analyticsFilter: 'Фильтр',
        analyticsResources: 'Ресурсы',
        analyticsSelectAll: 'Выбрать все',
        analyticsDeselectAll: 'Снять все',
        failedToLoadAnalytics: 'Не удалось загрузить аналитику!',
        noAnalyticsData: 'Данные аналитики недоступны.',
        noReferralsFound: 'Нет Рефералов',
        noPendingClawsFound: 'Нет Ожидающих Claws',
        noEmailsFound: 'Нет Писем',
        failedToLoadReferrals: 'Не удалось загрузить рефералов!',
        failedToLoadPendingClaws: 'Не удалось загрузить ожидающие claws!',
        failedToLoadEmails: 'Не удалось загрузить письма!',
        referrer: 'Реферер',
        referred: 'Приглашённый',
        earned: 'Заработано',
        expiresAt: 'Истекает',
        feature: 'Функция',
        sentAt: 'Отправлено',
        fileSize: 'Размер',
        registered: 'Зарегистрирован',
        status: 'Статус',
        ip: 'IP',
        plan: 'План',
        location: 'Расположение',
        subdomain: 'Поддомен',
        subscription: 'Подписка',
        billingInterval: 'Биллинг',
        deletionScheduled: 'Удаление запланировано',
        fingerprint: 'Отпечаток',
        price: 'Цена',
        pricePerMonth: '{{price}}/мес',
        statusRunning: 'Запущен',
        statusStopped: 'Остановлен',
        adminBadge: 'Админ',
        unitGB: '{{size}} ГБ',
        unitKB: '{{size}} КБ'
    },
    affiliate: {
        title: 'Affiliate',
        description: 'Earn rewards by referring friends to ClawHost.',
        subtitle: 'Share your referral link and earn rewards.',
        learnMore: 'Узнать больше о партнёрской программе',
        referralCode: 'Referral Code',
        referrals: 'Referrals',
        payments: 'платежей',
        earnings: 'Earnings',
        codeChangeHint: 'You can customize your referral code once.',
        codeAlreadyChanged: 'Your referral code has already been customized.',
        codeUpdated: 'Referral code updated.',
        codeUpdateFailed: 'Failed to update referral code!',
        invalidCodeLength:
            'Code must be between {{min}} and {{max}} characters!',
        referralHistory: 'Referral History',
        paymentHistory: 'История платежей',
        periodToday: 'Today',
        periodWeek: 'Week',
        periodMonth: 'Month',
        periodYear: 'Year',
        periodAll: 'All',
        confirmChangeTitle: 'Change Referral Code',
        confirmChangeDescription:
            'Are you sure? This action is permanent and cannot be undone. You will not be able to change your referral code again.',
        noReferralsYet: 'Нет рефералов',
        noReferralsDescription:
            'Share your referral link to start earning rewards.',
        noPaymentsYet: 'Нет платежей',
        noPaymentsDescription:
            'Когда приглашённые пользователи совершат покупки, их платежи появятся здесь.'
    },
    affiliateProgram: {
        title: 'Партнёрская программа',
        description:
            'Узнайте, как работает партнёрская программа ClawHost, сколько вы можете заработать и правила участия.',
        lastUpdated: 'Последнее обновление: 1 апреля 2026 г.',
        overviewTitle: '1. Обзор',
        overviewText:
            'Партнёрская программа ClawHost позволяет вам зарабатывать вознаграждения, приглашая новых пользователей в ClawHost. Когда кто-то совершает покупку после посещения ClawHost по вашей реферальной ссылке, вы получаете комиссию с его платежей. Программа бесплатна и доступна всем зарегистрированным пользователям ClawHost.',
        howItWorksTitle: '2. Как это работает',
        howItWorksText: 'Начать работу с партнёрской программой просто:',
        howItWorksStep1:
            'Зарегистрируйте аккаунт ClawHost. Уникальный реферальный код генерируется для вас автоматически.',
        howItWorksStep2:
            'Поделитесь своей реферальной ссылкой с друзьями, коллегами или вашей аудиторией. Ваша ссылка имеет формат: clawhost.cloud?ref=YOUR_CODE.',
        howItWorksStep3:
            'Когда кто-то совершает покупку после посещения ClawHost по вашей ссылке, это регистрируется как ваш реферал.',
        howItWorksStep4:
            'Вы получаете комиссию каждый раз, когда ваш приглашённый пользователь совершает соответствующую покупку.',
        earningsTitle: '3. Заработок и выплаты',
        earningsText: 'Вот как работает партнёрский заработок:',
        earningsCommission:
            'Вы получаете комиссию 15% с каждой соответствующей покупки, совершённой вашими приглашёнными пользователями. Комиссии распространяются на планы ClawHost Cloud и ClawHost Go.',
        earningsMonthly:
            'Для месячных подписок вы получаете комиссии в течение 1 года с даты реферала.',
        earningsYearly:
            'Для годовых подписок вы получаете комиссию только за первый год.',
        earningsPayout:
            'Минимальная сумма вывода составляет 100 $ USD. Чтобы запросить вывод средств, свяжитесь с нашей службой поддержки.',
        earningsPaymentMethod:
            'Выплаты обрабатываются через PayPal. При запросе выплаты необходимо указать действительный адрес электронной почты PayPal.',
        earningsCurrency: 'Весь заработок рассчитывается и отображается в USD.',
        referralCodeTitle: '4. Ваш реферальный код',
        referralCodeText:
            'Каждый пользователь получает уникальный реферальный код при регистрации. Вы можете настроить его один раз, чтобы сделать более запоминающимся:',
        referralCodeUnique:
            'Ваш реферальный код уникален для вашего аккаунта и не может быть передан другому пользователю.',
        referralCodeOneChange:
            'Вы можете настроить свой реферальный код ровно один раз. Выбирайте внимательно — это изменение постоянно и не может быть отменено.',
        referralCodeFormat:
            'Реферальные коды могут содержать только буквы, цифры, дефисы и подчёркивания.',
        referralWindowTitle: '5. Окно атрибуции рефералов',
        referralWindowText:
            'Реферал закрепляется за вами на 3 месяца с момента, когда приглашённый пользователь впервые посещает ClawHost по вашей ссылке. Если приглашённый пользователь не совершает покупку в течение этого 3-месячного окна, реферал истекает и комиссия не будет начислена. Если пользователь переходит по другой реферальной ссылке, новый реферал заменяет предыдущий.',
        eligibilityTitle: '6. Право на участие',
        eligibilityText:
            'Для участия в партнёрской программе вы должны соответствовать следующим требованиям:',
        eligibilityAccount:
            'У вас должен быть зарегистрированный аккаунт ClawHost.',
        eligibilityStanding:
            'Ваш аккаунт должен быть в хорошем состоянии без истории нарушений правил.',
        eligibilityAge:
            'Вам должно быть не менее 18 лет или возраст совершеннолетия в вашей юрисдикции.',
        rulesTitle: '7. Правила программы',
        rulesText:
            'Для поддержания целостности партнёрской программы действуют следующие правила:',
        rulesNoSelfReferral:
            'Самореферальность строго запрещена. Вы не можете приглашать свои собственные аккаунты или аккаунты, которыми вы управляете.',
        rulesNoFakeAccounts:
            'Создание поддельных аккаунтов, автоматизированных регистраций или использование ботов для генерации рефералов запрещено.',
        rulesNoSpam:
            'Отправка нежелательных массовых сообщений (спама) для продвижения вашей реферальной ссылки не допускается.',
        rulesNoMisrepresentation:
            'Вы не можете искажать информацию о ClawHost, его услугах или партнёрской программе каким-либо образом.',
        rulesNoIncentivized:
            'Предложение прямых денежных стимулов (например, оплата пользователям за регистрацию по вашей ссылке) не допускается.',
        terminationTitle: '8. Нарушение и прекращение',
        terminationText:
            'Любое нарушение этих правил приведёт к немедленной потере всех ожидающих и заработанных вознаграждений. ClawHost оставляет за собой право приостановить или навсегда заблокировать ваш аккаунт в партнёрской программе. В серьёзных случаях ваш аккаунт ClawHost также может быть закрыт. Все решения относительно нарушений являются окончательными.',
        marketingTitle: '9. Как продвигать',
        marketingText:
            'Существует множество креативных и законных способов поделиться вашей реферальной ссылкой и увеличить доход:',
        marketingSocial:
            'Делитесь ссылкой в социальных сетях, таких как X, LinkedIn, Reddit и Facebook. Напишите о своём опыте с ClawHost и включите реферальную ссылку.',
        marketingBlog:
            'Пишите статьи в блоге, руководства или обзоры о ClawHost. Естественно включайте реферальную ссылку в контент.',
        marketingVideo:
            'Создавайте видеоконтент на YouTube или TikTok, демонстрируя, как вы используете ClawHost для развёртывания и управления ИИ-агентами.',
        marketingCommunity:
            'Участвуйте в сообществах разработчиков, форумах и серверах Discord. Когда кто-то спрашивает об облачном хостинге или развёртывании ИИ-агентов, рекомендуйте ClawHost со своей ссылкой.',
        marketingNewsletter:
            'Если вы ведёте рассылку или список электронной почты, упомяните ClawHost в соответствующем выпуске с вашей реферальной ссылкой.',
        marketingComparison:
            'Пишите честные сравнительные статьи или руководства, которые подчёркивают, чем ClawHost отличается от других платформ.',
        changesToProgramTitle: '10. Изменения в программе',
        changesToProgramText:
            'ClawHost оставляет за собой право изменять, приостанавливать или прекращать партнёрскую программу в любое время без предварительного уведомления. Это включает изменения комиссионных ставок, окон рефералов, порогов выплат и правил программы. Продолжение участия после изменений означает принятие обновлённых условий.',
        getStartedTitle: '11. Начать',
        getStartedText:
            'Готовы начать зарабатывать? Перейдите в свою партнёрскую панель, чтобы получить реферальную ссылку и начните делиться ею со своей сетью.',
        getStartedButton: 'Перейти в партнёрскую панель',
        contactTitle: '12. Контакт',
        contactText:
            'Если у вас есть вопросы о партнёрской программе, нужна помощь с реферальным кодом или вы хотите сообщить о нарушении, свяжитесь с нами по адресу'
    }
}

export default ru