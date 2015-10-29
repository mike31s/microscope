Template.postForm.events({

  // handle the form submission
  'submit form': function(event, template) {

    // stop the form from submitting
    event.preventDefault();

    var title = event.target.title.value;
    var url = event.target.url.value;
    Meteor.call("addPost", title, url);
 //   Posts.insert({
  //    title: event.target.title.value,
 //     url: event.target.url.value
 //   });

    template.find("form").reset();
  }

});