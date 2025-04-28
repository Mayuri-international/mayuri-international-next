'use client';

import { useState, useEffect } from "react";
import { BriefcaseBusiness, Handshake, FileText, Loader2 } from "lucide-react";

const icons = [
  BriefcaseBusiness,
  Handshake,
  FileText,
];

const B2BFormSubmittingLoader = () => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 1500); // change every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = icons[currentIconIndex];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
      <div className="flex flex-col items-center space-y-6 p-8 rounded-2xl shadow-2xl bg-white animate-fadeIn">
        {/* Animated Changing Icon */}
        <CurrentIcon className="w-16 h-16 text-[#8b1c3c] animate-fadeIcon" />

        {/* Submitting Text */}
        <div className="flex items-center space-x-2">
          <Loader2 className="w-6 h-6 text-gray-700 animate-spin" />
          <span className="text-lg font-semibold text-gray-700 tracking-wide">
            Submitting Your Request...
          </span>
        </div>

        {/* Additional Text */}
        <p className="text-gray-500 text-center text-sm">
          Please wait while we process your enquiry.
        </p>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIcon {
          0% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.2); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-fadeIcon {
          animation: fadeIcon 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default B2BFormSubmittingLoader;
