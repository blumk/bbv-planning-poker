import { Component, Element, Prop, State } from '@stencil/core';
import { openURL } from '../../helpers/utils';
import { scrumCardDeck } from '../poker-card-deck/card-deck';
import { Card } from '../poker-card-deck/card';

@Component({
  tag: 'page-card-detail',
  styleUrl: 'page-card-detail.css'
})
export class PageCardDetail {
  @Element() element: HTMLStencilElement;
  @Prop({ context: 'window' }) window!: Window;
  @Prop() id: string;
  @State() isFlipped = false;
  @State() card: Card;

  componentWillLoad()
  {
    if(scrumCardDeck.has(this.id)){
      this.card = scrumCardDeck.get(this.id);
    }
    else {
      this.card = new Card('🙁', '#000000');
    }

    this.element.style.setProperty('--card-background-color', this.card.color);
  }

  render() {
    return (
      <div class={'scene'} onClick={() => this.clickCard() }>
        <div class={this.isFlipped ? 'card is-flipped' : 'card'}>
          <div class="card-face card-face-front">
            <poker-card>MAKING VISIONS WORK.</poker-card>
          </div>
          <div class="card-face card-face-back">
            <poker-card>{this.card.displayName}</poker-card>
          </div>
        </div>
      </div>
    );
  }

  private clickCard() {
    if(this.isFlipped) {
      this.openUrl();
    } else {
      this.isFlipped = true;
    }
  }

  private openUrl() {
    openURL(this.window, '/');
  }
}
