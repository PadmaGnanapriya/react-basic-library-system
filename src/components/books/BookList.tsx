import React from "react";
import Book from "./Book";
import {IBook} from "../types/LibraryTypes";




type BooksProps={
    books:IBook[]
    handleDelete:(num:number)=>void
    handleEdit:(num:number)=>void
}

const BookList: React.FC<BooksProps> = (props) =>{
    const {books}=props;
    const renderBooks =books.map((book:IBook, index:number)=>
        <Book num={index+1} book={book} key={index} handleDelete={num =>props.handleDelete(num)}
              handleEdit={num =>props.handleEdit(num)}/>)
    return(
        <React.Fragment>
            {renderBooks}
        </React.Fragment>
    );
}
export default BookList;
