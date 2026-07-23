import { useState } from "react";
import api from "../../api/axios";

export default function SuiviDemande() {
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [resultat, setResultat] = useState(null);
    const [erreur, setErreur] = useState("");

    const rechercher = async (e) => {
        e.preventDefault();
        setErreur("");
        setResultat(null);
        try {
            const res = await api.get("/demandes/suivi", { params: { id, email } });
            setResultat(res.data);
        } catch (err) {
            setErreur("Aucune demande trouvée avec ces informations.");
        }
    };

    return (
        <div className="container my-5" style={{ maxWidth: 500 }}>
            <h2>Suivre ma demande de stage</h2>
            <p className="text-muted">
                Renseignez le numéro de votre demande (indiqué sur votre email de confirmation) et votre adresse email.
            </p>

            <form onSubmit={rechercher}>
                <div className="mb-2">
                    <label className="form-label">Numéro de demande</label>
                    <input className="form-control" value={id} onChange={(e) => setId(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-tech57 w-100">Vérifier le statut</button>
            </form>

            {erreur && <div className="alert alert-danger mt-3">{erreur}</div>}

            {resultat && (
                <div className="alert alert-info mt-3">
                    <p><strong>{resultat.prenom} {resultat.nom}</strong></p>
                    <p>Domaine : {resultat.domaine}</p>
                    <p>Statut actuel : <span className="badge bg-primary">{resultat.statut}</span></p>
                </div>
            )}
        </div>
    );
}