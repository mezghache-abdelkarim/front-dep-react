import React from 'react'
import "../css.component/SpecialityHeader.css";
import {Container,Row,Col,Image,Carousel} from 'react-bootstrap'

function SpecialityHeader() {
    return ( 
        <Container fluid className='p-0 '>
        <Row  className="w-100 p-0 m-0 SpecialityHeader ">
            {/* <Col xs={12} sm={12} md={12} lg={12}  > */}
                <Image className="p-0" src="/images/specialityheader.png" alt="" />
                <div className='content p-5'>
                    <div className='title d-block text-start '>
                        <p>Département de <span>l'informatique</span></p>
                        <img src="/images/black-lines.png" alt="" />  
                    </div>
                    <div className='description d-block text-start '>
                        <p>
                        Depuis sa création en 1991 au sein de l’école normale supérieure de l’enseignement technique de Skikda,
                         le département d’informatique a formé des cadres en informatique de différents niveaux : D.EU.A , ingénieurs d’état et magisters. 
                        </p>
                        <p>
                        Dans le cadre du nouveau système L.M.D ;Le département d’informatique offre les deux parcours de formation 
                        en licence et trois en Master décrits ci-dessous :
                        </p>

                    </div>
                </div>
            {/* </Col> */}
        </Row>
        </Container>

     );
}

export default SpecialityHeader;