import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'

const SearchAlert = ({ props }) => {

    // Constants
    const { type, message } = props;

    // Hooks
    const [messageToShow, setMessageToShow] = useState(null);
    const [messageClass, setMessageClass] = useState('alertWrapper');
    const [renderAgain, setRenderAgain] = useState(false);

    // const message = props !== null ? `Food type of ` : state.searchAlertMessage;

    useEffect(() => {
        setRenderAgain(true);
        setMessageToShow(message);
        setMessageClass(type);
        setTimeout(() => {
            setRenderAgain(false);
        }, 2000);
        return () => {
            setMessageToShow(message);
            setMessageClass(type);
        }
    }, [props])


    return (
        <>
            {renderAgain ? (
                <div className={'alertWrapper'}>
                    <Alert key={messageClass} variant={messageClass}>
                        {messageToShow}
                    </Alert>
                </div>
            ) : (
                <div className={'alertWrapper animate__animated animate__fadeOut animate__delay-2s'}>
                    <Alert key={messageClass} variant={messageClass}>
                        {messageToShow}
                    </Alert>
                </div>
            )}

        </>
    )
}

export default SearchAlert