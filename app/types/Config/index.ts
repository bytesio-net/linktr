import { LinkTree } from "../Link";

export type Config = LinkTree & {
  meta: Record<string, string>;
};
