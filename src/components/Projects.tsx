import React from 'react';
import { CheckCircle, Bug, Users } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Krispcall Cloud Telephony Testing ',
      description: 'Comprehensive testing framework for a cloud telephony with  payment gateways and multiple third party applications.',
      type: 'Web Application',
      duration: '1 Year 8 Month',
      team: 'more than 40 members',
      achievements: [
        'Designed end-to-end testing scenarios covering 15+ user journeys',
        'Automated 100+ test cases using Cypress',
        'Reduced manual testing time by 60% through automation',
        'Identified and resolved 50+ critical bugs'
      ],
      technologies: ['Cypress', 'Jenkins', 'AIO Test Cases', 'Insomnia', 'MySQL','MongoDb','Grafana','Datadog'],
      metrics: {
        testCases: '200+',
        bugsFound: '100+',
        coverage: '92%'
      }
    },
    {
      title: 'US HealthCare Project EHR',
      description: 'Worked on a US-based Electronic Health Records (EHR) platform, focusing on ensuring data accuracy, compliance, and reliability across core clinical features',
      type: 'Web Application',
      duration: '3 months',
      team: '15 members',
      achievements: [
        'Validated healthcare data standards like CCDA, and improved API test coverage for critical endpoints involving ICD codes and HCC mappings',
        'Performed DataBase testing using SQL queries',
        'Performed the API testing of the application',
        'Performed ingestion testing on the server to verify accurate fetching of risk gaps',
        'Automated the test cases using playwright of login module',
        'Give Demo in UAT to the stakeholder'
      ],
      technologies: ['Swagger', 'Qase', 'Postman', 'Playwright'],
      metrics: {
        testCases: '100+',
        bugsFound: '20',
        coverage: '92%'
      }
    }    
    
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured QA Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcase of comprehensive testing initiatives that delivered measurable improvements in software quality and user experience.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={16} className="mr-2 text-green-500" />
                        Duration: {project.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users size={16} className="mr-2 text-blue-500" />
                        Team Size: {project.team}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Bug size={16} className="mr-2 text-red-500" />
                        Bugs Resolved: {project.metrics.bugsFound}
                      </div>
                    </div>
                  </div>

                  <div className="lg:ml-8 mt-6 lg:mt-0">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{project.metrics.testCases}</div>
                        <div className="text-xs text-gray-600">Test Cases</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{project.metrics.coverage}</div>
                        <div className="text-xs text-gray-600">Coverage</div>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-red-600">{project.metrics.bugsFound}</div>
                        <div className="text-xs text-gray-600">Bugs Found</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start space-x-3">
                        <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                        <p className="text-gray-700 text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border hover:border-blue-300 hover:text-blue-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;