import React, { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"
import { Lightbulb, Users, Award, TrendingUp, Sparkles, ArrowRight, Handshake, Network, Briefcase, Globe2 } from "lucide-react"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import OptimizedImage from './ui/OptimizedImage';

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
      className="bg-white/70 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center"
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
        className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 text-white"
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-3xl font-bold text-gray-800 flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-gray-600 text-sm mt-1">{label}</p>
      <motion.div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mt-3" />
    </motion.div>
  )
}

const carouselItems = [
  {
    image: '/images/heroSection/WhatsApp Image 2025-08-05 at 15.37.16_bd44757e.jpg',
    title: 'IIC Innovation Hub',
    desc: 'Our state-of-the-art innovation center where ideas come to life.'
  },
  {
    image: '/images/heroSection/WhatsApp Image 2025-07-28 at 11.43.42_15bd2c62.jpg',
    title: 'Student Collaboration',
    desc: 'Students working together on innovative projects and solutions.'
  },
  {
    image: '/images/heroSection/WhatsApp Image 2025-07-28 at 11.43.42_0253870e.jpg',
    title: 'Workshop Sessions',
    desc: 'Interactive workshops and skill development programs.'
  },
  {
    image: '/images/heroSection/WhatsApp Image 2025-07-28 at 11.43.41_dc67afd3.jpg',
    title: 'Innovation Events',
    desc: 'Exciting events showcasing creativity and entrepreneurship.'
  },
];

export function IICAboutSection() {
  const navigate = useNavigate()
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const partnershipRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })
  const isPartnershipInView = useInView(partnershipRef, { once: false, amount: 0.3 })

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

  const stats = [
    { icon: <Lightbulb className="w-6 h-6" />, value: 25, label: "Startups Incubated", suffix: "+" },
    { icon: <Users className="w-6 h-6" />, value: 150, label: "Entrepreneurs Supported", suffix: "+" },
    { icon: <Award className="w-6 h-6" />, value: 93, label: "Success Rate", suffix: "%" },
  ]

  const partnershipStats = [
    { icon: <Handshake className="w-6 h-6" />, value: 25, label: "Industry Partners", suffix: "+" },
    { icon: <Network className="w-6 h-6" />, value: 100, label: "Mentors Network", suffix: "+" },
    { icon: <Briefcase className="w-6 h-6" />, value: 15, label: "Collaboration Projects", suffix: "+" },
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
        {/* About IIC Section */}
        <motion.section
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
            {/* Left: About Text */}
            <div className="flex-1 min-w-[260px] md:text-left text-center">
              <h3 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700">
                About IIC
              </h3>
              <p className="text-lg sm:text-xl text-slate-700 font-medium max-w-2xl mx-auto md:mx-0 mb-2">
                The Innovation & Incubation Council (IIC) is the creative heartbeat of our campus—where ideas spark, teams collaborate, and bold visions become reality. We nurture a culture of curiosity, entrepreneurship, and hands-on problem-solving, bridging imagination with real-world impact.
              </p>
              <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto md:mx-0">
                Empowering Innovators. Igniting Change.
              </p>
            </div>
            {/* Right: Carousel */}
            <div className="flex-1 w-full max-w-xs md:max-w-sm lg:max-w-md">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                spaceBetween={24}
                slidesPerView={1}
                className="rounded-2xl shadow-xl bg-white/60 backdrop-blur-md about-swiper"
              >
                {carouselItems.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="flex flex-col items-center p-4">
                      <OptimizedImage
                        src={item.image}
                        alt={item.title}
                        className="rounded-xl w-full h-48 mb-4 shadow-md"
                        loading="lazy"
                      />
                      <div className="font-bold text-lg text-blue-700 mb-1">{item.title}</div>
                      <div className="text-slate-600 text-sm">{item.desc}</div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <style>{`
                .about-swiper .swiper-pagination {
                  position: static;
                  margin-top: 12px;
                  text-align: center;
                }
                .about-swiper .swiper-pagination-bullet {
                  background: #6366f1;
                  opacity: 0.4;
                  transition: opacity 0.2s;
                }
                .about-swiper .swiper-pagination-bullet-active {
                  opacity: 1;
                  background: #3b82f6;
                }
              `}</style>
            </div>
          </div>
        </motion.section>

        {/* Header Section */}

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
              Our institute innovation council stands as a beacon of entrepreneurial excellence, 
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
                icon: <Globe2 className="w-6 h-6" />
              },
              {
                title: "Innovation Ecosystem",
                description: "Collaborative environment fostering creativity and breakthrough solutions",
                icon: <Sparkles className="w-6 h-6" />
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/80 rounded-xl p-6 border border-gray-200/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}

              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
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
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
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

        {/* Partnership Programs Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Partnership Programs
          </h3>
          <motion.div 
            ref={partnershipRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            animate={isPartnershipInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {partnershipStats.map((stat, index) => (
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
        </motion.div>

        {/* Collaborations & Partners Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Collaborations & Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {[
              { name: 'MHRD' },
              { name: 'AICTE' },
              { name: 'ARIIA' },
              { name: 'Startup India' }
            ].map((partner, idx) => (
              <motion.div
                key={idx}
                className="w-32 h-20 bg-white/70 rounded-lg flex items-center justify-center border border-slate-200/40 shadow backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <span className="text-slate-500 font-medium">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 md:p-12 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join Our Innovation Journey?
            </h3>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto mb-6">
              Stay updated with our latest events and opportunities. Connect with us to be part of the next big innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-white text-blue-600 font-semibold px-8" onClick={() => navigate('/contact')}>
                Get Involved
              </Button>
              <Button className="bg-white text-blue-600 font-semibold px-8" onClick={() => navigate('/register')}>
                Register Now
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

const AboutUs: React.FC = () => {
  return <IICAboutSection />
}

export default AboutUs 