import { TestWindow } from '@stencil/core/testing';
import { BbvPokerCard } from './poker-card';

describe('poker-card', () => {
  it('should build', () => {
    expect(new BbvPokerCard()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPokerCardElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [BbvPokerCard],
        html: '<poker-card></poker-card>',
      });
    });
  });
});
