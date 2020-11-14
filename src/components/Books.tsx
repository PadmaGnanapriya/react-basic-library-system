import React, {useState} from "react";
import BookList from "./books/BookList";
import AddBook from "./books/AddBook";
import CreateBook from "./books/CreateBook";
import {Container} from "react-bootstrap";
import {IAuthor,IBook} from "./types/LibraryTypes";
import UpdateBook from "./books/UpdateBook";

type BooksProps = {
    authors: IAuthor[];
}

const Books: React.FC<BooksProps> = (props) => {
    const {authors} = props;
    const [books, setBooks] = useState<IBook[]>([]);
    const [isVisible, setIsVisible] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const [updateBookIndex, setUpdateBookIndex] = useState<number>(0);

    const handleOnAdd = (book:IBook) => {
        setBooks((books) => [...books, book]);
    }

    const handleDelete = (index:number) => {
        //eslint-disable-next-line no-restricted-globals
        let isDelete = confirm("Are you want to delete this Book?");
        if(! isDelete){
            return;
        }
        let copy = [...books]
        copy.splice(index, 1)
        setBooks(copy);
    };

    const handleEdit = (index: number) => {
        setIsEditable(true);
        setUpdateBookIndex(index);
        setIsVisible(false)
    }
    const handleBookUpdate = (updateBook: IBook, index: number)=>{
        const allBooks: IBook[] = books.slice();
        allBooks.splice(index, 1, updateBook);
        setBooks(allBooks);
        setIsEditable(false);
    }

    const changeCreatable = (val: boolean) => {
        setIsVisible(val);
        setIsEditable(false);
    };


    const hideUpdateForm = () => {
        setIsEditable(false);
    }

    return(
        <React.Fragment>
            <Container className="books m-1 p-0 mt-0 pt-0 pl-1 pr-3" fluid>
                <span className="text-left ml-1 pb-1 mb-4 books-title">Books</span>
                {(books.length === 0) && <label className='font-italic'>No Books listed here</label>}
                {
                    (books.length !== 0) &&
                    <BookList books = {books} handleDelete = {handleDelete} handleEdit = {handleEdit}/>
                }{
                    !isVisible &&
                    <AddBook changeVisibility={changeCreatable}/>
                }{
                    isVisible &&
                    <CreateBook onBookAdd = {handleOnAdd} changeVisibility = {setIsVisible} authors = {authors}/>
                }{
                    isEditable &&
                    <UpdateBook book={books[updateBookIndex]}  changeVisibility = {hideUpdateForm}
                    onBookUpdate = {handleBookUpdate}  authors = {authors}  keyIndex = {updateBookIndex}/>
                }
            </Container>
        </React.Fragment>
    );
}
export default Books;
