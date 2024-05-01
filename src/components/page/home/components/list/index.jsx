import React, { useState, useEffect } from "react";

function List() {
     const [moviesDefault, setMoviesDefault] = useState([]);
     const [loading, setLoading] = useState(true); // Add loading state to track data loading

     useEffect(() => {
          fetch("https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1")
               .then((response) => response.json())
               .then((data) => {
                    setMoviesDefault(data.items);
                    setLoading(false); // Update loading state after data is fetched
                    console.log(data);
               })
               .catch((error) => {
                    console.error("Error fetching data:", error);
                    setLoading(false); // Update loading state in case of error
               });
     }, []);

     // Render loading spinner if data is still loading
     if (loading) {
          return (
               <div className="text-center mt-3">
                    <div className="spinner-border text-danger" role="status">
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
                                   <a href={`/movie/${movie.slug}`}>
                                        <img
                                             src={movie.thumb_url} 
                                             className="img-fluid rounded-top-md"
                                             alt={movie.name} 
                                             loading="lazy"
                                        />
                                   </a>
                                   <div className="card-body">
                                        <a href={`/movie/${movie.slug}`} className="badge bg-info mb-3">
                                             {movie.year}
                                        </a>
                                        <h4>
                                             <a href="blog-single.html" className="text-inherit">
                                                  {movie.name} 
                                             </a>
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
