let toggleNavStatus = false;

let toggleNav = function(){

  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");

if(toggleNavStatus=== false){

  getSidebarUl.style.visibility="visible";
  getSidebar.style.width = "240px";
 
toggleNavStatus = true;

}

else if(toggleNavStatus=== true){

getSidebar.style.width = "0px";
getSidebarUl.style.visibility="hidden";
toggleNavStatus = false;
}
};

const AchterBlauw = document.querySelector(".tekst1")
const AchterRood = document.querySelector(".tekst4")
const AchterGroen = document.querySelector(".tekst6")

const changeClassBlueBackground = function () {
  const bodyElement = document.body;
  bodyElement.className="blauwbox";
  AchterBlauw.classList.add("tekst2");
  AchterGroen.classList.remove("tekst2");
  AchterRood.classList.remove("tekst2");
  
  toggleNav();
 
};
const attachEventToChangeColorButton = function () {
  const changeColorButton = document.getElementById("change-background-button1");
  changeColorButton.addEventListener("click", function () {
   
    changeClassBlueBackground();
  });
};

const changeClassBlueBackground2 = function () {
  const bodyElement = document.body;
  bodyElement.className="roodbox";
  AchterRood.classList.add("tekst2")
  AchterGroen.classList.remove("tekst2")
  AchterBlauw.classList.remove("tekst2")
  toggleNav();

};
const attachEventToChangeColorButton2 = function () {
  const changeColorButton = document.getElementById("change-background-button2");
  changeColorButton.addEventListener("click", function () {
    changeClassBlueBackground2();
  });
};

const changeClassBlueBackground3 = function () {
  const bodyElement = document.body;
  bodyElement.className="groenbox";
  AchterGroen.classList.add("tekst2")
  AchterRood.classList.remove("tekst2")
  AchterBlauw.classList.remove("tekst2")
  toggleNav();

};
const attachEventToChangeColorButton3 = function () {
  const changeColorButton = document.getElementById("change-background-button3");
  changeColorButton.addEventListener("click", function () {
    changeClassBlueBackground3();
  });
};
attachEventToChangeColorButton2();
attachEventToChangeColorButton3();
attachEventToChangeColorButton();

