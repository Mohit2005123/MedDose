import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Features from '../components/Features.jsx';
import ApplicationForm from '../components/ApplicationForm.jsx';
import Pricing from '../components/Pricing.jsx';
import Instructors from '../components/Instrucure.jsx';
import Footer from '../components/Footer.jsx';
function Home() {
    return (
        <div>
           
                <Navbar></Navbar>
                <Hero></Hero>
                <Features></Features>
                <ApplicationForm></ApplicationForm>
                <Pricing></Pricing>
                <Instructors></Instructors>
                <Footer></Footer>
            
        </div>
    )
}
export default Home;