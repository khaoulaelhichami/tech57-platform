import { motion } from "framer-motion"
import { ArrowRight, Send } from "lucide-react"
import { Link } from "react-router-dom"

export default function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-tech57-600 via-tech57-700 to-tech57-900" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto px-4 text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Prêt à accélérer votre <span className="text-tech57-200">transformation digitale</span> ?
        </h2>
        <p className="text-lg text-tech57-100/80 mb-8 max-w-xl mx-auto">
          Rejoignez les entreprises et talents qui nous font confiance pour construire l'avenir du numérique.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-tech57-600 font-semibold rounded-xl hover:bg-tech57-50 transition-colors shadow-lg shadow-black/10"
          >
            Contactez-nous
            <Send className="w-4 h-4" />
          </Link>
          <Link
            to="/demande-stage"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
          >
            Postuler pour un stage
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
