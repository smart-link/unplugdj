Row = React.createClass({
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
            'row',
			this.props.className
		);

        return (
            <div className={componentClass}>{this.props.children}</div>
        )
    }
});
