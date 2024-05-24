import "./App.css";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";
import Destinations from "./components/Destinations";
import AllOffers from "./components/AllOffers";
import Map1 from "./components/Map1";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Offers />
      <Plan />
      <Destinations></Destinations>
      <AllOffers></AllOffers>

      <Rooms></Rooms>
    </>
  );
}

export default App;
