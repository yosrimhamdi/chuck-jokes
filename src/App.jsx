import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import Container from './components/Container/Container';
import JokeDetails from './components/JokeDetails/JokeDetails';

import './App.scss';

function App() {
  return (
    <HashRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category/:jokeId" element={<JokeDetails />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
