class Rectangle {
  protected height: number = 0;
  protected width: number = 0;

  public setHeight = (height: number): void => {
    this.height = height;
  };

  public setWidth = (width: number): void => {
    this.width = width;
  };

  public getArea = (): void => console.log(this.height * this.width);
}

class Square extends Rectangle {
  // 這裡改變了不變的狀態
  public setHeight = (height: number): void => {
    this.height = height;
    this.width = height;
  };
  // 這裡改變了不變的狀態
  public setWidth = (width: number): void => {
    this.height = width;
    this.width = width;
  };
}

const shape = new Rectangle();
shape.setHeight(10);
shape.setWidth(5);
shape.getArea(); // 50

// 正方形表現跟長方形不同
const shape2 = new Square();
shape2.setHeight(10);
shape2.setWidth(5);
shape2.getArea(); // 25
