import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Works from './Pages/Works';
import Milestones from './Pages/Milestones';
import Bio from './Pages/Bio';
import Upcoming from './Pages/Upcoming';
// import SlideTabs from './components/SlideTabs';
// import BouncyCardsFeatures from './components/BouncyCardsFeatures';
// import CutoutTextLoader from './components/CutoutTextLoader'
// import FloatingPhone from './components/FloatingPhone'
// import ParticleRing from './components/ParticleRing'
import VelocityText from './components/VelocityText'
import TextParallaxContent from './components/TextParallaxContent'
// import SpringModal from './components/SpringModal'
// import HoverImageLinks from './components/HoverImageLinks'
import MorphingText from './components/MorphingText.tsx'
// import RevealBento from './components/RevealBento'

import Menu from './ui-verse/menu/menu.tsx'

// Awwards components 
import AwwardsAbout from "./awwardscomponents/awwardsAbout";
import AwwardsHero from "./awwardscomponents/awwardsHero";
import AwwardsNavBar from "./awwardscomponents/awwardsNavbar";
import AwwardsFeatures from "./awwardscomponents/awwardsFeatures";
import AwwardsStory from "./awwardscomponents/awwardsStory";
import AwwardsContact from "./awwardscomponents/awwardsContact";
import AwwardsFooter from "./awwardscomponents/awwardsFooter";

function Awwards() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <AwwardsNavBar />
      <AwwardsHero />
      <AwwardsAbout />
      <AwwardsFeatures />
      <AwwardsStory />
      <AwwardsContact />
      <AwwardsFooter />
    </main>
  );
}
function App() {
  return (
    <Router>
      {/* Centralized routing */}
      <Routes>
        {/* Each route includes or excludes SlideTabs as required */}
        <Route
          path="/"
          element={
            <div>
              {/* <ParticleRing /> */}
              <Awwards />
              <Home />
              <MorphingText />
              {/* <HoverImageLinks /> */}
              {/* <VelocityText /> */}
              {/* <BouncyCardsFeatures /> */}
              <TextParallaxContent />
              {/* <SpringModal /> */}
              {/* <RevealBento /> */}
              {/* <SlideTabs />  */}
              <div style={{ position: 'fixed', zIndex: 1000, bottom: 20, left: '50%', transform: 'translateX(-50%)' }}>
                <Menu />
              </div>
            </div>
          }
        />
        <Route
          path="/works"
          element={
            <div>
              <Works />
              {/* <SlideTabs />  Always keep it below all adjacent components (otherwise it will be get overlapped by others) */}
              <div style={{ position: 'fixed', zIndex: 1000, bottom: 20, left: '50%', transform: 'translateX(-50%)' }}>
                <Menu />
              </div>
            </div>
          }
        />
        <Route
          path="/milestones"
          element={
            <div>
              <Milestones />
              {/* <SlideTabs />  Always keep it below all adjacent components (otherwise it will be get overlapped by others) */}
              <div style={{ position: 'fixed', zIndex: 1000, bottom: 20, left: '50%', transform: 'translateX(-50%)' }}>
                <Menu />
              </div>
            </div>
          }
        />
        <Route
          path="/bio"
          element={
            <div>
              <Bio />
              {/* <ParticleRing /> */}
              {/* <SlideTabs />  Always keep it below all adjacent components (otherwise it will be get overlapped by others) */}
              <div style={{ position: 'fixed', zIndex: 1000, bottom: 20, left: '50%', transform: 'translateX(-50%)' }}>
                <Menu />
              </div>
            </div>
          }
        />
        <Route
          path="/upcoming"
          element={
            <div>
              <Upcoming />
              {/* <SlideTabs />  Always keep it below all adjacent components (otherwise it will be get overlapped by others) */}
              <div style={{ position: 'fixed', zIndex: 1000, bottom: 20, left: '50%', transform: 'translateX(-50%)' }}>
                <Menu />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;