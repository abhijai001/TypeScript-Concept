export {};

// Classes, constructors, access modifiers, getters/setters,
// static members and abstract classes.

class User {
  private _age: number;

  constructor(
    public name: string,
    age: number
  ) {
    this._age = age;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value >= 0) {
      this._age = value;
    }
  }

  greet(): void {
    console.log(`Hello, ${this.name}`);
  }

  static createGuest(): User {
    return new User("Guest", 0);
  }
}

const user = new User("Alex", 22);

user.greet();
console.log(user.name);
console.log(user.age);

user.age = 25;

console.log(user.age);

const guest = User.createGuest();

console.log(guest.name);


// protected can be accessed inside a class and its subclasses.

class Admin extends User {
  private permissions: string[] = [];

  addPermission(permission: string): void {
    this.permissions.push(permission);
  }

  showInfo(): void {
    console.log(`Admin: ${this.name}`);
  }
}

const admin = new Admin("Sam", 30);

admin.addPermission("manage-users");
admin.showInfo();


// Abstract classes provide a base structure for subclasses.

abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): string;

  move(): void {
    console.log(`${this.name} is moving`);
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Woof";
  }
}

const dog = new Dog("Bruno");

console.log(dog.makeSound());
dog.move();