import { LOAD_DATA} from './SearchAction'

const initialState = {
    data:{hits:null},
    
}

export const searchReducer = (state = initialState , action) => {
    switch (action.type){
        case LOAD_DATA:
            return{
                ...state,
                data: action.payload,
                

            }    
        default :
            return{
                state
            }
    }
}