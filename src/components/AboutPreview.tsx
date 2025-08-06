import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import OptimizedImage from './ui/OptimizedImage';

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
);

export default AboutPreview; 