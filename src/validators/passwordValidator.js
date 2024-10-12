function isValidPassword(password) {
    // Conditions : minimum 8 caractères, au moins une majuscule, une minuscule, un chiffre et un symbole
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

module.exports = { isValidPassword };
