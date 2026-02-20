import { ShareIcon } from "lucide-react";
import { ButtonHTMLAttributes, useState } from "react";
import useShare from "~/hooks/useShare";

import { CopiedIcon } from "../Icons/CopiedIcon";

type ShareButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  label?: boolean;
  url?: string;
};

export const ShareButton = ({
  title,
  label = true,
  url,
  ...props
}: ShareButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { share } = useShare();

  const handleClick = async () => {
    const shareUrl = url || window.location.href;
    const result = await share({ url: shareUrl, title });

    if (result.copied) {
      setIsCopied(true);
      setShowToast(true);
      setTimeout(() => {
        setIsCopied(false);
        setShowToast(false);
      }, 2000);
    }
  };

  return (
    <div className="relative">
      <button
        className="rounded-full p-2.5 border bg-background hover:bg-foreground/5 transition-colors duration-200 disabled:bg-background"
        onClick={handleClick}
        disabled={isCopied}
        aria-label="Share"
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

      {/* Toast */}
      <div
        role="status"
        aria-live="polite"
        className={`
          absolute left-1/2 -translate-x-1/2 top-full mt-2
          px-3 py-1.5 rounded-lg text-xs whitespace-nowrap
          bg-foreground text-background shadow-lg
          transition-all duration-300 pointer-events-none
          ${showToast ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
        `}
      >
        Link copied to clipboard
      </div>
    </div>
  );
};
