import { Routes, Route } from "react-router-dom";
import PublicNavbar from "./components/PublicNavbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./components/admin/AdminLayout";

// Pages publiques
import Home from "./pages/public/Home";
import APropos from "./pages/public/APropos";
import Services from "./pages/public/Services";
import Projets from "./pages/public/Projets";
import Clients from "./pages/public/Clients";
import Partenaires from "./pages/public/Partenaires";
import Equipe from "./pages/public/Equipe";
import Contact from "./pages/public/Contact";
import DemandeStage from "./pages/public/DemandeStage";

// Auth admin
import AdminLogin from "./pages/admin/Login";

// Espace admin
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Demandes from "./pages/admin/demandes/Demandes";
import DemandeDetail from "./pages/admin/demandes/DemandeDetail";
import Stagiaires from "./pages/admin/stagiaires/Stagiaires";
import ServicesAdmin from "./pages/admin/contenu/Services";
import ProjetsAdmin from "./pages/admin/contenu/Projets";
import ClientsAdmin from "./pages/admin/contenu/Clients";
import PartenairesAdmin from "./pages/admin/contenu/Partenaires";
import MembresAdmin from "./pages/admin/contenu/Membres";
import Comptes from "./pages/admin/comptes/Comptes";
import PiecesRequises from "./pages/admin/parametres/PiecesRequises";

function PublicLayout({ children }) {
  return (
    <>
      <PublicNavbar />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      {/* --- Site public (vitrine) --- */}
      <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
      <Route path="/a-propos" element={<PublicLayout><APropos /></PublicLayout>} />
      <Route path="/services" element={<PublicLayout><Services /></PublicLayout>} />
      <Route path="/projets" element={<PublicLayout><Projets /></PublicLayout>} />
      <Route path="/clients" element={<PublicLayout><Clients /></PublicLayout>} />
      <Route path="/partenaires" element={<PublicLayout><Partenaires /></PublicLayout>} />
      <Route path="/equipe" element={<PublicLayout><Equipe /></PublicLayout>} />
      <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
      <Route path="/demande-stage" element={<PublicLayout><DemandeStage /></PublicLayout>} />

      {/* --- Authentification admin --- */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* --- Backoffice administrateur (protege) --- */}
      <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="demandes" element={<Demandes />} />
        <Route path="demandes/:id" element={<DemandeDetail />} />
        <Route path="stagiaires" element={<Stagiaires />} />
        <Route path="contenu/services" element={<ServicesAdmin />} />
        <Route path="contenu/projets" element={<ProjetsAdmin />} />
        <Route path="contenu/clients" element={<ClientsAdmin />} />
        <Route path="contenu/partenaires" element={<PartenairesAdmin />} />
        <Route path="contenu/membres" element={<MembresAdmin />} />
        <Route path="comptes" element={<Comptes />} />
        <Route path="parametres/pieces-requises" element={<PiecesRequises />} />
      </Route>
    </Routes>
  );
}
