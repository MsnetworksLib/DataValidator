function isValidPhoneNumber(phone) {
    // Exemple de validation pour les numéros de téléphone américains
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.test(phone);
}

module.exports = { isValidPhoneNumber };
