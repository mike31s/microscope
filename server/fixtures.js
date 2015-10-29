// Fixture data 
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    submitted: new Date(now - 7 * 3600 * 1000),
  });


  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com',
    submitted: new Date(now - 10 * 3600 * 1000),
  });

}