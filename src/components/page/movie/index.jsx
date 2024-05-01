import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

function Movie() {
     const [slug, setSlug] = useState(null);
     const { slug: slugURL } = useParams();

     useEffect(() => {
          setSlug(slugURL);
     }, [slugURL]);

     return (
          <>
               <nav>
                    <Link to="/">Home</Link>
               </nav>
               <span>MOVIE : {slug} </span>
          </>
     );
}

export default Movie;
