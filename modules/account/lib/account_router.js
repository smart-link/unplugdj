FlowRouter.route('/account/login', {
    // do some action for this route
    action: function(params, queryParams) {
        // console.log("Params:", params);
        // console.log("Query Params:", queryParams);
        // ReactLayout.render(AppLayout, {
        // 	content: <MainComponent />
        // })
        ReactLayout.render(AccountLogin);
    }
});