import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-light pt-5 pb-4 mt-5" style={{ backgroundColor: "var(--tech57-dark)" }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h4 className="fw-bold mb-3">Tech57</h4>
            <p className="text-secondary small" style={{ maxWidth: 280 }}>
              Incubateur digital dédié à la formation, la robotique et la
              transformation numérique, au cœur du Maroc.
            </p>
            <div className="d-flex gap-2 mt-3">
              {["bi-globe", "bi-share", "bi-envelope-at"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="d-flex align-items-center justify-content-center rounded-circle text-secondary border border-secondary"
                  style={{ width: 40, height: 40 }}
                >
                  <i className={`bi ${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="col-md-4">
            <h6 className="text-uppercase small fw-bold mb-3" style={{ letterSpacing: "0.08em" }}>
              Navigation
            </h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li><Link className="text-secondary text-decoration-none" to="/a-propos">À propos</Link></li>
              <li><Link className="text-secondary text-decoration-none" to="/services">Services</Link></li>
              <li><Link className="text-secondary text-decoration-none" to="/projets">Projets</Link></li>
              <li><Link className="text-secondary text-decoration-none" to="/clients">Clients</Link></li>
              <li><Link className="text-secondary text-decoration-none" to="/partenaires">Partenaires</Link></li>
              <li><Link className="text-secondary text-decoration-none" to="/equipe">Équipe</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="text-uppercase small fw-bold mb-3" style={{ letterSpacing: "0.08em" }}>
              Contact
            </h6>
            <ul className="list-unstyled small text-secondary d-flex flex-column gap-2">
              <li>Khouribga, Maroc</li>
              <li>contact@tech57.ma</li>
            </ul>
            <Link to="/demande-stage" className="btn btn-tech57 btn-sm mt-2">
              Demander un stage
            </Link>
          </div>
        </div>

        <hr className="border-secondary mt-5" />
        <p className="text-secondary text-center mb-0 small">
          © {new Date().getFullYear()} Tech57. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
