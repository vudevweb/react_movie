import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/page/error';
// template
import Home from './components/page/home';
import Movie from './components/page/movie'


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:slug" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
