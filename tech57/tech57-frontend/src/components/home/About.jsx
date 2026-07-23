import { motion } from "framer-motion"
import { Lightbulb, Users, Cog, TrendingUp } from "lucide-react"
import SectionHeading from "./SectionHeading"

const highlights = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous plaçons l'innovation au cœur de chaque projet pour des solutions à la pointe de la technologie.",
  },
  {
    icon: Users,
    title: "Expertise",
    description: "Une équipe de professionnels passionnés aux compétences variées en IT, robotique et design.",
  },
  {
    icon: Cog,
    title: "Accompagnement",
    description: "Un suivi personnalisé pour chaque talent et chaque entreprise, de l'idée à la réalisation.",
  },
  {
    icon: TrendingUp,
    title: "Transformation Digitale",
    description: "Des solutions sur mesure pour accélérer votre transformation numérique et digitale.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="À propos"
          title="Votre partenaire technologique de confiance"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Tech57 est née de la volonté de rendre la technologie accessible à tous.
              Nous accompagnons les étudiants, les professionnels et les entreprises
              dans leur parcours de transformation digitale.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              De la formation en robotique au développement de solutions logicielles
              sur mesure, notre équipe d'experts met son savoir-faire au service de
              votre réussite.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Robotique", "IA", "Web", "Design", "Cloud", "IoT"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-tech57-50 text-tech57-600 text-sm font-medium rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-tech57-100 to-accent/20 border border-tech57-200/50 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-tech57-500/20">Tech57</div>
                  <div className="mt-4 grid grid-cols-2 gap-3 max-w-xs mx-auto">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-20 rounded-xl bg-white/60 backdrop-blur-sm border border-tech57-200/30 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-lg bg-tech57-500/10" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-tech57-500/5 rounded-3xl -z-10" />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group p-6 rounded-2xl border border-slate-200 hover:border-tech57-200 hover:shadow-lg hover:shadow-tech57-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-tech57-50 group-hover:bg-tech57-100 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-tech57-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
