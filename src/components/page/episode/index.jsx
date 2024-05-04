import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'

import Comment from "./components/comment";

function Episode() {
     const { tap: tapURL } = useParams();
     const { slug: slugURL } = useParams();

     const [title, setTitle] = useState('');

     const [episodes, setEpisodes] = useState([]);
     const [episodeData, setEpisodeData] = useState(null);
     const [movie, setMovie] = useState([]);

     useEffect(() => {
          fetch(`https://phimapi.com/phim/${slugURL}`)
               .then(response => response.json())
               .then(data => {
                    setMovie(data.movie);
                    setTitle(data.movie.name);
                    setEpisodes(data.episodes[0]);
                    setEpisodeData(data.episodes[0].server_data.find(server => server.slug === tapURL));
               })
               .catch(error => {
                    console.error('Error fetching episode data:', error);
               });
     }, [tapURL]);

     useEffect(() => {
          document.title = title;
     }, [title])

     if (!episodeData) {
          return <div className='loading_vd'>
               <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
               </div>
          </div>
     }

     return (
          <>

               {
                    episodeData && (
                         <> 
                         <div className="card">
                              <div className="card-header">
                                   <nav aria-label="breadcrumb text-warning">
                                        <ol className="breadcrumb ">
                                             <li className="breadcrumb-item ">
                                                  <Link  className="text-warning" to="/">Trang chủ</Link>
                                             </li>
                                             <li className="breadcrumb-item">
                                                  <Link className="text-warning" to={`/movie/${movie.slug}`}>
                                                       {movie.name}
                                                  </Link>
                                             </li>
                                        </ol>
                                   </nav>
                                   <span></span>
                              </div>
                              <div className="card-body row">
                                   <div className="col-12 col-sm-12 col-xl-12 video_vd mb-4">
                                        <p className="text-warning text-start"> <i className="fe fe-hash"></i> {episodeData.name == 'Full' ? '<0' : episodeData.name} </p>
                                        <ReactPlayer className="container"  url={episodeData.link_m3u8} playing={true} controls={true} width='100%' height='500' />
                                        <div className="mt-3">
                                             <p className="text-warning text-start"> <i className="fe fe-hash"></i>CHỌN TẬP PHIM</p>
                                             {episodes.server_data.map((server, index) => (
                                                  <Link   
                                                       className={`btn btn-secondary btn_vd me-1 mb-1 ${tapURL === server.slug ? 'btn-warning' : ''}`}
                                                       to={`/movie/${slugURL}/${server.slug}`}
                                                       key={index}
                                                  >
                                                       {server.name}
                                                  </Link>
                                             ))}
                                        </div>
                                        <p className="text-warning text-start mt-3"> <i className="fe fe-hash"></i>BÌNH LUẬN</p>
                                        <Comment />
                                   </div>    
                              </div>
                         </div>

                         </>
                    )
               }

          </>
     );
}

export default Episode;
