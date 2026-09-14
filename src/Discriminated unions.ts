type Dog = {
  type: "dog";
  bark: () => void;
};

type Cat = {
  type: "cat";
  meow: () => void;
};

type Animal = Dog | Cat; //A common property tells us which member of the union we're dealing with.


function speak(animal: Animal) {
  if (animal.type === "dog") {
    animal.bark();
  } else {
    animal.meow();
  }
}