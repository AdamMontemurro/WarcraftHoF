
import Nav from './components/Nav';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Classes from './components/Classes';
import Hall from './components/Hall';
import ClassDetails from './components/ClassDetails';
import { useState, useEffect } from 'react'
import axios from 'axios'





function App() {

  const [classes, setClasses] = useState([])
  const [people, setPeople] = useState([])

  const getClasses = async () => {
    try {
      let response = await axios.get('http://localhost:3001/classes')
      setClasses(response.data.classes)
    } catch (error) {
      console.log(error)
    }
  }

  const getHof = async () => {
    try {
      let response = await axios.get('http://localhost:3001/people')
      setPeople(response.data.get)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getClasses()
    getHof()
  }, [])




  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/hof" element={ <Hall people={people}/> } />
        <Route path="classes" element={ <Classes classes={classes}/>} />
        <Route path="classes/:id" element={<ClassDetails classes={classes}/>} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
