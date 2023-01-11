'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    // app.route('/')
    //     .get(jsonku.index);

    app.route('/appear')
        .get(jsonku.showalldatasu);

    app.route('/add')
        .post(jsonku.adddatasu);

    app.route('/edit')
        .put(jsonku.editdatasu);
        
    app.route('/delete')
        .delete(jsonku.deletedatasu);
}