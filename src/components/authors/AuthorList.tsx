import React from "react";
import Author from "./Author";
import {IAuthor} from "../types/LibraryTypes";
import {AuthorState} from "../../store/reducers/AuthorReducer";
import {useSelector} from "react-redux";


type AuthorsListProps = {
    setIsUpdatable: (val: boolean) => void;
    setUpdatableIndex: (num: number) => void;
}

const AuthorsList: React.FC<AuthorsListProps> = (props) => {
    // const authors:any = useSelector<AuthorState>((state: { authors: IAuthor[]; }) => state.authors);

    const authors =[{name: 'Padma Gnanapriya'}, {name: 'Ovindu Archana'}, {name: 'Isuru Anjana'}]

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
