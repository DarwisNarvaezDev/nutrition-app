import React from 'react'
import { Button, Table } from 'react-bootstrap'
import '../sass/components/RecipeCard.scss'

const RecipeCard = () => {
    return (
        <>
            <div className='recipeCard'>
                <div className='cardHeader'>
                    <div className='recipeTitle'>
                        <h2><a href='#'>Recipe Name</a></h2>
                    </div>
                    <div className='headerBlock'>
                        <div className='cardImage'>
                            <img
                                src='https://m.ftscrt.com/static/recipe/2386b1d5-bd64-4785-8e4a-ffb114ed8a6b.jpg'
                                alt='recipe'
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
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>fat</td>
                                        <td>7.05</td>
                                    </tr>
                                    <tr>
                                        <td>Carbs</td>
                                        <td>2.05</td>
                                    </tr>
                                    <tr>
                                        <td>Protein</td>
                                        <td>6.40</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
                <div className='cardBody'>
                    <div>
                        Veniam laborum id et amet aliquip aliquip ad ea ullamco. Dolor sint ipsum nulla est aliquip magna in nisi proident minim ullamco velit Lorem aliqua. Excepteur velit quis ea pariatur ex aliquip cupidatat.
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeCard;