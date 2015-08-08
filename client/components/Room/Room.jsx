var RoomsCollection = new Mongo.Collection("rooms");

var Action = Reflux.createActions([
	'createRoom',
	'enterRoom',
	'leaveRoom'
]);

var Store = Reflux.createStore({
	// mixins: [RefluxStateMixin],
	listenables: [Action],
	init() {
    Meteor.subscribe('rooms');
  },
	getInitialState() {
    return {
      roomList: RoomsCollection.findOne()		//룸 목록.
    }
  },
	onCreateRoom: function (gendre, roomName) {

	},
	onEnterRoom: function (roomId) {

	},
	onLeaveRoom: function (roomdId) {

	},


	// onIncrementScore(docId) {
  //   //Player.incrementScore() could use a fat model also
  //   Players.update({_id: docId}, {$inc: {score: 5}});
  //   // no setState required since tracker will fire a change
  //   console.log('[PlayerStore] incrementScore');
  // },
	//
  // onSelectPlayer(docId) {
  //   var player = Players.findOne({_id: docId}) || {};
	//
  //   this.setState({
  //     selectedId: docId,
  //     selectedPlayerName: player.name
  //   });
  //   console.log('[PlayerStore] selectPlayer');
  // },
	//
  // onPlayersChanged(playerDocs) {
  //   // we could use `playerDocs` instead but it's not sorted
  //   this.setState({ players: Player.findLeaders() });
  //   console.log('[PlayerStore] updating state');
  // }
});

Room = React.createClass({
	propTypes: {
		roomId: React.PropTypes.string.isRequired
	},
	getInitialState: function() {
		return {
			roomId: null
		};
	},

	handleCreateRoom: function() {
		var genre = 'Pop';
		var roomName = '8/8 해커톤!!!';

		
	},

	render() {
		return (
			<div>
					<button type="button" onClick={this.handleCreateRoom}>create a room</button>
			</div>
		)
	}
});
