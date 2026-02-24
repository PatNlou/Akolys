import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-400">AKOLYS</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Votre partenaire de confiance pour tous vos projets de construction et d'aménagement.
              Innovation, qualité et durabilité sont au cœur de notre engagement.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Liens Rapides</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#home" className="hover:text-indigo-400 transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#expertise" className="hover:text-indigo-400 transition-colors">Expertise</a></li>
              <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Projets</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Construction</li>
              <li>Rénovation</li>
              <li>Architecture</li>
              <li>Gestion de Projet</li>
              <li>Consulting</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Suivez-nous</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-indigo-600 transition-colors text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-indigo-600 transition-colors text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-indigo-600 transition-colors text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-indigo-600 transition-colors text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Akolys. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
