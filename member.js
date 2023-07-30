function skillsmember() {
    var skills = document.getElementById("skills");   
    var skillsvalue = skills.options[skills.selectedIndex].value;
    var skillsname = skills.options[skills.selectedIndex].text;
    var skillslist = document.getElementById("skillslist");
    var skillslistvalue = skillslist.value;
    if (skillslistvalue.indexOf(skillsvalue) == -1) {
        if (skillslistvalue == "") {
            skillslist.value = skillsvalue;
        } else {
            skillslist.value = skillslistvalue + "," + skillsvalue;
        }
        var skillslistname = document.getElementById("skillslistname");
        if (skillslistname.value == "") {
            skillslistname.value = skillsname;
        } else {
            skillslistname.value = skillslistname.value + "," + skillsname;
        }
        var skillslistdiv = document.getElementById("skillslistdiv");
        var skillslistdivhtml = skillslistdiv.innerHTML;
        if (skillslistdivhtml == "") {
            skillslistdiv.innerHTML = "<span class=\"label label-info\">" + skillsname + "</span>";
        } else {
            skillslistdiv.innerHTML = skillslistdivhtml + "<span class=\"label label-info\">" + skillsname + "</span>";
        }
    }
}