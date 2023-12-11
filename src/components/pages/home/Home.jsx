import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import WorkTimeline from "./WorkTimeline";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <About></About>
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>
            <WorkTimeline></WorkTimeline>
            <Contact></Contact>
        </>
    );
};

export default Home;