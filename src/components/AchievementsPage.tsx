"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { Award, Trophy, Star, Users, Calendar, Target, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  impact: string;
  participants?: number;
}

interface AchievementsPageProps {
  className?: string;
}

const defaultAchievements: Achievement[] = [
  {
    id: 1,
    title: "National Innovation Challenge Winner",
    description: "Our IIC team secured first place in the National Innovation Challenge 2024, developing a groundbreaking AI-powered solution for sustainable agriculture. The project demonstrated exceptional technical excellence and real-world impact.",
    date: "March 2024",
    category: "Competition",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
    impact: "₹5 Lakh Prize Money",
    participants: 25
  },
  {
    id: 2,
    title: "Smart City Hackathon Champions",
    description: "Developed an innovative IoT-based traffic management system that won the Smart City Hackathon. The solution promises to reduce traffic congestion by 40% in urban areas through intelligent signal optimization.",
    date: "January 2024",
    category: "Hackathon",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
    impact: "40% Traffic Reduction",
    participants: 15
  },
  {
    id: 3,
    title: "Best Startup Incubation Program",
    description: "Our IIC was recognized as the Best Startup Incubation Program in the region, having successfully incubated 12 startups with a combined valuation of over ₹50 crores. The program has created 200+ jobs.",
    date: "November 2023",
    category: "Recognition",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    impact: "₹50 Cr+ Valuation",
    participants: 200
  },
  {
    id: 4,
    title: "International Research Publication",
    description: "Published groundbreaking research on quantum computing applications in IEEE's top-tier journal. The research has been cited over 100 times and opened new avenues for quantum algorithm development.",
    date: "September 2023",
    category: "Research",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
    impact: "100+ Citations",
    participants: 8
  },
  {
    id: 5,
    title: "Green Technology Innovation Award",
    description: "Received the prestigious Green Technology Innovation Award for developing a revolutionary solar panel efficiency enhancement system. The technology increases solar energy output by 35% using AI-driven optimization.",
    date: "July 2023",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
    impact: "35% Efficiency Boost",
    participants: 18
  },
  {
    id: 6,
    title: "Student Entrepreneur of the Year",
    description: "Our IIC member was awarded Student Entrepreneur of the Year for creating a successful EdTech startup that has impacted over 10,000 students across 50+ colleges. The platform revolutionizes online learning experiences.",
    date: "May 2023",
    category: "Entrepreneurship",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    impact: "10K+ Students Impacted",
    participants: 1
  }
];

const categoryIcons = {
  Competition: Trophy,
  Hackathon: Target,
  Recognition: Award,
  Research: Star,
  Innovation: Users,
  Entrepreneurship: Calendar
};

const categoryColors = {
  Competition: "from-yellow-400 to-orange-500",
  Hackathon: "from-blue-400 to-indigo-500",
  Recognition: "from-purple-400 to-pink-500",
  Research: "from-green-400 to-teal-500",
  Innovation: "from-red-400 to-rose-500",
  Entrepreneurship: "from-indigo-400 to-purple-500"
};

export function AchievementsPage({ className }: AchievementsPageProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % defaultAchievements.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const nextAchievement = () => {
    setActiveIndex((prev) => (prev + 1) % defaultAchievements.length);
  };

  const prevAchievement = () => {
    setActiveIndex((prev) => (prev - 1 + defaultAchievements.length) % defaultAchievements.length);
  };

  return (
    <section
      ref={sectionRef}
      className={cn("min-h-screen bg-background py-20 overflow-hidden", className)}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Award className="h-5 w-5 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-foreground">
              ✨ Why IIC Excellence
            </span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight"
            variants={itemVariants}
          >
            <span className="text-foreground">Our</span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
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
              Achievements
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Celebrating innovation, excellence, and impact through our Institution's Innovation Cell journey
          </motion.p>
        </motion.div>

        {/* Featured Achievement Carousel */}
        <motion.div className="mb-20" variants={itemVariants}>
          <div className="relative max-w-5xl mx-auto">
            <div className="relative h-[600px] perspective-1000">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 300, rotateY: 45 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -300, rotateY: -45 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0"
                >
                  <div className="relative h-full bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                    
                    <div className="relative z-10 h-full flex flex-col md:flex-row">
                      {/* Image Section */}
                      <div className="md:w-1/2 h-64 md:h-full relative overflow-hidden">
                        <motion.img
                          src={defaultAchievements[activeIndex].image}
                          alt={defaultAchievements[activeIndex].title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        
                        {/* Category Badge */}
                        <motion.div
                          className={`absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r ${categoryColors[defaultAchievements[activeIndex].category as keyof typeof categoryColors]} text-white font-medium text-sm`}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, duration: 0.3 }}
                        >
                          {defaultAchievements[activeIndex].category}
                        </motion.div>
                      </div>

                      {/* Content Section */}
                      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <motion.div
                          className="flex items-center gap-3 mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {React.createElement(categoryIcons[defaultAchievements[activeIndex].category as keyof typeof categoryIcons], {
                            className: "h-6 w-6 text-primary"
                          })}
                          <span className="text-sm text-muted-foreground font-medium">
                            {defaultAchievements[activeIndex].date}
                          </span>
                        </motion.div>

                        <motion.h3
                          className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {defaultAchievements[activeIndex].title}
                        </motion.h3>

                        <motion.p
                          className="text-muted-foreground leading-relaxed mb-8 text-lg"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {defaultAchievements[activeIndex].description}
                        </motion.p>

                        {/* Impact Stats */}
                        <motion.div
                          className="grid grid-cols-2 gap-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                            <div className="text-2xl font-bold text-primary mb-1">
                              {defaultAchievements[activeIndex].impact}
                            </div>
                            <div className="text-sm text-muted-foreground">Impact</div>
                          </div>
                          <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                            <div className="text-2xl font-bold text-secondary-foreground mb-1">
                              {defaultAchievements[activeIndex].participants}+
                            </div>
                            <div className="text-sm text-muted-foreground">Participants</div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <motion.button
                onClick={prevAchievement}
                className="p-3 rounded-full bg-card border border-border hover:bg-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <div className="flex gap-3">
                {defaultAchievements.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex 
                        ? 'bg-primary scale-125' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextAchievement}
                className="p-3 rounded-full bg-card border border-border hover:bg-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* All Achievements Grid */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            All Our Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {defaultAchievements.map((achievement, index) => {
              const IconComponent = categoryIcons[achievement.category as keyof typeof categoryIcons];
              
              return (
                <motion.div
                  key={achievement.id}
                  variants={cardVariants}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(achievement.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${categoryColors[achievement.category as keyof typeof categoryColors]} text-white text-xs font-medium`}>
                        {achievement.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <IconComponent className="h-5 w-5 text-primary" />
                        <span className="text-sm text-muted-foreground">{achievement.date}</span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {achievement.description}
                      </p>

                      {/* Stats */}
                      <div className="flex justify-between items-center pt-4 border-t border-border">
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">{achievement.impact}</div>
                          <div className="text-xs text-muted-foreground">Impact</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-secondary-foreground">{achievement.participants}+</div>
                          <div className="text-xs text-muted-foreground">People</div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      animate={hoveredCard === achievement.id ? { opacity: 1 } : { opacity: 0 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {[
            { number: "50+", label: "Awards Won" },
            { number: "200+", label: "Students Impacted" },
            { number: "₹10Cr+", label: "Total Impact Value" },
            { number: "15+", label: "Startups Incubated" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-muted-foreground text-sm font-medium group-hover:text-foreground transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function AchievementsPageDemo() {
  return <AchievementsPage />;
} 