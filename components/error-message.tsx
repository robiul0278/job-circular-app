// components/ErrorMessage.tsx

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({
  message = "An error has occurred!",
}: ErrorMessageProps) {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-300 max-w-md w-full text-center animate-pulse">
        <div className="text-red-500 text-5xl mb-4">⚠️</div>
        <h2 className="text-2xl font-semibold text-red-600 mb-2">Oops!</h2>
        <p className="text-gray-700">{message}</p>
      </div>
    </div>
  );
}
