/**
 * Created by mike on 10/29/2015.
 */
Meteor.methods({
  addPost: function (title, url) {

    Posts.insert({
      title: title,
      url: url

    });
  }
});
