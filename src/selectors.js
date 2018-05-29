import R from 'ramda';

export const getSimilarDishes = state => {
    const {dishById} = state
    const {dishes} = state
    let result = []
    for(let i=0; i<dishes.length ; i++) {
        if(dishes[i].categoryId === dishById.categoryId && dishes[i].id !== dishById.id){
            result.push(dishes[i])
            if(result.length >= 4) {
                break
            }
        }
    }

    return result
}
