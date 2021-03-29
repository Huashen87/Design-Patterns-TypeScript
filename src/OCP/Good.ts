import { Deck } from './Deck';

export class GoodGame {
  private deck: Deck;
  private handcards: Deck;
  constructor() {
    this.deck = new Deck();
    console.log('Initial Deck!');
    this.deck.print();

    this.deck.sheffle();
    console.log('Sheffle Deck!');
    this.deck.print();

    console.log('Game Start!');

    this.handcards = this.deck.split(13);
    console.log('handcard');
    this.handcards.print();
  }
}
