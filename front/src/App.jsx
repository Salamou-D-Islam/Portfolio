import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import Profil from "./pages/Profil.jsx";
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import ProfilAdmin from "./pages/ProfilAdmin.jsx";
import ProjectsAdmin from "./pages/ProjectsAdmin.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Style from "./pages/Style.jsx";

function App() {
  const [profil, setProfil] = useState([]);
  const [projects, setProjects] = useState([]);

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* <Header /> */}

        <div className={darkMode ? "dark" : ""}>
          <div className="p-4 ">
            <button className="btn-primary mb-4" onClick={toggleDarkMode}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

            <Style />
          </div>
        </div>

        <div className="p-8 bg-primary">
          <h1 className="text-h1 text-primary font-sans mb-4">Mon Portfolio</h1>
          <button className="btn-primary mr-2">Contact</button>
          <button className="btn-secondary">Voir Projet</button>
        </div>

        {/* <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profil" element={<Profil sections={profil} />} />
            <Route path="/projets" element={<Projects projects={projects} />} />

            <Route path="/admin" element={<Admin />} />

            <Route
              path="/admin/projectform"
              element={
                <ProjectsAdmin projects={projects} setProjects={setProjects} />
              }
            />
            <Route
              path="/admin/profilform"
              element={
                <ProfilAdmin sections={profil} setSections={setProfil} />
              }
            />

            <Route path="/projets/:id" element={<ProjectDetail />} />
          </Routes>
        </main> */}

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
