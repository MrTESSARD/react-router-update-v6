import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit'

import thunk from 'redux-thunk';
import CommentReducer from './comments/reducerComments';
import phoneReducer from './phone/reducerPhone'
import tvReducer from "./tv/reducerTv";
import { composeWithDevTools } from "@redux-devtools/extension";

const initialState = {};
const middleware = [thunk];
// export const store = configureStore({
//     reducer: {
//       todos: todosReducer,
//       filters: filtersReducer
//     }
//   })

//option 1 avec combineReducers pour createStore
// export const rootReducer = combineReducers({
//   phone: phoneReducer,
//           television: tvReducer
// })


//Dans Reducer il y a State
// console.log(phoneReducer)

//option 2 avec configureStore
export const store = configureStore({

  // reducer: phoneReducer,
  reducer: {
          phone: phoneReducer,
          television: tvReducer,
          comments: CommentReducer
        }
  
},
initialState,
composeWithDevTools(applyMiddleware(...middleware))
  )
