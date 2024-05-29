import { buildPortalArticleURL, buildPortalURL } from '../portalHelper';

describe('PortalHelper', () => {
  describe('buildPortalURL', () => {
    it('returns the correct url', () => {
      window.SyncYouConfig = {
        hostURL: 'https://app.SyncYou.com',
        helpCenterURL: 'https://help.SyncYou.com',
      };
      expect(buildPortalURL('handbook')).toEqual(
        'https://help.SyncYou.com/hc/handbook'
      );
      window.SyncYouConfig = {};
    });
  });

  describe('buildPortalArticleURL', () => {
    it('returns the correct url', () => {
      window.SyncYouConfig = {
        hostURL: 'https://app.SyncYou.com',
        helpCenterURL: 'https://help.SyncYou.com',
      };
      expect(
        buildPortalArticleURL('handbook', 'culture', 'fr', 'article-slug')
      ).toEqual('https://help.SyncYou.com/hc/handbook/articles/article-slug');
      window.SyncYouConfig = {};
    });
  });
});
