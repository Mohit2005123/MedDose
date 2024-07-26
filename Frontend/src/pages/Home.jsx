import MyNavbar from '../components/MyNavbar.jsx';
import Hero from '../components/Hero.jsx';
import Features from '../components/Features.jsx';
import ApplicationForm from '../components/ApplicationForm.jsx';
import Pricing from '../components/Pricing.jsx';
import Doctors from '../components/Doctors.jsx';
import Footer from '../components/Footer.jsx';
function Home() {
    return (
        <div>
           
                <MyNavbar></MyNavbar>
                <Hero></Hero>
                <Features></Features>
                <ApplicationForm></ApplicationForm>
                <Pricing></Pricing>
                <Doctors></Doctors>
                <Footer></Footer>
        </div>
    )
}
export default Home;