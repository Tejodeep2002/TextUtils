import React, { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";

import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState("light");

  const showAlert = (message, type) => {
    setAlert({message,type});
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#4636d1";
      showAlert("Dark mode is Enable", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is Enable", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform
          showAlert={showAlert}
          heading="Enter the text to analysis below"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
