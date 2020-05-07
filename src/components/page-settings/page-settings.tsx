import { Component } from '@stencil/core';
import { h } from '@stencil/core';

@Component({
  tag: 'page-settings',
  styleUrl: 'page-settings.css',
})
export class PageSettings {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Settings</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content></ion-content>,
    ];
  }
}
