import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PORTFOLIO_DATA } from "@/src/constants";
import { Badge } from "@/components/ui/badge";

const categories = ["Semua", "Minimalis", "Tropis", "Vertical Garden", "Kolam Hias", "Hardscape"];

export default function Portfolio() {
  const [filter, setFilter] = useState("Semua");

  const filteredProjects = filter === "Semua" 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Portofolio</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
            Proyek Pilihan Kami
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === cat 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Masonry-style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <Badge className="w-fit mb-2 bg-accent text-accent-foreground border-none">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-serif font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-white/80 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
