namespace SingletonNamespace {
  // 沒有export，外界無法存取
  const id = 'A123456789';
  // export const，外界無法修改(readonly)
  export const birthday = '09/11';
  // export 非const，外界可以修改
  export let name = 'Huashen';
  // function 一樣可以export
  export const Hello = () => {
    console.log(name + ' : Hello world!');
  };
}

const huashen1 = SingletonNamespace;
const huashen2 = SingletonNamespace;
console.log(huashen1 === huashen2); // true
// 修改huashen1的name，但因為是同一個實例，huashen2也會跟著修改
huashen1.name = 'Huashenshen';
huashen2.Hello(); // Huashenshen : Hello world!
