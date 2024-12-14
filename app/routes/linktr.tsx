import React from "react";
import { TopFixedRight } from "~/components/Fixed/TopRight";
import LinkTree from "~/components/LinkTree";
import { ToggleTheme } from "~/components/Toggle/Theme";
import { config } from "~/config";

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
