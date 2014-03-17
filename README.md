njet-routing-swig [![Build Status](https://travis-ci.org/dariuszp/njet-routing-swig.png?branch=master)](https://travis-ci.org/dariuszp/njet-routing-swig)
=================

Swig extension for njet-routing

To extend swig templates with Your router simply install extension:

```JavaScript
npm install njet-routing-swig
```

After that extend Your swig with njet-routing url generator:

```JavaScript
var swig = require('swig'),
    njetRouting = require('njet-routing'),
    njetRoutingSwig = require('njet-routing-swig'),
    router = njetRouting.createRouter();

njetRoutingSwig.addFunctions(swig, router);
```

whis will add "url" object with methods that match verbs:
- get
- post
- put
- delete
- options
- head
- trace
- connect
- any

Now you can add some route:
```JavaScript
router.post.add('create_user', '/api/user/{username}');
```

And from now you can use it to generate url in template:
```JavaScript
var content = swig.render('test: {{ _ext.url.post("create_user", { username: "dariuszp", "new": 1, age: 26 }, true) }}');
```

This will generate:
```
test: http://localhost/api/user/dariuszp?age=26&new=1
```

In case "url" extension is already in your project, just provide option that will overwrite that name to something else:
```JavaScript
njetRoutingSwig.addFunctions(swig, router, {
    url: 'sparta'
});
```

And you can call Your spartans:
```
var content = swig.render('test: {{ _ext.sparta.post("create_user", { username: "dariuszp", "new": 1, age: 26 }, true) }}');
```

For more informations about njet-routing visit:
https://github.com/dariuszp/njet-routing

Enjoy!