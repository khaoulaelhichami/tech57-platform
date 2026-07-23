import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import AnimatedCounter from "./AnimatedCounter"

const stats = [
  { value: 1500, suffix: "+", label: "Étudiants accompagnés" },
  { value: 80, suffix: "+", label: "Entreprises accompagnées" },
  { value: 200, suffix: "+", label: "Formations réalisées" },
  { value: 98, suffix: "%", label: "Taux de satisfaction" },
]

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-tech57-950 to-slate-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tech57-500 rounded-full blur-[128px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-tech57-500/10 border border-tech57-500/20 rounded-full text-tech57-300 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-tech57-400 rounded-full animate-pulse" />
              Innovation Technologique
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Façonner l'avenir du{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech57-400 to-accent">
                numérique
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Tech57 accompagne les talents et les entreprises dans leur transformation digitale
              avec des solutions innovantes en robotique, IA et développement technologique.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("services")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-tech57-500 hover:bg-tech57-600 text-white font-semibold rounded-xl shadow-lg shadow-tech57-500/25 transition-colors"
              >
                Découvrir nos services
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-slate-500 text-slate-200 font-semibold rounded-xl transition-colors hover:bg-white/5"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="relative z-10 bg-gradient-to-br from-tech57-500/10 to-accent/10 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-square rounded-2xl bg-slate-800/50 border border-slate-700/30 flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-tech57-400/20 to-accent/20 border border-tech57-500/10 animate-pulse`} style={{ animationDelay: `${i * 0.15}s` }} />
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <div className="flex-1 h-3 rounded-full bg-slate-700/50" />
                  <div className="flex-1 h-3 rounded-full bg-tech57-500/30" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-slate-700/30 rounded-3xl -z-10" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs md:text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  )
}
