import React, {FormEvent, useEffect, useState} from "react";
import {IAuthor, UpdatableAuthor} from "../types/LibraryTypes";
import {Col, Button, Form} from "react-bootstrap"
import {useDispatch} from "react-redux";
import {updateAuthor} from "../../store/actions/AuthorActions";

type UpdateAuthorProps = {
    onAuthorUpdated: (newAuthor: IAuthor, index: number) => void;
    keyIndex: number;
    isUpdatable: (val: boolean) => void;
    author: IAuthor;
}

const UpdateAuthor: React.FC<UpdateAuthorProps> = (props) => {
    const {keyIndex, author} = props;
    const [validated, setValidated] = useState(false);
    const [authorName, setAuthorName] = useState<string | null>(author.name);

    useEffect(() => {
        setAuthorName(author.name);
    }, [author])

    const dispatch = useDispatch();
    const updateAuthorDispatch = (authorData: UpdatableAuthor) => {
        dispatch(updateAuthor(authorData));
    };

    const handleOnSubmit = (event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        if (authorName !== null && authorName !== '') {
            updateAuthorDispatch({author: {name: authorName}, index: keyIndex});
            setValidated(false);
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
            );
            props.isUpdatable(false);
            setAuthorName(null);
        } else {
            setValidated(true);
        }
    };

    const onChangeAuthorField = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuthorName(e.target.value);
        setValidated(false);
    }

    const onClickClose = () => {
        props.isUpdatable(false);
    }

    return (
        <React.Fragment>
            <div className="update-author mt-2 mb-5 pb-2 pt-5">
                <Form.Row>
                    <Col className="text-left pl-1 mb-3">
                        <span>Update Author</span>
                    </Col>
                    <Col className="text-right">
                        <i className='feather icon-x-circle text-dark text-right' onClick={onClickClose}/>
                    </Col>
                </Form.Row>

                <Form noValidate validated={validated} className="pl-5" onSubmit={handleOnSubmit}>
                    <Form.Row>
                        <Form.Group controlId="authorSelectID" className="form-group-dev">
                            <Form.Label className="text-left label-text">Name of Author</Form.Label>
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
