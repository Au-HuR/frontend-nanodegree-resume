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
    "contacts": [
        {
            "mobile": "+49 161 123 456",
            "email": "moritz@adress.de",
            "github": "AuHuR",
            "location": "Bonn"
        }
    ],
    "welcomeMsg": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    "skills": ["programming", "scripting", "modelling", "saving the universe"],
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
            "location": "Essen",
            "degree": "university change",
            "majors": ["CS", "Eco"],
            "dates": "2012-2014",
            "graduated": "University change",
            "url": "https://uni-due.de"
        },
        {
            "name": "University of Applied Science Bonn Rhein Sieg",
            "location": "Sankt Augustin",
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

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedWelcomeMsg);
    $("#header").append(HTMLskillsStart);

    for (var skill in bio.skills) {
        if(bio.skills.hasOwnProperty(skill)){
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkills);
        }
    };

    for (var contact in bio.contacts) {
        if(bio.contacts.hasOwnProperty(contact)) {
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
            var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
            var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
            var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
            $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
            $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
        }
    };
};
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
};
work.display = function () {
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
education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);

        if(education.schools.hasOwnProperty(school)) {
            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedName + formattedDegree + formattedDates, formattedLocation, formattedMajor);
        }
    }
};
bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);

/*
$("#main").append(internationalizeButton);
function inName(name) {

    var inName = name.trim().split(" ");

    inName[0] = inName[0].slice(0,1).toUpperCase() + inName[0].slice(1).toLowerCase();
    inName[1] = inName[1].toUpperCase();

    return inName[0]+" "+inName[1];
}
*/