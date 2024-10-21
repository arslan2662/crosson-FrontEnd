import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Journey from "./Components/Journey/Journey"
import Navbar from "./Components/Navbar/Navbar"
import News from "./Components/News/News"
import WeAre from "./Components/Weare/WeAre"
import WeDo from "./Components/Wedo/WeDo"
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  AOS.init();

  return (
    <>
      <Navbar />
      <Home />
      <WeAre />
      <WeDo />
      <Journey />
      <News />
      <Footer />
    </>

  )
}

export default App
