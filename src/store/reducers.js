
import {combineReducers} from 'redux'
import { searchReducer } from './search/SearchReducer'


export default  combineReducers({
    search : searchReducer,
})