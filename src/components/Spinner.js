import React from "react";
import {Col,Container,Row} from "reactstrap";

const Spinner = () =>{
    return (
        <Container>
            <Row>
                <Col xs="12" md="8">
                    <div className="spinner-border text-danger" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </Col>
            </Row>
        </Container>

    )
};
export default Spinner;