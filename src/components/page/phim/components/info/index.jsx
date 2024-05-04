import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Info(props) {
     const { data, slug, server } = props;
     console.log(server);
     const [info, setInfo] = useState(null);

     useEffect(() => {
          setInfo(data);
          console.log(data);
     }, [data]);

     if (!info) {
          return (
               <div className="card">
                    <div className="loading_vd">
                         <div className="spinner-border text-warning" role="status">
                              <span className="visually-hidden">Loading...</span>
                         </div>
                    </div>
               </div>
          );
     }

     return (
          <div className="card">
               <div className="row card-body">
                    <div className="col-12 col-ms-12 col-md-12 col-xl-3">
                         <div className="w-100 chua-anh-phim">
                              <img
                                   src={info.thumb_url}
                                   width="100%"
                                   height=""
                                   className="rounded-3 mb-3 img-phim"
                                   alt=""
                                   loading="lazy"
                              />
                         </div>

                         {server.slice(0, 1).map((items, index) => (
                              <Link
                                   className="btn btn-warning me-3"
                                   to={`/xem-phim/${slug}?server=${encodeURIComponent(items.server_name)}&tap=${encodeURIComponent(items.items[0].name)}`}
                                   key={index}
                              >
                                   Xem ngay
                              </Link>
                         ))}
                         <a
                              className="btn btn-danger"
                              href={info.trailer_url}
                              target="_blank"
                              rel="noopener noreferrer"
                         >
                              Xem Trailer
                         </a>
                    </div>
                    <div className="col-12 col-ms-12 col-md-12 col-xl-9 text-start data_phim text-warning">
                         <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                              {/* Thông tin phim */}
                              <li className="nav-item" role="presentation">
                                   <a
                                        className="nav-link text-warning active fw"
                                        id="ex1-tab-1"
                                        data-bs-toggle="tab"
                                        href="#ex1-tabs-st"
                                        role="tab"
                                        aria-controls="ex1-tabs-st"
                                        aria-selected="true"
                                   >
                                        Thông tin phim
                                   </a>
                              </li>

                              {/* Nội dung phim */}
                              <li className="nav-item" role="presentation">
                                   <a
                                        className="nav-link text-warning fw"
                                        id="ex1-tab-2"
                                        data-bs-toggle="tab"
                                        href="#ex1-tabs-cf"
                                        role="tab"
                                        aria-controls="ex1-tabs-cf"
                                        aria-selected="false"
                                   >
                                        Nội dung phim
                                   </a>
                              </li>

                              {/* Các tập phim */}
                              <li className="nav-item" role="presentation">
                                   <a
                                        className="nav-link text-warning fw"
                                        id="ex1-tab-3" data-bs-toggle="tab"
                                        href="#ex1-tabs-rw_lw" role="tab"
                                        aria-controls="ex1-tabs-rw_lw"
                                        aria-selected="false" >
                                        Các tập phim
                                   </a>
                              </li>

                              {/* Diễn viên */}
                              <li className="nav-item" role="presentation">
                                   <a
                                        className="nav-link text-warning fw" id="ex1-tab-3" data-bs-toggle="tab" href="#ex1-tabs-dien-vien" role="tab" aria-controls="ex1-tabs-dien-vien" aria-selected="false">
                                        Diễn viên
                                   </a>
                              </li>
                         </ul>
                         <div className="tab-content" id="ex1-content">
                              {/* Thông tin phim */}
                              <div
                                   className="tab-pane fade tab_pane_cus show active"
                                   id="ex1-tabs-st" role="tabpanel" aria-labelledby="ex1-tab-st">
                                   <div className="card-body row">
                                        <div className="col-6">
                                             <p>
                                                  <strong>Tên phim</strong>: {info.name}
                                             </p>
                                             <p>
                                                  <strong>Tên gốc</strong>: {info.original_name}
                                             </p>
                                             <p>
                                                  <strong>Tình trạng</strong>: {info.current_episode}
                                             </p>
                                             <p>
                                                  <strong>Tổng số tập</strong>: {info.total_episodes}
                                             </p>
                                             <p>
                                                  <strong>Thời lượng</strong>: {info.time}
                                             </p>
                                             <p>
                                                  <strong>Đạo diễn</strong>: {info.director}
                                             </p>
                                        </div>
                                        <div className="col-6">
                                             <p>
                                                  <strong>Định dạng phim</strong>: {info.language}
                                             </p>
                                             {/* Lặp qua mỗi nhóm thể loại và hiển thị tên của nhóm */}
                                             {Object.values(info.category).map((group, index) => (
                                                  <p key={index}>
                                                       <strong>{group.group.name}</strong>:{" "}
                                                       {group.list.map((item, i) => item.name).join(", ")}
                                                  </p>
                                             ))}
                                        </div>
                                   </div>
                              </div>

                              {/* Nội dung phim */}
                              <div
                                   className="tab-pane fade tab_pane_cus"
                                   id="ex1-tabs-cf" role="tabpanel" aria-labelledby="ex1-tabs-cf" >
                                   <div className="card-body ">
                                        <p>
                                             {info.description}
                                        </p>
                                   </div>
                              </div>

                              {/* Các tập phim */}
                              <div
                                   className="tab-pane fade tab_pane_cus "
                                   id="ex1-tabs-rw_lw" role="tabpanel" aria-labelledby="ex1-tabs-rw_lw">
                                   <div className="card-body">
                                        {server.map((items, index) => (
                                             <div key={index}>
                                                  <p><strong>Server:</strong> {items.server_name}</p>
                                                  <div className="d-flex flex-wrap">
                                                       {items.items.map((adu, i) => (
                                                            <Link
                                                                 className="btn btn-warning me-3 mb-3"
                                                                 to={`/xem-phim/${slug}?server=${encodeURIComponent(items.server_name)}&tap=${encodeURIComponent(adu.name)}`}
                                                                 key={i}
                                                            >
                                                                 {adu.name}
                                                            </Link>
                                                       ))}
                                                  </div>
                                             </div>
                                        ))}

                                   </div>
                              </div>

                              {/* Diễn viên */}
                              <div
                                   className="tab-pane fade tab_pane_cus"
                                   id="ex1-tabs-dien-vien"
                                   role="tabpanel"
                                   aria-labelledby="ex1-tabs-dien-vien"
                              >
                                   <div className="card-body ">
                                        <p>
                                             <strong>Diễn viên</strong>: {info.casts}
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Info;
