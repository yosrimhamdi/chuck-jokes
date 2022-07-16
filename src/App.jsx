import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import Container from './components/Container';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
