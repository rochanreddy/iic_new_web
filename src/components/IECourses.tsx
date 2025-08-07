import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Clock, Award, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const IECourses: React.FC = () => {
  const navigate = useNavigate();

  const courseFeatures = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Comprehensive Curriculum",
      description: "Industry-relevant courses covering innovation, entrepreneurship, and business development."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Mentorship",
      description: "Learn from experienced entrepreneurs and industry professionals."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Learning",
      description: "Self-paced courses with practical assignments and real-world projects."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification",
      description: "Earn recognized certificates upon successful completion of courses."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            I&E Courses
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our comprehensive Innovation & Entrepreneurship courses designed to transform your ideas into successful ventures.
          </motion.p>
        </div>

        {/* Course Images */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto">
            <img 
              src="/images/i&eCourse/Screenshot 2025-08-07 234150.png" 
              alt="I&E Courses Overview Part 1" 
              className="w-full h-auto rounded-t-xl shadow-lg"
            />
            <img 
              src="/images/i&eCourse/Screenshot 2025-08-07 234212.png" 
              alt="I&E Courses Overview Part 2" 
              className="w-full h-auto rounded-b-xl shadow-lg"
            />
          </div>
        </motion.div>

        {/* Course Features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {courseFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Innovation Journey?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join our I&E courses and gain the skills, knowledge, and network needed to turn your innovative ideas into successful businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/contact')}
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                onClick={() => navigate('/ie/events')}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold"
              >
                View Events
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IECourses; 