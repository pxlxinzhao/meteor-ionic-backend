if (Meteor.isClient){



    Template.hello.helpers({
        posts: function(){
            return Posts.find();
        }
    })
}

