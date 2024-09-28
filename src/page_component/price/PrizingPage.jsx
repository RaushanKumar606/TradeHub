import Hero from "./Hero";
import Broker from "./Broker";
import OpenAccount from '../../OpenAccount'; 
import Navbar from '../../Navbar';      // Adjusted import path

function PricingPage() {
  return (
    <>
     <Navbar/>
      <Hero />
      <OpenAccount />
      <Broker />
    </>
  );
}

export default PricingPage;