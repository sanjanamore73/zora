import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter"
            variants={itemVariants}
          >
            Earn Smart, <span className="text-primary neon-glow">Earn Fast</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Unlock your earning potential with AI-powered strategies and real-time market insights
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={itemVariants}
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 204, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-dark font-bold py-4 px-8 rounded-full flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Start Earning <ArrowRight size={20} />
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-primary text-primary font-bold py-4 px-8 rounded-full hover:bg-primary hover:text-dark transition-all"
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose ZORA?</h2>
          <p className="text-gray-600 text-lg">Advanced tools built for modern earners</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: <Zap size={40} />,
              title: 'Lightning Fast',
              desc: 'Execute trades and strategies in milliseconds'
            },
            {
              icon: <Shield size={40} />,
              title: 'Secure & Trusted',
              desc: 'Bank-level security for your assets'
            },
            {
              icon: <TrendingUp size={40} />,
              title: 'Data Driven',
              desc: 'AI-powered insights for smarter decisions'
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all text-gray-800"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Join 50,000+ Successful Earners</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your journey to financial freedom today
          </p>
          <Link to="/pricing">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-dark font-bold py-4 px-8 rounded-full"
            >
              Explore Plans
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
