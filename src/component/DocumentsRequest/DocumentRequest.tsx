import React from 'react';
import {Container,Row,Col,Stack,Button,FormControl,InputGroup} from 'react-bootstrap'
import '../css.component/DocumentsRequest.css'
import DocumentsRequestModal from './DocumentsRequestModal'




interface Props {
    demande:{
        id:number,
        title: String,
        demande:boolean};    
}
const DocumentRequest: React.FC <Props> =({demande}) => {
    const [ModalShow, setModalShow] = React.useState(false)
    const onShow = (id:Number) => setModalShow(true)
    const onHide = (id:Number) => setModalShow(false)
    const onClick=(event: any) => {
        //React.MouseEvent<HTMLButtonElement>
        // event.preventDefault();
        // const button: HTMLButtonElement = event.currentTarget;
        onShow(demande.id);
      };


    return ( 
        <>      
                <Col className="my-2 d-flex justify-content-center"xs={12} sm={6} md={6} lg={6} > 
                    <Stack className='p-2' direction="horizontal" gap={2}>
                        <div className="DR text-start"> {demande.title} </div>
                            <div className="ms-auto">
                                <Button variant="primary" onClick={onClick}>
                                        Demander 
                                </Button>
                                    <DocumentsRequestModal
                                    key={demande.id}
                                    demande={demande} 
                                    show={ModalShow}
                                    onHide={onHide}
                                     /> 
                                
                            </div>
                    </Stack>
                </Col>

        </>
    )
}

export default DocumentRequest ;
