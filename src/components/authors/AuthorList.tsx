import React from "react";
import Author from "./Author";
import {IAuthor} from "../types/LibraryTypes";
import {useSelector} from "react-redux";
import {RootState} from "../../store/Store";


type AuthorsListProps = {
    setIsUpdatable: (val: boolean) => void;
    setUpdatableIndex: (num: number) => void;
}

/**
 * Make author components according to state.author
 * @param props
 * @constructor
 */
const AuthorsList: React.FC<AuthorsListProps> = (props) => {
    const {authors} = useSelector((state: RootState) => state.author)

    const renderAuthors = () => {
        return (
            authors.map((author: IAuthor, index: number) =>
                <Author key={index} author={author} num={index + 1}
                        setIsUpdatable={props.setIsUpdatable} setUpdatableIndex={props.setUpdatableIndex}/>)
        );
    }

    return (
        <React.Fragment>
            {renderAuthors()}
        </React.Fragment>
    );
};

export default AuthorsList;
