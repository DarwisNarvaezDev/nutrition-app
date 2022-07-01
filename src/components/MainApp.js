import React from 'react'
import FilterComponent from './FilterComponent';
import HeaderComponent from './HeaderComponent';
import RecipeCardSkeleton from './RecipeCardSkeleton';

import '../sass/components/RecipesPanel.scss';
import RecipeSpinner from './RecipeSpinner';
import RecipeCard from './RecipeCard';

const MainApp = () => {
    return (
        <>
            <HeaderComponent />
            <RecipeSpinner />
            <section className='mainAppWrapper'>
                <FilterComponent />
                <div className='mainAppRecipesWrapper'>
                    <RecipeCardSkeleton />
                </div>
            </section>
        </>
    )
}

export default MainApp