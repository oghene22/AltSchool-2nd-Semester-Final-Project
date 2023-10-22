import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style.css";
import Counters from "./customHooks/counter";
import FourZeroFourPage from "./routes/FourZeroFourPage";
import HomePage from "./routes/HomePage";
import ErrorBoundary from "./routes/ErrorBoundary";
import ErrorBoundaryTest from "./routes/ErrorBoundaryTest";
function App() {
  return (
    <>
      <ErrorBoundary>
        <ul className="navlink">
          <li className="links">
            <Link className="linksto home" to="/">
              HOME {" "}
            </Link>
          </li>
          <li className="links">
            <Link className="linksto" to="/counter">
              COUNTER
            </Link>
          </li>
          <li className="links">
            <Link className="linksto" to="/error">
              ERROR PAGE
            </Link>
          </li>
        </ul>
        <hr></hr>
        <Routes>
          <Route path="*" element={<FourZeroFourPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/counter" element={<Counters />} />
          <Route path="/error" element={<ErrorBoundaryTest />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}
export default App;
