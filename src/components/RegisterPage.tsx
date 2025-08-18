import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Hash, GraduationCap, Calendar, Phone, Mail, FileText, Target, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

interface FormData {
  name: string;
  rollNo: string;
  dept: string;
  year: string;
  contactNumber: string;
  mail: string;
  reasonPurpose: string;
  domain: string;
}

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    rollNo: '',
    dept: '',
    year: '',
    contactNumber: '',
    mail: '',
    reasonPurpose: '',
    domain: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const departments = [
    'Computer Science',
    'Electronics and Communication',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electrical Engineering',
    'Chemical Engineering',
    'Biotechnology'
  ];

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

  const domains = [
    'Intermshii',
    'Machine Learning',
    'Data Science',
    'Cybersecurity',
    'Web Development',
    'Mobile App Development',
    'Cloud Computing',
    'Internet of Things (IoT)',
    'Robotics',
    'Bioinformatics',
    'Aerospace'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.rollNo.trim()) newErrors.rollNo = 'Roll number is required';
    if (!formData.dept) newErrors.dept = 'Department is required';
    if (!formData.year) newErrors.year = 'Year is required';
    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
    if (!formData.mail.trim()) newErrors.mail = 'Email is required';
    if (!formData.mail.includes('@')) newErrors.mail = 'Valid email is required';
    if (!formData.reasonPurpose.trim()) newErrors.reasonPurpose = 'Reason/Purpose is required';
    if (!formData.domain) newErrors.domain = 'Domain is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Google Form field IDs mapped from your prefilled URL
      const googleFormData = {
        'entry.1218703520': formData.name,           // Name
        'entry.1579542061': formData.rollNo,         // Roll Number
        'entry.104592945':  formData.dept,           // Department
        'entry.432112087':  formData.year,           // Year
        'entry.416397510':  formData.contactNumber,  // Contact Number
        'entry.1183764118': formData.mail,           // Email
        'entry.1125557005': formData.reasonPurpose,  // Reason/Purpose
        'entry.597236666':  formData.domain          // Domain of Interest
      };

      // Google Form formResponse endpoint for your form
      const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdc61E_VoJvxekyGLN3Dj1rxHVHS712v5cKx6Vq8nU_ap15jA/formResponse';
      
      // Create form data for submission
      const formDataToSend = new FormData();
      Object.entries(googleFormData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Submit to Google Form using fetch
      const response = await fetch(formUrl, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors' // This is required for Google Forms
      });

      // Since we're using no-cors, we can't read the response
      // But the form should be submitted successfully
      setIsSubmitted(true);
      
      // Open WhatsApp group invitation after successful submission
      setTimeout(() => {
        openWhatsAppGroup();
      }, 1000);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        rollNo: '',
        dept: '',
        year: '',
        contactNumber: '',
        mail: '',
        reasonPurpose: '',
        domain: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsAppGroup = () => {
    // Replace this URL with your actual WhatsApp group invitation link
    const whatsappGroupUrl = 'https://chat.whatsapp.com/YOUR_GROUP_INVITATION_CODE';
    
    // Open WhatsApp group invitation in a new tab
    window.open(whatsappGroupUrl, '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for registering with IIC! We've received your application and will get back to you soon.
            <br /><br />
            <span className="text-blue-600 font-medium">WhatsApp will open automatically to join our group.</span>
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Register Another
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="navbar-safe-top min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      {/* Header Section (matching ContactUs) */}
      <div className="relative overflow-hidden bg-white">
        <div className="">
          <div className="max-w-7xl mx-auto px-4 py-20 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-black">
                IIC Registration
              </h1>
              <p className="text-lg md:text-2xl text-black max-w-2xl mx-auto">
                Join the Innovation & Incubation Council and be part of our mission to foster creativity, entrepreneurship, and technological advancement.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 supports-[backdrop-filter]:bg-white/70 backdrop-blur rounded-2xl p-8 md:p-12 ring-1 ring-slate-900/5 shadow-[0_8px_30px_rgba(2,6,23,0.08)]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Roll Number Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                  className={`w-full pl-12 pr-4 py-4 border rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                    errors.name ? 'border-red-500' : 'border-gray-200 hover:border-blue-300'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 ml-1">{errors.name}</p>
                )}
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Hash className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="rollNo"
                  value={formData.rollNo}
                  onChange={handleInputChange}
                  placeholder="Roll Number"
                  required
                  className={`w-full pl-12 pr-4 py-4 border rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                    errors.rollNo ? 'border-red-500' : 'border-gray-200 hover:border-blue-300'
                  }`}
                />
                {errors.rollNo && (
                  <p className="text-red-500 text-sm mt-1 ml-1">{errors.rollNo}</p>
                )}
              </div>
            </div>

            {/* Department and Year Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <GraduationCap className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  name="dept"
                  value={formData.dept}
                  onChange={handleInputChange}
                  required
                  className={`w-full pl-12 pr-4 py-4 border rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 appearance-none cursor-pointer ${
                    errors.dept ? 'border-red-500' : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <option value="">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {errors.dept && (
                  <p className="text-red-500 text-sm mt-1 ml-1">{errors.dept}</p>
                )}
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  required
                  className={`w-full pl-12 pr-4 py-4 border rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 appearance-none cursor-pointer ${
                    errors.year ? 'border-red-500' : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <option value="">Select Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {errors.year && (
                  <p className="text-red-500 text-sm mt-1 ml-1">{errors.year}</p>
                )}
              </div>
            </div>

            {/* Contact Number and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Contact Number"
                  required
                  className={`w-full pl-12 pr-4 py-4 border rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                    errors.contactNumber ? 'border-red-500' : 'border-gray-200 hover:border-blue-300'
                  }`}
                />
                {errors.contactNumber && (
                  <p className="text-red-500 text-sm mt-1 ml-1">{errors.contactNumber}</p>
                )}
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="mail"
                  value={formData.mail}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className={`w-full pl-12 pr-4 py-4 border rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                    errors.mail ? 'border-red-500' : 'border-gray-200 hover:border-blue-300'
                  }`}
                />
                {errors.mail && (
                  <p className="text-red-500 text-sm mt-1 ml-1">{errors.mail}</p>
                )}
              </div>
            </div>

            {/* Reason/Purpose */}
            <div className="relative">
              <div className="absolute top-4 left-4 flex items-start pointer-events-none">
                <FileText className="h-5 w-5 text-gray-400 mt-1" />
              </div>
              <textarea
                name="reasonPurpose"
                value={formData.reasonPurpose}
                onChange={handleInputChange}
                placeholder="Tell us why you want to join IIC and what you hope to achieve..."
                required
                rows={4}
                className={`w-full pl-12 pr-4 py-4 border rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none ${
                  errors.reasonPurpose ? 'border-red-500' : 'border-gray-200 hover:border-blue-300'
                }`}
              />
              {errors.reasonPurpose && (
                <p className="text-red-500 text-sm mt-1 ml-1">{errors.reasonPurpose}</p>
              )}
            </div>

            {/* Domain */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Target className="h-5 w-5 text-gray-400" />
              </div>
              <select
                name="domain"
                value={formData.domain}
                onChange={handleInputChange}
                required
                className={`w-full pl-12 pr-4 py-4 border rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 appearance-none cursor-pointer ${
                  errors.domain ? 'border-red-500' : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <option value="">Select Your Area of Interest</option>
                {domains.map((domain) => (
                  <option key={domain} value={domain}>{domain}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {errors.domain && (
                <p className="text-red-500 text-sm mt-1 ml-1">{errors.domain}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Registration
                  </>
                )}
              </Button>
            </div>
          </form>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50/70 to-purple-50/70 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">What happens next?</h3>
            <p className="text-blue-700 text-sm">
              After submitting your registration, our team will review your application and contact you 
              within 2-3 business days with next steps and opportunities to get involved.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;
