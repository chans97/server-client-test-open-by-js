const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const docu = document.getElementById("moveele");

box1.style.backgroundColor = localStorage.getItem("box1");
box2.style.backgroundColor = localStorage.getItem("box2");
box3.style.backgroundColor = localStorage.getItem("box3");

document.addEventListener(
  "dragstart",
  function (event) {
    event.dataTransfer.effectAllowed = "all";
    event.dataTransfer.setData("text/plain", event.target.id);
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = 0.5;
    console.log(event.clientY);
  },
  false
);
document.addEventListener(
  "dragend",
  function (event) {
    // reset the transparency
    event.target.style.opacity = "";
  },
  false
);
document.addEventListener("drag", function (event) {}, false);
document.addEventListener(
  "drop",
  function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target

    line1.style.display = "none";
    line2.style.display = "none";
    line3.style.display = "none";
    line4.style.display = "none";

    console.log(event.dataTransfer.getData("text/plain"));
    if (2 < pos4 && pos4 < 100) {
      if (event.dataTransfer.getData("text/plain") == "box2") {
        box1.style.backgroundColor = localStorage.getItem("box2");
        box2.style.backgroundColor = localStorage.getItem("box1");
        box3.style.backgroundColor = localStorage.getItem("box3");

        localStorage.setItem("box1", box1.style.backgroundColor);
        localStorage.setItem("box2", box2.style.backgroundColor);
        localStorage.setItem("box3", box3.style.backgroundColor);
      } else if (event.dataTransfer.getData("text/plain") == "box3") {
        box1.style.backgroundColor = localStorage.getItem("box3");
        box2.style.backgroundColor = localStorage.getItem("box1");
        box3.style.backgroundColor = localStorage.getItem("box2");

        localStorage.setItem("box1", box1.style.backgroundColor);
        localStorage.setItem("box2", box2.style.backgroundColor);
        localStorage.setItem("box3", box3.style.backgroundColor);
      }
    } else if (180 < pos4 && pos4 < 320) {
      if (event.dataTransfer.getData("text/plain") == "box3") {
        box1.style.backgroundColor = localStorage.getItem("box1");
        box2.style.backgroundColor = localStorage.getItem("box3");
        box3.style.backgroundColor = localStorage.getItem("box2");

        localStorage.setItem("box1", box1.style.backgroundColor);
        localStorage.setItem("box2", box2.style.backgroundColor);
        localStorage.setItem("box3", box3.style.backgroundColor);
      }
    } else if (380 < pos4 && pos4 < 580) {
      if (event.dataTransfer.getData("text/plain") == "box1") {
        box1.style.backgroundColor = localStorage.getItem("box2");
        box2.style.backgroundColor = localStorage.getItem("box1");
        box3.style.backgroundColor = localStorage.getItem("box3");

        localStorage.setItem("box1", box1.style.backgroundColor);
        localStorage.setItem("box2", box2.style.backgroundColor);
        localStorage.setItem("box3", box3.style.backgroundColor);
      }
    } else if (620 < pos4) {
      if (event.dataTransfer.getData("text/plain") == "box1") {
        box1.style.backgroundColor = localStorage.getItem("box2");
        box2.style.backgroundColor = localStorage.getItem("box3");
        box3.style.backgroundColor = localStorage.getItem("box1");

        localStorage.setItem("box1", box1.style.backgroundColor);
        localStorage.setItem("box2", box2.style.backgroundColor);
        localStorage.setItem("box3", box3.style.backgroundColor);
      } else if (event.dataTransfer.getData("text/plain") == "box2") {
        box1.style.backgroundColor = localStorage.getItem("box1");
        box2.style.backgroundColor = localStorage.getItem("box3");
        box3.style.backgroundColor = localStorage.getItem("box2");

        localStorage.setItem("box1", box1.style.backgroundColor);
        localStorage.setItem("box2", box2.style.backgroundColor);
        localStorage.setItem("box3", box3.style.backgroundColor);
      }
    }
  },
  false
);
document.addEventListener(
  "dragover",
  function (event) {
    // prevent default to allow drop
    // console.log("test");
    event.preventDefault();
    pos4 = event.clientY;
    event.dataTransfer.dropEffect = "none";
    if (2 < pos4 && pos4 < 100) {
      event.dataTransfer.dropEffect = "move";
      line1.style.display = "block";
      line2.style.display = "none";
      line3.style.display = "none";
      line4.style.display = "none";
    } else if (180 < pos4 && pos4 < 320) {
      event.dataTransfer.dropEffect = "move";
      line1.style.display = "none";
      line2.style.display = "block";
      line3.style.display = "none";
      line4.style.display = "none";
    } else if (380 < pos4 && pos4 < 580) {
      event.dataTransfer.dropEffect = "move";
      line1.style.display = "none";
      line2.style.display = "none";
      line3.style.display = "block";
      line4.style.display = "none";
    } else if (620 < pos4) {
      event.dataTransfer.dropEffect = "move";
      line1.style.display = "none";
      line2.style.display = "none";
      line3.style.display = "none";
      line4.style.display = "block";
    } else {
      event.dataTransfer.dropEffect = "none";
      line1.style.display = "none";
      line2.style.display = "none";
      line3.style.display = "none";
      line4.style.display = "none";
    }
  },
  false
);
