Posts = new Mongo.Collection('posts');

var Schemas = {};

Schemas.Post = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 50
    },
    message: {
        type: String,
        label: "Message",
        max: 1000
    }
});

Posts.attachSchema(Schemas.Post);