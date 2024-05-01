import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom for routing

function Info(props) {
     const { data, slug, server } = props;

     const [info, setInfo] = useState(null);

     useEffect(() => {
          setInfo(data);
     }, [data]);

     if (!info) {
          return <div>Loading...</div>;
     }

     return (
          <div className="card">
               <div className='row card-body'>
                    <div className="col-4">
                         <img src={info.poster_url} width="100%" height="100%" alt="" loading='lazy' />
                    </div>
                    <div className="col-8 text-start data_phim">
                         <p>Tên phim: {info.name}</p>
                         <p>Tên gốc: {info.origin_name}</p>
                         <p>Tình trạng: {info.episode_current}</p>
                         <p>Số tập: {info.episode_total}</p>
                         <p>Thời lượng: {info.time}</p>
                         <p>Năm phát hành: {info.year}</p>
                         <p>Đạo diễn: Hua-Tao Teng</p>
                         <p>Diễn viên: {info.actor && info.actor.map((item, index) => (
                              <span key={index}> {item}, </span>
                         ))}</p>
                         <p>Thể loại: {info.category && info.category.map((item, index) => (
                              <span key={index}> {item.name}, </span>
                         ))}</p>
                         <p>Quốc gia: {info.country && info.country.map((item, index) => (
                              <span key={index}> {item.name}, </span>
                         ))}</p>
                         <p>Định dạng phim: {info.lang}</p>
                         <p>Cập nhật lần cuối: {info.modified && info.modified.time}</p>


                         {server.slice(0, 1).map((serverItem, index) => (
                              <Link
                                   className='btn btn-warning me-1 mb-1 ms-1'
                                   to={`/movie/${slug}/${serverItem.slug}`}
                                   key={index}>
                                   Xem ngay
                              </Link>
                         ))}
                    </div>
               </div>
          </div>
     );
}

export default Info;
