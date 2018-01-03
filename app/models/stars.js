var rp = require('request-promise');
var model = {};

model.getAll = function (username, pageSize, pageIndex) {
    var url = "https://api.github.com/users/" + username + "/starred";
    var options = {
        uri: url,
        qs: {
            per_page: pageSize,
            page: pageIndex,
            sort: 'created',
            direction: 'desc'
        },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    };

    return rp(options);
}

module.exports = model;