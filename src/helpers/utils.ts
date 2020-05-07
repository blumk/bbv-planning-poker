import { RouterDirection } from '@ionic/core';

// https://github.com/ionic-team/ionic/blob/master/core/src/utils/theme.ts
export async function openURL(win: Window, url: string | undefined, ev?: Event, direction?: RouterDirection) {
  if (url && url[0] !== '#' && url.indexOf('://') === -1) {
    const router = win.document.querySelector('ion-router');
    if (router) {
      if (ev) {
        ev.preventDefault();
      }
      await router.componentOnReady();
      return router.push(url, direction);
    }
  }
  return Promise.resolve();
}
