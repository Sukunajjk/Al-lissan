import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { impactStories } from '../../data/siteData';

export default function ImpactStoriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-600 font-semibold text-sm mb-3 tracking-wide">Real Stories</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
            Lives we've transformed
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto leading-relaxed">
            Every number has a face. Every statistic has a story. Here are some of the children whose lives have been changed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {impactStories.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl border border-neutral-200/60 overflow-hidden hover:shadow-lg transition-shadow duration-500 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-white font-bold text-lg">{story.name}, <span className="font-normal text-white/70">{story.age}</span></h3>
                  <span className="text-primary-300 text-xs font-medium">{story.program}</span>
                </div>
                <span className="absolute top-4 right-4 px-3 py-1 bg-white/15 backdrop-blur-sm text-white text-xs font-medium rounded-lg">
                  {story.duration}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-full min-h-[40px] rounded-full bg-red-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-red-500 block mb-1">Before</span>
                    <p className="text-sm text-neutral-500 leading-relaxed">{story.before}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-full min-h-[40px] rounded-full bg-primary-500 shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary-600 block mb-1">After</span>
                    <p className="text-sm text-neutral-700 leading-relaxed font-medium">{story.after}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/programs" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group">
            See All Programs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
