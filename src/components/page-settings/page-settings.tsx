import { Component } from '@stencil/core';

@Component({
  tag: 'page-settings',
  styleUrl: 'page-settings.css'
})
export class PageSettings {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-title>Settings</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
      </ion-content>
    ];
  }
}
