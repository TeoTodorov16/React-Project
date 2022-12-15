import { useState } from "react";
import "./RecoverPassword.css";

function PasswordReset() {
  const [visibilty, setVisibilty] = useState("Show Password");
  const [showPass, setShowPass] = useState("password");

  function ShowPassword() {
    if (visibilty === "Show Password") {
      setShowPass("");
      setVisibilty("Hide Password");
    } else {
      setShowPass("password");
      setVisibilty("Show Password");
    }
  }

  return (
    <div>
      <h1>Password Reset</h1>
      <br></br>
      <br></br>
      <h3>Choose your new password</h3>
      <br></br>
      <input className='input-rp' type={showPass} placeholder="Password"></input>
      <br></br>
      <br></br>
      <button className='button-rp' onClick={ShowPassword}>{visibilty}</button>
    </div>
  );
}

export default function Opp() {
  return (
    <div className="Opp">
      <PasswordReset />
    </div>
  );
}
