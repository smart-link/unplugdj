App = React.createClass({
	render() {
		return (
			<div>
				<main className="alcenter">  
	  
		      <div id="title">
		        <img src="images/main/entry-main-logo-v1.png"  alt="Wecome Music Entry Zone Let's Play" />
		      </div>

		      <a id="loginBtn" href="/account/login" className="" title="login">
		        <img src="images/main/entry-main-login-btn-v1.png"  alt="login" />
		      </a>

		    </main>

		    <div id="darkBg" className="dark-bg">
    		</div>

		    <footer className="alcenter">

		      <nav className="">
	          <a href="#">About</a>
	          <a href="#">Blog</a>
	          <a href="#">Support</a>
	          <a href="#">Terms</a>
	          <a href="#">Privacy</a>
	          <a href="#">Press</a>
		      </nav>

		      <div id="copyright">
		        ©2015 Entry Zone, Inc.
		      </div>
		      
		    </footer>
	    </div>
		);
	}
});
