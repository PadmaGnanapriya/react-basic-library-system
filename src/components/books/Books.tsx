import React, {useState} from "react";
import BookList from "./BookList";
import AddBook from "./AddBook";
import CreateBook from "./CreateBook";
import {Col, Row} from "react-bootstrap";
import UpdateBook from "./UpdateBook";

/**
 * render books section in text area
 * @constructor
 */
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
            <div className="books p-2 pl-sm-3 pr-sm-3 pl-md-4 pr-md-4 pl-lg-5 pr-lg-5">
                <Row>
                    <Col className="text-left p-0 py-1 mb-4 books-title">Books</Col>
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
                    <Col xs={12} sm={12} md={9} className="p-0 pr-md-4">
                        {isVisible && <CreateBook changeVisibility = {setIsVisible}/>}{
                        isEditable && <UpdateBook changeVisibility = {hideUpdateForm} keyIndex = {updateBookIndex}/>}
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}
export default Books;
