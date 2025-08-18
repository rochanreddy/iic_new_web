import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title
}) => {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative z-10 max-w-4xl max-h-[90vh] mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>
        
        {/* Image Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Title */}
          {title && (
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            </div>
          )}
          
          {/* Image */}
          <div className="relative">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto max-h-[70vh] object-contain"
              loading="eager"
            />
          </div>
          
          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50">
            <p className="text-sm text-gray-600 text-center">
              Click outside or press ESC to close
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal; 