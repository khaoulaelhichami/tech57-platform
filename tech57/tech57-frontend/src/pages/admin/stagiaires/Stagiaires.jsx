import { useEffect, useState } from "react";
import api from "../../../api/axios";

export default function Stagiaires() {
  const [stagiaires, setStagiaires] = useState([]);
  const [edition, setEdition] = useState(null);

  const load = () => api.get("/admin/stagiaires").then((res) => setStagiaires(res.data));

  useEffect(() => { load(); }, []);

  const ouvrirEdition = (s) => setEdition({ ...s });

  const enregistrer = async () => {
    await api.put(`/admin/stagiaires/${edition.id}`, edition);
    setEdition(null);
    load();
  };

  return (
    <div>
      <h3 className="mb-3">Stagiaires</h3>

      <div className="card border-0 shadow-sm">
        <table className="table table-hover mb-0">
          <thead className="table-light">
            <tr>
              <th>Candidat</th><th>Encadrant</th><th>Début</th><th>Fin</th><th>Statut</th><th></th>
            </tr>
          </thead>
          <tbody>
            {stagiaires.map((s) => (
              <tr key={s.id}>
                <td>{s.demande?.prenom} {s.demande?.nom}</td>
                <td>{s.encadrant || "—"}</td>
                <td>{s.dateDebut}</td>
                <td>{s.dateFin}</td>
                <td>
                  <span className={`badge bg-${s.actif ? "success" : "secondary"}`}>
                    {s.actif ? "Actif" : "Terminé"}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => ouvrirEdition(s)}>
                    Gérer
                  </button>
                </td>
              </tr>
            ))}
            {stagiaires.length === 0 && (
              <tr><td colSpan={6} className="text-center text-muted py-4">Aucun stagiaire pour le moment</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {edition && (
        <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.4)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Suivi de {edition.demande?.prenom} {edition.demande?.nom}</h5>
                <button className="btn-close" onClick={() => setEdition(null)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-2">
                  <label className="form-label">Encadrant</label>
                  <input className="form-control" value={edition.encadrant || ""}
                         onChange={(e) => setEdition({ ...edition, encadrant: e.target.value })} />
                </div>
                <div className="row">
                  <div className="col-6 mb-2">
                    <label className="form-label">Date début</label>
                    <input type="date" className="form-control" value={edition.dateDebut || ""}
                           onChange={(e) => setEdition({ ...edition, dateDebut: e.target.value })} />
                  </div>
                  <div className="col-6 mb-2">
                    <label className="form-label">Date fin</label>
                    <input type="date" className="form-control" value={edition.dateFin || ""}
                           onChange={(e) => setEdition({ ...edition, dateFin: e.target.value })} />
                  </div>
                </div>
                <div className="mb-2">
                  <label className="form-label">Évaluation finale</label>
                  <textarea className="form-control" rows={3} value={edition.evaluation || ""}
                            onChange={(e) => setEdition({ ...edition, evaluation: e.target.value })} />
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" checked={edition.actif}
                         onChange={(e) => setEdition({ ...edition, actif: e.target.checked })} />
                  <label className="form-check-label">Stage actif</label>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setEdition(null)}>Annuler</button>
                <button className="btn btn-tech57" onClick={enregistrer}>Enregistrer</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
