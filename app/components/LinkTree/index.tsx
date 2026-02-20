import { type Config } from "~/types/Config";

import { cn } from "../../lib/utils";
import { Announcement } from "../Announcement";
import { BrandLogo } from "../BrandLogo";
import { Links } from "../Links";
import { ShareButton } from "../ShareButton";

interface LinkTreeProps {
  config: Config;
}

const LinkTree = ({
  config: { icon, title, announcements, routes, username, share, layout },
}: LinkTreeProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        "min-h-screen py-8",
        "justify-center items-center"
      )}
    >
      <BrandLogo src={icon} alt={title} />
      <div className="flex flex-col items-center">
        <h5>{title}</h5>
        <span className="text-sm text-muted-foreground/50 dark:text-muted-foreground/80">
          {username}
        </span>
        {share && (
          <div className="flex items-center m-2 gap-3">
            <ShareButton title={title} {...share} />
          </div>
        )}
      </div>
      <div className="my-4 px-8 w-full flex flex-col gap-4">
        {announcements && <Announcement message={announcements} />}
        <Links routes={routes} layout={layout} />
      </div>
    </div>
  );
};

export default LinkTree;
