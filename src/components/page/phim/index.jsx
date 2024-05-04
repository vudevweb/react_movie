import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

import Info from './components/info';


function Movie() {
     const [title, setTitle] = useState('');
     const [episodes, setEpisodes] = useState([]);
     const [data, setData] = useState([]);
     const { slug: slugURL } = useParams();

     useEffect(() => {
          fetch(`https://phim.nguonc.com/api/film/${slugURL}`)
               .then(response => response.json())
               .then(data => {
                    setEpisodes(data.movie.episodes);
                    setTitle(data.movie.name);
                    setData(data.movie);
               });
     }, [slugURL]);

     useEffect(() => {
          document.title = title;
     }, [title])

     return (
          <>
               {episodes.length == 0 ? (
                         <div className='loading_vd'>
                              <div className="spinner-border text-warning" role="status" >
                                   <span className="visually-hidden">Loading...</span>
                              </div>
                         </div>
               ) : (
                         <Info data={data} slug={slugURL} server={episodes}/>
               )}
          </>
     );
}

export default Movie;
