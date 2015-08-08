var Actions = Reflux.createActions([
    "getDateList",
    "selectDate"
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
        HTTP.post('http://192.168.1.35:8080/data/calendar', {data: {
            'method': 'get',
            'condition': {
                'fromDate'  : '2015-08-01',
                'firstDay'  : 'SUN',
                'months'    : 12
            }
        }}, function(err, result) {
            if (!err) {
                store.data.dateList = result.data;
                store.trigger(store.data);
            }else{
                console.log(result);
                alert(result.content);
            }
        });
    },
    getInitialState: function() {
        return this.data;
    }
});

Datepicker = React.createClass({
    mixins: [Reflux.connect(Store, 'data')],

    componentWillMount: function() {
        Actions.getDateList();
    },

    render: function() {
        console.log(this.state.data);
        return (
            <div className="Datepicker">
            </div>
        );
    }
});