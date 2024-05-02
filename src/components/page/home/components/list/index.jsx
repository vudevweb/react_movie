import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function List() {
     const [moviesDefault, setMoviesDefault] = useState([]);
     const [loading, setLoading] = useState(true);
     useEffect(() => {
          fetch("https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1")
               .then((response) => response.json())
               .then((data) => {
                    setMoviesDefault(data.items);
                    setLoading(false);
                    // console.log(data);
               })
               .catch((error) => {
                    console.error("Error fetching data:", error);
                    setLoading(false);
               });
     }, []);

     if (loading) {
          return (
               <div className="text-center mt-3 loading_vd">
                    <div className="spinner-border text-warning" role="status">
                         <span className="visually-hidden">Loading...</span>
                    </div>
               </div>
          );
     }

     // Render movies when data is loaded
     return (
          <div className="card mt-3">
               <div className="card-header">
                    <span className="text-warning">👇 Phim mới cập nhật 👇</span>
               </div>
               <div className="card-body row">
                    {moviesDefault.map((movie, index) => (
                         <div
                              className="col-xl-4 col-lg-4 col-md-6 col-12 mb-3"
                              key={index}
                         >
                              <div className="card card-hover " style={{ background: "#0F172A" }}>
                                   <Link to={`/movie/${movie.slug}`}>
                                        <img
                                             src={movie.thumb_url} 
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
     );
}

export default List;
