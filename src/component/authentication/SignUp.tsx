import React from 'react'
import { Container, Row, Col, Form, Modal, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import "../css.component/SignUp.css"

interface props {

}
const SignUp: React.FC<props> = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = () => { }
    return (

        <Container fluid className='SignUp p-0'>
            <Row>
                <Col className='background-black' xs={12} sm={5} md={5} lg={5}>
                    <img src="/images/HomePageHeader.png" alt="" />
                </Col>
                <Col className="form" xs={12} sm={7} md={7} lg={7}>
                    <div className='title d-block text-start '>
                        <p>Inscription</p>
                        <img src="/images/black-lines.png" alt="" />
                    </div>
                    <div>
                        <Form onSubmit={handleSubmit(onSubmit)} >
                            <Row className='pt-5'>
                                <Col xs={12} sm={6} md={6} lg={6}>
                                    <Form.Group className="mb-3" controlId="PrenomID">
                                        <Form.Control
                                            type="text"
                                            placeholder="Prenom"
                                            aria-label=""
                                            value=""
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} sm={6} md={6} lg={6}>
                                    <Form.Group className="mb-3" controlId="PrenomID">
                                        <Form.Control
                                            type="text"
                                            placeholder="Nom"
                                            aria-label=""
                                            value=""
                                        />
                                    </Form.Group>
                                </Col>
                                <Col className="my-3" xs={12} sm={6} md={6} lg={6}>
                                    <Form.Group className="mb-3" controlId="PrenomID">
                                        <Form.Control
                                            type="text"
                                            placeholder="Né le"
                                            aria-label=""
                                            value=""
                                        />
                                    </Form.Group>
                                </Col>
                                <Col className="my-3" xs={12} sm={6} md={6} lg={6}>
                                    <Form.Group className="mb-3" controlId="PrenomID">
                                        <Form.Control
                                            type="text"
                                            placeholder="Né à"
                                            aria-label=""
                                            value=""
                                        />
                                    </Form.Group>
                                </Col>
                                <Col className="my-3" xs={12} sm={6} md={6} lg={6}>
                                    <Form.Select {...register("special")} aria-label="Default select example">
                                        <option>Spécialiteé demandé</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>

                            </Row>
                        </Form>

                    </div>
                </Col>
            </Row>
        </Container>


    )
}
export default SignUp;