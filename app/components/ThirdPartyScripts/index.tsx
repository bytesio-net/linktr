import { GoogleAnalytics } from "~/lib/ga4";
import { type ThridPartyConfig } from "~/types/Config";

type ThirdPartyScriptsParams = {
  config: ThridPartyConfig;
};
const ThirdPartyScripts = ({ config }: ThirdPartyScriptsParams) => {
  return config.ga4 && <GoogleAnalytics gaId={config.ga4.id} />;
};

export default ThirdPartyScripts;
