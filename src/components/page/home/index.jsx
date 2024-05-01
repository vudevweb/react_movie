import { Link } from "react-router-dom";
import { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Home() {
     const [movies, setMovies] = useState([]);
     const [urlImage, setUrlImage] = useState("");
     const [test, setTest] = useState("");

     const handleChange = (e) => {
          const searchTerm = e.target.value;
          setTest(searchTerm);

          if(searchTerm == null || searchTerm == "") {
               return;
          }
          setTimeout(() => {
               fetch(`https://phimapi.com/v1/api/tim-kiem?keyword=${searchTerm}&limit=5`)
               .then(response => response.json())
               .then(data => {
                    setMovies(data.data.items);
                    setUrlImage(data.data.APP_DOMAIN_CDN_IMAGE);
               });
          });
     };

     return (
          <div className="container">
               <div className="mt-3 mb-3">
                    <label htmlFor="search">Tìm kiếm phim</label>
                    <input className="form-control" onChange={handleChange} type="text" />
               </div>
               <span> value: {test} </span>

               <table className="table table-hover mt-3">
                    <thead>
                         <tr>
                              <th scope="col">#</th>
                              <th scope="col">Tên phim</th>
                              <th scope="col">Hình ảnh</th>
                              <th scope="col">Quốc gia</th>
                              <th scope="col">Thể loại</th>
                              <th scope="col">Hành động</th>
                         </tr>
                    </thead>
                    <tbody>
                         { movies.map((movie, index) => (
                              <tr key={index}>
                                   <th scope="row">{index + 1}</th>
                                   <td>
                                        {movie.name} <br />
                                        <span className="badge bg-danger me-1">{movie.lang}</span>
                                   </td>
                                   <td>
                                        <LazyLoadImage
                                             alt={movie.name}
                                             height="150"
                                             src={`${urlImage}/${movie.poster_url}`}
                                             width="100"
                                        >
                                        </LazyLoadImage>
                                   </td>
                                   <td>{movie.country && movie.country.length > 0 ? movie.country[0].name : ''}</td>
                                   <td>{movie.category && movie.category.length > 0 && movie.category.map((cate) => (
                                        <span key={cate.id} className="badge bg-danger me-1 mb-1">{cate.name}</span>
                                   ))}</td>
                                   <td>
                                        <button className="btn btn-primary mb-3" onClick={() => alert('Cái này đang làm, xem video đi you ❤️️')}>Xem chi tiết phim</button> <br />
                                        <Link to={`/movie/${movie.slug}`} className="btn btn-success">Xem phim</Link>
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
}

export default Home;
