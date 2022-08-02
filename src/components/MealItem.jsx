import {Link} from "react-router-dom";

export default function MealItem({strMeal,strMealThumb,idMeal}) {
    return(
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal}/>
            </div>
            <div className="card-content">
                <h2 className="card-title"><b>{strMeal}</b></h2>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className={`btn`}>Watch Recipe</Link>
            </div>

        </div>
    )
}