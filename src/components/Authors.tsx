import React, {useState} from "react";
import {IAuthor} from "./types/LibraryTypes";
import CreateAuthor from "./authors/CreateAuthor";
import UpdateAuthor from "./authors/UpdateAuthor";

type AuthorProps={
    authors:IAuthor[];
    onAuthorCreated:(newAuthor: IAuthor)=>void;
    onAuthorUpdated:(updatedAuthor:IAuthor,index:number)=> void;
    onAuthorDeleted:(index:number)=>void;
}
const Authors:React.FC<AuthorProps> =(props) =>{
    const {authors}=props;
    const [isUpdatable, setIsUpdatable]=useState<boolean>(true);//Should be false
    const [updatableIndex, setUpdatableIndex]=useState<number>(0);

    const disableUpdate= (val:boolean)=>{
        setIsUpdatable(val);
    }

    const printData=()=>{

        console.log("Author");
        console.log(authors);
        return authors.map((author:IAuthor, index:number)=><div><a>{author.name}</a><br></br></div>);
    }

    return(
        <React.Fragment>
            <p>Authors list</p>
            {printData()}
            {
                isUpdatable &&
                <UpdateAuthor author={authors[updatableIndex]} onAuthorUpdated={props.onAuthorUpdated}
                          keyIndex={updatableIndex} isUpdatable={disableUpdate}/>
            }
            <CreateAuthor onAuthorCreated={props.onAuthorCreated}/>
        </React.Fragment>
    );
}
export default Authors;
