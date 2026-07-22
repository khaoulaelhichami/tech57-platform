import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../api/axios";

export default function DemandeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [demande, setDemande] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [note, setNote] = useState("");

  const load = () => {
    api.get(`/admin/demandes/${id}`).then((res) => {
      setDemande(res.data);
      setNote(res.data.noteAdmin || "");
    });
    api.get(`/admin/demandes/${id}/documents`).then((res) => setDocuments(res.data));
  };

  useEffect(() => { load(); }, [id]);

  const changerStatut = async (statut) => {
    await api.put(`/admin/demandes/${id}/statut?statut=${statut}`);
    load();
  };

  const enregistrerNote = async () => {
    await api.put(`/admin/demandes/${id}/note`, note, { headers: { "Content-Type": "text/plain" } });
    load();
  };

  const exporterPdf = async () => {
    const res = await api.get(`/admin/demandes/${id}/export-pdf`, { responseType: "blob" });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `demande-${id}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  if (!demande) return <p>Chargement...</p>;

  return (
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-link ps-0" onClick={() => navigate(-1)}>&larr; Retour</button>
          <button className="btn btn-outline-primary btn-sm" onClick={exporterPdf}>Exporter en PDF</button>
        </div>
        <h3>Demande de {demande.prenom} {demande.nom}</h3>

        <div className="row g-3 mt-2">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm mb-3">
              <div className="card-body">
                <h6>Informations du candidat</h6>
                <p><strong>Email :</strong> {demande.email}</p>
                <p><strong>Téléphone :</strong> {demande.telephone}</p>
                <p><strong>Établissement :</strong> {demande.etablissement}</p>
                <p><strong>Domaine souhaité :</strong> {demande.domaine}</p>
                <p><strong>Période :</strong> {demande.periodeDebut} → {demande.periodeFin}</p>
                <p><strong>Statut actuel :</strong> {demande.statut}</p>
              </div>
            </div>

            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6>Documents joints</h6>
                {documents.length === 0 && <p className="text-muted small mb-0">Aucun document joint.</p>}
                <ul className="list-unstyled mb-0">
                  {documents.map((doc) => (
                      <li key={doc.id} className="mb-1">
                        📄 <strong>{doc.type}</strong> — {doc.nomFichier}
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card border-0 shadow-sm mb-3">
              <div className="card-body">
                <h6>Actions</h6>
                <div className="d-flex flex-wrap gap-2">
                  <button className="btn btn-sm btn-outline-info" onClick={() => changerStatut("EN_COURS_ETUDE")}>Mettre en étude</button>
                  <button className="btn btn-sm btn-outline-success" onClick={() => changerStatut("ACCEPTEE")}>Accepter</button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => changerStatut("REFUSEE")}>Refuser</button>
                  <button className="btn btn-sm btn-outline-warning" onClick={() => changerStatut("EN_ATTENTE_COMPLEMENT")}>Demander complément</button>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6>Note interne / historique</h6>
                <textarea className="form-control mb-2" rows={4} value={note}
                          onChange={(e) => setNote(e.target.value)} />
                <button className="btn btn-tech57 btn-sm" onClick={enregistrerNote}>Enregistrer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}