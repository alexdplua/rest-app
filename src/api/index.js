import dishes from './mockDishes';

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
