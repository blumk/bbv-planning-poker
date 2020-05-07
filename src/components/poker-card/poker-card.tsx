import { Component, Element, Prop } from '@stencil/core';
import { h } from '@stencil/core';

@Component({
  tag: 'poker-card',
  styleUrl: 'poker-card.css'
})
export class BbvPokerCard {
  @Element() el: HTMLPokerCardElement;
  @Prop() color: string;

  componentWillLoad()
  {
    if(this.color){
      this.el.style.setProperty('--card-background-color', this.color);
    }
  }

  render() {
    return (
      <div>
        <p>
          <slot></slot>
        </p>
      </div>
    );
  }
}
