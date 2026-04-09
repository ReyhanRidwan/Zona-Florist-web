import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMAGES, WHATSAPP_LINK } from "@/src/constants";

const slides = [
  {
    id: 1,
    image: IMAGES.HERO_1,
    subtitle: "Landscape Expert",
    heading: "Wujudkan Taman Impian Anda",
    description: "Solusi desain dan pembuatan taman profesional untuk hunian modern.",
  },
  {
    id: 2,
    image: IMAGES.HERO_2,
    subtitle: "Water Features",
    heading: "Keindahan Kolam Koi & Air Mancur",
    description: "Hadirkan ketenangan suara air di halaman rumah Anda.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="container relative mx-auto h-full px-6">
            <div className="grid h-full grid-cols-1 md:grid-cols-2">
              {/* Left Column Empty */}
              <div className="hidden md:block" />

              {/* Right Column Content */}
              <div className="flex flex-col justify-center text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="space-y-4 md:pl-12"
                >
                  <span className="inline-block text-sm font-medium tracking-widest text-accent uppercase">
                    {slides[current].subtitle}
                  </span>
                  <h1 className="text-4xl font-serif font-bold text-white md:text-6xl leading-tight">
                    {slides[current].heading}
                  </h1>
                  <p className="max-w-md text-lg text-white/80">
                    {slides[current].description}
                  </p>
                  <div className="pt-4">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
                      onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Lihat Layanan
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 z-20 flex items-center">
        <button
          onClick={prev}
          className="rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 z-20 flex items-center">
        <button
          onClick={next}
          className="rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              current === i ? "w-8 bg-accent" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
