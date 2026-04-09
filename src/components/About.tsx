import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { IMAGES } from "@/src/constants";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={IMAGES.ABOUT}
                alt="Tentang Zena Florist"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-2xl shadow-xl hidden lg:block">
              <p className="text-4xl font-serif font-bold text-white">10+</p>
              <p className="text-white/80 text-sm">Tahun Pengalaman</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <span className="text-accent font-medium tracking-widest uppercase text-sm">Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                Ahli Landscape & Taman Profesional di Jogja
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Zena Florist adalah penyedia jasa landscape taman terpercaya yang berdedikasi untuk menghadirkan keindahan alam ke dalam lingkungan Anda. Kami melayani jasa desain, pembuatan, hingga perawatan taman dengan sentuhan seni dan profesionalisme tinggi.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Setiap proyek kami kerjakan dengan teliti, menggunakan material berkualitas, dan dapat disesuaikan sepenuhnya (custom) dengan budget serta keinginan klien.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Jasa Desain Taman",
                "Pembuatan Taman",
                "Perawatan Taman",
                "Custom Sesuai Kebutuhan",
                "Pengerjaan Profesional",
                "Tim Berpengalaman"
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
