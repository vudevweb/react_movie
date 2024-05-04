import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player'

import Comment from "./components/comment";

function XemPhim() {
     const location = useLocation();
     const params = new URLSearchParams(location.search);
     const slugURL = params.get("name");
     const server = params.get("server");
     const tap = params.get("tap");

     const [title, setTitle] = useState('');
     const [episodes, setEpisodes] = useState([]);
     const [episodeData, setEpisodeData] = useState(null);
     const [movie, setMovie] = useState(null);

     useEffect(() => {
          fetch(`https://phim.nguonc.com/api/film/${slugURL}`)
               .then(response => response.json())
               .then(data => {
                    setMovie(data.movie);
                    setTitle(data.movie.name);
                    setEpisodes(data.movie.episodes);
                    const episode = data.movie.episodes.find(ep => ep.server_name === server);
                    setEpisodeData(episode.items.find(item => item.name === tap));
               })
               .catch(error => {
                    console.error('Error fetching episode data:', error);
               });
     }, [slugURL, server, tap]);

     useEffect(() => {
          document.title = title;
     }, [title]);

     if (!episodeData || !movie) {
          return (
               <div className='loading_vd'>
                    <div className="spinner-border text-danger" role="status">
                         <span className="visually-hidden">Loading...</span>
                    </div>
               </div>
          );
     }

     return (
          <>
               <div className="card">
                    <div className="card-header text-start">
                         <nav aria-label="breadcrumb text-warning " >
                              <ol className="breadcrumb justify-content-start">
                                   <li className="breadcrumb-item">
                                        <Link className="text-warning" to="/">Trang chủ</Link>
                                   </li>

                                   <li className="breadcrumb-item">
                                        <Link className="text-warning" to={`/phim/${movie.slug}`}>
                                             {movie.name}
                                        </Link>
                                   </li>
                              </ol>
                         </nav>
                    </div>
                    <div className="card-body row">
                         <div className="col-12 col-sm-12 col-xl-12 video_vd mb-4">
                              <p className="text-warning text-start"> <i className="fe fe-hash"></i> Tập {episodeData.name === 'Full' ? '0' : episodeData.name} </p>
                              <iframe src={episodeData.embed} height="500" width="100%"></iframe>
                              {/* <ReactPlayer className="container" url={episodeData.m3u8} playing={true} controls={true} width='100%' height='500' /> */}
                              <div className="mt-3">
                                   <p className="text-warning text-start"> <i className="fe fe-hash"></i>CHỌN TẬP PHIM</p>
                                   {episodes.map((serverEpisodes, index) => (
                                        <div key={index}>
                                             <p className="text-warning"><strong>Server:</strong> {serverEpisodes.server_name}</p>
                                             <div className="d-flex flex-wrap">
                                                  {serverEpisodes.items.map((episode, i) => (
                                                       <Link
                                                            className={`btn btn-secondary me-3 mb-3 ${episode.name === tap ? 'btn btn-warning' : ''}`}
                                                            to={`/xem-phim?name=${encodeURIComponent(slugURL)}&server=${encodeURIComponent(serverEpisodes.server_name)}&tap=${encodeURIComponent(episode.name)}`}
                                                            key={i}
                                                       >
                                                            {episode.name}
                                                       </Link>
                                                  ))}
                                             </div>
                                        </div>
                                   ))}
                              </div>
                              <p className="text-warning text-start mt-3"> <i className="fe fe-hash"></i>BÌNH LUẬN</p>
                              <Comment />
                         </div>    
                    </div>
               </div>
          </>
     );
}

export default XemPhim;
