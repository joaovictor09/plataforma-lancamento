export function VideoSkeleton() {
  return (
    <div className="flex-1">
      {/* VIDEO DIV */}

      <div className="flex justify-center bg-zinc-900">
        <div className="aspect-video h-full max-h-[60vh] w-full max-w-[1100px]">
          {/* <Youtube videoID={data?.lesson?.videoId!} /> */}
          <div className="aspect-video h-full w-full animate-pulse bg-zinc-700" />
        </div>
      </div>

      {/* LESSON AND TEACHER INFORMATIONS DIV */}

      <div className="mx-auto max-w-[1100px] p-8">
        <div className="flex flex-col items-start gap-16 sm:flex-row">
          {/* LESSON INFORMATIONS */}

          <div className="flex-1">
            <h1 className="w-1/2 animate-pulse rounded bg-gray-600 text-2xl">
              &nbsp;
            </h1>
            <p className="mt-4 w-full animate-pulse rounded bg-gray-600">
              &nbsp; <br /> &nbsp; <br /> &nbsp; <br /> &nbsp;
            </p>

            {/* TEACHER INFORMATIONS */}

            <div className="mt-6 flex items-center gap-4">
              <div className="aspect-square h-16 animate-pulse items-center rounded-full bg-gray-600" />

              <div className="w-full leading-relaxed">
                <strong className="block w-1/3 animate-pulse rounded bg-gray-600 text-2xl">
                  &nbsp;
                </strong>
                <span className="mt-1 block w-1/4 animate-pulse rounded bg-gray-600 text-sm text-zinc-600">
                  &nbsp;
                </span>
              </div>
            </div>
          </div>

          {/* DISCORD AND CHALLENGE DIV */}

          <div className="flex w-full flex-col gap-4 sm:w-1/3 md:w-auto">
            <div className="text-small flex animate-pulse items-center justify-center gap-2 rounded bg-gray-600 p-4 text-transparent">
              <div className="h-6 w-6" />
              Comunidade do Whatsapp
            </div>

            <div className="text-small flex animate-pulse items-center justify-center gap-2 rounded bg-gray-600 p-4 text-transparent">
              <div className="h-6 w-6" />
              Comunidade do Whatsapp
            </div>
          </div>
        </div>

        {/* WALLPAPERS AND MATERIALS DIV */}
      </div>
    </div>
  )
}
