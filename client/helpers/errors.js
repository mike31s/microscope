/**
 * Created by mike on 10/28/2015.
 */
// Local (client-only) collection
Errors = new Mongo.Collection(null);

throwError = function(message) {
  Errors.insert({message: message})
}