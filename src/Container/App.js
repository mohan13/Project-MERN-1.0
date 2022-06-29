import './App.css';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Layout from '../Components/HOC/layout';
import Home from '../Components/Pages/Home'
import About from '../Components/Pages/AboutUs'
import Contact from '../Components/Pages/Contact';

function App() {
  return (
    <div className="App">
     <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path ='/about' element={<About/>}/>
          <Route path='/' element={<Contact/>}/>
        </Routes>
      </Layout>
     </Router>
    </div>
  );
}

export default App;
