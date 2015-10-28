// You can use the meteorhacks:npm package to load in the body-parser package
// via NPM.
if (Meteor.isServer){
    var bodyParser = Meteor.npmRequire('body-parser');

// Add two middleware calls. The first attempting to parse the request body as
// JSON data and the second as URL encoded data.
    Picker.middleware( bodyParser.json() );
    Picker.middleware( bodyParser.urlencoded( { extended: false } ) );

    Picker.route('/post', function(params, req, res, next) {
        var posts = Posts.find({}).fetch();
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.end(JSON.stringify(posts));
    });

    Picker.route('/post/create', function(params, req, res, next) {
        var post = req.body
        post.createdTime = new Date().toISOString();
        Posts.insert(post);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.end('success');
    });

    Picker.route('/post/delete/:id', function(params, req, res, next) {
        var id = params.id;
        Posts.remove({_id: id});
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.end('success');
    });
}
