import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import AlphabetGame from './Components/AlphabetGame';
import Home from './Components/Home';
import NumbersGame from './Components/NumbersGame/NumbersGame';


function App() {
  return (
    <>
      <HashRouter basename='/'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/alphabet-game' element={<AlphabetGame />} />
          <Route path='/numbers-game' element={<NumbersGame />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
