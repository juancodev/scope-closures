//Block Scope
if (true) {
  let blockScope = 'Block Scope';
  console.log(blockScope);
}

console.log(blockScope); // ReferenceError: blockScope is not defined.