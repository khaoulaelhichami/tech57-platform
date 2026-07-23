import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function Partenaires() {
  const [partenaires, setPartenaires] = useState([]);
  useEffect(() => { api.get("/public/partenaires").then((res) => setPartenaires(res.data)); }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4">Nos partenaires</h2>
      <div className="row g-4">
        {partenaires.map((p) => (
          <div className="col-md-3 col-6" key={p.id}>
            <div className="card h-100 text-center border-0 shadow-sm">
              <div className="card-body d-flex align-items-center justify-content-center">
                {p.logo ? (
                  <img src={p.logo} alt={p.nom} style={{ maxHeight: 60 }} />
                ) : (
                  <span className="text-muted">{p.nom}</span>
                )}
              </div>
            </div>
          </div>
        ))}
        {partenaires.length === 0 && <p className="text-muted">Contenu à venir.</p>}
      </div>
    </div>
  );
}
