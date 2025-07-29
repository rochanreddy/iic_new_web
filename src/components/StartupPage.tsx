"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
    showArrow?: boolean;
  }
>(({ className, sideOffset = 4, showArrow = false, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "relative z-50 max-w-[280px] rounded-lg border border-border bg-popover px-3 py-1.5 text-sm text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    >
      {props.children}
      {showArrow && (
        <TooltipPrimitive.Arrow className="-my-px fill-popover drop-shadow-[0_1px_0_hsl(var(--border))]" />
      )}
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

interface StepCardProps {
  stepNumber: number;
  title: string;
  imageSrc: string;
  tooltipContent: string;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, title, imageSrc, tooltipContent }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
            {/* Step Number Badge */}
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
              {stepNumber}
            </div>
            
            {/* Image */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src={imageSrc} 
                  alt={title}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            
            {/* Title */}
            <h3 className="font-bold text-gray-900 text-center mb-2 text-sm leading-tight">
              {title}
            </h3>
            
            {/* Subtext - Hidden on mobile */}
            <p className="text-xs text-gray-500 text-center md:block hidden">
              Hover for details
            </p>
            
            {/* Mobile Description - Visible only on mobile */}
            <div className="md:hidden mt-3 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700 leading-relaxed">
                {tooltipContent}
              </p>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent 
          side="bottom" 
          className="bg-white border border-gray-200 shadow-lg md:block hidden"
          showArrow={true}
        >
          <p className="text-gray-700 max-w-[200px]">{tooltipContent}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const StepFlowSection: React.FC = () => {
  const steps = [
    {
      stepNumber: 1,
      title: "Create Account on Startup India Portal",
      imageSrc: "/images/startup logo/Screenshot 2025-07-28 134346.png",
      tooltipContent: "Register your startup on the official Startup India portal with basic company information and founder details."
    },
    {
      stepNumber: 2,
      title: "Incorporate Your Startup",
      imageSrc: "/images/startup logo/Screenshot 2025-07-28 134409.png",
      tooltipContent: "Complete the legal incorporation process by registering your company as a Private Limited Company, LLP, or Partnership."
    },
    {
      stepNumber: 3,
      title: "Upload Required Documents",
      imageSrc: "/images/startup logo/Screenshot 2025-07-28 134435.png",
      tooltipContent: "Submit all necessary documents including incorporation certificate, PAN card, and other regulatory documents."
    },
    {
      stepNumber: 4,
      title: "Fill Application Form",
      imageSrc: "/images/startup logo/Screenshot 2025-07-28 134455.png",
      tooltipContent: "Complete the detailed application form with information about your business model, innovation, and scalability potential."
    },
    {
      stepNumber: 5,
      title: "Apply for DPIIT Recognition",
      imageSrc: "/images/startup logo/Screenshot 2025-07-28 134527.png",
      tooltipContent: "Submit your application to the Department for Promotion of Industry and Internal Trade for official startup recognition."
    },
    {
      stepNumber: 6,
      title: "Submit the Application",
      imageSrc: "/images/startup logo/Screenshot 2025-07-28 134539.png",
      tooltipContent: "Finalize and submit your complete application package with all required documents and information."
    },
    {
      stepNumber: 7,
      title: "DPIIT Evaluation",
      imageSrc: "/images/startup logo/Screenshot 2025-07-28 134547.png",
      tooltipContent: "DPIIT reviews your application, verifies documents, and evaluates your startup against recognition criteria."
    },
    {
      stepNumber: 8,
      title: "Get Recognized",
      imageSrc: "/images/startup logo/Screenshot 2025-07-28 134600.png",
      tooltipContent: "Receive official DPIIT recognition certificate and unlock various government benefits and schemes for startups."
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Startup India Recognition Process
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Follow these 8 simple steps to get your startup officially recognized by DPIIT and unlock government benefits
        </p>
      </div>
      
      {/* Desktop and Tablet Layout - 2 rows of 4 cards */}
      <div className="hidden md:block">
        {/* First Row */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {steps.slice(0, 4).map((step) => (
            <StepCard
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              imageSrc={step.imageSrc}
              tooltipContent={step.tooltipContent}
            />
          ))}
        </div>
        
        {/* Connection Line */}
        <div className="flex justify-center mb-8">
          <div className="w-3/4 h-0.5 bg-gray-300"></div>
        </div>
        
        {/* Second Row */}
        <div className="grid grid-cols-4 gap-6">
          {steps.slice(4, 8).map((step) => (
            <StepCard
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              imageSrc={step.imageSrc}
              tooltipContent={step.tooltipContent}
            />
          ))}
        </div>
      </div>
      
      {/* Mobile Layout - Single column */}
      <div className="md:hidden space-y-6">
        {steps.map((step) => (
          <StepCard
            key={step.stepNumber}
            stepNumber={step.stepNumber}
            title={step.title}
            imageSrc={step.imageSrc}
            tooltipContent={step.tooltipContent}
          />
        ))}
      </div>
    </div>
  );
};

const StartupPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <StepFlowSection />
    </div>
  );
};

export default StartupPage; 