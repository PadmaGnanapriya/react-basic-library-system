import React, {FormEvent, useState} from "react";
import {IAuthor} from "../types/LibraryTypes";
import {Col, Button, Form} from "react-bootstrap"

type CreateAuthorProps={
    onAuthorCreated:(newAuthor:IAuthor)=>void;
    setIsVisible:(val:boolean)=>void;
}

const CreateAuthor:React.FC<CreateAuthorProps> = (props)=>{
    const [validated, setValidated] = useState(false);
    const [author, setAuthor] =useState<string|null>(null);


    const handleSubmit = (event:FormEvent) => {
        const form = event.currentTarget;
        // @ts-ignore
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else if(author !== null && author !== ''){
            props.onAuthorCreated({name:author});
            setValidated(false);
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
            );
            setAuthor(null);
        }else {
            setValidated(true);
        }
    };

    return(
        <React.Fragment>
            <div className="create-author mt-2 mb-5 pb-2 pt-5">
                <Form.Row>
                    <Col className="text-left pl-1 mb-3">
                        <span>Create Author</span>
                    </Col>
                    <Col  className="text-right">
                        <i className='feather icon-x-circle text-dark text-right' onClick={()=>props.setIsVisible(false)}/>
                    </Col>
                </Form.Row>

                <Form noValidate validated={validated} className="pl-5">
                    <Form.Row>
                        <Form.Group controlId="authorSelectID"  className="form-group-dev">
                            <Form.Label className="text-left label-text">Name of Author</Form.Label>
                            <Form.Control required type="text" className="form-input"
                                          onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setAuthor(e.target.value)}/>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Button onClick={event => handleSubmit(event)}size='sm' variant='primary'
                            className='float-right create-button'>
                        Create
                    </Button>
                </Form>
            </div>
        </React.Fragment>
    );
}
export default CreateAuthor;
