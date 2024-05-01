import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

function Movie() {
     const [episodes, setEpisodes] = useState([]);
     const { slug: slugURL } = useParams();

     useEffect(() => {
          fetch(`https://phimapi.com/phim/${slugURL}`)
               .then(response => response.json())
               .then(data => {
                    setEpisodes(data.episodes[0]);
               });
     }, [slugURL]);


     return (
          <>
               <nav>
                    <Link to="/" className='btn btn-success mb-3' >Về trang chủ</Link>
               </nav>
               {episodes.length === 0 ? (
                         <div>
                              <div className="spinner-border text-danger" role="status">
                                   <span className="visually-hidden">Loading...</span>
                              </div>
                         </div>
               ) : (
                    <div>
                         <p> server : {episodes.server_name}</p>
                         <div>
                              <p>Các phim ({episodes.server_data.length})</p>
                              {episodes.server_data.map((server, index) => (
                                   <Link className='btn btn-secondary me-1 mb-1 ms-1 ' to={`/movie/` + slugURL + `/` + server.slug} key={index}> {server.name} </Link>
                              ))}
                         </div>

                    </div>
               )}
          </>
     );
}

export default Movie;
