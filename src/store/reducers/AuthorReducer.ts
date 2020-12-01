import {IAuthor} from "../../components/types/LibraryTypes";
import {
    ADD_AUTHOR,
    AuthorActions,
    DELETE_AUTHOR,
    SHOW_AUTHOR_LIST,
    UPDATE_AUTHOR
} from "../../components/types/Actions";

export interface AuthorState {
    authors: IAuthor[]
}

const initialState = {
    authors: [{name: "Padma"}, {name: "Ovindu"}]
}

const AuthorReducer = (
    state: AuthorState = initialState,
    action: AuthorActions
) => {
    switch (action.type) {
        case ADD_AUTHOR:
            return {...state, authors: [...state.authors, action.payload]}

        case SHOW_AUTHOR_LIST:
            return state

        case DELETE_AUTHOR:
            const allAuthor: IAuthor[] = state.authors.slice();
            allAuthor.splice(action.payload, 1);
            state.authors = allAuthor
            return state

        case UPDATE_AUTHOR:
            const allAuthors: IAuthor[] = state.authors.slice();
            allAuthors.splice(action.payload.index, 1, action.payload.author);
            state.authors = allAuthors;
            return state

        default:
            return state;
    }
}

export {AuthorReducer};
