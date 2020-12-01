import React, {FormEvent, useEffect, useState} from "react";
import {Col, Button, Form} from "react-bootstrap"
import {IAuthor,UpdatableBook} from "../types/LibraryTypes";
import Select, {ValueType} from 'react-select';
import {ReactSelectOption} from "../types/LibraryTypes";
import {updateBook} from "../../store/actions/BookActions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/Store";


type UpdateBookProps = {
    keyIndex: number;
    changeVisibility: () => void;
}

const UpdateBook: React.FC<UpdateBookProps> = (props) => {
    const {keyIndex} = props;
    const {authors} = useSelector((state:RootState)=> state.author)
    const {books} = useSelector((state:RootState)=> state.book)
    const [authorOptions, setAuthorOptions] = useState<ReactSelectOption[]>([]);
    const [selectedAuthor, setSelectedAuthor] = useState<ValueType<ReactSelectOption>>
    ({value: '1', label: books[keyIndex].author.name});
    const [title, setTitle] = useState<string>(books[keyIndex].title);
    const [isbn, setISBN] = useState<string>(books[keyIndex].isbn);
    const [author, setAuthor] = useState<IAuthor>(books[keyIndex].author);
    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setTitle(books[keyIndex].title);
        setISBN(books[keyIndex].isbn);
        setAuthor(books[keyIndex].author);
        setSelectedAuthor({value: '1', label: books[keyIndex].author.name})
    }, [keyIndex])

    useEffect(() => {
        const options: ReactSelectOption[] = authors ? authors.map((author: IAuthor, index: number) => {
            const authorOption: ReactSelectOption = {value: index + '', label: author.name};
            return authorOption;
        }) : [authors];

        setAuthorOptions(options)
    }, [authors]);

    const handleUpdate = (event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        if (title !== null && isbn !== null && title !== '' && isbn !== '') {
            dispatch(updateBook({book: {title: title, isbn: isbn, author: author}, index: keyIndex}));
            setValidated(false);
            props.changeVisibility();
        } else {
            setValidated(true);
        }
    };

    const handleOnBookAuthorChange = (selectedOption: ValueType<ReactSelectOption>) => {
        setSelectedAuthor(selectedOption);
        const index = parseInt((selectedOption as ReactSelectOption).value);
        const author: IAuthor = authors[index]
        setAuthor(author);
    };

    const customSelectStyles = {
        control: (provided: any, state: any) => ({
            ...provided,
            borderRadius: 0,
            border: '2px solid #989898',
            minHeight: '31px',
            height: '31px',
            boxShadow: state.isFocused ? null : null,
        }),
        input: (provided: any, state: any) => ({
            ...provided,
            margin: '0px',
        }),
        indicatorsContainer: (provided: any, state: any) => ({
            ...provided,
            height: '28px',
        }),
    }

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
        setValidated(false);
    }

    const onChangeISBN = (e: React.ChangeEvent<HTMLInputElement>) => {
        setISBN(e.target.value);
        setValidated(false);
    }

    return (
        <div className="form-area mt-2 mb-5 pb-2 pt-5">
            <Form.Row>
                <Col className="text-left pl-1 mb-3">
                    <span>Update Book</span>
                </Col>
                <Col className="text-right">
                    <i className='feather icon-x-circle text-dark text-right' onClick={() => props.changeVisibility()}/>
                </Col>
            </Form.Row>
            <Form noValidate validated={validated} className="form-div pl-4" onSubmit={handleUpdate}>
                <Form.Row>
                    <Form.Group controlId="titleSelectID" className="form-group-dev col-12">
                        <Form.Label className="float-left label-text">Title of Book</Form.Label>
                        <Form.Control required type="text" className="form-input" placeholder=""
                                      value={title ? title : ''} onChange={onChangeTitle}/>
                        <Form.Control.Feedback type="invalid">Book title can not be empty!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="isbnSelectID" className="form-group-dev col-12">
                        <Form.Label className="float-left label-text">ISBN</Form.Label>
                        <Form.Control className="form-input" required type="text" placeholder=""
                                      value={isbn ? isbn : ''} onChange={onChangeISBN}/>
                        <Form.Control.Feedback type="invalid">ISBN field can not be empty!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Label className="float-left label-text">Author</Form.Label>
                    <Form.Group controlId="authorSelectID"  className="col-12" >
                        <Select
                            styles={customSelectStyles}
                            value={selectedAuthor}
                            onChange={handleOnBookAuthorChange}
                            options={authorOptions}
                        />
                    </Form.Group>
                </Form.Row>
                <Button type="submit" size='sm' variant='primary' className='float-right update-button'>Update
                </Button>
            </Form>
        </div>
    );
};
export default UpdateBook;
