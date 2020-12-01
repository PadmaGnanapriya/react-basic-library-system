import React from "react";
import {Row, Col} from "react-bootstrap";
import {IAuthor} from "../types/LibraryTypes";
import {deleteAuthor} from "../../store/actions/AuthorActions";
import {useDispatch} from "react-redux";


type AuthorProps = {
    author:IAuthor
    num:number
    setIsUpdatable:(val:boolean)=>void;
    setUpdatableIndex:(num:number)=>void;
}

const Author:React.FC<AuthorProps>=(props)=>{
    const {num, author}=props;
    const dispatch = useDispatch();
    // const deleteAuthorDispatch = (index:number) => dispatch(deleteAuthor(index));
    const handleDelete =() => dispatch(deleteAuthor(num-1));
    const handleEditClick= () => {
        props.setIsUpdatable(true);
        props.setUpdatableIndex(num-1);
    }

    return(
        <React.Fragment>
            <Row className='author-item pt-1 pb-1 pl-0 pr-4 text-left'>
                <Col xs={10} className="pl-0">
                   <label className='mb-2 float-left text-left'>{num}.{author.name}</label>
                </Col>
                <Col xs={2} className='text-right author-controls pr-3 mt-2'>
                    <i className='feather icon-edit mr-3' onClick={handleEditClick}/>
                    <i className='feather icon-trash-2' onClick={handleDelete}/>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Author;
