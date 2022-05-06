const INITIAL_STATE =  {

description: 'Read a book', 
    list: [{
        _id: 1,
        description:'Pay the credit card bill',
        done: true,
    }, {
        _id: 2,
        description: 'Team meeting at 10:00',
        done: false,
    }, {
        _id: 3,
        description: 'Doctor appointment tuesday (after lunch)',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}