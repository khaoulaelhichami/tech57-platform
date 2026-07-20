import ContenuManager from "../../../components/admin/ContenuManager";

export default function Partenaires() {
  return (
    <ContenuManager
      title="Gestion des partenaires"
      endpoint="/admin/contenu/partenaires"
      fields={[
        { name: "nom", label: "Nom" },
        { name: "logo", label: "Logo (URL)" },
        { name: "actif", label: "Actif", type: "checkbox" },
      ]}
      emptyItem={{ nom: "", logo: "", actif: true }}
    />
  );
}
