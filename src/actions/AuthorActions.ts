import {IAuthor, UpdatableAuthor} from "../components/types/LibraryTypes";
import {ADD_AUTHOR, DELETE_AUTHOR, SHOW_AUTHOR_LIST, UPDATE_AUTHOR} from "../components/types/Actions";


export const addAuthor = (author: IAuthor): { payload: IAuthor; type: string } => ({
    type: ADD_AUTHOR,
    payload: author
});

export const deleteAuthor = (index: number): { payload: number; type: string } => ({
    type: DELETE_AUTHOR,
    payload: index
});

export const updateAuthor = (authorData: UpdatableAuthor): { payload: UpdatableAuthor;  type: string } => ({
    type: UPDATE_AUTHOR,
    payload: authorData
});

export const showAuthorList = (): { payload: IAuthor[]; type: string } => ({
    type: SHOW_AUTHOR_LIST,
    payload: [{name:''}]
});

