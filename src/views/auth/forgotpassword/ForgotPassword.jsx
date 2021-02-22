import React from 'react';

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
  } from "reactstrap";

import { Link } from 'react-router-dom';
import { AUTH_LAYOUT, LOGIN, SIGN_UP } from '../../../constants/RouterConstants';

const ForgotPassword = (props) => {

    return (
        <Col lg="5" md="7" style={{alignSelf:"center", margin:"auto"}}>
            <Card className="justify-content-center shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Forgot Password</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              {/* <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup> */}
              {/* <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div> */}
              <div className="text-center">
                <Button className="my-4" color="primary" type="button">
                  Submit
                </Button>
              </div>
            </Form>
          </CardBody>
            </Card>
            <Row className="mt-3">
          <Col xs="6">
            <Link
              // className="text-light"
              // href="#"
                  to={`${AUTH_LAYOUT}${LOGIN}`}
              // onClick={(e) => e.preventDefault()}
            >
              <small>Login</small>
            </Link>
          </Col>
          <Col className="text-right" xs="6">
          <Link
            to={`${AUTH_LAYOUT}${SIGN_UP}`}
              // className="text-light"
              // href="#"
              // onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </Link>
          </Col>
        </Row>
        </Col>
    )
}

export default ForgotPassword;