import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/architecture/1920/1080"
          alt="Modern Architecture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/80" />
      </div>

      <div className="container mx-auto px-4 z-10 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
            Construire l'Avenir <br />
            <span className="text-indigo-400">Ensemble</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Akolys vous accompagne dans vos projets de construction et d'aménagement avec expertise et innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
            >
              Démarrer un Projet <ArrowRight size={20} />
            </a>
            <a
              href="#services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold transition-all border border-white/20"
            >
              Nos Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
