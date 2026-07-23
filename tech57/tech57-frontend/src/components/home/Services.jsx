import { motion } from "framer-motion"
import {
  Cpu, Building2, GraduationCap, Briefcase, Globe, Brain, ShieldCheck,
} from "lucide-react"
import { Link } from "react-router-dom"
import SectionHeading from "./SectionHeading"

const services = [
  {
    icon: Cpu,
    title: "Robotique & IT",
    description: "Accompagnement des élèves et étudiants dans les domaines de la robotique et des technologies de l'information.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Building2,
    title: "Transformation Digitale",
    description: "Accompagnement des entreprises dans leur transition numérique avec des solutions adaptées.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: GraduationCap,
    title: "Formations IT & Design",
    description: "Formations en ligne et en présentiel couvrant le développement web, le design et les technologies émergentes.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Briefcase,
    title: "Métiers du Numérique",
    description: "Orientation et accompagnement vers les métiers porteurs du secteur numérique.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Globe,
    title: "Développement Web & Mobile",
    description: "Création d'applications web et mobiles sur mesure, du design à la mise en production.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Brain,
    title: "IA & Data",
    description: "Solutions d'intelligence artificielle et d'analyse de données pour optimiser vos processus.",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: ShieldCheck,
    title: "Conseil Technologique",
    description: "Consulting stratégique pour vous guider dans vos choix technologiques et votre roadmap digitale.",
    color: "from-indigo-500 to-indigo-600",
  },
]

const gradients = [
  "from-blue-500 to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-violet-500 to-purple-500",
  "from-orange-500 to-red-500",
  "from-rose-500 to-pink-500",
  "from-indigo-500 to-blue-500",
  "from-cyan-500 to-blue-500",
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Nos services"
          title="Des solutions complètes pour votre transformation numérique"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:shadow-tech57-500/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[i % gradients.length]} bg-opacity-10 flex items-center justify-center mb-4 shadow-sm`}>
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-sm font-medium text-tech57-500 hover:text-tech57-600 transition-colors"
                >
                  En savoir plus
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
