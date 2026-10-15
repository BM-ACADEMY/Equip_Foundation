import { useEffect, useState, useMemo, useRef, useCallback } from 'react'

export default function AutoCarousel({
  images = [],
  interval = 3000,
  itemsPerSlide = 1,
  imageHeight = 'h-64 sm:h-72 md:h-80 lg:h-[340px]',
  rounded = 'rounded-2xl',
  tone = 'default',
  className = '',
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Group images into slides (1 photo per slide by default)
  const slides = useMemo(() => {
    if (!images || images.length === 0) return []
    const chunks = []
    for (let i = 0; i < images.length; i += itemsPerSlide) {
      chunks.push(images.slice(i, i + itemsPerSlide))
    }
    return chunks
  }, [images, itemsPerSlide])

  const totalSlides = slides.length

  const handleNext = useCallback(() => {
    if (totalSlides <= 1) return
    setActiveIndex((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const handlePrev = useCallback(() => {
    if (totalSlides <= 1) return
    setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }, [totalSlides])

  // Auto-play interval with pause on hover
  useEffect(() => {
    if (totalSlides <= 1 || isPaused) return
    const timer = setInterval(() => {
      handleNext()
    }, interval)

    return () => clearInterval(timer)
  }, [totalSlides, isPaused, interval, handleNext])

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (diff > 50) {
      handleNext()
    } else if (diff < -50) {
      handlePrev()
    }
  }

  if (totalSlides === 0) return null

  const isDark = tone === 'on-dark'

  return (
    <div
      className={`group relative w-full ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide track wrapper */}
      <div className={`overflow-hidden w-full ${rounded}`}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, sIdx) => (
            <div
              key={sIdx}
              className={`w-full flex-shrink-0 grid ${
                slide.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
              } gap-4`}
            >
              {slide.map((img, idx) => (
                <div
                  key={`${img}-${idx}`}
                  className={`relative overflow-hidden ${rounded} shadow-md bg-surface-muted group/img`}
                >
                  <img
                    src={`/images/Home Page/${img}`}
                    alt="Equip Foundation work"
                    className={`w-full ${imageHeight} ${rounded} object-cover transition-transform duration-500 group-hover/img:scale-105`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dotted Navigation Alone */}
      {totalSlides > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 transition-all duration-300 rounded-full ${
                idx === activeIndex
                  ? isDark
                    ? 'w-7 bg-white'
                    : 'w-7 bg-brand-700'
                  : isDark
                    ? 'w-2 bg-white/40 hover:bg-white/70'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
