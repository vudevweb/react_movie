import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import List from "./components/list";
import PhimLe from "./components/phim-le";
import PhimBo from "./components/phim-bo";
import Anime from "./components/hoat-hinh";
import TvShow from "./components/tv-show";

function Home() {
     const [title, setTitle] = useState('');
     document.title = title; 

     const [movies, setMovies] = useState([]);
     const [loading, setLoading] = useState(true);
     const [phimLe, setpPhimLe] = useState([]);
     const [animeP, setAnimeP] = useState([]);
     const [phimBo, setpPhimBo] = useState([]);
     const [tvShowP, setTvShowP] = useState([]);
     const [dataLoaded, setDataLoaded] = useState(false);

     const searchInputRef = useRef(null);

     // useEffect(() => {
     //      const fetchMovies = async () => {
     //           if (!dataLoaded) {
     //                const responses = await Promise.all([
     //                     fetch(`https://phimapi.com/v1/api/danh-sach/phim-le`),
     //                     fetch(`https://phimapi.com/v1/api/danh-sach/phim-bo`),
     //                     fetch(`https://phimapi.com/v1/api/danh-sach/hoat-hinh`),
     //                     fetch(`https://phimapi.com/v1/api/danh-sach/tv-shows`),
     //                ]);
     //                const data = await Promise.all(responses.map(response => response.json()));

     //                setpPhimLe(data[0].data.items);
     //                setpPhimBo(data[1].data.items);
     //                setAnimeP(data[2].data.items);
     //                setTvShowP(data[3].data.items);
     //                setLoading(false);
     //                setDataLoaded(true);
     //           }
     //      };

     //      fetchMovies();
     // }, [dataLoaded]);

     const handleChange = (e) => {
          const searchTerm = e.target.value;
          if (searchTerm == null || searchTerm == "") {
               setMovies([]);
               return;
          }

          setTimeout(() => {
               fetch(`https://phimapi.com/v1/api/tim-kiem?keyword=${searchTerm}&limit=5`)
                    .then(response => response.json())
                    .then(data => {
                         setMovies(data.data.items);
                    });
          });
     };

     // if (loading) {
     //      return (
     //           <div className="text-center mt-3 loading_vd">
     //                <div className="spinner-border text-warning" role="status">
     //                     <span className="visually-hidden">Loading...</span>
     //                </div>
     //           </div>
     //      );
     // }

     return (
          <div className="">

               {/* danh mục */}
               <List />

               {/* <PhimLe phimLe={phimLe} />
               <PhimBo phimBo={phimBo} />
               <Anime animeP={animeP} />
               <TvShow tvShowP={tvShowP} /> */}
               {/* end danh mục */}
          </div>
     );
}

export default Home;
