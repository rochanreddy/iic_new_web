import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OptimizedImage from './ui/OptimizedImage';
import ImageModal from './ui/ImageModal';

const IEEventsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);
  
  const quarterlyEvents = [
    {
      quarter: "Q1",
      title: "Innovation Kickoff",
      description: "Launch of new innovation initiatives and startup programs",
      image: "/images/events/1.png",
      activities: [
        "Innovation Workshop Series",
        "Startup Bootcamp",
        "Idea Pitching Competition",
        "Mentorship Program Launch"
      ]
    },
    {
      quarter: "Q2",
      title: "Growth & Development",
      description: "Focus on skill development and project implementation",
      image: "/images/events/2.png",
      activities: [
        "Advanced Technical Workshops",
        "Project Development Phase",
        "Industry Expert Sessions",
        "Progress Review Meetings"
      ]
    },
    {
      quarter: "Q3",
      title: "Acceleration Phase",
      description: "Intensive development and market preparation",
      image: "/images/events/3.png",
      activities: [
        "Market Research & Analysis",
        "Prototype Development",
        "Business Model Validation",
        "Investor Pitch Preparation"
      ]
    },
    {
      quarter: "Q4",
      title: "Showcase & Launch",
      description: "Final presentations and product launches",
      image: "/images/events/4.png",
      activities: [
        "Final Product Showcase",
        "Demo Day Events",
        "Award Ceremonies",
        "Next Year Planning"
      ]
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            IIC Events - Quarterly Schedule
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover our comprehensive quarterly innovation program designed to nurture creativity, 
            develop skills, and launch successful startups throughout the year.
          </p>
          
          {/* Mobile Schedule Overview - More Prominent */}
          <div className="md:hidden mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg p-6 mx-4 border-2 border-blue-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">📅 IIC Events Schedule</h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-blue-800 text-lg">Q1 - Innovation Kickoff</div>
                    <div className="text-blue-600 text-sm">Workshops • Bootcamps • Pitching</div>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Q1</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-green-800 text-lg">Q2 - Growth & Development</div>
                    <div className="text-green-600 text-sm">Technical Workshops • Project Development</div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Q2</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-yellow-800 text-lg">Q3 - Acceleration Phase</div>
                    <div className="text-yellow-600 text-sm">Market Research • Prototype Development</div>
                  </div>
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">Q3</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-purple-800 text-lg">Q4 - Showcase & Launch</div>
                    <div className="text-purple-600 text-sm">Demo Days • Awards • Final Presentations</div>
                  </div>
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Q4</div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 font-medium">🎯 Join us for an exciting year of innovation!</p>
            </div>
          </div>
        </div>

        {/* Mobile-First Timeline */}
        <div className="relative">
          {/* Mobile Timeline Line - Always Visible */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 h-full z-0"></div>

          {/* Events */}
          <div className="space-y-8 md:space-y-16">
            {quarterlyEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Mobile Timeline Dot - Always Visible */}
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Mobile Layout */}
                <div className="md:hidden ml-12">
                  <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
                    {/* Quarter Badge - More Prominent on Mobile */}
                    <div className={`inline-block px-4 py-2 rounded-full text-lg font-bold mb-4 ${
                      event.quarter === 'Q1' ? 'bg-blue-100 text-blue-800' :
                      event.quarter === 'Q2' ? 'bg-green-100 text-green-800' :
                      event.quarter === 'Q3' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {event.quarter}
                    </div>

                    {/* Title - Larger and More Prominent */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>

                    {/* Description - More Prominent */}
                    <p className="text-gray-700 mb-4 text-base font-medium">
                      {event.description}
                    </p>

                    {/* Activities - More Prominent for Students */}
                    <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-3 text-lg">🎯 Key Activities for Students:</h4>
                      <ul className="space-y-2">
                        {event.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-start text-gray-700 text-base">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="font-medium">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image - Full size on Mobile */}
                    <div className="mt-6">
                      <div 
                        className="cursor-pointer transform transition-transform duration-200 hover:scale-105"
                        onClick={() => setSelectedImage({
                          src: event.image,
                          alt: `${event.title} Event`,
                          title: `${event.quarter} - ${event.title}`
                        })}
                      >
                        <OptimizedImage
                          src={event.image}
                          alt={`${event.title} Event`}
                          className="w-full rounded-xl shadow-md"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-200 rounded-xl flex items-center justify-center">
                          <div className="bg-white bg-opacity-90 rounded-full p-2 opacity-0 hover:opacity-100 transition-opacity duration-200">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="text-center text-sm text-gray-500 mt-2">Click to view larger</p>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'} ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      {/* Quarter Badge */}
                      <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                        event.quarter === 'Q1' ? 'bg-blue-100 text-blue-800' :
                        event.quarter === 'Q2' ? 'bg-green-100 text-green-800' :
                        event.quarter === 'Q3' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {event.quarter}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-6">
                        {event.description}
                      </p>

                      {/* Activities */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 mb-3">Key Activities:</h4>
                        <ul className="space-y-2">
                          {event.activities.map((activity, activityIndex) => (
                            <li key={activityIndex} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                    <div 
                      className="relative group cursor-pointer"
                      onClick={() => setSelectedImage({
                        src: event.image,
                        alt: `${event.title} Event`,
                        title: `${event.quarter} - ${event.title}`
                      })}
                    >
                      <OptimizedImage
                        src={event.image}
                        alt={`${event.title} Event`}
                        className="w-full rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 rounded-2xl flex items-center justify-center">
                        <div className="bg-white bg-opacity-90 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-2">Click to view larger</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Innovation Journey?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Stay updated with our latest events and opportunities. Connect with us to be part of the next big innovation.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              Get Involved
            </button>
          </div>
        </div>
      </div>
      
      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
        title={selectedImage?.title}
      />
    </div>
  );
};

export default IEEventsPage; 