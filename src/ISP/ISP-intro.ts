interface Human {
  name: string; // 定義屬性
  age?: number; // 定義可選屬性
  sleep(): void; // 定義方法
  eat: () => void; // arrow function定義方法(等同上面用法，但較不推薦)
  speak(message: string): void; // 定義帶參數方法
}

// 所有介面定義的屬性及方法都必須在此類別中實作
class Man implements Human {
  constructor(public name: string) {}

  // 可用一般function及arrow function實作
  public eat(): void {
    console.log(this.name + ' eating');
  }

  public sleep = (): void => console.log(this.name + ' sleeping');

  public speak = (message: string): void => {
    console.log(this.name + ' speaking : ' + message);
  };

  // 值得注意TypeScript讓這裡可以忽略介面的方法參數
  // public speak = (): void => {
  //   console.log(this.name + ' speaking');
  // };

  public write = (): void => {
    console.log(this.name + ' writing');
  };
}

const person: Human = new Man('Huashen'); // 注意到這裡宣告person是Human介面
person.speak('Hello world!'); // Huashen speaking : Hello world!
// 使用Human介面，無法呼叫此方法(不在Human介面裡)
person.write();

const person2: Man = new Man('Huashen'); // 這裡改為宣告person2是Man類別
person2.speak('Hello world!'); // Huashen speaking : Hello world!
// 改為使用Man類別後，可以呼叫write方法
person2.write();
