import React from 'react';
import { Code, Settings, Database, Globe, Shield, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Testing Frameworks & Tools',
      skills: [
        'Cypress',
        'Postman',
        'AIO Test Cases',
        'Qase Test Management Tools',
        'REST Assured',
        'JMeter',
        'Playwright'
      ]
    },
    {
      icon: Database,
      title: 'Database & API Testing',
      skills: [
        'SQL Server',
        'MySQL',
        'MondoDB',
        'PostgreSQL',
        'REST API Testing',
        'GraphQL',
        'JSON/XML',
        'Database Validation',
        'Data Migration Testing'
      ]
    },
    {
      icon: Globe,
      title: 'Web & Mobile Testing',
      skills: [
        'Cross-browser Testing',
        'Responsive Design Testing',
        'Mobile App Testing',
        'iOS/Android Testing',
        'Accessibility Testing',
        'Usability Testing',
        'Progressive Web Apps',
        'Browser DevTools'
      ]
    },
    {
      icon: Shield,
      title: 'Testing Types & Methodologies',
      skills: [
        'Functional Testing',
        'Regression Testing',
        'Integration Testing',
        'Performance Testing',
        'Security Testing',
        'User Acceptance Testing',
        'Smoke Testing',
        'Boundary Testing'
      ]
    },
    {
      icon: Zap,
      title: 'Programming & Scripting',
      skills: [
        'JavaScript',
        'TypeScript',
        'HTML/CSS',
        'Shell Scripting',
        'SQL Queries'
      ]
    }
  ];

  const certifications = [
    ' Software Engineering / Software Engineering and SSAD- Manipal Pro Learn',
    'Software Testing-Great Academy Learning',
    'Managing Big Data Using MySQL-Coursera',
    'AWS Academy Graduate - AWS Academy Cloud Foundations, Amazon Web Services(AWS)'
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through hands-on experience in diverse testing environments and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <category.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200 hover:border-blue-300 hover:text-blue-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Certifications & Training
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;