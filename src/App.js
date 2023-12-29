import './App.css';
import HomePage from './components/HomePage/HomePage';
import Introduction from "./components/Introduction/Introduction";
import WhyUs from "./components/WhyUs/WhyUs";
import AreaOfPractices from "./components/AreaOfPractices/AreaOfPractices";
import Clients from "./components/Clients/Clients";

function App() {
  return (
    <>
    <HomePage/>
    <Introduction/>
    <WhyUs/>
    <AreaOfPractices/>
    <Clients/>
    {/*<OurTeam/>
    <FAQ/>
    <Subscribe/>
    <Footer/> */}
    </>
  );
}

export default App;
