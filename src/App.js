import './App.css';
import Navbar from './components/Navbar'; 
import Textarea from './components/Textarea';


function App() {
  return (
    <div className="App">
    <Navbar title="Textutils" about='About Textutils' home='Home' />
    <Textarea heading="Enter the string to analyze" hero="Siris's textutility"/>
    </div>
  );
}

export default App;
