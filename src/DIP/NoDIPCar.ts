namespace NoDIP {
  // class PetrolEngine {
  //   start(): void {
  //     console.log('Start petrol engine');
  //   }
  // }

  class DieselEngine {
    start(): void {
      console.log('Start diesel engine');
    }
  }

  class Car {
    // private petrolEngine: PetrolEngine = new PetrolEngine();
    private dieselEngine: DieselEngine = new DieselEngine();

    start(): void {
      this.dieselEngine.start();
    }
  }

  const car: Car = new Car();
  car.start(); // Start diesel engine
}
