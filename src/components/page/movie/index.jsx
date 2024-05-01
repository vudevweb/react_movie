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
                    <div>Đợi tao Load...😅</div>
               ) : (
                    <div>
                         <p> server : {episodes.server_name}</p>
                    <div>
                         Tập phim: {episodes.server_data.length} 👉
                         {episodes.server_data.map((server, index) => (
                                   <Link className='btn btn-secondary me-1 mb-1 ms-1 ' to={`/movie/`+ slugURL + `/` + server.slug} key={index}> {server.name} </Link>
                         ))}
                    </div>

                    </div>
               )}
          </>
     );
}

export default Movie;
