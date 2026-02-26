import React from 'react';
import { motion } from 'motion/react';

const Projects = () => {
  const projects = [
    {
      title: 'Centrale Solaire Photovoltaïque',
      category: 'Énergie',
      image: 'https://picsum.photos/seed/solar/800/600',
    },
    {
      title: 'Unité de Production Pharmaceutique',
      category: 'Pharmaceutique',
      image: 'https://picsum.photos/seed/pharma/800/600',
    },
    {
      title: 'Plateforme Offshore',
      category: 'Offshore',
      image: 'https://picsum.photos/seed/offshore/800/600',
    },
    {
      title: 'Extension de Ligne de Tramway',
      category: 'Transport Urbain',
      image: 'https://picsum.photos/seed/tramway/800/600',
    },
    {
      title: 'Usine Chimique',
      category: 'Chimie',
      image: 'https://picsum.photos/seed/chemistry/800/600',
    },
    {
      title: 'Complexe Minier',
      category: 'Mines',
      image: 'https://picsum.photos/seed/mining/800/600',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nos Réalisations</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets récents qui témoignent de notre savoir-faire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-indigo-400 font-medium text-sm uppercase tracking-wider mb-1">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
