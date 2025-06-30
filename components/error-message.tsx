// components/ErrorMessage.tsx

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({ message = "An error has occurred!" }: ErrorMessageProps) {
  return (
    <div className="p-4 bg-red-100 text-red-700 rounded-md text-center font-medium">
      {message}
    </div>
  );
}
