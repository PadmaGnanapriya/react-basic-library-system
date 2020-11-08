import React, {FormEvent, useEffect, useState} from "react";
import {Col, Button, Form} from "react-bootstrap"
import {IAuthor, IBook} from "../types/LibraryTypes";
import Select, {ValueType} from 'react-select';
import {ReactSelectOption} from "../types/LibraryTypes";

type UpdateBookProps={
    onBookUpdate:(book:IBook, index:number)=>void;
    authors:IAuthor[];
    book:IBook;
    keyIndex:number;
    changeVisibility:()=>void;
}

// @ts-ignore
const UpdateBook:React.FC<UpdateBookProps> =(props) =>{
    const {authors, book, keyIndex} = props;
    // @ts-ignore
    const [authorOptions, setAuthorOptions] = useState<ReactSelectOption[]>([]);
    const [selectedAuthor, setSelectedAuthor] = useState<ValueType<ReactSelectOption>>({value: '1', label:book.author.name});
    const [title, setTitle]=useState<string>(book.title);
    const [isbn, setISBN]=useState<string>(book.isbn);
    const [author, setAuthor]=useState<string>(book.author.name);

    useEffect(() => {
        const options: ReactSelectOption[] = authors ? authors.map((author: IAuthor, index: number) => {
            const authorOption: ReactSelectOption = {value: index + '', label: author.name};
            return authorOption;
        }) : [];

        setAuthorOptions(options)
    }, [authors]);


    const [validated, setValidated] = useState(false);
    const handleUpdate = (event:FormEvent) => {
        const form = event.currentTarget;
        // @ts-ignore
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else if(title!== null && isbn !== null && title !== '' && isbn !== ''){
            // @ts-ignore
            props.onBookUpdate({title:title, isbn:isbn, author:author},keyIndex);
            setValidated(false);
        }else {
            setValidated(true);
        }
    };

    const handleOnBookAuthorChange = (selectedOption: ValueType<ReactSelectOption>) => {
        setSelectedAuthor(selectedOption);
        const index = parseInt((selectedOption as ReactSelectOption).value);
        const author: IAuthor | null = authors ? authors[index]: null
        // @ts-ignore
        setAuthor(author);
    };

    const customSelectStyles = {
        control: (provided:any, state:any) => ({
            ...provided,
            borderRadius:0,
            border: '2px solid #989898',
            minHeight: '31px',
            height: '31px',
            boxShadow: state.isFocused ? null : null,
        }),
        input: (provided:any, state:any) => ({
            ...provided,
            margin: '0px',
        }),
        indicatorsContainer: (provided:any, state:any) => ({
            ...provided,
            height: '28px',
        }),
    }

    return(
        <div className="update-book mt-2 mb-5 pb-2 pt-5">
            <Form.Row>
                <Col className="text-left pl-1 mb-3">
                    <span>Update Book</span>
                </Col>
                <Col  className="text-right">
                    <i className='feather icon-x-circle text-dark text-right' onClick={() => props.changeVisibility()}/>
                </Col>
            </Form.Row>
            <Form noValidate validated={validated} className="pl-5">

                <Form.Row>
                    <Form.Group controlId="titleSelectID"  className="form-group-dev">
                        <Form.Label className="text-left label-text">Title of Book</Form.Label>
                        <Form.Control required type="text" className="form-input" placeholder="" value={title ? title : ''}
                                      onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setTitle(e.target.value)}/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="isbnSelectID"   className="form-group-dev">
                        <Form.Label className="text-left label-text">ISBN</Form.Label>
                        <Form.Control className="form-input"  required type="text" placeholder="" value={isbn ? isbn : ''}
                                      onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setISBN(e.target.value)}/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Label className="text-left author-label">Author</Form.Label>
                    <Form.Group controlId="authorSelectID"  className="form-group-dev">
                        <Select
                            styles={customSelectStyles}
                            value={selectedAuthor}
                            onChange={handleOnBookAuthorChange}
                            options={authorOptions}
                        />
                    </Form.Group>
                </Form.Row>
                <Button onClick={event => handleUpdate(event)}size='sm' variant='primary'
                        className='float-right update-button'>
                    Update
                </Button>
            </Form>
        </div>
    );
};
export default UpdateBook;
