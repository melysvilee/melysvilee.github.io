    const button = document.getElementById("dark-mode");

    function toggleDark() {
  var element = document.body;
element.classList.toggle("dark-mode");
}

const test = document.getElementById("test");

test.addEventListener(
  "mouseover",
  (event) => {
    // highlight the mouseover target
    event.target.style.color = "orange";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false,
);
