import { TestWindow } from '@stencil/core/testing';
import { PokerCardDeck } from './poker-card-deck';

describe('poker-card-deck', () => {
  it('should build', () => {
    expect(new PokerCardDeck()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPokerCardDeckElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [PokerCardDeck],
        html: '<poker-card-deck></poker-card-deck>'
      });
    });

  });
});
