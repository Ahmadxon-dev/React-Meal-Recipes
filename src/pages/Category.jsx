import {useParams, useHistory, useLocation, useRouteMatch} from 'react-router-dom'
import React, {useEffect, useState} from "react";
import {GetFilterCategoriy} from "../api";
import Loader from "../components/Loader";
import MealList from "../components/MealList";
export default function Category() {
    const {name} = useParams();
    // const {goBack} = useHistory();
    // const value = useLocation();
    // const value = useRouteMatch()
    // console.log(value)
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        GetFilterCategoriy(name).then(data => setMeals(data.meals))
    }, [name]);
    return(
        <>
            {!meals.length ? <Loader/> : <MealList meals={meals}/>}
        </>
    )
}