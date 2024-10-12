function isValidDate(dateString) {
    // Vérifie le format de la date (YYYY-MM-DD)
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) return false;

    const date = new Date(dateString);
    const timestamp = date.getTime();
    return typeof timestamp === 'number' && !isNaN(timestamp);
}

module.exports = { isValidDate };
