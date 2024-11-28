import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="app">
      <div className={`form-container ${isLogin ? "login-layout" : "signup-layout"}`}>
        {isLogin ? (
          <>
            <div className="form-left">
              <img src="/plants.jpg" alt="Login" />
            </div>
            <div className="form-right">
              <div className="form-content">
                <h2>Login</h2>
                <p>Welcome back! Please login to your account.</p>
                <form>
                  <input type="email" placeholder="User Name" required />
                  <input type="password" placeholder="Password" required />
                  <div className="form-options">
                    <label>
                      <input type="checkbox" /> Remember Me
                    </label>
                    <a href="#">Forgot Password?</a>
                  </div>
                  <button type="submit">Login</button>
                </form>
                <p>
                  New User? <span onClick={toggleForm}>Signup</span>
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="form-right">
              <div className="form-content">
                <h2>Signup</h2>
                <p>Create a new account to get started!</p>
                <form>
                  <input type="text" placeholder="Full Name" required />
                  <input type="email" placeholder="Email" required />
                  <input type="password" placeholder="Password" required />
                  <input type="password" placeholder="Confirm Password" required />
                  <button type="submit">Signup</button>
                </form>
                <p>
                  Already have an account? <span onClick={toggleForm}>Login</span>
                </p>
              </div>
            </div>
            <div className="form-left">
              <img src="/plant.jpg" alt="Signup" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
