import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axios";

export default function Home() {
  const [services, setServices] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.get("/public/services").then((res) => setServices(res.data));
    api.get("/public/clients").then((res) => setClients(res.data));
  }, []);

  return (
    <div>
      <div className="bg-tech57 text-white text-center py-5">
        <h1>Tech57</h1>
        <p className="lead">Accompagnement technologique, formation et digitalisation</p>
        <Link to="/demande-stage" className="btn btn-light btn-lg mt-2">Demander un stage</Link>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">Nos services</h2>
        <div className="row g-4">
          {services.map((s) => (
            <div className="col-md-3" key={s.id}>
              <div className="card h-100 text-center border-0 shadow-sm">
                <div className="card-body">
                  <i className={`bi ${s.icone || "bi-stars"} fs-1 text-tech57`}></i>
                  <h6 className="mt-3">{s.titre}</h6>
                  <p className="small text-muted">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
          {services.length === 0 && <p className="text-center text-muted">Contenu à venir.</p>}
        </div>
      </div>

      {clients.length > 0 && (
        <div className="container my-5 text-center">
          <h2 className="mb-4">Ils nous font confiance</h2>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {clients.map((c) => <span key={c.id} className="text-muted">{c.nom}</span>)}
          </div>
        </div>
      )}
    </div>
  );
}
