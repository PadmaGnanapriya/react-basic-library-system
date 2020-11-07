import React from "react";
import {IAuthor} from "./types/LibraryTypes";
import CreateAuthor from "./authors/CreateAuthor";

type AuthorProps={
    authors:IAuthor[];
    onAuthorCreated:(newAuthor: IAuthor)=>void;
    onAuthorUpdated:(updatedAuthor:IAuthor,index:number)=> void;
    onAuthorDeleted:(index:number)=>void;
}
const Authors:React.FC<AuthorProps> =(props) =>{
    const {authors}=props;

    const printData=()=>{

        console.log("Author");
        console.log(authors);
        return authors.map((author:IAuthor, index:number)=><div><a>{author.name}</a><br></br></div>);
    }

    return(
        <React.Fragment>
            <p>Authors list</p>
            {printData()}
            <CreateAuthor onAuthorCreated={props.onAuthorCreated}/>
        </React.Fragment>
    );
}
export default Authors;
