import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {IAuthor} from "./types/LibraryTypes";
import Authors from "./Authors";
import Books from "./Books";

const TextArea:React.FC = () => {
    const sampleAuthors = [
        {name: "William Shakespeare"},
        {name: "Emily Dickinson"},
        {name: "H. P. Lovecraft"},
        {name: "Arthur Conan Doyle"},
    ];


    return(
        <React.Fragment>
            <Row>
                <Col className="ml-4 mr-4 p-0 pl-3">
                    <Books  authors = {sampleAuthors} />
                </Col>
                <Col className="ml-4 mr-5 p-0 pl-4">
                    <Authors/>
                </Col>
            </Row>
        </React.Fragment>
    );
}
export default TextArea;
