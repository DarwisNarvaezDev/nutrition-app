import React from 'react'
import '../sass/components/MainPanel.scss'
import { Alert, Badge, FloatingLabel, Form } from 'react-bootstrap';
import SearchAlert from './SearchAlert';

const FilterComponent = () => {
    return (
        <>
            <div className='mainAppStatsWrapper'>
                <div className='filterHeader'>
                    <h1>Nutrition App</h1>
                    <p>Powered by <a href='https://www.fatsecret.com/'>FatSecret</a></p>
                </div>
                <div className='filterBody'>
                    <div>
                        <Badge pill bg='secondary'>Main Course</Badge>
                        <Badge pill bg='info'>Breakfast</Badge>
                        <Badge pill bg='secondary'>Dinner</Badge>
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