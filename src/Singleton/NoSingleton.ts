class NoSingleton {
  constructor() {
    console.log('Create!');
  }
}

const noSingleton1 = new NoSingleton(); // Create!
const noSingleton2 = new NoSingleton(); // Create!
console.log(noSingleton1 === noSingleton2); // false
