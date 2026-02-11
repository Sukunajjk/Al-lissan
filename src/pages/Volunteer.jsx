import { motion } from 'framer-motion';
import { Heart, Clock, Users, BookOpen, Stethoscope, Camera, Megaphone, Send } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';

const opportunities = [
  { icon: BookOpen, title: "Teaching Assistant", description: "Help our educators in classroom activities and one-on-one sessions with children.", commitment: "4-8 hrs/week" },
  { icon: Stethoscope, title: "Therapy Support", description: "Assist licensed therapists during speech, occupational, and physical therapy sessions.", commitment: "6-10 hrs/week" },
  { icon: Camera, title: "Media & Content", description: "Help capture and share stories of impact through photography, video, and writing.", commitment: "Flexible" },
  { icon: Megaphone, title: "Fundraising & Events", description: "Support our fundraising campaigns, organize events, and build community partnerships.", commitment: "Project-based" },
  { icon: Users, title: "Community Outreach", description: "Raise awareness about disabilities and connect families with our services.", commitment: "4-6 hrs/week" },
  { icon: Heart, title: "Mentorship", description: "Become a mentor to older children, guiding them toward independence and skills development.", commitment: "2-4 hrs/week" },
];

export default function Volunteer() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-72 h-72 bg-accent-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary-300 mb-4">Join Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Become a Volunteer
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Your time and skills can make a profound difference in the lives of special children and their families.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            subtitle="Opportunities"
            title="Ways to Make a Difference"
            description="Choose from a variety of volunteering roles that match your skills, interests, and availability."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp, i) => (
              <motion.div
                key={opp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-neutral-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-600/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center mb-5 transition-colors">
                  <opp.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{opp.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4">{opp.description}</p>
                <div className="flex items-center gap-2 text-xs font-medium text-primary-600">
                  <Clock className="w-3.5 h-3.5" />
                  {opp.commitment}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary-600 mb-3">Apply Now</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Volunteer Application</h2>
              <p className="text-neutral-500">Fill out this form and our team will get in touch with next steps.</p>
            </div>

            <div className="bg-white rounded-3xl border border-neutral-100 shadow-xl shadow-black/5 p-8 md:p-10">
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all" />
                  <input type="email" placeholder="Email Address" className="px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel" placeholder="Phone Number" className="px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all" />
                  <select className="px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-neutral-700">
                    <option>Select Interest Area</option>
                    {opportunities.map((o) => <option key={o.title}>{o.title}</option>)}
                  </select>
                </div>
                <textarea rows={4} placeholder="Tell us about yourself and why you'd like to volunteer" className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none" />
                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Submit Application
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
