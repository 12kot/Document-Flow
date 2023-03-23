import { combineReducers, legacy_createStore as createStore} from "redux";
import authReducer from "./authReducer";
import diskReducer from "./diskReducer";


let reducers = combineReducers({
    auth: authReducer,
    disk: diskReducer,
})

let store = createStore(reducers);

export default store;