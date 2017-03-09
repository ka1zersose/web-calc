module.exports = {

    sum: function (a, b, callback) {
        if (a && b) {
            return callback(null, Number.parseInt(a) + Number.parseInt(b));
        }
        callback(new Error('one of the parameter is not a number'));
    },

    sub: function (a, b, callback) {
        if (a && b) {
            return callback(null, Number.parseInt(a) - Number.parseInt(b));
        }
        callback(new Error('one of the parameter is not a number'));
    },

    div: function (a, b, callback) {
        if (a && b) {
            return callback(null, Number.parseInt(a) / Number.parseInt(b));
        }
        callback(new Error('one of the parameter is not a number'));
    },

    mult: function (a, b, callback) {
        if (a && b) {
            return callback(null, Number.parseInt(a) * Number.parseInt(b));
        }
        callback(new Error('one of the parameter is not a number'));
    }

};


