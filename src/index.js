// index.js

// Importer les validateurs
const { isValidEmail } = require('./validators/emailValidator');
const { isValidPhoneNumber } = require('./validators/phoneValidator');
const { isValidPassword } = require('./validators/passwordValidator');
const { isValidDate } = require('./validators/dateValidator');
const { isValidString } = require('./validators/stringValidator');

// Regrouper les validateurs dans un objet pour un accès facile
const DataValidator = {
    isValidEmail,
    isValidPhoneNumber,
    isValidPassword,
    isValidDate,
    isValidString,
};

// Exporter l'objet DataValidator
module.exports = DataValidator;
