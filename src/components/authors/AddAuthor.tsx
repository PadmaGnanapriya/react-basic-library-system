import React from "react";
import {Container, Row} from "react-bootstrap";

type AddAuthorProps = {
    setIsVisible: (val: boolean) => void;
}

const AddAuthor: React.FC<AddAuthorProps> = (props) => {

    const onClickAction = () => props.setIsVisible(true);

    return (
        <React.Fragment>
            <Row className="add-author mt-3 mb-4">
                <i className='feather icon-plus' onClick={onClickAction}/>
                <span onClick={onClickAction}>Add Author</span>
            </Row>
        </React.Fragment>
    );
};

export default AddAuthor;
