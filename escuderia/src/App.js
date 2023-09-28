import logo from "./logo.svg";
import "./App.scss";
import Login from "./components/login.js";
import { useState } from "react";

function App() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const onSubmit = () => {
    console.log(formValues);
  };

  return (
    <>
      <div className="App">
        <Login
          formValues={formValues}
          setFormValues={setFormValues}
          onSubmit={onSubmit}
        />
      </div>

    </>
  );
}

export default App;
