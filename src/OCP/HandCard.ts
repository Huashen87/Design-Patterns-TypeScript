import { Card } from './Card';
import { Deck } from './Deck';

export class HandDeck extends Deck {
  constructor(deck: Card[]) {
    super(deck);
  }

  public sort(): void {
    this.deck.sort((card1, card2) => card1.toValue() - card2.toValue());
  }
}
