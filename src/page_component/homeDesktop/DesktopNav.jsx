import './Nav.css'
const DesktopNav = () => {
    return (
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand treanding" href="#">
            <img src="Images/treanding.png" alt="Brand Logo"  />
          </a>
  
          {/* Toggler/collapsible Button */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="product">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="support">Community</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Markets</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Brokers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">More</a>
              </li>
            </ul>
  
            {/* Right-side items */}
            <div className="d-flex align-items-center">
              {/* Language dropdown */}
              <div className="dropdown me-3">
                <a className="text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" >
                <i className="fa-solid fa-globe"></i>EN
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">English (india)</a></li>
                  <li><a className="dropdown-item" href="#">Francais</a></li>
                  <li><a className="dropdown-item" href="#">Bahasa Indonesia</a></li>
                  <li><a className="dropdown-item" href="#">Polaski</a></li>
                  <li><a className="dropdown-item" href="#">Italiano</a></li>
               

                  {/* Add more languages here */}
                </ul>
              </div>
  
              {/* User icon */}
              <a href="#" className="text-white me-3">
              <i className="fa-solid fa-user"></i>
              </a>
  
              {/* Get Started Button */}
              <a href="#" className="btn btn-get-started">Get Started</a>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default DesktopNav;