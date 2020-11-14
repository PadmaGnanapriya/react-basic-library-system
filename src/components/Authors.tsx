import React, {useState} from "react";
import {IAuthor} from "./types/LibraryTypes";
import CreateAuthor from "./authors/CreateAuthor";
import UpdateAuthor from "./authors/UpdateAuthor";
import AuthorsList from "./authors/AuthorList";
import AddAuthor from "./authors/AddAuthor";
import {Container} from "react-bootstrap";

type AuthorProps = {
    authors: IAuthor[];
    onAuthorCreated: (newAuthor: IAuthor) => void;
    onAuthorUpdated: (updatedAuthor: IAuthor, index: number) => void;
    onAuthorDeleted: (index: number) => void;
}

const Authors:React.FC<AuthorProps> = (props) => {
    const {authors} = props;
    const [isUpdatable, setIsUpdatable] = useState<boolean>(false);//Should be false
    const [updatableIndex, setUpdatableIndex] = useState<number>(0);
    const [isVisible, setIsVisible] = useState(false);

    const changeCreatable = (val: boolean) => {
        setIsVisible(val);
        setIsUpdatable(false);
    };
    const changeUpdatable = (val: boolean) => {
        setIsUpdatable(val);
        setIsVisible(false);
    };


    const disableUpdate = (val: boolean) => {
        setIsUpdatable(val);
    }


    return(
        <React.Fragment>
            <Container className = "authors-dev m-1 p-0 mt-0 pt-0 pl-1 pr-3" fluid>
                <span className = "text-left ml-1 pb-1 mb-4 authors-title">Authors</span>
                {
                    (authors.length>0)?
                        <AuthorsList authors = {authors}  onAuthorDelete = {props.onAuthorDeleted}
                            setIsUpdatable = {changeUpdatable} setUpdatableIndex = {setUpdatableIndex}/>:
                        <label className = 'font-italic'>No Authors listed here</label>
                }{
                    !isVisible && <AddAuthor setIsVisible = {changeCreatable}/>
                }{
                    isUpdatable &&
                    <UpdateAuthor author = {authors[updatableIndex]}  onAuthorUpdated = {props.onAuthorUpdated}
                              keyIndex = {updatableIndex} isUpdatable={disableUpdate}/>
                }{
                    isVisible &&
                    <CreateAuthor onAuthorCreated = {props.onAuthorCreated}  setIsVisible = {setIsVisible}/>
                }
            </Container>
        </React.Fragment>
    );
}
export default Authors;
