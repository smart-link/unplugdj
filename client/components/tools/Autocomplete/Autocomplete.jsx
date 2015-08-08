var Actions = Reflux.createActions([
    'searchDefaultCity',
    'searchByKeyword'
]);

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*   스토어 부분
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */
var Store = Reflux.createStore({
    data: {
        'defaultCityList'   : [],       // 주요도시
        'cityList'          : [],       // 검색결과
        'keyword'           : ''        // 검색어
    },
    listenables: [Actions],
    // 키워드로 검색하기
    onSearchByKeyword: function(keyword) {
        this.data.keyword = keyword;
        var store = this;
        // 1글자 미만이면 리턴
        if (keyword.length < 1) {
            store.data.cityList = [];
            store.trigger(store.data);
            return;
        }

        return;

        HTTP.post('http://192.168.1.35:8080/flights/destinations', {data: {
            'method': 'search',
            'apikey': 'sdfdsfds',
            'condition': {'terms': keyword}
        }}, function(err, result) {
            if (!err) {
                store.data.cityList = result.data.result;
                store.trigger(store.data);
            }else{
                console.log(result);
                alert(result.content);
            }
        });
    },
    // 주요도시 검색하기
    onSearchDefaultCity: function() {
        this.data.keyword = 'seou';
        var store = this;

        return;

        HTTP.post('http://192.168.1.35:8080/flights/destinations', {data: {
            'method': 'search',
            'apikey': 'sdfdsfds',
            'condition': {'terms': 'seou'}
        }}, function(err, result) {
            if (!err) {
                store.data.cityList = result.data.result;
                store.data.defaultCityList = result.data.result;
                store.trigger(store.data);
            }else{
                console.log(result);
                alert(result.content);
            }
        });
    },
    getInitialState: function() {
        return this.data;
    },
});

AutoComplete = React.createClass({
    mixins: [Reflux.connect(Store, 'data')],
    propTypes: {
        onCitySelected: React.PropTypes.func
    },
    getDefaultProps: function() {
        return {
            onCitySelected: function () {}
        };
    },
    componentWillMount: function() {
        Actions.searchDefaultCity();
    },
    typeContent: null,
    // 검색박스 입력 이벤트 핸들러
    handleValueChange: function(evt) {
        if (this.typeContent) {
            clearTimeout(this.typeContent);
        }
        var text = evt.target.value;

        // 연속해서 입력할 경우 마지막만 통신...
        this.typeContent = setTimeout(function(){
            Actions.searchByKeyword(text);
        }, 300);
    },

    // 도시선택 이벤트
    handleCitySelected: function(index, evt) {
        var city = this.state.data.cityList[index];
        this.props.onCitySelected(city);
    },
    render: function() {
        return <div/>;

        console.log('rendering start', this.state.data);
        var that = this;
        var cityList = that.state.data.cityList;
        var defaultCityList = that.state.data.defaultCityList;

        if (cityList && cityList.length > 0) {
            // 검색후 검색결과가 있을경우...
            return (
                <div>
                    <input placeholder="도시이름을 입력하세요" onChange={that.handleValueChange} />
                    <div>
                        {cityList.map(function(city, i) {
                            return (<div key={i}>
                                <h2 onClick={that.handleCitySelected.bind(that, i)}>{city.text}</h2>
                            </div>)
                        })}
                    </div>
                </div>
            );
        }else if (that.state.data.keyword === '') {
            // 키보드액셕을 취한후 키보드가 빈값으로 되었을경우...
            return (
                <div>
                    <input placeholder="도시이름을 입력하세요" onChange={that.handleValueChange} />
                    <div>
                        {defaultCityList.map(function(city, i) {
                            return (<div key={i}>
                                <h2 onClick={that.handleCitySelected.bind(that, i)}>{city.text}</h2>
                            </div>)
                        })}
                    </div>
                </div>
            );
        }else {
            // 검색결과가 없을 경우...
            return (
                <div>
                    <input placeholder="도시이름을 입력하세요" onChange={that.handleValueChange} />
                    <div>검색결과가 없습니다.</div>
                </div>
            );
        }
    }
});