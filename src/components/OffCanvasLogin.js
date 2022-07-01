import React, { useEffect, useReducer, useRef, useState } from 'react'
import { Button, FloatingLabel, Form, Offcanvas, OverlayTrigger, Popover } from 'react-bootstrap';
import GoogleButton from 'react-google-button'
import '../sass/index.scss'
import '../sass/components/OffCanvas.scss'
import { Reducer } from '../reducer/Reducer';
import { InitialStates } from '../reducer/InitialStates';
import GoogleLogin from 'react-google-login';

const OffCanvasLogin = ({ props }) => {

    // Hooks
    const [showLogin, setShowLogin] = useState(props);
    const [state, dispatch] = useReducer(Reducer, InitialStates);
    const userRef = useRef("");

    const popOverMessage = `We don't store your data ;) .`;

    const handleLoginForm = (e) => {
        e.preventDefault();
        const userName = userRef.current.value != "" ? userRef.current.value : state.userName;
        // Push to reducer's states
        dispatch({ type: 'SET_USER', payload: userName });
        setShowLogin(false);
    };

    const handleGoogleLogin = (userData) => {
        const { name } = userData.profileObj;
        dispatch({ type: 'SET_USER', payload: name })
        setShowLogin(false);
    };

    return (
        <>
            <Offcanvas show={showLogin} placement="start">
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        <div className='OffCanvasTitle'>
                            <h1>Welcome to Nutrition App</h1>
                            <p>Powered by <a href='https://www.fatsecret.com/'>FatSecret</a></p>
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
                                                <Button onClick={handleLoginForm} variant='primary'>Let's go!</Button>
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Tell us your name"
                                        className="mb-3"
                                    >
                                        <Form.Control ref={userRef} type="text" />
                                    </FloatingLabel>
                                </OverlayTrigger>
                            </div>
                            <div className='loginFormHeader'>Or...</div>
                            <GoogleLogin
                                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                buttonText='Log in with Google'
                                onSuccess={handleGoogleLogin}
                                onFailure={handleGoogleLogin}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                            />
                            <div className='loginFormFooter'></div>
                        </form>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default OffCanvasLogin