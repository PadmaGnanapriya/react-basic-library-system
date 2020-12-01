import React from "react";
import {Container, Row} from "react-bootstrap";

type addBookProps = {
    changeVisibility: (val: boolean) => void;
}

/**
 * Add book clickable text creates
 * @param props
 * @constructor
 */
const AddBook: React.FC<addBookProps> = (props) => {

    const onClickAction = () => props.changeVisibility(true);

    return (
        <React.Fragment>
            <Row className="add-book mt-3 mb-4">
                <i className='feather icon-plus' onClick={onClickAction}/>
                <span onClick={onClickAction}>Add Book</span>
            </Row>
        </React.Fragment>
    );
};
export default AddBook;
