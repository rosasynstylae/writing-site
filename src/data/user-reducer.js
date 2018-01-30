const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                [action.id]: {
                    text: action.text,
                    completed: false
                },
                ...state
            };
        default:
            return state;
    }
}

export default userReducer;