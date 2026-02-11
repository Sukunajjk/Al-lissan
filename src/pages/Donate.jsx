import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, CreditCard, DollarSign, Shield, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const amounts = [1000, 5000, 10000, 25000, 50000, 100000];

const impacts = [
  { amount: "PKR 1,000", impact: "Provides therapy materials for one child for a week" },
  { amount: "PKR 5,000", impact: "Funds a full month of speech therapy sessions" },
  { amount: "PKR 10,000", impact: "Supports a child's complete monthly rehabilitation" },
  { amount: "PKR 25,000", impact: "Sponsors a child's quarterly program enrollment" },
  { amount: "PKR 50,000", impact: "Equips a therapy room with essential tools" },
  { amount: "PKR 100,000", impact: "Transforms a child's entire year of rehabilitation" },
];

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(10000);
  const [donationType, setDonationType] = useState('one-time');

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-warm-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary-300 mb-4">Give Hope</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Donation Changes Lives
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Every contribution, no matter the size, brings a special child closer to independence, confidence, and a brighter future.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Donation Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl border border-neutral-100 shadow-xl shadow-black/5 p-8 md:p-10">
                <h2 className="text-2xl font-bold text-neutral-900 mb-8">Make a Donation</h2>

                {/* Donation Type */}
                <div className="flex gap-2 mb-8 bg-neutral-100 rounded-xl p-1">
                  {['one-time', 'monthly'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setDonationType(type)}
                      className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer capitalize ${
                        donationType === type
                          ? 'bg-white text-primary-600 shadow-sm'
                          : 'text-neutral-500 hover:text-neutral-700'
                      }`}
                    >
                      {type === 'one-time' ? 'One-Time' : 'Monthly'}
                    </button>
                  ))}
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">Select Amount (PKR)</label>
                  <div className="grid grid-cols-3 gap-3">
                    {amounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                          selectedAmount === amount
                            ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                            : 'bg-neutral-50 text-neutral-700 border border-neutral-200 hover:border-primary-300 hover:text-primary-600'
                        }`}
                      >
                        {amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">Or Enter Custom Amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 font-medium">PKR</span>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      className="w-full pl-14 pr-4 py-3.5 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                      onChange={(e) => setSelectedAmount(parseInt(e.target.value) || 0)}
                    />
                  </div>
                </div>

                {/* Donor Info */}
                <div className="space-y-4 mb-8">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all" />
                    <input type="text" placeholder="Last Name" className="px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all" />
                </div>

                <Button className="w-full" size="lg">
                  <Heart className="w-5 h-5" />
                  Donate PKR {selectedAmount.toLocaleString()} {donationType === 'monthly' ? '/month' : ''}
                </Button>

                <div className="flex items-center justify-center gap-2 mt-6 text-sm text-neutral-400">
                  <Shield className="w-4 h-4" />
                  <span>Secure & encrypted donation</span>
                </div>
              </div>
            </motion.div>

            {/* Impact Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-primary-50/50 rounded-3xl p-8 mb-8">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Your Impact</h3>
                <div className="space-y-4">
                  {impacts.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-neutral-800">{item.amount}</span>
                        <p className="text-sm text-neutral-500">{item.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-neutral-900 text-white rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  If you have questions about donating or want to discuss corporate partnerships, reach out to us.
                </p>
                <Button to="/contact" variant="outline" size="sm" className="!border-white/30 !text-white hover:!bg-white/10">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
