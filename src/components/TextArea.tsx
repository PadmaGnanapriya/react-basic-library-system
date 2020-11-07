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

    /* Create new author- copy existing author list and append an new author into the new copied list */
    const handleOnAuthorCreated = (newAuthor: IAuthor) => {
        const allAuthors: IAuthor[] = authors ? authors.slice() : [];
        allAuthors.push(newAuthor);
        setAuthors(allAuthors);
    };
    /* Update new author- copy existing author list and  change the author in copied list using index */
    const handleOnAuthorUpdated = (editedAuthor: IAuthor, index: number) => {
        const allAuthors: IAuthor[] = authors.slice();
        allAuthors.splice(index, 1, editedAuthor);
        setAuthors(allAuthors);
    };

    /* Read authors - Need not function here. directly pass 'authors' is enough */

    /* Delete new author- copy existing author list and delete the given author from the copied list */
    const handleAuthorDeleted = (index: number) => {
        const allAuthors: IAuthor[] = authors.slice();
        allAuthors.splice(index, 1);
        setAuthors(allAuthors);
    };




    return(
        <React.Fragment>
            <Row>
                <Col>
                    Books
                </Col>
                <Col>
                    <Authors authors={authors} onAuthorCreated={handleOnAuthorCreated}
                              onAuthorDeleted={handleAuthorDeleted}
                              onAuthorUpdated={handleOnAuthorUpdated}/>
                </Col>
            </Row>
        </React.Fragment>
    );
}
export default TextArea;
