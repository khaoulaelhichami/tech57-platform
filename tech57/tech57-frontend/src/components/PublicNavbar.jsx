import { Link } from "react-router-dom";

export default function PublicNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <Link className="navbar-brand text-tech57 fw-bold" to="/">Tech57</Link>
      <div className="ms-auto d-flex gap-3 align-items-center">
        <Link className="nav-link" to="/">Accueil</Link>
        <Link className="nav-link" to="/services">Services</Link>
        <Link className="nav-link" to="/projets">Projets</Link>
        <Link className="nav-link" to="/equipe">Équipe</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        <Link className="btn btn-tech57 btn-sm" to="/demande-stage">Demander un stage</Link>
      </div>
    </nav>
  );
}
