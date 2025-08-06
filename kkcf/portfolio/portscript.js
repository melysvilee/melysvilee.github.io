    const button = document.getElementById("dark-mode");

    function toggleDark() {
  var element = document.body;
element.classList.toggle("dark-mode");
}

const triggerEl = document.querySelector('#myTab button[data-bs-target="#profile"]')
bootstrap.Tab.getInstance(triggerEl).show()
