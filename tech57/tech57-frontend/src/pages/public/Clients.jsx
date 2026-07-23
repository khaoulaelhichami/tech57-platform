import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function Clients() {
  const [clients, setClients] = useState([]);
  useEffect(() => { api.get("/public/clients").then((res) => setClients(res.data)); }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4">Ils nous font confiance</h2>
      <div className="row g-4">
        {clients.map((c) => (
          <div className="col-md-3 col-6" key={c.id}>
            <div className="card h-100 text-center border-0 shadow-sm">
              <div className="card-body d-flex align-items-center justify-content-center">
                {c.logo ? (
                  <img src={c.logo} alt={c.nom} style={{ maxHeight: 60 }} />
                ) : (
                  <span className="text-muted">{c.nom}</span>
                )}
              </div>
            </div>
          </div>
        ))}
        {clients.length === 0 && <p className="text-muted">Contenu à venir.</p>}
      </div>
    </div>
  );
}
