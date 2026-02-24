import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Award, TrendingUp, Users } from 'lucide-react';

const History = () => {
  const milestones = [
    {
      year: '2009',
      title: 'La Genèse',
      description: 'Fondée en 2009 par Epee Gervais, ingénieur en électricité passionné par les grands projets industriels, Akolys Technologies est née de la volonté d’apporter des solutions techniques fiables, innovantes et durables aux secteurs les plus stratégiques du monde industriel.',
      icon: <Calendar size={24} />,
    },
    {
      year: '+15 Ans',
      title: 'Une Expertise Reconnue',
      description: 'Depuis plus de 15 ans, l’entreprise accompagne la conception, la construction et la supervision de projets complexes, avec une approche centrée sur l’excellence technique, l’efficacité opérationnelle et la responsabilité environnementale.',
      icon: <Award size={24} />,
    },
    {
      year: 'Aujourd\'hui',
      title: 'Expansion Stratégique',
      description: 'Ce qui a commencé comme une expertise en ingénierie électrique s’est progressivement étendu à plusieurs domaines majeurs : énergie (centrales solaires, thermiques, nucléaires), chimie, pharmaceutique, offshore, mines et transport urbain.',
      icon: <TrendingUp size={24} />,
    },
  ];

  return (
    <section id="history" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Notre Histoire</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Depuis notre création, nous avons bâti notre réputation sur l'excellence et l'innovation.
            Découvrez les étapes clés qui ont façonné Akolys.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-100 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center justify-between ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full md:w-5/12"></div>
                
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full shadow-lg border-4 border-white shrink-0 mb-4 md:mb-0">
                  <span className="text-white">{milestone.icon}</span>
                </div>

                <div className="w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-3">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
