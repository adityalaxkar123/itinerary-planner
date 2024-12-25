// src/pages/Login.js
import React from 'react';

const Login = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold">Login</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          className="p-2 border mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border mb-2"
        />
        <button className="bg-blue-500 text-white p-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
