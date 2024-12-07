import { LinkTree as ILinkTree } from "~/types/Link";

import { Announcement } from "../Announcement";
import { BrandLogo } from "../BrandLogo";
import { Links } from "../Links";

interface LinkTreeProps {
  config: ILinkTree;
}

const LinkTree = ({
  config: { icon, title, announcements, routes, username },
}: LinkTreeProps) => {
  return (
    <div
      className="flex flex-col gap-4
        min-h-screen 
        justify-center items-center"
    >
      <BrandLogo src={icon} alt={title} />
      <div className="flex flex-col items-center">
        <h5>{title}</h5>
        <span className="text-sm text-muted-foreground/50 dark:text-muted-foreground/80">
          {username}
        </span>
      </div>
      <div className="my-4 px-8 w-full flex flex-col gap-4">
        {announcements && <Announcement message={announcements} />}
        <Links routes={routes} />
      </div>
    </div>
  );
};

export default LinkTree;
