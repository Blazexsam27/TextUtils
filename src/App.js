import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    let bodyColor = document.body.style;
    if (mode === "light") {
      setMode("dark");
      bodyColor.backgroundColor = "#02011d";
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextUtils-dark";
    } else {
      setMode("light");
      bodyColor.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "TextUtils-light";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        {/* <TextForm
          textString="Put Your Text Here"
          heading="Enter Your Text To Analyze"
          mode={mode}
          showAlert={showAlert}
        />

        <About /> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                textString="Put Your Text Here"
                heading="Enter Your Text To Analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
          <Route exact path="about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
