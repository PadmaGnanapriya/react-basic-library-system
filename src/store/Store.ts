import {AuthorReducer} from "./reducers/AuthorReducer";
import { createStore} from "redux";
import {BookReducer} from "./reducers/BookReducer";

// export const Store =createStore(AuthorReducer)
export const Store =createStore(BookReducer)
