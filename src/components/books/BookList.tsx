import React from "react";
import Book from "./Book";
import {IBook} from "../types/LibraryTypes";
import {useSelector} from "react-redux";
import {BookState} from "../../store/reducers/BookReducer";




type BooksProps = {
    handleEdit: (num: number) => void
}

const BookList: React.FC<BooksProps> = (props) =>{
    // const books:any = useSelector<BookState>((state) => state.books);
    
    const books =[{title:'Padma Book', isbn:'123', author:{name:'Padma'}}]


    const renderBooks =books.map((book: IBook, index: number) =>
        <Book num={index+1} book={book} key={index} handleEdit={num =>props.handleEdit(num)}/>
    );

    return(
        <React.Fragment>
            {renderBooks}
        </React.Fragment>
    );
}
export default BookList;
