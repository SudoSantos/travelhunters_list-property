import './App.css';
import Navbar from './components/Navbar/Navbar';
import Reasons from './components/Reasons/Reasons';
import Section from './components/Section1/Section';
import Steps from './components/Steps/Steps';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <Reasons />
      <Steps />
    </div>
  );
}

export default App;
