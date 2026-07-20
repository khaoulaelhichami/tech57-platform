import { useEffect, useState } from "react";
import api from "../../../api/axios";

export default function Comptes() {
  const [comptes, setComptes] = useState([]);
  const [form, setForm] = useState({ nom: "", prenom: "", email: "", motDePasse: "" });

  const load = () => api.get("/admin/comptes").then((res) => setComptes(res.data));

  useEffect(() => { load(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/admin/comptes", form);
    setForm({ nom: "", prenom: "", email: "", motDePasse: "" });
    load();
  };

  const desactiver = async (id) => {
    if (!confirm("Désactiver ce compte administrateur ?")) return;
    await api.delete(`/admin/comptes/${id}`);
    load();
  };

  return (
    <div>
      <h3 className="mb-3">Comptes administrateurs</h3>

      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <h6>Créer un nouveau compte</h6>
          <form onSubmit={handleSubmit} className="row g-2 align-items-end">
            <div className="col-md-2">
              <label className="form-label small">Nom</label>
              <input className="form-control" value={form.nom}
                     onChange={(e) => setForm({ ...form, nom: e.target.value })} required />
            </div>
            <div className="col-md-2">
              <label className="form-label small">Prénom</label>
              <input className="form-control" value={form.prenom}
                     onChange={(e) => setForm({ ...form, prenom: e.target.value })} required />
            </div>
            <div className="col-md-3">
              <label className="form-label small">Email</label>
              <input type="email" className="form-control" value={form.email}
                     onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </div>
            <div className="col-md-3">
              <label className="form-label small">Mot de passe</label>
              <input type="password" className="form-control" value={form.motDePasse}
                     onChange={(e) => setForm({ ...form, motDePasse: e.target.value })} required />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-tech57 w-100">Créer</button>
            </div>
          </form>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <table className="table table-hover mb-0">
          <thead className="table-light">
            <tr><th>Nom</th><th>Email</th><th>Statut</th><th>Créé le</th><th></th></tr>
          </thead>
          <tbody>
            {comptes.map((c) => (
              <tr key={c.id}>
                <td>{c.prenom} {c.nom}</td>
                <td>{c.email}</td>
                <td><span className={`badge bg-${c.actif ? "success" : "secondary"}`}>{c.actif ? "Actif" : "Désactivé"}</span></td>
                <td>{new Date(c.dateCreation).toLocaleDateString()}</td>
                <td>
                  {c.actif && (
                    <button className="btn btn-sm btn-outline-danger" onClick={() => desactiver(c.id)}>
                      Désactiver
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
