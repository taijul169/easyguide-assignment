import logo from './logo.svg';
import './App.css';
import Demo from './components/demo';
import {Container} from 'react-bootstrap'
import CustomerForm from './components/form/CustomForm';

//import index from './search_form';




const App =() => {
  return (
    <div className="App">
      <h2>Easy Guide For You</h2>
      <Container>
        <CustomerForm/>
      </Container>
      
    </div>
  );
}

export default App;
