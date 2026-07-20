import ContenuManager from "../../../components/admin/ContenuManager";

export default function Membres() {
  return (
    <ContenuManager
      title="Gestion des membres de l'équipe"
      endpoint="/admin/contenu/membres"
      fields={[
        { name: "nom", label: "Nom" },
        { name: "prenom", label: "Prénom" },
        { name: "poste", label: "Poste" },
        { name: "photo", label: "Photo (URL)" },
        { name: "bio", label: "Bio" },
        { name: "ordre", label: "Ordre", type: "number" },
        { name: "actif", label: "Actif", type: "checkbox" },
      ]}
      emptyItem={{ nom: "", prenom: "", poste: "", photo: "", bio: "", ordre: 0, actif: true }}
    />
  );
}
