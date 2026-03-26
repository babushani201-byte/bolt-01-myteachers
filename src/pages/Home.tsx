import Hero from '../components/Hero';
import MissionStatement from '../components/MissionStatement';
import Classes from '../components/Classes';
import FeeStructure from '../components/FeeStructure';
import Contact from '../components/Contact';
import Videos from '../components/Videos';
import Teachers from '../components/Teachers';

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <MissionStatement />
      <Classes />
      <FeeStructure />
      <Contact />
      <Videos />
      <Teachers />
    </div>
  );
};

export default Home;
