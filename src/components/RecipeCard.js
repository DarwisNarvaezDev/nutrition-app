import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import '../sass/components/RecipeCard.scss'

const RecipeCard = ({props}) => {

    // Constants
    const noImage = 'https://images.assetsdelivery.com/compings_v2/pavelstasevich/pavelstasevich1811/pavelstasevich181101032.jpg';

    const {
        recipe_description,
        recipe_name,
        recipe_nutrition,
        recipe_url,
    } = props;

    const { calories,
        carbohydrate,
        fat,
        protein } = recipe_nutrition;

    const recipeImg = props.recipe_image ? props.recipe_image : noImage;

    return (
        <>
            <div className='recipeCard'>
                <div className='cardHeader'>
                    <div className='recipeTitle'>
                        <h2><a href={recipe_url}>{recipe_name}</a></h2>
                    </div>
                    <div className='headerBlock'>
                        <div className='cardImage'>
                            <img
                                src={recipeImg}
                                alt={recipe_name}
                            ></img>
                        </div>
                        <div className='cardStats'>
                            <Table >
                                <thead>
                                    <tr>
                                        <th>Nutrition Facts</th>
                                        <th>Units</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Calories</td>
                                        <td>{calories}</td>
                                    </tr>
                                    <tr>
                                        <td>fat</td>
                                        <td>{fat}</td>
                                    </tr>
                                    <tr>
                                        <td>Carbs</td>
                                        <td>{carbohydrate}</td>
                                    </tr>
                                    <tr>
                                        <td>Protein</td>
                                        <td>{protein}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
                <div className='cardBody'>
                    <div>
                        {recipe_description}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeCard;