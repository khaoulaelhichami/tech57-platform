import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"

const partners = [
  "Partner 1", "Partner 2", "Partner 3", "Partner 4",
  "Partner 5", "Partner 6", "Partner 7", "Partner 8",
]

export default function Partners() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Nos partenaires"
          title="Ils nous font confiance"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden"
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 items-center"
          >
            {[...partners, ...partners].map((name, i) => (
              <div
                key={i}
                className="shrink-0 h-16 w-40 rounded-xl bg-white border border-slate-200 flex items-center justify-center px-6"
              >
                <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                  {name}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
