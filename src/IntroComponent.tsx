import { Formik } from "formik";
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import * as yup from 'yup';

// interface fieldNames {
//     firsName: string;
//     lastName: string;
//     email: string;
//     password: string;
// }

const schemaFields = yup.object({
    firstName: yup.string().required('First Name cannot be empty'),
    lastName:  yup.string().required('Last Name cannot be empty'),
    email:     yup.string().email('Invalid Email').required('Email cannot be empty'),
    password:  yup.string().required('Password cannot be empty')
});


export const IntroComponent = () => {
    
    return (
        <Container
            fluid={'lg'}
            className="intro-container"
        >
            <Row
                as={'section'}
                className="section-main text-center me-1 ms-1" style={{ height: '100%' }}
                xs={1} sm={1} md={2}
            >
                <Col
                    className="section-title d-flex flex-column justify-content-center text-start text-light"
                >
                    <h1 className="fs-1 fw-bold mb-3">Learn to code by watching others</h1>
                    <p className="fs-5">See how experienced developers solve problems in real-time. Watching scripted tutorials is great but understanding how developers think is invaluable.</p>
                </Col>
                <Col
                    className="section-form d-flex flex-column justify-content-around gap-2 pt-2 pb-2 "
                >
                    <Row className="title-price rounded-2 text-light align-items-center fs-5 p-3" >
                        <p className=""><span className="fw-bolder ">Try it free 7 days</span> the $20/mo. thereafter</p>
                    </Row>
                    <Row className="form-main ">
                        <Formik
                            validationSchema={schemaFields}
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                                password: ''
                            }}
                            onSubmit={ ( values) => {
                                console.log (values)
                            }}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                // values,
                                // touched,
                                // isValid,
                                errors,
                            }) => (
                                <Form
                                    className="bg-white rounded-2 d-flex flex-column justify-content-between p-3"
                                    noValidate
                                    onSubmit={handleSubmit}
                                >
                                    <Form.Group>
                                        <Form.Control
                                            type="text"
                                            placeholder="First name"
                                            size='lg'
                                            className="form-control"
                                            name="firstName"
                                            isInvalid={!!errors.firstName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <Form.Control.Feedback className="text-end" type="invalid">{errors.firstName}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                            type="text"
                                            placeholder="Last name"
                                            size='lg'
                                            className="form-control"
                                            name="lastName"
                                            isInvalid={!!errors.lastName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <Form.Control.Feedback className="text-end" type="invalid">{errors.lastName}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                            type="email"
                                            placeholder="Email Address"
                                            size='lg'
                                            className="form-control"
                                            name="email"
                                            isInvalid={!!errors.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <Form.Control.Feedback className="text-end" type="invalid">{errors.email}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            size='lg'
                                            className="form-control"
                                            name="password"
                                            isInvalid={!!errors.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <Form.Control.Feedback className="text-end" type="invalid">{errors.password}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Button
                                        type="submit"
                                        size='lg'
                                        className="form-control fw-bolder btn-primary btn-Form mt-1"
                                    >
                                        CLAIM YOUR FREE TRIAL
                                    </Button>
                                    <p>By clicking the button you are agreeing to our <span className="fw-bolder text-danger">Term and Services</span></p>
                                </Form>
                            )}
                        </Formik>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

