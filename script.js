//navbar code

var navLinks = document.getElementsByClassName('navLinks')[0];
var toggleButton = document.getElementsByClassName('toggleButton')[0];
var toggleIcon = document.getElementsByClassName('material-icons-outlined')[0];

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (toggleIcon.textContent === "menu") {
        toggleIcon.textContent = "close";
    } else {
        toggleIcon.textContent = "menu";
    }
})


