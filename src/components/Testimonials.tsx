import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Bapak Andi",
    location: "Sleman, Jogja",
    text: "Sangat puas dengan hasil taman minimalisnya. Pengerjaannya rapi dan timnya sangat komunikatif. Rekomendasi banget!"
  },
  {
    name: "Ibu Maya",
    location: "Bantul, Jogja",
    text: "Kolam koi buatan Zena Florist bikin suasana rumah jadi tenang. Desainnya elegan dan perawatannya mudah."
  },
  {
    name: "Bapak Rizky",
    location: "Kota Jogja",
    text: "Vertical garden di kantor kami jadi pusat perhatian tamu. Terima kasih Zena Florist atas solusinya!"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Testimoni</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
            Apa Kata Klien Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-accent/20" />
              <p className="text-muted-foreground italic mb-6">"{t.text}"</p>
              <div>
                <p className="font-bold text-primary">{t.name}</p>
                <p className="text-xs text-accent uppercase tracking-wider">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
