import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Pramod Sapkota</h3>
            <p className="text-gray-400">
              QA Engineer passionate about delivering exceptional software quality through comprehensive testing strategies.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Specializations</h4>
            <div className="space-y-2 text-gray-400">
              <div>Automated Testing</div>
              <div>API Testing</div>
              <div>Performance Testing</div>
              <div>Mobile App Testing</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" fill="currentColor" />
              <span>by Pramod Sapkota</span>
            </div>
            <div className="mt-4 md:mt-0 text-gray-400">
              © 2025 Pramod Sapkota. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;