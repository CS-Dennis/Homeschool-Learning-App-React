import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Game from './Components/Game';
import Home from './Components/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
