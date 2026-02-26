import React from 'react';
import { motion } from 'motion/react';
import { Building2, Hammer, Ruler, HardHat, Briefcase, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building2 size={32} />,
      title: 'Construction',
      description: 'Réalisation de projets de construction résidentiels et commerciaux de haute qualité.',
    },
    {
      icon: <Hammer size={32} />,
      title: 'Rénovation',
      description: 'Transformation et modernisation d\'espaces existants pour répondre à vos besoins.',
    },
    {
      icon: <Ruler size={32} />,
      title: 'Architecture',
      description: 'Conception architecturale innovante et fonctionnelle pour tous types de bâtiments.',
    },
    {
      icon: <HardHat size={32} />,
      title: 'Gestion de Projet',
      description: 'Coordination complète de vos chantiers, du concept à la livraison finale.',
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Consulting',
      description: 'Conseil stratégique en immobilier et développement durable.',
    },
    {
      icon: <Users size={32} />,
      title: 'Partenariats',
      description: 'Collaboration avec les meilleurs artisans et fournisseurs du secteur.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Une expertise complète pour accompagner chaque étape de votre projet immobilier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group"
            >
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
