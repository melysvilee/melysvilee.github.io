    const button = document.getElementById("dark-mode");

    function toggleDark() {
  var element = document.body;
        if (document.body.style.backgroundColor === "white") {
    // If dark mode is on, switch to light mode
    document.body.style.backgroundColor = "dark";       // background to light
    document.body.style.color = "white"; 
    nav.data-bs-theme = "dark";// text to dark
    button.textContent = "White Mode";                      // button text changes to "dark mode"

    //#5
  } else {
    // If light mode is on, switch to dark mode
    document.body.style.backgroundColor = "white";        // background to dark
    document.body.style.color = "black"; 
    nav.data-bs-theme = "light";

    button.textContent = "Dark Mode";                      // button text changes to "light mode"
  }

}
