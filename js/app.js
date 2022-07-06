const button = document.querySelector(".header-menu"),
      ul = document.querySelector(".ul"),
      menu = document.querySelector(".header-menu"),
      kunTunButton = document.querySelector(".kun-tun");

button.addEventListener("click", () => {
  ul.classList.toggle("show-ul");
  document.body.classList.toggle("show-body");
  menu.classList.toggle("show-menu");
});

// kunTunButton.addEventListener("click", () => {
//   if (document.body.style.backgroundColor == "black") {
//     document.body.style.backgroundColor = "";
//     console.log("oq");

//     document.body.style.color = "";
//     document.querySelector("h2").style.color = "";
//     document.querySelectorAll("nav ul li a").forEach(a => {
//       a.style.color = "";
//     });
//     document.querySelectorAll("h1").forEach(a => {
//       a.style.color = "";
//     });
//     document.querySelectorAll("p").forEach(a => {
//       a.style.color = "";
//     });
//     document.querySelectorAll("h2").forEach(a => {
//       a.style.color = "";
//     });
//     document.querySelectorAll("h3").forEach(a => {
//       a.style.color = "";
//     });
//     document.querySelectorAll("h4").forEach(a => {
//       a.style.color = "";
//     });
//     document.querySelectorAll(".easy-box p").forEach(a => {
//       a.style.color = "";
//     });
//     document.querySelector("#product").style.background = "";
//     document.querySelector("#easy").style.background = "";
//   } else {
//     console.log("qora");
//     document.body.style.backgroundColor = "black";

//     document.body.style.color = "white";
//     document.querySelector("h2").style.color = "white";
//     document.querySelectorAll("nav ul li a").forEach(a => {
//       a.style.color = "white";
//     });
//     document.querySelectorAll("h1").forEach(a => {
//       a.style.color = "white";
//     });
//     document.querySelectorAll("p").forEach(a => {
//       a.style.color = "white";
//     });
//     document.querySelectorAll("h2").forEach(a => {
//       a.style.color = "white";
//     });
//     document.querySelectorAll("h3").forEach(a => {
//       a.style.color = "white";
//     });
//     document.querySelectorAll("h4").forEach(a => {
//       a.style.color = "white";
//     });
//     document.querySelectorAll(".easy-box p").forEach(a => {
//       a.style.color = "black";
//     });
//     document.querySelector("#product").style.background = "url(../img/Bg.png) no-repeat";
//     document.querySelector("#product").style.backgroundSize = "100% 100%";
//     document.querySelector("#product").style.backgroundPosition = "center bottom";

//     document.querySelector("#easy").style.background = "url(../img/Bg-11.png) no-repeat";
//     document.querySelector("#easy").style.backgroundSize = "100% 100%";
//     document.querySelector("#easy").style.backgroundPosition = "center bottom";
//   }

// });