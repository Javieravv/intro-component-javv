import { Button, Col, Container, Form, Row } from "react-bootstrap"

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
                    className="section-title d-flex flex-column justify-content-center text-start text-light ps-5"
                >
                    <h1 className="fs-1 fw-bold mb-3">Learn to code by watching others</h1>
                    <p className="fs-5">See how experienced developers solve problems in real-time. Watching scripted tutorials is great but understanding how developers think is invaluable.</p>
                </Col>
                <Col
                    className="section-form d-flex flex-column justify-content-around gap-2 pt-2 pb-2 "
                >
                    <Row className="title-price rounded-2 text-light align-items-center fs-5" >
                        <p className=""><span className="fw-bolder">Try it free 7 days</span> the $20/mo. thereafter</p>
                    </Row>
                    <Row className="form-main ">
                        <Form 
                            className="bg-white rounded-2 d-flex flex-column justify-content-between p-2"
                        >
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    placeholder="First name"
                                    size='lg'
                                    className="form-control"
                                    isValid={false}
                                />
                                <Form.Control.Feedback className="text-end">Primer nombre</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    placeholder="Last name"
                                    size='lg'
                                    className="form-control"
                                    isValid={false}
                                />
                                <Form.Control.Feedback className="text-end">Segundo nombre</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    type="email"
                                    placeholder="Email Address"
                                    size='lg'
                                    className="form-control"
                                    isValid={false}
                                />
                                <Form.Control.Feedback className="text-end">Correo agregado</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    size='lg'
                                    className="form-control"
                                    isValid={false}
                                />
                                <Form.Control.Feedback className="text-end">Ingrese Password</Form.Control.Feedback>
                            </Form.Group>
                            <Button
                                type="submit"
                                size='lg'
                                className="form-control fw-bolder"
                            >
                                CLAIM YOUR FREE TRIAL
                            </Button>
                            <p>By clicking the button you are agreeing to our <span className="fw-bolder text-danger">Term and Services</span></p>
                        </Form>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
