import { motion } from 'framer-motion';
import { CheckCircle, Zap, Brain, BarChart3, Lock, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain size={40} />,
      title: 'AI Trading Bot',
      desc: 'Automated trading with machine learning algorithms',
      features: ['24/7 Trading', 'Risk Management', 'Multi-Asset Support']
    },
    {
      icon: <BarChart3 size={40} />,
      title: 'Portfolio Analytics',
      desc: 'Deep insights into your portfolio performance',
      features: ['Real-time Data', 'Advanced Charts', 'Predictions']
    },
    {
      icon: <Lock size={40} />,
      title: 'Secure Vault',
      desc: 'Military-grade security for your assets',
      features: ['2FA Auth', 'Cold Storage', 'Insurance']
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile App',
      desc: 'Trade on the go with our native mobile app',
      features: ['iOS & Android', 'Push Alerts', 'Offline Mode']
    },
    {
      icon: <Zap size={40} />,
      title: 'Smart Alerts',
      desc: 'Get notified about market opportunities instantly',
      features: ['Custom Triggers', 'Email/SMS', 'Telegram']
    },
    {
      icon: <CheckCircle size={40} />,
      title: 'Expert Support',
      desc: '24/7 customer support from financial experts',
      features: ['Live Chat', 'Email Support', 'Tutorials']
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
          Our <span className="text-primary">Services</span>
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Comprehensive tools designed to maximize your earning potential
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all group text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="text-primary mb-4 group-hover:text-primary transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 to-secondary/10 p-12 rounded-3xl max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-6">
            Join thousands of successful traders using ZORA
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-dark font-bold py-3 px-8 rounded-full"
          >
            Start Free Trial
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
