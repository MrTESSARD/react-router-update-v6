import {BUY_TV} from './type'

//state
const initialStateTv ={
    tv: 5
}

const tvReducer = (state=initialStateTv, action)=>{//pure function
    switch (action.type) {
        case BUY_TV:
            return{
                ...state,
                tv: state.tv-1
            }
    
        default:return state
    }

}

export default tvReducer