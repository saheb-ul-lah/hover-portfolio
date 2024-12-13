import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Works from './Pages/Works';
import Milestones from './Pages/Milestones';
import Bio from './Pages/Bio';
import Upcoming from './Pages/Upcoming';
import SlideTabs from './components/SlideTabs';
import BouncyCardsFeatures from './components/BouncyCardsFeatures';
// import CutoutTextLoader from './components/CutoutTextLoader'
// import FloatingPhone from './components/FloatingPhone'
// import ParticleRing from './components/ParticleRing'
import VelocityText from './components/VelocityText'
import TextParallaxContent from './components/TextParallaxContent'
import SpringModal from './components/SpringModal'
import HoverImageLinks from './components/HoverImageLinks'
// import RevealBento from './components/RevealBento'


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
              <Home />

              <HoverImageLinks />
              <VelocityText />
              <BouncyCardsFeatures />
              <TextParallaxContent />
              <SpringModal />
              {/* <RevealBento /> */}
              <SlideTabs />  {/* Always keep it below all adjacent components (otherwise it will be get overlapped by others) */}
            </div>
          }
        />
        <Route
          path="/works"
          element={
            <div>
              <Works />
              <SlideTabs />  {/* Always keep it below all adjacent components (otherwise it will be get overlapped by others) */}
            </div>
          }
        />
        <Route
          path="/milestones"
          element={
            <div>
              <Milestones />
              <SlideTabs />  {/* Always keep it below all adjacent components (otherwise it will be get overlapped by others) */}
            </div>
          }
        />
        <Route
          path="/bio"
          element={
            <div>
              <Bio />
              <ParticleRing />
              <SlideTabs />  {/* Always keep it below all adjacent components (otherwise it will be get overlapped by others) */}
            </div>
          }
        />
        <Route
          path="/upcoming"
          element={
            <div>
              <Upcoming />
              <SlideTabs />  {/* Always keep it below all adjacent components (otherwise it will be get overlapped by others) */}
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;