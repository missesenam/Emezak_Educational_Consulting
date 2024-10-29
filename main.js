// menu
const navBar = document.getElementById('navbar')
 let navigation = `
 <nav>
 <div class="flex justify-between items-center px-[30px] py-2 h-20">
        <!-- logo -->
        <div>
          <a href="index.html">
            <img src="./icon/emezak_logo.png" alt="emezak educational consulting logo" width="50px">
          </a>
        </div>
        <!-- links -->
        <div class="bg-primary10 bg-opacity-95 fixed top-0 right-0 h-full w-full grid grid-row-3 pt-5 px-5 sm:w-[300px] hidden md:block md:bg-transparent md:w-[65%] md:h-16 md:flex md:items-center md:justify-between" id="menu-bar">
            <!--close menu -->
          <div class="close-menu flex flex-col gap-2 ml-auto pointer md:hidden cursor-pointer" onclick="hidesidebar()">
          </div>
          <div class="flex flex-col items-center gap-5 md:gap-10 md:flex-row md:flex-row">
            <a class="text-primary20 font-bold hover:text-primary30 capitalize" href="index.html">Home</a>
            <a class="text-primary20 font-bold hover:text-primary30 capitalize" href="About.html">About</a>
            <a class="text-primary20 font-bold hover:text-primary30 capitalize" href="services.html">services</a>
            <a class="text-primary20 font-bold hover:text-primary30 capitalize" href="package.html">package</a>
            <a class="text-primary20 font-bold hover:text-primary30 capitalize" href="contact.html">contact</a>
          </div>
        </div>
        <!-- hamburger menu -->
        <div class="hamburger-menu flex flex-col gap-2 cursor-pointer md:hidden" onclick="showsidebar()" id="showlinks">
          <span></span>
        </div>
      </div>    
      </nav>
      `
navBar.innerHTML = navigation
// navbar color on scrool

window.addEventListener("scroll", function() {
  if (window.scrollY > 50) { 
    navBar.classList.add('bg-primary10'); 
    navBar.classList.remove('md:bg-transparent'); 
  } else {
    navBar.classList.remove('bg-primary10'); 
    navBar.classList.add('md:bg-transparent');
  }
});


// hide and show menu

const menuBar = document.getElementById('menu-bar')
const hamburgerbar = document.getElementById('showlinks')
function showsidebar(){
    menuBar.classList.remove('hidden')
    hamburgerbar.classList.add('hidden')
}
function hidesidebar(){ 
    menuBar.classList.add('hidden')
    hamburgerbar.classList.remove('hidden')
} 
// footer

const pageFooter = document.getElementById('footer')
let ft = `
<p>&copy; Emezak Educational Consulting</p>
`
pageFooter.innerHTML = ft

// services data
const services = [
    {
      title: "Application Strategy and Planning",
      list: [
        "Assess student’s academic strengths, extracurricular activities, and career interests.",
        "Develop a customized roadmap with timelines to manage tasks efficiently"
      ]
    },
    {
      title: "College/University Selection",
      list: [
        "Recommend schools that match the student’s profile, aspirations, and budget",
        "Provide insights on safety, match, and reach schools."
      ]
    },
    {
      title: "Essay and Personal Statement Review",
      list: [
        "Brainstorm essay topics that reflect the student’s personality and achievements.",
        "Offer detailed feedback and revisions to strengthen writing."
      ]
    },
    {
      title: "Scholarships and Financial Aid Support",
      list: [
        "Identify relevant scholarships and funding opportunities.",
        "Guide students through the financial aid process."
      ]
    },
    {
      title: "Interview Preparation",
      list: [
        "Offer mock interviews and tips to build student confidence."
      ]
    },
    {
      title: "Basic Practical STEM Training",
      list: ["Data Science - Data Analytics", "Coding /AI/ML", "Cybersecurity", "Web and Mobile Development"]
    },
    {
        title: "Seminar/Workshops & Conferences",
        list: [
          "Have invited guest speakers on pertinent international studies topics.",
          "Practical workshops from industry experts."
        ]
      },
      {
        title: "Visa Application",
        list: [
          "Visa application completion.",
          "Validation of documentation.",
          "Mockup Visa interview preparation."
        ]
      }
  ];
const servicesBox = document.getElementById('services-box')


  services.forEach((service)=>{
    const lists = service.list.map((listItem) =>{
       return `<li>${listItem}</li>`
    }).join("")

    let servicecard = `<div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
            <div class="relative h-48 m-2.5 border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col justify-center items-center bg-primary30 bg-opacity-50">
                    <h1 class="text-xl font-bold text-gray-800 mb-2 text-center">${service.title}</h1>
            </div>
          <div class="p-4">
                <ul class="text-slate-600 leading-normal font-light list-disc list-inside">
                ${lists}
                </ul>
            </div>
          </div>`
    servicesBox.innerHTML += servicecard
  })

// bookings

// svg
// <div class="flex items-center">
// <svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="45px" fill="#5f6368"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
// </div>

const btn = document.querySelector('button')