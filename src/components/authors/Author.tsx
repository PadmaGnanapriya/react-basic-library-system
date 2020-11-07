import React, {useState} from "react";
import {Row, Col, Container} from "react-bootstrap";
import {IAuthor} from "../types/LibraryTypes";



type AuthorProps={
    author:IAuthor
    num:number
    onAuthorDelete:(deleteAuthorNo:number)=>void
    setIsUpdatable:(val:boolean)=>void;
    setUpdatableIndex:(num:number)=>void;

}


const Author:React.FC<AuthorProps>=(props)=>{
    const {num, author}=props;

    const [isEditClick,setIsEditClick]=useState<boolean>(false);
    const handleEditClick=()=>{
        props.setIsUpdatable(true);
        props.setUpdatableIndex(num-1);

    }
    const [editAuthorName,setEditAuthorName]=useState<null | string>(null);

    return(
        <Container fluid>
            <Row className='author-item pr-0 mr-4 pt-2 ml-1'>
                <Col xs={9} className="pl-0">
                    {!isEditClick && <label className='mb-2'>{num}.{props.author.name}</label>}
                    {isEditClick && <input className='author-edit' type='text' placeholder={author.name} onChange={event => setEditAuthorName(event.target.value)}/>}
                </Col>
                <Col xs={3} className='text-right author-controls'>
                    {!isEditClick && <i className='feather icon-edit mr-3' onClick={()=>handleEditClick()}/>}
                    {!isEditClick && <i className='feather icon-trash-2' onClick={()=>props.onAuthorDelete(num-1)}/>}
                </Col>
            </Row>
        </Container>
    );
};

export default Author;
