import React, {useState} from "react";
import {IAuthor} from "./types/LibraryTypes";
import CreateAuthor from "./authors/CreateAuthor";
import UpdateAuthor from "./authors/UpdateAuthor";
import AuthorsList from "./authors/AuthorList";
import AddAuthor from "./authors/AddAuthor";
import {Container} from "react-bootstrap";


const Authors:React.FC = () => {
    const [isUpdatable, setIsUpdatable] = useState<boolean>(false);
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

    const disableUpdate = (val: boolean) => setIsUpdatable(val);

    return(
        <React.Fragment>
            <Container className = "authors-dev m-1 p-0 mt-0 pt-0 pl-1 pr-3" fluid>
                <span className = "text-left ml-1 pb-1 mb-4 authors-title">Authors</span>

                <AuthorsList setIsUpdatable = {changeUpdatable} setUpdatableIndex = {setUpdatableIndex}/>
              {
                    !isVisible && <AddAuthor setIsVisible = {changeCreatable}/>
                }{
                    isUpdatable && <UpdateAuthor keyIndex={updatableIndex} isUpdatable={disableUpdate}/>
                }{
                    isVisible && <CreateAuthor setIsVisible = {setIsVisible}/>
                }
            </Container>
        </React.Fragment>
    );
}
export default Authors;
