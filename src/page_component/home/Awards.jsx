

function Awards() {
    return (
        <div className="container">
            <div className="row mt-5">
                {/* using one container  row in  left column  */}
                <div className="col-6">
                    <img src="Images/largestBroker.svg" alt="Award image" />
                </div>
                <div className="col-6">
                <h1>Largest stock broker in India</h1>
                <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6"><ul>
                <li> <p>Futures and Options</p></li>
                <li> <p>Futures and Options</p></li>
                <li>
                  <p>Currency derivatives</p>
                </li>
                </ul>
            </div>

             {/* using one container  row in  right column  */}
            <div className="col-6">
            <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="Images/pressLogos.png" style={{ width: "85%" }} />
                </div>

            </div>
        </div>
    );
 }
 export default Awards;