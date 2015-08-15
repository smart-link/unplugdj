/*
	ReacJS
	참고 : http://blog.coderifleman.com/post/122232296024/reactjs%EB%A5%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EB%8B%A41

	* PropTypes
			React.PropTypes.array,
			React.PropTypes.bool,
			React.PropTypes.func,
			React.PropTypes.number,
			React.PropTypes.object,
			React.PropTypes.string.isRequired   //필수
			React.PropTypes.oneOf(['News', 'Photos']),
*/

Button = React.createClass({
    propTypes: {
        className: React.PropTypes.string
    },

    // props: public 기본 값 타입 정의.
    getDefaultProps() {
		return {
            className: ''
		};
	},
    // props: public 기본 값 정의, this.props로 접근, 데이터 변경 불가.
    getInitialState() {
        return {
        };
    },
    render() {
        var componentClass = classNames(
            'ui',
			'button',
			this.props.className
		);

        return (
            <button className={componentClass}>{this.props.children}</button>
        )
    },

    //컴포넌트가 DOM 트리에 추가되기 전 한 번만 호출됩니다. 초기화 처리를 하는 데 사용할 수 있습니다.
	//이 안에서 setState하면 render 시에 사용됩니다. Server-side rendering 시에도 호출되므로 어느 쪽에서도 동작할 수 있는 코드를 작성해야 합니다.
	componentWillMount() {
	},
	//컴포넌트가 DOM 트리에 추가된 상태에 호출됩니다. DOM과 관련된 초기화를 하고 싶을 때 편리하게 사용할 수 있습니다.
	//componentWillMount()와 다른 게 Server-side rendering 시에 호출되지 않습니다.
	//따라서 DOM을 다루는 처리 외에, Ajax 요청이나 setInterval 등의 Server-side rendering 시에는 불필요한 초기화 처리는 이 메서드를 통해 진행합니다.
	componentDidMount() {
	},
	//Prop이 갱신될 때 호출됩니다. 컴포넌트가 새로운 DOM 트리에 추가될 때는 호출되지 않습니다.
	//부모 컴포넌트의 State가 Prop으로 전달되고, 그 값이 변화한 할 때 화면의 표시 이외 Notification 같은 추가 작업을 이 메서드를 통해 할 수 있습니다.
	//마지막으로 Prop의 값에 따라 State의 값을 갱신 할 때에도 사용합니다.
	componentWillReceiveProps(nextProps) {
	},
	//이 메서드는 다른 메서드 Lifecycle 메서드와 달리 true나 false를 반환할 필요가 있습니다.
	//컴포넌트가 rerender 하기 전에 호출되며, 만약 false를 반환하면 VirtualDOM 비교를 하지 않고 rerender도 하지 않습니다.
	//즉, 독자적으로 Prop이나 State 비교 처리를 구현하는 것으로 불필요한 계산을 하지 않을 수 있습니다. 보통 성능 향상을 목적으로 사용합니다.
	//이 메서드가 반환하는 기본값은 true 이므로 재정의 하지 않으면 항상 rerender 합니다. 강제적으로 rerender 하고자 할땐 forceUpdate()를 사용합니다.
	//forceUpdate()가 호출되는 경우엔 shouldComponentUpdate()는 호출되지 않습니다.
	shouldComponentUpdate(nextProps, nextState) {
		return true
	},
	//컴포넌트가 갱신되기 전에 호출됩니다. 최초엔 호출되지 않습니다. 이 안에서는 setState를 호출할 수 없으므로 Prop의 값을 이용해 setState 하고 싶은 경우엔 componentWillReceiveProps()를 사용합니다.
	componentWillUpdate(nextProps, nextState) {
	},
	//컴포넌트가 갱신된 뒤에 호출됩니다. 최초엔 호출되지 않습니다. DOM의 변화에 hook 하여 또 다른 작업을 하고 싶을 때 사용할 수 있습니다.
	componentDidUpdate(prevProps, prevState) {
	},
	//컴포넌트가 DOM에서 삭제될 때 호출됩니다. 이벤트 해제 같은 clean-up 처리 시 할 때 사용합니다. ComponentDidMount()에서 등록한 Timer의 처리나 DOM의 이벤트 등은 여기에서 해제해야 합니다.
	componentWillUnmount() {
	}
});
