// Refs
var iconBars = $(".fa-bars");
var iconX = $(".fa-times");
var menu = $(".hamburger-menu");

// Show Menù
iconBars.click(function() {
    menu.toggle();
});

// Hide Menù
iconX.click(function() {
    menu.toggle();
});
