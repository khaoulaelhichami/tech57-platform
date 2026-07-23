import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import SectionHeading from "./SectionHeading"

const testimonials = [
  {
    name: "Fatima Zahra",
    role: "Directrice RH, Groupe ABC",
    content: "Tech57 a transformé notre système d'information. Leur expertise et leur professionnalisme ont dépassé nos attentes. Un partenaire de confiance pour notre transformation digitale.",
    rating: 5,
  },
  {
    name: "Mohammed Ali",
    role: "Étudiant, cycle ingénieur",
    content: "Grâce à l'accompagnement de Tech57, j'ai pu me former aux technologies robotiques et décrocher un stage dans une entreprise de premier plan.",
    rating: 5,
  },
  {
    name: "Sara Benali",
    role: "CEO, StartUp Innov",
    content: "Leur approche personnalisée et leur réactivité sont remarquables. Nous avons développé notre application mobile en un temps record avec une qualité exceptionnelle.",
    rating: 5,
  },
  {
    name: "Youssef El Amrani",
    role: "Responsable Formation, Université",
    content: "Un programme de formation bien structuré avec des formateurs passionnés. Nos étudiants sont ravis des compétences acquises en développement web et IA.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Témoignages"
          title="Ce que disent nos clients"
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-surface rounded-3xl p-8 md:p-12 border border-slate-100"
              >
                <Quote className="w-10 h-10 text-tech57-200 mb-6" />
                <p className="text-lg text-slate-700 leading-relaxed mb-8 italic">
                  "{testimonials[current].content}"
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonials[current].name}</div>
                  <div className="text-sm text-slate-500">{testimonials[current].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-slate-300 hover:border-tech57-300 flex items-center justify-center text-slate-500 hover:text-tech57-500 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-tech57-500 w-6" : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-slate-300 hover:border-tech57-300 flex items-center justify-center text-slate-500 hover:text-tech57-500 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
