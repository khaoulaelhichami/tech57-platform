import ContenuManager from "../../../components/admin/ContenuManager";

// Permet a l'admin de configurer, sans intervention technique,
// la liste des pieces demandees dans le formulaire de demande de stage
export default function PiecesRequises() {
  return (
    <ContenuManager
      title="Pièces requises pour la demande de stage"
      endpoint="/admin/contenu/pieces-requises"
      fields={[
        { name: "nom", label: "Nom de la pièce" },
        { name: "obligatoire", label: "Obligatoire", type: "checkbox" },
        { name: "active", label: "Active", type: "checkbox" },
      ]}
      emptyItem={{ nom: "", obligatoire: true, active: true }}
    />
  );
}
