define([
    'dojo/_base/declare',
    'dojo/request'
], function(
    declare,
    request
    ) {
    return declare(null, {
        test: function () {
            request('blah');
        }
    });
});