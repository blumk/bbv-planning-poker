import { TestWindow } from '@stencil/core/testing';
import { PageCardDetail } from './page-card-detail';

describe('page-card-detail', () => {
  it('should build', () => {
    expect(new PageCardDetail()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPageCardDetailElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [PageCardDetail],
        html: '<bbv-card-page></bbv-card-page>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing

  });
});
