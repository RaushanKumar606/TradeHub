
import './SingUp.css'; // CSS file for styling

const SingUp = () => {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className=" logo treanding_logo">
        <img src="Images/treanding.png" alt="King Logo" />
        </div>
        <nav className="navigation">
          <a href="#products">Products</a>
          <a href="#investments">Investments</a>
          <a href="#markets">Markets</a>
          <a href="#pricing">Pricing</a>
          <input type="text" placeholder="Search Stocks, Index, ETFs..." className="search-bar" />
          {/* <button className="login-btn">Login</button> */}
          <button className="open-account-btn">Login</button>
        </nav>
      </header>

      {/* Main Section */}
      <div className="container">
      
      <div className=" row ">

        <div className="col">
        <a href="/" className='mt-4'>Home<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>Open demat Account
          <h2> Open Your <br /><span>Free Demat Account</span></h2>
          <p>₹0 AMC. No Platform Fees. No Hidden Charges!</p>
          <button className="cta-btn ">Start Now  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
          <p className='made fs-2'>#MadeForTrade</p>
        
        </div>
        
        <div className="col image-container">
          <img src="Images/mobile.png" alt="Mobile App Preview" className="mobile-app" />
        </div>
        
      </div>
      </div>

     
     
    </div>
  );
};

export default SingUp;

