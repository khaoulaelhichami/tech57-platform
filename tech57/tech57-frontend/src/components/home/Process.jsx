import { motion } from "framer-motion"
import { Search, ClipboardList, Code, Rocket, LifeBuoy } from "lucide-react"
import SectionHeading from "./SectionHeading"

const steps = [
  {
    icon: Search,
    title: "Analyse",
    description: "Compréhension approfondie de vos besoins, de vos objectifs et de votre environnement.",
  },
  {
    icon: ClipboardList,
    title: "Planification",
    description: "Élaboration d'une feuille de route détaillée avec des jalons clairs et mesurables.",
  },
  {
    icon: Code,
    title: "Développement",
    description: "Mise en œuvre des solutions avec les meilleures pratiques et technologies adaptées.",
  },
  {
    icon: Rocket,
    title: "Déploiement",
    description: "Mise en production progressive avec tests rigoureux et validation qualité.",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    description: "Accompagnement continu, maintenance et optimisation post-lancement.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Notre processus"
          title="Comment nous travaillons"
        />

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-tech57-200 via-tech57-300 to-tech57-200 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative lg:flex items-center ${isEven ? "" : "lg:flex-row-reverse"} ${i > 0 ? "lg:mt-[-3rem]" : ""}`}
                >
                  <div className={`lg:w-1/2 ${isEven ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="inline-block bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <span className="text-xs font-bold text-tech57-500 uppercase tracking-wider">
                        Étape {i + 1}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">{step.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>

                  <div className="hidden lg:flex items-center justify-center w-14 h-14 rounded-full bg-tech57-500 text-white shadow-lg shadow-tech57-500/25 z-10 mx-auto shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="lg:w-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
