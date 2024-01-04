import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Introduction from "./components/Introduction/Introduction";
import WhyUs from "./components/WhyUs/WhyUs";
import AreaOfPractices from "./components/AreaOfPractices/AreaOfPractices";
import Clients from "./components/Clients/Clients";
import OurTeam from "./components/OurTeam/OurTeam";
import FAQ from "./components/FAQ/FAQ";
import Subscribe from "./components/Subscribe/Subscribe";
import { ClientsProvider } from "./context/ClientsContext";

function App() {
  return (
    <ClientsProvider>
      <HomePage />
      <Introduction />
      <WhyUs />
      <AreaOfPractices />
      <Clients />
      <OurTeam />
      <FAQ />
      <Subscribe/>
    </ClientsProvider>
  );
}

export default App;
