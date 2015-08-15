Card = React.createClass({
    displayName: 'Card',
    propTypes: {
        className: React.PropTypes.string
    },
    getDefaultProps() {
		return {
            className: ''
		};
	},
    getInitialState() {
        return {
        };
    },
    componentDidMount() {
    },
    componentWillUnmount() {
    },
    render() {
        var componentClass = classNames(
			'ui',
            'card',
			this.props.className
		);

        return (
            <div className={componentClass} onClick={this.props.onClick}>{this.props.children}</div>
        )
    }
});
