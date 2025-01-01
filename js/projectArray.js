//Copy's a template to allow a dynamic amount of elements

//Define the objects

const exampleArrayTest = { firstName: "Billy", lastName: "Bob", age: 100 };
const exampleArrayTest2 = { firstName: "Jole", lastName: "ase", age: 23 };
const exampleArrayTest3 = { firstName: "Sik", lastName: "aserv", age: 54 };

//#region Projects
const game1 = {
  Name: "Tammys Tamowatches",
  Link: "https://chaffeycomputerscienceclub.github.io/HTML/newSignup",
  Img: "../Images/TammysTamoWatches.png",
  Dec: "A Small project intended to be a life organizer mixed with game elements. Made with HTML, CSS, and Javascript. It also included database elements using Firebase.",
};

async function getProjects() {
  try {
  const response = await fetch("../JS/json/projects.json");
  const projectArray = await response.json();
  DisplayProjectArray(projectArray);
}
catch (error) {
  console.error('Error Loading Products: ', error);
}
}
//var projectArray = [game1, game1, game1];
//#endregion

var sampleArray = [exampleArrayTest, exampleArrayTest2, exampleArrayTest3];

function DisplayProjectArray(projectArray) {
  //prints a amount of stuff based on a array
  //var amount = projectArray.length;

  const container = document.getElementById("ProjectCont");
  //container.innerHTML = 
        `
        <a
            href="https://chaffeycomputerscienceclub.github.io/HTML/newSignup"
            class="cardProject"
          >
            <img src="../Images/TammysTamoWatches.png" class="center" />
            <h2>Tammys Tamowatches</h2>
            <p>
              A Small project intended to be a life organizer mixed with game
              elements. Made with HTML, CSS, and Javascript. It also included
              database elements using Firebase.
            </p>
          </a>
        `;

  projectArray.forEach((project) => {
    //Link box
    const linkCont = document.createElement("a");
    linkCont.href = project.Link;
    linkCont.className = "cardProject";
    //Img
    const img = document.createElement("img");
    img.src = project.Img;
    img.className = "center";
    //H2
    const h2 = document.createElement("h2");
    h2.innerHTML = project.Name;
    //P
    const p = document.createElement("p");
    p.innerHTML = project.Dec;
    //Appending
    linkCont.appendChild(img);
    linkCont.appendChild(h2);
    linkCont.appendChild(p);
    //Appending
    container.appendChild(linkCont);
  });
}

