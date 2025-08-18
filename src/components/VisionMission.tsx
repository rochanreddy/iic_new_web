import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, CheckCircle } from 'lucide-react';

interface VisionMissionItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay: number;
}

function VisionMissionItem({ icon, title, description, features, delay }: VisionMissionItemProps) {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 text-white"
      >
        {icon}
      </motion.div>
      
      <motion.h3 
        className="text-2xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.2 }}
      >
        {title}
      </motion.h3>
      
      <motion.div 
        className="text-gray-600 leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
      >
        {title === "Mission" ? (
          <div className="space-y-4">
            {description.split('||').map((mission, index) => {
              const [missionTitle, missionText] = mission.split('|');
              return (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{missionTitle}</h4>
                  <p className="text-gray-600">{missionText}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <p>{description}</p>
        )}
      </motion.div>
      
      <motion.div 
        className="space-y-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.4 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 text-sm text-gray-700"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.5 + index * 0.1 }}
          >
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span>{feature}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

const VisionMission: React.FC = () => {
  const visionMissionData = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Vision",
      description: "To be a leading hub of innovation and entrepreneurship that empowers engineering and management students to transform ideas into impactful solutions, driving technological advancement and societal progress globally.",
      features: [
        "Empowering engineering & management students",
        "Transforming ideas into impactful solutions",
        "Driving technological advancement",
        "Creating global societal progress"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission",
      description: "Mission 1:|Foster a culture of creativity and innovation by providing state-of-the-art resources, mentorship, experiential learning, and collaborative spaces for both students and faculty.||Mission 2:|Encourage entrepreneurial thinking through outreach and inclusivity programs, workshops, incubation, hackathons, and industry partnerships that bridge academic learning with real-world applications.||Mission 3:|Nurture leadership, teamwork, develop ethical, skilled adaptable individuals visionary entrepreneurs and change makers contributing to societal growth through Sustainable, Knowledge-Driven initiatives.",
      features: [
        "State-of-the-art resources & mentorship",
        "Experiential learning & collaborative spaces",
        "Industry partnerships & real-world applications",
        "Sustainable knowledge-driven initiatives"
      ]
    }
  ];

  return (
    <motion.section
      className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
            Vision & Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving innovation and entrepreneurship through our clear vision and comprehensive mission
          </p>
        </motion.div>

        {/* Combined single window with its own scroll */}
        <motion.div
          className="relative rounded-3xl p-[1px] bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 shadow-[0_12px_30px_rgba(2,6,23,0.08)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-3xl bg-white/70 supports-[backdrop-filter]:bg-white/60 backdrop-blur ring-1 ring-black/5 overflow-hidden bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(147,51,234,0.08),transparent_55%)]">
            <div className="max-h-[540px] md:max-h-[620px] overflow-y-auto vm-scroll p-6 md:p-8 space-y-8">
              {visionMissionData.map((item, index) => (
                <VisionMissionItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  features={item.features}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VisionMission;
