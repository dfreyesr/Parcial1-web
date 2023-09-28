import React from "react";
import { useState } from "react";

const Login = ({ formValues, setFormValues, onSubmit }) => {
  const [isEmailInput, setIsEmailInput] = useState(true);

  const [showPassword, setShowPassword] = useState("password");

  const [formValidity, setFormValidity] = useState({
    email: true,
    password: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailInput) {
      setIsEmailInput(!isEmailInput);
    } else {
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email);

      setFormValidity({
        ...formValidity,
        email: isEmail,
      });

      const isValidPassword = formValues.password.length >= 6;

      setFormValidity({
        ...formValidity,
        password: isValidPassword,
      });


      if (formValidity.email && formValidity.password) {
        onSubmit();
      }
      else{
        alert("ingrese correo o contraseña bien");
      }
    }

  };

  const handleEmailChange = async (e) => {
    const email = await e.target.value;
    setFormValues({ ...formValues, email: email });

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    setFormValidity({
      ...formValidity,
      email: isEmail,
    });
  };

  const handlePasswordChange = async (e) => {
    const password = await e.target.value;
    setFormValues({ ...formValues, password: password });
    const isValidPassword = password.length >= 6;

    setFormValidity({
      ...formValidity,
      password: isValidPassword,
    });
  };

  const handleCheckboxChange = async (e) => {
    showPassword === "password"
      ? setShowPassword("text")
      : setShowPassword("password");
  };

  return (
    <div>
      {isEmailInput ? (
        <>
          <h1>Acceder</h1>
          <h3>Usar tu cuenta UniAlpes</h3>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleEmailChange}
              type="text"
              placeholder="Correo electrónico"
            ></input>
            <label>{formValidity.email ? "" : "Incorrect email format"}</label>
            <input type="submit" value="Siguiente"></input>
            <input type="submit" value="Crear cuenta"></input>
          </form>
        </>
      ) : (
        <>
          <h1>{formValues.email}</h1>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handlePasswordChange}
              type={showPassword}
              placeholder="Ingresa tu contraseña"
            ></input>
            <label>
              {formValidity.password
                ? ""
                : "Password must be greater than 6 characters"}
            </label>
            <input onChange={handleCheckboxChange} type="checkbox"></input>
            <input type="submit" value="Siguiente"></input>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
