import React, { useEffect } from 'react';
import {Container,Row,Col,Stack,Button,FormControl,InputGroup} from 'react-bootstrap'
import '../css.component/DocumentsRequest.css'
import DocumentsRequestModal from './DocumentsRequestModal'
import DocumentRequest from './DocumentRequest'
import { type } from 'os';





interface Props {
    
}
type modalShowType ={id:number,
                Show:boolean};
            
const DocumentsRequests: React.FC <Props> =() => {
    
    const [Demande, setDemande] = React.useState([
        {
            id:1,
            title:"Certificat de scolartité",
            demande:false
        },
        {   id:2,
            title:"Certificat d'inscription",
            demande:false
        },
        {   id:3,
            title:"annexe",
            demande:false
        },
        {   id:4,
            title:"Relevé de notes",
            demande:false
        },
        {   id:5,
            title:"demande de stage",
            demande:false
        },
        {   id:6,
            title:"Certificat de scolarité",
            demande:false
        },
        {
            id:7,
            title:"Certificat de scolartité",
            demande:false
        },
        {
            id:8,
            title:"Certificat de scolartité",
            demande:false
        },
    ]);
    
    
        useEffect(() => {
            // console.log(" okk " + modalShow[5] ) 
        }, [])

    return ( 
        <>
        <Container className='DocumentsRequest' >
            <Stack className='' direction="horizontal" gap={2}>
                <div className="DR text-start"> Demande des <div> <span>DOCUMENTS </span></div>
                <img src="/images/black-lines.png" alt="" />  </div>
                <div className="ms-auto">
                    <InputGroup className="">
                        <FormControl
                            placeholder="Rechercher"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            <i className="fas fa-search"/>
                        </Button>
                    </InputGroup>

                </div>
            </Stack>
            <Row className="py-5">
                {Demande.map((demande)=>( 
                    <DocumentRequest key={demande.id}  demande={demande} />
                ))}
                {/* <DocumentRequest key={Demande[1].id} onShow={onShow(Demande[1].id)} onHide={onHide(Demande[1].id)} demande={Demande[1]} modalShow={onModalShow(Demande[1].id)} /> */}
                
            </Row>
        </Container>

        </>
    )
}

export default DocumentsRequests ;
