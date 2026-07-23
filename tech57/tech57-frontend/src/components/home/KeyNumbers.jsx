import { motion } from "framer-motion"
import { Users, GraduationCap, Briefcase, BookOpen } from "lucide-react"
import AnimatedCounter from "./AnimatedCounter"

const numbers = [
  { icon: Users, value: 80, suffix: "+", label: "Clients" },
  { icon: GraduationCap, value: 1500, suffix: "+", label: "Étudiants" },
  { icon: Briefcase, value: 200, suffix: "+", label: "Projets" },
  { icon: BookOpen, value: 300, suffix: "+", label: "Formations" },
]

export default function KeyNumbers() {
  return (
    <section className="py-20 bg-gradient-to-br from-tech57-900 via-tech57-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Tech57 en chiffres
          </h2>
          <p className="text-slate-400 mt-3 text-lg">
            Des résultats concrets qui parlent d'eux-mêmes
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {numbers.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-tech57-500/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-tech57-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <AnimatedCounter end={item.value} suffix={item.suffix} />
                </div>
                <div className="text-sm text-slate-400">{item.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
