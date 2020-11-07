import React from "react";
import {Container, Row} from "react-bootstrap";

type AddAuthorProps={
    setIsVisible:(val:boolean)=>void;
}

const AddAuthor:React.FC<AddAuthorProps> =(props)=>{
    return(
        <React.Fragment>
            <Container>
                <Row className="add-author mt-3 mb-4" >
                    <i className='feather icon-plus' onClick={()=>props.setIsVisible(true)}></i>
                    <span onClick={()=>props.setIsVisible(true)}>Add Author</span>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default AddAuthor;