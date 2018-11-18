const fs = require('fs');

module.exports.logMiddleware = (req, res, next) => {
    var dateTime = new Date().toString();
    var log = `Geocoding Server: ${dateTime}: ${req.method} ${req.url} `;

    fs.writeFile('geocoding.log', log, function (err, result) {
        if (err) console.log('error', err);
        next();
    });
};
