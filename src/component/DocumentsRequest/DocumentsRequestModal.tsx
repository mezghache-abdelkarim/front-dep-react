import { Console } from 'console';
import React from 'react';
import {Modal,Button} from 'react-bootstrap'
import '../css.component/DocumentsRequest.css'




interface Props {
    show:boolean;
    onHide: any;
    demande: {
      id:number,
      title: String,
      demande:boolean};
}
const DocumentsRequestModal: React.FC <Props> =({onHide,show,demande}) => {
  function onClick() {
    console.log(" the id " + demande.id + " the  damande title " + demande.title)    
    
  }
    return (
      <Modal 
      onHide={onHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='DocumentsRequestModal m-0'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Confirmer s'il vous plais
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          vous etes sure que vous voulez demander une {demande.title}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="annuler" onClick={onHide}>annuler</Button>
        <Button onClick={onClick}>Demander {demande.id}</Button>
      </Modal.Footer>
    </Modal>
    )
}
export default DocumentsRequestModal ;