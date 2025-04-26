'use client'

import { useEffect, useRef, useState } from 'react'
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'
import CircleBox from '../ui/CircleBox'

import SquareBox from '../common/SquareBox'

const HorizontalSlider = ({ preparedData, currentSubCategory, clickHandler, boxType = "circle" }) => {

  const containerRef = useRef(null)
  const [slideWidth, setSlideWidth] = useState(0)
  const loopMultiplier = 3 // original + 2 cloneson

  const loopedData = [...preparedData, ...preparedData, ...preparedData] // triple
  const originalStartIndex = preparedData.length

  const updateSlideWidth = () => {
    const screenWidth = window.innerWidth
    let perView = 6

    if (boxType === "square") perView = 4


    if (screenWidth <= 480) perView = 1


    else if (screenWidth <= 768) perView = 2
    else if (screenWidth <= 1024) perView = 3
    else if (screenWidth <= 1280) perView = 4

    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      setSlideWidth(containerWidth / perView)
    }
  }

  useEffect(() => {
    updateSlideWidth()
    window.addEventListener('resize', updateSlideWidth)
    return () => window.removeEventListener('resize', updateSlideWidth)
  }, [])

  // Position to center set on mount
  useEffect(() => {
    if (containerRef.current && slideWidth) {
      containerRef.current.scrollLeft = slideWidth * originalStartIndex
    }
  }, [slideWidth])

  // Infinite auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollBy({
          left: slideWidth + 5,
          behavior: 'smooth',
        })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [slideWidth])

  // Reset scroll when reaching edges to maintain loop
  const handleScroll = () => {
    if (!containerRef.current) return

    const scrollLeft = containerRef.current.scrollLeft
    const totalWidth = slideWidth * loopedData.length

    // Snap back to center block when reaching ends
    if (scrollLeft <= slideWidth) {
      containerRef.current.scrollLeft = slideWidth * originalStartIndex + scrollLeft
    } else if (scrollLeft >= totalWidth - slideWidth * originalStartIndex) {
      containerRef.current.scrollLeft = scrollLeft - slideWidth * originalStartIndex
    }
  }

  const scroll = (direction) => {
    if (containerRef.current) {
      const offset = direction === 'left' ? -slideWidth - 5 : slideWidth + 5
      containerRef.current.scrollBy({
        left: offset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="relative w-full h-full py-6 sm:py-10 bg-gradient-to-b from-white to-gray-50">
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 h-full z-30 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full cursor-pointer hide-below-350"
      >
        <BiSolidLeftArrow className="text-[#d1d3d2] hover:text-[#811235]" size={35} />
      </button>

      {/* Scrollable Container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="overflow-x-scroll scrollbar-hide flex snap-x snap-mandatory scroll-smooth"
      >
        {loopedData.map((item, idx) => (
          <div
            key={idx}
            style={{ minWidth: slideWidth }}
            className="flex-shrink-0 snap-start flex justify-center transition-transform duration-300 py-4"
            onClick={() => clickHandler(item.name,item._id)}
          >

            {

              boxType === "circle" ?
                <CircleBox
                  image={item.image}
                  name={item.name}
                  currentSubCategory={currentSubCategory || ""}
                /> :
                <SquareBox
                  image={item.image}
                  name={item.name}
                // currentSubCategory={currentSubCategory}
                />
            }
            {/* <CircleBox
              image={item.image}
              name={item.name}
              currentSubCategory={currentSubCategory}
            /> */}


          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute h-full right-0 bg-none top-1/2 -translate-y-1/2 z-30 p-2 bg-white rounded-full cursor-pointer hide-below-350"
      >
        <BiSolidRightArrow className="text-[#d1d3d2] hover:text-[#811235]" size={35} />
      </button>
    </div>
  )
}

export default HorizontalSlider


