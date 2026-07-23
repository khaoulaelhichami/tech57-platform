import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function Equipe() {
  const [membres, setMembres] = useState([]);
  useEffect(() => { api.get("/public/membres").then((res) => setMembres(res.data)); }, []);

  return (
    <div>
      {/* --- Hero --- */}
      <div className="text-center py-5">
        <div className="container" style={{ maxWidth: 700 }}>
          <span className="badge rounded-pill mb-3" style={{ backgroundColor: "var(--tech57-blue-light)", color: "var(--tech57-blue-dark)" }}>
            L'EXCELLENCE TECHNOLOGIQUE
          </span>
          <h1 className="display-5 fw-bold mb-3">
            Les architectes de votre <span className="text-tech57 fst-italic">transformation</span> numérique
          </h1>
          <p className="text-muted lead">
            Plus qu'un incubateur, Tech57 rassemble une synergie d'experts dédiés
            à propulser vos ambitions technologiques vers des standards industriels.
          </p>
        </div>
      </div>

      {/* --- Grille équipe --- */}
      <div className="container pb-5">
        <div className="row g-4">
          {membres.map((m) => (
            <div className="col-md-6 col-lg-4" key={m.id}>
              <div className="card card-lift h-100 border-0 shadow-sm p-3">
                <div
                  className="photo-overlay-wrapper position-relative rounded-3 overflow-hidden mb-3"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={`${m.prenom} ${m.nom}`}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <div className="w-100 h-100 bg-tech57 bg-opacity-10 d-flex align-items-center justify-content-center">
                      <i className="bi bi-person fs-1 text-tech57"></i>
                    </div>
                  )}
                </div>
                <div className="card-body p-0">
                  <h5 className="mb-1">{m.prenom} {m.nom}</h5>
                  <div className="section-label mb-2">{m.poste}</div>
                  {m.bio && <p className="text-muted small mb-0">{m.bio}</p>}
                </div>
              </div>
            </div>
          ))}
          {membres.length === 0 && <p className="text-muted text-center">Contenu à venir.</p>}
        </div>
      </div>
    </div>
  );
}
