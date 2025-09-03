import { useEffect, useState } from "react";
import "./App.css";

function getStatusClass(status) {
  if (status === "Em desenvolvimento") return "status-dev";
  if (status === "Concluído") return "status-ok";
  if (status === "Planejado") return "status-plan";
  return "";
}

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="container">
      <h1>Bem-vindo ao CodeCraft Studio</h1>
      <h2>Projetos:</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            {p.name} - <span className={getStatusClass(p.status)}>{p.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}