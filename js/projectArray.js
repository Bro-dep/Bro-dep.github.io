//Copy's a template to allow a dynamic amount of elements

//Define the objects

const exampleArrayTest = { firstName: "Billy", lastName: "Bob", age: 100 };
const exampleArrayTest2 = { firstName: "Jole", lastName: "ase", age: 23 };
const exampleArrayTest3 = { firstName: "Sik", lastName: "aserv", age: 54 };

//#region Projects
const game1 = {
  Name: "Tammys Tamowatches",
  Link: "https://chaffeycomputerscienceclub.github.io/HTML/newSignup",
  Img: "#",
  Dec: "A Small project intended to be a life organizer mixed with game elements. Made with HTML, CSS, and Javascript. It also included database elements using Firebase.",
};

var projectArray = [game1];
//#endregion

var sampleArray = [exampleArrayTest, exampleArrayTest2, exampleArrayTest3];

function DisplayProjectArray() {
  //prints a amount of stuff based on a array
  var amount = projectArray.length;
  const container = document.getElementById("ProjectCont");

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
DisplayProjectArray();
