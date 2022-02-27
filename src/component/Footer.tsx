import React,{useState}from 'react'
import './css.component/footer.css'
import {Container,Col,Row,Stack,Image,Button} from 'react-bootstrap'
interface Props {
    
}
 
const Footer:React.FC<Props> = () => {
  const [searshShow, setsearshShow] = useState(false);

    return (
    <>
      <Container className='footer' fluid>
        <Row >
          <Col className="" xs={6} sm={3} md={3} lg={3}>
            <Image  src="/images/info-logo.png" alt="" />

          </Col>
          <Col className="pt-5 text-start " xs={6} sm={3} md={3} lg={3}>
            <a href=""> à propos de nous</a>
            <a href=""> Contacter-nous</a>
            <a href=""> Termes et Conditions</a>
          </Col>
          <Col className="pt-5 text-start" xs={6} sm={4} md={4} lg={4}>
            <p>Département informatique - Faculté des Sciences</p>
            <p>Université 20 aout 1955 skikda</p>
            <p>Bp 26 Route El-Hadaiek 21000</p>
            <p>Tél/fax: (+213) 038 72 31 10</p>
          </Col>
          <Col className="pt-5" xs={6} sm={2} md={2} lg={2}>
            <a href="">
              <i className="fab fa-facebook-f"/> Facebook
            </a>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <Stack direction="horizontal" gap={3}>
              <div className=" me-auto">Copyrigth 2022.Departement informatique.all rights reserved</div>
              <div className="mx-auto">www.depinfoskikda.com</div>
              <div className="ms-auto">facsiences.univskikda@yahoo.fr</div>
            </Stack>
            </Col>
        </Row> */}
      <Row className='subfooter'>
            <Col xs={6} sm={4} md={4} lg={4}>
                Copyrigth 2022.Departement informatique.all rights reserved
            </Col>
            <Col xs={6} sm={4} md={4} lg={4}>
                www.depinfoskikda.com
            </Col>
            <Col xs={6} sm={4} md={4} lg={4}>
                facsiences.univskikda@yahoo.fr
            </Col>

        </Row>
      </Container>
   
    </>
     );
}
 
export default Footer;