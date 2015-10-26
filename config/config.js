// You can use the meteorhacks:npm package to load in the body-parser package
// via NPM.
var bodyParser = Meteor.npmRequire( 'body-parser');

// Add two middleware calls. The first attempting to parse the request body as
// JSON data and the second as URL encoded data.
Picker.middleware( bodyParser.json() );
Picker.middleware( bodyParser.urlencoded( { extended: false } ) );