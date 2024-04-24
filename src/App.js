import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Reasons from './components/Reasons/Reasons';
import Section from './components/Section1/Section';
import Steps from './components/Steps/Steps';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <Reasons />
      <Steps />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
