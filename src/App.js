import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Game from './Components/Game';
import Home from './Components/Home';


function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
