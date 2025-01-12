import { ShareIcon } from "lucide-react";
import { ButtonHTMLAttributes, useState } from "react";

import { CopiedIcon } from "../Icons/CopiedIcon";

type ShareButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  label?: boolean;
  description?: string;
  url?: string;
};

export const ShareButton = ({
  title,
  description: text,
  label = true,
  url,
  ...props
}: ShareButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const share = async () => {
    try {
      await navigator.share({
        title,
        text,
        url: url || window.location.href,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const copyToClipboard = async () => {
    try {
      navigator.clipboard.writeText(url || window.location.href);
      setIsCopied(() => !isCopied);
      setTimeout(() => setIsCopied(false), 1500);
    } catch (err) {
      console.error("failed to copyToClipboard");
    }
  };

  return (
    <button
      className="
                rounded-full p-2.5 border bg-background hover:bg-foreground/5 transition-colors duration-200 disabled:bg-background"
      onClick={navigator.canShare() ? share : copyToClipboard}
      disabled={isCopied}
      {...props}
    >
      <div className="flex items-center gap-2 text-sm px-1">
        {!isCopied ? (
          <>
            <ShareIcon className="w-5 h-5 md:w-4 md:h-4" />
            {label && <span>Share</span>}
          </>
        ) : (
          <>
            <CopiedIcon className="w-5 h-5 md:w-4 md:h-4" />
            {label && <span>Copied</span>}
          </>
        )}
      </div>
    </button>
  );
};
