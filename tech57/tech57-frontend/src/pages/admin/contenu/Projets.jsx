import ContenuManager from "../../../components/admin/ContenuManager";

export default function Projets() {
  return (
    <ContenuManager
      title="Gestion des projets / réalisations"
      endpoint="/admin/contenu/projets"
      fields={[
        { name: "titre", label: "Titre" },
        { name: "description", label: "Description" },
        { name: "image", label: "Image (URL)" },
        { name: "datePublication", label: "Date", type: "date" },
        { name: "actif", label: "Actif", type: "checkbox" },
      ]}
      emptyItem={{ titre: "", description: "", image: "", datePublication: "", actif: true }}
    />
  );
}
