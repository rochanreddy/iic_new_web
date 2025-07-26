import { ArrowLeft, ArrowRight, ArrowUpRight, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Utility function for class names
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Button component implementation
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = ({ 
  className, 
  variant = 'default', 
  size = 'default', 
  children, 
  ...props 
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900",
    ghost: "hover:bg-gray-100 hover:text-gray-900",
    link: "text-blue-600 underline-offset-4 hover:underline"
  };
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10"
  };
  
  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

// Gallery interfaces
interface GallerySection {
  id: string;
  title: string;
  description: string;
  images: GalleryImage[];
}

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description?: string;
}

interface PhotoGalleryProps {
  sections?: GallerySection[];
  heading?: string;
  description?: string;
}

// Main Gallery Component
const PhotoGallery = ({
  sections = [
    {
      id: "esummit",
      title: "E-Summit 2024",
      description: "Highlights from our annual E-Summit event showcasing innovation and entrepreneurship",
      images: [
        {
          id: "esummit-1",
          url: "/images/esummit/RAN_3290.JPG",
          title: "E-Summit Opening Ceremony",
          description: "The grand opening of E-Summit 2024"
        },
        {
          id: "esummit-2", 
          url: "/images/esummit/RAN_3259.JPG",
          title: "Keynote Speakers",
          description: "Renowned speakers sharing insights on innovation"
        },
        {
          id: "esummit-3",
          url: "/images/esummit/RAN_3214.JPG",
          title: "Panel Discussion",
          description: "Expert panel discussing future of entrepreneurship"
        },
        {
          id: "esummit-4",
          url: "/images/esummit/RAN_3053.JPG",
          title: "Startup Pitch Competition",
          description: "Students presenting their innovative business ideas"
        },
        {
          id: "esummit-5",
          url: "/images/esummit/RAN_2909.JPG",
          title: "Innovation Workshop",
          description: "Hands-on workshop on design thinking"
        },
        {
          id: "esummit-6",
          url: "/images/esummit/RAN_2851.JPG",
          title: "Networking Session",
          description: "Students connecting with industry professionals"
        },
        {
          id: "esummit-7",
          url: "/images/esummit/RAN_2782.JPG",
          title: "Tech Exhibition",
          description: "Showcasing cutting-edge technology projects"
        },
        {
          id: "esummit-8",
          url: "/images/esummit/RAN_2743.JPG",
          title: "Award Ceremony",
          description: "Recognizing outstanding achievements"
        },
        {
          id: "esummit-9",
          url: "/images/esummit/RAN_2734.JPG",
          title: "Interactive Sessions",
          description: "Engaging workshops and activities"
        },
        {
          id: "esummit-10",
          url: "/images/esummit/RAN_2712.JPG",
          title: "Innovation Showcase",
          description: "Students demonstrating their projects"
        },
        {
          id: "esummit-11",
          url: "/images/esummit/RAN_2689.JPG",
          title: "Entrepreneurship Talks",
          description: "Inspiring talks from successful entrepreneurs"
        },
        {
          id: "esummit-12",
          url: "/images/esummit/RAN_2681.JPG",
          title: "Team Building Activities",
          description: "Collaborative activities fostering innovation"
        },
        {
          id: "esummit-13",
          url: "/images/esummit/RAN_2675.JPG",
          title: "Project Demonstrations",
          description: "Students showcasing their innovative solutions"
        },
        {
          id: "esummit-14",
          url: "/images/esummit/RAN_2575 (1).JPG",
          title: "Closing Ceremony",
          description: "Celebrating the success of E-Summit 2024"
        },
        {
          id: "esummit-15",
          url: "/images/esummit/RAN_2572.JPG",
          title: "Group Photo",
          description: "Memories from an amazing E-Summit experience"
        }
      ]
    }
  ],
  heading = "E-Summit 2024 Gallery",
  description = "Relive the excitement and innovation from our annual E-Summit event"
}: PhotoGalleryProps) => {
  const [activeSection, setActiveSection] = useState(0);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentSection = sections[activeSection];
  const totalImages = currentSection?.images.length || 0;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };



  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [totalImages]);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-20">
      {/* Header Section */}
      <motion.div 
        className="container mx-auto px-6 py-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {heading}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Main Featured Image at the Top */}
        <motion.div 
          className="relative group mx-auto max-w-3xl mb-8"
          key={`${activeSection}-${currentImageIndex}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
            className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-lg transition-all duration-300"
          >
            <motion.img
              key={currentSection?.images[currentImageIndex]?.url}
              src={currentSection?.images[currentImageIndex]?.url}
              alt={currentSection?.images[currentImageIndex]?.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button
                size="icon"
                variant="outline"
                onClick={() => openLightbox(currentSection?.images[currentImageIndex])}
                className="bg-white/80 backdrop-blur-sm hover:scale-110 hover:bg-blue-100 transition-transform duration-200"
              >
                <Eye className="size-4" />
              </Button>
            </div>
          </motion.div>
          {/* Image Navigation */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 left-4"
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Button
              size="icon"
              variant="outline"
              onClick={prevImage}
              className="bg-white/80 backdrop-blur-sm hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
            >
              <ArrowLeft className="size-4" />
            </Button>
          </motion.div>
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 right-4"
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Button
              size="icon"
              variant="outline"
              onClick={nextImage}
              className="bg-white/80 backdrop-blur-sm hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
            >
              <ArrowRight className="size-4" />
            </Button>
          </motion.div>
          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
            {currentImageIndex + 1} / {totalImages}
          </div>
        </motion.div>

        {/* Thumbnails Grid Surrounding the Main Image */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } }
          }}
        >
          {currentSection?.images.map((image, index) => (
            <motion.div
              key={image.id}
              className={cn(
                "aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shadow-md border-2",
                index === currentImageIndex 
                  ? "border-blue-600 ring-2 ring-blue-400 scale-105 z-10" 
                  : "border-transparent hover:scale-110 hover:shadow-xl hover:-translate-y-1 opacity-80 hover:opacity-100"
              )}
              onClick={() => setCurrentImageIndex(index)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ scale: 1.1, boxShadow: '0 8px 32px rgba(0,0,0,0.18)', y: -8 }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Image Details */}
        <motion.div 
          key={`${activeSection}-${currentImageIndex}-details`}
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-2">
            {currentSection?.images[currentImageIndex]?.title}
          </h3>
          <p className="text-gray-600">
            {currentSection?.images[currentImageIndex]?.description}
          </p>
        </motion.div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <Button
                size="icon"
                variant="outline"
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm"
              >
                <ArrowUpRight className="size-4 rotate-45" />
              </Button>
              
              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold">{selectedImage.title}</h3>
                {selectedImage.description && (
                  <p className="text-sm text-gray-600 mt-1">
                    {selectedImage.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery; 