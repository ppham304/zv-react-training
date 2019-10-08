import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-Container">
                    <div>
                        <p className="Content-Header">Book a trip. Host travelers. All on Airbnb.</p>
                    </div>
                    <div>
                        <Row>
                            <Col span={8}>
                                <div className="Header-Button-Text">
                                    Find places to stay and things to do
                                </div>
                                <div>
                                    <Button className="Header-Button" ghost>Explore</Button>
                                </div>
                            </Col>
                            <Col span={8} style={{ margin: '0 30px' }}>
                                <div className="Header-Button-Text">
                                    Earn money from your extra space
                                </div>
                                <div>
                                    <Button className="Header-Button" ghost>Host</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
