import ContenuManager from "../../../components/admin/ContenuManager";

export default function Clients() {
  return (
    <ContenuManager
      title="Gestion des clients"
      endpoint="/admin/contenu/clients"
      fields={[
        { name: "nom", label: "Nom" },
        { name: "logo", label: "Logo (URL)" },
        { name: "actif", label: "Actif", type: "checkbox" },
      ]}
      emptyItem={{ nom: "", logo: "", actif: true }}
    />
  );
}
