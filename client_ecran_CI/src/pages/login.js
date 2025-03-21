import '../css/login.css'
import React, { useState, useRef } from "react";

function Login() {

  

  return (
    <div>
      <header id="headerLogin">
          Login form
      </header>
      <form id="formLogin" action="/cli" method="post">
          <p>Password:</p>
          <input type="password" name="pw" placeholder="CI tu savais ..."/>
          <input type="submit" value="login" />
      </form>
      <div id="error">
          <p>✗ Wrong password </p>
      </div>
    </div>
  );
}

export default Login;
