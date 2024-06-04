import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BasicInfo from "./components/BasicInfo";
import AboutTour from "./components/AboutTour";
import PhotoGallery from "./components/PhotoGallery";
import MeetingPoint from "./components/MeetingPoint";

import Footer from "./components/Footer";
import WhtspAppIcon from "./components/WhtspAppIcon";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BasicInfo />
      <AboutTour />
      <PhotoGallery />
      <MeetingPoint />
      <Footer />
      <WhtspAppIcon />
    </>
  );
}

export default App;
