import { useState } from "react";
import { Instagram, MapPin, Phone, Mail, Flower2 } from "lucide-react";
import { IMAGES, WHATSAPP_NUMBER } from "@/src/constants";

export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-muted pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              {!logoError ? (
                <img 
                  src={IMAGES.LOGO} 
                  alt="Zena Florist" 
                  className="h-10 w-10 rounded-full object-cover" 
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                  <Flower2 className="h-6 w-6 text-white" />
                </div>
              )}
              <span className="text-xl font-serif font-bold text-primary">Zena Florist</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Jasa landscape taman profesional yang menghadirkan keindahan alam ke hunian Anda dengan desain kreatif dan pengerjaan rapi.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/zena_florist_jasatamanjogja/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold text-primary mb-6">Navigasi</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">Tentang Kami</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Layanan</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition-colors">Portofolio</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-bold text-primary mb-6">Layanan</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>Taman Minimalis</li>
              <li>Taman Tropis</li>
              <li>Vertical Garden</li>
              <li>Kolam Koi & Air Mancur</li>
              <li>Gazebo & Hardscape</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold text-primary mb-6">Kontak Kami</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>Yogyakarta & Sekitarnya (Melayani seluruh area Jawa Tengah)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+{WHATSAPP_NUMBER}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>info@zenaflorist.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-top border-muted-foreground/10 pt-8 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Zena Florist. All rights reserved. Designed for Professional Landscape Services.</p>
        </div>
      </div>
    </footer>
  );
}
