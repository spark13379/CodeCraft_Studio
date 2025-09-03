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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Falha ao carregar projetos");
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        
        // Dados de exemplo para demonstração
        setProjects([
          { id: 1, name: "MARAB", status: "Em desenvolvimento" },
          { id: 2, name: "São Síntios", status: "Concluído" },
          { id: 3, name: "Sistema Interno", status: "Planejado" }
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>CodeCraft Studio</h1>
        <p className="subtitle">Desenvolvimento de software de alta qualidade</p>
        <p className="description">
          Transformamos ideias em soluções digitais inovadoras com design elegante e funcionalidades excepcionais.
        </p>
      </header>
      
      <div className="projects-section">
        <h2 className="projects-title">Nossos Projetos</h2>
        
        {loading && <p className="loading">Carregando projetos...</p>}
        
        {error && <p className="error">Erro: {error}. Mostrando dados de exemplo.</p>}
        
        {!loading && (
          <ul className="projects-list">
            {projects.map((p) => (
              <li key={p.id} className="project-item">
                <div>
                  <h3 className="project-name">{p.name}</h3>
                </div>
                <span className={getStatusClass(p.status)}>{p.status}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <footer className="footer">
        <p>© 2025 CodeCraft Studio. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}