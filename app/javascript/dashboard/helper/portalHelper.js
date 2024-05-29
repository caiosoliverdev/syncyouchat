export const buildPortalURL = portalSlug => {
  const { hostURL, helpCenterURL } = window.SyncYouConfig;
  const baseURL = helpCenterURL || hostURL || '';
  return `${baseURL}/hc/${portalSlug}`;
};

export const buildPortalArticleURL = (
  portalSlug,
  categorySlug,
  locale,
  articleSlug
) => {
  const portalURL = buildPortalURL(portalSlug);
  return `${portalURL}/articles/${articleSlug}`;
};
