import { Card } from './card';

export const scrumCardDeck = createScrumDeck();

function createScrumDeck() {
  const values = [
    new Card('½', '#4CB050'),
    new Card('1', '#8BC24A'),
    new Card('2', '#CDDC3B'),
    new Card('3', '#F7E028'),
    new Card('5', '#FEC106'),
    new Card('8', '#FEA40B'),
    new Card('13', '#FF7613'),
    new Card('20', '#FE5721'),
    new Card('40', '#F44236'),
    new Card('0', '#673BB8'),
    new Card('∞', '#4051B5'),
    new Card('?', '#2296F3'),
    new Card('☕', '#775549'),
  ];

  const scrumDeck = new Map<string, Card>();
  for (let index = 0; index < values.length; index++) {
    scrumDeck.set(encodeUrl('scrum', index), values[index]);
  }

  return scrumDeck;
}

function encodeUrl(deckName: string, id: number) {
  return `${deckName}${'_'.repeat(id)}`;
}
