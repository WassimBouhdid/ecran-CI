import '../css/login.css'
import React, { useState, useRef } from "react";

function Login() {
  const [mdp, setmdp] = useState("");
  
  // async function handleSubmit(){
  //   let response = await fetch("http://10.66.151.182:5000/api/score", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ cercle: cercle, operation: operation })
  //   });
  // }

  

  return (
    <div>
      <header id="headerLogin">
          Login form
      </header>
      <form id="formLogin" action="http://10.66.151.182:5000/cli" method="post" >
          <p>Password:</p>
          <input type="password" name="pw" value={mdp}
          onChange={(e) => setmdp(e.target.value)} placeholder="CI tu savais ..."/>
          <input type="submit" value="login" />
      </form>
      <div id="error">
          <p>✗ Wrong password </p>
      </div>
    </div>
  );
}

export default Login;
