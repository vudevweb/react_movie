

function Header() {
     const changeTheme = () => {
          localStorage.theme = localStorage.theme === "dark" ? "light" : "dark"
          document.documentElement.setAttribute("data-theme", localStorage.theme)
     }

     return (
          <header>
               <div>
               <div>
				<a href="#" className="form-check form-switch theme-switch btn btn-light btn-icon rounded-circle">
                         <input className="form-check-input" onClick={changeTheme} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                         <label className="form-check-label"  htmlFor="flexSwitchCheckDefault"></label>
				</a>
			</div>
               </div>
          </header>
     );
}

export default Header;
