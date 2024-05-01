import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'

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
          return <div>
                    <div className="spinner-border text-danger" role="status">
                         <span className="visually-hidden">Loading...</span>
                    </div>
               </div>
     } 

     return (
          <>
               {
                    episodeData && (
                         <div className="episode">
                              <nav className="mb-3">
                                   <a className="btn btn-danger me-1" href={`/movie/${slugURL}`}>Quay lại</a>
                                   <a className="btn btn-success me-1" href={`/`}>Trang chủ</a>
                              </nav>
                              <h1>{episodeData.name == 'Full' ? 'Tập full' : episodeData.name}</h1>
                              <ReactPlayer url={episodeData.link_m3u8} controls={true} autoPlay  width='100%' height='100%' />
                              <div className="mt-3">
                                   <p>Các tập phim</p>
                                   {episodes.server_data.map((server, index) => (
                                        <a className='btn btn-secondary me-1 mb-1' href={`/movie/`+ slugURL + `/` + server.slug} key={index}> {server.name} </a>
                                   ) )}
                              </div>
                              

                         </div>
                    )
               }
          </>
     );
}

export default Episode;
