// Tab links
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-content");

function setActiveTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

// Hamburger nav
var sideNav = document.getElementById("sideNav");

function openNav() {
    sideNav.style.right = "0";
}
function closeNav() {
    sideNav.style.right = "-200px";
}

// Google sheets integration
const scriptURL = 'https://script.google.com/macros/s/AKfycbzEkm66q0QYrJi93h0VlD3mH-_QaOZnZEzEKHAfZKK6WIcDAqqoSJjRJwxSQYe5MesM/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank you for your submission!"
        setTimeout(() => {
            msg.innerHTML = ""
        }, 5000);
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

// Change header text on width
window.addEventListener('resize', function() {
    var textDiv = document.querySelector('.myName');
    if (window.innerWidth <= 850) {
        textDiv.textContent = 'Eisen';
    } else {
        textDiv.textContent = 'Eisenhower Yu';
    }
});

// Call the event listener once to set the initial text based on screen size
window.dispatchEvent(new Event('resize'));

