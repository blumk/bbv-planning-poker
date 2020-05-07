import { TestWindow } from '@stencil/core/testing';
import { BbvPlanningPoker } from './planning-poker';

describe('bbv-planning-poker', () => {
  let window: TestWindow;

  beforeEach(async () => {
    window = new TestWindow();
    await window.load({
      components: [BbvPlanningPoker],
      html: '<bbv-planning-poker></bbv-planning-poker>',
    });
  });

  it('should update', async () => {
    await window.flush();
  });
});
