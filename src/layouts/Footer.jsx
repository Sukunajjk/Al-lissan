import { Link } from 'react-router-dom';
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
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900">
      {/* Newsletter */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-primary-600 rounded-2xl px-8 py-10 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Stay Connected</h3>
              <p className="text-sm text-white/70">Get updates on our programs and impact stories.</p>
            </div>
            <div className="flex w-full md:w-auto rounded-xl overflow-hidden bg-white/10">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-5 py-3 bg-transparent text-white text-sm placeholder:text-white/40 focus:outline-none"
              />
              <button className="px-6 py-3 bg-white text-primary-700 font-bold text-sm hover:bg-neutral-100 transition-colors flex items-center gap-2 cursor-pointer shrink-0">
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
