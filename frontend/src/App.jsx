import { useEffect, useState } from 'react';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Bem-vindo ao CodeCraft Studio</h1>
      <h2>Projetos:</h2>
      <ul>
        {projects.map(p => (
          <li key={p.id}>
            {p.name} - <strong>{p.status}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
