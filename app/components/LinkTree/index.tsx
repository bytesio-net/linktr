import { LinkTree as ILinkTree } from "~/types/Link";

import { Links } from "../Links";

interface LinkTreeProps {
  config: ILinkTree;
}

const LinkTree = ({ config }: LinkTreeProps) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <Links routes={config.routes} />
      </div>
    </div>
  );
};

export default LinkTree;
