import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {IAuthor} from "./types/LibraryTypes";
import Authors from "./Authors";

const TextArea:React.FC =()=>{
    const sampleAuthors = [
        {name: "William Shakespeare"},
        {name: "Emily Dickinson"},
        {name: "H. P. Lovecraft"},
        {name: "Arthur Conan Doyle"},
        {name: "Leo Tolstoy"},
        {name: "Edgar Allan Poe"},
        {name: "Robert Ervin Howard"},
        {name: "Rabindranath Tagore"},
        {name: "Rudyard Kipling"},
        {name: "Seneca"}
    ];

    const [authors, setAuthors]= useState<IAuthor[]>(sampleAuthors);
    /**
     * CURD - Create, Update, Read/List Delete
     *
     */

    const handleOnAuthorCreated = (newAuthor: IAuthor) => {
        const allAuthors: IAuthor[] = authors ? authors.slice() : [];
        allAuthors.push(newAuthor);
        setAuthors(allAuthors);
    };



    return(
        <React.Fragment>
            <Row>
                <Col>Books</Col>
                <Col><Authors authors={authors}/></Col>
            </Row>
        </React.Fragment>
    );
}
export default TextArea;
