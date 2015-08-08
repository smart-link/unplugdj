// /~
FlowRouter.route('/', {
    // do some action for this route
    action: function(params, queryParams) {
        // console.log("Params:", params);
        // console.log("Query Params:", queryParams);
        // ReactLayout.render(AppLayout, {
        // 	content: <MainComponent />
        // })
        ReactLayout.render(App);
    }
});


// /flights/~
var flightRoutes = FlowRouter.group({
    prefix: "/flights"
});

flightRoutes.route('/', {
	name: 'flights.main',
    action: function(parmas) {
        ReactLayout.render(FlightMain);
    }
});



//<Route path="/" layout={App} content={BlogList} />
// Reaktor.init(
//     <Router>
//         <Route path="/" layout={App} />
//         <Route path="/flights" layout={FlightMain}>
//         </Route>
//     </Router>
// );