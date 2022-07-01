import React, { useReducer, useState, useEffect } from 'react'
import FilterComponent from './FilterComponent';
import HeaderComponent from './HeaderComponent';
import RecipeCardSkeleton from './RecipeCardSkeleton';

import '../sass/components/RecipesPanel.scss';
import RecipeSpinner from './RecipeSpinner';
import RecipeCard from './RecipeCard';
import { Reducer } from '../reducer/Reducer';
import { InitialStates } from '../reducer/InitialStates';

const MainApp = () => {
    
    // Hooks
    const [state, dispatch] = useReducer(Reducer, InitialStates);
    const [user, setUser] = useState("");

    useEffect(() => {
        console.log(state.userName);
    }, [])
    
    
    return (
        <>
            <HeaderComponent />
            <RecipeSpinner />
            <section className='mainAppWrapper'>
                <FilterComponent />
                <div className='mainAppRecipesWrapper'>
                    <div className='userInfo'>Recipes for: {user}</div>
                    <RecipeCardSkeleton />
                </div>
            </section>
        </>
    )
}

export default MainApp