import React from "react";
import {Col, Row} from "react-bootstrap";
import Authors from "./Authors";
import Books from "./Books";

const TextArea: React.FC = () => {

    return (
        <React.Fragment>
            <Row>
                <Col className="ml-4 mr-4 p-0 pl-3">
                    <Books/>
                </Col>
                <Col className="ml-4 mr-5 p-0 pl-4">
                    <Authors/>
                </Col>
            </Row>
        </React.Fragment>
    );
}
export default TextArea;
