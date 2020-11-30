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
            <Form noValidate validated={validated} className="form-div" onSubmit={handleOnSubmit}>
                <Row>
                    <Col className="pl-0 pb-3 pt-4">
                        <span className="float-left">Create Author</span>
                        <i className='feather icon-x-circle text-dark float-right' onClick={closeVisible}/>
                    </Col>
                </Row>
                <Row className="pl-2 pl-sm-4 mb-4">
                    <Col sm={12} xs={12}>
                        <Form.Label className="float-left text-field-label">Name of Author</Form.Label>
                    </Col>
                    <Col sm={12} xs={12}>
                        <Form.Control required type="text" className="form-input" onChange={onChangeAuthorField}/>
                    </Col>
                    <Col sm={12} xs={12}>
                        <Form.Control.Feedback type="invalid">Author name can not be empty!</Form.Control.Feedback>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type="submit" variant='primary' className='float-right form-button'>Create
                        </Button>
                    </Col>
                </Row>

            </Form>
        </React.Fragment>
    );
}
export default CreateAuthor;
