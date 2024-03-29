import React, {FormEvent, useEffect, useState} from "react";
import {Col, Button, Form} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux";
import {updateAuthor} from "../../store/actions/AuthorActions";
import {RootState} from "../../store/Store";

type UpdateAuthorProps = {
    keyIndex: number;
    isUpdatable: (val: boolean) => void;
}

/**
 * Create update-author react boostrap form
 * @param props
 * @constructor
 */
const UpdateAuthor: React.FC<UpdateAuthorProps> = (props) => {
    const {keyIndex} = props;
    const [validated, setValidated] = useState(false);
    const {authors} = useSelector((state: RootState) => state.author)
    const [authorName, setAuthorName] = useState<string>(authors[keyIndex].name);
    const dispatch = useDispatch();

    useEffect(() => {
        setAuthorName(authors[keyIndex].name);
    }, [keyIndex])

    const handleOnSubmit = (event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        if (authorName !== '') {
            dispatch(updateAuthor({author: {name: authorName}, index: keyIndex}));
            setValidated(false);
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
            );
            props.isUpdatable(false);
            setAuthorName('');
        } else {
            setValidated(true);
        }
    };

    const onChangeAuthorField = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuthorName(e.target.value);
        setValidated(false);
    }

    const onClickClose = () => props.isUpdatable(false);

    return (
        <React.Fragment>
            <div className="form-area mt-2 mb-5 pb-2 pt-5">
                <Form.Row>
                    <Col className="text-left pl-1 mb-3">
                        <span>Update Author</span>
                    </Col>
                    <Col className="text-right">
                        <i className='feather icon-x-circle text-dark text-right' onClick={onClickClose}/>
                    </Col>
                </Form.Row>

                <Form noValidate validated={validated} className="form-div pl-4" onSubmit={handleOnSubmit}>
                    <Form.Row>
                        <Form.Group className="col-12" controlId="authorSelectID">
                            <Form.Label className="float-left label-text">Name of Author</Form.Label>
                            <Form.Control required type="text" className="form-input" onChange={onChangeAuthorField}
                                          placeholder="" value={authorName ? authorName : ''}/>
                            <Form.Control.Feedback type="invalid">Author name can not be empty!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Button type="submit" size='sm' variant='primary' className='float-right update-button'>
                        Update
                    </Button>
                </Form>
            </div>
        </React.Fragment>
    );
}
export default UpdateAuthor;
