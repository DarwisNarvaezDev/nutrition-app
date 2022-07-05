import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import '../sass/components/Spinner.scss'

const RecipeSpinner = ({props}) => {

    const { isFetchLoading } = props.loading;

    useEffect(() => {
    }, [props])
    
    return (
        <>
            <div className='spinnerWrapper'>
                { isFetchLoading && (
                    <Spinner animation='grow' variant='success' />
                )}
            </div>
        </>
    )
}

export default RecipeSpinner