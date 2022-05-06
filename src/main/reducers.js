import { combineReducers } from 'react-redux';

const rootReducer = combineReducers({
    todo: () => ({
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
    })
})

export default rootReducer
