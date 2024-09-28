
import Hero from './Hero'
import Awards from './Awards';
import State from './State';
import Pricing from './Pricing';
import Education from './Education';
import Navbar from '../../Navbar';
import OpenAccount from '../../OpenAccount';
import Footer from '../../Footer';
function HomePage() {
    return (
       <>
       <Navbar/>
     <Hero/>
     <Awards/>
     <State/>
     <Pricing/>
     <Education/>
     <OpenAccount/>
     <Footer/>


       </>
    );
 }
 export default HomePage;