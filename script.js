const start = document.getElementById("start");
const page = document.getElementById("page");
const bgImage = document.getElementById("prof");

start.addEventListener("click", showPage, false);

function showPage() {
  page.style.display = "block";
  window.alert("Hey Guys!");
}

bgImage.addEventListener("mouseover", () => {
  document.body.style.backgroundImage = "url('./img2.jpg')";
  console.log("Hello World");
});

bgImage.addEventListener("mouseout", () => {
  document.body.style.backgroundImage = "";
  console.log(" NO Hello World");
});
