import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function Projets() {
  const [projets, setProjets] = useState([]);
  useEffect(() => { api.get("/public/projets").then((res) => setProjets(res.data)); }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4">Nos projets</h2>
      <div className="row g-4">
        {projets.map((p) => (
          <div className="col-md-4" key={p.id}>
            <div className="card h-100 border-0 shadow-sm">
              {p.image && <img src={p.image} className="card-img-top" alt={p.titre} />}
              <div className="card-body">
                <h5>{p.titre}</h5>
                <p className="text-muted">{p.description}</p>
              </div>
            </div>
          </div>
        ))}
        {projets.length === 0 && <p className="text-muted">Contenu à venir.</p>}
      </div>
    </div>
  );
}
