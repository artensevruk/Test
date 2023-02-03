
console.log("Я учу JS");

function openMenu() {
    document.getElementById("Sidebar").classList.toggle("active");
}
window.onload =openMenu;

// function init() {

// const palnet = document.getElementById("greenpaer");
// palnet.innerHTML = "Hello";
// console.log("palnet.innerHTML")
// }
// window.onload = init;
// function pageLoaded() {
//     alert("ВСЁ ОК");
// }
// window.onload =pageLoaded;
function openbatton() {
    document.getElementById("bac").classList.toggle("activebatton");
}
window.onload =openbatton;