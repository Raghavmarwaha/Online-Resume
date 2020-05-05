
var bio = {
 "name": "Raghav Marwaha",
 "role": "front end devoloper",
 "contacts": {
  "mobile": "9464980370",
  "email": "raghavmarwaha26@gmail.com",
  "github": "raghavMarwaha",
  "twitter": "R.M Creations",
  "location": "khanna"
 },
 "welcomeMessage": "Nothing is Impossible.. You can You will",
 "skills": ["Photoshop(Image editing)", "Cricket", "Hardworking", "Movies Critic"],
 "biopic": "images/raghav.jpg"
};

bio.display = function() {
 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
 var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
 var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
 var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
 var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
 var formattedpic = HTMLbioPic.replace("%data%", bio.biopic);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 $("#header").append(formattedMessage);
 $("#header").append(formattedpic);

 $("#topContacts,#footerContacts").append(formattedMobile, formattedEmail, formattedGit, formattedTwitter, formattedLocation);

 $("#header").append(HTMLskillsStart);
 for (var i = 0; i < bio.skills.length; i++) {
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
  $(skills).append(formattedSkill);
 }
};
bio.display();


var education = {
 "schools": [
 {
  "name": "Chitkara University",
  "location": "Rajpura(India)",
  "degree": "B.Tech",
  "majors": ["CSE,IT"],
  "dates": "2011",
  "url": "https://www.chitkara.edu.in"
 },
 {
  "name": "IIT",
  "location": "MUMBAI(India)",
  "degree": "M.Tech",
  "majors": ["CSE"],
  "dates": "2016",
  "url": "http://www.iitb.ac.in/"
 }
 ],
 "onlineCourses": [
 {
  "title": "Front End Web Devolopment Nanodegree",
  "school": "Udacity onlineCourses",
  "dates": "2017",
  "url": "https://www.udacity.com/"
 }
 ]
};

education.display = function() {
 $("#education").append(HTMLschoolStart);
 for (var i = 0; i < education.schools.length; i++) {
  var formattedName = HTMLschoolName.replace("#", education.schools[i].url).replace("%data%", education.schools[i].name);
  var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
  var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
  var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
  var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);

  $(".education-entry:last").append(formattedName + formattedDegree);
  $(".education-entry:last").append(formattedLocation);
  $(".education-entry:last").append(formattedDates);
  $(".education-entry:last").append(formattedMajors);
 }

 $(".education-entry:last").append(HTMLonlineClasses);
 for (i = 0; i < education.onlineCourses.length; i++) {


  var formattedonTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
  var formattedonSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
  var formattedonDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
  var formattedonUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

  $(".education-entry:last").append(formattedonTitle + formattedonSchool);
  $(".education-entry:last").append(formattedonDates);
  $(".education-entry:last").append(formattedonUrl);
 }
};
education.display();


var work = {
 "jobs": [
 {
  "employer": "HTC",
  "title": "JAVA DEVOLOPER",
  "location": "CHENNAI,India",
  "dates": "2014-2015",
  "description": "Information Technology solution and BPO provider. assists clients across multiple industry verticals, offering turnkey project lifecycle in, e-business, data warehousing, embedded systems, ECM, SCM, CRM, and ERP solutions."
 },
 {
  "employer": "MICROSOFT",
  "title": ".Net DEVOLOPER",
  "dates": "2015-2016",
  "location": "USA,America",
  "dates": "2015-2016",
  "description": "Currently working on .NET framework,IDE (Integrated Devolopment Environment) Visual studio"
 }
 ]
};

work.display = function() {
 $("#workExperience").append(HTMLworkStart);
 for (var i = 0; i < work.jobs.length; i++) {
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

  $(".work-entry:last").append(formattedEmployer + formattedTitle);
  $(".work-entry:last").append(formattedLocation);
  $(".work-entry:last").append(formattedDates);
  $(".work-entry:last").append(formattedDescription);

 }
};
work.display();

$("#mapDiv").append(googleMap);


var projects = {
 "projects": [
 {
  "title": "Visitor Counter",
  "dates": "May 2016",
  "description": "The objective of this project is to make a IC based model to count number of persons  visiting a particular room or an auditorium",
  "images": ["images/counter.jpg"],
  "url": "http://electronicsforu.com/electronics-projects/visitors-counter"

 },
  {
  "title": "Portfolio site",
  "dates": "Feb 2017",
  "description": "Making a portfolio site that run on every device using bootstrap",
  "images": ["images/1.png"],
  "url": "https://en.wikipedia.org/wiki/Tiger"
 }
 ]
};
projects.display = function() {
 $("#projects").append(HTMLprojectStart);
 for (var i = 0; i < projects.projects.length; i++) {
  var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
  var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
  var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
  var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);


  $(".project-entry:last").append(formattedTitle, formattedDate, formattedDescription, formattedImage);
 }
};

projects.display();