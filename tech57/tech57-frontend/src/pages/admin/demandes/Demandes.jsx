import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../api/axios";

const STATUTS = ["RECUE", "EN_COURS_ETUDE", "ACCEPTEE", "REFUSEE", "EN_ATTENTE_COMPLEMENT", "STAGE_EN_COURS", "STAGE_TERMINE"];

const BADGE_COLORS = {
  RECUE: "secondary",
  EN_COURS_ETUDE: "info",
  ACCEPTEE: "success",
  REFUSEE: "danger",
  EN_ATTENTE_COMPLEMENT: "warning",
  STAGE_EN_COURS: "primary",
  STAGE_TERMINE: "dark",
};

export default function Demandes() {
  const [demandes, setDemandes] = useState([]);
  const [filtreStatut, setFiltreStatut] = useState("");
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    const params = filtreStatut ? { statut: filtreStatut } : {};
    api.get("/admin/demandes", { params }).then((res) => {
      setDemandes(res.data);
      setLoading(false);
    });
  };

  useEffect(() => { load(); }, [filtreStatut]);

  const changerStatut = async (id, statut) => {
    await api.put(`/admin/demandes/${id}/statut?statut=${statut}`);
    load();
  };
  const exporterExcel = async () => {
    const params = filtreStatut ? { statut: filtreStatut } : {};
    const res = await api.get("/admin/demandes/export-excel", { params, responseType: "blob" });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "demandes.xlsx");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Demandes de stage</h3>
        <div className="d-flex gap-2">
          <select className="form-select" style={{ width: 250 }}
                  value={filtreStatut} onChange={(e) => setFiltreStatut(e.target.value)}>
            <option value="">Tous les statuts</option>
            {STATUTS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <button className="btn btn-outline-primary" onClick={exporterExcel}>Exporter Excel</button>
        </div>
      </div>

      {loading ? <p>Chargement...</p> : (
        <div className="card border-0 shadow-sm">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Candidat</th><th>Domaine</th><th>Établissement</th>
                <th>Date dépôt</th><th>Statut</th><th>Action rapide</th><th></th>
              </tr>
            </thead>
            <tbody>
              {demandes.map((d) => (
                <tr key={d.id}>
                  <td>{d.prenom} {d.nom}<br /><small className="text-muted">{d.email}</small></td>
                  <td>{d.domaine}</td>
                  <td>{d.etablissement}</td>
                  <td>{new Date(d.dateDepot).toLocaleDateString()}</td>
                  <td><span className={`badge bg-${BADGE_COLORS[d.statut] || "secondary"}`}>{d.statut}</span></td>
                  <td>
                    <select className="form-select form-select-sm" value={d.statut}
                            onChange={(e) => changerStatut(d.id, e.target.value)}>
                      {STATUTS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                  <td>
                    <Link to={`/admin/demandes/${d.id}`} className="btn btn-sm btn-outline-secondary">
                      Détails
                    </Link>
                  </td>
                </tr>
              ))}
              {demandes.length === 0 && (
                <tr><td colSpan={7} className="text-center text-muted py-4">Aucune demande</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
