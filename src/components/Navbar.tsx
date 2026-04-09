import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Phone, Flower2 } from "lucide-react";
import { IMAGES, WHATSAPP_LINK } from "@/src/constants";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Tentang", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Portofolio", href: "#portfolio" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/90 py-3 shadow-md backdrop-blur-md" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#" className="flex items-center space-x-3">
          {!logoError ? (
            <img 
              src={IMAGES.LOGO} 
              alt="Zena Florist Logo" 
              className="h-10 w-10 rounded-full object-cover" 
              referrerPolicy="no-referrer"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <Flower2 className="h-6 w-6 text-white" />
            </div>
          )}
          <span className={`text-xl font-serif font-bold ${isScrolled ? "text-primary" : "text-white"}`}>
            Zena Florist
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-4 w-4" />
              Konsultasi Gratis
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 top-full w-full bg-white p-6 shadow-xl md:hidden"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-foreground hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="w-full bg-primary text-white rounded-full">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                Konsultasi Gratis
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
