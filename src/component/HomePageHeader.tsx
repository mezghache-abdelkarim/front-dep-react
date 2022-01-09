import React,{useState} from 'react'
import {Container,Row,Col,Image,Carousel} from 'react-bootstrap'
import './css.component/HomePageHeader.css'
interface Props {
    
}
 
const HomePageHeader: React.FC<Props> = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex:any, e:any) => {
      setIndex(selectedIndex);
    };
  
    return ( <>
        <Container fluid className='p-0 m-0 HomePageHeader'>
            <Row>
            <Col className="" xs={5} sm={5} md={5} lg={5}  >
                <Image className="py-5" src="/images/HomePageHeader.png" alt="" />
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item className='p-4'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dignissimos repellendus illum iste quasi voluptate,</p>
                        <a href='#home'><i className="fas fa-arrow-right"></i></a>
                    </Carousel.Item>
                    <Carousel.Item className='p-4'>
                        <p>2 ipsum dolor, sit amet consectetur adipisicing elit. Culpa dignissimos repellendus illum iste quasi voluptate,</p>
                        <a href='#home'><i className="fas fa-arrow-right"></i></a>
                    </Carousel.Item>
                    <Carousel.Item className='p-4'>
                        <p>3 ipsum dolor, sit amet consectetur adipisicing elit. Culpa dignissimos repellendus illum iste quasi voluptate,</p>
                        <a href='#home'><i className="fas fa-arrow-right"></i></a>
                    </Carousel.Item>
                    <Carousel.Item className='p-4'>
                        <p>4 ipsum dolor, sit amet consectetur adipisicing elit. Culpa dignissimos repellendus illum iste quasi voluptate,</p>
                        <a href='#home'><i className="fas fa-arrow-right"></i></a>
                    </Carousel.Item>
            </Carousel>

            </Col>
            <Col className="p-0" xs={7} sm={7} md={7} lg={7}>
                    <Image  src="/images/HomePageHeader1.jpg" alt="" />
            </Col>
            </Row>
        </Container>
    
    
    </> );
}
 
export default HomePageHeader;