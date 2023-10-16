import './App.css';
import Products from './components/Products';
import { Container } from 'react-bootstrap';


function App() {


  return (
    <div className='App'>
      <Container>
      <Products/>
      </Container>
    </div>
 
  );
}

export default App;
