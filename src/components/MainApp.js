import React, { useReducer, useState, useEffect } from 'react'
import FilterComponent from './FilterComponent';
import HeaderComponent from './HeaderComponent';
import RecipeCardSkeleton from './RecipeCardSkeleton';

import '../sass/components/RecipesPanel.scss';
import RecipeSpinner from './RecipeSpinner';
import { InitialStates } from '../reducer/InitialStates';
import { NutritionAppReducer } from '../reducer/NutritionAppReducer';

const MainApp = ({ props }) => {

    const { userState } = props;

    // Hooks
    const [state, dispatch] = useReducer(NutritionAppReducer, InitialStates);
    const [userDisplayed, setUserDisplayed] = useState('');

    useEffect(() => {
        setUserDisplayed(userState);
    }, [props])


    return (
        <>
            <HeaderComponent />
            <RecipeSpinner />
            <section className='mainAppWrapper'>
                <FilterComponent />
                <div className='mainAppRecipesWrapper'>
                    <div className='userInfo'>Recipes for: {userDisplayed}</div>
                    <RecipeCardSkeleton />
                </div>
            </section>
        </>
    )
}

export default MainApp