const myName = 'Oscar';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(1, 2);

class Persona {
  constructor(private age: number, private name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const oscar = new Persona(12, 'Oscar');
oscar.getSummary();
