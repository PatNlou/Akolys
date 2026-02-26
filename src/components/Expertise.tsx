import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

const Expertise = () => {
  const points = [
    'Innovation et technologie de pointe',
    'Respect des délais et des budgets',
    'Qualité et durabilité des matériaux',
    'Équipe d\'experts certifiés',
    'Accompagnement personnalisé',
    'Engagement environnemental',
  ];

  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/construction/800/600"
                alt="Construction Site"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-sm font-bold uppercase tracking-wider mb-2 text-indigo-400">Notre Engagement</p>
                  <h3 className="text-2xl font-bold">Excellence & Innovation</h3>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Une Expertise Reconnue <br />
              <span className="text-indigo-600">Depuis 20 Ans</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Chez Akolys, nous mettons notre savoir-faire au service de vos ambitions.
              Notre approche combine rigueur technique et vision créative pour donner vie à des projets uniques.
              Nous nous engageons à respecter les standards les plus élevés de l'industrie.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-indigo-600 shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors"
              >
                En Savoir Plus
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
