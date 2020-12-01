import {createStore, combineReducers, applyMiddleware} from "redux";
import {AuthorReducer} from "./reducers/AuthorReducer";
import {BookReducer} from "./reducers/BookReducer";

export const rootReducer = combineReducers({
    author: AuthorReducer,
    book: BookReducer
});

const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;

export default store;


