import { LoaderSpinner } from '@/shared/components'

const LoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <LoaderSpinner size="md" className="mb-4" />
      <p className="text-gray-500 text-sm">Just a moment...</p>
    </div>
  )
}

export default LoadingState
