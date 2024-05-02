     import { useState, useEffect } from "react";

     import "slick-carousel/slick/slick.css";
     import "slick-carousel/slick/slick-theme.css";
     import Slider from "react-slick";

     function PhimBo(props) {

          const {phimBo} = props;
          const [phimBoV1, setpPhimBo] = useState([]);
          const [loading, setLoading] = useState(true);

          useEffect(() => {
               setpPhimBo(phimBo);
               setTimeout(() => {
                    setLoading(false);
               }, 1500);
          }, [phimBo]);


          var settings = {
               infinite: true,
               slidesToShow: 3,
               slidesToScroll: 2,
               autoplay: true,
               autoplaySpeed: 4000,
               cssEase: "linear",
               responsive: [
                    {
                         breakpoint: 992, 
                         settings: {
                              slidesToScroll: 1,
                              slidesToShow: 2,
                              }
                    },
                    {
                         dots: true,
                         breakpoint: 768,
                         settings: {
                              slidesToScroll: 1,
                              slidesToShow: 1,
                         }
                    }
               ]
          };

          if (loading) {
               return (
                    <div className="text-center mt-3 loading_vd">
                         <div className="spinner-border text-warning" role="status">
                              <span className="visually-hidden">Loading...</span>
                         </div>
                    </div>
               );
          }

          return (
               <div className="card mt-3 slider-container" >
                    <div className="card-header d-flex justify-content-between align-item-center">
                         <span ><a href="/category/phim-bo" className="text-warning"><i className="fe fe-hash"></i> Phim bộ</a></span>
                         <small ><a href="/category/phim-bo" className="text-warning">Xem thêm</a></small>
                    </div>
                    <Slider {...settings} className="card-body row">
                         {phimBoV1.map((movie, index) => (
                                   <div className="col-xl-4 col-lg-4 col-md-6 col-12" key={index}>
                                        <div className="card card-hover " style={{ background: "#0F172A" }}>
                                             <a href={`/movie/${movie.slug}`}>
                                                  <img
                                                       src={`https://img.phimapi.com/${movie.thumb_url}`} 
                                                       className="img-fluid rounded-top-md"
                                                       alt={movie.name} 
                                                       loading="lazy"
                                                  />
                                             </a>
                                             <div className="card-body">
                                                  <a href={`/movie/${movie.slug}`} className="badge bg-warning mb-3 me-1">
                                                       {movie.year}
                                                  </a>
                                                  <a href={`/movie/${movie.slug}`} className="badge bg-danger mb-3 me-1">
                                                       {movie.quality}
                                                  </a>
                                                  <a href={`/movie/${movie.slug}`} className="badge bg-success mb-3 me-1">
                                                       {movie.lang}
                                                  </a>
                                                  <h4>
                                                       <a href={`/movie/${movie.slug}`} className="text-inherit">
                                                            {movie.name} 
                                                       </a>
                                                  </h4>
                                             </div>
                                        </div>
                                   </div>
                         ))}
                    </Slider>
               </div>
          );
     }

     export default PhimBo;