import { MetaFunction } from "@remix-run/cloudflare";
import { config } from "~/config";

import Linktr from "./linktr";

export const meta: MetaFunction = () => {
  return Object.entries(config.meta).map(([key, value]) => ({
    [key]: value,
  }));
};

const Index = () => {
  return <Linktr />;
};

export default Index;
