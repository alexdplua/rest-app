import dishes from './mockDishes';
import categories from './mockCategories';

export const fetchDishes = () => {
    return dishes
}


export const fetchDishById = id => {
    let dish = {}
    dishes.map((item) => item.id === id ? dish = item : null)
    return dish
}


export const fetchCategories = () => {
    return categories
}
