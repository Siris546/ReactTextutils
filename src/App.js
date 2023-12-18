import './App.css';
import Navbar from './components/Navbar'; 
import Textarea from './components/Textarea';
// import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';



function App() {
  const [mode,setMode]=useState('light'); //used to toggle the  darkmode of the page

  const[alert, setAlert]=useState(null);

  const togglemode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor= 'grey';
    showAlert("Darkmode has been enabled.","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor= 'white';
    showAlert("Lightmode has been enabled.","success");
  }
  }

  const showAlert=(message,type)=>{
   
  setTimeout(() => {
    setAlert({
      msg: message,
      Type: type,
  })
  },3000)
  }

  return (
    <div className="App">
    <Navbar title="Playtext" about='About Playtext' home='Home' mode={mode} togglemode={togglemode} showAlert={showAlert}/>
    <Alert alert={alert} />
    <Textarea heading="Enter the string to analyze" hero="Siris's Playtext" mode={mode} showAlert={showAlert}/>
    {/* <About/> */}

    </div>
  );
}

export default App;
