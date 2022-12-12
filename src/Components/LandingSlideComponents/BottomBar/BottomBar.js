import "./bottomBarStyles.css"
import { useDispatch } from "react-redux";
import { rightArrow, leftArrow } from "../../../Redux/Slices";


function BottomBar() {

    const dispatch = useDispatch()

    const handleLeftArrow = () => {
        dispatch(leftArrow())
    }

    const handleRightArrow = () => {
        dispatch(rightArrow())
    }

    return (
            <div className="bottomBarMainDiv">
                <div className="arrowDiv" id="leftArrow" onClick={handleLeftArrow}>
                    <img src="/images/arrow.png"></img>
                </div>
                <div className="arrowDiv" id="rightArrow" onClick={handleRightArrow}>
                    <img src="/images/arrow.png"></img>
                </div>
            </div>
    );
}

export default BottomBar;