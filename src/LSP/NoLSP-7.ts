namespace LSP {
  class Locker {
    constructor(protected password: number) {}

    public openLocker = (input: number): void => console.log(input === this.password);
  }

  class NewLocker extends Locker {
    // 不好的方法
    public changePassword = (input: number): void => {
      this.password = input;
    };
  }

  const locker = new Locker(1234);
  locker.openLocker(1234); // true

  const locker2 = new NewLocker(1234);
  locker2.changePassword(4321);
  locker.openLocker(1234); // false
}
