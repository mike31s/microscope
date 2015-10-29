/**
 * Created by mike on 10/29/2015.
 */
Meteor.methods({
  addPost: function (text) {
    // Make sure the user is logged in before inserting a task


    Posts.insert({
      title: event.target.title.value,
      url: event.target.url.value

    });
    template.find("form").reset();
    Meteor.publish();

  }

});

