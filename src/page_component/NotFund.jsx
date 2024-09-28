import Navbar from '../Navbar';
import Footer from '../Footer';
function NotFund() {
    return (
        <>
        <Navbar/>
      <div className="container">
        <div className="row text-center mt-5">
          <h2 className="mt-5">404 Not Found</h2>
          <p className="mt-2">
         sorry ,this page  you are looking for dose not exit
          </p>
          
        </div>
      </div>
      <Footer/>
      </>
    );
  }
  export default NotFund;
  