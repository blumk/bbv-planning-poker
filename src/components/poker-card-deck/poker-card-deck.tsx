import { Component, Prop } from '@stencil/core';
import { openURL } from '../../helpers/utils';
import { scrumCardDeck } from './card-deck';

@Component({
  tag: 'poker-card-deck',
  styleUrl: 'poker-card-deck.css'
})
export class PokerCardDeck {
  @Prop({ context: 'window' }) win!: Window;
  
  render() {
    return (
      <div class={'container'}>
        {this.getScrumCardDeck().map(card =>
          <poker-card 
            color={card[1].color} 
            onClick={() => this.openUrl(card[0])}>
              {card[1].displayName}
          </poker-card>
        )}
      </div>
    );
  }

  private getScrumCardDeck() {
   return Array.from(scrumCardDeck, _ => _); 
  }

  private openUrl(url: string) {
    openURL(this.win, `card/${url}`);
  }
}
