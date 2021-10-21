import './App.css';
import Navbar from './components/Navbar'
import Layout from './components/Layout'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="font-serif italic text-9xl text-blue-500">My Home Page</h1>
      <Layout />
    </div>
  );
}

export default App;
