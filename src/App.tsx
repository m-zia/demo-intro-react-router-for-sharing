
import './App.css';
//import Header from './components/header/header';
//import Footer from './components/footer/footer';
//import Home from './components/home/home';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router/router';

function App() {
  return (
   <>
   <BrowserRouter>
   

    <Router />

   </BrowserRouter>
    
   </>
  );
}


export default App;
