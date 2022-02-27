import React from 'react'
import '../css.component/SpecialityContent.css'
import {Container,Row,Col,Card} from 'react-bootstrap'
function SpecialityContent() {

    return ( 
        <Container fluid className='p-0'>
        <div className='SpecialityContent p-5'>
            <div className='title d-block text-start '>
                <p className='m-0'> Nos <span>SPECIALITE</span></p>
                <img src="/images/black-lines.png" alt="" />
            </div>
            <div className='content text-start'>
                    <p>En Licence </p>
                    <Row className=''>
                        <Col xs={12} sm={4} md={4} lg={4} >
                        <Card className='background-yellow'>
                        <Card.Body>
                            <Card.Title  className=''> SYSTEMES INFORMATIQUES (SI)</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content ,Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link href="#">Voir la liste des modules <i className="fas fa-arrow-right"/></Card.Link>
                        </Card.Body>
                        </Card>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4}>
                            <Card className='background-blue'>
                            <Card.Body>
                                <Card.Title className=''> INGENIURIE SYSTEMES D'INFORMAIQUE ET DE LOGICIEL (ISIL)</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content ,Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Voir la liste des modules <i className="fas fa-arrow-right"/></Card.Link>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <p>En Master</p> 
                    <Row>
                        <Col xs={12} sm={4} md={4} lg={4}>
                        <Card className='background-black'>
                            <Card.Body>
                                <Card.Title className=''> RESEAUX ET SYSTEMES DISTRBUES (RSD)</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content ,Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Voir la liste des modules <i className="fas fa-arrow-right"/></Card.Link>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4}>
                        <Card className='background-blueviolet'>
                            <Card.Body>
                                <Card.Title className=''> GENIE LOGICIEL AVANCE ET APPLICATION (GLAP)</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content ,Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Voir la liste des modules <i className="fas fa-arrow-right"/></Card.Link>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4}>
                        <Card className='background-yellow'>
                            <Card.Body>
                                <Card.Title className=''> SYSTEMES INFORMAIQUE (SI)</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content ,Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Voir la liste des modules <i className="fas fa-arrow-right"/></Card.Link>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4}>
                            <Card className='background-blue'>
                            <Card.Body>
                                <Card.Title className=''> INGENIURIE SYSTEMES D'INFORMAIQUE ET DE LOGICIEL (ISIL)</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content ,Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Voir la liste des modules <i className="fas fa-arrow-right"/></Card.Link>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>    
                       

            </div>
        </div>
        </Container >

     );
}

export default SpecialityContent;