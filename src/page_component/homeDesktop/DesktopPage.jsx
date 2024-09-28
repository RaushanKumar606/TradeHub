import Desktop from "./Desktop";
import DesktopNav from './DesktopNav';
import Footer from '../../Footer';
import DesktopChat from "./DesktopChat";
function DesktopPage(){
    return (
        <>
        <DesktopNav/>
        <Desktop/>
        <DesktopChat/>
        <Footer/>
        </>
    );
}
export default DesktopPage;