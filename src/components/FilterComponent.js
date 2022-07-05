import React, { useEffect, useReducer, useRef, useState } from 'react'
import '../sass/components/MainPanel.scss'
import { Badge, FloatingLabel, Form } from 'react-bootstrap';
import SearchAlert from './SearchAlert';
import { CallApiForRecipes, CallApiForTypes } from '../helper/PhoneBooth';
import { NutritionAppReducer } from '../reducer/NutritionAppReducer';
import { InitialStates } from '../reducer/InitialStates';

const FilterComponent = ({ props }) => {

    // props
    const { cards, loading } = props;
    const { cardsDisplayed, setCardsDisplayed } = cards;
    const { setIsFetchLoading } = loading;

    // Constants
    const classWhenTypeIsNotSelected = 'secondary';
    const classWhenTypeIsSelected = 'info';

    // hooks
    const [state, dispatch] = useReducer(NutritionAppReducer, InitialStates);
    const [typeTags, settypeTags] = useState([{ className: 'secondary', type: 'Waiting...' }]);
    const foodRef = useRef(null);

    const [renderNotifyer, setRenderNotifyer] = useState(false);
    const [typeSelected, setTypeSelected] = useState(null);
    const [notifyerObject, setNotifyerObject] = useState(null);

    const getRecipeTypes = async () => {
        const recipeTypes = await CallApiForTypes();
        const typeSelectedByUserWithClasses = recipeTypes.map(element => {
            return {
                className: classWhenTypeIsNotSelected,
                type: element
            }
        });
        settypeTags(typeSelectedByUserWithClasses);
    };

    const handleType = (elementData) => {

        const { element, event } = elementData;

        const typeSelectedByUser = event.target.textContent;

        // Exchange objects
        const notifyerExchange = {
            type: 'success',
            message: `Food of type: '${typeSelectedByUser}' selected, now tell us the ingredient.`
        };

        // Use this to fetch for recipes
        setTypeSelected(typeSelectedByUser);
        setNotifyerObject(notifyerExchange);
        setRenderNotifyer(true);

        // Change the element className
        const oldTypeSelected = typeTags.filter(type => type.className === 'info');
        if (oldTypeSelected.length === 0) {
            element.className = classWhenTypeIsSelected;
        } else {
            oldTypeSelected[0].className = classWhenTypeIsNotSelected;
            element.className = classWhenTypeIsSelected;
        }

    };

    const handleRecipes = async () => {

        const userInput = foodRef.current.value;
        const recipeTypeToFetch = typeSelected !== null ? typeSelected : null;
        const fetchObject = {
            recipeTypeToFetch: recipeTypeToFetch,
            userInput: userInput
        };

        setIsFetchLoading(true);
        const data = await CallApiForRecipes(fetchObject);
        if (data) {
            setIsFetchLoading(false);
            setCardsDisplayed(data);
        }
    };

    useEffect(() => {
        console.log(props);
        getRecipeTypes();
    }, [])

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
                            typeTags.map(element => {
                                return (
                                    <Badge
                                        key={element.type}
                                        pill
                                        bg={element.className}
                                        onClick={(e) => {
                                            const elementData = { element: element, event: e };
                                            handleType(elementData);
                                            handleRecipes();
                                        }} >{element.type}</Badge>
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
                        <Form.Control
                            ref={foodRef}
                            type="text"
                            placeholder="floatingInput"
                            onKeyUp={(e) => {
                                handleRecipes(e);
                            }}
                        />
                        {renderNotifyer && <SearchAlert props={notifyerObject} />}
                    </FloatingLabel>
                </div>
            </div>
        </>
    )
}

export default FilterComponent