AccountLogin = React.createClass({
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(Template.loginButtons, React.findDOMNode(this.refs.container));
  },
  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  },
  render() {
    // Just render a placeholder container that will be filled in
    return (
      <div id="signModal" className="sign-modal">
        <div ref="container"></div>
        <div id="signInFrm" className="">
          <div className="p20">
            <h3 className="tuc">Sign in with Social</h3>

            <button className="fb s-btn mt20 fw"><i></i> Sign in with Facebook</button>
            <button className="tw s-btn mt10 fw"><i></i> Sign in with Twitter</button>
          </div>
          <hr className="or"/>
          <div className="p20">
            <h3 className="tuc">Sign in with Email</h3>
          
            <input type="email" placeholder="Email" className="fw mt20 p10"></input>

            <input type="password" placeholder="Password" className="fw mt10 p10"></input>
            <div className="mt10">
              <label for="reMe" className="mt5 ib"><input id="reMe" type="checkbox"></input> <span className="fs12">Remember me</span></label>
              <button className="p10 tuc btn fr">Log In</button>
            </div>
          </div>  
          <hr />

          <p className="alcenter fs12 mb10">
            Do not have an account? <a className="red" id="signUp" href="#signup">Sign Up</a>
          </p>
        </div>
      </div>
    )
  }
});