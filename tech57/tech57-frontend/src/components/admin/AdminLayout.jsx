import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const MENU = [
  { to: "/admin/dashboard", icon: "bi-speedometer2", label: "Dashboard" },
  { to: "/admin/demandes", icon: "bi-inbox", label: "Demandes de stage" },
  { to: "/admin/stagiaires", icon: "bi-people", label: "Stagiaires" },
  { to: "/admin/encadrants", icon: "bi-person-workspace", label: "Encadrants" },
  { to: "/admin/contenu/services", icon: "bi-grid", label: "Contenu du site" },
  { to: "/admin/comptes", icon: "bi-person-badge", label: "Comptes admin" },
  { to: "/admin/parametres/pieces-requises", icon: "bi-gear", label: "Paramètres" },
];

export default function AdminLayout() {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="d-flex">
      <div className="admin-sidebar" style={{ width: 250 }}>
        <div className="text-white p-3 border-bottom border-secondary">
          <h5 className="mb-0">Tech57</h5>
          <small className="text-white-50">Backoffice Admin</small>
        </div>
        <nav className="nav flex-column mt-2">
          {MENU.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              <i className={`bi ${item.icon} me-2`}></i>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex-grow-1">
        <div className="bg-white border-bottom d-flex justify-content-between align-items-center px-4 py-2">
          <span className="text-muted">Espace Administrateur</span>
          <div className="d-flex align-items-center gap-3">
            <span>{admin?.prenom} {admin?.nom}</span>
            <button className="btn btn-outline-secondary btn-sm" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right me-1"></i> Déconnexion
            </button>
          </div>
        </div>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
