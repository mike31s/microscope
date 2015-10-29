/**
 * Created by mike on 10/26/2015.
 */
Template.postForm.events({

  // handle the form submission
  'submit form': function(event, template) {

    // stop the form from submitting
    event.preventDefault();

    Meteor.call("addPost");


  }

});