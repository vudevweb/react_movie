import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Info from './components/info';

function Movie() {
     const location = useLocation();
     const [title, setTitle] = useState('');
     const [episodes, setEpisodes] = useState([]);
     const [data, setData] = useState([]);
     const [loading, setLoading] = useState(true);
     const [slugURL, setSlugURL] = useState('');
     const [reloadTrigger, setReloadTrigger] = useState(Date.now());
     console.log(reloadTrigger);
     useEffect(() => {
          const params = new URLSearchParams(location.search);
          const slugFromParams = params.get('name');
          if (slugFromParams) {
               setSlugURL(slugFromParams);
          }
     }, [location]);

     useEffect(() => {
          if (slugURL) {
               fetch(`https://phim.nguonc.com/api/film/${slugURL}`)
                    .then(response => response.json())
                    .then(data => {
                         setLoading(false);
                         setEpisodes(data.movie.episodes);
                         setTitle(data.movie.name);
                         setData(data.movie);
                    })
                    .catch(error => {
                         console.error('Error fetching movie data:', error);
                         setLoading(false); 
                    });
          }
     }, [slugURL, reloadTrigger]); // Sử dụng reloadTrigger ở đây

     useEffect(() => {
          document.title = title;
     }, [title])

     useEffect(() => {
          // Set reloadTrigger để kích hoạt useEffect() khi trang được reload
          setReloadTrigger(Date.now());
     }, []);

     if (loading) {
          return (
               <div className='loading_vd'>
                    <div className="spinner-border text-warning" role="status" >
                         <span className="visually-hidden">Loading...</span>
                    </div>
               </div>
          );
     }

     return (
          <Info data={data} slug={slugURL} server={episodes}/>
     );
}

export default Movie;
