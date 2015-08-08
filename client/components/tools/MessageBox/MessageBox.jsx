var Actions = Reflux.createActions([
    "getDateList"
]);

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*   스토어 부분
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */
var Store = Reflux.createStore({
    data: {
        'dateList'  : []
    },
    listenables: [Actions],
    // 날자 데이터를 가져오기...
    onGetDateList: function(keyword) {
        var store = this;
    },
    getInitialState: function() {
        return this.data;
    }
});

MessageBox = React.createClass({
    mixins: [Reflux.connect(Store, 'data')],

    componentWillMount: function() {
        Actions.getDateList();
    },

    render: function() {
        console.log(this.state.data);
        return (
            <div>Here is message box</div>
        );
    }
});