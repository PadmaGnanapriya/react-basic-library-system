import React, {FormEvent, useEffect, useState} from "react";
import {Col, Button, Form} from "react-bootstrap"
import {IAuthor, IBook} from "../types/LibraryTypes";
import Select, {ValueType} from 'react-select';
import {ReactSelectOption} from "../types/LibraryTypes";
// import any = jasmine.any;


type CreateBookProps={
    onBookAdd:(book:IBook)=>void;
    changeVisibility:(val:boolean)=>void;
    authors:IAuthor[];
}

// @ts-ignore
const CreateBook:React.FC<CreateBookProps> =(props) =>{
    const {authors} = props;
    // @ts-ignore
    const initBook: IBook = {title: '', ISBN: '', author: null}
    const [book, setBook] = useState<IBook>(initBook);
    const [authorOptions, setAuthorOptions] = useState<ReactSelectOption[]>([]);
    const [selectedAuthor, setSelectedAuthor] = useState<ValueType<ReactSelectOption> | null>(null);
    const [title, setTitle]=useState<string|null>(null);
    const [isbn, setISBN]=useState<string|null>(null);
    const [author, setAuthor]=useState<string|null>(null);

    useEffect(() => {
        const options: ReactSelectOption[] = authors ? authors.map((author: IAuthor, index: number) => {
            const authorOption: ReactSelectOption = {value: index + '', label: author.name};
            return authorOption;
        }) : [];

        setAuthorOptions(options)
    }, [authors]);


    const addBook =() =>{
        // @ts-ignore
        props.onBookAdd({title:title, isbn:isbn, author:author});
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        // Array.from(document.querySelectorAll("select")).forEach(
        //     option => (option.value = "default")
        // );
        setTitle(null);
        setISBN(null);
        setAuthor(null);
        setSelectedAuthor(null);
    }

    const [borderColor, setBorderColor]=useState('#989898');
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event:FormEvent) => {
        const form = event.currentTarget;
        // @ts-ignore
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else if(title!== null && isbn !== null && title !== '' && isbn !== '' && author !== null && author !== ''){
               addBook();
               setBorderColor('#989898');
               setValidated(false);
        }
        else {
            setValidated(true);
        }
        if(!validated){
            setBorderColor('#989898');
        }

        if(!validated){
            if(selectedAuthor===null){
                setBorderColor('#dc3545');
            }else {
                setBorderColor('#28a745');
            }
        }
    };

    const handleOnBookAuthorChange = (selectedOption: ValueType<ReactSelectOption>) => {
        setSelectedAuthor(selectedOption);
        const index = parseInt((selectedOption as ReactSelectOption).value);
        const author: IAuthor | null = authors ? authors[index]: null
        if(validated){setBorderColor('#28a745');}
        // @ts-ignore
        setAuthor(author);
    };

    const customSelectStyles = {
        control: (provided: any, state: any) => ({
            ...provided,
            borderRadius: 0,
            border: '1px solid '+borderColor,
        })
    }

    return(
        <div className="create-book mt-2 mb-5 pb-2 pt-5">
        <Form.Row>
            <Col className="text-left pl-1 mb-3">
                <span>Create Book</span>
            </Col>
            <Col  className="text-right">
                <i className='feather icon-x-circle text-dark text-right' onClick={() => props.changeVisibility(false)}/>
            </Col>
        </Form.Row>
        <Form noValidate validated={validated} className="pl-5">

            <Form.Row>
                <Form.Group controlId="titleSelectID"  className="form-group-dev">
                    <Form.Label className="text-left label-text">Title of Book</Form.Label>
                    <Form.Control required type="text" className="form-input"
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setTitle(e.target.value)}/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group controlId="isbnSelectID"   className="form-group-dev">
                    <Form.Label className="text-left label-text">ISBN</Form.Label>
                    <Form.Control className="form-input"  required type="text"
                      onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setISBN(e.target.value)}/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group controlId="authorSelectID"  className="form-group-dev">
                    <Form.Label className="text-left label-text">Author</Form.Label>
                    <Select
                        styles={customSelectStyles}
                        value={selectedAuthor}
                        onChange={handleOnBookAuthorChange}
                        options={authorOptions}
                    />
                </Form.Group>
            </Form.Row>
            <Button onClick={event => handleSubmit(event)}size='sm' variant='primary'
                    className='float-right create-button'>
                Create
            </Button>
        </Form>
        </div>
    );
};
export default CreateBook;
