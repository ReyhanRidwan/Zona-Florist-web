import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/src/constants";

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight"
          >
            Wujudkan Taman Impian Anda Sekarang Bersama Zena Florist
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg"
          >
            Konsultasikan kebutuhan landscape Anda secara gratis. Tim kami siap memberikan solusi terbaik untuk hunian Anda.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 py-7 text-lg font-bold shadow-xl"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-3 h-6 w-6" />
                Chat WhatsApp Sekarang
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
