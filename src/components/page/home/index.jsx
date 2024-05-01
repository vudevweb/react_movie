import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import List from "./components/list";
function Home() {
     const [title, setTitle] = useState('');
     const [movies, setMovies] = useState([]);

     useEffect(() => {
          setTitle('Trang chủ');
          document.title = title;
     }, [title])



     const handleChange = (e) => {
          const searchTerm = e.target.value;
          if(searchTerm == null || searchTerm == "") {
               setMovies([]);
               return;
          }
          setTimeout(() => {
               fetch(`https://phimapi.com/v1/api/tim-kiem?keyword=${searchTerm}&limit=5`)
               .then(response => response.json())
               .then(data => {
                    setMovies(data.data.items);
                    console.log(data.data.items);
               });
          });
     };

     
     return (
          <div className="">
               <div className="card">
               <div className="mb-3 card-header">
                    <label htmlFor="search" className="text-warning mb-2">👇 Tìm kiếm phim cần xem 👇</label>
                    <input className="form-control" onChange={handleChange} type="text" placeholder="Nhập tên phim của bạn tại đây ✍️" />
               </div>
               <table className="card-body table  table-hover table-centered mt-3">
                    <thead>
                         <tr className="text-warning">
                              {/* <th scope="col">HÌNH ẢNH</th>
                              <th scope="col" >Tên phim</th>
                              <th scope="col">Tình trạng</th>
                              <th scope="col">Định dạng</th>
                              <th scope="col">Quốc gia</th>
                              <th scope="col"></th> */}
                         </tr>
                    </thead>
                    <tbody>
                         { movies.map((movie, index) => (
                              <tr key={index}>
                                   <th>
                                        <a href={`/movie/${movie.slug}`}>
                                             <img
                                                  src={`https://img.phimapi.com/${movie.thumb_url}`} 
                                                  className="img-fluid rounded-top-md"
                                                  alt={movie.name} 
                                                  loading="lazy"
                                                  width={100}
                                             />
                                        </a>
                                   </th>
                                   <td>
                                        <a className="text-warning" href="http://">{movie.name}</a>
                                        <br />
                                        <span className="badge bg-danger me-1 mb-1">{movie.lang}</span>
                                        <span className="badge bg-success me-1 mb-1">{movie.quality}</span>
                                        <span className="badge bg-warning me-1 mb-1">{movie.year}</span>
                                   </td>
                                   <td>
                                        {movie.episode_current}
                                   </td>
                                   <td>
                                        {
                                             movie.type == 'single' ? 'Phim lẻ'
                                             : movie.type == 'series' ? 'Phim bộ'
                                             : movie.type == 'hoathinh' ? 'Hoạt hình'
                                             : ''
                                        }
                                   </td>

                                   <td>{movie.country && movie.country.length > 0 ? movie.country[0].name : ''}</td>
                                   <td>
                                        <Link to={`/movie/${movie.slug}`} className="btn btn-success">Xem phim</Link>
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
               </div>
               
               <List />
          </div>
     );
}

export default Home;
