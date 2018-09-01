import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'bbv-planning-poker',
  styleUrl: 'planning-poker.css'
})
export class BbvPlanningPoker {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="page-card-overview" />
          <ion-route url="/settings" component="page-settings" />
          <ion-route url="/card/:id" component="page-card-detail" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
