import { useState } from "react";
import "./index.css";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <button className="login-button button" onClick={() => setOpen(true)}>
        Login
      </button>
      {/* option 1 
      {open && (
        <div className="overlay">
          <div className="login-window">
            <div className="login-window-container">
              <div className="login-window-top">
                <h1>Sign in</h1>
                <button onClick={() => setOpen(false)} className="close">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 5L19 19M5 19L19 5"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>

              <form action="#">
                <div className="login-window-email">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="email"
                    placeholder="example@mail.com"
                    required
                  />
                </div>
                <div className="login-window-password">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="login-window-submit">
                  <input
                    type="submit"
                    className="button submit"
                    value="Sign in"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )} */}
      <div className="overlay show">
        <div className="login-window">
          <div className="login-window-container">
            <div className="login-window-top">
              <h1>Sign in</h1>
              <button onClick={() => setOpen(false)} className="close">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 5L19 19M5 19L19 5"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>

            <form action="#">
              <div className="login-window-email">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="email"
                  placeholder="example@mail.com"
                  required
                />
              </div>
              <div className="login-window-password">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="login-window-submit">
                <input
                  type="submit"
                  className="button submit"
                  value="Sign in"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
