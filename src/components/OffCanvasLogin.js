import React, { useEffect, useState } from 'react'
import { FloatingLabel, Form, Offcanvas, OverlayTrigger, Popover } from 'react-bootstrap';
import GoogleButton from 'react-google-button'
import '../sass/index.scss'
import '../sass/components/OffCanvas.scss'

const OffCanvasLogin = ({props}) => {

    const [showLogin, setShowLogin] = useState(props);

    const popOverMessage = `We don't store your data ;) .`;

    const handleLoginForm = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Offcanvas show={showLogin} placement="start">
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        <div className='OffCanvasTitle'>
                            <h1>Welcome to Nutrition App</h1>
                            <p>Powered by Fat Secret</p>
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='loginBody'>
                        <form onSubmit={handleLoginForm}>
                            <div className='loginFormHeader'>Let's Get started</div>
                            <div className='loginFormBody'>
                                <OverlayTrigger
                                    trigger="click"
                                    key={"right"}
                                    placement={"right"}
                                    overlay={
                                        <Popover id="Right popover">
                                            <Popover.Header as="h3">Just to address our recipe later</Popover.Header>
                                            <Popover.Body>
                                                <strong>Don't be shy<br />  </strong> {popOverMessage}
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Tell us your name"
                                        className="mb-3"
                                    >
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </FloatingLabel>
                                </OverlayTrigger>
                            </div>
                            <div className='loginFormHeader'>Or...</div>
                            <GoogleButton />
                            <div className='loginFormFooter'></div>
                        </form>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default OffCanvasLogin