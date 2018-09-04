let restify = require('restify');

const server = restify.createServer({
    name: 'myapp',
    version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

contents = [];

//GET
server.get('/task/:id', function (req, res, next) {
    let id = req.params.id;
    console.log("GET: " + id);

    for (let i = 0; i < contents.length; i++) {

        if (contents[i].id === id) {
            res.send(contents[i]);
            return next();
        }
    }

    //Did't find it
    res.send("Didn't find the item");
    return next();
});

//POST
server.post('/task', function (req, res, next) {
    contents.push(JSON.parse(req.body));
    res.send("Contents Length = " + contents.length);
    return next();
});

//PUT
server.put('/task/:id', function (req, res, next) {
    let id = req.params.id;
    console.log("PUT: " + id);

    for (let i = 0; i < contents.length; i++) {

        if (contents[i].id === id) {
            contents[i] = JSON.parse(req.body);
            res.send(contents[i]);
            return next();
        }
    }

    //Did't find it
    res.send("Didn't find it");
    return next();
});

//DELETE
server.del('/task/:id', function (req, res, next) {
    let id = req.params.id;
    console.log("DELETE: " + id);

    for (let i = 0; i < contents.length; i++) {

        if (contents[i].id === id) {
            contents.splice(i, 1);
            res.send("Removed");
            return next();
        }
    }

    //Did't find it
    res.send("Didn't find it");
    return next();
});


server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});