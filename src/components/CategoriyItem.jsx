import {Link} from "react-router-dom";

export default function CategoriyItem({idCategory,strCategory,strCategoryThumb,strCategoryDescription}) {
    return(
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory}/>
            </div>
            <div className="card-content">
                <h2 className="card-title"><b>{strCategory}</b></h2>
                <p>{strCategoryDescription.slice(0,60)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${strCategory}`} className={`btn`}>Watch Category</Link>
            </div>

        </div>
    )
}