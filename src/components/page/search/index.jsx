import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Search() {
     const location = useLocation();
     const [key, setKey] = useState("");
     const [movies, setMovies] = useState([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          const params = new URLSearchParams(location.search);
          setKey(params.get("key"));
          const keySearch = params.get("key");

          if (keySearch) {
               fetch(`https://phim.nguonc.com/api/tim-kiem?keyword=${keySearch}`)
                    .then(response => response.json())
                    .then(data => {
                         setMovies(data.data.items);
                         setLoading(false);
                         console.log(data.data.items);
                    });
          }
     }, [location.search]);


     return (
          <div className="card">
               <div className="card-header text-start pb-2">
                    <h3 className="card-title text-warning"><i className="fe fe-hash"></i>Tìm kiếm: {key}</h3>
               </div>
               <div className="card-body">
                    <div className="form-group">
                         <input type="text" className="form-control" placeholder="Tìm kiếm phim mà bạn muốn xem..." />
                    </div>
                    <div className="row mt-3">
                         {movies.map((movie, index) => (
                              <div
                                   className="col-xl-3 col-lg-3 col-md-4 col-12 mb-3"
                                   key={index}
                              >
                                   <div className="card card-hover " style={{ background: "#0F172A" }}>
                                        <Link to={`/movie/${movie.slug}`}>
                                             <img
                                                  src={`https://img.phimapi.com/`+ movie.poster_url}
                                                  className="img-fluid rounded-top-md"
                                                  alt={movie.name}
                                                  loading="lazy"
                                             />
                                        </Link>
                                        <div className="card-body">
                                             <Link to={`/movie/${movie.slug}`} className="badge bg-info mb-3">
                                                  {movie.year}
                                             </Link>
                                             <h4>
                                                  <Link to="blog-single.html" className="text-inherit">
                                                       {movie.name}
                                                  </Link>
                                             </h4>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
}

export default Search;