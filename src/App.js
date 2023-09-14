
import './styles.css';
import logo from './logo.gif';
import bdtgif from './bdt.gif';
import bubblegif from './bubble.gif';
import "./fonts/Arvo-Regular.ttf";
import SkinsPage from './SkinsPage';
import Navbar from './Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import { motion } from 'framer-motion';

function App() {

  return ( 
<div className='App'>
    <Navbar />
    <div className="container">
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/skins" element={<SkinsPage />}/>
    </Routes>

    </div>
    <footer>
    <hr/>
    <p className="textfooter">^-^</p>
    <p> <div class="textfooter"><a> made by </a><a class="speed" href="https://osu.ppy.sh/users/speed"> speed</a></div></p>
    </footer>
</div>

  );
}

export default App;
