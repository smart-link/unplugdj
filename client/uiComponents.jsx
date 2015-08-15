if (Meteor.isClient) {
    UIComponents = React.createClass({
        propTypes: {
        },
        getInitialState() {
            return {
            };
        },
        componentDidMount() {
        },
        componentWillUnmount() {
        },
        handleClickTest() {
            console.log('card clicked.');
        },
        render() {
            var bgwhite = {
                backgroundColor: '#fff'
            }
            return (
                <div>
                    <div>
                        <h2>elements</h2>
                        <hr/>

                        <div>
                            <h3>button</h3>
                            <div>
                                <Button className="ui button animated">
                                    Primary
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>collections</h2>
                        <hr/>
                        <div style={bgwhite}>
                            <h3>grid</h3>
                            <div>
                                <Grid>
                                    <Row>
                                        <Col>column</Col>
                                        <Col>column</Col>
                                        <Col>column</Col>
                                        <Col>column</Col>
                                        <Col>column</Col>
                                        <Col>column</Col>
                                        <Col>column</Col>
                                        <Col>column</Col>
                                        <Col>column</Col>
                                        <Col>column</Col>
                                        <Col>column</Col>
                                        <Col>column</Col>
                                        <Col>column</Col>
                                        <Col>column</Col>
                                        <Col>column</Col>
                                        <Col>column</Col>
                                    </Row>
                                </Grid>
                            </div>
                        </div>

                        <div>
                            <h3>card</h3>
                            <div>
                                <Card onClick={this.handleClickTest}>
                                    <CardImage>
                                        <img src="http://semantic-ui.com/images/avatar2/large/matthew.png"/>
                                    </CardImage>
                                    <CardContent>
                                        <div className="header">Matt Giampietro</div>
                                        <div className="meta">
                                            <a>Friends</a>
                                        </div>
                                        <div className="description">
                                            Matthew is an interior designer living in New York.
                                        </div>
                                    </CardContent>
                                    <CardExtraContent>
                                        <span className="right floated">
                                            Joined in 2013
                                        </span>
                                        <span>
                                        <i className="user icon"></i>
                                            75 Friends
                                        </span>
                                    </CardExtraContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    });
}
