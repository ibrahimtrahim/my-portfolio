import './App.css';
import AnimCursor from './component/AnimCursor';
import Header from './component/Header';
import Hero from './component/Hero';
import About from './screens/About';

function App() {
  return (
    <div className="sm:flex sm:h-screen sm:justify-center sm:items-center">
      <AnimCursor />
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
