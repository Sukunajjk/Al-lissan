import { motion } from 'framer-motion';
import { FileText, Download, BarChart3, PieChart, TrendingUp, Eye } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { annualReports } from '../data/siteData';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const financialHighlights = [
  { icon: PieChart, label: "Programs", value: "78%", description: "Spent directly on rehabilitation and education programs" },
  { icon: BarChart3, label: "Admin", value: "12%", description: "Administrative and operational costs" },
  { icon: TrendingUp, label: "Fundraising", value: "10%", description: "Invested in fundraising and outreach" },
];

export default function Reports() {
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
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary-300 mb-4">Accountability</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Annual Reports & Transparency
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              We believe in complete transparency. Review our annual reports and see exactly how your contributions make an impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Financial Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            subtitle="Financial Overview"
            title="Where Your Money Goes"
            description="We are committed to maximizing the impact of every donation received."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {financialHighlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl border border-neutral-100 hover:shadow-xl hover:shadow-primary-600/5 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{item.value}</div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">{item.label}</h3>
                <p className="text-sm text-neutral-500">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Key Stats */}
          <div className="bg-primary-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: 5000, suffix: "+", label: "Children Served" },
                { value: 28, suffix: "+", label: "Years Active" },
                { value: 95, suffix: "%", label: "Parent Satisfaction" },
                { value: 78, suffix: "%", label: "Funds to Programs" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-bold mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-primary-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reports Download */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            subtitle="Downloads"
            title="Annual Reports"
            description="Download our detailed annual reports to learn about our programs, financials, and impact."
          />

          <div className="max-w-2xl mx-auto space-y-4">
            {annualReports.map((report, i) => (
              <motion.div
                key={report.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center justify-between bg-white rounded-2xl p-6 border border-neutral-100 hover:shadow-lg hover:shadow-primary-600/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center transition-colors">
                    <FileText className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{report.title}</h4>
                    <p className="text-sm text-neutral-400">PDF · {report.size}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 rounded-xl border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-primary-600 hover:border-primary-300 transition-colors cursor-pointer">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white hover:bg-primary-700 transition-colors cursor-pointer shadow-lg shadow-primary-600/25">
                    <Download className="w-5 h-5" />
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
