import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contactez-nous</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Vous avez un projet ? Discutons-en. Notre équipe est à votre écoute pour répondre à toutes vos questions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info & Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Adresse</h4>
                  <p className="text-slate-600">123 Rue de la République<br />69002 Lyon, France</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Téléphone</h4>
                  <p className="text-slate-600">+33 4 72 00 00 00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">contact@akolys.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Horaires</h4>
                  <p className="text-slate-600">Lun - Ven: 9h - 18h</p>
                </div>
              </div>
            </div>

            <form className="space-y-6 bg-slate-50 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nom</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  placeholder="Sujet de votre message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
              >
                Envoyer le Message
              </button>
            </form>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.596024694356!2d4.833175376676756!3d45.75932897108034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon!5e0!3m2!1sen!2sfr!4v1695123456789!5m2!1sen!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
