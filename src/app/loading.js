export default function Loading() {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="relative">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse text-primary font-semibold">Loading...</div>
          </div>
        </div>
      </div>
    )
  }
  