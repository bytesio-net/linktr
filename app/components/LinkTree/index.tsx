import { LinkTree as ILinkTree } from "~/types/Link";

import { BrandLogo } from "../BrandLogo";
import { Links } from "../Links";

interface LinkTreeProps {
  config: ILinkTree;
}

const LinkTree = ({ config: { icon, title, routes } }: LinkTreeProps) => {
  return (
    <div
      className="flex flex-col gap-4
        min-h-screen 
        justify-center items-center"
    >
      <BrandLogo src={icon} alt={title} />
      <div className="my-4 px-8 w-full">
        <Links routes={routes} />
      </div>
    </div>
  );
};

export default LinkTree;
