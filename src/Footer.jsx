function Footer() {
  return (
    <footer style={{ backgroundColor: "black" ,color:"white"}}>
      <div className="container border-top mt-5">
        <div className="row mt-5 ">
          <div className="col treanding">
            <img src="Images/treanding.png" style={{ width: "50%" }} />
            <p>
              &copy; 2010 - 2024, Not TreadingView Pro Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col   ">
            <p>Company</p>
            <a href="#" className="d-block mb-3">
              About
            </a>
            <a href="#" className="d-block mb-3">
              Products
            </a>
            <a href="#" className="d-block mb-3">
              Pricing
            </a>
            <a href="#" className="d-block mb-3">
              Referral programme
            </a>
            <a href="#" className="d-block mb-3">
              Careers
            </a>
            <a href="#" className="d-block mb-3">
            TreadingView Pro.tech
            </a>
            <a href="#" className="d-block mb-3">
              Press & media
            </a>
            <a href="#" className="d-block mb-3">
            TreadingView Pro (CSR)
            </a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="#" className="d-block mb-3">
              Contact
            </a>
            <a href="#" className="d-block mb-3">
              Support portal
            </a>
            <a href="#" className="d-block mb-3">
              TView-Connect blog
            </a>
            <a href="#" className="d-block mb-3">
              List of charges
            </a>
            <a href="#" className="d-block mb-3">
              Downloads & resources
            </a>
            <br />
          </div>
          <div className="col ">
            <p>Account</p>
            <a href="#" className="d-block mb-3">
              Open an account
            </a>
            <a href="#" className="d-block mb-3">
              Fund transfer
            </a>
            <a href="#" className="d-block mb-3">
              60 day challenge
            </a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted paragrapg" style={{ fontSize: "14px",color:'white' }}>
          <p>
            TreadingView Pro Broking Ltd: Member of NSE BSE - SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            &quot;Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary&quot;. Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don&apost give stock tips, and have
            not authorized anyone to trade on behalf of others. If you find
            anyone claiming to be part of Zerodha and offering such services,
            please create a ticket here.
          </p>
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: "5vh" }}>
  <div className="row p-3 ">
    <div className="col d-flex justify-content-center align-items-center flex-wrap text-center">
      <p className="inline-item">NSE</p>
      <p className="inline-item">BSE</p>
      <p className="inline-item">MCX</p>
      <p className="inline-item">Terms & Conditions</p>
      <p className="inline-item">NSE</p>
      <p className="inline-item">BSE</p>
      <p className="inline-item">Disclosure</p>
      <p className="inline-item">Policies & procedures</p>
      <p className="inline-item">Privacy</p>
    </div>
  </div>
</div>


    </footer>
  );
}
export default Footer;
