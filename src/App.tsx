/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-slate-900 bg-white">
      <Header />
      <Hero />
      <History />
      <Services />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
