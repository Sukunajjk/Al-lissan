import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteData';

const contactInfo = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: MapPin, label: "Address", value: siteConfig.address, href: "#" },
  { icon: Clock, label: "Hours", value: "Mon-Sat: 9:00 AM - 5:00 PM", href: "#" },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] animate-glow" />
          <div className="absolute bottom-[20%] left-[15%] w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[12px] font-semibold text-white/60 tracking-wide mb-6"
            >
              <MessageCircle className="w-3.5 h-3.5 text-primary-400" />
              Get in Touch
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Contact{' '}
              <span className="text-gradient">Us</span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed max-w-xl">
              Have a question or want to learn more about our programs? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl border border-neutral-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-8 md:p-10">
                <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight mb-2">Send a Message</h2>
                <p className="text-neutral-500 mb-8">Fill in the form below and we'll get back to you within 24 hours.</p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">First Name</label>
                      <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-neutral-50/50" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Last Name</label>
                      <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-neutral-50/50" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
                    <input type="email" className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-neutral-50/50" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Subject</label>
                    <select className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-neutral-700 bg-neutral-50/50">
                      <option>General Inquiry</option>
                      <option>Program Information</option>
                      <option>Partnership</option>
                      <option>Media Inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none bg-neutral-50/50" placeholder="How can we help you?" />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary-600 text-white font-semibold rounded-2xl shadow-[0_8px_30px_rgba(5,150,71,0.3)] hover:shadow-[0_12px_40px_rgba(5,150,71,0.4)] hover:bg-primary-700 transition-all duration-300 text-[15px] cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-4"
            >
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ y: -4 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-neutral-100 hover:border-primary-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_-10px_rgba(5,150,71,0.1)] transition-all duration-500 group block"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-primary-700 flex items-center justify-center shrink-0 transition-all duration-500">
                    <info.icon className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-0.5">{info.label}</h4>
                    <p className="text-sm text-neutral-500">{info.value}</p>
                  </div>
                </motion.a>
              ))}

              {/* Map Placeholder */}
              <div className="rounded-3xl overflow-hidden bg-neutral-900 h-64 flex items-center justify-center border border-neutral-800">
                <div className="text-center text-white/30">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">Map integration</p>
                  <p className="text-xs text-white/20">Karachi, Pakistan</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
