import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { impactStories } from '../../data/siteData';

export default function ImpactStoriesSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 line-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-primary-600 mb-4">Real Stories</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight mb-4">
            Lives We've <span className="text-gradient">Transformed</span>
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto leading-relaxed">
            Every number has a face. Every statistic has a story. Here are some of the children whose lives have been changed forever.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {impactStories.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              className="group bg-white rounded-3xl overflow-hidden border border-neutral-100 hover:border-primary-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_-15px_rgba(5,150,71,0.12)] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">{story.name}, <span className="font-normal text-white/70">{story.age}</span></h3>
                    <span className="text-white/50 text-xs">{story.program}</span>
                  </div>
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[11px] font-medium rounded-full">
                    {story.duration}
                  </span>
                </div>
              </div>

              {/* Before / After */}
              <div className="p-6">
                <div className="space-y-4">
                  <div className="relative pl-5">
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-red-400" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-red-500 block mb-1">Before</span>
                    <p className="text-sm text-neutral-500 leading-relaxed">{story.before}</p>
                  </div>
                  <div className="border-t border-dashed border-neutral-200" />
                  <div className="relative pl-5">
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary-500" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary-600 block mb-1">After</span>
                    <p className="text-sm text-neutral-600 leading-relaxed font-medium">{story.after}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/programs" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group">
            <Sparkles className="w-4 h-4" />
            See All Our Programs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
