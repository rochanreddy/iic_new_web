import React, { useRef, useEffect, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
} from "framer-motion";
import { Lightbulb, Users, Briefcase, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 0.9], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div
      className="w-full bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 font-sans"
      ref={containerRef}
    >
      <div className="max-w-4xl mx-auto py-20 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl mb-4 text-foreground max-w-4xl font-bold"
        >
          Our Roadmap & Goals
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-sm md:text-base max-w-2xl"
        >
          Empowering innovation and fostering entrepreneurship through strategic initiatives and collaborative partnerships.
        </motion.p>
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto pb-20 px-4">
        {/* Timeline vertical line and items */}
        <div className="absolute left-8 md:left-9 top-0 h-full w-0 flex flex-col items-center z-0">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="w-[2px] bg-gradient-to-t from-blue-500 via-purple-500 to-transparent from-[0%] via-[10%] rounded-full h-full"
          />
        </div>
        {data.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ item, index }: { item: TimelineEntry; index: number }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex justify-start pt-6 md:pt-40 md:gap-10"
    >
      <div className="sticky flex flex-col md:flex-row z-30 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="relative flex flex-col items-center w-10">
          <motion.div 
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
            className="h-10 w-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-lg z-10"
          >
            <div className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-2" />
          </motion.div>
        </div>
        <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-foreground">
          {item.title}
        </h3>
      </div>

      <div className="relative pl-16 pr-4 md:pl-4 w-full z-0">
        <h3 className="md:hidden block text-2xl mb-3 text-left font-bold text-foreground">
          {item.title}
        </h3>
        {item.content}
      </div>
    </motion.div>
  );
};

const GoalCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  delay?: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.6, delay }}
      className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300 group"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const IICRoadmap = () => {
  const navigate = useNavigate();
  
  const roadmapData: TimelineEntry[] = [
    {
      title: "Empower Student Innovators",
      content: (
        <div className="space-y-4 md:space-y-6">
          <GoalCard
            icon={Lightbulb}
            title="Innovation Culture"
            description="Foster a culture of innovation by supporting student-led ideas and projects through mentorship programs and funding opportunities."
            delay={0.1}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 p-6 rounded-xl border-2 border-blue-300 dark:border-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-3 text-lg">Key Initiatives</h5>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  Idea incubation workshops
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  Prototype development support
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  Patent filing assistance
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40 p-6 rounded-xl border-2 border-purple-300 dark:border-purple-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-3 text-lg">Expected Outcomes</h5>
              <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                  50+ student projects annually
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                  10+ patents filed
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                  Innovation mindset development
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "Bridge Industry & Academia",
      content: (
        <div className="space-y-4 md:space-y-6">
          <GoalCard
            icon={Users}
            title="Strategic Partnerships"
            description="Create opportunities to collaborate with startups, companies, and mentors to bridge the gap between academic learning and industry requirements."
            delay={0.1}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-green-100 via-blue-100 to-teal-100 dark:from-green-900/40 dark:via-blue-900/40 dark:to-teal-900/40 p-6 md:p-8 rounded-xl border-2 border-green-300 dark:border-green-600 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h5 className="font-bold text-green-900 dark:text-green-100 mb-4 text-xl">Partnership Programs</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center p-4 bg-white/60 dark:bg-black/30 rounded-lg border border-green-200 dark:border-green-700 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-green-700 dark:text-green-300 mb-1">25+</div>
                <div className="text-sm font-semibold text-green-800 dark:text-green-200">Industry Partners</div>
              </div>
              <div className="text-center p-4 bg-white/60 dark:bg-black/30 rounded-lg border border-blue-200 dark:border-blue-700 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-1">100+</div>
                <div className="text-sm font-semibold text-blue-800 dark:text-blue-200">Mentors Network</div>
              </div>
              <div className="text-center p-4 bg-white/60 dark:bg-black/30 rounded-lg border border-purple-200 dark:border-purple-700 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-1">15+</div>
                <div className="text-sm font-semibold text-purple-800 dark:text-purple-200">Collaboration Projects</div>
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "Enable Real-World Experience",
      content: (
        <div className="space-y-4 md:space-y-6">
          <GoalCard
            icon={Briefcase}
            title="Hands-on Learning"
            description="Offer internships, hackathons, and micro-projects for hands-on learning experiences that prepare students for the professional world."
            delay={0.1}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <h5 className="font-semibold text-foreground mb-3">Upcoming Events</h5>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Innovation Hackathon</span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">March 2026</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Industry Internship Fair</span>
                  <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">April 2026</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-muted-foreground">Startup Pitch Competition</span>
                  <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">May 2026</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <h5 className="font-semibold text-foreground mb-3">Success Metrics</h5>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Student Participation</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-foreground">75%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Project Completion</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-foreground">80%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Industry Placement</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-3/5 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-foreground">60%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "Build a Startup Ecosystem",
      content: (
        <div className="space-y-4 md:space-y-6">
          <GoalCard
            icon={Rocket}
            title="Venture Incubation"
            description="Incubate and support early-stage ventures from ideation to launch, creating a thriving startup ecosystem within the college."
            delay={0.1}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-950/20 dark:via-red-950/20 dark:to-pink-950/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800"
          >
            <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-4">Incubation Pipeline</h5>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-medium text-foreground">Ideation</div>
                <div className="text-xs text-muted-foreground mt-1">20+ Ideas</div>
              </div>
              <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-medium text-foreground">Validation</div>
                <div className="text-xs text-muted-foreground mt-1">10+ MVPs</div>
              </div>
              <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-medium text-foreground">Launch</div>
                <div className="text-xs text-muted-foreground mt-1">2+ Startups</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center p-6 bg-card border border-border rounded-xl"
          >
            <h5 className="font-semibold text-foreground mb-2">Join the Innovation Journey</h5>
            <p className="text-muted-foreground text-sm mb-4">
              Be part of our mission to create the next generation of innovators and entrepreneurs.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-shadow cursor-pointer"
            >
              Get Involved
            </motion.button>
          </motion.div>
        </div>
      ),
    },
  ];

  return <Timeline data={roadmapData} />;
};

export default IICRoadmap; 