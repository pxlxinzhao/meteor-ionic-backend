Picker.route('/post', function(params, req, res, next) {
    var posts = Posts.find({}).fetch();
    res.end(JSON.stringify(posts));
});

Picker.route('/post/create', function(params, req, res, next) {
    var post = req.body
    Posts.insert(post);
    res.end('success');
});

Picker.route('/post/update', function(params, req, res, next) {
    res.end('success');
});