import React from 'react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
        {
      title: 'Quality Assurance Engineer',
      company: 'Maitri Services Pvt. Ltd.',
      location: 'Onsite-Kathmandu',
      period: 'March 17 2025- Currently Working ',
      achievements: [
        'Validated healthcare data standards like CCDA, and improved API test coverage for critical endpoints involving ICD codes and HCC mappings',
        'Verified data integrity through SQL queries, and identified critical issues in clinical workflows, enhancing overall system reliability',
        'Performed ingestion testing on the server to verify accurate fetching of risk gaps',
        'Developed Playwright automation scripts to streamline the application login flow, including dynamically retrieving OTPs from the database.'
      ]
    },
     {
      title: 'Associate Quality Assurance Engineer',
      company: 'Krispcall Telephony(Codavatar PVE.LTD.)',
      location: 'Singapore',
      period: 'July-2 2023 - March-12 2025',
      achievements: [
 'Experienced QA Engineer with expertise in manual and automated testing across web and API platforms',
 'Proven in creating test plans, executing test cases, and identifying defects through detailed regression testing',
 'Skilled in SQL for data validation, Cypress for automation, and Postman/Insomnia for API testing',
 'Successfully tested 50+ third-party CRM integrations at KrispCall',
 'Experienced in OWASP ZAP for security testing. Strong Agile team contributor and recognized mentor, improving team productivity by 15% through knowledge sharing and best practices',
'Recognized for mentoring junior QA engineers and driving a 15% increase in team satisfaction and productivity through knowledge sharing and best practices'
  ]
    },
    {
      title: 'Nobel Internship',
      company: 'Nobel',
      location: 'Remote',
      period: '90 hours',
      achievements: [
     'Leadership Development',
        'Networking',
        'Technical Skills Enhancement',
        'Communication Skills'
      ]
    }
    
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my QA engineering journey, highlighting key achievements and contributions to software quality.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <h4 className="text-lg font-semibold text-blue-600">{exp.company}</h4>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="font-semibold text-gray-900 mb-4">Key Achievements & Responsibilities:</h5>
                {exp.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;