import { TriangleAlertIcon } from "lucide-react";

export const Announcement = ({ message }: { message: string }) => {
  return (
    <div className="flex gap-2 border rounded p-4 bg-warning-25 border-warning-200 text-warning-500 dark:border-warning-800 dark:bg-warning-900/30">
      <TriangleAlertIcon className="w-20 h-20" />
      <div className="text-sm">
        {message.split("\n").map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
};
