import { motion } from 'framer-motion';

export default function SectionHeading({ subtitle, title, description, light = false, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-16`}
    >
      {subtitle && (
        <span className={`inline-block text-sm font-semibold tracking-widest uppercase mb-3 ${light ? 'text-primary-300' : 'text-primary-600'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-neutral-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? 'text-white/80' : 'text-neutral-500'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
