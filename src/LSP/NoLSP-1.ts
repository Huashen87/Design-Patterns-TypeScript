namespace LSP {
  class Animal {
    protected name: string | undefined;

    constructor(name?: string) {
      this.name = name;
    }
  }

  class Pet extends Animal {
    constructor(name: string) {
      super(name);
    }
  }

  const dog = new Animal();

  // 這裡會出錯
  const dog2 = new Pet();
}
