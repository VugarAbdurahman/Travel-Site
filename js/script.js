var menuItems = document.getElementById('menuItems');
menuItems.style.maxHeight = "0px";

function menuToggle() {
    if (menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight = "900px";
        menuItems.style.transition = "1s"

    } else {
        menuItems.style.maxHeight = "0px"
        menuItems.style.transition = "0s"
    }
}

function home() {
    window.open("house.html", "_self")
}

function homepage() {
    location.href = "index.html"
}


function check() {
    if (document.getElementById("email").value == "") {
        document.getElementById("email").style.borderColor = "#f00"
        document.getElementById("valid").innerHTML = "Please enter a valid email address!"
    } else {
        document.getElementById("email").style.borderColor = "#E9E9E9"
        document.getElementById("valid").innerHTML = ""
    }
    if (document.getElementById("pass").value == "") {
        document.getElementById("pass").style.borderColor = "#f00"
        document.getElementById("valid").innerHTML = "Please enter a valid password!"
    } else {
        document.getElementById("pass").style.borderColor = "#E9E9E9"
        document.getElementById("valid").innerHTML = ""
    }
}

