namespace LSP {
  class CreditCard {
    constructor(protected money: number) {}

    public getMoney = (amount: number): number => {
      this.money -= amount;
      return amount;
    };
  }

  class DebitCard extends CreditCard {
    constructor(money: number) {
      super(money);
    }

    // 這裡會出錯
    public getMoney = (amount: number): number | null => {
      if (this.money < amount) return null;
      this.money -= amount;
      return amount;
    };
  }

  const card = new CreditCard(87);
  const money: number = card.getMoney(487);

  const card2 = new DebitCard(87);
  // 這裡會出錯
  const money2: number = card2.getMoney(487);
}
