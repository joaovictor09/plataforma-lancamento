import { Calendar, Clock8 } from 'lucide-react'

export function LessonDateAndHour({
  date,
  hour,
}: {
  date: string
  hour: string
}) {
  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-2 text-xl font-semibold">
        <Calendar size={24} className="text-blue-900" strokeWidth="2" />
        {date}
      </div>
      <div className="flex items-center gap-2 text-xl font-semibold">
        <Clock8 size={24} strokeWidth="2" className="text-blue-900" />
        {hour}
      </div>
    </div>
  )
}
