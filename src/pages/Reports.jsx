import { motion } from 'framer-motion';
import { FileText, Download, BarChart3, PieChart, TrendingUp, Eye, ShieldCheck } from 'lucide-react';
import { annualReports } from '../data/siteData';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const financialHighlights = [
  { icon: PieChart, label: "Programs", value: "78%", description: "Spent directly on rehabilitation and education programs", color: "from-primary-500 to-primary-700" },
  { icon: BarChart3, label: "Admin", value: "12%", description: "Administrative and operational costs", color: "from-cyan-500 to-blue-600" },
  { icon: TrendingUp, label: "Outreach", value: "10%", description: "Invested in awareness and community outreach", color: "from-amber-500 to-orange-600" },
];

export default function Reports() {
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
              <ShieldCheck className="w-3.5 h-3.5 text-primary-400" />
              Accountability
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Annual Reports &{' '}
              <span className="text-gradient">Transparency</span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed max-w-xl">
              We believe in complete transparency. Review our annual reports and see exactly how resources create impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Financial Overview */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-primary-600 mb-4">Financial Overview</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Where Resources <span className="text-gradient">Go</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {financialHighlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="text-center bg-white rounded-3xl p-8 border border-neutral-100 hover:border-primary-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-12px_rgba(5,150,71,0.1)] transition-all duration-500 group"
              >
                <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl font-extrabold text-neutral-900 tracking-tight mb-2">{item.value}</div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">{item.label}</h3>
                <p className="text-sm text-neutral-500">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-950 rounded-3xl p-8 md:p-12 overflow-hidden relative"
          >
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary-600/10 rounded-full blur-[100px]" />

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: 5000, suffix: "+", label: "Children Served" },
                { value: 28, suffix: "+", label: "Years Active" },
                { value: 95, suffix: "%", label: "Parent Satisfaction" },
                { value: 78, suffix: "%", label: "Funds to Programs" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-white/30 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reports Download */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 line-pattern" />
        <div className="absolute inset-0 bg-neutral-50/80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-primary-600 mb-4">Downloads</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Annual <span className="text-gradient">Reports</span>
            </h2>
            <p className="text-neutral-500 mt-4 max-w-lg mx-auto leading-relaxed">
              Download our detailed annual reports to learn about our programs, financials, and impact.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-4">
            {annualReports.map((report, i) => (
              <motion.div
                key={report.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="flex items-center justify-between bg-white rounded-2xl p-6 border border-neutral-100 hover:border-primary-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-12px_rgba(5,150,71,0.1)] transition-all duration-500 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-primary-700 flex items-center justify-center transition-all duration-500">
                    <FileText className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">{report.title}</h4>
                    <p className="text-sm text-neutral-400">PDF &middot; {report.size}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-xl border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-primary-600 hover:border-primary-300 transition-colors cursor-pointer"
                  >
                    <Eye className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white hover:bg-primary-700 transition-colors cursor-pointer shadow-lg shadow-primary-600/25"
                  >
                    <Download className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
