const sequelize = require("sequelize");

const Contact = sequelize.define("contact", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstname: sequelize.STRING,
    lastname: sequelize.STRING,
    phone: {
        type: sequelize.STRING,
        unique: "phone_user_composite",
    },
    userId: {
        type: sequelize.INTEGER,
        unique: "phone_user_composite",
    },
    groupId: {
        type: sequelize.INTEGER,
        unique: "phone_user_composite",
    },
    email: sequelize.STRING,
    do_sms: sequelize.INTEGER,
    smsoptintime: sequelize.DATE,
    smsoptouttime: sequelize.DATE,
    do_whatsapp: sequelize.INTEGER,
    status: sequelize.INTEGER, //  0 = 'unverified | 1 = 'Non-DND' | 2 = 'DND'
    misc: sequelize.STRING,
});

// Contact.belongsToMany(Group, { through: ContactGroup, foreignKey: 'contactId' });
// Contact.belongsTo(User);

/* Contact.belongsToMany(models.Group, {
  through: models.ContactGroup,
  foreignKey: 'contactId'
}); */
// Contact.belongsToMany(models.Group, { through: ContactGroup, foreignKey: 'contactId' });

module.exports = Contact;
