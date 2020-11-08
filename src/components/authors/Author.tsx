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
            <Row className='author-item pt-1 pb-1 pl-0 pr-4 text-left'>
                <Col xs={9} className="pl-0">
                   <label className='mb-2 float-left text-left'>{num}.{props.author.name}</label>
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
