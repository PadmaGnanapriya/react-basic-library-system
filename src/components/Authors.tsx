import React, {useState} from "react";
import {IAuthor} from "./types/LibraryTypes";
import CreateAuthor from "./authors/CreateAuthor";
import UpdateAuthor from "./authors/UpdateAuthor";
import AuthorsList from "./authors/AuthorList";
import AddAuthor from "./authors/AddAuthor";

type AuthorProps={
    authors:IAuthor[];
    onAuthorCreated:(newAuthor: IAuthor)=>void;
    onAuthorUpdated:(updatedAuthor:IAuthor,index:number)=> void;
    onAuthorDeleted:(index:number)=>void;
}
const Authors:React.FC<AuthorProps> =(props) =>{
    const {authors}=props;
    const [isUpdatable, setIsUpdatable]=useState<boolean>(false);//Should be false
    const [updatableIndex, setUpdatableIndex]=useState<number>(0);
    const [isVisible, setIsVisible] =useState(false);

    const disableUpdate= (val:boolean)=>{
        setIsUpdatable(val);
    }


    return(
        <React.Fragment>
            <p className="sub-title">Authors list</p>
            {
                (authors.length>0)?
                    <AuthorsList authors={authors} onAuthorDelete={props.onAuthorDeleted}
                                     setIsUpdatable={setIsUpdatable} setUpdatableIndex={setUpdatableIndex}/>:
                    <p>No authors</p>
            }
            {
                !isVisible &&
                <AddAuthor setIsVisible={setIsVisible}/>
            }

            {
                isUpdatable &&
                <UpdateAuthor author={authors[updatableIndex]} onAuthorUpdated={props.onAuthorUpdated}
                          keyIndex={updatableIndex} isUpdatable={disableUpdate}/>
            }
            {
                isVisible &&
                <CreateAuthor onAuthorCreated={props.onAuthorCreated} setIsVisible={setIsVisible}/>
            }

        </React.Fragment>
    );
}
export default Authors;
