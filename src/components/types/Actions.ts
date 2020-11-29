import {IBook, IAuthor, UpdatableAuthor, UpdatableBook} from "./LibraryTypes";

export const ADD_AUTHOR = 'ADD_AUTHOR';
export const ADD_BOOK = 'ADD_BOOK';
export const UPDATE_AUTHOR = 'UPDATE_AUTHOR';
export const UPDATE_BOOK = 'UPDATE_BOOK';
export const DELETE_AUTHOR = 'DELETE_AUTHOR';
export const DELETE_BOOK = 'DELETE_BOOK';
export const SHOW_AUTHOR_LIST = 'SHOW_AUTHOR_LIST';
export const SHOW_BOOK_LIST = 'SHOW_BOOK_LIST';

export interface AddAuthorAction {
    type: typeof ADD_AUTHOR;
    payload: IAuthor;
}

export interface AddBookAction {
    type: typeof ADD_BOOK;
    payload: IBook;
}

export interface UpdateAuthorAction {
    type: typeof UPDATE_AUTHOR;
    payload: UpdatableAuthor;
}

export interface UpdateBookAction {
    type: typeof UPDATE_BOOK;
    payload: UpdatableBook;
}

export interface DeleteAuthorAction {
    type: typeof DELETE_AUTHOR;
    payload: number;
}

export interface DeleteBookAction {
    type: typeof DELETE_BOOK;
    payload: number;
}

export interface ShowAuthorListAction {
    type: typeof SHOW_AUTHOR_LIST;
    payload: IAuthor[];
}

export interface ShowBookListAction {
    type: typeof SHOW_BOOK_LIST;
    payload: IBook[];
}

export type AuthorActions = AddAuthorAction | UpdateAuthorAction | DeleteAuthorAction | ShowAuthorListAction

export type BookActions = AddBookAction | UpdateBookAction | DeleteBookAction | ShowBookListAction
