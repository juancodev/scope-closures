//Function Scope
function greeating() {
  const username = "juancodev";
  console.log(username);

  if (username === "juancodev") {
    console.log(`Hello ${username}`);
  } else {
    console.log(`Hi new user`);
  }
};

greeating("juancodev");
console.log(username); // Reference error because username is not defined