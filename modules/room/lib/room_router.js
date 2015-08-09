FlowRouter.route('/rooms', {
    // do some action for this route
    action: function(params, queryParams) {
        // console.log("Params:", params);
        // console.log("Query Params:", queryParams);
        // ReactLayout.render(AppLayout, {
        // 	content: <MainComponent />
        // })
        ReactLayout.render(Room);
    }
});


FlowRouter.route('/rooms/:roomdId', {
    // do some action for this route
    action: function(params, queryParams) {
        // console.log("Params:", params);
        // console.log("Query Params:", queryParams);
        // ReactLayout.render(AppLayout, {
        // 	content: <MainComponent />
        // })
        ReactLayout.render(Room);
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
