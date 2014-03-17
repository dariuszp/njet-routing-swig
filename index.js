'use strict';

module.exports = {

    addFunctions: function (swig, router, options) {
        options = options || {};

        swig.setExtension(options.url ? String(options.url) : 'url', {
            get: router.get.generate,
            post: router.post.generate,
            put: router.put.generate,
            delete: router.delete.generate,
            options: router.options.generate,
            head: router.head.generate,
            trace: router.trace.generate,
            connect: router.connect.generate,
            any: router.any.generate
        });
        return this;
    }

};