import { Component } from '@stencil/core';
import { h } from '@stencil/core';

@Component({
  tag: 'page-card-overview',
  styleUrl: 'page-card-overview.css'
})
export class PageCardOverview {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Planning Poker</ion-title>
          <ion-buttons slot="primary">
            <ion-button href="/settings" color="light">
              <ion-icon slot="icon-only" name="settings"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <poker-card-deck></poker-card-deck>
      </ion-content>
    ];
  }
}
