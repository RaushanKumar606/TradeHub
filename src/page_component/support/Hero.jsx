function Hero() {
    return (
      <section className="container-fluid p-5" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row  m-3">
        <div className="col-6 p-5 ">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" className="p-3" />
          <br />
          <a href="" className="track">Track account opening</a>
          <a href="" className="track">Track segment activation</a>
          <a href="" className="track">Intraday margins</a>
          <a href="" className="track">Kite user manual</a>
        </div>
        <div className="col-2"></div>
        <div className="col-4 ">
          <h2 className="fs-3 ">Featured</h2>
          <ol>
            <li className="p-3">
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li className="p-3">
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
    
    );
  }
  
  export default Hero;