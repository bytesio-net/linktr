import { MetaFunction } from "@remix-run/cloudflare";
import LinkTree from "~/components/LinkTree";
import { config } from "~/config";

export const meta: MetaFunction = () => {
  return Object.entries(config.meta).map(([key, value]) => ({
    [key]: value,
  }));
};

const Linktr = () => {
  return <LinkTree config={config} />;
};

export default Linktr;
