// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
// import headerReducer from '../common/header/store/reducer';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer }   from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';



const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer
})

export default reducer;

// const defaultStatus = {
//     focused: false
// };

// export default (state = defaultStatus, action) => {
//     if (action.type === 'search_focus') {
//         return {
//             focused: true
//         }
//     }

//     if(action.type === 'search_blur') {
//         return {
//             focused: false
//         }
//     }

//     return state;
// }