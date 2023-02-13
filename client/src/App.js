
import Nav from './components/Nav';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Classes from './components/Classes';
import { useState } from 'react'
import axios from 'axios'

function App() {

  const [classes, setClasses] = useState()

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="classes" element={ <Classes/>} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
