//Exercise with closure
function sumWithClosure(firstNum) {
  let a = firstNum;
  return function (secondNum) {
    let b = secondNum;
    if (!b) {
      return a;
    } else {
      return a + b;
    }
  }
}

sumWithClosure(2)(3); // 5
sumWithClosure(2)(); // 2

// Create list Pets
function createPetList() {
  let animalsList = [];
  return function newAnimals(animals) {
    if (typeof animals === "string" || typeof animals === "object" || typeof animals === "array") {
      return animalsList.push(animals);
    } else {
      return animalsList;
    }
  }
};