function skillsmember() {
    var skills = document.getElementById("skills");
    var skillsvalue = skills.options[skills.selectedIndex].value;
    if (skillsvalue == "yes") {
        document.getElementById("skill").style.display = "block";
    } else {
        document.getElementById("skill").style.display = "none";
    }
}