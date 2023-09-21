import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';



function App() {

const [mode,setMode] =useState('light')

const [alert, setAlert] = useState(null);

const showAlert =(mesaage, type)=>{
  setAlert(
    {
      msg : mesaage,
      typ :type
    }
  )
  setTimeout( ()=>{
    setAlert(null);},1000);
  
  
}

const toggleMode =()=>{
  
  if(mode === "light")
  {
    setMode("dark");
    document.body.style.backgroundColor='#042743';
    showAlert("Dark Mode","success");
  }
  else
  {
    setMode("light");
    document.body.style.backgroundColor='white';
    showAlert("Light Mode","success");
  }
}

  return (
    <>
    
<Navbar title="Alphabetly" about="About Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert= {alert}/>


<Router>

<div className="container my-3" mode={mode}>


<Routes>

  <Route exact path="/" element= {<Textform heading="Enter your sentence" mode={mode}/>}/>
              <Route exact path="/about" element={<About/>}/>  

              </Routes>
</div>
</Router>


    </>
  );
}






export default App;
