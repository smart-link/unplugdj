var Actions = Reflux.createActions([
    "close"
]);

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*   스토어 부분
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */
var Store = Reflux.createStore({
    data: {
        'dateList'  : []
    },

    listenables: [Actions],

    onClose: function() {
    },

    getInitialState: function() {
        return this.data;
    }
});

Dialog = React.createClass({
    mixins: [Reflux.connect(Store, 'data')],

    // state: private 기본 값 정의, this.state로 접근, 데이터 변경 가능.
    getInitialState: function() {
		return {
			display: true
		};
	},
	// props: public 기본 값 타입 정의.
	propTypes: {
        display: React.PropTypes.bool,
        onClose: React.PropTypes.func
    },
    // props: public 기본 값 정의, this.props로 접근, 데이터 변경 불가.
	getDefaultProps: function() {
        return {
            display: true,
            onClose: function () {}
        };
    },

    render: function() {
        // console.log(this.state.data);

        var content = <div/>;

        return (
        	<div>
        		{ (this.props.display) ?
		            <div className="Dialog">
		            	<button type="button" onClick={this.props.onClose}>close</button>
		            </div>
		        	: ''
		    	}
            {content}
	        </div>
        );
    },

    componentWillMount: function() {
    },
    componentDidMount: function() {

    },
    componentWillReceiveProps: function (nextProps) {

    },
    shouldComponentUpdate: function() {
      return true;
    },
    //컴포넌트가 갱신되기 전에 호출됩니다. 최초엔 호출되지 않습니다. 이 안에서는 setState를 호출할 수 없으므로 Prop의 값을 이용해 setState 하고 싶은 경우엔 componentWillReceiveProps()를 사용합니다.
    componentWillUpdate: function(nextProps, nextState) {
    },
    //컴포넌트가 갱신된 뒤에 호출됩니다. 최초엔 호출되지 않습니다. DOM의 변화에 hook 하여 또 다른 작업을 하고 싶을 때 사용할 수 있습니다.
    componentDidUpdate: function (prevProps, prevState) {
    },
    componentWillUnmount: function() {
    },
});
