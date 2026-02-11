import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Button from '../components/ui/Button';
import { siteConfig } from '../data/siteData';

const contactInfo = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: MapPin, label: "Address", value: siteConfig.address, href: "#" },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 9:00 AM – 5:00 PM", href: "#" },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary-300 mb-4">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Have a question or want to learn more about our programs? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl border border-neutral-100 shadow-xl shadow-black/5 p-8 md:p-10">
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">Send a Message</h2>
                <p className="text-neutral-500 mb-8">Fill in the form below and we'll get back to you within 24 hours.</p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Subject</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-neutral-700">
                      <option>General Inquiry</option>
                      <option>Program Information</option>
                      <option>Donation Questions</option>
                      <option>Volunteering</option>
                      <option>Partnership</option>
                      <option>Media Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none" placeholder="How can we help you?" />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.href}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 hover:bg-primary-50/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center shrink-0 transition-colors">
                    <info.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{info.label}</h4>
                    <p className="text-sm text-neutral-500 mt-0.5">{info.value}</p>
                  </div>
                </a>
              ))}

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden bg-neutral-100 h-64 flex items-center justify-center">
                <div className="text-center text-neutral-400">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">Map integration placeholder</p>
                  <p className="text-xs">Karachi, Pakistan</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
