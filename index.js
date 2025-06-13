const btn1 = document.querySelector(".theme-btn-1");
const btn2 = document.querySelector(".theme-btn-2");
const btn3 = document.querySelector(".theme-btn-3");
const btn4 = document.querySelector(".theme-btn-4");

btn1.onclick = () => {
  document.body.className = "theme-1";
};

btn2.onclick = () => {
  document.body.className = "theme-2";
};

btn3.onclick = () => {
  document.body.className = "theme-3";
};

btn4.onclick = () => {
  document.body.className = "theme-4";
};
