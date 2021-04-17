abstract class Engine {
  abstract start(): void;
}

class PetrolEngine extends Engine {
  start(): void {
    console.log('Start petrol engine');
  }
}

class DieselEngine extends Engine {
  start(): void {
    console.log('Start diesel engine');
  }
}

class Car {
  // private engine = new PetrolEngine();
  // private engine = new DieselEngine();
  // constructor(private engine: Engine) {}
  private engine: Engine | null = null;

  setEngine(engine: Engine) {
    this.engine = engine;
  }

  start(): void {
    if ((this, this.engine)) this.engine.start();
    else console.log('Engine does not exist');
  }
}

const car: Car = new Car();
car.start(); // Engine does not exist

const dieselEngine = new DieselEngine();
car.setEngine(dieselEngine);
car.start(); // Start diesel engine

const petrolEngine = new PetrolEngine();
car.setEngine(petrolEngine);
car.start(); // Start petrol engine

// const dieselEngine = new DieselEngine();
// const car: Car = new Car(dieselEngine);
// car.start(); // Start diesel engine

// const petrolEngine = new PetrolEngine();
// const car2: Car = new Car(petrolEngine);
// car.start(); // Start petrol engine
