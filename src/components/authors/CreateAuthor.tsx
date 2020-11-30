import React, {FormEvent, useState} from "react";
import {IAuthor} from "../types/LibraryTypes";
import {Col, Row, Button, Form} from "react-bootstrap"
import {addAuthor} from "../../store/actions/AuthorActions";
import {useDispatch} from "react-redux";

type CreateAuthorProps = {
    setIsVisible: (val: boolean) => void;
}

const CreateAuthor: React.FC<CreateAuthorProps> = (props) => {
    const [validated, setValidated] = useState(false);
    const [author, setAuthor] = useState<string>('');
    const dispatch = useDispatch();
    const addAuthorDispatch = (author: IAuthor) => dispatch(addAuthor(author));
    const closeVisible = () => props.setIsVisible(false)

    const handleOnSubmit = (event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        if (author !== '') {
            addAuthorDispatch({name: author});
            setValidated(false);
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
            );
            setAuthor('');
        } else {
            setValidated(true);
        }
    };

    const onChangeAuthorField = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuthor(e.target.value);
        setValidated(false);
    }

    return (
        <React.Fragment>
            <div className="form-area mt-2 mb-5 pb-2 pt-5">
                <Form.Row>
                    <Col xs sm={10} className="text-left pl-1 mb-3">
                        <span>Create Author</span>
                    </Col>
                    <Col xs sm={2} className="text-right pr-2">
                        <i className='feather icon-x-circle text-dark text-right' onClick={closeVisible}/>
                    </Col>
                </Form.Row>

                <Form noValidate validated={validated} className="form-div pl-4" onSubmit={handleOnSubmit}>
                    <Form.Row>
                        <Form.Group className="col-12" controlId="authorSelectID">
                            <Form.Label className="float-left label-text">Name of Author</Form.Label>
                            <Form.Control required type="text" className="form-input" onChange={onChangeAuthorField}/>
                            <Form.Control.Feedback type="invalid">Author name can not be empty!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Button type="submit" size='sm' variant='primary' className='float-right create-button'>Create
                    </Button>
                </Form>
            </div>
        </React.Fragment>
    );
}
export default CreateAuthor;
