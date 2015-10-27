/**
 * Created by Patrick_Pu on 2015-10-26.
 */
Meteor.publish("posts", function(){
    return Posts.find();
})