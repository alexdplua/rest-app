import dishes from './mockDishes';
import categories from './mockCategories';

export const fetchDishes = async () => {
    return new Promise(resolve => {
        resolve(dishes)
    })
}


export const fetchDishById = async id => {
    return new Promise(resolve => {
        let dish = {}
        dishes.map((item) => item.id===id ? dish = item : null)
        resolve(dish)
    })
}


export const fetchCategories = async () => {
    return new Promise(resolve => {
        resolve(categories)
    })
}
