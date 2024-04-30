document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const linkedinLink = document.getElementById('linkedinLink');
const githubLink = document.getElementById('githubLink');

const linkedinFooter = document.getElementById('linkedinFooter');
const githubFooter = document.getElementById('githubFooter');

const travel_preview = document.getElementById('travel_preview');
const travel_github = document.getElementById('travel_github');

const hoobank_preview = document.getElementById('hoobank_preview');
const hoobank_github = document.getElementById('hoobank_github');

const youtube_preview = document.getElementById('youtube_preview');
const youtube_github = document.getElementById('youtube_github');

const allProjects_preview = document.getElementById('allProjects_preview');
const allProjects_github = document.getElementById('allProjects_github');


linkedinLink.addEventListener('click', () => window.open("https://www.linkedin.com/in/kunalverma9/", "_blank"));

githubLink.addEventListener('click', () => window.open("https://github.com/kunal9oct", "_blank"));

linkedinFooter.addEventListener('click', () => window.open("https://www.linkedin.com/in/kunalverma9/", "_blank"));

githubFooter.addEventListener('click', () => window.open("https://github.com/kunal9oct", "_blank"));

travel_preview.addEventListener('click', () => window.open("https://lets-travel-bj5v.onrender.com/", "_blank"));

travel_github.addEventListener('click', () => window.open("https://github.com/kunal9oct/lets-travel", "_blank"));

hoobank_preview.addEventListener('click', () => window.open("https://hoobank-the-future.netlify.app/", "_blank"));

hoobank_github.addEventListener('click', () => window.open("https://github.com/kunal9oct/HooBank-Modern-UI_UX-Responsive_Site-React_Tailwind", "_blank"));

youtube_preview.addEventListener('click', () => window.open("https://youtube100.netlify.app/", "_blank"));

youtube_github.addEventListener('click', () => window.open("https://github.com/kunal9oct/Youtube_Clone--MERN", "_blank"));

allProjects_preview.addEventListener('click', () => window.open("https://drive.google.com/file/d/1af-WPJAWC_Fb5OhRtMFZgPavcfuHmx3c/view", "_blank"));

allProjects_github.addEventListener('click', () => window.open("https://github.com/kunal9oct", "_blank"));
