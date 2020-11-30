import React, {useState} from "react";
import BookList from "./books/BookList";
import AddBook from "./books/AddBook";
import CreateBook from "./books/CreateBook";
import {Col, Container, Row} from "react-bootstrap";
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
            <Container className="books">
                <Row>
                    <Col className="text-left pl-0 py-1 mb-4 books-title">Books</Col>
                </Row>
                <Row>
                    <Col>
                        <BookList handleEdit = {handleEdit}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AddBook changeVisibility={changeCreatable}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={9}>
                        {isVisible && <CreateBook changeVisibility = {setIsVisible}/>}{
                        isEditable && <UpdateBook changeVisibility = {hideUpdateForm} keyIndex = {updateBookIndex}/>}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}
export default Books;
