import React from "react";
import Book from "./Book";
import {IBook} from "../types/LibraryTypes";
import {useSelector} from "react-redux";
import {BookState} from "../../store/reducers/BookReducer";
import {RootState} from "../../store/Store";


type BooksProps = {
    handleEdit: (num: number) => void
}

/**
 * make book components according to state.book
 * @param props
 * @constructor
 */
const BookList: React.FC<BooksProps> = (props) => {
    const {books} = useSelector((state: RootState) => state.book)

    const renderBooks = books.map((book: IBook, index: number) =>
        <Book num={index + 1} book={book} key={index} handleEdit={num => props.handleEdit(num)}/>
    );

    return (
        <React.Fragment>
            {renderBooks}
        </React.Fragment>
    );
}
export default BookList;
