import { Deck } from './Deck';
import { HandDeck } from './HandCard';

export class GoodGame {
  private deck: Deck;
  private handcards: HandDeck;
  constructor() {
    this.deck = new Deck();
    console.log('Initial Deck!');
    this.deck.print();

    this.deck.sheffle();
    console.log('Sheffle Deck!');
    this.deck.print();

    console.log('Game Start!');

    this.handcards = new HandDeck(this.deck.split(13).toCards());
    this.handcards.sort();
    console.log('handcard');
    this.handcards.print();
  }
}
