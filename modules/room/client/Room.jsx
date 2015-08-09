if (Meteor.isClient) {
	Room = React.createClass({
		propTypes: {
			rooms: React.PropTypes.array
		},
		getInitialState() {
			return RoomStore.getInitialState();
		},
		componentDidMount() {
	    this.unlisten = RoomStore.listen(this.onChange);	//Store의 변화 감지
	  },
		componentWillUnmount() {
	    this.unlisten();
	  },
	  onChange(state) {
	    this.setState(state);	//state 변경
	  },

		handleCreateRoom() {
			var genre = 'Pop';
			var roomName = '8/8 해커톤!!!';

			RoomActions.createRoom(genre, roomName);
		},

		render() {

			var tmpStyle = {
				backgroundColor: '#fff'
			};

			return (
				<div>
						<div style={tmpStyle}>
						{
							this.state.rooms.map((room) => {
								return (
									<div key={room._id}>
										<span>[{room.genre}]</span>
										<span>{room.title}</span>
									</div>
								)
							})
						}
						</div>
						<button type="button" onClick={this.handleCreateRoom}>create a room</button>
				</div>
			)
		}
	});
}
