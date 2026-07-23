import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/projets", label: "Projets" },
  { to: "/equipe", label: "Équipe" },
  { to: "/contact", label: "Contact" },
];

export default function PublicNavbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top py-3">
      <div className="container">
        {/* --- Logo --- */}
        <Link className="navbar-brand p-0 me-3" to="/">
          <img
            src="/logo.png"
            alt="Logo Tech57"
            height="72"
            width="72"
            style={{ objectFit: "contain" }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <div className="ms-auto d-flex flex-column flex-lg-row gap-lg-4 align-items-lg-center">
            {links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={
                    isActive
                      ? "nav-link text-tech57 fw-bold border-bottom border-2"
                      : "nav-link text-secondary"
                  }
                  style={isActive ? { borderColor: "var(--tech57-blue-dark)" } : {}}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link className="btn btn-tech57 px-4" to="/demande-stage">
              Demander un stage
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
