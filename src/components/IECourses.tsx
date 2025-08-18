import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const IECourses: React.FC = () => {
  const navigate = useNavigate();

  const courseData = [
    // Academic Courses
    {
      slNo: 1,
      courseName: "Research Methodology & IPR",
      courseCode: "2212021",
      credits: "2",
      department: "CE",
      contactHours: "2",
      type: "Core",
      category: "Academic"
    },
    {
      slNo: 2,
      courseName: "Skill Development",
      courseCode: "2410596, 2420027, 2430597, 24X0598, 2230583",
      credits: "1",
      department: "CSE",
      contactHours: "2",
      type: "Core/ SDC",
      category: "Academic"
    },
    {
      slNo: 3,
      courseName: "Business Economics and Financial Analysis",
      courseCode: "2470010, 2480010, 2230016, 2480010",
      credits: "3",
      department: "CSE, EEE, IT, CSD, AI&ML",
      contactHours: "3",
      type: "Core",
      category: "Academic"
    },
    {
      slNo: 4,
      courseName: "Business Economics and Financial Analysis",
      courseCode: "2240016, 2230272, 2470010, 2230016, 2250016",
      credits: "3",
      department: "ECE, Civil, CSE, Mechanical, CSD, CSC, CSIT",
      contactHours: "3",
      type: "Core",
      category: "Academic"
    },
    {
      slNo: 5,
      courseName: "Fundamentals of Management",
      courseCode: "2270017",
      credits: "3",
      department: "ECE",
      contactHours: "3",
      type: "Core",
      category: "Academic"
    },
    {
      slNo: 6,
      courseName: "Design and Innovation",
      courseCode: "243ExL1",
      credits: "1",
      department: "EEE, CSD, AI&ML",
      contactHours: "2",
      type: "SDC",
      category: "Academic"
    },
    {
      slNo: 7,
      courseName: "Prototype/Model development and Entrepreneurship",
      courseCode: "244ExL2",
      credits: "1",
      department: "EEE, CSD, AI&ML",
      contactHours: "2",
      type: "SDC",
      category: "Academic"
    },
    {
      slNo: 8,
      courseName: "Intellectual Property Rights",
      courseCode: "2250024",
      credits: "0",
      department: "IT, CSIT",
      contactHours: "3",
      type: "Core",
      category: "Academic"
    },
    // Non-Academic Courses
    {
      slNo: 9,
      courseName: "Designing of model using fusion 360 for 3D printing",
      courseCode: "-",
      credits: "-",
      department: "ECE, Civil, CSE, Mechanical, CSD, CSC, CSIT, AIML, IT, EEE",
      contactHours: "2",
      type: "SDC",
      category: "Non-Academic"
    },
    {
      slNo: 10,
      courseName: "Design Thinking",
      courseCode: "-",
      credits: "-",
      department: "ECE, Civil, CSE, Mechanical, CSD, CSC, CSIT, AIML, IT, EEE",
      contactHours: "2",
      type: "SDC",
      category: "Non-Academic"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-black mb-4"
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

        {/* Course Data Table */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100 text-slate-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Sl No</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Course Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Course Code</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Credits</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Department</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Contact Hours/Week</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {courseData.map((course, index) => (
                    <React.Fragment key={course.slNo}>
                      {/* Category Header */}
                      {index === 0 || courseData[index - 1].category !== course.category ? (
                        <tr className="bg-gray-50">
                          <td colSpan={7} className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <GraduationCap className="w-5 h-5 text-blue-600" />
                              <span className="font-semibold text-gray-700 text-lg">
                                {course.category} Courses
                              </span>
                            </div>
                          </td>
                        </tr>
                      ) : null}
                      
                      {/* Course Row */}
                      <tr className={`border-b border-gray-100 hover:bg-blue-50/50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                      }`}>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          {course.slNo}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                          {course.courseName}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 font-mono">
                          {course.courseCode}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 text-center">
                          {course.credits}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {course.department}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 text-center">
                          {course.contactHours}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            course.type === 'Core' 
                              ? 'bg-blue-100 text-blue-800' 
                              : course.type === 'SDC' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-purple-100 text-purple-800'
                          }`}>
                            {course.type}
                          </span>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Innovation Journey?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Stay updated with our latest events and opportunities. Connect with us to be part of the next big innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/contact')}
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold"
              >
                Get Involved
              </Button>
              <Button 
                onClick={() => navigate('/register')}
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold"
              >
                Register Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IECourses; 