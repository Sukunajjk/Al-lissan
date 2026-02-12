import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { navLinks } from '../data/siteData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

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

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;
  const isChildActive = (link) => link.children?.some((c) => location.pathname === c.path);

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 z-[60] origin-left"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-700 ${scrolled
            ? 'bg-white/70 backdrop-blur-2xl shadow-[0_1px_60px_-12px_rgba(0,0,0,0.06)] border-b border-neutral-200/50'
            : 'bg-transparent'
          }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm tracking-tight transition-all duration-700 ${scrolled
                    ? 'bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-600/20'
                    : 'bg-white/10 text-white backdrop-blur-sm border border-white/15'
                  }`}
              >
                AL
              </motion.div>
              <div className="flex flex-col">
                <span className={`text-[15px] font-bold tracking-tight leading-none transition-colors duration-700 ${scrolled ? 'text-neutral-900' : 'text-white'
                  }`}>
                  Al-Lissan
                </span>
                <span className={`text-[9px] font-semibold tracking-[0.2em] uppercase leading-none mt-1 transition-colors duration-700 ${scrolled ? 'text-primary-600' : 'text-primary-300'
                  }`}>
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
                    className={`relative px-4 py-2 text-[13px] font-medium transition-all duration-300 flex items-center gap-1 rounded-lg ${isActive(link.path) || isChildActive(link)
                        ? scrolled ? 'text-primary-600' : 'text-white'
                        : scrolled ? 'text-neutral-500 hover:text-neutral-900' : 'text-white/60 hover:text-white'
                      }`}
                  >
                    {link.name}
                    {link.children && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''
                        }`} />
                    )}
                    {(isActive(link.path) || isChildActive(link)) && (
                      <motion.span
                        layoutId="activeNav"
                        className={`absolute -bottom-0.5 left-3 right-3 h-[2px] rounded-full ${scrolled ? 'bg-primary-600' : 'bg-white'
                          }`}
                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[280px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-neutral-100/80 overflow-hidden p-1.5"
                      >
                        {link.children.map((child, idx) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className={`group/dd flex items-start gap-3 px-3.5 py-3 rounded-xl transition-all duration-200 ${isActive(child.path)
                                ? 'bg-primary-50 text-primary-700'
                                : 'hover:bg-neutral-50 text-neutral-600'
                              }`}
                          >
                            <span className={`flex items-center justify-center w-7 h-7 rounded-lg text-[10px] font-bold shrink-0 mt-0.5 transition-colors ${isActive(child.path)
                                ? 'bg-primary-600 text-white'
                                : 'bg-neutral-100 text-neutral-400 group-hover/dd:bg-primary-100 group-hover/dd:text-primary-600'
                              }`}>
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <div className="min-w-0">
                              <span className="text-[13px] font-semibold group-hover/dd:text-primary-600 transition-colors block">
                                {child.name}
                              </span>
                              {child.desc && (
                                <span className="text-[11px] text-neutral-400 leading-snug block mt-0.5">
                                  {child.desc}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                        <div className="border-t border-neutral-100 mt-1 pt-1">
                          <Link
                            to={link.path}
                            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[12px] font-semibold text-primary-600 hover:bg-primary-50 transition-colors"
                          >
                            View All {link.name}
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-300 ${scrolled
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20 hover:shadow-primary-600/30 hover:bg-primary-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm'
                    }`}
                >
                  Get in Touch
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer ${scrolled ? 'text-neutral-700 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
                }`}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
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
                className="fixed inset-0 top-[72px] bg-black/20 backdrop-blur-sm lg:hidden"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-2xl border-b border-neutral-200/50 shadow-2xl"
              >
                <div className="px-4 py-4 max-h-[75vh] overflow-y-auto">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <div className="flex items-center">
                        <Link
                          to={link.path}
                          className={`flex-1 px-3 py-3.5 rounded-xl text-[15px] font-medium transition-colors ${isActive(link.path)
                              ? 'text-primary-600 bg-primary-50/80'
                              : 'text-neutral-700 hover:text-primary-600'
                            }`}
                        >
                          {link.name}
                        </Link>
                        {link.children && (
                          <button
                            onClick={() => setMobileDropdown(mobileDropdown === link.name ? null : link.name)}
                            className="p-3 text-neutral-400 cursor-pointer"
                          >
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileDropdown === link.name ? 'rotate-180' : ''
                              }`} />
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
                            <div className="ml-3 pl-3 border-l-2 border-primary-200 space-y-0.5 pb-2">
                              {link.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.path}
                                  className={`block px-3 py-2.5 text-sm rounded-lg transition-colors ${isActive(child.path) ? 'text-primary-600 font-medium' : 'text-neutral-500 hover:text-primary-600'
                                    }`}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                  <div className="pt-4 mt-3 border-t border-neutral-100">
                    <Link
                      to="/contact"
                      className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-primary-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-600/20 text-sm"
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
    </>
  );
}
