import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
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
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-primary-400 font-semibold text-sm mb-3">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">Contact Us</h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              Have a question or want to learn more about our programs? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-neutral-200/60 p-8 md:p-10">
                <h2 className="text-2xl font-bold text-neutral-900 tracking-tight mb-2">Send a Message</h2>
                <p className="text-neutral-500 mb-8 text-sm">Fill in the form below and we'll get back to you within 24 hours.</p>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">First Name</label>
                      <input type="text" className="w-full px-4 py-3.5 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-neutral-50/50 text-sm" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Last Name</label>
                      <input type="text" className="w-full px-4 py-3.5 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-neutral-50/50 text-sm" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
                    <input type="email" className="w-full px-4 py-3.5 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-neutral-50/50 text-sm" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Subject</label>
                    <select className="w-full px-4 py-3.5 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-neutral-700 bg-neutral-50/50 text-sm">
                      <option>General Inquiry</option>
                      <option>Program Information</option>
                      <option>Partnership</option>
                      <option>Media Inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3.5 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none bg-neutral-50/50 text-sm" placeholder="How can we help you?" />
                  </div>
                  <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors text-[15px] cursor-pointer shadow-sm shadow-primary-600/20">
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="lg:col-span-2 space-y-4">
              {contactInfo.map((info, i) => (
                <a key={i} href={info.href}
                  className="flex items-start gap-4 p-5 bg-neutral-50 rounded-xl hover:bg-primary-50 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-primary-100 flex items-center justify-center shrink-0 transition-colors shadow-sm">
                    <info.icon className="w-5 h-5 text-neutral-500 group-hover:text-primary-600 transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-0.5 text-sm">{info.label}</h4>
                    <p className="text-sm text-neutral-500">{info.value}</p>
                  </div>
                </a>
              ))}

              <div className="bg-neutral-900 rounded-2xl h-52 flex items-center justify-center">
                <div className="text-center text-white/30">
                  <MapPin className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm font-medium">Map integration</p>
                  <p className="text-xs text-white/20">Faisalabad, Pakistan</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
