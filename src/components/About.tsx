import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Target, label: 'Test Cases Created', value: '1,500+' },
    { icon: Users, label: 'Cross-functional Teams', value: '8+' },
    { icon: Award, label: 'Critical Bugs Found', value: '200+' },
    { icon: TrendingUp, label: 'Release Success Rate', value: '99.8%' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A detail-oriented QA Engineer committed to delivering exceptional software quality through comprehensive testing strategies and continuous improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">My QA Journey</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                With over 2 years of dedicated experience in quality assurance, I've developed a comprehensive understanding of software testing methodologies, from manual exploratory testing to sophisticated automated test frameworks.
              </p>
              <p>
                I began my career as an internship in QA testing, where I quickly discovered my passion for finding edge cases and ensuring seamless user experiences. This curiosity led me to master various testing tools and methodologies, eventually specializing in both functional and non-functional testing.
              </p>
              <p>
                Today, I work closely with development teams to implement quality gates throughout the SDLC, ensuring that quality is built into the product from the ground up rather than being an afterthought.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="QA Testing Process"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                <stat.icon className="text-blue-600" size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;