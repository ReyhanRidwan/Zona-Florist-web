import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Konsultasi via WhatsApp",
    description: "Hubungi kami untuk mendiskusikan kebutuhan taman Anda."
  },
  {
    number: "02",
    title: "Survey Lokasi",
    description: "Tim kami akan datang untuk mengukur dan melihat kondisi lahan."
  },
  {
    number: "03",
    title: "Desain & Penawaran",
    description: "Kami buatkan konsep desain dan rincian biaya yang transparan."
  },
  {
    number: "04",
    title: "Pengerjaan",
    description: "Proses pembuatan taman dilakukan oleh tim profesional kami."
  },
  {
    number: "05",
    title: "Finishing & Maintenance",
    description: "Serah terima hasil akhir dan panduan perawatan taman."
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Cara Kerja</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
            Langkah Mudah Memiliki Taman Impian
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted hidden lg:block -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-muted text-center group hover:border-accent transition-colors"
              >
                <span className="text-4xl font-serif font-bold text-accent/20 group-hover:text-accent transition-colors block mb-4">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
