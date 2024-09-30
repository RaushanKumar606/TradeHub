
function Navbar() {
    return (
        <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "black"  ,position: "fixed",top: '0', width:"100%"}}
    >
      <div className="container p-2">
        <a className="navbar-brand treanding-image" style={{width: "60%", }} href="Trading">
          <img
            src="Images/treanding.png"
            alt="Logo"
          style={{width:"7%", borderRadius: "50%" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="signup">
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="product">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="price">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="support">
                  Support
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
    );
 }
 export default Navbar;