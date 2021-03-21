import { Card } from './Card';

export class GoodGame {
  private deck: Card[] = [];
  constructor() {
    this.initialDeck(this.deck);
    this.sheffleDeck(this.deck);
    this.startGame();
  }

  private startGame(): void {
    console.log('Game Start!');
    const handcards = this.getHandcards(this.deck);
    this.printCards(handcards);
  }

  private initialDeck(deck: Card[]): void {
    for (let i = 0; i < 52; i++) deck[i] = new Card(i + 1);
  }

  private sheffleDeck(deck: Card[]): void {
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }

  private getHandcards(deck: Card[]): Card[] {
    const handcards: Card[] = [];
    let i = 0;
    deck.forEach((card) => {
      if (!(i++ % 4)) handcards.push(card);
    });
    return handcards;
  }

  private printCards(cards: Card[]): void {
    cards.forEach((card) => console.log(card.toString()));
  }
}
