    const button = document.getElementById("dark-mode");

    function toggleDark() {
  var element = document.body;
element.classList.toggle("dark-mode");
}

const listItems = document.querySelectorAll("#sel");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});

$('.dropdown-toggle').dropdown()
    
<div class="dropdown">
  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown trigger
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dLabel">
    ...
  </ul>
</div>
