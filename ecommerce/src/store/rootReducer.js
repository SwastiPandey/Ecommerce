import { combineReducers } from "redux";
import reducer from "../redux/Reducer";

const rootReducer = combineReducers({
 product : reducer
});
export default rootReducer;