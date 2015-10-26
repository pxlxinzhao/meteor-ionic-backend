// You can use the meteorhacks:npm package to load in the body-parser package
// via NPM.
var bodyParser = Meteor.npmRequire( 'body-parser');

// Add two middleware calls. The first attempting to parse the request body as
// JSON data and the second as URL encoded data.
Picker.middleware( bodyParser.json() );
Picker.middleware( bodyParser.urlencoded( { extended: false } ) );


Posts = new Mongo.Collection('posts');

Picker.route('/post', function(params, req, res, next) {
    var posts = Posts.find({}, {fields: {_id: 0}}).fetch();
    console.log(posts);
    res.end(JSON.stringify(posts));
});

Picker.route('/post/create', function(params, req, res, next) {
    console.log(req.body);
    res.end('done');
});