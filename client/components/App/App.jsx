App = React.createClass({
	getInitialState: function() {
		return {
			display: false
		};
	},
	handelOpenDialog(event) {
		this.setState({display: true});
	},
	handelCloseDialog(event) {
		this.setState({display: false});
	},

	render() {
		var test_style = {
			margin: 70,
			fontSize: '20px'
		};

	return (
		<div>
			<div style={test_style}>
				<h2>개발 테스트용 페이지</h2>
				<br/>

				<table>
					<tr>
						<td>
							Dialog
						</td>
						<td>
							<button type="button" onClick={this.handelOpenDialog}>show dialog</button>
							<Dialog display={this.state.display} onClose={this.handelCloseDialog}/>
						</td>
					</tr>
					<tr>
						<td>
							Autocomplete
						</td>
						<td>
							<AutoComplete />
						</td>
					</tr>
					<tr>
						<td>
							DatePicker
						</td>
						<td>
						</td>
					</tr>
				</table>
			</div>

			<div>
				{this.props.content}
			</div>
		</div>
	)
	}
});
