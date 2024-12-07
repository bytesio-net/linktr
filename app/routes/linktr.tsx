import { MetaFunction } from "@remix-run/cloudflare";
import LinkTree from "~/components/LinkTree";
import { config } from "~/config";

export const meta: MetaFunction = () => {
  return [
    {
      title: config.title,
    },
    ...Object.entries(config.meta).map(([key, value]) => ({
      property: key,
      content: value,
    })),
  ];
};

const Linktr = () => {
  return <LinkTree config={config} />;
};

export default Linktr;
