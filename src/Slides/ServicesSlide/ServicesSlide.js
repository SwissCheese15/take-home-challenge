import Founder from "../../Components/ServicesSlideComponents/Founder/Founder"
import Offer from "../../Components/ServicesSlideComponents/Offer/Offer"
import "./servicesSlideStyles.css"

function ServicesSlide() {

    return (
        <>
            <div className="servicesSlideMainDiv">
                <Founder/>
                <Offer/>
            </div>
        </>
    )

}

export default ServicesSlide