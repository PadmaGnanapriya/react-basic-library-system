import React, {useState} from "react";
import BookList from "./books/BookList";
import AddBook from "./books/AddBook";
import CreateBook from "./books/CreateBook";
import {Container} from "react-bootstrap";
import UpdateBook from "./books/UpdateBook";

const Books: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const [updateBookIndex, setUpdateBookIndex] = useState<number>(0);

    const handleEdit = (index: number) => {
        setIsEditable(true);
        setUpdateBookIndex(index);
        setIsVisible(false)
    }

    const changeCreatable = (val: boolean) => {
        setIsVisible(val);
        setIsEditable(false);
    };

    const hideUpdateForm = () => setIsEditable(false);


    return(
        <React.Fragment>
            <Container className="books m-1 p-0 mt-0 pt-0 pl-1 pr-3" fluid>
                <span className="text-left ml-1 pb-1 mb-4 books-title">Books</span>
                <BookList handleEdit = {handleEdit}/>
                {
                    !isVisible && <AddBook changeVisibility={changeCreatable}/>
                }{
                    isVisible && <CreateBook changeVisibility = {setIsVisible}/>
                }{
                    isEditable && <UpdateBook changeVisibility = {hideUpdateForm} keyIndex = {updateBookIndex}/>
                }
            </Container>
        </React.Fragment>
    );
}
export default Books;
