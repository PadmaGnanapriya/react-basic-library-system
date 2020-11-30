import React from "react";
import {Col, Row,Container} from "react-bootstrap";
import {IBook} from "../types/LibraryTypes";
import {useDispatch} from "react-redux";
import {deleteBook} from "../../store/actions/BookActions";


type bookProps = {
    num: number;
    book: IBook;
    handleEdit: (key: number) => void
}

const Book: React.FC<bookProps> = (props) => {
    const {num, book} = props;

    const dispatch = useDispatch();
    const deleteBookDispatch = (index:number) => dispatch(deleteBook(index));

    return(
            <React.Fragment>
                <Row className='book-item pt-1 pb-1 pl-0 pr-4 text-left'>
                    <Col xs={10} className="pl-0">
                        <label className='mb-2 float-left text-left'>{num}.{book.title}</label>
                    </Col>
                    <Col xs={2} className='text-right book-controls pr-3 mt-2'>
                        <i className='feather icon-edit mr-3' onClick={()=>props.handleEdit(num-1)}/>
                        <i className='feather icon-trash-2' onClick={()=>deleteBookDispatch(num-1)}/>
                    </Col>
                </Row>
            </React.Fragment>
    );
};
export default Book;
