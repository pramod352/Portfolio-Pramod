import React from 'react';
import { Download, Mail, Linkedin, Github } from 'lucide-react';

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Quality Assurance CV- Pramod Sapkota.pdf';
    link.download = 'Quality Assurance CV- Pramod Sapkota.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  Pramod Sapkota
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-600 font-medium">
                 QA Engineer
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Passionate about ensuring software quality with 2+ years of experience in manual and automated testing. 
                I specialize in creating comprehensive test strategies that deliver reliable, user-friendly applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleDownloadResume}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </button>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/pramod-sapkota-663759197/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/pramod352"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                alt="Pramod Sapkota - QA Engineer"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-500/20 rounded-2xl transform rotate-6 scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;