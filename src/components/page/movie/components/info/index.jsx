import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                         <img src={info.poster_url} width="100%" height="100%" className="rounded-3" alt="" loading='lazy' />
                    </div>
                    <div className="col-8 text-start data_phim text-warning">
                         <p><strong>Tên phim</strong>: {info.name}</p>
                         <p><strong>Tên gốc</strong>: {info.origin_name}</p>
                         <p><strong>Tình trạng</strong>: {info.episode_current}</p>
                         <p><strong>Số tập</strong>: {info.episode_total}</p>
                         <p><strong>Thời lượng</strong>: {info.time}</p>
                         <p><strong>Năm phát hành</strong>: {info.year}</p>
                         <p><strong>Đạo diễn</strong>: Hua-Tao Teng</p>
                         <p><strong>Diễn viên</strong>: {info.actor && info.actor.map((item, index) => (
                              <span key={index}> {item}, </span>
                         ))}</p>
                         <p><strong>Thể loại</strong>: {info.category && info.category.map((item, index) => (
                              <span key={index}> {item.name}, </span>
                         ))}</p>
                         <p><strong>Quốc gia</strong>: {info.country && info.country.map((item, index) => (
                              <span key={index}> {item.name}, </span>
                         ))}</p>
                         <p><strong>Định dạng phim</strong>: {info.lang}</p>
                         <p><strong>Cập nhật lần cuối</strong>: {info.modified && info.modified.time}</p>


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
