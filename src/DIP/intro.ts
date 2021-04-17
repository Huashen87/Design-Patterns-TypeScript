// 會下蛋
interface EggLayable {
  layEgg(): void;
}
// 會走路
interface Walkable {
  walk(): void;
}
// 會飛
interface Flyable {
  fly(): void;
}
// 所有鳥都會下蛋跟走路，但不一定會飛，因此不實作Flyable
abstract class Bird implements EggLayable, Walkable {
  // 每一種鳥下的蛋都不一樣，因此將下蛋方法抽象化
  abstract layEgg(): void;
  // 都是用腳走路，因此不須使用抽象方法
  walk(): void {
    console.log('Walking with legs');
  }
}

// 老鷹是鳥類又會飛，因此繼承Bird抽象類別、實作Flyable介面
class Eagle extends Bird implements Flyable {
  // 實作繼承自Bird的下蛋方法，下老鷹蛋
  layEgg() {
    console.log('Laying eagle egg');
  }
  // 實作Flyable介面的fly方法
  fly() {
    console.log('Eagle flying');
  }
}
// 企鵝是鳥類但不會飛，因此繼承Bird抽象類別，不實作Flyable介面
class Penguin extends Bird {
  // 實作繼承自Bird的下蛋方法，下企鵝蛋
  layEgg() {
    console.log('Laying penguin egg');
  }
}
