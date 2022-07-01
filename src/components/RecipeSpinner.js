import React from 'react'
import { Spinner } from 'react-bootstrap'
import '../sass/components/Spinner.scss'

const RecipeSpinner = () => {
    return (
        <>
            <div className='spinnerWrapper'>
                <Spinner animation='grow' variant='success' />
            </div>
        </>
    )
}

export default RecipeSpinner