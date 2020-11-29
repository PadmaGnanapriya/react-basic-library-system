import {AuthorReducer} from "./reducers/AuthorReducer";
import { createStore} from "redux";

export const Store =createStore(AuthorReducer)
