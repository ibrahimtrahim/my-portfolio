import './App.css';
import AnimCursor from './component/AnimCursor';
import Header from './component/Header';
import Hero from './component/Hero';
<<<<<<< HEAD
import AllRoutes from './routes/AllRoutes';


function App() {
  return (
    <div className="flex h-screen justify-center items-center">
      <AnimCursor />
      <Header />
      <Hero />
      <AllRoutes />
=======
import About from './screens/About';

function App() {
  return (
    <div className="sm:flex sm:h-screen sm:justify-center sm:items-center">
      <AnimCursor />
      <Header />
      <Hero />
      <About />
>>>>>>> cab5e66 (home)
    </div>
  );
}

export default App;
