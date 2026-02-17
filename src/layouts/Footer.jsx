import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { siteConfig } from '../data/siteData';

const footerLinks = {
  programs: [
    { name: "Autism Rehabilitation", path: "/programs/ifra" },
    { name: "Hearing Support", path: "/programs/danish-center" }, // Updated path to match new ID
    { name: "Intellectual Development", path: "/programs/al-masoom" },
    { name: "Physiotherapy", path: "/programs/physiotherapy" }, // Updated
    { name: "Vocational Training", path: "/programs/vocational" }, // Updated
  ],
  organization: [
    { name: "About Us", path: "/about" },
    { name: "Vision & Mission", path: "/vision-mission" },
    { name: "Leadership", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    // Removed Annual Reports
  ],
  connect: [
    { name: "Contact Us", path: "/contact" },
    { name: "Latest News", path: "/news" },
    { name: "Programs", path: "/programs" },
  ],
};

const socials = [
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900">
      {/* Trust/Stats Bar */}
      <div className="border-b border-white/5 bg-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p className="text-white font-serif text-lg italic">"Serving humanity with compassion & dedication."</p>
            </div>
            <div className="flex items-center gap-8 md:gap-12 text-white/80">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">1996</span>
                    <span className="text-[10px] uppercase tracking-wider text-primary-400">Established</span>
                </div>
                <div className="w-px h-8 bg-white/10 hidden md:block"></div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">28+</span>
                    <span className="text-[10px] uppercase tracking-wider text-primary-400">Years Serving</span>
                </div>
                <div className="w-px h-8 bg-white/10 hidden md:block"></div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">5k+</span>
                    <span className="text-[10px] uppercase tracking-wider text-primary-400">Lives Impacted</span>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center font-bold text-xs text-white">
                AL
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-white tracking-tight leading-none">Al-Lissan</span>
                <span className="text-[9px] font-semibold tracking-[0.15em] uppercase text-primary-400 leading-none mt-1">Since 1996</span>
              </div>
            </Link>
            <p className="text-sm text-white/30 leading-relaxed mb-6 max-w-xs">
              Tanzeem Al-Lissan is dedicated to empowering special children through comprehensive rehabilitation, education, and community integration.
            </p>
            <div className="space-y-3">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-sm text-white/40 hover:text-primary-400 transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-white/40 hover:text-primary-400 transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                {siteConfig.email}
              </a>
              <span className="flex items-center gap-3 text-sm text-white/40">
                <MapPin className="w-4 h-4 shrink-0" />
                {siteConfig.address}
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white/50 mb-5">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-white/30 hover:text-primary-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white/50 mb-5">Organization</h4>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-white/30 hover:text-primary-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white/50 mb-5">Connect</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-white/30 hover:text-primary-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>

            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-600 flex items-center justify-center text-white/30 hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/20 flex items-center gap-1">
              &copy; {new Date().getFullYear()} Tanzeem Al-Lissan. Made with <Heart className="w-3 h-3 text-red-500 inline" /> in Pakistan.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">Privacy</a>
              <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
