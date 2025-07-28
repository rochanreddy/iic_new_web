import { ArrowLeft, ArrowRight, ArrowUpRight, Eye } from "lucide-react";
import { useState } from "react";

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

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Show only 5 thumbnails around the current image
  const getVisibleThumbnails = () => {
    const images = currentSection?.images || [];
    const start = Math.max(0, currentImageIndex - 2);
    const end = Math.min(images.length, currentImageIndex + 3);
    return images.slice(start, end);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-20">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-10">
        <div className="text-center mb-8 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent opacity-0 animate-[slideUp_0.6s_ease-out_forwards]">
            {heading}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-[slideUp_0.6s_ease-out_0.2s_forwards]">
            {description}
          </p>
        </div>

        {/* Main Featured Image */}
        <div className="relative mx-auto max-w-3xl mb-8 opacity-0 animate-[fadeIn_0.6s_ease-out_0.3s_forwards]">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-lg transition-all duration-300 hover:shadow-xl">
            <img
              src={currentSection?.images[currentImageIndex]?.url}
              alt={currentSection?.images[currentImageIndex]?.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button
                size="icon"
                variant="outline"
                onClick={() => openLightbox(currentSection?.images[currentImageIndex])}
                className="bg-white/80 backdrop-blur-sm hover:bg-blue-100 transition-all duration-200 hover:scale-110"
              >
                <Eye className="size-4" />
              </Button>
            </div>
          </div>
          
          {/* Image Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 opacity-0 animate-[slideInLeft_0.6s_ease-out_0.7s_forwards]">
            <Button
              size="icon"
              variant="outline"
              onClick={prevImage}
              className="bg-white/80 backdrop-blur-sm hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 hover:scale-110"
            >
              <ArrowLeft className="size-4" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 opacity-0 animate-[slideInRight_0.6s_ease-out_0.7s_forwards]">
            <Button
              size="icon"
              variant="outline"
              onClick={nextImage}
              className="bg-white/80 backdrop-blur-sm hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 hover:scale-110"
            >
              <ArrowRight className="size-4" />
            </Button>
          </div>
          
          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm opacity-0 animate-[fadeIn_0.6s_ease-out_0.9s_forwards]">
            {currentImageIndex + 1} / {totalImages}
          </div>
        </div>

        {/* Simplified Thumbnails - Only show 5 at a time */}
        <div className="flex justify-center gap-2 max-w-2xl mx-auto mb-6 opacity-0 animate-[fadeIn_0.6s_ease-out_1.1s_forwards]">
          {getVisibleThumbnails().map((image, index) => {
            const actualIndex = Math.max(0, currentImageIndex - 2) + index;
            return (
              <div
                key={image.id}
                className={cn(
                  "w-16 h-16 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg",
                  actualIndex === currentImageIndex 
                    ? "border-blue-600 ring-2 ring-blue-400 scale-110 shadow-lg" 
                    : "border-gray-200 hover:border-blue-300"
                )}
                onClick={() => setCurrentImageIndex(actualIndex)}
                style={{ animationDelay: `${1.3 + index * 0.1}s` }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>

        {/* Image Details */}
        <div className="text-center opacity-0 animate-[fadeIn_0.6s_ease-out_1.8s_forwards]">
          <h3 className="text-xl font-semibold mb-2 transition-all duration-300">
            {currentSection?.images[currentImageIndex]?.title}
          </h3>
          <p className="text-gray-600 transition-all duration-300">
            {currentSection?.images[currentImageIndex]?.description}
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl max-h-full opacity-0 animate-[scaleIn_0.3s_ease-out_forwards]"
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
              className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm transition-all duration-200 hover:scale-110"
            >
              <ArrowUpRight className="size-4 rotate-45" />
            </Button>
            
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-lg p-4 opacity-0 animate-[slideUp_0.6s_ease-out_0.2s_forwards]">
              <h3 className="font-semibold">{selectedImage.title}</h3>
              {selectedImage.description && (
                <p className="text-sm text-gray-600 mt-1">
                  {selectedImage.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `
      }} />
    </div>
  );
};

export default PhotoGallery; 