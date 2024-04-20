import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Details from './Components/Details';
function App() {
    return(
      <>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<Home />}/>
            <Route path='/details' element={<Details/>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;
