import React from "react";
import {Container, Row} from "react-bootstrap";

type addBookProps = {
    changeVisibility: (val: boolean) => void;
}


const AddBook: React.FC<addBookProps> = (props) => {

    const onClickAction = () => {
        props.changeVisibility(true);
    }

    return(
        <React.Fragment>
            <Container>
                <Row className="add-book mt-3 mb-4" >
                    <i className='feather icon-plus' onClick={onClickAction}></i>
                    <span onClick={onClickAction}>Add Book</span>
                </Row>
            </Container>
        </React.Fragment>
    );
};
export default AddBook;
