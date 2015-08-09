if (Meteor.isClient) {
  Meteor.startup(() => {
    RoomsCollection = new Mongo.Collection("rooms");

    // watch collections on Minimongo cache and trigger action on change
    Tracker.autorun(computation => {
      var docs = RoomsCollection.find({}).fetch();
      if (computation.firstRun) return; // ignore first empty run

      console.log('\n[Tracker] collection changed');
      this.RoomActions.roomChanged(docs);
    });

    /*
      Room Action
    */
    RoomActions = Reflux.createActions([
    	'createRoom',
    	'enterRoom',
    	'leaveRoom',
    	'destroyRoom',
      'roomChanged'
    ]);

    /*
      Room Store
    */
    RoomStore = Reflux.createStore({
    	mixins: [RefluxStateMixin],
      // listenables: _.extend(RoomActions),
      listenables: [RoomActions],
      init() {
        Meteor.subscribe('rooms');
      },
    	getInitialState() {
        return {
          rooms: this.findRooms()
        }
      },
      findRooms() {
        return RoomsCollection.find().fetch();
      },

      // actions
    	onCreateRoom(genre, title) {
        console.log('run createRoom');
        
        RoomsCollection.insert({
          genre: genre,
          title: title,
          createdAt: Date.now()
        });
    	},
    	onEnterRoom(roomId) {

    	},
    	onLeaveRoom(roomId) {

    	},
      onDestroyRoom(roomId) {
      },
      onRoomChanged(docs) {
        this.setState({ rooms: this.findRooms() })
      }
    });
  });
}
