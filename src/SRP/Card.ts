export class Card {
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
