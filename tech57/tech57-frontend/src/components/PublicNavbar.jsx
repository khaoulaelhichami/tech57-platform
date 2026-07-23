import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projets", to: "/projets" },
  { label: "Équipe", to: "/equipe" },
  { label: "Contact", to: "/contact" },
]

export default function PublicNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const bgClass = scrolled || !isHome
    ? "bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
    : "bg-transparent"

  const textClass = scrolled || !isHome ? "text-slate-700" : "text-white/90"
  const brandClass = scrolled || !isHome ? "text-tech57-600" : "text-white"

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className={`text-xl font-bold tracking-tight transition-colors ${brandClass}`}
          >
            Tech57
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.to
                    ? scrolled || !isHome
                      ? "text-tech57-600 bg-tech57-50"
                      : "text-white bg-white/10"
                    : `${textClass} hover:${scrolled || !isHome ? "bg-slate-100" : "bg-white/10"}`
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/demande-stage"
              className={`ml-2 px-4 py-2 text-sm font-semibold rounded-xl transition-colors ${
                scrolled || !isHome
                  ? "bg-tech57-500 text-white hover:bg-tech57-600 shadow-sm"
                  : "bg-white text-tech57-600 hover:bg-tech57-50"
              }`}
            >
              Demander un stage
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled || !isHome ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-3 py-2 text-sm font-medium rounded-lg ${
                  location.pathname === link.to
                    ? "text-tech57-600 bg-tech57-50"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/demande-stage"
              className="block px-3 py-2 text-sm font-semibold text-white bg-tech57-500 rounded-lg hover:bg-tech57-600 text-center mt-3"
            >
              Demander un stage
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
