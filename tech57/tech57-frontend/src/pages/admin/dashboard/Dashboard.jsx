import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import api from "../../../api/axios";

const COLORS = ["#4FA8D8", "#6C7A89", "#F4A261", "#2A9D8F", "#E76F51", "#8D99AE", "#264653"];

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get("/admin/dashboard/stats").then((res) => setStats(res.data));
  }, []);

  if (!stats) return <p>Chargement du tableau de bord...</p>;

  const dataStatut = Object.entries(stats.demandesParStatut)
    .filter(([, v]) => v > 0)
    .map(([name, value]) => ({ name, value }));

  const dataDomaine = Object.entries(stats.demandesParDomaine)
    .map(([name, value]) => ({ name, value }));

  return (
    <div>
      <h3 className="mb-4">Tableau de bord</h3>

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="text-muted small">Total des demandes</div>
              <div className="fs-2 fw-bold text-tech57">{stats.totalDemandes}</div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="text-muted small">Stagiaires actifs</div>
              <div className="fs-2 fw-bold text-tech57">{stats.stagiairesActifs}</div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="text-muted small">Demandes acceptées</div>
              <div className="fs-2 fw-bold text-tech57">{stats.demandesParStatut.ACCEPTEE || 0}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h6>Répartition par statut</h6>
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie data={dataStatut} dataKey="value" nameKey="name" outerRadius={90} label>
                    {dataStatut.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h6>Répartition par domaine</h6>
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie data={dataDomaine} dataKey="value" nameKey="name" outerRadius={90} label>
                    {dataDomaine.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
