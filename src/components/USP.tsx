import { motion } from "motion/react";
import { ShieldCheck, Clock, Users, Banknote } from "lucide-react";

const usps = [
  {
    icon: Users,
    title: "Konsultasi & Survey Gratis",
    description: "Kami siap datang ke lokasi Anda untuk survey dan konsultasi tanpa biaya."
  },
  {
    icon: Banknote,
    title: "Desain Sesuai Budget",
    description: "Solusi taman indah yang tetap ramah di kantong sesuai anggaran Anda."
  },
  {
    icon: ShieldCheck,
    title: "Tim Profesional",
    description: "Dikerjakan oleh tenaga ahli berpengalaman di bidang landscape."
  },
  {
    icon: Clock,
    title: "Rapi & Tepat Waktu",
    description: "Komitmen kami adalah memberikan hasil terbaik dengan jadwal yang presisi."
  }
];

export default function USP() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center space-y-4"
            >
              <div className="mx-auto w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                <usp.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold">{usp.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
