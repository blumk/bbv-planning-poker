import { TestWindow } from '@stencil/core/testing';
import { PageCardOverview } from './page-card-overview';

describe('page-card-overview', () => {
  it('should build', () => {
    expect(new PageCardOverview()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPageCardOverviewElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [PageCardOverview],
        html: '<page-card-overview></page-card-overview>'
      });
    });

    it('should update', async () => {
      await testWindow.flush();
    });

  });
});
