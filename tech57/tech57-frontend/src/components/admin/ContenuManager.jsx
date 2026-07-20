import { useEffect, useState } from "react";
import api from "../../api/axios";

// Composant generique de gestion CRUD reutilise pour Services, Projets,
// Clients, Partenaires, Membres (contenu de la vitrine)
export default function ContenuManager({ title, endpoint, fields, emptyItem }) {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyItem);
  const [editId, setEditId] = useState(null);

  const load = () => api.get(endpoint).then((res) => setItems(res.data));

  useEffect(() => { load(); }, [endpoint]);

  const handleChange = (name, value) => setForm({ ...form, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await api.put(`${endpoint}/${editId}`, form);
    } else {
      await api.post(endpoint, form);
    }
    setForm(emptyItem);
    setEditId(null);
    load();
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    if (!confirm("Supprimer cet élément ?")) return;
    await api.delete(`${endpoint}/${id}`);
    load();
  };

  return (
    <div>
      <h3 className="mb-3">{title}</h3>

      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <h6>{editId ? "Modifier" : "Ajouter"}</h6>
          <form onSubmit={handleSubmit} className="row g-2 align-items-end">
            {fields.map((f) => (
              <div className="col-md-3" key={f.name}>
                <label className="form-label small">{f.label}</label>
                {f.type === "checkbox" ? (
                  <div className="form-check mt-2">
                    <input type="checkbox" className="form-check-input"
                           checked={!!form[f.name]}
                           onChange={(e) => handleChange(f.name, e.target.checked)} />
                  </div>
                ) : (
                  <input
                    type={f.type || "text"}
                    className="form-control"
                    value={form[f.name] ?? ""}
                    onChange={(e) => handleChange(f.name, e.target.value)}
                  />
                )}
              </div>
            ))}
            <div className="col-md-2">
              <button type="submit" className="btn btn-tech57 w-100">
                {editId ? "Modifier" : "Ajouter"}
              </button>
            </div>
            {editId && (
              <div className="col-md-2">
                <button type="button" className="btn btn-outline-secondary w-100"
                        onClick={() => { setForm(emptyItem); setEditId(null); }}>
                  Annuler
                </button>
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <table className="table table-hover mb-0">
          <thead className="table-light">
            <tr>
              {fields.map((f) => <th key={f.name}>{f.label}</th>)}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                {fields.map((f) => (
                  <td key={f.name}>
                    {f.type === "checkbox" ? (item[f.name] ? "Oui" : "Non") : String(item[f.name] ?? "")}
                  </td>
                ))}
                <td>
                  <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => handleEdit(item)}>
                    Modifier
                  </button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(item.id)}>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr><td colSpan={fields.length + 1} className="text-center text-muted py-4">Aucun élément</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
