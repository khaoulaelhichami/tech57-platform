import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Globe, Play, MessageCircle } from "lucide-react"

const quickLinks = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/#about" },
  { label: "Services", to: "/services" },
  { label: "Projets", to: "/projets" },
  { label: "Équipe", to: "/equipe" },
  { label: "Contact", to: "/contact" },
]

const services = [
  "Robotique & IT",
  "Transformation Digitale",
  "Formations IT & Design",
  "Développement Web & Mobile",
  "IA & Data",
  "Conseil Technologique",
]

const socialLinks = [
  { icon: Globe, href: "#", label: "Site web" },
  { icon: MessageCircle, href: "#", label: "Messagerie" },
  { icon: Play, href: "#", label: "Chaîne vidéo" },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-2xl font-bold text-white mb-4">Tech57</div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Accompagnement technologique, formation et digitalisation.
              Nous façonnons l'avenir du numérique.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-tech57-500 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Liens rapides
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 hover:text-tech57-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-slate-400">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Coordonnées
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-slate-500" />
                <span className="text-sm text-slate-400">
                  Maroc
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-slate-500" />
                <a href="tel:+212600000000" className="text-sm text-slate-400 hover:text-tech57-400 transition-colors">
                  +212 6 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-slate-500" />
                <a href="mailto:contact@tech57.com" className="text-sm text-slate-400 hover:text-tech57-400 transition-colors">
                  contact@tech57.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Tech57. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="#" className="hover:text-tech57-400 transition-colors">
              Mentions légales
            </Link>
            <Link to="#" className="hover:text-tech57-400 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
