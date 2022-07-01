import React from 'react'
import { Alert } from 'react-bootstrap'

const SearchAlert = () => {
    return (
        <>
            {/* <div className='alertWrapper animate__animated animate__fadeOut animate__delay-5s'> */}
            <div className='alertWrapper animate__animated'>
                <Alert key={"success"} variant={"success"}>
                    XX Results found
                </Alert>
            </div>
        </>
    )
}

export default SearchAlert