import React, {FormEvent, useState} from "react";
import {IAuthor} from "../types/LibraryTypes";
import {Col, Button, Form} from "react-bootstrap"

type UpdateAuthorProps={
    onAuthorUpdated:(newAuthor:IAuthor, index:number)=>void;
    keyIndex:number;
    isUpdatable:(val:boolean)=>void;
    author:IAuthor;
}

const UpdateAuthor:React.FC<UpdateAuthorProps> = (props)=>{
    const {keyIndex,author}=props;
    const [validated, setValidated] = useState(false);
    const [authorName, setAuthorName] =useState<string|null>(author.name);


    const handleSubmit = (event:FormEvent) => {
        const form = event.currentTarget;
        // @ts-ignore
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else if(authorName !== null && authorName !== ''){
            props.onAuthorUpdated({name: authorName},keyIndex);
            setValidated(false);
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
            );
            props.isUpdatable(false);
            setAuthorName(null);
        }else {
            setValidated(true);
        }
    };

    return(
        <React.Fragment>
            <div className="update-author">
                <Form.Row>
                    <Col className="text-left pl-1 mb-3">
                        <span>Update Author</span>
                    </Col>
                    <Col  className="text-right">
                        <i className='feather icon-x-circle text-dark text-right' onClick={()=> props.isUpdatable(false)}/>
                    </Col>
                </Form.Row>

                <Form noValidate validated={validated} className="pl-5">
                    <Form.Row>
                        <Form.Group controlId="authorSelectID"  className="form-bootstrap-area">
                            <Form.Label className="text-left label-text">Name of Author</Form.Label>
                            <Form.Control required type="text" className="form-input"
                                          placeholder="" value={authorName ? authorName : ''}
                                          onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setAuthorName(e.target.value)}/>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Button onClick={event => handleSubmit(event)}size='sm' variant='primary'
                            className='float-right update-button'>
                        Update
                    </Button>
                </Form>
            </div>
        </React.Fragment>
    );
}
export default UpdateAuthor;
