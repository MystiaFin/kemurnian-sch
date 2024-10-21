'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { StaticImageData } from 'next/image'

interface ImageSliderProps {
  images: (string | StaticImageData)[]
  autoSlideInterval?: number
}

export default function ImageSlider({ 
  images = [
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600'
  ],
  autoSlideInterval = 4500 
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const getImageIndex = (index: number) => {
    if (index < 0) return images.length - 1
    if (index >= images.length) return 0
    return index
  }

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(getImageIndex(index))
    setTimeout(() => setIsAnimating(false), 500)
  }, [images.length, isAnimating])

  const goToPrevious = () => goToSlide(currentIndex - 1)
  const goToNext = () => goToSlide(currentIndex + 1)

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext()
    }, autoSlideInterval)

    return () => clearInterval(timer)
  }, [goToNext, autoSlideInterval])

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="relative h-64 sm:h-72 md:h-96 lg:h-[450px] flex items-center justify-center">
        {[-1, 0, 1].map((offset) => {
          const index = getImageIndex(currentIndex + offset)
          return (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
                offset === -1 ? '-translate-x-full' : 
                offset === 1 ? 'translate-x-full' : 
                'translate-x-0'
              } ${offset !== 0 ? 'opacity-50' : 'opacity-100'}`}
              style={{
                transform: `translateX(${offset * 100}%)`,
                zIndex: offset === 0 ? 2 : 1,
              }}
            >
              <Image
                src={images[index]}
                alt={`Slide ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          )
        })}
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full z-10"
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full z-10"
        onClick={goToNext}
        aria-label="Next image"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}