import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OptimizedImage from './ui/OptimizedImage';
import ImageModal from './ui/ImageModal';

interface Coordinator {
  id: number;
  name: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  image: string;
  specialization: string;
  achievements: string[];
  description: string;
}

const FacultyCoordinators: React.FC = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  const coordinators: Coordinator[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      designation: "IIC Coordinator",
      department: "Computer Science",
      email: "sarah.johnson@iic.edu",
      phone: "+1 (555) 123-4567",
      image: "/images/team/AVML1211.JPG",
      specialization: "AI & ML",
      achievements: [
        "15+ startup projects",
        "25+ research papers",
        "Best Coordinator 2023"
      ],
      description: "Passionate educator with 10+ years in fostering student innovation."
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      designation: "Deputy Coordinator",
      department: "Mechanical Engineering",
      email: "michael.chen@iic.edu",
      phone: "+1 (555) 234-5678",
      image: "/images/team/WhatsApp Image 2025-07-28 at 13.52.16_9257660e.jpg",
      specialization: "Product Design",
      achievements: [
        "Rapid prototyping expert",
        "3 patent holder",
        "Industry specialist"
      ],
      description: "Industry expert guiding students in market-ready innovations."
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      designation: "Faculty Coordinator",
      department: "Electrical Engineering",
      email: "emily.rodriguez@iic.edu",
      phone: "+1 (555) 345-6789",
      image: "/images/team/WhatsApp Image 2025-07-28 at 15.10.35_81ec39a8.jpg",
      specialization: "IoT Systems",
      achievements: [
        "IoT expert",
        "Smart city leader",
        "Workshop facilitator"
      ],
      description: "Specializes in IoT challenges and innovation lifecycle."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            IIC Faculty Coordinators
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Meet our dedicated faculty coordinators fostering innovation and entrepreneurship.
          </p>
        </div>

        {/* Coordinators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coordinators.map((coordinator) => (
            <div key={coordinator.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Image Section */}
              <div className="relative overflow-hidden rounded-t-xl">
                <div 
                  className="cursor-pointer"
                  onClick={() => setSelectedImage({
                    src: coordinator.image,
                    alt: `${coordinator.name} - ${coordinator.designation}`,
                    title: `${coordinator.name} - ${coordinator.designation}`
                  })}
                >
                  <OptimizedImage
                    src={coordinator.image}
                    alt={`${coordinator.name} - ${coordinator.designation}`}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  </div>
                </div>
                
                {/* Designation Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {coordinator.designation}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                {/* Name and Department */}
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {coordinator.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-1">
                    {coordinator.department}
                  </p>
                  <p className="text-gray-600 text-xs">
                    {coordinator.specialization}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  {coordinator.description}
                </p>

                {/* Contact Information */}
                <div className="space-y-1 mb-3">
                  <div className="flex items-center text-xs text-gray-600">
                    <svg className="w-3 h-3 mr-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${coordinator.email}`} className="hover:text-blue-600 transition-colors truncate">
                      {coordinator.email}
                    </a>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <svg className="w-3 h-3 mr-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${coordinator.phone}`} className="hover:text-blue-600 transition-colors">
                      {coordinator.phone}
                    </a>
                  </div>
                </div>

                {/* Achievements */}
                <div className="border-t border-gray-200 pt-3">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Achievements</h4>
                  <ul className="space-y-1">
                    {coordinator.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-3">
              Ready to Connect?
            </h3>
            <p className="text-blue-100 mb-4 max-w-xl mx-auto text-sm">
              Our coordinators are here to guide your innovation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 text-sm"
              >
                Contact Us
              </button>
              <button 
                onClick={() => navigate('/ie/events')}
                className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 text-sm"
              >
                View Events
              </button>
            </div>
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

export default FacultyCoordinators; 