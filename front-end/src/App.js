import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Details from './Components/Details';
function App() {
    return(
      <div className='bg-green-rgba-lighter'>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<Home />}/>
            <Route path='/details' element={<Details/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
