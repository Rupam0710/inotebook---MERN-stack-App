import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/NoteState";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <NoteState>
      <Router>
      <Navbar/>
      <Alert message = "This is amazing react course"/>
      <div className="container">
      <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          
      </Routes>
      </div>
      </Router>
      </NoteState>  
    </>
  );
}

export default App;
