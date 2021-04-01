import { useHistory } from 'react-router';
import {
    Input, InputGroupAddon, InputGroupText, InputGroup, FormGroup,
    Form, Row,
    Col, Card, CardHeader, Button, CardFooter, CardBody, Label
} from 'reactstrap';
import { ADMIN_LAYOUT, USER_LISTING } from '../../../constants/RouterConstants';

const AddUser = () => {

    const history = useHistory();

    const submit = (e) => {
        e.preventDefault();
        history.replace(`${ADMIN_LAYOUT}${USER_LISTING}`);
    }

    return (
        <>
            <Card>
                <CardHeader>
                    <h2>Add User</h2>
                </CardHeader>
                <Form onSubmit={submit}>
                    <CardBody>
                        <Row>
                            <Col md="3" sm="12">
                                <FormGroup>
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input
                                        name="firstName"
                                        id="firstName"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="3" sm="12">
                                <FormGroup>
                                    <Label htmlFor="LastName" >Last Name</Label>
                                    <Input
                                        name="lastName"
                                        id="LastName"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="3" sm="12">
                                <FormGroup>
                                    <Label htmlFor="email" >Email</Label>
                                    <Input
                                        name="email"
                                        id="email"
                                        type="email"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>

                    <CardFooter>
                        <Button type="submit" color="primary">Submit</Button>
                    </CardFooter>
                </Form>

            </Card>
        </>
    )
}

export default AddUser;