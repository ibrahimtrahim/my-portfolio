import './App.css';
import AnimCursor from './component/AnimCursor';
import Header from './component/Header';
import Hero from './component/Hero';
import AllRoutes from './routes/AllRoutes';


function App() {
  return (
    <div className="flex h-screen justify-center items-center">
      <AnimCursor />
      <Header />
      <Hero />
      <AllRoutes />
    </div>
  );
}

export default App;
