function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var contact = document.getElementById("contact");
    var memberButton = document.getElementById("memberButton");
    var skillsButton = document.getElementById("skillsButton");
    var contactButton = document.getElementById("contactButton");
    member.style.display = "block";
    skills.style.display = "none";
    contact.style.display = "none";
    memberButton.style.backgroundColor = "#f1f1f1";
    skillsButton.style.backgroundColor = "#ffffff";
    contactButton.style.backgroundColor = "#ffffff";
}