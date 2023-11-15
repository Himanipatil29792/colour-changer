const buttons = document.querySelectorAll(".button");
// console.log(buttons);

const body = document.querySelector("body");

buttons.forEach(function (button) {
  // console.log(buttons);

  button.addEventListener("click", function (e) {
    // console.log("Clicked");
    // console.log(e);
    console.log(e.target);

    if (e.target.id === "grey") {
      // body.style.backgroundColor = "grey";
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "pink") {
      body.style.backgroundColor = "palevioletred";
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "orange") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
