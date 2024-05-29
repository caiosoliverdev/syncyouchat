export function getHelpUrlForFeature(featureName) {
  const { helpUrls } = window.SyncYouConfig;
  return helpUrls[featureName];
}
