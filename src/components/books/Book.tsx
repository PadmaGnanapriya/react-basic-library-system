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
                <Container fluid>
                    <Row className="book-component pt-1 pb-1 pl-0 pr-4 text-left">
                        <Col sm md xs lg="10" className="text-left p-0" >
                            <label className='mb-2 float-left text-left'>{num}.{book.title}</label>
                        </Col>
                        <Col sm md xs lg="2" className="text-right pr-0 pb-0 mb-0 pt-1 mt-1">
                            <i className='feather icon-edit mr-3' onClick={()=>props.handleEdit(num-1)}/>
                            <i className='feather icon-trash-2' onClick={()=>deleteBookDispatch(num-1)}/>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
    );
};
export default Book;
