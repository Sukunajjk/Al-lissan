import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { navLinks } from '../data/siteData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;
  const isChildActive = (link) => link.children?.some((c) => location.pathname === c.path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-[72px]' : 'h-24'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 shrink-0 group">
            <div className={`relative transition-all duration-500 ease-in-out ${scrolled ? 'w-14 h-14' : 'w-20 h-20'}`}>
                <img 
                    src={import.meta.env.BASE_URL + "logo.png"} 
                    alt="Tanzeem Al-Lissan Logo" 
                    className="w-full h-full object-contain drop-shadow-sm"
                />
            </div>
            <div className="flex flex-col justify-center">
              <span className={`font-bold tracking-tight leading-none transition-all duration-500 ${scrolled ? 'text-neutral-900 text-xl' : 'text-white text-2xl'}`}>
                Al-Lissan
              </span>
              <span className={`font-semibold tracking-[0.2em] uppercase leading-none mt-1.5 transition-colors duration-500 ${scrolled ? 'text-primary-600 text-[10px]' : 'text-primary-300 text-[11px]'}`}>
                Since 1996
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 text-[13px] font-medium transition-all duration-300 rounded-lg flex items-center gap-1 ${
                    isActive(link.path) || isChildActive(link)
                      ? scrolled ? 'text-primary-700 bg-primary-50' : 'text-white bg-white/10'
                      : scrolled ? 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50' : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                  {link.children && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                <AnimatePresence>
                  {link.children && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[280px] bg-white rounded-xl border border-neutral-200/80 shadow-xl shadow-neutral-900/10 overflow-hidden p-1.5"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className={`block px-4 py-3 text-[13px] rounded-lg transition-all duration-200 ${
                            isActive(child.path)
                              ? 'bg-primary-50 text-primary-700 font-semibold'
                              : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                          }`}
                        >
                          <span className="font-medium">{child.name}</span>
                          {child.desc && (
                            <span className="block text-[11px] text-neutral-400 mt-0.5">{child.desc}</span>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold rounded-xl transition-all duration-300 ${
                scrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm shadow-primary-600/20'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              Get in Touch
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
              scrolled ? 'text-neutral-700 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[72px] bg-black/30 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden absolute top-full left-3 right-3 bg-white rounded-2xl border border-neutral-200/80 shadow-2xl shadow-neutral-900/10 overflow-hidden"
            >
              <div className="p-3 max-h-[75vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <div className="flex items-center">
                      <Link
                        to={link.path}
                        className={`flex-1 px-4 py-3 text-[15px] font-medium transition-colors rounded-lg ${
                          isActive(link.path) ? 'text-primary-600 bg-primary-50' : 'text-neutral-700 hover:bg-neutral-50'
                        }`}
                      >
                        {link.name}
                      </Link>
                      {link.children && (
                        <button
                          onClick={() => setMobileDropdown(mobileDropdown === link.name ? null : link.name)}
                          className="p-3 text-neutral-400 cursor-pointer rounded-lg hover:bg-neutral-50"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileDropdown === link.name ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {link.children && mobileDropdown === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 pl-4 border-l-2 border-primary-200 pb-2 space-y-0.5">
                            {link.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.path}
                                className={`block px-3 py-2.5 text-sm rounded-lg transition-colors ${
                                  isActive(child.path) ? 'text-primary-600 font-medium bg-primary-50' : 'text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50'
                                }`}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="pt-3 mt-2 border-t border-neutral-100">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-primary-600 text-white font-semibold text-sm rounded-xl hover:bg-primary-700 transition-colors"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
