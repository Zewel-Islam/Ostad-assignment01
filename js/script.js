window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

function checkAge() {
  let inputAge = document.getElementById("inputAge").value;
  age = parseInt(inputAge);
  let result = document.getElementById("checkAge");
  let adultResult = document.getElementById("adultResult");
  let kidResult = document.getElementById("kidResult");

  if ((inputAge) => 18) {
    adultResult.style.display = "block";
    kidResult.style.display = "none";
  } else {
    kidResult.style.display = "block";
    adultResult.style.display = "none";
  }
}

// Age Checker

    function checkAge() {
      let age = parseInt(document.getElementById("inputAge").value);
      let adultResult = document.getElementById("adultAge");
      let kidResult = document.getElementById("kidAge");

      if (age > 18) {
        adultResult.style.display = "block";
        kidResult.style.display = "none";
      } else {
        kidResult.style.display = "block";
        adultResult.style.display = "none";
      }
    }