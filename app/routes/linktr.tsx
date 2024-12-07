import { MetaFunction } from "@remix-run/cloudflare";
import React from "react";
import { TopFixedRight } from "~/components/Fixed/TopRight";
import LinkTree from "~/components/LinkTree";
import { ToggleTheme } from "~/components/Toggle/Theme";
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
  return (
    <React.Fragment>
      <LinkTree config={config} />
      <TopFixedRight>
        <ToggleTheme />
      </TopFixedRight>
    </React.Fragment>
  );
};

export default Linktr;
