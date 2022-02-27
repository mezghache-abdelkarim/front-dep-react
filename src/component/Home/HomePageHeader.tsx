import React,{useState} from 'react'
import {Container,Row,Col,Image,Carousel} from 'react-bootstrap'
import '../css.component/HomePageHeader.css'
interface Props {
    
}
 
const HomePageHeader: React.FC<Props> = () => {
    const [index, setIndex] = useState(0);
    const [CarouselItem,setCarouselItem] = useState<any>([
        {
            index:1,
            description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempora commodi magnam amet temporibus? Molestiae aliquam excepturi ab nihil, minus, ducimus animi possimus neque sint fugit ullam alias. "
        },
        {
            index:2,
            description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempora commodi magnam amet temporibus? Molestiae aliquam excepturi ab nihil, minus, ducimus animi possimus neque sint fugit ullam alias. "
        },
        {
            index:3,
            description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempora commodi magnam amet temporibus? Molestiae aliquam excepturi ab nihil, minus, ducimus animi possimus neque sint fugit ullam alias. "
        },
        {
            index:4,
            description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempora commodi magnam amet temporibus? Molestiae aliquam excepturi ab nihil, minus, ducimus animi possimus neque sint fugit ullam alias. "
        }
    ])
    
    const handleSelect = (selectedIndex:any, e:any) => {
      setIndex(selectedIndex);
    };
  
    return ( <>
        <Container fluid className='p-0 m-0 HomePageHeader'>
            <Row  className="w-100 m-0">
            <Col xs={5} sm={5} md={5} lg={5}  >
                <Image className="py-5" src="/images/HomePageHeader.png" alt="" />

                <Carousel activeIndex={index} onSelect={handleSelect}>
                {CarouselItem.map((item:any,index:any)=> (

                    <Carousel.Item key={item.index} className='p-4'>
                        <p>{item.description.length > 150 ?
                        `${item.description.substring(0, 120)}...` : item.description}
                        </p>
                        <a className="ml-4" href='#home'><i className="fas fa-arrow-right"></i></a>
                    </Carousel.Item>
                ))
                }
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