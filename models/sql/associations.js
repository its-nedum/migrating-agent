const User = require("./User");
const Group = require("./Group");
const Admin = require("./Admin");
const Sender = require("./Sender");
const Optout = require("./Optout");
const Contact = require("./Contact");
const Country = require("./Country");
const Message = require("./Message");
const RcsAgent = require("./RcsAgent");
const Tmpoptin = require("./Tmpoptin");
const Campaign = require("./Campaign");
const Shortlink = require("./Shortlink");
const Linkreferer = require("./Linkreferer");
const Customoptin = require("./CustomOptin");
const Integration = require("./Integration");
const Platformtype = require("./PlatformType");
const CampaignGroup = require("./CampaignGroup");
const Settingsnetwork = require("./SettingsNetwork");
const IntegrationTemplate = require("./IntegrationTemplate");
const Customoptinquestion = require("./CustomOptinQuestion");
const Customcontactresponse = require("./CustomContactResponse");
const Payment = require("./Payment");
const PerformanceCampaign = require("./PerformanceCampaign");
const Permission = require("./Permission");

const Role = require("./Role");
const Plan = require("./Plan");
const PlanRole = require("./PlanRole");
const RolePermission = require("./RolePermission");
const Subscription = require("./Subscription");
const Tmpcampaign = require("./Tmpcampaign");
const RcsTemplateMessage = require("./RcsTemplateMessage");
const Settingsuserbilling = require("./SettingsUserBilling");
const Settingstopuprate = require("./SettingsTopupRate");
const Topup = require("./Topup");
const Transaction = require("./Transaction");
const Wallet = require("./Wallet");
const UserInvitation = require("./UserInvitation");
const UserShopifyData = require("./UserShopifyData");
const UserWoocommerceData = require("./UserWoocommerceData");
const Zapiertrigger = require("./ZapierTrigger");
const RcsPlatformMessages = require("./rcsplatformmessages");
const TopupPlan = require("./TopupPlan");
const Currencies = require("./Currencies");
const TransactionalMessage = require("./TransactionalMessage");

module.exports.link = function () {
    // Campaign associations
    Campaign.belongsTo(User, {
        foreignKey: "userId",
    });

    Campaign.belongsTo(Platformtype, {
        foreignKey: "platformtypeId",
    });

    Campaign.belongsTo(Sender, {
        foreignKey: "senderId",
        as: "sender",
    });

    Campaign.belongsTo(RcsAgent, {
        foreignKey: "rcsAgentId",
        as: "rcsAgent",
    });

    Campaign.belongsToMany(Group, {
        through: CampaignGroup,
        foreignKey: "campaignId",
    });

    Campaign.hasMany(Message, {
        foreignKey: "campaignId",
    });

    Campaign.belongsTo(Shortlink, {
        foreignKey: "shortlinkId",
    });

    // Contact associations
    Contact.belongsTo(User, {
        foreignKey: "userId",
    });
    Contact.belongsTo(Country, {
        foreignKey: "countryId",
    });
    Contact.belongsTo(Group, {
        foreignKey: "groupId",
    });

    // Country associations

    Country.hasMany(Tmpoptin, {
        foreignKey: "countryId",
    });
    Country.hasMany(Settingsnetwork, {
        foreignKey: "countryId",
    });

    // Custom Contact response

    Customcontactresponse.belongsTo(Customoptinquestion, {
        foreignKey: "customoptinquestionId",
    });

    // Custom Optin

    Customoptin.belongsTo(User, {
        foreignKey: "userId",
    });

    // Custom Optin Question

    Customoptinquestion.belongsTo(User, {
        foreignKey: "userId",
    });

    // Group associations
    Group.belongsTo(User, {
        foreignKey: "userId",
    });
    Group.belongsTo(Platformtype, {
        foreignKey: "platformtypeId",
    });

    Group.belongsToMany(Campaign, {
        through: CampaignGroup,
        foreignKey: "groupId",
    });

    // Integrations

    Integration.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
    });

    Integration.hasMany(IntegrationTemplate, {
        foreignKey: "integrationId",
    });

    // Integration Template

    IntegrationTemplate.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
    });

    IntegrationTemplate.belongsTo(Integration, {
        foreignKey: "integrationId",
        as: "integration",
    });

    // Link Referrer

    Linkreferer.belongsTo(Shortlink, {
        foreignKey: "shortlinkId",
    });

    // Message

    // models.Group.belongsToMany(models.Contact, { through: models.ContactGroup, foreignKey: 'groupId' });
    Message.belongsTo(Platformtype, {
        foreignKey: "platformtypeId",
    });
    Message.belongsTo(Shortlink, {
        foreignKey: "shortlinkId",
    });
    Message.belongsTo(Campaign, {
        foreignKey: "campaignId",
    });
    Message.belongsTo(Sender, {
        foreignKey: "senderId",
    });
    /* Message.belongsTo(models.Contact, {
      foreignKey: 'contactId',
    }); */

    // Opt out

    Optout.belongsTo(User, {
        foreignKey: "userId",
    });

    Payment.belongsTo(User, {
        foreignKey: "userId",
    });

    Payment.hasOne(Wallet, {
        foreignKey: "paymentId",
    });

    // Performance Campaign

    PerformanceCampaign.belongsTo(User, {
        foreignKey: "userId",
    });

    PerformanceCampaign.belongsTo(Platformtype, {
        foreignKey: "platformtypeId",
    });

    PerformanceCampaign.belongsTo(Sender, {
        foreignKey: "senderId",
    });

    PerformanceCampaign.hasMany(Message, {
        foreignKey: "campaignId",
    });

    // Permisson

    Permission.belongsToMany(Role, {
        through: RolePermission,
        as: "roles",
        foreignKey: "permissionId",
    });

    // Plan

    Plan.hasMany(Subscription, {
        foreignKey: "planId",
    });

    // Plan Roles

    PlanRole.belongsTo(Plan, {
        foreignKey: "planId",
    });
    PlanRole.belongsTo(Role, {
        foreignKey: "roleId",
    });

    // Platform Type

    // models.Group.belongsToMany(models.Contact, { through: models.ContactGroup, foreignKey: 'groupId' });
    Platformtype.hasMany(Campaign, {
        foreignKey: "platformtypeId",
    });
    Platformtype.hasMany(Tmpcampaign, {
        foreignKey: "platformtypeId",
    });
    Platformtype.hasMany(Message, {
        foreignKey: "platformtypeId",
    });

    // RCS Agent

    RcsAgent.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
    });

    // RCS Template Message

    RcsTemplateMessage.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
    });

    RcsTemplateMessage.belongsTo(RcsAgent, {
        foreignKey: "rcsagentId",
        as: "rcsagent",
    });

    RcsPlatformMessages.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
    });

    RcsPlatformMessages.belongsTo(RcsAgent, {
        foreignKey: "rcsagentId",
        as: "rcsagent",
    });

    // Role

    Role.belongsToMany(Plan, {
        through: PlanRole,
        as: "plans",
        foreignKey: "roleId",
    });

    Role.belongsToMany(Permission, {
        through: RolePermission,
        as: "permissions",
        foreignKey: "roleId",
    });

    // Role permission

    RolePermission.belongsTo(Role, {
        foreignKey: "roleId",
    });
    RolePermission.belongsTo(Permission, {
        foreignKey: "permissionId",
    });

    // senders

    Sender.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
    });
    Sender.hasMany(Campaign, {
        foreignKey: "senderId",
        as: "campaign",
    });
    Sender.hasMany(Message, {
        foreignKey: "senderId",
    });

    // setting network

    Settingsnetwork.hasMany(Settingsuserbilling, {
        foreignKey: "settingsnetworkId",
    });
    Settingsnetwork.belongsTo(Country, {
        foreignKey: "countryId",
    });

    Settingsuserbilling.belongsTo(User, {
        foreignKey: "userId",
    });
    Settingsuserbilling.belongsTo(Settingsnetwork, {
        foreignKey: "settingsnetworkId",
    });

    Shortlink.belongsTo(User, {
        foreignKey: "userId",
    });

    Shortlink.hasMany(Campaign, {
        foreignKey: "shortlinkId",
    });
    Shortlink.hasMany(Message, {
        foreignKey: "shortlinkId",
    });
    Shortlink.hasMany(Linkreferer, {
        foreignKey: "shortlinkId",
    });

    // Subscription

    Subscription.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
    });

    Subscription.belongsTo(Plan, {
        foreignKey: "planId",
        as: "plan",
    });

    // Tmp Campaign

    Tmpcampaign.belongsTo(User, {
        foreignKey: "userId",
    });
    Tmpcampaign.belongsTo(Platformtype, {
        foreignKey: "platformtypeId",
    });
    Tmpcampaign.belongsTo(Sender, {
        foreignKey: "senderId",
    });
    Tmpcampaign.hasMany(Message, {
        foreignKey: "campaignId",
    });

    // Tmp Optin

    Tmpoptin.belongsTo(User, {
        foreignKey: "userId",
    });

    Tmpoptin.belongsTo(Country, {
        foreignKey: "countryId",
    });

    // Top up

    Topup.belongsTo(User, {
        foreignKey: "userId",
    });
    Topup.belongsTo(Settingstopuprate, {
        foreignKey: "settingstopuprateId",
    });
    Topup.belongsTo(Payment, {
        foreignKey: "paymentId",
    });

    // Transaction

    Transaction.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
    });

    // User

    User.hasMany(Sender, {
        foreignKey: "userId",
        as: "sender",
    });

    User.hasMany(Campaign, {
        foreignKey: "userId",
    });

    User.hasMany(Shortlink, {
        foreignKey: "userId",
    });

    User.hasMany(Wallet, {
        foreignKey: "userId",
    });

    User.hasMany(Tmpoptin, {
        foreignKey: "userId",
    });

    User.hasMany(Settingsuserbilling, {
        foreignKey: "userId",
    });

    User.hasMany(Customoptin, {
        foreignKey: "userId",
    });

    User.hasMany(Customoptinquestion, {
        foreignKey: "userId",
    });

    User.hasMany(Customoptinquestion, {
        foreignKey: "userId",
        as: "transactions",
    });

    User.belongsTo(Subscription, {
        foreignKey: "subscriptionId",
        as: "subscription",
    });

    User.hasMany(TransactionalMessage, {
        foreignKey: "userId",
        as: "transactionalMessages",
    });

    // User Invitations

    UserInvitation.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
    });

    // User shopify data

    UserShopifyData.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
    });

    // User Woocommerce

    UserWoocommerceData.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
    });

    // Wallet

    Wallet.belongsTo(User, {
        foreignKey: "userId",
    });
    Wallet.belongsTo(Payment, {
        foreignKey: "paymentId",
    });

    // ZapierTrigger

    Zapiertrigger.belongsTo(User, {
        foreignKey: "userId",
    });

    // Topup Plans
    TopupPlan.belongsTo(Currencies, {
        foreignKey: "currencyId",
        as: "currency",
    });

    //Currency
    Currencies.hasMany(TopupPlan, {
        foreignKey: "currencyId",
        as: "topupplans",
    });

    //Transactional messages
    TransactionalMessage.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
    });
};
