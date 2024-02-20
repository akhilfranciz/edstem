import { combineReducers } from 'redux'
import counterReducer from './counterReducer'



const rootReducer = combineReducers({
  counterData: counterReducer,
  
})

export default rootReducer
