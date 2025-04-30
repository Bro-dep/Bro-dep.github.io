//Clicking on a project
function expandProject(project) {
  console.log(project);

const projects = document.querySelectorAll(".cardProject");
let activeOption = null;
console.log(projects.length);
projects.forEach((project) => {
    console.log(project.id);
  project.addEventListener("click", (e) => {
    projects.forEach((opt) => {
      //turns off active
      opt.classList.remove("active");
      console.log(opt.id);
    });
    if (this.id == activeOption) {
      //this.classList.remove("active");
      activeOption = null;
    } else {
      this.classList.add("active");
      activeOption = this.id;
      if(this.id == project.id){
        console.log("clicked");
        console.log(this.id);
      }
    }
  });
});

}