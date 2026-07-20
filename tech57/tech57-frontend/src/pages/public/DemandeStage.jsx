import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function DemandeStage() {
  const [pieces, setPieces] = useState([]);
  const [form, setForm] = useState({
    nom: "", prenom: "", email: "", telephone: "", etablissement: "",
    domaine: "", periodeDebut: "", periodeFin: "",
  });
  const [envoye, setEnvoye] = useState(false);

  useEffect(() => {
    api.get("/demandes/pieces-requises").then((res) => setPieces(res.data));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/demandes/postuler", form);
    setEnvoye(true);
  };

  if (envoye) {
    return (
      <div className="container my-5">
        <div className="alert alert-success">
          Votre demande de stage a bien été envoyée ! Un accusé de réception vous a été adressé par e-mail.
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5" style={{ maxWidth: 600 }}>
      <h2>Demande de stage en ligne</h2>

      {pieces.length > 0 && (
        <div className="alert alert-info">
          <strong>Pièces à préparer :</strong>
          <ul className="mb-0">
            {pieces.map((p) => (
              <li key={p.id}>{p.nom}{p.obligatoire ? " (obligatoire)" : " (optionnel)"}</li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-3">
        <div className="row g-2">
          <div className="col-md-6"><input className="form-control" name="nom" placeholder="Nom" onChange={handleChange} required /></div>
          <div className="col-md-6"><input className="form-control" name="prenom" placeholder="Prénom" onChange={handleChange} required /></div>
          <div className="col-md-6"><input type="email" className="form-control" name="email" placeholder="Email" onChange={handleChange} required /></div>
          <div className="col-md-6"><input className="form-control" name="telephone" placeholder="Téléphone" onChange={handleChange} /></div>
          <div className="col-md-6"><input className="form-control" name="etablissement" placeholder="Établissement" onChange={handleChange} required /></div>
          <div className="col-md-6">
            <select className="form-select" name="domaine" onChange={handleChange} required>
              <option value="">Domaine souhaité</option>
              <option value="Robotique">Robotique</option>
              <option value="IT">IT</option>
              <option value="Design">Design</option>
              <option value="Digitalisation">Digitalisation</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label small">Début souhaité</label>
            <input type="date" className="form-control" name="periodeDebut" onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label small">Fin souhaitée</label>
            <input type="date" className="form-control" name="periodeFin" onChange={handleChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-tech57 w-100 mt-3">Envoyer ma demande</button>
      </form>
    </div>
  );
}
