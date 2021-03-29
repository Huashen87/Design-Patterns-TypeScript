export class BadGame {
  deck: Card[] = [];
  constructor() {
    for (let i = 0; i < 52; i++) this.deck[i] = new Card(i + 1);
    // this.deck.sort(() => 0.5 - Math.random());
    // change to another shuffle algorithm
    for (let i = this.deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      // let temp = this.deck[i];
      // this.deck[i] = this.deck[j];
      // this.deck[j] = temp;
      // we can using the destructuring assignment
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
    console.log('Game Start!');
    const handcards: Card[] = [];
    let i = 0;
    this.deck.forEach((card) => {
      if (!(i++ % 4)) handcards.push(card);
    });
    handcards.forEach((card) => console.log(card.toString()));
  }
}

class Card {
  constructor(private value: number) {}
  toString(): string {
    let num: number = Math.ceil(this.value / 4);
    let suit: string = '';
    switch (this.value % 4) {
      case 0:
        suit = '\u2660';
        break;
      case 1:
        suit = '\u2663';
        break;
      case 2:
        suit = '\u2665';
        break;
      case 3:
        suit = '\u2666';
        break;
    }
    return `[${suit} ${num}]`;
  }
}
