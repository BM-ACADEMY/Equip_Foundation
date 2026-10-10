import { useEffect, useRef, useState, useCallback } from 'react'

export default function AutoCarousel({ images, interval = 3000, className = '' }) {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return
    const scroller = scrollRef.current
    const children = scroller.children
    if (children.length === 0) return
    
    // Calculate based on first child width + gap-4 (16px)
    const itemWidth = children[0].offsetWidth + 16
    // Use Math.round to find which item is most visible
    const newIndex = Math.round(scroller.scrollLeft / itemWidth)
    
    // Ensure index is within bounds
    const safeIndex = Math.min(Math.max(newIndex, 0), images.length - 1)
    if (safeIndex !== activeIndex) {
      setActiveIndex(safeIndex)
    }
  }, [activeIndex, images.length])

  const scrollTo = useCallback((index) => {
    if (!scrollRef.current) return
    const scroller = scrollRef.current
    const children = scroller.children
    if (children.length > 0) {
      const itemWidth = children[0].offsetWidth + 16
      scroller.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth'
      })
    }
  }, [])

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      const nextIndex = activeIndex >= images.length - 1 ? 0 : activeIndex + 1
      scrollTo(nextIndex)
    }, interval)

    return () => clearInterval(scrollInterval)
  }, [activeIndex, interval, scrollTo, images.length])

  return (
    <div className={`group relative w-full ${className}`}>
      {/* Scroll container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 scrollbar-hide w-full px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img, idx) => (
          <div key={`${img}-${idx}`} className="flex-shrink-0 snap-center first:pl-2 last:pr-2">
            <img
              src={`/images/Home Page/${img}`}
              className="w-64 h-48 md:w-80 md:h-64 rounded-2xl object-cover shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              alt="Equip Foundation work"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={() => scrollTo(activeIndex - 1)}
        disabled={activeIndex === 0}
        aria-label="Previous slide"
        className="absolute left-4 top-[calc(50%-1.25rem)] -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-md text-ink hover:bg-white hover:scale-110 transition-all disabled:opacity-0 disabled:pointer-events-none opacity-0 group-hover:opacity-100 z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        onClick={() => scrollTo(activeIndex + 1)}
        disabled={activeIndex >= images.length - 1}
        aria-label="Next slide"
        className="absolute right-4 top-[calc(50%-1.25rem)] -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-md text-ink hover:bg-white hover:scale-110 transition-all disabled:opacity-0 disabled:pointer-events-none opacity-0 group-hover:opacity-100 z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Modern Dot Navigation */}
      <div className="absolute bottom-1 left-0 right-0 flex justify-center items-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === activeIndex 
                ? 'w-8 bg-brand-700' 
                : 'w-2 bg-gray-300 hover:bg-gray-400 hover:scale-110'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
