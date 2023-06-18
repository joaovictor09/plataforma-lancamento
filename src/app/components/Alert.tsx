export function Alert() {
  return (
    <div
      role="alert"
      className="fixed top-5 z-50 mx-5 animate-alert rounded border border-blue-900 bg-white p-4 shadow-xl"
    >
      <div className="flex items-start gap-4">
        <span className="text-blue-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-gray-900">
            {' '}
            Vaga garantida{' '}
          </strong>

          {/* <p className="mt-1 text-sm text-gray-700">
            Redirecionando você para a página de obrigado
          </p> */}
        </div>
      </div>
    </div>
  )
}
