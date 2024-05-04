import { CheckCircle2Icon } from "lucide-react";

type FormSuccessProps = {
  message?: string;
};

export default function FormSuccess({ message }: FormSuccessProps) {
  if (!message) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-2 rounded-md border border-emerald-800 bg-emerald-300 px-2 py-2.5 text-sm text-emerald-800">
      <CheckCircle2Icon size={20} />
      <p className="font-medium">{message}</p>
    </div>
  );
}
