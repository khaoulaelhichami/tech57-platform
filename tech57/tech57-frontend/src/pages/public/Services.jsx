import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => { api.get("/public/services").then((res) => setServices(res.data)); }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4">Nos services</h2>
      <div className="row g-4">
        {services.map((s) => (
          <div className="col-md-4" key={s.id}>
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5>{s.titre}</h5>
                <p className="text-muted">{s.description}</p>
              </div>
            </div>
          </div>
        ))}
        {services.length === 0 && <p className="text-muted">Contenu à venir.</p>}
      </div>
    </div>
  );
}
