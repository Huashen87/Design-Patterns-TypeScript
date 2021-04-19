class Singleton {
  private static instance: Singleton | null = null;
  private constructor() {
    console.log('Create!');
  }

  public static getInstance(): Singleton {
    if (!this.instance) this.instance = new Singleton();
    return this.instance;
  }
}
const instance = new Singleton(); // Singleton類別建構子為private，無法從外部實例化
const instance2 = Singleton.getInstance(); //Create!
const instance3 = Singleton.getInstance(); //這裡得到了相同的實例
console.log(instance2 === instance3); //true
