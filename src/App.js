import logo from './logo.svg';
import './App.css';
import { Container } from 'reactstrap';
import { useEffect, useState } from 'react';
import { fetchData } from './utils/api';
import Listado from './Components/Listado';
import axios from 'axios';

const App = () => {

  const [loading, setLoading] = useState(false);
  const [personaje, setPersonaje] = useState([]);
  



  useEffect(() => {    
    const cargarPersonajes = async () => {

      setLoading(true);

      const resp = await axios.get('https://swapi.dev/api/people/');
      setPersonaje(resp.data.results);
      
      setLoading(false);
    }
    cargarPersonajes();
  }, [])

  

  return (
    <Container>      
      <Listado personaje={personaje}></Listado>
    </Container>
  );
}

export default App;
