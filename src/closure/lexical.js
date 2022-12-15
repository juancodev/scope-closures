'use strict';
const myVariableGlobal = 0;

function myFirstFunction() {
  const myVariableInsideAFunction = 1;
  console.log(myVariableGlobal);

  function mySecondFunction() { // function intern
    const mySecondsVariableInsideAFunction = 2;
    console.log(myVariableGlobal, myVariableInsideAFunction);

    function myThirdFunction() {
      const myThirdVariableInsideAFunction = 3;
      console.log(
        myVariableGlobal,
        myVariableInsideAFunction,
        mySecondsVariableInsideAFunction
      );

      function myFourthFunction() {
        console.log(
          myVariableGlobal,
          myVariableInsideAFunction,
          mySecondsVariableInsideAFunction,
          myThirdVariableInsideAFunction
        );
      }
      return myFourthFunction();
    }
    return myThirdFunction();
  }
  return mySecondFunction();
}

myFirstFunction();