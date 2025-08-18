import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Users, Send, User, GraduationCap, Calendar, Hash, AtSign, CheckCircle } from "lucide-react";
import { Button } from './ui/button';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    year: '',
    rollNumber: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<typeof formData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.branch) newErrors.branch = 'Branch is required';
    if (!formData.year) newErrors.year = 'Year is required';
    if (!formData.rollNumber.trim()) newErrors.rollNumber = 'Roll number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof formData]) {
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
      // Google Form field IDs for Contact Us form (you'll need to replace these with your actual field IDs)
      const googleFormData = {
        'entry.1234567890': formData.name,           // Name field ID
        'entry.0987654321': formData.branch,         // Branch field ID
        'entry.1122334455': formData.year,           // Year field ID
        'entry.5566778899': formData.rollNumber,     // Roll Number field ID
        'entry.9988776655': formData.email           // Email field ID
      };

      // Google Form formResponse endpoint for Contact Us (replace with your actual form URL)
      const formUrl = 'https://docs.google.com/forms/d/e/YOUR_CONTACT_FORM_ID/formResponse';
      
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
      
      // Reset form after successful submission
      setFormData({
        name: '',
        branch: '',
        year: '',
        rollNumber: '',
        email: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your contact form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for contacting us! We've received your message and will get back to you soon.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Send Another Message
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="navbar-safe-top min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 font-sans">
      {/* Header Section */}
      <div className="relative text-white overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.12),transparent_55%)]">
          <div className="max-w-7xl mx-auto px-4 py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-black">
              Contact Us
            </h1>
            <p className="text-lg md:text-2xl text-black max-w-2xl mx-auto">
              Please fill out the form below to get in touch with us
            </p>
          </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/80 supports-[backdrop-filter]:bg-white/70 backdrop-blur rounded-2xl p-6 ring-1 ring-slate-900/5 shadow-[0_8px_30px_rgba(2,6,23,0.08)]">
                              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">iic@mlritm.ac.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 8148625005</p>
                    <p className="text-gray-600">+91 7569501144</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Innovation & Incubation Center<br />
                      MLRITM Dundigal, Hyderabad
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 10:00 AM - 4:00 PM<br /> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Modern Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/80 supports-[backdrop-filter]:bg-white/70 backdrop-blur rounded-2xl p-8 ring-1 ring-slate-900/5 shadow-[0_8px_30px_rgba(2,6,23,0.08)]">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Contact Form
                </h2>
                <p className="text-gray-600 text-lg mb-4">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                {/* Google Form Alternative */}
                <div className="bg-blue-50/70 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">Prefer Google Forms?</h3>
                      <p className="text-blue-700 text-sm">You can also use our Google Form for easier submission</p>
                    </div>
                    <a 
                      href="YOUR_GOOGLE_FORM_LINK_HERE" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Open Google Form
                    </a>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
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
                    className={`w-full pl-12 pr-4 py-4 border rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-sm ${
                      errors.name ? 'border-red-500' : 'border-gray-200 hover:border-blue-300'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 ml-1">{errors.name}</p>
                  )}
                </div>

                {/* Branch Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <GraduationCap className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleInputChange}
                    required
                    className={`w-full pl-12 pr-4 py-4 border rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 appearance-none cursor-pointer shadow-sm ${
                      errors.branch ? 'border-red-500' : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <option value="">Select Branch</option>
                    <option value="Cse">Cse</option>
                    <option value="It">It</option>
                    <option value="Ece">Ece</option>
                    <option value="Mech">Mechanical </option>
                    <option value="Civil">Civil </option>
                    <option value="Eee">Eee</option>                
                    <option value="Csm">Csm</option>
                    <option value="Csd">Csd</option>
                    <option value="Csc">Csc</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {errors.branch && (
                    <p className="text-red-500 text-sm mt-1 ml-1">{errors.branch}</p>
                  )}
                </div>

                {/* Year Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    required
                    className={`w-full pl-12 pr-4 py-4 border rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 appearance-none cursor-pointer shadow-sm ${
                      errors.year ? 'border-red-500' : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <option value="">Select Year of Graduation</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
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

                {/* Roll Number Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Hash className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="rollNumber"
                    value={formData.rollNumber}
                    onChange={handleInputChange}
                    placeholder="Roll Number"
                    required
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 shadow-sm"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <AtSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 shadow-sm"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Redirecting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit via Google Form
                    </>
                  )}
                </motion.button>
              </form>

             </div>
          </motion.div>
        </div>
        </div>
    </div>
  );
};

export default ContactUs; 