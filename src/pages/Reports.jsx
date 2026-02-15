import { motion } from 'framer-motion';
import { FileText, Download, PieChart, BarChart3, TrendingUp, Eye } from 'lucide-react';
import { annualReports } from '../data/siteData';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const financialHighlights = [
  { icon: PieChart, label: "Programs", value: "78%", description: "Spent directly on rehabilitation and education programs" },
  { icon: BarChart3, label: "Admin", value: "12%", description: "Administrative and operational costs" },
  { icon: TrendingUp, label: "Outreach", value: "10%", description: "Invested in awareness and community outreach" },
];

export default function Reports() {
  return (
    <>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-primary-400 font-semibold text-sm mb-3">Accountability</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">Annual Reports & Transparency</h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              We believe in complete transparency. Review our annual reports and see exactly how resources create impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Financial Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-primary-600 font-semibold text-sm mb-3">Financial Overview</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">Where Resources Go</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {financialHighlights.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center bg-neutral-50 rounded-2xl p-8 group hover:bg-primary-50 transition-colors">
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center mb-5 transition-colors">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-neutral-900 tracking-tight mb-2">{item.value}</div>
                <h3 className="text-base font-bold text-neutral-900 mb-1">{item.label}</h3>
                <p className="text-sm text-neutral-500">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-neutral-900 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: 5000, suffix: "+", label: "Children Served" },
                { value: 28, suffix: "+", label: "Years Active" },
                { value: 95, suffix: "%", label: "Parent Satisfaction" },
                { value: 78, suffix: "%", label: "Funds to Programs" },
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}>
                  <div className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-white/40">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-primary-600 font-semibold text-sm mb-3">Downloads</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">Annual Reports</h2>
            <p className="text-neutral-500 mt-4 max-w-lg mx-auto leading-relaxed">
              Download our detailed annual reports to learn about our programs, financials, and impact.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-3">
            {annualReports.map((report, i) => (
              <motion.div key={report.year} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-center justify-between bg-white rounded-xl border border-neutral-200/60 p-5 group hover:shadow-sm hover:border-primary-200 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-50 group-hover:bg-primary-100 flex items-center justify-center transition-colors">
                    <FileText className="w-5 h-5 text-neutral-500 group-hover:text-primary-600 transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">{report.title}</h4>
                    <p className="text-sm text-neutral-400">PDF &middot; {report.size}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-9 h-9 rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-primary-600 hover:border-primary-300 transition-colors cursor-pointer">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 rounded-lg bg-primary-600 flex items-center justify-center text-white hover:bg-primary-700 transition-colors cursor-pointer shadow-sm shadow-primary-600/20">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
