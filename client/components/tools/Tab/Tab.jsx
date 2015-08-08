var TabSwitch = React.createClass({
	onClick: function(item) {
		this.props.onTabClick(item);
	},
	render: function() {
		var activeItemId = this.props.activeItemId;
		return (
			<ul className="tab-style1" /* tab style1 */>
				{this.props.items.map(function (item) {
					return <li className={ activeItemId == item.id ? 'is-active' : '' }><a href="#" onClick={this.onClick.bind(this, item)}>{item.title}</a></li>
				}.bind(this))}
			</ul>
		)
	}
});

var TabContent = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.items.map(function (item) {
					return <div className="route-tab-cont">
							{item.content}
							</div>
				})}
			</div>
		)
	}
});


Tab = React.createClass({
	getInitialState: function() {
		return {
			activeTabId: 1,
			tabs: [
				{title: 'first', content: 'Content 1', id: 1},
				{title: 'second', content: 'Content 2', id: 2},
				{title: 'third', content: 'Content 3', id: 3}
			]
		};
	},
	handleTabClick: function(item) {
		// Call `setState` so React knows about the updated tab item.
		console.log(item);
		this.setState({activeTabId: item.id});
	},
	render: function() {
		return (
			<div>
				<TabSwitch items={this.state.tabs} activeItemId={this.state.activeTabId} onTabClick={this.handleTabClick}/>
				<TabContent items={this.state.tabs} activeItemId={this.state.activeTabId}/>
			</div>
		)
	}
});


React.render(<Tab />, document.getElementById('app'));