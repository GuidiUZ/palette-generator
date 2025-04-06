import Generator from './components/Generator';
import './index.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="w-full h-full min-h-screen items-center">
        <Generator />
      </div>
      <Footer />
    </>
  );
}

export default App;
