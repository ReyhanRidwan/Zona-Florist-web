import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES_DATA } from "@/src/constants";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Layanan Kami</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
            Solusi Lengkap Untuk Taman Anda
          </h2>
          <p className="text-muted-foreground">
            Kami menawarkan berbagai pilihan layanan landscape untuk mempercantik hunian, kantor, maupun area komersial Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group h-full">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
