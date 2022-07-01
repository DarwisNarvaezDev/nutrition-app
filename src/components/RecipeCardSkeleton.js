import React from 'react'
import { Button, Table } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import '../sass/components/RecipeCard.scss'

const RecipeCardSkeleton = () => {
    return (
        <>
            <div className='recipeCard'>
                <div className='cardHeader'>
                    <div className='recipeTitleSkeleton'>
                        <h2><Skeleton /></h2>
                    </div>
                    <div className='headerBlock'>
                        <div className='cardImage'>
                            <div className='cardImageSkeleton'>

                            </div>
                        </div>
                        <div className='cardStats'>
                            <Table >
                                <thead>
                                    <tr>
                                        <th><Skeleton /></th>
                                        <th><Skeleton /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>
                                    </tr>
                                    <tr>
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>
                                    </tr>
                                    <tr>
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>
                                    </tr>
                                    <tr>
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
                <div className='cardBody'>
                    <div>
                    <Skeleton count={4} />
                    </div>
                </div>
                <div className='cardFooter'>
                </div>
            </div>
        </>
    )
}

export default RecipeCardSkeleton