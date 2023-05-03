import Navigation from "./components/Navigation/Navigation";
import Foods from "./sections/Foods";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Location from "./sections/Location";
import Specials from "./sections/Specials";

export default function App() {
  return (
    <div className="flex w-full justify-center items-center font-poppins flex-col">
      <Navigation />
      <Home />
      <Specials/>
      <Foods/>
      <Location/>
      <Footer/>
    </div>
  )
}

