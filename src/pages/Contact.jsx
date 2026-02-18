import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

const contactInfo = [
  { icon: Mail, label: "Email Us", value: siteConfig.email, href: `mailto:${siteConfig.email}`, desc: "We usually reply within 24 hours." },
  { icon: Phone, label: "Call Us", value: siteConfig.phone, href: `tel:${siteConfig.phone}`, desc: "Mon-Sat from 9am to 5pm." },
  { icon: MapPin, label: "Visit Us", value: siteConfig.address, href: "#", desc: "Main Campus, Dhobi Ghat." },
];

export default function Contact() {
  return (
    <>
      <section className="pt-32 pb-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="text-primary-400 font-bold tracking-widest text-sm uppercase mb-4 block">
                    Get in Touch
                </span>
                <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8">
                    Let's Start a Conversation
                </h1>
                <p className="text-xl text-white/50 max-w-2xl mx-auto">
                    Whether you're a parent seeking help, a donor wanting to contribute, or a volunteer ready to join – we are here for you.
                </p>
            </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Form Column */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-serif text-neutral-900 mb-2">Send a Message</h2>
              <p className="text-neutral-500 mb-8">Fill the form below and our team will get back to you shortly.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-900">First Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-0 outline-none transition-all placeholder:text-neutral-400" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-900">Last Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-0 outline-none transition-all placeholder:text-neutral-400" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-900">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-0 outline-none transition-all placeholder:text-neutral-400" placeholder="jane@example.com" />
                </div>
                
                <div className="space-y-2">
                   <label className="text-sm font-semibold text-neutral-900">Topic</label>
                   <select className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-0 outline-none transition-all text-neutral-600">
                      <option>General Inquiry</option>
                      <option>Admissions / Programs</option>
                      <option>Volunteering</option>
                   </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-900">Message</label>
                  <textarea rows={5} className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-primary-500 focus:ring-0 outline-none transition-all placeholder:text-neutral-400 resize-none" placeholder="How can we help you?" />
                </div>

                <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-neutral-900 text-white font-bold rounded-xl hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-900/20 cursor-pointer">
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>

            {/* Info & Map Column */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
               
               {/* Contact Cards */}
               <div className="grid sm:grid-cols-2 gap-4">
                  {contactInfo.map((info, i) => (
                    <a key={i} href={info.href} className="group p-6 bg-white border border-neutral-100 rounded-2xl hover:border-primary-100 hover:shadow-lg hover:shadow-primary-900/5 transition-all">
                        <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <info.icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-neutral-900 mb-1">{info.label}</h3>
                        <p className="text-primary-600 font-medium mb-2">{info.value}</p>
                        <p className="text-xs text-neutral-400">{info.desc}</p>
                    </a>
                  ))}
               </div>

               {/* Map */}
               <div className="bg-neutral-100 rounded-3xl overflow-hidden h-[400px] w-full border border-neutral-200 relative">
                  <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13620.245880468!2d73.07684615!3d31.4116565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a898555555%3A0x6b4a5d336987768!2sDhobi%20Ghat%20Ground%20Faisalabad!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale hover:grayscale-0 transition-all duration-700"
                  ></iframe>
                  
                  {/* Overlay Interaction Hint */}
                  <div className="absolute inset-0 bg-neutral-900/0 hover:bg-neutral-900/0 pointer-events-none transition-colors border-4 border-white/50 rounded-3xl z-10"></div>
               </div>

            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
