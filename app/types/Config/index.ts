import { LinkTree } from "../Link";

export type Config = LinkTree & {
  meta: Record<string, string>;
  thirdParty?: ThridPartyConfig;
};

export type ThridPartyConfig = {
  ga4?: {
    id: string;
  };
};
