import {IBook} from "../../components/types/LibraryTypes";
import {ADD_BOOK, BookActions, DELETE_BOOK, SHOW_BOOK_LIST, UPDATE_BOOK} from "../../components/types/Actions";

export interface BookState {
    books: IBook[]
}

const initialState = {
    books: [{title: "Padma Story", author: {name: 'Padma'}, isbn: '2323'}]
}

const BookReducer = (
    state: BookState = initialState,
    action: BookActions
) => {
    switch (action.type) {
        case ADD_BOOK:
            console.log("ADD book run"+ action.payload)
            return {...state, books: [...state.books, action.payload]}

        case SHOW_BOOK_LIST:
            return state

        case DELETE_BOOK:
            const allBook: IBook[] = state.books.slice();
            allBook.splice(action.payload, 1);
            state.books = allBook
            return state

        case UPDATE_BOOK:
            console.log("Updated  "+action.payload.index+"__"+ action.payload.book)
            const allBooks: IBook[] = state.books.slice();
            allBooks.splice(action.payload.index, 1, action.payload.book);
            state.books = allBooks;
            console.log(allBooks)
            return state

        default:
            return state;
    }
}

export {BookReducer};
