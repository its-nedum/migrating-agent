const { 
    Users, 
    Campaigns,
    Charges,
    Currencies,
    TransactionalMessages,
    Admins,
    AdminSettings,
    Contacts,
    Contacts0,
    CampaignGroups,
    Countries,
    CustomContactResponses,
    CustomOptinQuestions,
    CustomOptins,
    Drafts,
    Groups,
    Integrations,
    IntegrationTemplates,
    LinkReferers,
    Messages,
    OptOuts,
    Payments,
    Permissions,
    PlanRoles,
    Plans,
    PlatformTypes,
    RcsAgents,
    RcsPlatformMessages,
    RcsTemplateMessages,
    RolePermissions,
    Roles,
    Senders,
    SettingsTelco,
    SettingsNetworks,
    SettingsNetworksRcs,
    SettingsTopUpRates,
    SettingsUserBillings,
    ShortLinks,
    StandardContactFields,
    Subscriptions,
    TmpCampaigns,
    TmpOptins,
    TopUpPlans,
    TopUps,
    TransactionHistories,
    Transactions,
    Tsjb,
    UserShopifyData,
    UserTransaction,
    UserWoocommerceData,
    UserInvitations,
    Wallet,
    Wallets,
    ZapierTriggers,
    ContactInternational,
} = require("./tables");

async function migrate(){
    try {
        // Call migrations script for each table here
        await Users();
        await Campaigns();
        await Charges();
        await Currencies();
        await TransactionalMessages();
        await Admins();
        await AdminSettings();
        await Contacts();
        await Contacts0();
        await CampaignGroups();
        await Countries();
        await CustomContactResponses();
        await CustomOptinQuestions();
        await CustomOptins();
        await Drafts();
        await Groups();
        await Integrations();
        await IntegrationTemplates();
        await LinkReferers();
        await Messages();
        await OptOuts();
        await Payments();
        await Permissions();
        await PlanRoles();
        await Plans();
        await PlatformTypes();
        await RcsAgents();
        await RcsPlatformMessages();
        await RcsTemplateMessages();
        await RolePermissions();
        await Roles();
        await Senders();
        await SettingsTelco();
        await SettingsNetworks();
        await SettingsNetworksRcs();
        await SettingsTopUpRates();
        await SettingsUserBillings();
        await ShortLinks();
        await StandardContactFields();
        await Subscriptions();
        await TmpCampaigns();
        await TmpOptins();
        await TopUpPlans();
        await TopUps();
        await TransactionHistories();
        await Transactions();
        await Tsjb();
        await UserShopifyData();
        await UserTransaction();
        await UserWoocommerceData();
        await UserInvitations();
        await Wallet();
        await Wallets();
        await ZapierTriggers();
        await ContactInternational();
    } catch (error) {
      console.error(error)  
    }
}

migrate();
