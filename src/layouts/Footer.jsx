import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

const footerLinks = {
  "Quick Links": [
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ],
  "Get Involved": [
    { name: "Donate", path: "/donate" },
    { name: "Volunteer", path: "/volunteer" },
    { name: "Partner With Us", path: "/contact" },
    { name: "Annual Reports", path: "/reports" },
  ],
  "Programs": [
    { name: "Autism Rehabilitation", path: "/programs/ifra" },
    { name: "Hearing Support", path: "/programs/hearing" },
    { name: "Al-Masoom Center", path: "/programs/al-masoom" },
    { name: "IRADA Program", path: "/programs/irada" },
  ],
};

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
};

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Stay Updated</h3>
              <p className="text-primary-100 mt-1">Subscribe to receive news about our programs and impact.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
              />
              <button className="px-6 py-3 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-colors flex items-center gap-2 cursor-pointer">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center font-bold text-lg text-white">
                AL
              </div>
              <span className="text-xl font-bold text-white">{siteConfig.name}</span>
            </Link>
            <p className="text-neutral-400 leading-relaxed mb-6 max-w-sm">
              {siteConfig.description}
            </p>
            <div className="space-y-3 text-neutral-400">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-primary-400 transition-colors">
                <Mail className="w-4 h-4 text-primary-500" />
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 hover:text-primary-400 transition-colors">
                <Phone className="w-4 h-4 text-primary-500" />
                {siteConfig.phone}
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary-500 shrink-0" />
                {siteConfig.address}
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {Object.entries(siteConfig.social).map(([platform, url]) => {
              const Icon = socialIcons[platform];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary-600 hover:text-white transition-all duration-200"
                  aria-label={platform}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
          <p className="text-neutral-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for humanity
          </p>
        </div>
      </div>
    </footer>
  );
}
