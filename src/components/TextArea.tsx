import React from "react";
import {Col, Row} from "react-bootstrap";
import Authors from "./authors/Authors";
import Books from "./books/Books";

const TextArea: React.FC = () => {

    return (
        <div className="text-area">
            <Row className="m-0">
                <Col xs={12} sm={6}>
                    <Books/>
                </Col>
                <Col xs={12} sm={6}>
                    <Authors/>
                </Col>
            </Row>
        </div>
    );
}
export default TextArea;
