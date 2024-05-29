export default {
  computed: {
    hostURL() {
      return window.SyncYouConfig.hostURL;
    },
    vapidPublicKey() {
      return window.SyncYouConfig.vapidPublicKey;
    },
    enabledLanguages() {
      return window.SyncYouConfig.enabledLanguages;
    },
    isEnterprise() {
      return window.SyncYouConfig.isEnterprise === 'true';
    },
    enterprisePlanName() {
      // returns "community" or "enterprise"
      return window.SyncYouConfig?.enterprisePlanName;
    },
  },
};
