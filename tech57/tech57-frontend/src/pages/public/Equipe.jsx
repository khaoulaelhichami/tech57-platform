import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function Equipe() {
  const [membres, setMembres] = useState([]);
  useEffect(() => { api.get("/public/membres").then((res) => setMembres(res.data)); }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4">Notre équipe</h2>
      <div className="row g-4">
        {membres.map((m) => (
          <div className="col-md-3" key={m.id}>
            <div className="card h-100 text-center border-0 shadow-sm">
              <div className="card-body">
                {m.photo && <img src={m.photo} className="rounded-circle mb-2" width="80" height="80" alt="" />}
                <h6>{m.prenom} {m.nom}</h6>
                <p className="small text-muted">{m.poste}</p>
              </div>
            </div>
          </div>
        ))}
        {membres.length === 0 && <p className="text-muted">Contenu à venir.</p>}
      </div>
    </div>
  );
}
