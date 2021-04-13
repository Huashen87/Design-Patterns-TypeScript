// class SuperMan implements SuperEmployee {
//   private name: string = 'SuperMan';
//   market = (): void => console.log(this.name + ' marketing');
//   plan = (): void => console.log(this.name + ' planning');
//   paint = (): void => console.log(this.name + ' painting');
//   writeCode = (): void => console.log(this.name + ' coding');
//   debug = (): void => console.log(this.name + ' debugging');
//   manage = (): void => console.log(this.name + ' project management');
// }

class SuperMan
  implements
    MarketingAndPlanningEmployee,
    ProgrammerEmployee,
    DesignerEmployee,
    ManagementEmployee {
  private name: string = 'SuperMan';
  market = (): void => console.log(this.name + ' marketing');
  plan = (): void => console.log(this.name + ' planning');
  paint = (): void => console.log(this.name + ' painting');
  writeCode = (): void => console.log(this.name + ' coding');
  debug = (): void => console.log(this.name + ' debugging');
  manage = (): void => console.log(this.name + ' project management');
}

// 這裡仍然可以宣告為SuperEmployee，因為SuperMan有實作所有SuperEmployee的方法
// const superman: SuperEmployee = new SuperMan();
const superman: MarketingAndPlanningEmployee = new SuperMan();
superman.market();
superman.plan();

// MarketingAndPlanningEmployee介面不包含以下方法
superman.paint();
superman.writeCode();
superman.debug();
superman.manage();
