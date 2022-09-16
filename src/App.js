import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import AlphabetFlashCards from './Components/LearnAlphabet/AlphabetFlashCards';
import AlphabetGame from './Components/LearnAlphabet/AlphabetGame';
import LearnAlphabet from './Components/LearnAlphabet/LearnAlphabet';
import NumbersGame from './Components/LearnNumbers/NumbersGame';


function App() {
  return (
    <>
      <HashRouter basename='/'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/learn-alphabet' element={<LearnAlphabet />} />
          <Route path='/learn-alphabet/alphabet-game' element={<AlphabetGame />} />
          <Route path='/learn-alphabet/alphabet-flashcards' element={<AlphabetFlashCards />} />
          
          <Route path='/learn-numbers' element={<NumbersGame />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
