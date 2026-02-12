import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { siteConfig } from '../data/siteData';

const footerLinks = {
  programs: [
    { name: "Autism Rehabilitation", path: "/programs/ifra" },
    { name: "Hearing Support", path: "/programs/hearing" },
    { name: "Intellectual Development", path: "/programs/al-masoom" },
    { name: "IRADA Program", path: "/programs/irada" },
    { name: "Psychological Clinic", path: "/programs/dar-ul-sakoon" },
  ],
  organization: [
    { name: "About Us", path: "/about" },
    { name: "Vision & Mission", path: "/vision-mission" },
    { name: "Leadership", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    { name: "Annual Reports", path: "/reports" },
  ],
  connect: [
    { name: "Contact Us", path: "/contact" },
    { name: "Latest News", path: "/news" },
    { name: "Programs", path: "/programs" },
  ],
};

const socials = [
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook", hoverColor: "hover:bg-blue-600" },
  { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter", hoverColor: "hover:bg-sky-500" },
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram", hoverColor: "hover:bg-pink-600" },
  { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube", hoverColor: "hover:bg-red-600" },
];

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-600/3 rounded-full blur-[150px]" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-accent-500/2 rounded-full blur-[120px]" />
      </div>

      <div className="relative">
        {/* Newsletter strip */}
        <div className="border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Stay Connected</h3>
                <p className="text-sm text-white/30">Get updates on our programs and impact stories.</p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-72 px-5 py-3 bg-white/5 border border-white/10 rounded-l-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary-500/50 transition-colors"
                />
                <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm rounded-r-xl transition-colors flex items-center gap-2 cursor-pointer shrink-0">
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Link to="/" className="flex items-center gap-2.5 mb-6">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center font-bold text-sm text-white">
                  AL
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-white tracking-tight leading-none">Al-Lissan</span>
                  <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-primary-400 leading-none mt-1">Since 1996</span>
                </div>
              </Link>
              <p className="text-sm text-white/30 leading-relaxed mb-6 max-w-xs">
                Tanzeem Al-Lissan is dedicated to empowering special children through comprehensive rehabilitation, education, and community integration.
              </p>
              <div className="space-y-3">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-sm text-white/30 hover:text-primary-400 transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  {siteConfig.phone}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-white/30 hover:text-primary-400 transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  {siteConfig.email}
                </a>
                <span className="flex items-center gap-3 text-sm text-white/30">
                  <MapPin className="w-4 h-4 shrink-0" />
                  {siteConfig.address}
                </span>
              </div>
            </div>

            {/* Programs */}
            <div className="lg:col-span-3">
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 mb-6">Programs</h4>
              <ul className="space-y-3">
                {footerLinks.programs.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm text-white/30 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Organization */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 mb-6">Organization</h4>
              <ul className="space-y-3">
                {footerLinks.organization.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm text-white/30 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="lg:col-span-3">
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 mb-6">Connect</h4>
              <ul className="space-y-3 mb-8">
                {footerLinks.connect.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm text-white/30 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social */}
              <div className="flex gap-2">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-white/30 hover:text-white ${social.hoverColor} transition-all duration-300`}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[12px] text-white/20 flex items-center gap-1">
                &copy; {new Date().getFullYear()} Tanzeem Al-Lissan. Made with <Heart className="w-3 h-3 text-red-500 inline" /> in Pakistan.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-[12px] text-white/20 hover:text-white/40 transition-colors">Privacy Policy</a>
                <a href="#" className="text-[12px] text-white/20 hover:text-white/40 transition-colors">Terms of Use</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
