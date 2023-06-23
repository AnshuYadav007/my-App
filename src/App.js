import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(67 91 109)";
      showAlert("Dark mode Enabled", "success")
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Enabled", "success")

    }
  }
  return (
    <>
    {/* <Router> */}
      {/* <Navbar tittle="TextUtils" aboutText="About Us"/> */}
      {/* <Navbar/> */}
      <Navbar tittle="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />}></Route> */}
          {/* <Route exact path="/" element={}></Route> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
