import React from "react";
import Author from "./Author";
import {IAuthor} from "../types/LibraryTypes";
import {AuthorState} from "../../store/reducers/AuthorReducer";
import {useSelector} from "react-redux";


type AuthorsListProps = {
    onAuthorDelete: (deleteAuthorNo: number) => void
    setIsUpdatable: (val: boolean) => void;
    setUpdatableIndex: (num: number) => void;
}

const AuthorsList: React.FC<AuthorsListProps> = (props) => {
    const authors = useSelector<AuthorState>((state: { authors: IAuthor[]; }) => state.authors);


    const renderAuthors = () => {
        return (
            // @ts-ignore
            authors.map((author: IAuthor, index: number) =>
                <Author key={index} author={author} num={index + 1} onAuthorDelete={props.onAuthorDelete}
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
