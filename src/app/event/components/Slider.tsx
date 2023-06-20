'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { LessonCard } from './LessonCard'

interface lessonProps {
  id: string
  slug: string
  title: string
  description: string
  thumbImage?: {
    url: string
  }
}

interface SliderProps {
  lessons: lessonProps[]
}

export function Slider({ lessons }: SliderProps) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    rtl: false,
    slides: { perView: 'auto', spacing: 20 },
  })

  return (
    <div
      ref={sliderRef}
      className="keen-slider ml-16 overflow-hidden rounded-xl"
    >
      {lessons.map((lesson, index) => (
        <div
          key={lesson.id}
          className={`keen-slider__slide number-slide${index + 1}`}
        >
          <LessonCard
            index={index}
            description={lesson.description}
            thumbImage={lesson.thumbImage.url || null}
            slug={lesson.slug}
            title={lesson.title}
            lessonNumber={index + 1}
            totalLessonQuantity={lessons.length}
          />
        </div>
      ))}
    </div>
  )
}
