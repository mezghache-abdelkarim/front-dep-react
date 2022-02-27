import React, { useState } from 'react'
import { Container, Row, Col, Form, Modal, Button } from 'react-bootstrap';
import '../css.component/Orientation.css'
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";


interface Props {
    // Orientation : String;
}
const OrientationLicence: React.FC<Props> = () => {
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <Container fluid className='p-0'>
            {/* <Row>
                <Col xs={6} sm={6} md={6} lg={6} >

                </Col>
            </Row> */}
            <div className='orientation p-5'>
                <Row>
                    <Col xs={12} sm={6} md={6} lg={6}>
                        <div className='title d-block text-start '>
                            <p>Orientation vers <span>licence</span></p>
                            <img src="/images/black-lines.png" alt="" />
                        </div>
                        <div>
                            <p className="text-start"> Veuillez choisir votre spécialité de la 3ème année licence <a href="/">( voir la liste des modules )</a> </p>
                            <Form onSubmit={handleSubmit(onSubmit)} >
                                <Row>
                                    <Col xs={12} sm={6} md={6} lg={6}>
                                        {/* <Form.Floating className="mb-3">
                                            <Form.Control
                                            id="floatingPrenom"
                                            type="text"
                                            placeholder="Prénom"
                                            disabled
                                            />
                                            <label htmlFor="">
                                                Prénom
                                            </label>
                                        </Form.Floating> */}
                                        <Form.Group className="mb-3" controlId="PrenomID">
                                            <Form.Label>Prénom</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Disabled input"
                                                aria-label="Disabled input example"
                                                value="prenom value"
                                                disabled
                                                readOnly
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6} md={6} lg={6}>
                                        <Form.Group className="mb-3" controlId="PrenomID">
                                            <Form.Label>Nom</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Disabled input"
                                                aria-label="Disabled input example"
                                                value="Nom value"
                                                disabled
                                                readOnly
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col className="my-3" xs={12} sm={6} md={6} lg={6}>
                                        <Form.Group className="mb-3" controlId="PrenomID">
                                            <Form.Label>specilite actuelle</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Disabled input"
                                                aria-label="Disabled input example"
                                                value="specilite actuelle value"
                                                disabled
                                                readOnly
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Row>
                                        <Col className="selection my-3" xs={12} sm={6} md={6} lg={6}>
                                            <Form.Select {...register("special")} aria-label="Default select example">
                                                <option>Spécialiteé demandé</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <div className="my-4 valider text-start" >
                                        <Button variant="primary" type='submit' onClick={handleShow}>
                                            Valider Votre choix <i className="fas fa-arrow-right" />
                                        </Button>
                                    </div>
                                </Row>
                            </Form>
                            <Modal className="orientation" show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Confirmer s'il vous plait</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>vous-etes sure que vous voulez valide la specilaité (si)</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Annuler
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Valider
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6}>

                    </Col>
                </Row>
            </div>

        </Container>
    );
}

export default OrientationLicence;