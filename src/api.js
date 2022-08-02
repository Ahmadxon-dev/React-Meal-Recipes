import {API_URL} from "./config";
const GetMealById = async(mealid) => {
    const reponse =await fetch(API_URL + 'lookup.php?i=' + mealid);
    return await reponse.json()
};
const GetAllCategories = async() => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json()
};

const GetFilterCategoriy = async (categoryName) =>{
    const response = await fetch(API_URL + 'filter.php?c=' + categoryName);
    return await response.json()
};
export {GetMealById, GetAllCategories, GetFilterCategoriy}