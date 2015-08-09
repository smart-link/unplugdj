if (Meteor.isServer) {
  RoomsCollection = new Mongo.Collection("rooms");

  RoomsCollection.allow({
    insert: function() {
      return true;
    },
    update: function() {
      return true;
    },
    remove: function() {
      return true;
    }
  });

  Meteor.publish('rooms', function() {
    var cursor = RoomsCollection.find();
    return cursor;
  });
}
