import React from 'react'
import './css.component/AffichageTable.css'
import {Container,Row,Col,Form} from 'react-bootstrap'
interface Props {
    
}
 
const AffichageTable: React.FC<Props> = () => {
    return ( 
        <>
        <Container>
            <h3 className=''>tableau d'affichage</h3>
            <Form.Select aria-label="Default select example">
            <option>Votre année d'etude</option>
            <option value="1">Licence 2</option>
            <option>Licence 3</option>
            <option value="1">Licence 3 SI</option>
            <option value="2">Licence 3 ISIL</option>
            <option>Master 1</option>
            <option value="1">Master 1 SI</option>
            <option value="2">Licence 1 RSD</option>
            <option value="2">Licence 1 GL</option>
            <option value="2">Licence 1 SAA</option>
            <option>Master 2</option>
            <option value="1">Master 2 SI</option>
            <option value="2">Licence 2 RSD</option>
            <option value="2">Licence 2 GL</option>
            <option value="2">Licence 2 SAA</option>
            </Form.Select>
        </Container>
        </>
    )
}
export default AffichageTable ;