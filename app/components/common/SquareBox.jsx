'use client'
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function SquareBox({ image, name }) {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  // Outside click handler
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal]);

  return (
    <>
      <div
        className="w-full xs:max-w-[200px] sm:max-w-[300px] md:max-w-[600px] rounded-md h-fit mx-3 bg-white shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="relative w-full h-32 sm:h-60 overflow-hidden rounded-md">
          <Image
            src={image || "https://mayuriinternational.com/images/home-furniture-gallery/sofa-set-3.jpg"}
            alt={name || "Furniture Image"}
            fill
            className="object-cover rounded-md transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <div className="text-center py-4">
          <p className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">
            #{name || "HOMEFURNITURE"}
          </p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all">
          <div
            ref={modalRef}
            className="relative bg-transparent p-4 w-full max-w-5xl mx-4 animate-fadeIn"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain transition duration-300 ease-in-out rounded-lg"
              />
            </div>

            <p className="text-center mt-6 text-base sm:text-lg font-semibold text-white tracking-wider uppercase">
              #{name}
            </p>
          </div>
        </div>
      )}


      {/* Optional animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;sub
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
