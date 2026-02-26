import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Bonjour ! Je suis l'assistant virtuel d'Akolys. Comment puis-je vous aider à propos de nos services ou de notre histoire ?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue;
    setInputValue("");
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const model = ai.models.getGenerativeModel({
        model: "gemini-2.5-flash-latest",
        systemInstruction: `Tu es l'assistant virtuel d'Akolys Technologies. Tu dois répondre aux questions des visiteurs en te basant UNIQUEMENT sur les informations suivantes. Si la réponse n'est pas dans ces informations, invite poliment l'utilisateur à nous contacter directement.

        INFORMATIONS SUR AKOLYS :
        - Nom : Akolys Technologies (fondée en 2009 par Epee Gervais, ingénieur élec).
        - Mission : Solutions techniques fiables, innovantes et durables pour projets industriels.
        - Expertise : +15 ans d'expérience. Excellence technique, efficacité opérationnelle, responsabilité environnementale.
        - Secteurs : Énergie (solaire, thermique, nucléaire), Chimie, Pharmaceutique, Offshore, Mines, Transport urbain.
        
        SERVICES :
        - Construction (résidentiel/commercial haute qualité)
        - Rénovation (transformation/modernisation)
        - Architecture (conception innovante)
        - Gestion de Projet (coordination complète)
        - Consulting (immobilier/durable)
        - Partenariats (artisans/fournisseurs)

        PROJETS RÉCENTS :
        - Centrale Solaire Photovoltaïque (Énergie)
        - Unité de Production Pharmaceutique (Pharmaceutique)
        - Plateforme Offshore (Offshore)
        - Extension de Ligne de Tramway (Transport Urbain)
        - Usine Chimique (Chimie)
        - Complexe Minier (Mines)

        CONTACT :
        - Adresse : 123 Rue de la République, 69002 Lyon, France
        - Téléphone : +33 4 72 00 00 00
        - Email : contact@akolys.com
        - Horaires : Lun - Ven : 9h - 18h

        Ton ton doit être professionnel, courtois et serviable. Sois concis.`,
      });

      const chat = model.startChat({
        history: messages.map(m => ({
          role: m.isUser ? "user" : "model",
          parts: [{ text: m.text }],
        })),
      });

      const result = await chat.sendMessage(userMessage);
      const response = result.response.text();

      setMessages((prev) => [...prev, { text: response, isUser: false }]);
    } catch (error) {
      console.error("Erreur AI:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Désolé, je rencontre des difficultés techniques pour le moment. Veuillez nous contacter par téléphone ou email.", isUser: false },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden border border-slate-100 flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-indigo-600 p-4 flex justify-between items-center text-white">
              <div>
                <h3 className="font-bold">Chat Akolys</h3>
                <p className="text-xs text-indigo-200">Assistant IA en ligne</p>
              </div>
              <button onClick={toggleChat} className="hover:bg-indigo-700 p-1 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.isUser
                        ? 'bg-indigo-600 text-white rounded-br-none'
                        : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-indigo-600" />
                    <span className="text-xs text-slate-500">En train d'écrire...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-100 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Votre message..."
                className="flex-1 px-4 py-2 rounded-full border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!inputValue.trim() || isLoading}
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
