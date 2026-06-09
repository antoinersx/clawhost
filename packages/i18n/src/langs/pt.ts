import type { Translations } from '#i18n/types'

const pt: Translations = {
    common: {
        loading: 'Carregando...',
        noResults: 'Nenhum resultado encontrado.',
        save: 'Salvar',
        cancel: 'Cancelar',
        confirm: 'Confirmar',
        delete: 'Excluir',
        deleting: 'Excluindo...',
        create: 'Criar',
        done: 'Concluído',
        back: 'Voltar',
        copy: 'Copiar',
        copied: 'Copiado.',
        copiedWithLabel: '{{label}} copiado.',
        show: 'Mostrar',
        hide: 'Ocultar',
        tryAgain: 'Tentar novamente',
        addKey: 'Adicionar Chave',
        close: 'Fechar',
        none: 'Nenhum',
        all: 'Todos',
        unknown: 'Desconhecido',
        pageNotFound: 'Página Não Encontrada',
        closeNotification: 'Fechar notificação',
        beta: 'Beta',
        brandName: 'ClawHost',
        brandNameGo: 'ClawHost Go',
        brandNameGoVersion: 'ClawHost Go {{version}}',
        pageTitleWithBrand: '{{title}} - ClawHost',
        menuFile: 'Arquivo',
        menuEdit: 'Editar',
        menuView: 'Visualização',
        menuWindow: 'Janela',
        menuHelp: 'Ajuda',
        scrollToBottom: 'Rolar para o Final',
        second: 'segundo',
        seconds: 'segundos'
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
        switchLanguage: 'Idioma'
    },
    theme: {
        light: 'Claro',
        dark: 'Escuro',
        system: 'Sistema',
        toggleTheme: 'Alternar tema'
    },
    nav: {
        claws: 'Claws',
        sshKeys: 'Chaves SSH',
        account: 'Conta',
        affiliate: 'Afiliado',
        license: 'Licença',
        signOut: 'Sair',
        admin: 'Admin',
        login: 'Entrar',
        deploy: 'Implantar',
        deployOpenClaw: 'Implantar OpenClaw',
        mainNavigation: 'Navegação principal',
        footerNavigation: 'Navegação do rodapé',
        toggleMenu: 'Alternar menu',
        cloud: 'Cloud',
        cloudSubtitle: 'Técnico',
        go: 'Go',
        goSubtitle: 'Não técnico'
    },
    go: {
        pageTitle: 'ClawHost Go',
        heroTitle1: 'Implante OpenClaw.',
        heroTitle2: 'Localmente. Instantaneamente.',
        badge: 'OpenClaw e Hermes localmente',
        tutorialBadge: 'Como começar no Go',
        description:
            'Um cliente desktop leve para gerenciar suas instâncias OpenClaw. Implante, monitore e controle seus claws — direto da sua máquina.',
        features: 'Recursos',
        whyClawHostGo: 'Recursos Completos',
        featuresDescription:
            'Por que vale a pena experimentar, os recursos falam por si.',
        zeroConfigDescription:
            'Economize horas de configuração de servidor, OpenClaw e Hermes. Vêm pré-instalados e prontos em minutos.',
        ownedDataDescription:
            'Tudo roda no seu dispositivo. Sem servidores na nuvem, sem terceiros, sem dados saindo da sua máquina.',
        terminalAccessDescription:
            'Acesse o terminal da sua instância OpenClaw diretamente pelo app. Sem necessidade de clientes SSH externos.',
        simplePricing: 'Preço Simples',
        simplePricingDescription:
            'Uma licença, tudo ilimitado. Sem cobranças mensais, sem limites de uso, sem taxas ocultas.',
        localDomain: 'Domínio Local Personalizado',
        localDomainDescription:
            'Acesse seu OpenClaw através de um domínio local personalizado. URLs limpas na sua própria rede.',
        secureDescription:
            'Seus dados nunca saem do seu dispositivo. Totalmente isolado, totalmente criptografado, totalmente seu.',
        pricing: 'Preços',
        pricingTitle: 'Preço Simples e Único',
        pricingDescription:
            'Sem assinaturas, sem taxas ocultas. Uma licença, uso ilimitado.',
        pricingPrice: '${{price}}',
        pricingLabel: 'Pagamento Único',
        pricingFeature1: 'Licença vitalícia',
        pricingFeature2: 'Claws ilimitados',
        pricingFeature3: 'Todas as atualizações futuras',
        pricingFeature4: 'Sem limites de uso',
        pricingFeature5: 'Suporte prioritário',
        pricingFeature6: 'Domínio local personalizado',
        comparison: 'Comparação',
        comparisonTitle: 'Go vs Cloud',
        comparisonDescription:
            'Escolha o que funciona para você. Go roda localmente, Cloud roda em servidores dedicados.',
        comparisonLocalUs: 'Roda totalmente no seu dispositivo',
        comparisonLocalOthers: 'Roda em servidores remotos',
        comparisonPricingUs: 'Pagamento único',
        comparisonPricingOthers: 'Assinatura mensal',
        comparisonDataUs: 'Dados ficam na sua máquina',
        comparisonDataOthers: 'Dados em servidores na nuvem',
        comparisonSetupUs: 'Instale e execute instantaneamente',
        comparisonSetupOthers: 'Implante com um clique',
        comparisonUpdatesUs: 'Atualizações automáticas',
        comparisonUpdatesOthers: 'Atualizações automáticas',
        faqTitle: 'Perguntas',
        faqHeading: 'Perguntas Frequentes',
        faqDescription: 'Tudo o que você precisa saber sobre o ClawHost Go.',
        faq1Question: 'O que é o ClawHost Go?',
        faq1Answer:
            'ClawHost Go é um aplicativo desktop leve que permite executar o OpenClaw localmente na sua própria máquina. Sem necessidade de servidores na nuvem — instale, inicie e comece a usar o OpenClaw em segundos.',
        faq2Question: 'Qual a diferença entre o Go e o ClawHost Cloud?',
        faq2Answer:
            'O ClawHost Cloud implanta o OpenClaw em servidores remotos dedicados com disponibilidade 24/7 e acesso global. O ClawHost Go executa tudo localmente no seu dispositivo — ideal para privacidade, uso offline e configurações simples.',
        faq3Question: 'Preciso de conexão com a internet?',
        faq3Answer:
            'O ClawHost Go funciona offline para uso local. Uma conexão com a internet é necessária apenas para a configuração inicial, atualizações e recursos que exigem chamadas de API externas.',
        faq4Question: 'A licença é um pagamento único?',
        faq4Answer:
            'Sim. Você paga uma vez e obtém acesso vitalício ao ClawHost Go, incluindo todas as atualizações futuras. Sem assinaturas, sem taxas recorrentes.',
        faq5Question: 'Quais sistemas operacionais são suportados?',
        faq5Answer:
            'O ClawHost Go suporta Windows e macOS. Ambas as plataformas têm os mesmos recursos e recebem atualizações simultaneamente.',
        faq6Question: 'Posso migrar do Go para o Cloud depois?',
        faq6Answer:
            'Com certeza. Você pode exportar sua configuração do OpenClaw do Go e implantá-la no ClawHost Cloud a qualquer momento. Ambas as plataformas são totalmente compatíveis.',
        statsPrice: '${{price}}',
        statsLifetime: 'Vitalício',
        statsOneTime: 'Único',
        statsPayment: 'Pagamento',
        statsLocal: 'Local',
        statsLocally: 'Roda Localmente',
        statsZero: 'Zero',
        statsZeroConfig: 'Zero Configuração',
        ctaTitle: 'Execute OpenClaw Localmente',
        ctaDescription:
            'Pagamento único, licença vitalícia. Implante OpenClaw na sua própria máquina — sem nuvem, sem assinaturas, sem limites. Seus dados, suas regras.',
        downloadForMac: 'Baixar para Mac',
        downloadVersion: 'Versão {{version}}',
        downloadForWindows: 'Baixar para Windows',
        deviceNotSupported: 'Seu dispositivo ainda não é compatível com o ClawHost Go.',
        downloadFailed: 'Falha no download!',
        downloadStarted: 'Download iniciado.',
        appleSilicon: 'Apple Silicon',
        intel: 'Intel',
        chooseMacArch: 'Qual Mac você tem?',
        otherVersions: 'Outras versões',
        updateAvailable: 'Versão {{version}} disponível.',
        updateDownload: 'Baixar',
        updateDismiss: 'Depois',
        clawNotFound: 'Claw não encontrado!',
        clawNameAlreadyExists: 'Um claw com este nome já existe!',
        invalidSubdomain:
            'Subdomínio inválido. Use 3-20 letras minúsculas e números!',
        subdomainAlreadyInUse: 'Este subdomínio já está em uso!',
        clawDirectoryNotFound: 'Diretório do claw não encontrado!',
        noVersionInstalled:
            'Nenhuma versão do OpenClaw instalada. Vá até a aba Versões e instale uma primeiro!',
        failedToStartClaw: 'Falha ao iniciar o claw!',
        noVersionAssigned: 'Nenhuma versão do OpenClaw atribuída a este claw!',
        invalidAgentName: 'Nome de agente inválido!',
        invalidPath: 'Caminho inválido!',
        fileNotFound: 'Arquivo não encontrado!',
        purchasingNotAvailable: 'Compras não disponíveis no modo local!',
        exportFailed: 'Falha na exportação!',
        versionNotInstalled:
            'A versão {{version}} do OpenClaw não está instalada!',
        failedToStartProcess: 'Falha ao iniciar o processo: {{reason}}!',
        gatewayNotReady: 'O agente não ficou pronto a tempo!',
        processExitedImmediately:
            'O processo encerrou imediatamente. Logs:\n{{logs}}',
        processExitedImmediatelyNoLogs:
            'O processo encerrou imediatamente após iniciar!',
        processExitedWithCode:
            'O processo encerrou com o código {{code}}. Logs:\n{{logs}}',
        processExitedWithCodeNoLogs:
            'O processo encerrou com o código {{code}}!',
        processExitedUnexpectedly: 'O processo encerrou inesperadamente!',
        failedToInstallVersion:
            'Falha ao instalar a versão {{version}}: {{reason}}!',
        oauthCancelled: 'Autenticação cancelada!',
        diskFull: 'Sem espaço no dispositivo!',
        permissionDenied: 'Permissão negada!',
        networkTimeout: 'A solicitação de rede expirou!',
        failedToFetchLatestVersion: 'Falha ao buscar a versão mais recente!'
    },
    footer: {
        website: 'Site',
        copyrightName: 'ClawHost',
        copyrightRights: 'Todos os direitos reservados.',
        termsOfService: 'Termos de Serviço',
        privacyPolicy: 'Política de Privacidade',
        getInTouch: 'Entre em Contato',
        brandDescription:
            'Implante OpenClaw no seu próprio VPS com um clique. Privacidade total, recursos dedicados, sem infraestrutura compartilhada.',
        builtBy: 'Criado por',
        supportedBy: 'Apoiado por',
        product: 'Produto',
        howItWorks: 'Como Funciona',
        features: 'Recursos',
        pricing: 'Preços',
        faq: 'Perguntas',
        changelog: 'Changelog',
        compare: 'Comparação Completa',
        legalAndMore: 'Outros',
        affiliateProgram: 'Programa de afiliados',
        documentation: 'Documentação',
        productDescription:
            'Implante agentes OpenClaw e Hermes na nuvem ou localmente com um clique — crie, conecte e escale seus agentes de IA mais rápido com o ClawHost.',
        ariaGithub: 'GitHub',
        ariaX: 'X',
        ariaFacebook: 'Facebook',
        ariaInstagram: 'Instagram',
        ariaThreads: 'Threads',
        ariaYoutube: 'YouTube',
        ariaTiktok: 'TikTok'
    },
    errors: {
        somethingWentWrong: 'Algo deu errado!',
        couldNotLoadData:
            'Não foi possível carregar os dados. Por favor, tente novamente!',
        notFound: 'Página não encontrada!',
        pageNotFoundDescription:
            'A página que você está procurando não existe ou foi movida.',
        goToHomepage: 'Ir para a Página Inicial',
        failedToLoadAgents: 'Falha ao carregar os agents!',
        failedToLoadAgentsDescription:
            'Não foi possível carregar seus Agents. Verifique sua conexão e tente novamente!',
        failedToLoadSSHKeys: 'Falha ao carregar as chaves SSH!',
        failedToLoadSSHKeysDescription:
            'Não foi possível carregar suas chaves SSH. Verifique sua conexão e tente novamente!',
        failedToUpdateProfile: 'Falha ao atualizar o perfil!',
        failedToAddSSHKey: 'Falha ao adicionar chave SSH!',
        failedToCreateClaw: 'Falha ao criar o claw!',
        failedToLoadLocations:
            'Falha ao carregar localizações. Por favor, tente novamente!',
        failedToLoadPlans:
            'Falha ao carregar planos. Por favor, tente novamente!',
        invalidPlan: 'Plano selecionado inválido!',
        invalidLocation: 'Por favor, selecione uma localização!',
        failedToGenerateKeyPair:
            'Falha ao gerar par de chaves. Por favor, gere as chaves localmente!',
        unableToLoadPricing:
            'Não foi possível carregar os preços. Por favor, tente novamente mais tarde!',
        noPasswordAvailable: 'Nenhuma senha disponível para este claw!'
    },
    api: {
        missingRequiredFields: 'Campos obrigatórios ausentes!',
        agentNotFound: 'Agent não encontrado!',
        agentRenamed: 'Agent renomeado com sucesso.',
        agentEmojiUpdated: 'Emoji do agente atualizado.',
        failedToUpdateEmoji: 'Falha ao atualizar emoji!',
        invalidAgentName:
            'O nome do agent deve ter entre 1 e {{max}} caracteres!',
        userNotFound: 'Usuário não encontrado!',
        sshKeyNotFound: 'Chave SSH não encontrada!',
        pendingAgentNotFound: 'Agent pendente não encontrado!',
        agentNotScheduledForDeletion:
            'O agent não está agendado para exclusão!',
        agentDeletionAlreadyPassed: 'A data de exclusão já passou!',
        agentLimitReached:
            'Você atingiu o limite de {{max}} agents. Entre em contato com o suporte para aumentar este limite!',
        sshKeyLimitReached:
            'Você atingiu o limite de {{max}} chaves SSH. Entre em contato com o suporte para aumentar este limite!',
        volumeSizeInvalid:
            'O tamanho do volume deve estar entre {{min}} e {{max}} GB!',
        paymentNotConfigured: 'Pagamento não configurado para este plano!',
        invalidSshKeyFormat: 'Formato de chave pública SSH inválido!',
        sshKeyInUse: 'Esta chave SSH está sendo usada por um ou mais agents!',
        inputTooLong: 'A entrada excede o comprimento máximo permitido!',
        invalidEmailFormat: 'Formato de e-mail inválido!',
        plusAddressingNotAllowed:
            'Endereçamento com "+" não é permitido para login por e-mail!',
        invalidRedirectUrl: 'URL de redirecionamento inválida!',
        fileTooLarge:
            'O conteúdo do arquivo excede o tamanho máximo permitido!',
        nameAndKeyRequired: 'Nome e chave pública são obrigatórios!',
        nameTooLong: 'O nome deve ter {{max}} caracteres ou menos!',
        noBillingAccount: 'Nenhuma conta de faturamento encontrada!',
        orderIdRequired: 'ID do pedido é obrigatório!',
        orderNotFound: 'Pedido não encontrado!',
        emailRequired: 'E-mail é obrigatório!',
        redirectUrlRequired: 'URL de redirecionamento é obrigatória!',
        invalidWebhook: 'Webhook inválido!',
        failedToStartAgent: 'Falha ao iniciar o agent!',
        failedToStopAgent: 'Falha ao parar o agent!',
        failedToRestartAgent: 'Falha ao reiniciar o agent!',
        failedToDeleteAgent: 'Falha ao excluir o agent!',
        failedToCreateAgent: 'Falha ao criar o agent!',
        invalidProvider: 'Provedor inválido!',
        providerNotAllowed: 'Este provedor não está disponível no momento!',
        invalidPlan: 'Plano selecionado inválido!',
        planBelowMinimumMemory:
            'Este plano não atende ao requisito mínimo de memória!',
        invalidLocation: 'Localização selecionada inválida!',
        planNotAvailableAtLocation:
            'Este plano não está disponível na localização selecionada!',
        failedToSyncAgent: 'Falha ao sincronizar o status do servidor!',
        failedToProvisionAgent: 'Falha ao provisionar o agent!',
        failedToInitiatePurchase: 'Falha ao iniciar a compra!',
        failedToCancelDeletion: 'Falha ao cancelar a exclusão!',
        failedToHardDeleteAgent: 'Falha ao excluir permanentemente o agent!',
        failedToCancelScheduledDeletion:
            'Falha ao cancelar a exclusão agendada!',
        failedToCreateSshKey: 'Falha ao criar chave SSH!',
        failedToDeleteSshKey: 'Falha ao excluir chave SSH!',
        failedToUpdateProfile: 'Falha ao atualizar o perfil!',
        failedToGetProfile: 'Falha ao obter o perfil!',
        failedToGetInvoice: 'Falha ao obter a fatura!',
        failedToGetCustomerPortal: 'Falha ao obter o portal do cliente!',
        failedToGetBillingHistory: 'Falha ao obter o histórico de faturamento!',
        failedToGetStats: 'Falha ao obter as estatísticas!',
        affiliateFetched: 'Affiliate info fetched successfully.',
        failedToGetAffiliate: 'Failed to get affiliate info!',
        invalidPeriod: 'Filtro de período inválido!',
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
        failedToFetchLocations: 'Falha ao buscar localizações!',
        failedToFetchPlans: 'Falha ao buscar planos!',
        failedToFetchVolumePricing: 'Falha ao buscar preços de volumes!',
        failedToFetchPlanAvailability:
            'Falha ao buscar disponibilidade de planos!',
        failedToSendEmail: 'Falha ao enviar e-mail!',
        failedToGetVersion: 'Falha ao obter a versão!',
        failedToGetVersions: 'Falha ao obter as versões!',
        failedToInstallVersion: 'Falha ao instalar a versão!',
        installVersionSuccess: 'Versão instalada com sucesso.',
        invalidVersion: 'Formato de versão inválido!',
        outdatedVersion:
            'Esta versão está desatualizada e não pode ser instalada!',
        failedToGetDiagnostics: 'Falha ao conectar à instância!',
        failedToGetDiagnosticsDescription:
            'Não foi possível obter os diagnósticos. A instância pode estar offline ou iniciando.',
        failedToGetLogs: 'Falha ao carregar os logs!',
        failedToGetLogsDescription:
            'Não foi possível obter os logs desta instância. Por favor, tente novamente mais tarde.',
        failedToReinstallAgent: 'Falha ao reinstalar a instância!',
        reinstallSuccess: 'Instância reinstalada com sucesso.',
        reinstallRateLimited:
            'Você só pode reinstalar uma vez a cada 24 horas. Entre em contato com a equipe caso queira remover este limite.',
        subdomainRateLimited:
            'Você só pode alterar seu subdomínio uma vez a cada 24 horas. Entre em contato com a equipe caso queira remover este limite.',
        subdomainUpdated: 'Subdomínio atualizado com sucesso.',
        invalidSubdomain:
            'Subdomínio inválido. Use 3-20 letras minúsculas e números!',
        subdomainAlreadyInUse: 'Este subdomínio já está em uso!',
        subdomainNotSupported: 'Este tipo de agente não usa subdomínio.',
        agentBusy: 'O agent está sendo provisionado ou excluído no momento!',
        reinstallGatewayNotResponding:
            'Reinstalação concluída, mas o gateway ainda não está respondendo. Pode precisar de mais tempo para iniciar.',
        failedToRepairAgent: 'Failed to repair the instance!',
        repairSuccess: 'Instance repaired successfully.',
        repairGatewayNotResponding:
            'Repair applied but gateway is not responding yet. It may need more time to start.',
        failedToExportAgent: 'Falha ao exportar dados do agent!',
        agentNotReady: 'O agent não está pronto para exportação!',
        exportRateLimited:
            'Este agent foi exportado recentemente. Aguarde antes de exportar novamente!',
        failedToListFiles: 'Falha ao listar arquivos da instância!',
        failedToReadFile: 'Falha ao ler o arquivo!',
        failedToUpdateFile: 'Falha ao salvar o arquivo!',
        invalidFilePath: 'Caminho de arquivo inválido!',
        fileNotEditable: 'Este tipo de arquivo não pode ser editado!',
        invalidJsonConfig: 'JSON inválido!',
        fileSaveSuccess: 'Arquivo salvo.',
        rateLimitExceeded: 'Aguarde antes de solicitar outro código!',
        otpExpiredOrNotFound:
            'Código expirado ou não encontrado. Por favor, solicite um novo!',
        otpMaxAttemptsReached:
            'Muitas tentativas falhas. Por favor, solicite um novo código!',
        otpInvalidCode: 'Código inválido. Por favor, tente novamente!',
        licenseAlreadyPurchased: 'Licença já adquirida!',
        licenseNotAvailable: 'Produto de licença não disponível!',
        licenseCheckoutCreated: 'Checkout de licença criado.',
        failedToPurchaseLicense: 'Falha ao criar checkout de licença!',
        internalServerError: 'Ocorreu um erro interno!',
        invalidCredentials: 'Credenciais inválidas!',
        accountLinked: 'Conta vinculada com sucesso.',
        webhookProcessingFailed: 'Falha no processamento do webhook!',
        adminAccessDenied: 'Acesso de administrador necessário!',
        agentsFetched: 'Agents obtidos com sucesso.',
        agentFetched: 'Agent obtido com sucesso.',
        agentStarsFetched: 'Estrelas do agente obtidas com sucesso.',
        agentSynced: 'Agent sincronizado com sucesso.',
        agentStarted: 'Agent iniciado com sucesso.',
        agentStopped: 'Agent parado com sucesso.',
        agentRestarted: 'Agent reiniciado com sucesso.',
        agentCreated: 'Agent criado com sucesso.',
        agentDeleted: 'Agent excluído com sucesso.',
        agentDeletionScheduled: 'Exclusão do agent agendada.',
        agentDeletionCancelled: 'Exclusão do agent cancelada.',
        agentHardDeleted: 'Agent excluído permanentemente.',
        pendingAgentCancelled: 'Compra cancelada.',
        failedToCancelPendingAgent: 'Falha ao cancelar a compra!',
        agentPurchaseInitiated: 'Compra iniciada com sucesso.',
        sshKeysFetched: 'Chaves SSH obtidas com sucesso.',
        sshKeyCreated: 'Chave SSH criada com sucesso.',
        sshKeyDeleted: 'Chave SSH excluída com sucesso.',
        profileFetched: 'Perfil obtido com sucesso.',
        profileUpdated: 'Perfil atualizado com sucesso.',
        statsFetched: 'Estatísticas obtidas com sucesso.',
        billingHistoryFetched: 'Histórico de faturamento obtido com sucesso.',
        invoiceFetched: 'Fatura obtida com sucesso.',
        customerPortalFetched: 'URL do portal do cliente obtida com sucesso.',
        plansFetched: 'Planos obtidos com sucesso.',
        locationsFetched: 'Localizações obtidas com sucesso.',
        volumePricingFetched: 'Preços de volumes obtidos com sucesso.',
        planAvailabilityFetched:
            'Disponibilidade de planos obtida com sucesso.',
        diagnosticsFetched: 'Diagnósticos obtidos com sucesso.',
        metricsFetched: 'Métricas obtidas com sucesso.',
        failedToGetMetrics: 'Falha ao obter métricas do servidor!',
        overviewFetched: 'Visão geral obtida com sucesso.',
        failedToGetOverview: 'Falha ao obter visão geral do gateway!',
        overviewUnsupported:
            'Esta versão do OpenClaw não suporta o recurso de visão geral!',
        passwordRotated: 'Senha root rotacionada com sucesso.',
        failedToRotatePassword: 'Falha ao rotacionar a senha root!',
        gatewayTokenRotated: 'Token de gateway rotacionado com sucesso.',
        failedToRotateGatewayToken: 'Falha ao rotacionar o token de gateway!',
        sshKeyUpdated: 'Chave SSH atualizada com sucesso.',
        failedToUpdateSSHKey: 'Falha ao atualizar a chave SSH!',
        invalidPassword: 'A senha deve ter entre {{min}} e {{max}} caracteres!',
        invalidGatewayToken:
            'O token do gateway deve ter entre {{min}} e {{max}} caracteres!',
        enablePreviewSuccess: 'Modo de visualização ativado com sucesso.',
        failedToEnablePreview: 'Falha ao ativar o modo de visualização!',
        logsFetched: 'Logs obtidos com sucesso.',
        filesFetched: 'Arquivos obtidos com sucesso.',
        fileFetched: 'Arquivo obtido com sucesso.',
        otpSent: 'Código enviado com sucesso.',
        otpVerified: 'Código verificado com sucesso.',
        webhookReceived: 'Webhook recebido.',
        unauthorized: 'Não autorizado!',
        invalidToken: 'Token inválido!',
        notFound: 'Não encontrado!',
        healthOk: 'API em execução.',
        featureVersionUnsupported:
            'Este recurso não é suportado na versão {{version}}. Atualize o OpenClaw ou use o Terminal para gerenciar manualmente.',
        invalidAuthMethod: 'Método de autenticação inválido!',
        authMethodNotConnected:
            'Este método de autenticação não está conectado!',
        authMethodConnected: 'Método de autenticação conectado com sucesso.',
        authMethodDisconnected:
            'Método de autenticação desconectado com sucesso.',
        failedToConnectAuthMethod: 'Falha ao conectar método de autenticação!',
        failedToDisconnectAuthMethod:
            'Falha ao desconectar método de autenticação!',
        featureEmailsDisabled:
            'Os e-mails de recursos estão atualmente desativados.',
        featureEmailsSent: 'E-mails de recursos enviados com sucesso.',
        featureEmailsFailed: 'Falha ao enviar e-mails de recursos!',
        invalidFeatureKey: 'Chave de recurso inválida!',
        adminUsersFetched: 'Usuários obtidos com sucesso.',
        failedToGetAdminUsers: 'Falha ao obter os usuários!',
        adminUserDetailFetched: 'Detalhes do usuário obtidos com sucesso.',
        failedToGetAdminUserDetail: 'Falha ao obter os detalhes do usuário!',
        adminUserUpdated: 'Usuário atualizado.',
        failedToUpdateAdminUser: 'Falha ao atualizar o usuário!',
        adminStatsFetched: 'Estatísticas obtidas.',
        failedToGetAdminStats: 'Falha ao obter as estatísticas!',
        adminAnalyticsFetched: 'Análise obtida com sucesso.',
        failedToGetAdminAnalytics: 'Falha ao obter análise!',
        adminBillingFetched: 'Faturamento obtido com sucesso.',
        failedToGetAdminBilling: 'Falha ao obter faturamento!',
        adminAgentsFetched: 'Agents obtidos.',
        failedToGetAdminAgents: 'Falha ao obter os agents!',
        adminSSHKeysFetched: 'Chaves SSH obtidas.',
        failedToGetAdminSSHKeys: 'Falha ao obter as chaves SSH!',
        adminVolumesFetched: 'Volumes obtidos.',
        failedToGetAdminVolumes: 'Falha ao obter os volumes!',
        adminReferralsFetched: 'Referrals fetched.',
        failedToGetAdminReferrals: 'Failed to fetch referrals!',
        adminPendingAgentsFetched: 'Pending agents fetched.',
        failedToGetAdminPendingAgents: 'Failed to fetch pending agents!',
        adminExportsFetched: 'Exports fetched.',
        adminEmailsFetched: 'Emails fetched.',
        failedToGetAdminEmails: 'Failed to fetch emails!'
    },
    emails: {
        otpSubject: 'Seu código de login no ClawHost',
        otpPreview: 'Seu código de login no ClawHost: {{code}}',
        otpHeading: 'Seu código de login é:',
        otpExpiry:
            'O código expira em 10 minutos. Se não foi você, ignore este email.',
        featureFooter:
            'Você está recebendo isso porque possui uma conta no ClawHost.',
        features: {
            terminal: {
                subject: 'Você sabia? Você tem um terminal web',
                preview: 'Acesse seu servidor diretamente pelo navegador',
                tag: 'Terminal Web',
                heading: 'Seu servidor está a um clique de distância',
                description:
                    'Acesse seu servidor diretamente pelo navegador com nosso terminal integrado. Sem necessidade de cliente SSH — basta abrir o ClawHost e começar a digitar comandos.',
                cta: 'Abrir Terminal'
            },
            logs: {
                subject: 'Você sabia? Logs em tempo real no seu painel',
                preview:
                    'Monitore os logs do seu servidor sem sair do navegador',
                tag: 'Logs em Tempo Real',
                heading: 'Veja o que seu servidor está fazendo',
                description:
                    'Monitore os logs do seu servidor em tempo real pelo painel do ClawHost. Diagnostique problemas, acompanhe implantações e depure suas aplicações sem sair do navegador.',
                cta: 'Ver Logs'
            },
            fileExplorer: {
                subject:
                    'Você sabia? Edite arquivos do servidor pelo navegador',
                preview: 'Navegue, leia e edite arquivos sem SSH',
                tag: 'Explorador de Arquivos',
                heading: 'Seus arquivos, na ponta dos dedos',
                description:
                    'Navegue, leia e edite arquivos no seu servidor diretamente pelo painel do ClawHost. Destaque de sintaxe, busca e salvamento instantâneo — sem necessidade de SSH.',
                cta: 'Abrir Explorador de Arquivos'
            },
            diagnostics: {
                subject: 'Você sabia? Verificações de saúde integradas',
                preview: 'Monitore a saúde do seu servidor pelo painel',
                tag: 'Diagnósticos',
                heading: 'Saiba que seu servidor está saudável',
                description:
                    'Execute diagnósticos no seu claw para verificar o status dos serviços, uso de memória e disponibilidade de portas. Identifique problemas antes que se tornem graves.',
                cta: 'Executar Diagnósticos'
            },
            sshKeys: {
                subject: 'Você sabia? Gerencie chaves SSH pelo ClawHost',
                preview: 'Gere e gerencie pares de chaves SSH no painel',
                tag: 'Chaves SSH',
                heading: 'Chaves SSH, simplificadas',
                description:
                    'Gere pares de chaves SSH, copie chaves públicas e baixe chaves privadas — tudo pelo painel do ClawHost. Atribua chaves a claws para acesso seguro.',
                cta: 'Gerenciar Chaves SSH'
            },
            exportConfig: {
                subject: 'Você sabia? Exporte a configuração do seu claw',
                preview:
                    'Baixe a configuração do seu claw como um arquivo portátil',
                tag: 'Exportar Config',
                heading: 'Leve sua configuração com você',
                description:
                    'Exporte a configuração e as definições do seu claw como um arquivo para download. Faça backup da sua configuração ou use-a para replicar seu ambiente.',
                cta: 'Exportar Configuração'
            },
            multiLanguage: {
                subject: 'Você sabia? O ClawHost fala o seu idioma',
                preview: 'Use o ClawHost em 14 idiomas',
                tag: 'Multilíngue',
                heading: 'ClawHost no seu idioma',
                description:
                    'Mude todo o painel do ClawHost para qualquer um dos 14 idiomas. De botões a mensagens de erro — totalmente traduzido.',
                cta: 'Mudar Idioma'
            },
            subdomain: {
                subject: 'Você sabia? Cada claw recebe seu próprio subdomínio',
                preview:
                    'Acesse seu claw de qualquer lugar com uma URL personalizada',
                tag: 'Subdomínio Personalizado',
                heading: 'Acesse de qualquer lugar',
                description:
                    'Cada claw recebe um subdomínio único para que você possa acessar sua instância OpenClaw de qualquer lugar. Sem redirecionamento de porta, sem redes locais — apenas uma URL.',
                cta: 'Ver Seu Subdomínio'
            },
            darkMode: {
                subject: 'Você sabia? O ClawHost tem modo escuro',
                preview: 'Alterne entre temas claro e escuro',
                tag: 'Modo Escuro',
                heading: 'Confortável para os olhos',
                description:
                    'Alterne entre temas claro e escuro no painel do ClawHost. Sua preferência é salva e aplicada automaticamente em cada visita.',
                cta: 'Experimentar Modo Escuro'
            },
            reinstall: {
                subject: 'Você sabia? Reinstale o OpenClaw com um clique',
                preview:
                    'Redefina sua instância OpenClaw sem perder seu servidor',
                tag: 'Reinstalar',
                heading: 'Recomeço, mesmo servidor',
                description:
                    'Reinstale o runtime do OpenClaw no seu servidor existente com um único clique. Seu servidor permanece intacto — apenas o OpenClaw recebe uma instalação limpa.',
                cta: 'Saiba Mais'
            },
            hermesAgentLaunch: {
                subject: 'O Agente Hermes chegou',
                preview: 'Implante agentes Hermes diretamente no ClawHost.',
                tag: 'Agente Hermes',
                heading: 'Agentes Hermes, agora no ClawHost',
                description:
                    'O Agente Hermes agora é compatível com o ClawHost. Inicie um claw alimentado por Hermes em minutos, configure provedores de modelos pela aba Arquivos e converse com ele pelo terminal integrado. Sem configuração extra, sem código de cola.',
                cta: 'Implantar Hermes'
            },
            clawHostGoLaunch: {
                subject: 'ClawHost Go chegou',
                preview: 'Um app de desktop nativo para rodar o OpenClaw localmente na sua máquina.',
                tag: 'ClawHost Go',
                heading: 'Seus claws, na sua mesa',
                description:
                    'ClawHost Go é um app de desktop nativo para macOS e Windows. Implante e gerencie instâncias OpenClaw diretamente na sua máquina — sem nuvem, sem assinatura, apenas uma licença única. Vem com terminal integrado, editor de arquivos, gerenciador de versões e DNS local sem configuração.',
                cta: 'Baixar ClawHost Go'
            },
            productHuntLaunch: {
                subject: 'Ajude-nos a lançar no Product Hunt',
                preview: 'Acabamos de lançar no Product Hunt. Seu voto importa.',
                tag: 'Lançamento no Product Hunt',
                heading: 'Estamos ao vivo no Product Hunt',
                description:
                    'Hoje lançamos o ClawHost no Product Hunt. Se ajudamos você a entregar mais rápido, um voto significaria muito. Como agradecimento, use o código PH10 para 10% de desconto no seu primeiro pedido.',
                cta: 'Votar no Product Hunt'
            },
            yearlyPlans: {
                subject: 'Você sabia? Economize com planos anuais',
                preview: 'Mude para faturamento anual e pague menos',
                tag: 'Planos Anuais',
                heading: 'Pague menos, ganhe mais',
                description:
                    'Mude para faturamento anual e economize na sua assinatura de claw. Mesmo ótimo serviço, preço menor — cancele a qualquer momento.',
                cta: 'Ver Planos'
            }
        }
    },
    auth: {
        signIn: 'Autenticação',
        signInDescription:
            'Entre na sua conta ClawHost para gerenciar suas instâncias OpenClaw.',
        signingIn: 'Autenticando...',
        verifyCode: 'Verificar Código',
        checkYourEmail: 'Verifique Seu Email',
        checkYourEmailHeading: 'Verifique seu email',
        codeSentTo: 'Enviamos um código de 6 dígitos para',
        signInToDeployOpenClaw:
            'Autentique-se para gerenciar e implantar agentes com um clique.',
        emailAddress: 'Endereço de Email',
        emailPlaceholder: 'exemplo@clawhost.cloud',
        continueWithEmail: 'Continuar com Email',
        otpDescription:
            'Enviaremos um código para você entrar. Sem necessidade de senha.',
        welcomeBack: 'Bem-vindo de volta.',
        resendIn: 'Reenviar em {{seconds}}s',
        resendCode: 'Reenviar código',
        changeEmail: 'Alterar email',
        invalidCode: 'Código inválido!',
        invalidEmailFormat: 'Por favor, insira um endereço de email válido!',
        plusAddressingNotAllowed:
            'Endereçamento com sinal de mais não é permitido para login por email!',
        or: 'ou',
        continueWithGoogle: 'Continuar com Google',
        continueWithGithub: 'Continuar com GitHub',
        agreementNotice: 'Ao continuar, você concorda com nossos',
        termsOfService: 'Termos de Serviço',
        andWord: 'e',
        privacyPolicy: 'Política de Privacidade'
    },
    account: {
        title: 'Conta',
        description:
            'Gerencie as configurações da sua conta ClawHost e informações de perfil.',
        accountSettings: 'Conta',
        manageYourAccount: 'Gerencie seu perfil e configurações da conta.',
        profileInformation: 'Informações do Perfil',
        profileDescription: 'Suas informações pessoais e nome de exibição.',
        noNameSet: 'Nenhum nome definido',
        joined: 'Entrou em',
        claws: 'claws',
        sshKeys: 'chaves',
        displayName: 'Nome de Exibição',
        enterYourName: 'Digite seu nome',
        emailAddress: 'Endereço de Email',
        emailNotEditable: 'O email não pode ser editado. Contate o suporte.',
        profileUpdatedSuccessfully: 'Perfil atualizado com sucesso.',
        billingAndSubscription: 'Pagamentos e Assinatura',
        billingAndSubscriptionDescription:
            'Gerencie seus métodos de pagamento, assinaturas e faturas.',
        viewBillingHistory:
            'Veja seu histórico de pagamentos, faturas e assinaturas.',
        aboutApp: 'Sobre',
        aboutAppDescription: 'Informações e versão do aplicativo.',
        appVersion: 'Versão do aplicativo',
        operatingSystem: 'Sistema operacional',
        architecture: 'Arquitetura',
        checkForUpdates: 'Verificar atualizações',
        checkNow: 'Verificar',
        updatesUpToDate: 'Você tem a versão mais recente.',
        updateReady: 'Versão {{version}} pronta para instalar.',
        restartToInstall: 'Reiniciar para instalar',
        connectedAccounts: 'Contas Conectadas',
        connectedAccountsDescription:
            'Gerencie os métodos de login vinculados à sua conta.',
        authEmail: 'Email',
        authGoogle: 'Google',
        authGithub: 'GitHub',
        authConnected: 'Conectado',
        authConnect: 'Conectar',
        authDisconnect: 'Desconectar',
        emailCannotBeDisconnected:
            'O email está sempre conectado como seu método principal de login.',
        providerConnected: '{{provider}} conectado com sucesso.',
        providerDisconnected: '{{provider}} desconectado com sucesso.',
        providerEmailMismatch:
            'Você só pode conectar contas que usam o mesmo endereço de email!',
        settings: 'Configurações',
        settingsDescription: 'Gerencie suas preferências do painel.',
        openLinksWindowed: 'Abrir links em visualização em janela',
        openLinksWindowedDescription:
            'Quando ativado, links externos abrem dentro do app em vez do navegador do sistema.'
    },
    billing: {
        date: 'Data',
        product: 'Produto',
        amount: 'Valor',
        status: 'Status',
        statusPaid: 'Pago',
        statusPending: 'Pendente',
        statusRefunded: 'Reembolsado',
        statusPartiallyRefunded: 'Parcialmente Reembolsado',
        billingReasonPurchase: 'Compra',
        billingReasonSubscriptionCreate: 'Nova Assinatura',
        billingReasonSubscriptionCycle: 'Renovação',
        billingReasonSubscriptionUpdate: 'Atualização de Assinatura',
        failedToLoadBilling: 'Falha ao carregar histórico de pagamentos!',
        downloadInvoice: 'Baixar fatura',
        invoiceCanceledNavigation:
            'Download da fatura interrompido porque você saiu da página.',
        failedToLoadInvoice: 'Falha ao carregar fatura!',
        couponApplied: 'Cupom: {{name}}',
        manageBilling: 'Gerenciar Pagamentos',
        failedToLoadPortal: 'Falha ao abrir portal de pagamentos!',
        portalCanceledNavigation:
            'Portal de pagamentos interrompido porque você saiu da página.'
    },
    license: {
        title: 'Licença',
        description: 'Gerencie sua licença OpenClaw.',
        pageTitle: 'Licença',
        pageDescription:
            'Adquira sua licença para hospedar instâncias OpenClaw localmente com nosso app Go.',
        planName: 'Licença ClawHost Go',
        oneTimePurchase: 'Compra única',
        price: '${{price}}',
        priceNote: 'Pague uma vez, tenha para sempre.',
        purchaseLicense: 'Adquirir Licença',
        purchasing: 'Redirecionando...',
        activated: 'Licença Ativa',
        activatedDescription:
            'Sua licença está ativa. Obrigado pelo seu apoio.',
        paymentSuccess:
            'Pagamento realizado com sucesso. Sua licença está ativa.',
        failedToPurchase: 'Falha ao iniciar o checkout!',
        featureUnlimitedClaws: 'OpenClaws Ilimitados',
        featureDevices: 'Dispositivos Ilimitados',
        featureUpdates: 'Atualizações Permanentes',
        featureSupport: 'Suporte Prioritário',
        featureCloud: 'Todos os Recursos da Nuvem, Localmente',
        whatsIncluded: 'O que está incluído',
        gateTitle: 'Licença Necessária',
        gateDescription:
            'Você precisa de uma Licença ClawHost Go para implantar e gerenciar instâncias OpenClaw localmente.'
    },
    network: {
        offline: 'Sem Conexão com a Internet',
        offlineDescription:
            'Você está offline no momento. Recursos que necessitam de acesso à internet estarão indisponíveis.'
    },
    dashboard: {
        title: 'Claws',
        description:
            'Visualize e gerencie suas instâncias OpenClaw implantadas. Inicie, pare, reinicie e monitore seus servidores VPS.',
        claw: 'claw',
        clawsPlural: 'claws',
        clawCountLabel: '{{count}} claws',
        clawCountLabelSingular: '{{count}} claw',
        newClaw: 'Novo Claw',
        searchAgents: 'Pesquisar agentes...',
        searchAgentsCount: 'Pesquisar {{count}} agentes...',
        noAgentsMatchSearch: 'Nenhum agente encontrado.',
        clawActions: 'Ações do claw',
        noAgentsYet: 'Sem Agentes',
        noAgentsDescription:
            'Nenhum agente implantado foi encontrado. Mas você pode implantar seu primeiro agente a qualquer momento a partir de $25/m. Só usar IA.',
        deleteClaw: 'Excluir Claw',
        deleteClawConfirmation: 'Tem certeza que deseja excluir',
        deleteClawWarning:
            'Sua assinatura será cancelada e o servidor será excluído ao final do período de cobrança atual. Você pode continuar usando até lá.',
        actionCannotBeUndone: 'Esta ação não pode ser desfeita.',
        start: 'Iniciar',
        startServer: 'Iniciar servidor',
        stop: 'Parar',
        stopServer: 'Parar servidor',
        restart: 'Reiniciar',
        restartServer: 'Reiniciar servidor',
        startClaw: 'Iniciar servidor',
        startClawConfirmation:
            'Isso iniciará o servidor e todos os seus processos. Faça isso apenas se necessário.',
        stopClaw: 'Parar servidor',
        stopClawConfirmation:
            'Isso encerrará todos os processos em execução no servidor, incluindo o OpenClaw. Nenhum dado será perdido. Faça isso apenas se necessário. Você pode iniciá-lo novamente a qualquer momento. Parar não interrompe a cobrança — exclua o servidor para parar de ser cobrado.',
        restartClaw: 'Reiniciar servidor',
        restartClawConfirmation:
            'Isso encerrará todos os processos em execução no servidor, incluindo o OpenClaw, e os reiniciará. Nenhum dado será perdido. Faça isso apenas se necessário.',
        copyPassword: 'Copiar Senha',
        copySshWithKey: 'Copiar SSH (com chave)',
        copySshWithPassword: 'Copiar SSH (com senha)',
        connect: 'Copiar Comando SSH',
        viewServerCredentials: 'Credenciais do Servidor',
        serverCredentials: 'Credenciais do Servidor',
        serverCredentialsDescription:
            'Use estas credenciais para conectar ao seu servidor via SSH.',
        sshCommand: 'Comando SSH',
        rootPassword: 'Senha Root',
        sshCommandCopied: 'Comando SSH copiado.',
        sshCommandWithPasswordCopied: 'Comando SSH com senha copiado.',
        passwordCopiedToClipboard:
            'Senha copiada para a área de transferência.',
        plan: 'Servidor',
        location: 'Localização',
        ip: 'IP',
        domain: 'Domínio',
        ipAddress: 'Endereço IP',
        port: 'Porta',
        subscription: 'Assinatura',
        history: 'Histórico',
        planCost: 'Plano',
        serverId: 'ID do Servidor',
        created: 'Criado',
        sshKey: 'Chave SSH',
        storage: 'Armazenamento',
        nextBilling: 'Próxima Cobrança',
        lastBilling: 'Última Cobrança',
        totalSpent: 'Total Gasto',
        version: 'Versão',
        gatewayToken: 'Token do Gateway',
        gatewayTokenDescription:
            'Use este token para autenticar com seu gateway',
        contactSupport: 'Contatar Suporte',
        scheduledForDeletion: 'Agendado para Exclusão',
        scheduledDeletionShort: 'Exclui em {{date}}',
        deletionDate: 'Este claw será excluído em {{date}}',
        deletionTooltip:
            'Agendado para exclusão em {{date}}. Para cancelar, use o menu.',
        pastDue: 'Pagamento falhou',
        deletionFailed: 'Exclusão falhou',
        pastDueDescription:
            'Seu pagamento falhou. Se não for resolvido em 14 dias, este claw será permanentemente excluído.',
        updatePayment: 'Atualizar pagamento',
        cancelDeletion: 'Cancelar Exclusão',
        cancelDeletionConfirmation:
            'Tem certeza? Sua assinatura permanecerá ativa e você continuará sendo cobrado. A instância continuará em execução.',
        deletionCancelled: 'Exclusão cancelada.',
        scheduleDeletion: 'Agendar Exclusão',
        resumeCheckout: 'Retomar Checkout',
        cancelPurchase: 'Cancelar Compra',
        hardDelete: 'Forçar Exclusão',
        hardDeleteClaw: 'Forçar Exclusão',
        hardDeleteConfirmation:
            'Tem certeza que deseja excluir este claw imediatamente? Você perderá o tempo restante do seu período de cobrança atual. Esta ação não pode ser desfeita.',
        diagnostics: 'Diagnósticos',
        diagnosticsDescription: 'Verifique a saúde da sua instância OpenClaw.',
        diagnosticsStatus: 'Status',
        diagnosticsLogs: 'Logs',
        diagnosticsRepair: 'Repair',
        diagnosticsRepairDescription:
            'Remove memory limits, apply latest service configuration, and restart the gateway. This fixes most common issues.',
        diagnosticsRepairSuccess: 'Instance repaired successfully.',
        diagnosticsRepairFailed:
            'Repair applied but gateway is not responding yet!',
        diagnosticsLoading: 'Conectando à instância...',
        diagnosticsNoLogs:
            'Nenhum log disponível. Inicie sua instância para gerar logs.',
        diagnosticsNoLogsHermesTitle: 'O gateway do Hermes não está em execução',
        diagnosticsNoLogsHermesDescription:
            'Na aba Terminal, execute `hermes gateway setup` para configurar plataformas, depois `sudo systemctl enable --now hermes-gateway` para iniciar a ponte.',
        diagnosticsIssueDetected: 'Um problema foi detectado na sua instância.',
        diagnosticsHealthy: 'Sua instância está funcionando normalmente.',
        diagnosticsPort: 'Porta 18789',
        diagnosticsMemory: 'Memória',
        logsDescription:
            'Últimas 100 linhas do log do seu gateway, atualizando automaticamente.',
        fileExplorer: 'Explorador de Arquivos',
        fileExplorerRoot: 'openclaw',
        fileExplorerDescription:
            'Navegue e edite seus arquivos de configuração do OpenClaw. Alterações incorretas podem quebrar sua instância.',
        fileExplorerSelectFile: 'Selecione um arquivo para ver seu conteúdo.',
        fileExplorerReadOnly: 'Somente leitura',
        fileExplorerSave: 'Salvar',
        fileExplorerSaved: 'Arquivo salvo.',
        fileExplorerSaveCanceledNavigation:
            'Salvamento do arquivo interrompido porque você saiu da página.',
        fileExplorerInvalidJson:
            'JSON inválido. Corrija os erros de sintaxe antes de salvar!',
        fileExplorerNoFiles: 'Nenhum arquivo encontrado',
        fileExplorerSearchFiles: 'Buscar arquivos...',
        fileExplorerNoSearchResults: 'Nenhum arquivo correspondente.',
        startFailed: 'Falha ao iniciar claw!',
        renameSuccess: 'Claw renomeado com sucesso.',
        renameFailed: 'Falha ao renomear claw!',
        renameInvalidChars: 'Apenas letras, números e hífens são permitidos!',
        reinstallInstance: 'Reinstalar Instância',
        reinstallClaw: 'Reinstalar Instância',
        reinstallClawConfirmation:
            'Isso reinstalará completamente o {{agentName}} nesta instância. Todas as configurações, agentes e dados serão redefinidos. Esta ação não pode ser desfeita. Continuar?',
        reinstallInstanceSuccess: 'Instância reinstalada com sucesso.',
        reinstallInstanceFailed: 'Falha ao reinstalar instância!',
        reinstallCanceledNavigation:
            'Reinstalação interrompida porque você saiu da página.',
        openControlPanel: 'Abrir Painel de Controle',
        exportData: 'Exportar Claw (.zip)',
        exportAgent: 'Exportar',
        exportAgentButton: 'Exportar dados',
        exportAgentTooltip:
            'Baixar este agente e todos os seus dados como arquivo .zip.',
        exportAgentInProgress:
            'A exportação pode levar alguns minutos para agents maiores.',
        exportStarted: 'Preparando exportação, isso pode levar um momento...',
        exportSuccess: 'Claw exportado com sucesso.',
        exportFailed: 'Falha ao exportar dados do claw!',
        exportCanceledNavigation:
            'Exportação cancelada porque você saiu da página.',
        scheduleDeletionCanceledNavigation:
            'Agendamento de exclusão interrompido porque você saiu da página.',
        cancelDeletionCanceledNavigation:
            'Cancelamento de exclusão interrompido porque você saiu da página.',
        hardDeleteCanceledNavigation:
            'Exclusão forçada interrompida porque você saiu da página.',
        exportRateLimited:
            'Você pode exportar novamente em {{minutes}} minutos.',
        exportRateLimitedOne: 'Você pode exportar novamente em 1 minuto.',
        configuringTooltip:
            'Isso pode levar algum tempo. Depende do OpenClaw, da localização do servidor e do DNS do Cloudflare.',
        paymentSuccess: 'Seu claw está sendo criado e configurado.',
        dnsSetupBanner:
            'Configure o DNS local para acessar seus claws via subdomínio.clawhost.',
        dnsSetupButton: 'Configurar DNS',
        dnsSetupSuccess: 'Resolvedor DNS configurado com sucesso.',
        dnsSetupError: 'Falha ao configurar resolvedor DNS!',
        userTab: 'Usuário',
        adminTab: 'Admin',
        adminTitle: 'Admin',
        adminDescription: 'Gerencie todos os claws da plataforma.',
        adminNoClaws: 'Nenhum claw na plataforma ainda.',
        adminAccessDenied: 'Você não tem permissão para acessar esta página.',
        owner: 'Proprietário',
        agentType: 'Agent',
        status: {
            running: 'Em Execução',
            stopped: 'Parado',
            starting: 'Iniciando',
            stopping: 'Parando',
            creating: 'Criando',
            configuring: 'Configurando',
            initializing: 'Preparando',
            migrating: 'Migrando',
            rebuilding: 'Reconstruindo',
            restarting: 'Reiniciando',
            unreachable: 'Inacessível',
            deleting: 'Excluindo',
            scheduledDeletion: 'Exclusão Agendada',
            awaitingPayment: 'Aguardando Pagamento',
            unknown: 'Desconhecido',
            checking: 'Verificando'
        },
        tabNotAvailableForAgent: 'Não disponível para este tipo de agente'
    },
    createClaw: {
        title: 'Implantar OpenClaw',
        description: 'Configure seu servidor e comece a construir com IA.',
        clawName: 'Nome',
        clawNamePlaceholder: 'ex. panda-acolhedor',
        clawNameInvalidChars: 'Apenas letras, números e hífens são permitidos!',
        autoGenerateNameHint: 'Deixe vazio para gerar um nome automaticamente.',
        agentType: 'Tipo de agente',
        agentTypeOpenClaw: 'OpenClaw',
        agentTypeHermes: 'Hermes',
        agentTypeOpenClawDescription: '{{count}} estrelas',
        agentTypeHermesDescription: '{{count}} estrelas',
        location: 'Localização',
        locationUnavailable: 'Indisponível',
        locationUnavailableForPlan: 'Indisponível',
        plan: 'Servidor',
        planUnavailable: 'Indisponível',
        planUnavailableForLocation: 'Não disponível nesta localização',
        advancedOptions: 'Opções Avançadas Opcionais',
        rootPassword: 'Senha Root',
        rootPasswordPlaceholder: 'Digite a senha ou gere uma',
        gatewayTokenPlaceholder: 'ex. a1b2c3d4e5f6...',
        autoGenerateGatewayTokenHint:
            'Gerado automaticamente se deixado vazio.',
        autoGeneratePasswordHint: 'Opcional. Sem senha se deixado vazio.',
        regeneratePassword: 'Regenerar senha',
        gatewayToken: 'Gateway Token',
        regenerateToken: 'Regenerar token',
        tokenCopied: 'Token copiado.',
        sshKeyOptional: 'Chave SSH',
        noSshKeyPasswordOnly: 'Sem chave SSH (apenas senha)',
        noSshKeysConfigured: 'Nenhuma chave SSH configurada',
        addSshKeyForPasswordlessLogin:
            'Adicione uma chave SSH para login sem senha',
        additionalStorageOptional: 'Armazenamento Adicional',
        volumeStorage: 'Armazenamento de Volume',
        vpsServer: 'Servidor VPS',
        openClawPreinstalled: 'OpenClaw Pré-instalado',
        storageWithSize: 'Armazenamento',
        billingInterval: 'Cobrança',
        monthly: 'Mensal',
        yearly: 'Anual',
        yearlySaveBadge: '2 Meses Grátis',
        yearlySavings: 'Você economiza',
        totalMonthly: 'Total mensal',
        totalYearly: 'Total anual',
        creating: 'Criando...',
        proceedToPayment: 'Pagar ${{amount}} para Implantar',
        agreementNotice: 'Ao implantar, você concorda com nossos',
        selectServerToContinue: 'Selecione um servidor para continuar',
        selectLocationToContinue: 'Selecione uma localização para continuar',
        clawCreated: 'Claw criado.',
        clawCreating: 'Criando seu claw, isso pode levar um momento...',
        assigning: 'Atribuindo...',
        rootPasswordSaveThis: 'Senha Root (salve isso!)',
        sshCommandUsingKey: 'Comando SSH (usando sua chave)',
        sshCommandWithPassword: 'Comando SSH (com senha)',
        passwordCopied: 'Senha copiada.',
        planSpec: '{{cpu}} vCPU / {{memory}} GB RAM / {{disk}} GB SSD',
        volumeUnit: 'GB',
        volumeMin: '0 GB',
        volumeMax: '500 GB'
    },
    sshKeys: {
        title: 'Chaves SSH',
        description:
            'Gerencie suas chaves SSH para acesso seguro e sem senha às suas instâncias OpenClaw.',
        key: 'chave ssh',
        keys: 'chaves ssh',
        keyCountDescription: '{{count}} {{label}}',
        addSshKey: 'Adicionar Chave SSH',
        howSshKeysWork: 'Como conectar uma chave SSH?',
        step1: 'Gere um par de chaves SSH no seu computador (ou use um existente).',
        step2: 'Adicione a chave pública aqui.',
        step3: 'Selecione a chave ao criar uma nova instância.',
        step4: 'Conecte com',
        step4Command: 'ssh root@your-server-ip',
        step4Suffix: '- sem necessidade de senha.',
        noSshKeysYet: 'Sem Chaves SSH',
        noSshKeysDescription:
            'Nenhuma chave SSH adicionada na sua conta. Você pode adicioná-las a qualquer momento e conectar com seus claws implantados.',
        deleteConfirmation: 'Tem certeza que deseja excluir esta chave SSH?',
        deleteKey: 'Excluir Chave SSH',
        deleteKeyConfirmation: 'Tem certeza que deseja excluir',
        sshKeyAddedSuccessfully: 'Chave SSH adicionada com sucesso.',
        addSshKeyModalTitle: 'Adicionar Chave SSH',
        addSshKeyModalDescription:
            'Adicione uma chave SSH para autenticação sem senha',
        iHaveAnSshKey: 'Chave Existente',
        generateNewKey: 'Criar Nova',
        name: 'Nome',
        namePlaceholder: 'ex: meu-macbook',
        publicKey: 'Chave Pública',
        publicKeyPlaceholder: 'ssh-rsa AAAA... ou ssh-ed25519 AAAA...',
        publicKeyHint: 'Encontre sua chave pública em',
        publicKeyPath1: '~/.ssh/id_ed25519.pub',
        publicKeyPathOr: 'ou',
        publicKeyPath2: '~/.ssh/id_rsa.pub',
        important: 'Importante:',
        dontHaveSshKey: 'Não tem uma chave SSH? Gere uma:',
        sshKeygenCommand: 'ssh-keygen -t ed25519 -C "your-email@example.com"',
        keyName: 'Nome da Chave',
        keyNamePlaceholder: 'Minha Chave Gerada',
        importantAfterGenerating:
            'Após gerar, você deve baixar e salvar sua chave privada. Não podemos recuperá-la se você perdê-la!',
        generateKeyPair: 'Gerar Par de Chaves',
        orGenerateLocallyRecommended: 'Ou gere localmente (recomendado)',
        runThisInYourTerminal: 'Execute isso no seu terminal:',
        thenSwitchToIHave:
            'Depois mude para "Chave Existente" e cole a chave pública.',
        savePrivateKeyNow:
            'Salve sua chave privada AGORA! Baixe-a antes de fechar esta janela. Você não poderá vê-la novamente.',
        privateKeyKeepSecret: 'Chave Privada (mantenha em segredo!)',
        downloadPrivateKey: 'Baixar Chave Privada',
        publicKeyWillBeSaved: 'Chave Pública (será salva)',
        savePublicKey: 'Salvar Chave Pública'
    },
    landing: {
        title: 'Implante OpenClaw. Um clique. Pronto.',
        description:
            'Implante OpenClaw no seu próprio VPS com um clique. Hospedagem na nuvem auto-hospedável com acesso root completo, localizações globais e preços transparentes.',
        badge: 'OpenClaw e Hermes na nuvem',
        tutorialBadge: 'Como começar no Cloud',
        tutorialVideoThumbnail: 'Miniatura do vídeo tutorial do ClawHost',
        clawhostGoLogoAlt: 'ClawHost Go',
        trustMrrBadgeAlt: 'TrustMRR verified revenue badge',
        macosPreviewTime: '22:12',
        heroTitle1: 'Implante OpenClaw.',
        heroTitle2: 'Um clique. Pronto.',
        heroDescription:
            'Implante agentes OpenClaw e Hermes na nuvem ou localmente com um clique — construa, conecte e escale seus agentes de IA mais rápido com o ClawHost.',
        selfHost: 'Código Aberto',
        startingPrice: 'A partir de',
        locations: 'Localizações',
        servers: 'Servidores',
        zeroCount: 'Zero',
        zeroConfig: 'Zero Configuração',
        features: 'Recursos',
        whyClawHost: 'Recursos Completos',
        featuresDescription:
            'Por que vale a pena experimentar, os recursos falam por si.',
        zeroConfigDescription:
            'Pule horas de configuração de servidor e OpenClaw. Vem pré-instalado e pronto em minutos.',
        ownedData: '100% Dados Próprios',
        ownedDataDescription:
            'Seu próprio servidor, seus dados. Sem infraestrutura compartilhada, sem logs, sem terceiros. Online 24/7.',
        fullSpeed: 'Velocidade Total',
        fullSpeedDescription:
            'Recursos VPS dedicados significam sem limitação, largura de banda total e internet ultrarrápida.',
        globalLocations: 'Localizações Globais',
        globalLocationsDescription:
            'Implante OpenClaw e Hermes em várias regiões globais e escolha a localização mais próxima de você.',
        fullSshAccess: 'Acesso SSH Direto',
        fullSshAccessDescription:
            'Acesse o terminal do seu servidor diretamente pela plataforma. Sem necessidade de clientes SSH externos.',
        secure: 'Seguro',
        secureDescription:
            'Protegido por padrão contra vulnerabilidades SSL, malware e ameaças de segurança comuns.',
        payAsYouGo: 'Preços Simples',
        payAsYouGoDescription:
            'Preços baseados no que você precisa. Sem contas altas forçadas para servidores de baixa qualidade. Cancele a qualquer momento.',
        bringYourCredits: 'Traga seus próprios créditos',
        bringYourCreditsDescription:
            'Use sua própria chave de API Anthropic ou assinatura Claude. Pague à Anthropic diretamente — sem markup.',
        customSubdomains: 'Acesso Online',
        customSubdomainsDescription:
            'Esqueça redes locais. Acesse seu OpenClaw com segurança de qualquer lugar com um subdomínio.',
        autoUpdates: 'Controle de Versão',
        autoUpdatesDescription:
            'Mude para qualquer versão do OpenClaw ou Hermes com um único clique. Fique sempre atualizado ou volte quando necessário.',
        openclawControl: 'Monitoramento de servidores',
        openclawControlDescription:
            'Monitore seus servidores OpenClaw e Hermes com métricas, logs e diagnósticos em tempo real.',
        clawHostControl: 'Acesso completo ao servidor',
        clawHostControlDescription:
            'Terminal no navegador, explorador de arquivos, logs, diagnósticos e gerenciamento de versões — tudo no seu painel.',
        multipleClaws: 'Múltiplos agentes',
        multipleClawsDescription:
            'Implante e gerencie múltiplos agentes OpenClaw e Hermes a partir de um único painel. Escale conforme cresce.',
        pricing: 'Preços',
        simpleTransparentPricing: 'Preços Simples e Transparentes',
        pricingDescription:
            'Escolha um plano que se adapte às suas necessidades. Sem taxas ocultas.',
        planColumn: 'Servidor',
        vCpuColumn: 'vCPU',
        ramColumn: 'RAM',
        storageColumn: 'Armazenamento',
        monthlyColumn: 'Preço',
        tierShared: 'vCPU Compartilhada',
        tierDedicated: 'vCPU Dedicada',
        tierArm: 'Ampere (ARM)',
        tierRegular: 'Desempenho Regular',
        tierHighPerformance: 'Alto Desempenho',
        tierHighFrequency: 'Alta Frequência',
        recommended: 'Recomendado',
        perMonth: '/mês',
        perYear: '/ano',
        pricePerMonth: '${{price}}/mo',
        pricePerYear: '${{price}}/yr',
        volumePricePerMonth: '+${{price}}/mo',
        startingPriceValue: '${{price}}/mo',
        deploy: 'Implantar',
        select: 'Selecionar',
        selectPlanLabel: 'Selecionar plano {{plan}}',
        deployPlanLabel: 'Implantar plano {{plan}}',
        openClawPreinstalled: 'OpenClaw Pré-Instalado',
        unlimitedBandwidth: 'Largura de Banda Ilimitada',
        rootSshAccess: 'Acesso Root SSH Completo',
        onlineAllDay: 'Online 24/7',
        showAllPlans: 'Ver todos os planos',
        simplePricing: 'Simplificado',
        planStarter: 'Starter',
        planStarterDesc: 'Para projetos pessoais e experimentos',
        planGrowth: 'Growth',
        planGrowthDesc: 'Para cargas de trabalho de produção',
        planPro: 'Pro',
        planProDesc: 'Para empresas em crescimento',
        planBusiness: 'Business',
        planBusinessDesc: 'Para operações em larga escala',
        featureCpu: '{{count}} vCPU',
        featureRam: '{{count}} GB RAM',
        featureDisk: '{{count}} GB SSD',
        choosePlan: 'Escolher plano',
        mostPopular: 'Mais popular',
        featurePreinstalled: 'Agente pré-instalado',
        featureBandwidth: 'Largura de banda ilimitada',
        featureSsh: 'Acesso SSH root',
        featureUptime: 'Online 24/7',
        featureDedicatedCpu: 'CPU dedicada',
        featureEmailSupport: 'Suporte por e-mail',
        fastInternet: 'Internet rápida',
        emailSupport: 'Suporte por e-mail',
        faqTitle: 'Perguntas',
        frequentlyAskedQuestions: 'Perguntas Comuns',
        faqDescription: 'Todas as perguntas frequentes, respondidas.',
        faq1Question: 'O que é o ClawHost?',
        faq1Answer:
            'ClawHost é uma plataforma criada para tornar OpenClaw e Hermes acessíveis a todos. Permite que tanto usuários não técnicos quanto desenvolvedores os executem sem gerenciar infraestrutura. Nós cuidamos dos servidores, uptime, segurança e manutenção — você só usa seus agentes.',
        faq2Question: 'O que é o OpenClaw?',
        faq2Answer:
            'OpenClaw é uma camada de acesso seguro auto-hospedada para suas ferramentas e serviços de IA. Vem pré-configurado para segurança e desempenho, então você pode implantá-lo e conectar instantaneamente.',
        faqHermesQuestion: 'O que é Hermes?',
        faqHermesAnswer:
            'Hermes é um agente de IA autônomo com navegação web, gerenciamento de calendário, raciocínio multimodelo e automação de navegador. Vem pré-instalado ao lado do OpenClaw em cada servidor ClawHost.',
        faq3Question:
            'Como isso é diferente de outras ferramentas de IA ou plataformas hospedadas?',
        faq3Answer:
            'Diferente de ferramentas de IA hospedadas, o ClawHost oferece um servidor real com OpenClaw e Hermes instalados. Você possui a infraestrutura, controla tudo e não fica limitado por uma plataforma ou modelo compartilhado.',
        faq4Question: 'Preciso de conhecimento técnico?',
        faq4Answer:
            'Não. Nós cuidamos de toda a infraestrutura, configuração e manutenção. Você pode configurar e gerenciar OpenClaw pela interface, enquanto Hermes funciona via comandos simples de terminal — sem tocar em servidores ou infraestrutura.',
        faq5Question: 'Quais localizações estão disponíveis?',
        faq5Answer:
            'Oferecemos múltiplas localizações de servidor no mundo todo, incluindo EUA, Europa e Ásia. Você pode implantar OpenClaw ou Hermes em vários servidores em diferentes regiões se necessário.',
        faq6Question: 'Quanto custa?',
        faq6Answer:
            'Os preços dependem do servidor que você selecionar. Com várias opções de servidores, de básico a alto desempenho, você escolhe o que se adapta às suas necessidades e orçamento.',
        faq7Question: 'Posso acessar meu agente diretamente por um link?',
        faq7Answer:
            'OpenClaw é acessível por uma URL de subdomínio com interface web completa. Hermes roda via comandos de terminal por SSH — sem link, mas com controle total pelo terminal do seu servidor.',
        comparison: 'Comparação',
        comparisonTitle: 'Como Somos Diferentes',
        comparisonDescription:
            'Existe apenas uma plataforma comparável, e nossa abordagem foca em servidores reais e propriedade total em vez de limitações.',
        others: 'Outros',
        comparisonOpenClawUs: 'Acesso completo ao OpenClaw',
        comparisonOpenClawOthers: 'Apenas chat, sem gerenciamento',
        comparisonPricingUs: 'Preços transparentes, especificações claras',
        comparisonPricingOthers: 'Especificações ocultas, preços confusos',
        comparisonOwnershipUs: 'Você é dono total do seu servidor',
        comparisonOwnershipOthers: 'Você não é dono de nada',
        comparisonSubdomainUs: 'Acesso via subdomínio',
        comparisonSubdomainOthers: 'Acesso apenas por plataformas de terceiros',
        comparisonInfraUs: 'Infraestrutura sob demanda',
        comparisonInfraOthers: 'Servidores limitados',
        comparisonDataUs: 'Seja dono dos seus dados',
        comparisonDataOthers: 'Não é dono dos seus dados',
        comparisonMultipleUs: 'Múltiplos agentes OpenClaw e Hermes',
        comparisonMultipleOthers: 'Apenas um OpenClaw',
        comparisonOpenSourceUs: 'Totalmente código aberto',
        comparisonOpenSourceOthers: 'Código fechado',
        comparisonExportUs: 'Exporte OpenClaw e Hermes para qualquer lugar',
        comparisonExportOthers: 'Dependência de fornecedor',
        comparisonProvidersUs: 'Múltiplos provedores de servidor',
        comparisonProvidersOthers: 'Apenas um provedor',
        comparisonVersionUs: 'Troca de versão com um clique',
        comparisonVersionOthers: 'Apenas atualizações manuais',
        comparisonTerminalUs: 'Terminal web integrado',
        comparisonTerminalOthers: 'Cliente SSH necessário',
        seeFullComparison: 'Ver Comparação Completa',
        comparisonCtaText:
            'Comparamos com SimpleAgent, MyAgent.ai e mais — recurso por recurso.',
        selfHostInstead: 'Auto-Hospedar'
    },
    blog: {
        readingTime: '{{minutes}} min de leitura',
        ctaTitle: 'Implante OpenClaw e Hermes com um clique',
        ctaDescription:
            'Obtenha um servidor dedicado com OpenClaw e Hermes pré-instalados. Acesso root completo, localizações globais e pronto em minutos. É seu o tempo todo. A partir de $25.',
        ctaDeploy: 'Implantar agente',
        ctaGitHub: 'Ver no GitHub'
    },
    changelog: {
        title: 'Changelog',
        description:
            'Acompanhe atualizações, novos recursos e melhorias do ClawHost.',
        subtitle:
            'Todas as atualizações, novos recursos e melhorias do ClawHost.',
        release14Date: '1 de abril de 2026',
        release14Title:
            'Migração para Hetzner, sistema de afiliados e novos idiomas',
        release14Description:
            'Centralização de toda a infraestrutura no Hetzner para os melhores preços e desempenho, lançamento do sistema de afiliados com 15% de comissão, adição de 10 novos idiomas e construção de ferramentas internas para suporte estável de versões.',
        release14Feature1:
            'Remoção de DigitalOcean e Vultr — toda a infraestrutura agora funciona exclusivamente no Hetzner com capacidade infinita e sem limitações do provedor',
        release14Feature2:
            'Sistema de afiliados permitindo aos utilizadores ganhar 15% de comissão em cada pedido indicado',
        release14Feature3:
            '10 novos idiomas adicionados: chinês, hindi, árabe, russo, japonês, turco, italiano, polonês, holandês e português',
        release14Feature4:
            'Ferramentas internas para fornecer suporte estável de funcionalidades para versões atuais do OpenClaw, sem suporte para versões anteriores',
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
        release15Date: '11 de abril de 2026',
        release15Title: 'Simplificação e subdomínios personalizados',
        release15Description:
            'Simplificação da plataforma migrando funcionalidades gerenciadas para o OpenClaw, remoção da visualização playground e introdução de subdomínios personalizados alteráveis.',
        release15Feature1:
            'Simplificação e migração de funcionalidades gerenciadas para o OpenClaw, sem mais chat, agentes, canais, variáveis e habilidades do ClawHost',
        release15Feature2:
            'Enhanced file explorer with full editing support, 100+ language syntax highlighting, and export as .zip',
        release15Feature3:
            'Removed playground view for a cleaner, more focused dashboard experience',
        release15Feature4:
            'Changeable custom subdomains, update your claw subdomain to your loved one',
        release12Date: '14 de março de 2026',
        release12Title: 'Planos Anuais, Modo de Voz e Mais',
        release12Description:
            'Assinaturas anuais com 2 meses grátis, modo de voz, reinstalação de instância e uma página inicial para o ClawHost Go.',
        release12Feature1:
            'Página inicial do ClawHost Go, hospedagem local com ClawHost',
        release12Feature2:
            'Suporte a assinatura anual com 2 meses grátis ao assinar anualmente',
        release12Feature3:
            'Modo de Voz para interagir com os agentes OpenClaw hospedados no ClawHost',
        release12Feature4:
            'Reinstale o OpenClaw na sua instância para recomeçar, disponível uma vez por dia',
        release11Date: '28 de fevereiro de 2026',
        release11Title:
            'Texto-para-Fala, Terminal, Abas de Chat e Explorador de Arquivos',
        release11Description:
            'Ouça respostas dos agentes com texto-para-fala, interaja com seu VPS diretamente pelo terminal, navegue nos chats mais rápido com abas na barra lateral e explore arquivos com o explorador de arquivos melhorado.',
        release11Feature1:
            'Texto-para-fala nas mensagens dos agentes no playground',
        release11Feature2:
            'Terminal para interagir com suas instâncias VPS diretamente pelo painel',
        release11Feature3:
            'Abas de visualização na barra lateral do chat para fácil acesso e navegação',
        release11Feature4:
            'Melhorias no explorador de arquivos com barra de busca para pesquisar arquivos',
        release11Feature5:
            'Corrigido timestamps de mensagens não refletindo o tempo real',
        release10Date: '23 de fevereiro de 2026',
        release10Title:
            'Solicitações de Recursos, Explorador de Arquivos e Correções',
        release10Description:
            'Solicitações de recursos da comunidade, suporte expandido de edição de arquivos e várias correções de bugs.',
        release10Feature1:
            'Solicitações de recursos gerenciadas e publicadas automaticamente por agentes OpenClaw',
        release10Feature3:
            'Corrigido troca de provedor de modelo não refletindo e ainda usando o modelo inicial',
        release10Feature4:
            'Diversas melhorias e correções de bugs em toda a plataforma',
        release10Feature5:
            'Arquivos TypeScript, Markdown e texto simples agora são editáveis no Explorador de Arquivos',
        release9Date: '21 de fevereiro de 2026',
        release9Title: 'Comparações, Refatoração do Playground e Mais',
        release9Description:
            'Páginas de comparação com concorrentes, reestruturação do playground, suporte multilíngue e melhorias gerais de desempenho.',
        release9Feature1: 'Suporte a temas claro e escuro',
        release9Feature2:
            'Suporte multilíngue com inglês, francês, espanhol e alemão',
        release9Feature3:
            'Páginas de comparação com análises completas contra concorrentes',
        release9Feature4:
            'Versões do OpenClaw, atualize com um clique ou instale qualquer versão instantaneamente',
        release9Feature5:
            'Refatoração da estrutura do recurso playground e simplificações',
        release9Feature6:
            'Melhorias de desempenho, estabilidade e responsividade',
        release8Date: '18 de fevereiro de 2026',
        release8Title: 'Tema Claro, Desempenho e Estabilidade',
        release8Description:
            'Suporte a tema claro, melhorias de desempenho e experiência, e aprimoramentos de estabilidade e responsividade.',
        release8Feature1: 'Modos de tema claro, escuro e sistema',
        release8Feature2: 'Melhorias de desempenho e experiência',
        release8Feature3: 'Aprimoramentos de estabilidade e responsividade',
        release7Date: '16 de fevereiro de 2026',
        release7Title: 'Refatoração do Chat e Entrada de Voz',
        release7Description:
            'Grandes melhorias no chat e playground com interação por voz e anexos de arquivos para agentes.',
        release7Feature1:
            'Refatoração do chat e playground para uma experiência mais suave e responsiva',
        release7Feature2:
            'Interação por voz com chats, grave e transcreva fala diretamente no navegador',
        release7Feature4:
            'Visualização e uso de anexos para agentes, envie imagens e documentos no chat',
        release6Date: '16 de fevereiro de 2026',
        release6Title: 'Chat com Agentes',
        release6Description:
            'Controle total sobre seus agentes OpenClaw. Gerencie e converse com tudo diretamente pelo painel.',
        release6Feature3:
            'Converse com seus agentes pelo playground, interaja com qualquer agente em tempo real',
        release6Feature4:
            'Entre com Google ou GitHub, autenticação rápida e segura sem códigos por email',
        release1Date: '8 de fevereiro de 2026',
        release1Title: 'Lançamento Inicial',
        release1Description:
            'O primeiro lançamento oficial do ClawHost. Implante OpenClaw no seu próprio VPS com um clique.',
        release1Feature1: 'Implantação do OpenClaw com um clique',
        release1Feature2:
            'Painel para gerenciar claws, iniciar, parar, reiniciar e excluir instâncias',
        release1Feature3:
            '18 planos de servidor com vCPU dedicada, RAM e opções de armazenamento',
        release1Feature4: '6 localizações de servidor nos EUA, Europa e Ásia',
        release1Feature5:
            'Gerenciamento de chaves SSH para acesso ao servidor sem senha',
        release1Feature6:
            'Suporte a armazenamento de volume adicional até 10 TB',
        release1Feature7:
            'Autenticação por link mágico, sem necessidade de senhas',
        release1Feature8: 'Acesso online ao OpenClaw via subdomínios seguros',
        release1Feature9:
            'Integração de pagamento com preços transparentes por servidor',
        release1Feature10:
            'Histórico de faturamento e gerenciamento de faturas',
        release1Feature11:
            'Auto-provisionamento com OpenClaw pré-instalado e configurado',
        release2Date: '8 de fevereiro de 2026',
        release2Title: 'Changelog e Mais',
        release2Description:
            'Uma nova forma de ficar atualizado sobre tudo no ClawHost.',
        release2Feature1:
            'Página de changelog para acompanhar todas as atualizações e lançamentos da plataforma',
        release3Date: '10 de fevereiro de 2026',
        release3Title: 'Insights do Servidor',
        release3Description:
            'Maior visibilidade e controle sobre seus servidores, direto do painel.',
        release3Feature1:
            'Logs do servidor em tempo real transmitidos diretamente no painel',
        release3Feature2:
            'Diagnósticos do servidor com reparo automatizado com um clique para problemas de serviço',
        release3Feature3:
            'Explorador de arquivos integrado e editor JSON para arquivos de configuração do servidor',
        release4Date: '14 de fevereiro de 2026',
        release4Title: 'Agentes e Exportação de Dados',
        release4Description:
            'Playground de agentes, gerenciamento multi-agente e exportação portátil de dados para suas instâncias OpenClaw.',
        release4Feature1:
            'Playground de agentes com um clique e visão geral, adicione e gerencie múltiplos agentes',
        release4Feature2: 'Exporte seu OpenClaw como um arquivo zip portátil',
        release4Feature3:
            'Playground interativo com visualização baseada em grafos de Claws e agentes',
        release4Feature4:
            'Removida alternância de visualização em grade e lista em favor de um layout de painel unificado'
    },
    clawDetail: {
        noAgentsYet: 'Sem Agentes',
        noAgentsDescription:
            'Implante seu primeiro Agente para interagir com ele.',
        collapseSidebar: 'Recolher barra lateral',
        expandSidebar: 'Expandir barra lateral',
        selectClaw: 'Selecione um Agente',
        selectClawDescription:
            'Escolha um Agente na barra lateral para ver seus detalhes.',
        closeDetails: 'Fechar',
        tabOverview: 'Visão geral',
        overviewTitle: 'Visão geral do Gateway',
        overviewGatewayStatus: 'Status do Gateway',
        overviewOnline: 'Online',
        overviewOffline: 'Offline',
        overviewVersion: 'Versão',
        overviewUptime: 'Tempo de atividade',
        overviewSessions: 'Sessões',
        overviewSessionsCount: '{{count}} ativas',
        overviewNoSessions: 'Sem sessões ativas',
        overviewSessionName: 'Sessão',
        overviewSessionModel: 'Modelo',
        overviewSessionMessages: 'Mensagens',
        overviewSessionLastActive: 'Última atividade',
        overviewModels: 'Modelos',
        overviewError: 'Falha ao carregar visão geral!',
        overviewErrorDescription:
            'Não foi possível conectar ao gateway OpenClaw. Verifique se a instância está em execução.',
        overviewUnsupportedTitle: 'Visão geral não suportada',
        overviewUnsupportedDescription:
            'Sua versão do OpenClaw não suporta o recurso de visão geral. Atualize para a versão mais recente.',
        overviewHermesTitle: 'Hermes é executado no terminal',
        overviewHermesDescription:
            'Hermes é um agente TUI — abra a aba Terminal e execute `hermes` para iniciar uma sessão. As abas Arquivos e Versões permitem editar a configuração e atualizar.',
        overviewHermesOpenTerminal: 'Abrir terminal',
        viewDocs: 'Ver docs',
        overviewUptimeDays: '{{days}}d {{hours}}h {{minutes}}m',
        overviewUptimeHours: '{{hours}}h {{minutes}}m',
        overviewUptimeMinutes: '{{minutes}}m',
        overviewService: 'Serviço',
        overviewServiceActive: 'Ativo',
        overviewServiceInactive: 'Inativo',
        overviewPort: 'Port 18789',
        overviewPortOpen: 'Escutando',
        overviewPortClosed: 'Fechado',
        overviewReady: 'Pronto',
        overviewNotReady: 'Não pronto',
        overviewConfiguration: 'Configuração',
        overviewBrowser: 'Browser',
        overviewCommands: 'Comandos Shell',
        overviewTools: 'Ferramentas',
        overviewSubdomain: 'Subdomínio',
        overviewInstanceStatus: 'Status da instância',
        overviewModel: 'Model',
        overviewAgents: 'Agentes',
        overviewMemoryStatus: 'Memória',
        overviewHeartbeat: 'Heartbeat',
        overviewEvents: 'Eventos',
        overviewProbes: 'Probes',
        overviewPlugins: 'Plugins',
        tabPreview: 'Visualizar',
        previewNotEnabled:
            'A visualização não está habilitada para esta instância.',
        previewNotEnabledDescription:
            'Habilite a visualização para incorporar seu agente diretamente no painel.',
        previewEnable: 'Habilitar visualização',
        previewEnabling: 'Habilitando...',
        previewEnabled: 'Visualização habilitada.',
        previewEnableFailed: 'Falha ao habilitar visualização!',
        previewEnableCanceledNavigation:
            'Habilitação da visualização interrompida porque você saiu da página.',
        previewError: 'Falha ao carregar visualização.',
        previewErrorDescription: 'O agente pode estar offline ou inacessível.',
        previewRetry: 'Tentar novamente',
        tabInfo: 'Info',
        tabLogs: 'Logs',
        tabTerminal: 'Terminal',
        terminalConnecting: 'Conectando ao terminal...',
        terminalDisconnected: 'Terminal desconectado.',
        terminalError: 'Falha ao conectar ao terminal!',
        terminalReconnect: 'Reconectar',
        tabDisabledConfiguring:
            'Disponível quando a instância terminar de configurar.',
        tabDisabledAwaitingPayment:
            'Disponível quando o pagamento for processado.',
        creatingTitle: 'Configurando seu agente',
        creatingDescription:
            'Isso geralmente leva um ou dois minutos. Você pode fechar esta página com segurança e voltar mais tarde.',
        creatingDescriptionLocal:
            'Geralmente leva um instante. Mantenha o app aberto até terminar.',
        configuringTitle: 'Instalando OpenClaw',
        configuringTitleHermes: 'Instalando Hermes',
        loadingTipHermes1:
            'Hermes é um agente TUI — abra a aba Terminal após inicializar para conversar com ele.',
        loadingTipHermes2:
            'Configure os provedores de modelo (OpenRouter, Anthropic, etc.) em ~/.hermes/.env pela aba Arquivos.',
        loadingTipHermes3:
            'Conecte Telegram, Discord ou Slack pelo Terminal com `hermes gateway install`.',
        configuringDescription:
            'Isso geralmente leva um ou dois minutos. Você pode fechar esta página com segurança e voltar mais tarde.',
        configuringDescriptionLocal:
            'Instalando o runtime do agente localmente. Mantenha o app aberto até terminar.',
        awaitingPaymentTitle: 'Aguardando pagamento',
        awaitingPaymentDescription:
            'Conclua o pagamento para iniciar o provisionamento do seu agente. Esta reserva expira em uma hora.',
        awaitingPaymentAction: 'Concluir pagamento',
        loadingTip1:
            'Você sabia que pode executar múltiplos agentes em um único OpenClaw?',
        loadingTip2: 'Você sabia que o OpenClaw é open-source?',
        loadingTip3:
            'ClawHost é o primeiro projeto a permitir hospedagem OpenClaw com um clique.',
        loadingTip4:
            'Você pode acessar seu agente via SSH ou pelo terminal integrado.',
        loadingTip5: 'Seu agente recebe automaticamente um subdomínio próprio.',
        loadingTip6:
            'Você pode personalizar o ícone e o nome do seu agente a qualquer momento em Configurações.',
        loadingTip7: 'Todo o tráfego para seu agente é criptografado com TLS.',
        loadingTip8:
            'Você pode monitorar o uso de CPU, memória e disco na aba Monitor.',
        loadingTip9:
            'Precisa de ajuda? Junte-se à nossa comunidade no Discord.',
        loadingTip10:
            'Você pode exportar toda a configuração do seu agente como backup.',
        loadingTip11:
            'Chaves SSH podem ser aplicadas a instâncias em execução sem reinstalar.',
        loadingTip12:
            'Você pode rotacionar sua senha root e token de gateway na aba Segurança.',
        loadingTip13:
            'ClawHost suporta servidores em múltiplas regiões na Europa e nos EUA.',
        tabSettings: 'Configurações',
        featureVersionUnsupported: '{{feature}} não suportado em {{version}}',
        featureVersionUnsupportedDescription:
            'Não suportamos o gerenciamento de {{feature}} com esta versão pela nossa interface. Você ainda pode gerenciar via SSH, Terminal ou o painel de controle do OpenClaw.',
        featureVersionUnsupportedButton: 'Ir para Versões',
        featureVersionUnsupportedSupported: 'Versões suportadas:',
        featureVersionUnsupportedNewer: 'versões mais recentes',
        tabVersions: 'Versões',
        tabFiles: 'Explorador de arquivos',
        tabMonitor: 'Monitor',
        tabVolumes: 'Armazenamento',
        tabSecurity: 'Segurança',
        securitySSHKey: 'Chave SSH',
        securitySSHKeyHint:
            'Aplicada à instância em execução e usada ao reinstalar.',
        securityPassword: 'Senha root',
        securityGatewayToken: 'Token de gateway',
        securityHostKey: 'Impressão digital da chave do host',
        securityRotatePassword: 'Rotacionar senha',
        securityRotateToken: 'Rotacionar token',
        securityRandomize: 'Aleatorizar',
        securitySavePassword: 'Salvar senha',
        securitySaveToken: 'Salvar token',
        volumesTitle: 'Volumes',
        volumesCount: '{{count}} volumes',
        volumesEmpty: 'Nenhum volume anexado.',
        volumesEmptyDescription:
            'Esta instância não possui volumes de armazenamento persistentes.',
        volumesReadOnly:
            'O armazenamento só pode ser adicionado durante a criação da instância. Para adicionar armazenamento, implante uma nova instância com o tamanho de volume desejado, ou entre em contato com a',
        volumesContactSupport: 'equipe de suporte',
        metricsTitle: 'Métricas do servidor',
        metricsLive: 'Ao vivo',
        metricsCpu: 'Uso de CPU',
        metricsMemory: 'Uso de memória',
        metricsDisk: 'Uso de disco',
        metricsNetwork: 'Rede',
        metricsLoadAvg: 'Carga média',
        metricsProcesses: 'Principais processos',
        metricsUptime: 'Tempo de atividade',
        metricsUsed: 'Usado',
        metricsAvailable: 'Disponível',
        metricsTotal: 'Total',
        metricsReceived: 'Recebido',
        metricsSent: 'Enviado',
        metricsLoad1: '1 min',
        metricsLoad5: '5 min',
        metricsLoad15: '15 min',
        metricsProcessPid: 'PID',
        metricsProcessUser: 'Usuário',
        metricsProcessCpu: 'CPU %',
        metricsProcessMem: 'MEM %',
        metricsProcessCommand: 'Comando',
        metricsError: 'Falha ao carregar métricas!',
        metricsErrorDescription:
            'Não foi possível conectar ao servidor para obter as métricas. Verifique se a instância está em execução.',
        metricsAutoRefresh:
            'Atualização automática a cada {{seconds}} segundos',
        tabBilling: 'Billing',
        billingEmpty: 'No billing history for this instance.',
        tabServer: 'Servidor',
        serverIpAddress: 'Endereço IP',
        reinstallDescription:
            'Reinstalar {{agentName}} neste servidor. Isso redefinirá a instalação mas preservará seus dados. Faça isso apenas se necessário.',
        versionsSearch: 'Buscar versões...',
        versionsSearchCount: 'Pesquisar {{count}} versões...',
        versionsEmpty: 'Nenhuma versão encontrada',
        versionsEmptyDescription: 'Nenhuma versão corresponde à sua busca.',
        versionsErrorDescription:
            'Falha ao carregar versões. Verifique sua conexão e tente novamente!',
        versionsChangelog: 'Ver changelogs no npm',
        versionCurrent: 'Atual',
        versionLatest: 'Mais Recente',
        updateAvailable: 'A newer version of OpenClaw is available',
        updateAvailableDescription:
            'A new version of OpenClaw ({{version}}) is available for your instance.',
        updateAvailableDescriptionHermes:
            'A new version of Hermes ({{version}}) is available for your instance.',
        goToVersions: 'Go to Versions',
        versionInstall: 'Instalar',
        versionInstalling: 'Instalando...',
        versionInstallSuccess: 'Versão {{version}} instalada com sucesso.',
        versionInstallFailed: 'Falha ao instalar versão!',
        installVersionCanceledNavigation:
            'Instalação da versão interrompida porque você saiu da página.',
        versionDownloads: '{{count}} downloads',
        versionChangelog: 'Changelog',
        versionOutdated: 'Desatualizado',
        versionSupported: 'Compatível',
        versionSupportedTooltip:
            'Esta versão permite operar o OpenClaw pela interface',
        versionInstallConfirmTitle: 'Instalar Versão {{version}}',
        versionInstallConfirmDescription:
            'Trocar de versão pode causar comportamento inesperado ou exigir configuração manual adicional, especialmente para versões mais recentes que ainda não foram totalmente verificadas. Tem certeza que deseja prosseguir?',
        settingsIcon: 'Ícone',
        settingsIconDescription: 'Clique para alterar o ícone do agente.',
        settingsIconRandomize: 'Aleatório',
        settingsIconRemove: 'Remover ícone',
        settingsBackground: 'Fundo',
        settingsBackgroundReset: 'Redefinir',
        settingsName: 'Nome',
        settingsNamePlaceholder: 'Digite o nome do claw',
        settingsNameDescription: 'Apenas letras, números e hífens.',
        subdomain: 'Subdomínio',
        subdomainPlaceholder: 'Digite o subdomínio',
        subdomainDescription:
            'Letras minúsculas e números, {{min}}-{{max}} caracteres.',
        subdomainInvalid:
            'Use {{min}}-{{max}} letras minúsculas e números apenas.',
        subdomainUpdated: 'Subdomínio atualizado com sucesso.',
        subdomainUpdateFailed: 'Falha ao atualizar subdomínio!',
        subdomainInUse: 'Este subdomínio é usado por outro claw!',
        settingsDetails: 'Detalhes',
        settingsDangerZone: 'Zona de perigo',
        settingsDangerZoneDescription:
            'Sua instância será excluída no final do seu período de faturamento atual.',
        settingsDangerZoneDescriptionLocal:
            'Isso excluirá permanentemente o agente e todos os seus arquivos.',
        settingsScheduledDeletionDescription:
            'Agendada para exclusão em {{date}}. Cancele para manter sua instância em execução e sua assinatura ativa.',
        settingsSave: 'Salvar',
        settingsSaving: 'Salvando...',
        settingsUpdated: 'Configurações atualizadas.',
        settingsUpdateFailed: 'Falha ao atualizar configurações!',
        saveCanceledNavigation:
            'Salvamento interrompido porque você saiu da página.',
        savePasswordCanceledNavigation:
            'Salvamento da senha interrompido porque você saiu da página.',
        saveGatewayTokenCanceledNavigation:
            'Salvamento do token do gateway interrompido porque você saiu da página.',
        saveSSHKeyCanceledNavigation:
            'Salvamento da chave SSH interrompido porque você saiu da página.',
        mockLogStarting: 'Iniciando agente OpenClaw...',
        mockLogLoadingModel: 'Carregando modelo: claude-sonnet-4-5',
        mockLogAgentReady: 'Agente pronto na porta 3000',
        mockLogConnected: 'Conectado ao gateway',
        mockLogsContent:
            '2026-02-14T10:23:41Z {{starting}}\n2026-02-14T10:23:42Z {{loadingModel}}\n2026-02-14T10:23:43Z {{agentReady}}\n2026-02-14T10:23:44Z {{connected}}\n2026-02-14T10:24:01Z {{requestReceived}}\n2026-02-14T10:24:03Z {{responseSent1}}\n2026-02-14T10:25:12Z {{requestReceived}}\n2026-02-14T10:25:14Z {{responseSent2}}\n2026-02-14T10:26:30Z {{healthCheck}}',
        mockLogRequestReceived: 'Requisição recebida: /chat',
        mockLogResponseSent1: 'Resposta enviada (1.2s)',
        mockLogResponseSent2: 'Resposta enviada (1.8s)',
        mockLogHealthCheck: 'Verificação de saúde aprovada'
    },
    privacy: {
        title: 'Política de Privacidade',
        description:
            'Saiba como o ClawHost coleta, usa e protege seus dados pessoais.',
        lastUpdated: 'Última atualização: 14 de março de 2026',
        introTitle: '1. Introdução',
        introText:
            'ClawHost ("nós", "nosso" ou "nos") está comprometido em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você usa nosso Serviço.',
        authTitle: '2. Autenticação',
        authText:
            'ClawHost usa o Google Firebase Authentication para gerenciar contas de usuários. Você pode entrar com email, Google ou GitHub. Ao usar estes métodos de login, você concorda com seus respectivos termos e políticas de privacidade. Estes provedores podem coletar dados básicos como seu endereço de email, nome e informações do dispositivo. Nós apenas armazenamos seu endereço de email e nome de exibição.',
        collectTitle: '3. Informações que Coletamos',
        collectText: 'Coletamos informações das seguintes formas:',
        personalInfoTitle: 'Informações Pessoais',
        personalInfoEmail:
            'Endereço de email (para criação de conta e comunicação)',
        personalInfoName: 'Nome (opcional, para personalização)',
        personalInfoPayment:
            'Informações de pagamento (processadas com segurança por provedores terceiros)',
        serverInfoTitle: 'Informações do Servidor',
        serverInfoConfig: 'Configuração e status do servidor',
        serverInfoIp: 'Endereço IP e localização do servidor',
        serverInfoResources: 'Alocação de recursos (CPU, RAM, armazenamento)',
        useTitle: '4. Como Usamos Suas Informações',
        useText: 'Usamos as informações coletadas para:',
        useProvide: 'Fornecer e manter nosso Serviço',
        useTransactions:
            'Processar transações e enviar informações de faturamento',
        useNotices: 'Enviar avisos e atualizações importantes',
        useSupport: 'Responder a solicitações de suporte ao cliente',
        useAnalyze:
            'Monitorar e analisar padrões de uso para melhorar nosso Serviço',
        useFraud: 'Detectar e prevenir fraudes ou abusos',
        sharingTitle: '5. Compartilhamento e Divulgação de Dados',
        sharingText:
            'Não vendemos suas informações pessoais. Podemos compartilhar informações com:',
        sharingProviders:
            'Provedores de serviços que auxiliam na operação do nosso Serviço (ex.: provedores de infraestrutura em nuvem)',
        sharingLegal:
            'Autoridades legais quando exigido por lei ou para proteger nossos direitos',
        sharingBusiness:
            'Parceiros comerciais em caso de fusão, aquisição ou venda de ativos',
        securityTitle: '6. Segurança dos Dados',
        securityText:
            'Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia, servidores seguros e avaliações regulares de segurança.',
        retentionTitle: '7. Retenção de Dados',
        retentionText:
            'Retemos suas informações pessoais enquanto sua conta estiver ativa ou conforme necessário para fornecer serviços. Podemos reter certas informações conforme exigido por lei ou para fins comerciais legítimos.',
        rightsTitle: '8. Seus Direitos',
        rightsText:
            'Dependendo da sua localização, você pode ter o direito de:',
        rightsAccess: 'Acessar seus dados pessoais',
        rightsCorrect: 'Corrigir dados incorretos',
        rightsDelete: 'Solicitar a exclusão dos seus dados',
        rightsObject: 'Opor-se ao processamento dos seus dados',
        rightsPortability: 'Portabilidade de dados',
        rightsWithdraw: 'Revogar consentimento a qualquer momento',
        cookiesTitle: '9. Cookies e Rastreamento',
        cookiesText:
            'Não usamos cookies. A autenticação é gerenciada pelo Firebase e não depende de cookies armazenados no seu navegador.',
        transfersTitle: '10. Transferências Internacionais de Dados',
        transfersText:
            'Suas informações podem ser transferidas e processadas em países diferentes do seu. Garantimos que salvaguardas apropriadas estejam em vigor para proteger seus dados de acordo com esta Política de Privacidade.',
        eligibilityTitle: '11. Elegibilidade',
        eligibilityText:
            'Nosso Serviço está disponível para qualquer pessoa. Não há restrições de idade para usar o ClawHost.',
        changesTitle: '12. Alterações nesta Política',
        changesText:
            'Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página e atualizando a data de "Última atualização".',
        contactTitle: '13. Fale Conosco',
        contactText:
            'Se você tiver perguntas sobre esta Política de Privacidade ou desejar exercer seus direitos, entre em contato conosco em'
    },
    terms: {
        title: 'Termos de Serviço',
        description:
            'Leia os termos e condições para usar os serviços do ClawHost.',
        lastUpdated: 'Última atualização: 14 de março de 2026',
        acceptanceTitle: '1. Aceitação dos Termos',
        acceptanceText:
            'Ao acessar e usar o ClawHost ("Serviço"), você aceita e concorda em estar vinculado aos termos e disposições deste acordo. Se você não concorda com estes termos, por favor não use nosso Serviço.',
        serviceTitle: '2. Descrição do Serviço',
        serviceText:
            'ClawHost oferece a implantação em um clique do OpenClaw e Hermes em servidores dedicados. Permitimos aos usuários implantar, gerenciar e acessar instâncias pré-configuradas do OpenClaw e Hermes com acesso root completo e recursos dedicados.',
        authTitle: '3. Autenticação',
        authText:
            'ClawHost usa o Google Firebase Authentication para gerenciar o login. Você pode autenticar com email, Google ou GitHub. Ao usar estes métodos, você concorda com os respectivos termos e políticas de privacidade do Google e GitHub. Estes provedores podem coletar informações básicas como seu endereço de email, nome e dados do dispositivo.',
        responsibilitiesTitle: '4. Responsabilidades do Usuário',
        responsibilitiesText: 'Você concorda em:',
        responsibilitiesAccurate:
            'Fornecer informações de registro precisas e completas',
        responsibilitiesSecurity:
            'Manter a segurança das credenciais da sua conta',
        responsibilitiesCompliance:
            'Usar o Serviço em conformidade com todas as leis aplicáveis',
        responsibilitiesLegal:
            'Não usar o Serviço para qualquer finalidade ilegal ou não autorizada',
        responsibilitiesAccess:
            'Não tentar obter acesso não autorizado a quaisquer sistemas ou redes',
        prohibitedTitle: '5. Usos Proibidos',
        prohibitedText: 'Você não pode usar nosso Serviço para:',
        prohibitedMalware:
            'Distribuir malware, vírus ou qualquer software prejudicial',
        prohibitedDos:
            'Realizar ataques de negação de serviço ou abuso de rede',
        prohibitedSpam: 'Enviar spam ou comunicações não solicitadas',
        prohibitedIllegal: 'Hospedar ou distribuir conteúdo ilegal',
        prohibitedIp:
            'Violar quaisquer direitos de terceiros incluindo propriedade intelectual',
        prohibitedMining: 'Minerar criptomoedas',
        prohibitedOther:
            'Quaisquer outras atividades ilegais ou prejudiciais que possamos determinar como inapropriadas a nosso critério',
        paymentTitle: '6. Pagamento e Faturamento',
        paymentText:
            'Os serviços são cobrados em uma base mensal ou anual fixa. Você pode alternar entre faturamento mensal e anual a qualquer momento, com a alteração entrando em vigor no início do seu próximo período de cobrança. Todos os pagamentos não são reembolsáveis. Quando você paga por um servidor, tem acesso a ele pelo período de cobrança completo. Se você cancelar, o cancelamento entra em vigor no final do período de cobrança atual. Os preços estão sujeitos a alterações, mas quaisquer mudanças se aplicarão apenas a claws recém-implantados e não afetarão os já implantados. A falta de pagamento pode resultar na suspensão ou encerramento da sua conta.',
        availabilityTitle: '7. Disponibilidade do Serviço',
        availabilityText:
            'Nos esforçamos para manter alta disponibilidade, mas não garantimos acesso ininterrupto ao Serviço. Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer parte do Serviço a qualquer momento com ou sem aviso prévio.',
        liabilityTitle: '8. Limitação de Responsabilidade',
        liabilityText:
            'Na máxima extensão permitida por lei, o ClawHost não será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, ou por qualquer perda de lucros ou receitas, incorridos direta ou indiretamente.',
        terminationTitle: '9. Rescisão',
        terminationText:
            'Podemos encerrar ou suspender sua conta e acesso ao Serviço imediatamente, sem aviso prévio, por conduta que acreditamos violar estes Termos ou que seja prejudicial a outros usuários, a nós ou a terceiros, ou por qualquer outro motivo.',
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
        changesToTermsTitle: '11. Alterações nos Termos',
        changesToTermsText:
            'Reservamo-nos o direito de modificar estes termos a qualquer momento. Notificaremos os usuários sobre quaisquer alterações materiais por email ou através do Serviço. O uso contínuo do Serviço após tais modificações constitui aceitação dos termos atualizados.',
        contactTitle: '12. Informações de Contato',
        contactText:
            'Se você tiver perguntas sobre estes Termos, entre em contato conosco em'
    },
    productHunt: {
        liveOn: 'Ao vivo no',
        productHunt: 'Product Hunt',
        celebrate: 'Apoie-nos e aproveite',
        discount: '10% de desconto',
        yourFirstMonth: 'no seu primeiro pedido',
        upvoteNow: 'Vote em Nós'
    },
    hermesBanner: {
        title: 'Hermes Agent',
        message:
            'Os agentes Hermes agora são suportados para implantação no ClawHost.'
    },
    compare: {
        title: 'Comparação',
        description:
            'Veja como o ClawHost se compara a outras plataformas de hospedagem OpenClaw.',
        badge: 'Comparação',
        feature: 'Plataforma',
        compareWith: 'Comparar com',
        lastUpdated: 'Última atualização: março de 2026',
        competitorClawHost: 'ClawHost',
        competitorLobsterFarm: 'LobsterFarm',
        competitorSimpleAgent: 'SimpleAgent',
        competitorMyAgentAi: 'MyAgent.ai',
        competitorQuickAgent: 'QuickAgent',
        categoryInfrastructure: 'Infraestrutura',
        categoryPricing: 'Preços e Faturamento',
        categoryDeployment: 'Implantação e Configuração',
        categoryManagement: 'Gerenciamento OpenClaw',
        categorySecurity: 'Dados e Segurança',
        categoryMonitoring: 'Monitoramento e Manutenção',
        categorySupport: 'Suporte e Plataforma',
        featureServerOwnership: 'Propriedade do servidor',
        featureProviderChoice: 'Escolha do provedor de nuvem',
        featureDedicatedResources: 'Recursos dedicados',
        featureRootAccess: 'Acesso root/SSH completo',
        featureServerLocations: 'Localizações de servidor',
        featureStartingPrice: 'Preço inicial',
        featureTransparentPricing: 'Preços transparentes',
        featurePowerfulServers: 'Servidores potentes, preço menor',
        featureLocationSelection: 'Selecione a localização do servidor',
        featureSubdomainAccess: 'Acesso por subdomínio',
        featureThemes: 'Temas claro e escuro',
        featureSetupTime: 'Tempo de configuração',
        featureOneClickDeploy: 'Implantação com um clique',
        featureMultipleInstances: 'Múltiplas instâncias',
        featureDataOwnership: 'Propriedade total dos dados',
        featureDataExport: 'Exportação de dados',
        featureBackups: 'Backups',
        featureSecurityHardening: 'Reforço de segurança',
        featureSslTls: 'SSL/TLS',
        featureOpenSource: 'Código aberto',
        featureAutoUpdates: 'Atualizações automáticas',
        featureDiagnostics: 'Diagnósticos em tempo real',
        featureLogStreaming: 'Streaming de logs',
        featureRepairTools: 'Ferramentas de reparo',
        featureSupportChannels: 'Canais de suporte',
        featureMultiLanguage: 'Interface multilíngue',
        featureDesktopApp: 'App desktop',
        featureOneClickVersion: 'Troca de versão com um clique',
        featureWebTerminal: 'Acesso ao terminal web',
        featureSocials: 'Redes sociais',
        dedicatedVps: 'VPS Dedicado',
        sharedContainers: 'Containers compartilhados',
        isolatedContainers: 'Containers isolados',
        cloudWorkspaces: 'Workspaces em nuvem',
        threeProviders: 'Cloud',
        singleProvider: 'Provedor único',
        fullyDedicated: 'Totalmente dedicado',
        shared: 'Compartilhado',
        fullRootSsh: 'Root completo + SSH',
        sshOnRequest: 'SSH sob solicitação',
        noAccess: 'Sem acesso',
        thirtyPlusLocations: '30+ localizações',
        limitedLocations: 'Limitado',
        fourLocations: '4 localizações',
        fromTwentyFiveMonth: 'A partir de $25/mês',
        aboutFortyFourMonth: '~$44/mês média',
        fromNineteenMonth: '$19–79/mês',
        nineteenMonth: '$19/mês',
        clearSpecsPricing: 'Especificações e preços claros',
        unclearPricing: 'Preços confusos',
        fixedTiers: '3 níveis fixos',
        creditBased: 'Baseado em créditos',
        minutes: 'Minutos',
        underOneMinute: 'Menos de 1 minuto',
        thirtySeconds: '30 segundos',
        instant: 'Instantâneo',
        noneRequired: 'Nenhum',
        minimal: 'Mínimo',
        unlimited: 'Ilimitado',
        singleInstance: 'Única',
        noMarketplace: 'Sem marketplace',
        appOnly: 'Apenas app',
        fullConfig: 'Configuração completa',
        limitedConfig: 'Limitada',
        zipExport: 'Exportação ZIP',
        serverTransfer: 'Transferência de servidor',
        noExport: 'Sem exportação',
        volumeStorage: 'Armazenamento de volume',
        noBackups: 'Sem backups',
        dailyBackups: 'Backups diários',
        included: 'Incluído',
        notIncluded: 'Não incluído',
        managed: 'Gerenciado',
        manual: 'Manual',
        appStore: 'App Store',
        liveMonitoring: 'Monitoramento ao vivo',
        liveLogs: 'Logs ao vivo',
        oneClickRepair: 'Reparo com um clique',
        emailGithub: 'Email, GitHub',
        humanSupport: 'Suporte humano',
        communityOnly: 'Apenas comunidade',
        appSupport: 'Suporte do app',
        prioritySupport: 'Suporte 24/7 (Pro+)',
        fourLanguages: '4 idiomas',
        englishOnly: 'Apenas inglês',
        available: 'Disponível',
        comingSoon: 'Em breve',
        macOsOnly: 'Apenas macOS',
        viaTelegram: 'Via Telegram',
        builtInTerminal: 'Sem necessidade de SSH',
        notAvailable: 'Não disponível',
        disclaimer: 'Algo mudou ou está errado? Envie-nos um email em',
        disclaimerOr: 'ou abra um pull request no',
        github: 'GitHub',
        ctaTitle: 'Pronto para ver a diferença?',
        ctaDescription:
            'Implante OpenClaw no seu próprio servidor dedicado. Propriedade total, preços transparentes e pronto em minutos.'
    },
    admin: {
        title: 'Admin',
        description: 'Gerencie os usuários e dados da plataforma.',
        usersTab: 'Usuários',
        totalUsers: '{{count}} usuários',
        noUsers: 'Nenhum usuário',
        noUsersDescription:
            'Nenhum usuário encontrado com os filtros aplicados.',
        genericErrorDescription: 'Algo deu errado. Por favor, tente novamente.',
        genericEmptyDescription: 'Nada para mostrar aqui ainda.',
        failedToLoadUsers: 'Falha ao carregar os usuários!',
        failedToLoadUsersDescription:
            'Algo deu errado ao carregar os usuários. Tente novamente.',
        failedToLoadUserDetail: 'Falha ao carregar os detalhes do usuário!',
        userDetail: 'Detalhes do usuário',
        userInfo: 'Info do usuário',
        email: 'E-mail',
        name: 'Nome',
        role: 'Função',
        authMethods: 'Métodos de autenticação',
        license: 'Licença',
        referralCode: 'Código de indicação',
        referredBy: 'Indicado por',
        joined: 'Cadastrado',
        claws: 'Claws',
        sshKeys: 'Chaves SSH',
        volumes: 'Volumes',
        billing: 'Faturamento',
        noClaws: 'Nenhum Claw',
        noSshKeys: 'Nenhuma Chave SSH',
        noVolumes: 'Nenhum Volume',
        noBilling: 'Nenhum Histórico de Faturamento',
        hasLicense: 'Sim',
        noLicense: 'Não',
        notSet: 'Não definido',
        searchPlaceholder: 'Pesquisar por e-mail ou nome...',
        filterAll: 'Todos os usuários',
        filterWithClaws: 'Com claws',
        filterWithoutClaws: 'Sem claws',
        sortNewest: 'Mais recentes',
        sortOldest: 'Mais antigos',
        editUser: 'Editar',
        saveUser: 'Salvar',
        userUpdated: 'Usuário atualizado.',
        userUpdateFailed: 'Falha ao atualizar!',
        clawsTab: 'Claws',
        sshKeysTab: 'Chaves SSH',
        volumesTab: 'Volumes',
        noClawsFound: 'Nenhum Claw',
        noSSHKeysFound: 'Nenhuma Chave SSH',
        noVolumesFound: 'Nenhum Volume',
        failedToLoadAgents: 'Falha ao carregar os agents!',
        failedToLoadSSHKeys: 'Falha ao carregar as chaves SSH!',
        failedToLoadVolumes: 'Falha ao carregar os volumes!',
        owner: 'Proprietário',
        searchClaws: 'Pesquisar claws...',
        searchSSHKeys: 'Pesquisar chaves SSH...',
        referralsTab: 'Indicações',
        pendingClawsTab: 'Pendentes',
        emailsTab: 'E-mails',
        analyticsTab: 'Análise',
        billingTab: 'Faturamento',
        settingsTab: 'Configurações',
        settingsDescription: 'Gerencie suas preferências de administrador.',
        showAllAgents: 'Mostrar todos os agentes de todos os usuários',
        billingFilterAll: 'Todos os pedidos',
        billingFilterService: 'Serviço Claw',
        billingFilterLicense: 'Licença',
        billingOrderTypeLabel: ' · {{type}}',
        noBillingFound: 'Nenhum pedido',
        failedToLoadBilling: 'Falha ao carregar pedidos!',
        searchBilling: 'Pesquisar por produto...',
        billingReason: 'Razão',
        billingType: 'Tipo',
        billingSubtotal: 'Subtotal',
        billingDiscount: 'Desconto',
        billingTax: 'Imposto',
        billingTotal: 'Total',
        analyticsDay: 'Dia',
        analyticsWeek: 'Semana',
        analyticsMonth: 'Mês',
        analyticsYear: 'Ano',
        analyticsAllTime: 'Todo o tempo',
        analyticsFilter: 'Filtrar',
        analyticsResources: 'Recursos',
        analyticsSelectAll: 'Selecionar tudo',
        analyticsDeselectAll: 'Desmarcar tudo',
        failedToLoadAnalytics: 'Falha ao carregar análise!',
        noAnalyticsData: 'Nenhum dado de análise disponível.',
        noReferralsFound: 'Nenhuma Indicação',
        noPendingClawsFound: 'Nenhum Claw Pendente',
        noEmailsFound: 'Nenhum E-mail',
        failedToLoadReferrals: 'Falha ao carregar indicações!',
        failedToLoadPendingClaws: 'Falha ao carregar claws pendentes!',
        failedToLoadEmails: 'Falha ao carregar e-mails!',
        referrer: 'Indicador',
        referred: 'Indicado',
        earned: 'Ganho',
        expiresAt: 'Expira',
        feature: 'Recurso',
        sentAt: 'Enviado',
        fileSize: 'Tamanho',
        registered: 'Registrado',
        status: 'Status',
        ip: 'IP',
        plan: 'Plano',
        location: 'Localização',
        subdomain: 'Subdomínio',
        subscription: 'Assinatura',
        billingInterval: 'Faturamento',
        deletionScheduled: 'Exclusão agendada',
        fingerprint: 'Impressão digital',
        price: 'Preço',
        pricePerMonth: '{{price}}/mês',
        statusRunning: 'Em execução',
        statusStopped: 'Parado',
        adminBadge: 'Admin',
        unitGB: '{{size}} GB',
        unitKB: '{{size}} KB'
    },
    affiliate: {
        title: 'Affiliate',
        description: 'Earn rewards by referring friends to ClawHost.',
        subtitle: 'Share your referral link and earn rewards.',
        learnMore: 'Saiba mais sobre o programa de afiliados',
        referralCode: 'Referral Code',
        referrals: 'Referrals',
        payments: 'pagamentos',
        earnings: 'Earnings',
        codeChangeHint: 'You can customize your referral code once.',
        codeAlreadyChanged: 'Your referral code has already been customized.',
        codeUpdated: 'Referral code updated.',
        codeUpdateFailed: 'Failed to update referral code!',
        invalidCodeLength:
            'Code must be between {{min}} and {{max}} characters!',
        referralHistory: 'Referral History',
        paymentHistory: 'Histórico de pagamentos',
        periodToday: 'Today',
        periodWeek: 'Week',
        periodMonth: 'Month',
        periodYear: 'Year',
        periodAll: 'All',
        confirmChangeTitle: 'Change Referral Code',
        confirmChangeDescription:
            'Are you sure? This action is permanent and cannot be undone. You will not be able to change your referral code again.',
        noReferralsYet: 'Sem indicações',
        noReferralsDescription:
            'Share your referral link to start earning rewards.',
        noPaymentsYet: 'Sem pagamentos',
        noPaymentsDescription:
            'Quando seus usuários indicados fizerem compras, seus pagamentos aparecerão aqui.'
    },
    affiliateProgram: {
        title: 'Programa de afiliados',
        description:
            'Saiba como funciona o programa de afiliados ClawHost, quanto você pode ganhar e as regras para participar.',
        lastUpdated: 'Última atualização: 1 de abril de 2026',
        overviewTitle: '1. Visão geral',
        overviewText:
            'O programa de afiliados ClawHost permite que você ganhe recompensas ao indicar novos usuários para o ClawHost. Quando alguém faz uma compra após visitar o ClawHost através do seu link de indicação, você ganha uma comissão sobre os pagamentos dessa pessoa. O programa é gratuito e disponível para todos os usuários registrados do ClawHost.',
        howItWorksTitle: '2. Como funciona',
        howItWorksText: 'Começar com o programa de afiliados é simples:',
        howItWorksStep1:
            'Crie uma conta ClawHost. Um código de indicação único é gerado automaticamente para você.',
        howItWorksStep2:
            'Compartilhe seu link de indicação com amigos, colegas ou seu público. Seu link segue o formato: clawhost.cloud?ref=YOUR_CODE.',
        howItWorksStep3:
            'Quando alguém faz uma compra após visitar o ClawHost através do seu link, isso é registrado como sua indicação.',
        howItWorksStep4:
            'Você ganha uma comissão toda vez que seu usuário indicado faz uma compra qualificada.',
        earningsTitle: '3. Ganhos e pagamentos',
        earningsText: 'Veja como funcionam os ganhos de afiliados:',
        earningsCommission:
            'Você ganha uma comissão de 15% em cada compra qualificada feita pelos seus usuários indicados. As comissões se aplicam tanto aos planos ClawHost Cloud quanto ClawHost Go.',
        earningsMonthly:
            'Para assinaturas mensais, você ganha comissões por 1 ano a partir da data da indicação.',
        earningsYearly:
            'Para assinaturas anuais, você ganha uma comissão apenas sobre o primeiro ano.',
        earningsPayout:
            'O valor mínimo de saque é de $100 USD. Para solicitar um saque, entre em contato com nossa equipe de suporte.',
        earningsPaymentMethod:
            'Os saques são processados via PayPal. Você deve fornecer um endereço de e-mail PayPal válido ao solicitar um pagamento.',
        earningsCurrency: 'Todos os ganhos são calculados e exibidos em USD.',
        referralCodeTitle: '4. Seu código de indicação',
        referralCodeText:
            'Cada usuário recebe um código de indicação único ao se registrar. Você pode personalizá-lo uma vez para torná-lo mais memorável:',
        referralCodeUnique:
            'Seu código de indicação é único para sua conta e não pode ser compartilhado ou transferido para outro usuário.',
        referralCodeOneChange:
            'Você pode personalizar seu código de indicação exatamente uma vez. Escolha com cuidado — esta alteração é permanente e não pode ser revertida.',
        referralCodeFormat:
            'Os códigos de indicação podem conter apenas letras, números, hifens e underscores.',
        referralWindowTitle: '5. Janela de atribuição de indicação',
        referralWindowText:
            'Uma indicação é atribuída a você por 3 meses a partir do momento em que o usuário indicado visita o ClawHost pela primeira vez através do seu link. Se o usuário indicado não fizer uma compra dentro desta janela de 3 meses, a indicação expira e nenhuma comissão será ganha. Se o usuário visitar através de um link de indicação diferente, a nova indicação substitui a anterior.',
        eligibilityTitle: '6. Elegibilidade',
        eligibilityText:
            'Para participar do programa de afiliados, você deve atender aos seguintes requisitos:',
        eligibilityAccount: 'Você deve ter uma conta ClawHost registrada.',
        eligibilityStanding:
            'Sua conta deve estar em boas condições, sem histórico de violações de políticas.',
        eligibilityAge:
            'Você deve ter pelo menos 18 anos ou a maioridade na sua jurisdição.',
        rulesTitle: '7. Regras do programa',
        rulesText:
            'Para manter a integridade do programa de afiliados, as seguintes regras se aplicam:',
        rulesNoSelfReferral:
            'Auto-indicações são estritamente proibidas. Você não pode indicar suas próprias contas ou contas que você controla.',
        rulesNoFakeAccounts:
            'A criação de contas falsas, cadastros automatizados ou o uso de bots para gerar indicações é proibida.',
        rulesNoSpam:
            'O envio de mensagens em massa não solicitadas (spam) para promover seu link de indicação não é permitido.',
        rulesNoMisrepresentation:
            'Você não pode deturpar o ClawHost, seus serviços ou o programa de afiliados de nenhuma forma.',
        rulesNoIncentivized:
            'Oferecer incentivos monetários diretos (por exemplo, pagar usuários para se cadastrarem através do seu link) não é permitido.',
        terminationTitle: '8. Violação e encerramento',
        terminationText:
            'Qualquer violação dessas regras resultará na perda imediata de todas as recompensas pendentes e ganhas. O ClawHost reserva-se o direito de suspender ou banir permanentemente sua conta do programa de afiliados. Em casos graves, sua conta ClawHost também pode ser encerrada. Todas as decisões relativas a violações são definitivas.',
        marketingTitle: '9. Como promover',
        marketingText:
            'Existem muitas formas criativas e legítimas de compartilhar seu link de indicação e aumentar seus ganhos:',
        marketingSocial:
            'Compartilhe seu link em plataformas de mídia social como X, LinkedIn, Reddit e Facebook. Escreva sobre sua experiência com o ClawHost e inclua seu link de indicação.',
        marketingBlog:
            'Escreva posts de blog, tutoriais ou avaliações sobre o ClawHost. Inclua seu link de indicação naturalmente no conteúdo.',
        marketingVideo:
            'Crie conteúdo em vídeo no YouTube ou TikTok mostrando como você usa o ClawHost para implantar e gerenciar agentes de IA.',
        marketingCommunity:
            'Participe de comunidades de desenvolvedores, fóruns e servidores Discord. Quando alguém perguntar sobre hospedagem em nuvem ou implantação de agentes de IA, recomende o ClawHost com seu link.',
        marketingNewsletter:
            'Se você tem uma newsletter ou lista de e-mails, mencione o ClawHost em uma edição relevante com seu link de indicação.',
        marketingComparison:
            'Escreva artigos de comparação honestos ou guias que destaquem o que torna o ClawHost diferente de outras plataformas.',
        changesToProgramTitle: '10. Alterações no programa',
        changesToProgramText:
            'O ClawHost reserva-se o direito de modificar, suspender ou descontinuar o programa de afiliados a qualquer momento sem aviso prévio. Isso inclui alterações nas taxas de comissão, janelas de indicação, limites de pagamento e regras do programa. A participação continuada após alterações constitui aceitação dos termos atualizados.',
        getStartedTitle: '11. Começar',
        getStartedText:
            'Pronto para começar a ganhar? Vá para o seu painel de afiliados para obter seu link de indicação e comece a compartilhá-lo com sua rede.',
        getStartedButton: 'Ir para o painel de afiliados',
        contactTitle: '12. Contato',
        contactText:
            'Se você tem perguntas sobre o programa de afiliados, precisa de ajuda com seu código de indicação ou deseja reportar uma violação, entre em contato conosco em'
    }
}

export default pt