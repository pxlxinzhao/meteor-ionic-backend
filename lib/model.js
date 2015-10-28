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
    },
    createdTime: {
        type: Date,
        label: "Date"
    }
});

Posts.attachSchema(Schemas.Post);