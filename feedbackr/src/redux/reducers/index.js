import dbReducer from './dbReducer'
import quizReducer from './quizReducer'
import {combineReducers} from 'redux'
import questionReducer from './questionReducer'
const allReducers = combineReducers({
    dbReducer,
    quizReducer,
    questionReducer,
})

export default allReducers



