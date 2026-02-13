import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { impactStories } from '../../data/siteData';

export default function ImpactStoriesSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary-600" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary-600">
              Impact Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
            Lives Transformed Through Our Work
          </h2>
          <p className="text-neutral-500 max-w-2xl leading-relaxed">
            Behind every statistic is a child whose life has been changed. These are their stories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactStories.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-white border border-neutral-200 hover:border-neutral-300 transition-colors duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name and program */}
                <div className="mb-5">
                  <h3 className="text-lg font-bold text-neutral-900">
                    {story.name}, <span className="font-normal text-neutral-500">{story.age}</span>
                  </h3>
                  <p className="text-xs font-medium text-primary-600 uppercase tracking-wider mt-1">
                    {story.program}
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">{story.duration}</p>
                </div>

                {/* Before */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-600 mt-1.5 shrink-0" />
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-red-600 block mb-1">
                      Before
                    </span>
                    <p className="text-sm text-neutral-500 leading-relaxed">{story.before}</p>
                  </div>
                </div>

                <hr className="border-neutral-200 my-4" />

                {/* After */}
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-1.5 shrink-0" />
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary-600 block mb-1">
                      After
                    </span>
                    <p className="text-sm text-neutral-700 leading-relaxed font-medium">{story.after}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 text-sm font-semibold text-neutral-700 hover:border-primary-600 hover:text-primary-600 transition-colors duration-300"
          >
            View All Programs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
