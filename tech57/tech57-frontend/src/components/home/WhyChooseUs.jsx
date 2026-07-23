import { motion } from "framer-motion"
import {
  Award, Lightbulb, Settings, HeadphonesIcon, Cpu, Shield,
} from "lucide-react"
import SectionHeading from "./SectionHeading"

const advantages = [
  {
    icon: Award,
    title: "Experts qualifiés",
    description: "Une équipe de professionnels certifiés et expérimentés dans les technologies les plus récentes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Des solutions créatives et avant-gardistes pour vous démarquer dans un marché compétitif.",
  },
  {
    icon: Settings,
    title: "Solutions personnalisées",
    description: "Chaque projet est unique. Nous concevons des solutions sur mesure adaptées à vos besoins.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support continu",
    description: "Un accompagnement permanent avant, pendant et après la réalisation de vos projets.",
  },
  {
    icon: Cpu,
    title: "Technologies modernes",
    description: "Nous utilisons les frameworks et outils les plus performants du marché.",
  },
  {
    icon: Shield,
    title: "Qualité garantie",
    description: "Des processus rigoureux et des normes de qualité élevées pour des résultats exceptionnels.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Pourquoi nous choisir"
          title="Ce qui fait notre différence"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl hover:bg-tech57-50/50 transition-colors"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-tech57-50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-tech57-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
