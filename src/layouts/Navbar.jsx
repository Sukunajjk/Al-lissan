import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ChevronDown, Heart, ArrowRight } from 'lucide-react';
import { navLinks, siteConfig } from '../data/siteData';
import Button from '../components/ui/Button';

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

  const isActive = (path) => location.pathname === path;
  const isChildActive = (link) => link.children?.some((c) => location.pathname === c.path);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 z-[60] origin-left"
        style={{ scaleX }}
      />

      <nav
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_40px_-8px_rgba(0,0,0,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm tracking-tight transition-all duration-500 ${
                  scrolled ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20' : 'bg-white/15 text-white backdrop-blur-sm border border-white/20'
                }`}
              >
                AL
              </motion.div>
              <div className="flex flex-col">
                <span className={`text-[15px] font-bold tracking-tight leading-none transition-colors duration-500 ${scrolled ? 'text-neutral-900' : 'text-white'}`}>
                  Al-Lissan
                </span>
                <span className={`text-[10px] font-medium tracking-wider uppercase leading-none mt-0.5 transition-colors duration-500 ${scrolled ? 'text-neutral-400' : 'text-white/50'}`}>
                  Since 1996
                </span>
              </div>
            </Link>

            {/* Desktop Navigation — 6 clean items */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`relative px-3.5 py-2 text-[13px] font-medium transition-all duration-200 flex items-center gap-1 rounded-lg ${
                      isActive(link.path) || isChildActive(link)
                        ? scrolled ? 'text-primary-600' : 'text-white'
                        : scrolled ? 'text-neutral-500 hover:text-neutral-800' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {link.children && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    )}
                    {(isActive(link.path) || isChildActive(link)) && (
                      <motion.span
                        layoutId="nav-indicator"
                        className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full ${scrolled ? 'bg-primary-600' : 'bg-white'}`}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>

                  {/* Mega Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-neutral-100/80 overflow-hidden p-2"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className={`group/item flex flex-col gap-0.5 px-3.5 py-3 rounded-xl transition-all duration-150 ${
                              isActive(child.path)
                                ? 'bg-primary-50 text-primary-700'
                                : 'hover:bg-neutral-50 text-neutral-700'
                            }`}
                          >
                            <span className="text-[13px] font-semibold group-hover/item:text-primary-600 transition-colors">
                              {child.name}
                            </span>
                            {child.desc && (
                              <span className="text-[11px] text-neutral-400 leading-snug">
                                {child.desc}
                              </span>
                            )}
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

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-2.5">
              <Button to="/volunteer" variant={scrolled ? 'ghost' : 'outline'} size="sm" className="!text-[13px] !px-4 !py-2">
                Volunteer
              </Button>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button to="/donate" variant="primary" size="sm" className="!text-[13px] !px-4 !py-2">
                  <Heart className="w-3.5 h-3.5" />
                  Donate
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors cursor-pointer ${
                scrolled ? 'text-neutral-700 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-neutral-100/50 overflow-hidden"
            >
              <div className="px-4 py-3 max-h-[70vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <div className="flex items-center">
                      <Link
                        to={link.path}
                        className={`flex-1 px-3 py-3 rounded-xl text-sm font-medium transition-colors ${
                          isActive(link.path) ? 'text-primary-600 bg-primary-50' : 'text-neutral-700'
                        }`}
                      >
                        {link.name}
                      </Link>
                      {link.children && (
                        <button
                          onClick={() => setMobileDropdown(mobileDropdown === link.name ? null : link.name)}
                          className="p-3 text-neutral-400 cursor-pointer"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === link.name ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {link.children && mobileDropdown === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-3 pl-3 border-l-2 border-primary-100 space-y-0.5 pb-2">
                            {link.children.map((child) => (
                              <Link key={child.name} to={child.path} className="block px-3 py-2 text-sm text-neutral-500 hover:text-primary-600 transition-colors rounded-lg">
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="flex gap-2 pt-3 mt-2 border-t border-neutral-100">
                  <Button to="/volunteer" variant="secondary" size="sm" className="flex-1 !text-sm">Volunteer</Button>
                  <Button to="/donate" variant="primary" size="sm" className="flex-1 !text-sm"><Heart className="w-3.5 h-3.5" />Donate</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
