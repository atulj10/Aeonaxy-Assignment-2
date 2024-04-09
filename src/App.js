import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Sections/Footer";
import Section1 from "./Components/Sections/Section1";
import Section2 from "./Components/Sections/Section2";
import Section3 from "./Components/Sections/Section3";
import Section4 from "./Components/Sections/Section4";
import Section5 from "./Components/Sections/Section5";
import Section6 from "./Components/Sections/Section6";

function App() {
  const w=window.innerWidth
  return (
    <div className="bg-black">
    <Navbar w={w}/>
    <Section1 w={w}/>
    <Section2 w={w}/>
    <Section3 w={w}/>
    <Section4 w={w}/>
    <Section5 w={w}/>
    <Section6 w={w}/>
    <Footer w={w}/>
    </div>
  );
}

export default App;
