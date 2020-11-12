

const initialState = {
    items: [],
    isLoaded: false
}

const pizzas = (state = initialState, action:any) => {

    if (action.type === 'SET_PIZZAS') {
        return {
            ...state,
            items: action.payload,
            isLoaded: true
        }
    }

    return state;

}


export default pizzas