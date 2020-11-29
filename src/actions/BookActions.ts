import {IBook, UpdatableBook} from "../components/types/LibraryTypes";
import {
    ADD_BOOK,
    DELETE_BOOK,
    SHOW_BOOK_LIST, UPDATE_BOOK
} from "../components/types/Actions";


export const addBook = (book: IBook): { payload: IBook; type: string } => ({
    type: ADD_BOOK,
    payload: book
});

export const deleteBook = (index: number): { payload: number; type: string } => ({
    type: DELETE_BOOK,
    payload: index
});

export const updateBook = (bookData: UpdatableBook): { payload: UpdatableBook; type: string } => ({
    type: UPDATE_BOOK,
    payload: bookData
});

export const showBookList = (): { payload: IBook[]; type: string } => ({
    type: SHOW_BOOK_LIST,
    payload: [{title: '', author: {name: ''}, isbn: ''}]
});

