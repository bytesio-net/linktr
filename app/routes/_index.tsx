import { MetaFunction } from "@remix-run/cloudflare";
import { TopFixedRight } from "~/components/Fixed/TopRight";
import { ToggleTheme } from "~/components/Toggle/Theme";
import { config } from "~/config";

import Linktr from "./linktr";

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

const Index = () => {
  return (
    <>
      <Linktr />
      <TopFixedRight>
        <ToggleTheme />
      </TopFixedRight>
    </>
  );
};

export default Index;
