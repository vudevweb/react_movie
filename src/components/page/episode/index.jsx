import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'

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
                    console.log(data.movie)
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
                         <div className="card">
                              <div className="card-header">
                                   <nav aria-label="breadcrumb text-warning">
                                        <ol className="breadcrumb ">
                                             <li className="breadcrumb-item ">
                                                  <a className="text-warning" href="/">Trang chủ</a>
                                             </li>
                                             <li className="breadcrumb-item">
                                                  <a className="text-warning" href={`/movie/${movie.slug}`}>
                                                       {movie.name}
                                                  </a>
                                             </li>
                                        </ol>
                                   </nav>
                                   <span></span>
                              </div>
                              <div className=" card-body row">

                                   <div className="col-8 col-sm-12 col-xl-8">
                                        <p className="text-warning text-start"> <i className="fe fe-hash"></i> {episodeData.name == 'Full' ? '<0' : episodeData.name} </p>
                                        <ReactPlayer url={episodeData.link_m3u8} playing={true} controls={true} width='100%' height='500' />
                                        <div className="mt-3">
                                             <p className="text-warning text-start"> <i className="fe fe-hash"></i>CHỌN TẬP PHIM</p>
                                             {episodes.server_data.map((server, index) => (
                                                  <a   
                                                       className={`btn btn-secondary btn_vd me-1 mb-1 ${tapURL === server.slug ? 'btn-warning' : ''}`}
                                                       href={`/movie/${slugURL}/${server.slug}`}
                                                       key={index}
                                                  >
                                                       {server.name}
                                                  </a>
                                             ))}
                                        </div>
                                   </div>

                                   <div className="col-4">
                                        <p className="text-warning text-start"> <i className="fe fe-hash"></i> CÓ THỂ BẠN THÍCH XEM</p>


                                        <div className="card card-hover mb-3" style={ { background: "#0F172A", cursor: "pointer" } }>
                                             <div className="row g-0">
                                                  <div className="col-md-4">
                                                       <img src="https://image.tmdb.org/t/p/w185/JV3DXl1fITfoyHtyPzNuZyzh8q.jpg" className="img-fluid rounded-start h-100" alt="..."/>
                                                  </div>
                                                  <div className="col-md-8">
                                                       <div className="card-body text-start">
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>     
                              </div>
                         </div>
                    )
               }

          </>
     );
}

export default Episode;
