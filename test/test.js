'use strict';

var swig = require('swig'),
    njetRouting = require('njet-routing'),
    router = njetRouting.createRouter(),
    ext = require(__dirname + '/../index.js');

require('should');

describe('swig', function () {

    ext.addFunctions(swig, router);

    router.post.add('create_user', '/api/user/{username}');

    describe('.render()', function () {
        it ('should generate url: "http://localhost/api/user/dariuszp?age=26"', function () {
            var content = swig.render('test: {{ _ext.url.post("create_user", { username: "dariuszp", "new": 1, age: 26 }, true) }}');
            content.should.equal('test: http://localhost/api/user/dariuszp?age=26&new=1');
        });

        ext.addFunctions(swig, router, {
            url: 'sparta'
        });

        it ('should generate url: "http://localhost/api/user/dariuszp?age=26" using "sparta" object', function () {
            var content = swig.render('test: {{ _ext.sparta.post("create_user", { username: "dariuszp", "new": 1, age: 26 }, true) }}');
            content.should.equal('test: http://localhost/api/user/dariuszp?age=26&new=1');
        });
    });
});