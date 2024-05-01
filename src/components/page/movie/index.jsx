import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

import Info from './components/info';


function Movie() {
     const [title, setTitle] = useState('');
     const [episodes, setEpisodes] = useState([]);
     const [data, setData] = useState([]);
     const { slug: slugURL } = useParams();

     useEffect(() => {
          fetch(`https://phimapi.com/phim/${slugURL}`)
               .then(response => response.json())
               .then(data => {
                    setEpisodes(data.episodes[0]);
                    setTitle(data.movie.name);
                    setData(data.movie);
                    // console.log(data.movie);
               });
     }, [slugURL]);

     useEffect(() => {
          document.title = title;
     }, [title])

     return (
          <>
               {episodes.length == 0 ? (
                         <div>
                              <div className="spinner-border text-danger" role="status">
                                   <span className="visually-hidden">Loading...</span>
                              </div>
                         </div>
               ) : (
                    <>
                         <Info data={data} slug={slugURL} server={episodes.server_data}/>
                    </>
               )}
          </>
     );
}

export default Movie;
