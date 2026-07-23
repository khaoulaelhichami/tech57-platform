import { useEffect, useState } from "react";
import api from "../../../api/axios";

const VIDE = { nom: "", prenom: "", email: "", telephone: "", specialite: "", actif: true };

export default function Encadrants() {
    const [encadrants, setEncadrants] = useState([]);
    const [edition, setEdition] = useState(null);
    const [creation, setCreation] = useState(false);
    const [form, setForm] = useState(VIDE);

    const load = () => api.get("/admin/encadrants").then((res) => setEncadrants(res.data));

    useEffect(() => { load(); }, []);

    const ouvrirCreation = () => { setForm(VIDE); setCreation(true); };
    const ouvrirEdition = (enc) => { setForm({ ...enc }); setEdition(enc); };
    const fermer = () => { setCreation(false); setEdition(null); };

    const enregistrer = async () => {
        if (edition) {
            await api.put(`/admin/encadrants/${edition.id}`, form);
        } else {
            await api.post("/admin/encadrants", form);
        }
        fermer();
        load();
    };

    const supprimer = async (id) => {
        if (!window.confirm("Supprimer cet encadrant ?")) return;
        await api.delete(`/admin/encadrants/${id}`);
        load();
    };

    const modalOuvert = creation || edition;

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Encadrants</h3>
                <button className="btn btn-tech57" onClick={ouvrirCreation}>+ Ajouter un encadrant</button>
            </div>

            <div className="card border-0 shadow-sm">
                <table className="table table-hover mb-0">
                    <thead className="table-light">
                    <tr>
                        <th>Nom</th><th>Email</th><th>Téléphone</th><th>Spécialité</th><th>Statut</th><th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {encadrants.map((enc) => (
                        <tr key={enc.id}>
                            <td>{enc.prenom} {enc.nom}</td>
                            <td>{enc.email}</td>
                            <td>{enc.telephone}</td>
                            <td>{enc.specialite}</td>
                            <td>
                  <span className={`badge bg-${enc.actif ? "success" : "secondary"}`}>
                    {enc.actif ? "Actif" : "Inactif"}
                  </span>
                            </td>
                            <td className="d-flex gap-2">
                                <button className="btn btn-sm btn-outline-secondary" onClick={() => ouvrirEdition(enc)}>Modifier</button>
                                <button className="btn btn-sm btn-outline-danger" onClick={() => supprimer(enc.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                    {encadrants.length === 0 && (
                        <tr><td colSpan={6} className="text-center text-muted py-4">Aucun encadrant pour le moment</td></tr>
                    )}
                    </tbody>
                </table>
            </div>

            {modalOuvert && (
                <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.4)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{edition ? "Modifier" : "Ajouter"} un encadrant</h5>
                                <button className="btn-close" onClick={fermer}></button>
                            </div>
                            <div className="modal-body">
                                <div className="row g-2">
                                    <div className="col-6">
                                        <label className="form-label">Nom</label>
                                        <input className="form-control" value={form.nom}
                                               onChange={(e) => setForm({ ...form, nom: e.target.value })} />
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Prénom</label>
                                        <input className="form-control" value={form.prenom}
                                               onChange={(e) => setForm({ ...form, prenom: e.target.value })} />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" value={form.email}
                                               onChange={(e) => setForm({ ...form, email: e.target.value })} />
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Téléphone</label>
                                        <input className="form-control" value={form.telephone}
                                               onChange={(e) => setForm({ ...form, telephone: e.target.value })} />
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Spécialité</label>
                                        <select className="form-select" value={form.specialite}
                                                onChange={(e) => setForm({ ...form, specialite: e.target.value })}>
                                            <option value="">-- Choisir --</option>
                                            <option value="Robotique">Robotique</option>
                                            <option value="IT">IT</option>
                                            <option value="Design">Design</option>
                                            <option value="Digitalisation">Digitalisation</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" checked={form.actif}
                                                   onChange={(e) => setForm({ ...form, actif: e.target.checked })} />
                                            <label className="form-check-label">Actif</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={fermer}>Annuler</button>
                                <button className="btn btn-tech57" onClick={enregistrer}>Enregistrer</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}