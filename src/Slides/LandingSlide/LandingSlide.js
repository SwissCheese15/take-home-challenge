import "./landingSlideStyles.css"
import NavHeader from "../../Components/LandingSlideComponents/NavHeader/NavHeader";
import SideBar from "../../Components/LandingSlideComponents/SideBar/SideBar";
import MainContent from "../../Components/LandingSlideComponents/MainContent/MainContent";
import BottomBar from "../../Components/LandingSlideComponents/BottomBar/BottomBar";
import { useSelector } from "react-redux";


function LandingSlide() {

    const currentPage = useSelector((state) => state.page.currentPage)

    return (
        <>
            {currentPage === 1 ? <div className="landingPageMainDiv" id="studio">
                <NavHeader/>
                <SideBar/>
                <MainContent/>
                <BottomBar/>
            </div> : "" }
            {currentPage === 2 ? <div className="landingPageMainDiv" id="design">
                <NavHeader/>
                <SideBar/>
                <MainContent/>
                <BottomBar/>
            </div> : "" }
            {currentPage === 3 ? <div className="landingPageMainDiv" id="quality">
                <NavHeader/>
                <SideBar/>
                <MainContent/>
                <BottomBar/>
            </div> : "" }
            
        </>
    );
}

export default LandingSlide;