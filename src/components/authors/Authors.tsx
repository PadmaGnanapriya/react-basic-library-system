import React, {useState} from "react";
import CreateAuthor from "./CreateAuthor";
import UpdateAuthor from "./UpdateAuthor";
import AuthorsList from "./AuthorList";
import AddAuthor from "./AddAuthor";
import {Col, Container, Row} from "react-bootstrap";


const Authors: React.FC = () => {
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

    return (
        <div className="author p-2 pl-sm-3 pr-sm-3 pl-md-4 pr-md-4 pl-lg-5 pr-lg-5">
            <Row>
                <Col className="text-left pl-0 py-1 mb-4 authors-title">Authors</Col>
            </Row>
            <Row>
                <Col>
                    <AuthorsList setIsUpdatable={changeUpdatable} setUpdatableIndex={setUpdatableIndex}/>
                </Col>
            </Row>
            <Row>
                <Col><AddAuthor setIsVisible={changeCreatable}/></Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={9} className="p-0 pr-md-4">
                    {isUpdatable && <UpdateAuthor keyIndex={updatableIndex} isUpdatable={disableUpdate}/>}
                    {isVisible && <CreateAuthor setIsVisible={setIsVisible}/>}
                </Col>
            </Row>
        </div>
    );
}
export default Authors;
