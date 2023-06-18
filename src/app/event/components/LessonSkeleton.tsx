export function LessonSkeleton() {
  return (
    <div className="group w-full">
      <span className="flex w-full animate-pulse rounded bg-gray-600">
        &nbsp;
      </span>
      <div className="mt-2 flex animate-pulse flex-col gap-4 rounded bg-gray-600 p-4">
        <header className="flex items-center justify-between gap-2">
          <span className="flex w-full animate-pulse items-center gap-2 rounded bg-gray-500 text-sm">
            {/* <CheckCircle size={20}/> */}
            &nbsp; <br /> &nbsp;
          </span>

          <span className="w-1/3 animate-pulse rounded bg-gray-500 px-2 text-sm text-transparent">
            &nbsp; <br /> &nbsp;
          </span>
        </header>
        <span className="w-full animate-pulse rounded bg-gray-500">
          &nbsp; <br /> &nbsp; &nbsp; <br /> &nbsp;
        </span>
      </div>
    </div>
  )
}
