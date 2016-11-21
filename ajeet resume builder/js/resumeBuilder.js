var bio = {};
var work = {};
var projects = {};
var education = {};

bio = {
    "name": "Ajeet Kumar",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+1(315)56009989",
        "email": "ajeet.yadav@gmail.com",
        "github": "ajeet-yadav",
        "blog": "http://www.tumblr.com/ajeet",
        "location": "New York"
    },
    "biopic": "images/cam.jpg",
    "welcomeMessage": "Masters in Data Engineering",
    "skills": ["HTML", "CSS", "Git", "JavaScript", "openstack", "AWS", "Web-Crawlers"],
    "display": function() {

        var formattedName = "";
        var formattedRole = "";
        var formattedMobile = "";
        var formattedEmail = "";
        var formattedGitHub = "";
        var formattedBlog = "";
        var formattedLocation = "";
        var formattedPic = "";
        var formattedWelcome = "";
        var formattedSkills = "";

        if (bio.name != false) {
            formattedName = HTMLheaderName.replace("%data%", bio.name);
            formattedRole = HTMLheaderRole.replace("%data%", bio.role);
            formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
            formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
            formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
            formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
            formattedPic = HTMLbioPic.replace("%data%", bio["biopic"]);
            formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio["welcomeMessage"]);

            $("#header").prepend(formattedName + formattedRole);
            $("#topContacts").append(formattedMobile)
                .append(formattedEmail)
                .append(formattedGitHub)
                .append(formattedBlog)
                .append(formattedLocation);
            $("#header").append(formattedWelcome + formattedPic);

            $("#footerContacts").append(formattedMobile,formattedEmail,formattedGitHub,formattedBlog, formattedLocation);

        }
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkills);
            }
            console.log("skills all set");
        }

        console.log("bio added");
    }
};

work = {
    "jobs": [{
        "employer": "Unisys Research",
        "title": "Research intern",
        "location": "Banglore",
        "dates": "June 2015- July 2015",
        "description": "integration of openstack cloud with fabric"
    }, {
        "employer": "Bharti Airtel",
        "title": "Web Developer",
        "location": "Gurgaon",
        "dates": "June 2014- July 2014",
        "description": "Web development."
    }],
    "display": function() {
        var formattedEmployer = "";
        var formattedTitle = "";
        var formattedCityEmployer = "";
        var formattedDatesEmployer = "";
        var formattedDescription = "";

        //foreach   



        if (work.jobs.length > 0) {
            for (job in work.jobs) {
                formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                formattedCityEmployer = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                formattedDatesEmployer = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                $("#workExperience").append(HTMLworkStart);
                $(".work-entry:last").append(formattedEmployer + " " + formattedTitle)
                    .append(formattedCityEmployer)
                    .append(formattedDatesEmployer)
                    .append(formattedDescription);

            }
        }
    }
};

projects = {
    projects: [{
        "title": "Research projects",
        "dates": "2015",
        "description": "Implemented Artificial Intelligence through Predictive spell check program in Java. (2014)- this was a pre-final year project based on AI in which for each incorrect word prediction is given which takes less than 1sec to produce a result. Presentation and report on same.",
        "image1": "images/spellchecker.jpeg"
         
    }, ],
    display: function() {
        var formattedProjectTitle = "";
        var formattedProjectDates = "";
        var formattedProjectDescription = "";
        var formattedProjectImage1 = "";
        

        if (projects.projects.length > 0) {
            for (project in projects.projects) {
                formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
                formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
                formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
                formattedProjectImage1 = HTMLprojectImage.replace("%data%", projects.projects[project].image1);

                $("#projects").append(HTMLprojectStart);
                $(".project-entry:last").append(formattedProjectTitle)
                    .append(formattedProjectDates)
                    .append(formattedProjectDescription)
                    .append(formattedProjectImage1);
                    
            }

            console.log("all projects listed");
        }
    }
};

education = {
    "schools": [{
        "name": "Indian Institute of Technology (IIT), Delhi",
        "dates": "2011-2015",
        "major": "Computer Science",
        "degree": " B.Tech",
        "location": "Delhi"
    }, {
        "name": "Cornell",
        "dates": "2016-2018",
        "major": "Artificial Intelligence",
        "degree": " MS",
        "location": "New York"
    }/*,  {
 			   
       "name": "Udacity OnlineCourse",
        "dates": "2016-2017",
        "major": "Web development",
        "degree": " Nano Degree",
        "location": "Udacity.com"
        
       
    }*/],
    "OnlineCourses": [{
        "title": "OnlineCourse by Udacity",
        "school":"Udacity",
        "courses": ["JavaScript Basics", "How to Use Git and GitHub"],
        "dates":"Nov 2016",
        "url":"Udacity.com"
        
    }],
    "display": function() {
        var formattedSchool = "";
        var formattedDatesSchool = "";
        var formattedMajorSchool = ""
        var formattedCitySchool = "";

        if (education.schools.length > 0) {
            for (school in education.schools) {
                formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
                formattedDatesSchool = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                formattedMajorSchool = HTMLschoolMajor.replace("%data%", education.schools[school].major);
                formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                formattedCitySchool = HTMLschoolLocation.replace("%data%", education.schools[school].location);

                $("#education").append(HTMLschoolStart);
                $(".education-entry:last").append(formattedSchool)
                    .append(formattedDatesSchool)
                    .append(formattedMajorSchool)
                    .append(formattedDegree)
                    .append(formattedCitySchool);
            }
        }
    }
};

//function for internationalize name button
function inName(aName) {
    var namesArray = aName.split(" ");
    console.log(namesArray);
    var firstName = namesArray[0].toLowerCase();
    var lastName = namesArray[1].toUpperCase();

    firstName = firstName.replace(firstName.charAt(0), firstName.charAt(0).toUpperCase());

    name = firstName + " " + lastName;
    console.log(name);

    return name;
}

//user clicks and tracking
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

bio.display();
work.display();
education.display();
projects.display();
