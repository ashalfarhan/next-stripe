import { VscLoading } from "react-icons/vsc";

interface ComponentLoadingProps {
  error?: Error | null | undefined;
  isLoading?: boolean | undefined;
  pastDelay?: boolean | undefined;
  retry?: (() => void) | undefined;
  timedOut?: boolean | undefined;
}

export default function ComponentLoading({
  error,
  isLoading,
}: ComponentLoadingProps) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {isLoading && !error ? (
        <VscLoading className="animate-spin w-12 h-12" />
      ) : (
        <p>Failed to load</p>
      )}
    </div>
  );
}
