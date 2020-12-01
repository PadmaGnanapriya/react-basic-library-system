import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {AuthorActions, BookActions} from "../components/types/Actions";
import {AuthorReducer} from "./reducers/AuthorReducer";
import {BookReducer} from "./reducers/BookReducer";

export const rootReducer = combineReducers({
    author: AuthorReducer,
    book: BookReducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;


// export type RootState = ReturnType<typeof rootReducer>;
//
// export const Store =
//     createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AuthorActions, BookActions>));
//


// import { createStore} from "redux";
// import {BookReducer} from "./reducers/BookReducer";
// export const Store =createStore(BookReducer)
