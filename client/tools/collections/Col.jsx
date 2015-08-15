Col = React.createClass({
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
            'column',
            'four wide',
			this.props.className
		);

        return (
            <div className={componentClass}>{this.props.children}</div>
        )
    }
});
