import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/page/error';
// template
import Home from './components/page/home';
import Movie from './components/page/movie'
import Episode from './components/page/episode';


function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:slug" element={<Movie />} />
        <Route path="/movie/:slug/:tap" element={<Episode slug=":slug" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>

  );
}

export default App;
