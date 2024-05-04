import { AlertTriangleIcon } from "lucide-react";

type FormErrorProps = {
  message?: string;
};

export default function FormError({ message }: FormErrorProps) {
  if (!message) {
    return null;
  }

  return (
    <div className="flex items-center gap-1 rounded-md border border-red-800 bg-red-200 px-2 py-2 text-sm text-red-800">
      <AlertTriangleIcon size={19} />
      <p>{message}</p>
    </div>
  );
}
