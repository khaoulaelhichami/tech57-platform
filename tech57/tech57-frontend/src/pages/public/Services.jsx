import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axios";

export default function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => { api.get("/public/services").then((res) => setServices(res.data)); }, []);

  return (
    <div>
      {/* --- Hero --- */}
      <div className="py-5" style={{ backgroundColor: "var(--tech57-light-gray)" }}>
        <div className="container py-4">
          <span className="badge rounded-pill mb-3" style={{ backgroundColor: "var(--tech57-blue-light)", color: "var(--tech57-blue-dark)" }}>
            NOS EXPERTISES
          </span>
          <h1 className="display-5 fw-bold mb-3" style={{ maxWidth: 640 }}>
            Propulsez votre innovation vers l'excellence technologique
          </h1>
          <p className="text-muted lead" style={{ maxWidth: 560 }}>
            Tech57 accompagne les entrepreneurs et les entreprises dans leur transition
            vers l'industrie 4.0 grâce à des solutions sur mesure en ingénierie et digital.
          </p>
        </div>
      </div>

      {/* --- Grille de services --- */}
      <div className="container py-5">
        <div className="row g-4">
          {services.map((s) => (
            <div className="col-md-6" key={s.id}>
              <div className="card card-lift h-100 border-0 shadow-sm p-4 p-md-5">
                <div className="icon-badge mb-4">
                  <i className={`bi ${s.icone || "bi-stars"}`}></i>
                </div>
                <h4 className="mb-3">{s.titre}</h4>
                <p className="text-muted">{s.description}</p>
              </div>
            </div>
          ))}
          {services.length === 0 && <p className="text-muted">Contenu à venir.</p>}
        </div>
      </div>

      {/* --- Bannière CTA --- */}
      <div className="container py-5">
        <div className="cta-banner p-5 py-md-6 text-center" style={{ backgroundColor: "var(--tech57-dark)" }}>
          <h2 className="text-white fw-bold mb-3">Prêt à lancer votre projet ?</h2>
          <p className="text-light mb-4" style={{ maxWidth: 560, margin: "0 auto", opacity: 0.85 }}>
            Bénéficiez de l'expertise de nos formateurs et de l'infrastructure de
            Tech57 pour concrétiser vos ambitions technologiques.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link to="/contact" className="btn btn-tech57 btn-lg px-4">Prendre rendez-vous</Link>
            <Link to="/projets" className="btn btn-outline-tech57 btn-lg px-4">Voir nos réalisations</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
