import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const carouselItems = [
  {
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    title: 'Collaboration',
    desc: 'Students working together on innovative projects.'
  },
  {
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    title: 'Mentorship',
    desc: 'Guidance from experienced mentors and industry leaders.'
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'Events',
    desc: 'Hackathons, workshops, and startup events.'
  },
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'Innovation',
    desc: 'Turning ideas into real-world solutions.'
  },
];

const AboutPreview: React.FC = () => (
  <motion.section
    className="my-20 px-4 text-center"
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
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl w-full h-48 object-cover mb-4 shadow-md"
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
);

export default AboutPreview; 