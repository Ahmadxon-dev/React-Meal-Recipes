import React, {useEffect, useState} from "react";
import {useParams, useHistory} from 'react-router-dom'
import {GetMealById} from "../api";
import Loader from "../components/Loader";
export default function Recipe() {
    const [recipe, setRecipe] = useState([]);
    const [showRecipe, setShowRecipe] = useState(false);
    const {id} = useParams();
    const {goBack} = useHistory();
    useEffect(() => {
        GetMealById(id).then(data=> setRecipe(data.meals[0]))
    }, []);
    const handleRecipeshow = () => {
        setShowRecipe(!showRecipe)
    }
    return(
        <>
            <button className={`btn`} onClick={goBack}>Go Back</button>
            {!recipe.idMeal ? <Loader/> : (
                <div className={`recipe`}>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                    <h1>{recipe.strMeal}</h1>
                    <h6><b>Category: </b> {recipe.strCategory} </h6>
                    {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                    <p> {recipe.strInstructions} </p>
                    <button className={`btn`} onClick={handleRecipeshow}>Show Recipe</button>
                    {showRecipe ? <table className={`centered`}>
                        <thead>
                        <tr>
                            <th>Ingredients</th>
                            <th>Measure</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(recipe).map(item => {
                            if (item.includes('Ingredient') && recipe[item]){
                                return(
                                    <tr>
                                        <td> {recipe[item]} </td>
                                        <td> {recipe[`strMeasure${item.slice(13)}`]} </td>
                                    </tr>
                                )
                            }
                        })}
                        </tbody>
                    </table> : null}
                    {recipe.strYoutube ? (
                        <div className={`row`}>
                            <h5>Video Recipe</h5>
                            <iframe  src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen frameBorder='0'/>
                        </div>
                    )  : null}

                </div>
            )}
        </>
    )
}