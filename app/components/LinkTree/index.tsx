import { LinkTree as ILinkTree } from "~/types/Link";

import { Announcement } from "../Announcement";
import { BrandLogo } from "../BrandLogo";
import { Links } from "../Links";

interface LinkTreeProps {
  config: ILinkTree;
}

const LinkTree = ({
  config: { icon, title, announcements, routes },
}: LinkTreeProps) => {
  return (
    <div
      className="flex flex-col gap-4
        min-h-screen 
        justify-center items-center"
    >
      <BrandLogo src={icon} alt={title} />
      <div className="my-4 px-8 w-full flex flex-col gap-4">
        {announcements && <Announcement message={announcements} />}
        <Links routes={routes} />
      </div>
    </div>
  );
};

export default LinkTree;
