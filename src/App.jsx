import './App.css';
import './assets/feather/feather.css';
import './assets/js/smoothscroll.js';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/page/error';
// template
import Home from './components/page/home';
import Movie from './components/page/movie'
import Episode from './components/page/episode';
import Header from './components/layout/header';

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<Movie />} />
        <Route path="/movie/:slug" element={<Movie />} />
        <Route path="/movie/:slug/:tap" element={<Episode />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
