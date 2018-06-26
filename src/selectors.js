import R from 'ramda';

export const getSimilarDishes =  (state, ownProps)  => {
    const dishById = getDishById(state, ownProps)
    const dishes = state.dishes.data
    let result = []
    for (let i = 0; i < dishes.length; i++) {
        if (dishes[i].categoryId === dishById.categoryId && dishes[i].id !== dishById.id) {
            result.push(dishes[i])
            if (result.length >= 4) {
                break
            }
        }
    }

    return result
}

export const getDishes = (state, ownProps) => {
    if (!state.dishes.data) return null
    const activeCategoryId = getActiveCategoryId(ownProps)
    console.log('activeCategoryId', activeCategoryId);
    const dishes = state.dishes.data
    if (activeCategoryId) {
        let result = dishes.filter((dish) => dish.categoryId === activeCategoryId)
        console.log('getDishes', result);
        return result
    }

    return dishes
}


export const getDishById = (state, ownProps) => {
    let result = null
    state.dishes.data.map(item => {
         if( item.id === ownProps.params.id) result = item
    })
    return result
}

export const getActiveCategoryId = ownProps => {
    return ownProps.params.id
}
