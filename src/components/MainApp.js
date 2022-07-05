import React, { useState, useEffect } from 'react'
import FilterComponent from './FilterComponent';
import HeaderComponent from './HeaderComponent';
import RecipeCardSkeleton from './RecipeCardSkeleton';

import '../sass/components/RecipesPanel.scss';
import RecipeSpinner from './RecipeSpinner';
import RecipeCard from './RecipeCard';

const MainApp = ({ props }) => {

    // props
    const { userState } = props;

    // Hooks
    const [userDisplayed, setUserDisplayed] = useState('');

    const [cardsDisplayed, setCardsDisplayed] = useState([]);
    const [isFetchLoading, setIsFetchLoading] = useState(false);

    // State Object
    const stateObject = {
        cards: { cardsDisplayed: cardsDisplayed, setCardsDisplayed: setCardsDisplayed },
        loading: { isFetchLoading: isFetchLoading, setIsFetchLoading: setIsFetchLoading }
    };

    useEffect(() => {
        setUserDisplayed(userState);
    }, [props])

    return (
        <>
            <HeaderComponent />
            <RecipeSpinner props={stateObject} />
            <section className='mainAppWrapper'>
                <FilterComponent props={stateObject} />
                <div className='mainAppRecipesWrapper'>
                    <div className='userInfo'>Recipes for: {userDisplayed}</div>
                    {cardsDisplayed.length > 0 ? (cardsDisplayed.map(element => {
                        return (
                            <RecipeCard props={element} />
                        )
                    })) : <><RecipeCardSkeleton /> <RecipeCardSkeleton /> <RecipeCardSkeleton /></>  }
                </div>
            </section>
        </>
    )
}

export default MainApp