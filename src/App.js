import './App.css';
import BlogSlide from './Slides/BlogSlide/BlogSlide';
import FooterSlide from './Slides/FooterSlide/FooterSlide';
import LandingSlide from './Slides/LandingSlide/LandingSlide';
import ServicesSlide from './Slides/ServicesSlide/ServicesSlide';
import TeamSlide from './Slides/TeamSlide/TeamSlide';

function App() {
    return (
        <div className="App">
            <LandingSlide/>
            <ServicesSlide/>
            <TeamSlide/>
            <BlogSlide/>
            <FooterSlide/>
        </div>
    );
}

export default App;
