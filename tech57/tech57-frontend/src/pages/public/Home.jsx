import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axios";
import Carousel from "../../components/Carousel";

// Remplacez ces 3 chemins par vos vraies photos (dans public/images/hero/)
const HERO_IMAGES = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
];
const HERO_INTERVAL_MS = 5000;

export default function Home() {
  const [services, setServices] = useState([]);
  const [projets, setProjets] = useState([]);
  const [clients, setClients] = useState([]);
  const [partenaires, setPartenaires] = useState([]);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    api.get("/public/services").then((res) => setServices(res.data));
    api.get("/public/projets").then((res) => setProjets(res.data));
    api.get("/public/clients").then((res) => setClients(res.data));
    api.get("/public/partenaires").then((res) => setPartenaires(res.data));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, HERO_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* --- Hero avec carrousel d'images en fond --- */}
      <div className="position-relative text-white overflow-hidden" style={{ minHeight: 420 }}>
        {HERO_IMAGES.map((src, i) => (
          <div
            key={src}
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "var(--tech57-blue)", // couleur de secours tant que la photo n'existe pas
              opacity: i === heroIndex ? 1 : 0,
              transition: "opacity 1.2s ease-in-out",
            }}
          />
        ))}
        {/* voile gris/noir semi-transparent pour garder le texte lisible, rendu plus institutionnel */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(34, 40, 46, 0.55)" }}
        />

        <div className="position-relative container py-5" style={{ minHeight: 420 }}>
          <div className="d-flex flex-column justify-content-center h-100 py-5" style={{ maxWidth: 640 }}>
            <h1 className="display-4 fw-bold">Tech57</h1>
            <p className="lead mb-0">
              Le catalyseur de l'innovation digitale au Maroc. Nous formons les talents
              de demain et accompagnons les entrepreneurs vers l'excellence technologique.
            </p>
          </div>
        </div>
      </div>

      {/* --- Qui sommes-nous --- */}
      <div className="py-5" style={{ backgroundColor: "var(--tech57-light-gray)" }}>
        <div className="container text-center" style={{ maxWidth: 800 }}>
          <div className="section-label mb-2">Notre mission</div>
          <h2 className="mb-4">Qui sommes-nous ?</h2>
          <div className="bg-white shadow-sm p-4 p-md-5" style={{ borderRadius: 20 }}>
            <p className="text-muted mb-0">
              Tech57 est un incubateur digital dédié à l'épanouissement de l'écosystème
              technologique marocain. Notre structure offre un environnement stimulant où
              l'innovation, la formation et l'entrepreneuriat se rencontrent pour créer des
              solutions numériques impactantes.
            </p>
          </div>
        </div>
      </div>

      {/* --- Nos Services (carrousel) --- */}
      <div className="container py-5">
        <div className="section-label mb-2">Expertise</div>
        <h2 className="mb-4">Nos Services</h2>
        <Carousel
          items={services}
          itemsPerPage={3}
          renderItem={(s) => (
            <div className="card card-lift h-100 border-0 shadow-sm p-4">
              <div className="icon-badge mb-4">
                <i className={`bi ${s.icone || "bi-stars"}`}></i>
              </div>
              <h5 className="mb-2">{s.titre}</h5>
              <p className="text-muted small mb-0">{s.description}</p>
            </div>
          )}
        />
      </div>

      {/* --- Nos Réalisations (bento) --- */}
      <div className="py-5" style={{ backgroundColor: "var(--tech57-light-gray)" }}>
        <div className="container">
          <div className="section-label mb-2">Portfolio</div>
          <h2 className="mb-4">Nos Réalisations</h2>
          <div className="row g-4">
            {projets.slice(0, 3).map((p, i) => (
              <div className={i === 0 ? "col-md-8" : "col-md-4"} key={p.id}>
                <div
                  className="photo-overlay-wrapper position-relative overflow-hidden shadow-sm"
                  style={{ height: 340, borderRadius: 20 }}
                >
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.titre}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <div className="w-100 h-100 bg-tech57 bg-opacity-25"></div>
                  )}
                  <div className="photo-overlay" style={{ opacity: 1 }}>
                    <div>
                      <div className="fw-bold fs-5">{p.titre}</div>
                      <div className="small" style={{ maxWidth: 420 }}>{p.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {projets.length === 0 && <p className="text-muted">Contenu à venir.</p>}
          </div>
        </div>
      </div>

      {/* --- Bannière CTA --- */}
      <div className="container py-5">
        <div className="cta-banner bg-tech57 text-white text-center p-5 py-md-6">
          <h2 className="fw-bold mb-3">Prêt à transformer votre futur ?</h2>
          <p className="mb-4" style={{ maxWidth: 560, margin: "0 auto" }}>
            Rejoignez notre prochaine cohorte d'incubation ou postulez pour un stage
            immersif au cœur de l'innovation.
          </p>
          <Link to="/demande-stage" className="btn btn-light btn-lg text-tech57 fw-bold px-4">
            Postuler maintenant
          </Link>
        </div>
      </div>

      {/* --- Clients & Partenaires --- */}
      {(clients.length > 0 || partenaires.length > 0) && (
        <div className="container py-5 text-center">
          <div className="section-label mb-4">Ils nous font confiance</div>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 logo-strip">
            {clients.map((c) => (
              <div
                key={`c-${c.id}`}
                className="d-flex align-items-center justify-content-center rounded-3 border border-light-subtle bg-white shadow-sm p-3"
                style={{ minWidth: 140, minHeight: 90 }}
              >
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={c.nom}
                    style={{ maxHeight: 60, maxWidth: 120, objectFit: "contain" }}
                  />
                ) : (
                  <span className="text-muted fw-bold">{c.nom}</span>
                )}
              </div>
            ))}
            {partenaires.map((p) => (
              <div
                key={`p-${p.id}`}
                className="d-flex align-items-center justify-content-center rounded-3 border border-light-subtle bg-white shadow-sm p-3"
                style={{ minWidth: 140, minHeight: 90 }}
              >
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.nom}
                    style={{ maxHeight: 60, maxWidth: 120, objectFit: "contain" }}
                  />
                ) : (
                  <span className="text-muted fw-bold">{p.nom}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
