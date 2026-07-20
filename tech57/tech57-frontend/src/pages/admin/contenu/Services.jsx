import ContenuManager from "../../../components/admin/ContenuManager";

export default function Services() {
  return (
    <ContenuManager
      title="Gestion des services"
      endpoint="/admin/contenu/services"
      fields={[
        { name: "titre", label: "Titre" },
        { name: "description", label: "Description" },
        { name: "icone", label: "Icône" },
        { name: "ordre", label: "Ordre", type: "number" },
        { name: "actif", label: "Actif", type: "checkbox" },
      ]}
      emptyItem={{ titre: "", description: "", icone: "", ordre: 0, actif: true }}
    />
  );
}
