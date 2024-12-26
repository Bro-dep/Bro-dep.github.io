//Copy's a template to allow a dynamic amount of elements

//Define the objects

const exampleArrayTest = { firstName: "Billy", lastName: "Bob", age: 100 };
const exampleArrayTest2 = { firstName: "Jole", lastName: "ase", age: 23 };
const exampleArrayTest3 = { firstName: "Sik", lastName: "aserv", age: 54 };

var sampleArray = [exampleArrayTest, exampleArrayTest2, exampleArrayTest3];

function arrayTest() {
  //prints a amount of stuff based on a array
  var amount = sampleArray.length;
  const container = document.getElementById("testContainer");

  container.innerHTML = `
        <div>
          <h1>First Name</h1>
          <h1>Last Name</h1>
          <h1>Age</h1>
          </div>
        `;

  for (let i = 0; i < amount; i++) {
    //console.log(i);
    const iD = document.createElement("div");
    iD.innerHTML = sampleArray[i].firstName;
    const iD2 = document.createElement("div");
    iD2.innerHTML = sampleArray[i].lastName;
    const iD3 = document.createElement("div");
    iD3.innerHTML = sampleArray[i].age;

    container.appendChild(iD);
    container.appendChild(iD2);
    container.appendChild(iD3);
  }
}
arrayTest();
