import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function PhimLienQuan(props) {
     const movie = props.movie;

     const [phimLienQuan, setPhimLienQuan] = useState([]);


     const checkType = (type) => {
          if (type === 'single') {
               return 'phim-le';
          } else if (type === 'series') {
               return 'phim-bo';
          } else if (type === 'hoathinh') {
               return 'hoat-hinh';
          } else if (type === 'tvshows') {
               return 'tv-shows';
          }
     };

     const shuffleArray = (array) => {
          for (let i = array.length - 1; i > 0; i--) {
               const j = Math.floor(Math.random() * (i + 1));
               [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
     }

     useEffect(() => {
          const type = checkType(movie.type);
          fetch(`https://phimapi.com/v1/api/danh-sach/${type}`)
               .then(response => response.json())
               .then(data => {
                    const movie_vd = shuffleArray(data.data.items).slice(0, 4);
                    setPhimLienQuan(movie_vd);
               })
               .catch(error => {
                    console.error('Error fetching related movie data:', error);
               });
     }, []);


     return (
          <>
               <p className="text-warning text-start"> <i className="fe fe-hash"></i> CÓ THỂ BẠN SẼ THÍCH</p>
               <div className="row gap-0">
                    {phimLienQuan.map((movie, index) => (
                         <div key={index} className="col-12 col-md-6 col-xl-12 mb-3 d-block">
                              <div className="card card-hover" style={{ background: "#0F172A", cursor: "pointer" }}>
                                   <div className="row g-0">
                                        <Link to={`/movie/${movie.slug}`} className="col-md-4 p-0">
                                             <img src={`https://img.phimapi.com/${movie.poster_url}`} className="img-fluid rounded-start anh_hover" style={{ height: 210 }} alt="..." />
                                        </Link>
                                        <div className="col-md-8">
                                             <div className="card-body text-start h-100" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                                  <div>
                                                  <Link to="#" className="badge bg-danger mb-2 me-1">{movie.lang}</Link>
                                                  <Link to="#" className="badge bg-success mb-2 me-1">{movie.quality}</Link>
                                                  <Link to="#" className="badge bg-primary mb-2 me-1">{movie.year}</Link>
                                                  </div>
                                                  <Link to={`/movie/${movie.slug}`}><h5 className="card-title text-warning text-inherit mb-3">{movie.name}</h5></Link>
                                                  <p className="card-text"><small className="text-muted"></small></p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>

          </>
     );
}

export default PhimLienQuan;