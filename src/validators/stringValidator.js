function isValidString(str, minLength, maxLength) {
    return typeof str === 'string' && str.length >= minLength && str.length <= maxLength;
}

module.exports = { isValidString };
