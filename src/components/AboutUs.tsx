import React, { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"
import { Eye, Target, Lightbulb, Users, Award, TrendingUp, Sparkles, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"

interface VisionMissionItemProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  delay: number
}

function VisionMissionItem({ icon, title, description, features, delay }: VisionMissionItemProps) {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 group hover:shadow-xl transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <motion.div
        className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
      >
        {icon}
      </motion.div>
      
      <motion.h3 
        className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.2 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-600 leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
      >
        {description}
      </motion.p>
      
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
  )
}

interface StatCounterProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      className="bg-white/70 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white hover:shadow-lg transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5, scale: 1.05 }}
    >
      <motion.div
        className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-3xl font-bold text-gray-800 flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-gray-600 text-sm mt-1">{label}</p>
      <motion.div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mt-3 group-hover:w-12 transition-all duration-300" />
    </motion.div>
  )
}

export function IICAboutSection() {
  const navigate = useNavigate()
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  const visionMissionData = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      description: "To be the leading innovation and incubation center that transforms groundbreaking ideas into successful ventures, fostering a culture of entrepreneurship and technological advancement.",
      features: [
        "Global recognition as innovation hub",
        "Sustainable technology solutions",
        "Empowering next-gen entrepreneurs",
        "Creating lasting societal impact"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "We provide comprehensive support, resources, and mentorship to startups and innovators, enabling them to develop cutting-edge solutions that address real-world challenges and drive economic growth.",
      features: [
        "Comprehensive startup support",
        "Expert mentorship programs",
        "State-of-the-art facilities",
        "Industry partnership network"
      ]
    }
  ]

  const stats = [
    { icon: <Lightbulb className="w-6 h-6" />, value: 250, label: "Startups Incubated", suffix: "+" },
    { icon: <Users className="w-6 h-6" />, value: 1500, label: "Entrepreneurs Supported", suffix: "+" },
    { icon: <Award className="w-6 h-6" />, value: 95, label: "Success Rate", suffix: "%" },
    { icon: <TrendingUp className="w-6 h-6" />, value: 50, label: "Million Funding Raised", suffix: "M+" },
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 text-gray-800 overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-400/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-400/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      
      {/* Floating particles */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-blue-400/40"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-purple-400/40"
        animate={{
          y: [0, 20, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="container mx-auto max-w-7xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/60 border border-blue-200/50 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.3)" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-5 w-5 text-blue-500" />
            </motion.div>
            <span className="text-sm font-medium text-gray-700">
              Innovation & Incubation Center
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
            variants={itemVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              Why Choose
            </span>
            <br />
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              IIC?
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Empowering innovation through comprehensive support, cutting-edge resources, and a thriving ecosystem of entrepreneurs and industry experts.
          </motion.p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
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

        {/* Why IIC Section */}
        <motion.div 
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200/50 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose IIC?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Innovation and Incubation Center stands as a beacon of entrepreneurial excellence, 
              providing unparalleled support and resources to transform innovative ideas into successful ventures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Expert Mentorship",
                description: "Access to industry veterans and successful entrepreneurs who guide your journey",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Cutting-edge Facilities",
                description: "State-of-the-art labs, co-working spaces, and prototyping facilities",
                icon: <Lightbulb className="w-6 h-6" />
              },
              {
                title: "Funding Opportunities",
                description: "Connect with investors, VCs, and funding programs to fuel your growth",
                icon: <TrendingUp className="w-6 h-6" />
              },
              {
                title: "Industry Networks",
                description: "Extensive partnerships with leading companies and organizations",
                icon: <Award className="w-6 h-6" />
              },
              {
                title: "Market Access",
                description: "Direct pathways to market entry and customer acquisition",
                icon: <Target className="w-6 h-6" />
              },
              {
                title: "Innovation Ecosystem",
                description: "Collaborative environment fostering creativity and breakthrough solutions",
                icon: <Sparkles className="w-6 h-6" />
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/80 rounded-xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Idea?
            </h3>
            <p className="text-blue-100 text-lg">
              Join our thriving community of innovators and entrepreneurs. Let's build the future together.
            </p>
          </div>
          <motion.div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8"
                onClick={() => navigate('/contact')}
              >
                Apply Now <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

const AboutUs: React.FC = () => {
  return <IICAboutSection />
}

export default AboutUs 