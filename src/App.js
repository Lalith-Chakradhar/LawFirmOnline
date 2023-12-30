import './App.css';
import HomePage from './components/HomePage/HomePage';
import Introduction from "./components/Introduction/Introduction";
import WhyUs from "./components/WhyUs/WhyUs";
import AreaOfPractices from "./components/AreaOfPractices/AreaOfPractices";
import Clients from "./components/Clients/Clients";
import OurTeam from "./components/OurTeam/OurTeam";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <>
    <HomePage/>
    <Introduction/>
    <WhyUs/>
    <AreaOfPractices/>
    <Clients/>
    <OurTeam/>
    <FAQ/>
    {/*<Subscribe/>
    <Footer/> */}
    </>
  );
}

export default App;
