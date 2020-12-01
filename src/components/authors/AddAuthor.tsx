import React from "react";
import {Row} from "react-bootstrap";

type AddAuthorProps = {
    setIsVisible: (val: boolean) => void;
}
/**
 * Add author clickable unit render.
 * @param props
 * @constructor
 */
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
