import React, { useState } from "react"
import { Button, Col, Container, FormGroup, Input, Option, Row , Form} from "reactstrap"

const List = ({personaje}) => {

    const [datosPersonaje, setDatosPersonaje] = useState('');

    const handleChange = event => {
        setDatosPersonaje(event.target.value);
    }

    const [otro, setOtro] = useState('');

    const handleChangeSelect = event => {
        setOtro(event.target.value);
    }

    console.log('valor: ', otro);
    
    return(
        <Container>
            <Row>
                <Col>                    
                    <Input type='select' name='selPersonaje' onChange={handleChangeSelect}>
                        {
                            personaje.map((datos) =>            
                                <option>{datos.name}</option>
                            )                    
                        }
                    </Input>
                </Col>
                <Col>
                    <Form>
                        <FormGroup>
                            <Input type='text' value={otro} placeholder="Buscar..." onChange={handleChangeSelect}></Input>
                            <Button color="primary">Buscar</Button>
                        </FormGroup>
                    </Form>                    
                </Col>
            </Row>
            
        </Container>
    )
}

export default List;