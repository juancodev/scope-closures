//Closure + lexical variable
function moneyBox() {
  let saveCoins = 0;
  return function counterCoins(coins) {
    return saveCoins += coins;
  }
}

const myWallet = moneyBox();
console.log(myWallet(5));
console.log(myWallet(10));
console.log(myWallet(15));
console.log(myWallet(20));
console.log(myWallet(25));