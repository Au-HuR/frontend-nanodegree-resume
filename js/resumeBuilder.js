/*
This is empty on purpose! Your code to build the resume will go here.

var awesomeThoughts = "I am Moritz and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN");

$("#main").append(funThoughts);
console.log(awesomeThoughts);

var name = "Moritz Windhorst";
var role = "Student";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
 */

var bio = {
    "name": "Moritz Windhorst",
    "role": "Student",
    "contacts": {
        "mobile": "+49 161 123 456",
        "email": "moritz@adress.de",
        "github": "AuHuR",
        "location": "Bonn"
    },
    "welcomeMsg": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    "skills": [
        "programming", "scripting", "modelling", "saving the universe"
    ],
    "bioPic": "images/fry.jpg"
};

var work = {
    "jobs": [
        {
            "employer": "Haniel",
            "title": "Werkstudent",
            "dates": "2013 - 2014",
            "location": "Duisburg",
            "description": "Helpdesk & Project consultant"
        },
        {
            "employer": "Urologisches Zentrum Bonn",
            "title": "IT Consultant",
            "dates": "in progress",
            "location": "Bonn",
            "description": "IT & network Consultant/Support"
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "Universität Duisburg-Essen",
            "city": "Essen",
            "degree": "none",
            "majors": ["CS", "Eco"],
            "dates": "2012-2014",
            "graduated": "University change",
            "url": "https://uni-due.de"
        },
        {
            "name": "University of Applied Science Bonn Rhein Sieg",
            "city": "Sankt Augustin",
            "degree": "BA",
            "majors": ["CS", "Eco"],
            "dates": "2014-2017",
            "url": "https://h-brs.de"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": 2016,
            "url": "https://.udacity.com/courses/ud804"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Windows 8.1 Rollout",
            "dates": "2014",
            "description": "Complete Hardware and Software change at Haniel",
            "images": ["images/197x148.gif"]
        },
        {
            "title": "Mina Verwaltungstool",
            "dates": "2016",
            "description": "Off the scrath Vaadin based management tool for Mina Trading GmbH",
            "images": ["images/197x148.gif"]
        }
    ]
};

/*
if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function (skill) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    })
}
*/

function displayHeader() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
}
function displayContact() {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
}
function displayBio() {
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    }
}
function displayWork() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        if(work.jobs.hasOwnProperty(job)){
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            var formattedEmplpoyerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmplpoyerTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
}
projects.display = function () {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        if (projects.projects.hasOwnProperty(project)) {
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            if(projects.projects[project].images.length > 0) {
                var formattedProjectimage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
                $(".project-entry:last").append(formattedProjectimage);
            }
        }
    }
}
displayHeader();
displayContact();
displayBio();
displayWork();
projects.display();

/*
$("#main").append(internationalizeButton);
function inName(name) {

    var inName = name.trim().split(" ");

    inName[0] = inName[0].slice(0,1).toUpperCase() + inName[0].slice(1).toLowerCase();
    inName[1] = inName[1].toUpperCase();

    return inName[0]+" "+inName[1];
}
*/