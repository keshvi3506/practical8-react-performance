import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import { lazy, Suspense } from "react";

import Home from "./pages/Home";

const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <h2>Task Manager</h2>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main>
        <Suspense
          fallback={
            <div className="loading">
              <h2>Loading page...</h2>
              <p>Please wait.</p>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="footer">
        <p>Copyright © 2026 Task Management System</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;