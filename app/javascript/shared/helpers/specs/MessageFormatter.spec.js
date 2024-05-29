import MessageFormatter from '../MessageFormatter';

describe('#MessageFormatter', () => {
  describe('content with links', () => {
    it('should format correctly', () => {
      const message =
        'SyncYou is an opensource tool. [SyncYou](https://www.SyncYou.com)';
      expect(new MessageFormatter(message).formattedMessage).toMatch(
        '<p>SyncYou is an opensource tool. <a href="https://www.SyncYou.com" class="link" rel="noreferrer noopener nofollow" target="_blank">SyncYou</a></p>'
      );
    });
    it('should format correctly', () => {
      const message =
        'SyncYou is an opensource tool. https://www.SyncYou.com';
      expect(new MessageFormatter(message).formattedMessage).toMatch(
        '<p>SyncYou is an opensource tool. <a href="https://www.SyncYou.com" class="link" rel="noreferrer noopener nofollow" target="_blank">https://www.SyncYou.com</a></p>'
      );
    });
  });

  describe('parses heading to strong', () => {
    it('should format correctly', () => {
      const message = '### opensource \n ## tool';
      expect(new MessageFormatter(message).formattedMessage).toMatch(
        `<h3>opensource</h3>
<h2>tool</h2>`
      );
    });
  });

  describe('content with image and has "cw_image_height" query at the end of URL', () => {
    it('should set image height correctly', () => {
      const message =
        'SyncYou is an opensource tool. ![](http://SyncYou.com/SyncYou.png?cw_image_height=24px)';
      expect(new MessageFormatter(message).formattedMessage).toMatch(
        '<p>SyncYou is an opensource tool. <img src="http://SyncYou.com/SyncYou.png?cw_image_height=24px" alt="" style="height: 24px;" /></p>'
      );
    });

    it('should set image height correctly if its original size', () => {
      const message =
        'SyncYou is an opensource tool. ![](http://SyncYou.com/SyncYou.png?cw_image_height=auto)';
      expect(new MessageFormatter(message).formattedMessage).toMatch(
        '<p>SyncYou is an opensource tool. <img src="http://SyncYou.com/SyncYou.png?cw_image_height=auto" alt="" style="height: auto;" /></p>'
      );
    });

    it('should not set height', () => {
      const message =
        'SyncYou is an opensource tool. ![](http://SyncYou.com/SyncYou.png)';
      expect(new MessageFormatter(message).formattedMessage).toMatch(
        '<p>SyncYou is an opensource tool. <img src="http://SyncYou.com/SyncYou.png" alt="" /></p>'
      );
    });
  });

  describe('tweets', () => {
    it('should return the same string if not tags or @mentions', () => {
      const message = 'SyncYou is an opensource tool';
      expect(new MessageFormatter(message).formattedMessage).toMatch(message);
    });

    it('should add links to @mentions', () => {
      const message =
        '@SyncYouapp is an opensource tool thanks @longnonexistenttwitterusername';
      expect(
        new MessageFormatter(message, true, false).formattedMessage
      ).toMatch(
        '<p><a href="http://twitter.com/SyncYouapp" class="link" rel="noreferrer noopener nofollow" target="_blank">@SyncYouapp</a> is an opensource tool thanks @longnonexistenttwitterusername</p>'
      );
    });

    it('should add links to #tags', () => {
      const message = '#SyncYouapp is an opensource tool';
      expect(
        new MessageFormatter(message, true, false).formattedMessage
      ).toMatch(
        '<p><a href="https://twitter.com/hashtag/SyncYouapp" class="link" rel="noreferrer noopener nofollow" target="_blank">#SyncYouapp</a> is an opensource tool</p>'
      );
    });
  });

  describe('private notes', () => {
    it('should return the same string if not tags or @mentions', () => {
      const message = 'SyncYou is an opensource tool';
      expect(new MessageFormatter(message).formattedMessage).toMatch(message);
    });

    it('should add links to @mentions', () => {
      const message =
        '@SyncYouapp is an opensource tool thanks @longnonexistenttwitterusername';
      expect(
        new MessageFormatter(message, false, true).formattedMessage
      ).toMatch(message);
    });

    it('should add links to #tags', () => {
      const message = '#SyncYouapp is an opensource tool';
      expect(
        new MessageFormatter(message, false, true).formattedMessage
      ).toMatch(message);
    });
  });

  describe('plain text content', () => {
    it('returns the plain text without HTML', () => {
      const message =
        '<b>SyncYou is an opensource tool. https://www.SyncYou.com</b>';
      expect(new MessageFormatter(message).plainText).toMatch(
        'SyncYou is an opensource tool. https://www.SyncYou.com'
      );
    });
  });

  describe('#sanitize', () => {
    it('sanitizes markup and removes all unnecessary elements', () => {
      const message =
        '[xssLink](javascript:alert(document.cookie))\n[normalLink](https://google.com)**I am a bold text paragraph**';
      expect(new MessageFormatter(message).formattedMessage).toMatch(
        `<p>[xssLink](javascript:alert(document.cookie))<br />
<a href="https://google.com" class="link" rel="noreferrer noopener nofollow" target="_blank">normalLink</a><strong>I am a bold text paragraph</strong></p>`
      );
    });
  });
});
