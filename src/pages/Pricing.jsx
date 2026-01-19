import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for beginners',
      price: isAnnual ? 99 : 9,
      period: 'month',
      features: [
        'Basic AI Bot',
        'Real-time Analytics',
        'Email Support',
        'Up to $10K Portfolio',
        'Limited Alerts'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      description: 'For serious traders',
      price: isAnnual ? 299 : 29,
      period: 'month',
      features: [
        'Advanced AI Bot',
        'Full Analytics Suite',
        'Priority Support',
        'Unlimited Portfolio',
        'Unlimited Alerts',
        'API Access',
        'Custom Strategies'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      description: 'Maximum control',
      price: isAnnual ? 799 : 79,
      period: 'month',
      features: [
        'Elite AI Bot',
        'Custom Algorithms',
        '24/7 Dedicated Support',
        'Unlimited Everything',
        'Dedicated Manager',
        'White Label Option',
        'Risk Management Tools'
      ],
      highlighted: false
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="text-center mb-16">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Simple, <span className="text-primary">Transparent</span> Pricing
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Choose the plan that fits your needs
        </motion.p>

        {/* Toggle */}
        <motion.div
          className="flex justify-center items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className={isAnnual ? 'text-gray-600' : 'text-gray-900 font-bold'}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="bg-primary/20 border border-primary/50 rounded-full p-1 w-16 flex items-center transition-all"
          >
            <motion.div
              className="bg-primary w-7 h-7 rounded-full"
              initial={false}
              animate={{ x: isAnnual ? 32 : 0 }}
            />
          </button>
          <span className={!isAnnual ? 'text-gray-600' : 'text-gray-900 font-bold'}>Annual (Save 20%)</span>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-3 gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`rounded-2xl p-8 relative transition-all ${
                plan.highlighted
                  ? 'glass-card border-2 border-primary bg-primary/5 transform md:scale-105 text-gray-800'
                  : 'glass-card text-gray-800'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-dark px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className="text-gray-400 ml-2">/{plan.period}</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-full font-bold mb-8 transition-all ${
                  plan.highlighted
                    ? 'bg-primary text-dark hover:bg-white'
                    : 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-dark'
                }`}
              >
                Get Started
              </motion.button>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check size={20} className="text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="mt-20 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            {
              q: 'Can I switch plans anytime?',
              a: 'Yes, upgrade or downgrade your plan at any time with pro-rata billing.'
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit cards, bank transfers, and cryptocurrencies.'
            },
            {
              q: 'Is there a free trial?',
              a: 'Yes, get 7 days free trial on any plan. No credit card required.'
            }
          ].map((faq, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-6 rounded-xl text-gray-800"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-bold mb-2">{faq.q}</h4>
              <p className="text-gray-400">{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Pricing;
