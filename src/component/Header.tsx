import React,{useState}from 'react'
import './css.component/Header.css'
import {Nav,Navbar,Container,NavDropdown,Modal,FormControl,InputGroup,Button} from 'react-bootstrap'
interface Props {
    
}
 
const Header:React.FC<Props> = () => {
  const [searshShow, setsearshShow] = useState(false);

    return (
    <>
   <Navbar className='nav1  p-0' bg="#1c1c1b" >
    <Container fluid className='p-0'>
    <Navbar.Brand className='mx-5 p-0' href="#home">
        <img className="logo" src="/images/artificial-intelligence.png"  alt="" />
    </Navbar.Brand>
    <Nav className="justify-content-end ml-auto">
      <Nav.Link className='px-4' href="#">Emploie du Temps</Nav.Link>
      <Nav.Link className='px-4' href="#">Contactez-nous</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Navbar collapseOnSelect expand="lg" className='nav2  p-0' bg="light" variant="light">
  <Container fluid className='p-0'>
    <Navbar.Brand className='mx-4 p-0' href="#home">
    <img className="logo mx-1 p-2" src="/images/info-logo-black.png"  alt="" />
    </Navbar.Brand>
    <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="justify-content-end " id=" responsive-navbar-nav">
    <Nav className="ml-auto"  >
      <li>
      <Nav.Link className='px-4' href="#">Emploie du Temps</Nav.Link>
      <Nav.Link className='px-4' href="#">Contactez-nous</Nav.Link></li>
      <Nav.Link href="#home">Presenttion</Nav.Link>
      <Nav.Link href="#features">Affichage</Nav.Link>
      <NavDropdown title="Orientaion" >
        <NavDropdown.Item >vers 3eme année (ISIL-SI)</NavDropdown.Item>
        <NavDropdown.Item href=''> vers Master1 (SI, RSD, GLAA, SIAA)</NavDropdown.Item>
        <NavDropdown.Item >recours orinetation vers Master1 (SI, RSD, GLAA)</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Projet fin d'étude" >
        <NavDropdown.Item >Master</NavDropdown.Item>
        <NavDropdown.Item >Licence</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Examen et recours">
        <NavDropdown.Item >examen de remplacement</NavDropdown.Item>
        <NavDropdown.Item >faire un recours</NavDropdown.Item>
        <NavDropdown.Item >afficher liste recours</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing">Inscription </Nav.Link>
      <Nav.Link className="search-icon" onClick={()=> setsearshShow(true)} href="#pricing"><i className="fas fa-search"/></Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  <Modal
        size="lg"
        show={searshShow}
        onHide={() => setsearshShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            search
          </Modal.Title>
        </Modal.Header> */}
    <Modal.Body className='p-0'>
      <InputGroup className="">
      <FormControl
        placeholder="Rechercher"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2">
      <i className="fas fa-search"/>
      </Button>
      </InputGroup>
    </Modal.Body>
  </Modal>
    </>
     );
}
 
export default Header;