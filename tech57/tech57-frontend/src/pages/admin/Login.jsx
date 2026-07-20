import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErreur("");
    setLoading(true);
    try {
      await login(email, motDePasse);
      navigate("/admin/dashboard");
    } catch (err) {
      setErreur("Email ou mot de passe incorrect.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-sm p-4" style={{ width: 380 }}>
        <h4 className="text-center mb-1 text-tech57">Tech57</h4>
        <p className="text-center text-muted mb-4">Connexion — Espace Administrateur</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={email}
                   onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Mot de passe</label>
            <input type="password" className="form-control" value={motDePasse}
                   onChange={(e) => setMotDePasse(e.target.value)} required />
          </div>
          {erreur && <div className="alert alert-danger py-2">{erreur}</div>}
          <button type="submit" className="btn btn-tech57 w-100" disabled={loading}>
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}
