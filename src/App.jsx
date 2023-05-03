import Navigation from "./components/Navigation/Navigation";
import Foods from "./sections/Foods";
import Home from "./sections/Home";
import Specials from "./sections/Specials";

export default function App() {
  return (
    <div className="flex w-full justify-center items-center font-poppins flex-col">
      <Navigation />
      <Home />
      <Specials/>
      <Foods/>
    </div>
  )
}

