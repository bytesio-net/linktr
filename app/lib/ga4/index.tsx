export type GAParams = {
  gaId: string;
  dataLayerName?: string;
  config?: {
    debug_mode?: boolean;
    allow_ad_personalization_signals?: boolean;
    allow_google_signals?: boolean;
    client_id?: string;
    cookie_domain?: string;
    cookie_update?: boolean;
    cookie_flags?: string;
    cookie_path?: string;
    cookie_prefix?: string;
    cookie_expires?: number;
    campaign?: object;
    campaign_id?: string;
    campaign_term?: string;
    campaign_source?: string;
    campaign_name?: string;
    campaign_medium?: string;
    content_group?: string;
    language?: string;
    ignore_referrer?: boolean;
    page_referrer?: string;
    page_location?: string;
    screen_resolution?: string;
    send_page_view?: boolean;
    user_id?: string;
  };
};

export const GoogleAnalytics = (props: GAParams) => {
  const { gaId, dataLayerName = "dataLayer", config } = props;

  return (
    <>
      <script
        id="_remix-ga"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script
        id="_remix-ga-init"
        dangerouslySetInnerHTML={{
          __html: `
                    window['${dataLayerName}'] = window['${dataLayerName}'] || [];
                    function gtag(){window['${dataLayerName}'].push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gaId}', ${JSON.stringify(config)});
                    gtag('set', 'user_properties', { appVersion: '${
                      __APP_VERSION__
                    }' });
          `,
        }}
      />
    </>
  );
};
