export function LessonNumber({ number }: { number: string }) {
  return (
    <div className="w-max rounded-xl border border-gray-800 bg-gradient-to-r from-sky-500 to-blue-950 p-[1px]">
      <div className="back flex w-full items-center justify-center rounded-xl bg-gray-900 p-5">
        <span className=" bg-gradient-to-r from-sky-600 to-blue-800 bg-clip-text text-xl font-extrabold text-transparent">
          {number}
        </span>
      </div>
    </div>
  )
}
