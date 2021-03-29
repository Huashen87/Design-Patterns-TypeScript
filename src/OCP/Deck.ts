import { Card } from './Card';

export class Deck {
  private deck: Card[] = [];

  constructor(deck?: Card[]) {
    if (deck) this.deck = deck;
    else this.initial(52);
  }

  private initial(count: number): void {
    for (let i = 0; i < count; i++) this.deck[i] = new Card(i + 1);
  }

  public sheffle(): void {
    for (let i = this.deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  public print(): void {
    this.deck.forEach((card) => console.log(card.toString()));
  }

  public split(numOfCards: number): Deck {
    const cards: Card[] = [];
    for (let i = 0; i < numOfCards; i++) {
      const card = this.deck.pop();
      if (card === undefined) break;
      cards.push(card);
    }
    return new Deck(cards);
  }

  public pop(): Card | undefined {
    return this.deck.pop();
  }

  public push(card: Card): void {
    this.deck.push(card);
  }

  public toCards(): Card[] {
    return this.deck;
  }
}
