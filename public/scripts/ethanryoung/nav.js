const toggleMobileNav = () => {
    var items = document.getElementById("items");
    var hamburger = document.getElementById("hamburger");

    if (items.style.display == "") {
        items.style.display = "block";
        hamburger.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
    } else {
        items.style.display = "";
        hamburger.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    }
}