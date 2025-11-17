import { AlertCircle } from "lucide-react";

const ErrorMessage = ({ message }) => (
  <div className="mt-10 flex flex-col items-center justify-center gap-4 py-12">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
      <AlertCircle className="h-8 w-8 text-red-300" aria-hidden="true" />
    </div>
    <div className="text-center">
      <p className="text-xl font-semibold text-white">{message}</p>
      <p className="mt-2 text-sm text-white/60">
        Lütfen daha sonra tekrar deneyin
      </p>
    </div>
  </div>
);

export default ErrorMessage;
