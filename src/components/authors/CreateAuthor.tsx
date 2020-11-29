import React, {FormEvent, useState} from "react";
import {IAuthor} from "../types/LibraryTypes";
import {Col, Button, Form} from "react-bootstrap"
import {addAuthor} from "../../store/actions/AuthorActions";
import {useDispatch} from "react-redux";

type CreateAuthorProps = {
    onAuthorCreated: (newAuthor: IAuthor) => void;
    setIsVisible: (val: boolean) => void;
}

const CreateAuthor:React.FC<CreateAuthorProps> = (props) => {
    const [validated, setValidated] = useState(false);
    const [author, setAuthor] =useState<string|null>(null);

    const dispatch = useDispatch();
    const addAuthorDispatch = (author: IAuthor) => {
        dispatch(addAuthor(author));
    };

    const handleOnSubmit = (event:FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        if(author !== null && author !== ''){
            addAuthorDispatch({name:author});
            setValidated(false);
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
            );
            setAuthor(null);
        }else {
            setValidated(true);
        }
    };

    const onChangeAuthorField = (e:React.ChangeEvent<HTMLInputElement>) => {
        setAuthor(e.target.value);
        setValidated(false);
    }

    const closeVisible = () => {
        props.setIsVisible(false)
    }

    return(
        <React.Fragment>
            <div className="create-author mt-2 mb-5 pb-2 pt-5">
                <Form.Row>
                    <Col className="text-left pl-1 mb-3">
                        <span>Create Author</span>
                    </Col>
                    <Col  className="text-right">
                        <i className='feather icon-x-circle text-dark text-right' onClick={closeVisible}/>
                    </Col>
                </Form.Row>

                <Form noValidate validated={validated} className="pl-5" onSubmit={handleOnSubmit}>
                    <Form.Row>
                        <Form.Group controlId="authorSelectID"  className="form-group-dev">
                            <Form.Label className="text-left label-text">Name of Author</Form.Label>
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
