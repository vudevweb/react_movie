function Header() {

     return (
          <>
               <div className="collapse " id="collapseExample">
                    <div className="container">
                         <div className="row align-items-center">
                              <div className="col-md-11 col-10">
                                   <div className="py-4">
                                        <form className="d-flex align-items-center">
                                             <span className="position-absolute ps-3">
                                                  <i className="fe fe-search text-muted" />
                                             </span>
                                             <input
                                                  type="search"
                                                  className="form-control ps-6 border-0 py-3 smooth-shadow-md"
                                                  placeholder="Nhập tên phim bạn muốn xem!"
                                             />
                                        </form>
                                   </div>
                              </div>
                              <div className="col-md-1 col-2">
                                   <div>
                                        <button
                                             type="button"
                                             className="btn-close "
                                             aria-label="Close"
                                             data-bs-toggle="collapse"
                                             data-bs-target="#collapseExample"
                                             aria-expanded="false"
                                             aria-controls="collapseExample"
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <nav className="navbar mb-3 mt-3 navbar-expand" style={{ borderRadius: "7px" }}>
                    <div className="container px-0">
                         <div className="d-flex align-items-center">
                              <a className="me-4" href="/">
                                   <img
                                        src="https://ui-avatars.com/api/?background=random&name=vu+do"
                                        alt="logo của vũ đỗ"
                                   />
                              </a>
                              <ul className="navbar-nav me-4">
                                   <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/">
                                             Trang chủ
                                        </a>
                                   </li>
                              </ul>
                              <ul className="list-unstyled mb-0 lh-1">
                                   <li className="nav-item dropdown">
                                        <a
                                             className="nav-link dropdown-toggle text-dark"
                                             href="#"
                                             id="navbarBrowse"
                                             data-bs-toggle="dropdown"
                                             aria-haspopup="true"
                                             aria-expanded="false"
                                             data-bs-display="static"
                                        >
                                             Danh mục phim
                                        </a>
                                        <ul
                                             className="dropdown-menu dropdown-menu-arrow"
                                             aria-labelledby="navbarBrowse"
                                        >
                                             <li>
                                                  <a
                                                       className="dropdown-item"
                                                       href="../pages/help-center.html"
                                                  >
                                                       Phim bộ
                                                  </a>
                                             </li>
                                             <li>
                                                  <a
                                                       className="dropdown-item"
                                                       href="../pages/help-center-guide.html"
                                                  >
                                                       Phim lẻ
                                                  </a>
                                             </li>
                                             <li>
                                                  <a
                                                       className="dropdown-item"
                                                       href="../pages/help-center-guide-single.html"
                                                  >
                                                       Hoạt hình
                                                  </a>
                                             </li>

                                             <li>
                                                  <a
                                                       className="dropdown-item"
                                                       href="../pages/help-center-guide-single.html"
                                                  >
                                                       TV show
                                                  </a>
                                             </li>
                                        </ul>
                                   </li>
                              </ul>
                         </div>
                         <div className="ms-auto d-flex align-items-center">
                              <div className=" d-flex align-items-center">
                                   <a
                                        href="#"
                                        className="ms-2 me-md-4 text-dark"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseExample"
                                        aria-expanded="false"
                                        aria-controls="collapseExample"
                                   >
                                        <i className="fe fe-search fs-3" />
                                   </a>
                              </div>
                         </div>
                         {/* Collapse */}
                    </div>
               </nav>
          </>
     );
}

export default Header;
