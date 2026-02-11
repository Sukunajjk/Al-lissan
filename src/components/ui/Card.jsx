import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -6, transition: { duration: 0.2 } } : {}}
      className={`bg-white rounded-2xl shadow-sm border border-neutral-100 hover:shadow-xl hover:shadow-primary-600/5 transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
