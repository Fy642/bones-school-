function darkMode() {
    var darkBody = document.body;
    var darkNavLeft = document.querySelector(".vertical-menu-left");
    var darkSearch = document.querySelector(".search-bar");
    var darkGrid = document.querySelectorAll(".grid-item");
    var darkContent = document.querySelectorAll(".content");
    var darkNavRight = document.querySelector(".vertical-menu-right");
    var darkLabel = document.querySelectorAll(".label");
    darkBody.classList.toggle("dark-mode");
    darkNavLeft.classList.toggle("dark-mode");
    darkSearch.classList.toggle("dark-mode");
    //darkNavRight.classList.toggle("dark-mode");       //Why tf this doesnt work? (makes it so that background of images on index dont change color)

    /*darkNavRight.forEach(function(item) {
        item.classList.toggle("dark-mode");             this doesnt either... wtf
    });*/
    darkContent.forEach(function(item) {
        item.classList.toggle("dark-mode");
    });
    darkGrid.forEach(function(item) {
        item.classList.toggle("dark-mode");
    });
    darkLabel.forEach(function(item) {
        item.classList.toggle("dark-mode");
    });
}
$(document).ready(function() {
$('#resizing_select').change(function() {
    $("#width_tmp_option").html($('#resizing_select option:selected').text());
    $(this).width($("#width_tmp_select").width());
});
});
