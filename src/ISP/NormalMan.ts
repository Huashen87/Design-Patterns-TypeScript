// class NormalMan implements SuperEmployee {
//   private name: string = 'NormalMan';
//   market = (): void => {};
//   plan = (): void => {};
//   paint = (): void => {};
//   writeCode = (): void => console.log(this.name + ' coding');
//   debug = (): void => console.log(this.name + ' debugging');
//   manage = (): void => {};
// }

// NormalMan可以不必實作其他ProgrammerEmployee介面以外的方法
class NormalMan implements ProgrammerEmployee {
  private name: string = 'NormalMan';
  writeCode = (): void => console.log(this.name + ' coding');
  debug = (): void => console.log(this.name + ' debugging');
}

// const normalman: SuperEmployee = new NormalMan();
const normalman: ProgrammerEmployee = new NormalMan();
normalman.writeCode();
normalman.debug();

// ProgrammerEmployee介面不包含以下方法
normalman.market();
normalman.manage();
