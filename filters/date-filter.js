module.exports = function dateFilter(value) {
    let dateObject = new Date(value);

    return dateObject.toLocaleString('en-gb',{
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
};
