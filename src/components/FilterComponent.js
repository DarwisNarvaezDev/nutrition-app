import React, { useEffect, useState } from 'react'
import '../sass/components/MainPanel.scss'
import { Alert, Badge, FloatingLabel, Form } from 'react-bootstrap';
import SearchAlert from './SearchAlert';
import { CallApiForTypes } from '../helper/PhoneBooth';

const FilterComponent = () => {

    // hooks
    const [typeTags, settypeTags] = useState(['Waiting...']);

    const getRecipeTypes = async () => {
        const recipeTypes = await CallApiForTypes();
        settypeTags(recipeTypes);
    };

    useEffect(() => {
        getRecipeTypes();
    }, [typeTags])
    

    return (
        <>
            <div className='mainAppStatsWrapper'>
                <div className='filterHeader'>
                    <h1>Nutrition App</h1>
                    <p>Powered by <a href='https://www.fatsecret.com/'>FatSecret</a></p>
                </div>
                <div className='filterBody'>
                    <div>
                        {
                            typeTags.map( element => {
                                return (
                                    <Badge pill bg='secondary'>{element}</Badge>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='filterFooter'>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name your favorite ingredient"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                        {/* Alert */}
                        <SearchAlert />
                    </FloatingLabel>
                </div>
            </div>
        </>
    )
}

export default FilterComponent