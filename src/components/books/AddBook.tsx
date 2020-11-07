import React from "react";
import {Container, Row} from "react-bootstrap";

type addBookProps={
    changeVisibility:(val:boolean)=>void;
}

const AddBook: React.FC<addBookProps> = (props) => {

    return(
        <React.Fragment>
            <Container>
                <Row className="add-book mt-3 mb-4" >
                    <i className='feather icon-plus' onClick={()=>props.changeVisibility(true)}></i>
                    <span onClick={()=>props.changeVisibility(true)}>Add Book</span>
                </Row>
            </Container>
        </React.Fragment>
    );
};
export default AddBook;
