type Dog = {
  type: "dog";
  bark: () => void;
};

type Cat = {
  type: "cat";
  meow: () => void;
};

type Animal = Dog | Cat;
function speak(animal: Animal) {
  if (animal.type === "dog") {
    animal.bark();
  } else {
    animal.meow();
  }
}