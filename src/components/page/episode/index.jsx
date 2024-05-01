import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Episode() {
     const { tap: tapURL } = useParams();
     const { slug: slugURL } = useParams();
     const [episodes, setEpisodes] = useState([]);
     const [episodeData, setEpisodeData] = useState(null);

     useEffect(() => {
          fetch(`https://phimapi.com/phim/${slugURL}`)
          .then(response => response.json())
          .then(data => {
               setEpisodes(data.episodes[0]);
               setEpisodeData(data.episodes[0].server_data.find(server => server.slug === tapURL));
          })
          .catch(error => {
               console.error('Error fetching episode data:', error);
          });
     }, [tapURL]);

     if (!episodeData) {
          return <div>Đợi tao Load...😅</div>;
     } 

     return (
          <>
               {
                    episodeData && (
                         <div className="episode">
                              <nav>
                                   <a className="btn btn-primary me-1" href={`/`}>Trang chủ</a>
                                   <a className="btn btn-success me-1" href={`/movie/${slugURL}`}>Quay lại</a>
                              </nav>
                              <h1>{episodeData.name}</h1>
                              <p>Đợi xíu mới hiện phim nghe ní 😅</p>
                              <iframe src={episodeData.link_embed} height="100%" width="100%" title="Iframe Example"></iframe>


                              {episodes.server_data.map((server, index) => (
                                   <a className='btn btn-secondary me-1 mb-1' href={`/movie/`+ slugURL + `/` + server.slug} key={index}> {server.name} </a>
                              ) )}
                              

                         </div>
                    )
               }
          </>
     );
}

export default Episode;
