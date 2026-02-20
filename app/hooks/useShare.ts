import copy from "copy-to-clipboard";
import { useCallback } from "react";
import { isAndroid, isFirefox, isMobile } from "react-device-detect";

enum NativeShareDataFormat {
  URL_ONLY = "URL_ONLY",
  TEXT_ONLY = "TEXT_ONLY",
}

const shouldUseNativeShare = () => {
  if (!isMobile) return false;
  return !!navigator.share;
};

const getNativeShareFormat = () => {
  if (isFirefox && isAndroid) {
    return NativeShareDataFormat.URL_ONLY;
  }
  return NativeShareDataFormat.TEXT_ONLY;
};

const getUtmQueriesUrl = (url: string, canNativeShare: boolean) => {
  const parsedUrl = new URL(url);
  parsedUrl.searchParams.set("utm_source", "webshare");
  parsedUrl.searchParams.set("utm_medium", "referral");
  parsedUrl.searchParams.set(
    "utm_campaign",
    canNativeShare ? "native" : "non_native"
  );
  return decodeURIComponent(parsedUrl.toString());
};

type ShareResult = { shared: boolean; copied: boolean };

const useShare = () => {
  const share = useCallback(
    async ({
      url,
      title,
    }: {
      url: string;
      title: string;
    }): Promise<ShareResult> => {
      const canNativeShare = shouldUseNativeShare();

      if (canNativeShare) {
        const dataFormat = getNativeShareFormat();
        try {
          await navigator.share({
            ...(dataFormat === NativeShareDataFormat.TEXT_ONLY && {
              text: `${title}\n${getUtmQueriesUrl(url, true)}`,
            }),
            ...(dataFormat === NativeShareDataFormat.URL_ONLY && {
              url: getUtmQueriesUrl(url, true),
            }),
          });
          return { shared: true, copied: false };
        } catch {
          // Always return early on mobile to prevent fallback to clipboard copy
          return { shared: false, copied: false };
        }
      }

      // Desktop fallback: copy to clipboard
      const success = copy(getUtmQueriesUrl(url, false));
      return { shared: false, copied: success };
    },
    []
  );

  return { share };
};

export default useShare;
