import { motion } from "framer-motion"

export default function SectionHeading({ subtitle, title, centered = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-16`}
    >
      {subtitle && (
        <span className="inline-block text-tech57-500 font-semibold text-sm tracking-widest uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
        {title}
      </h2>
    </motion.div>
  )
}
