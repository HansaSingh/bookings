import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Offers />
      <Plan />
      <Rooms></Rooms>
    </>
  );
}

export default App;
