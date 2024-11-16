  // menu
  const navBar = document.getElementById('navbar');

  let navigation = `
  <nav>
    <div class="flex justify-between items-center px-[30px] py-2 h-20 shadow-xl">
      <!-- logo -->
      <div>
        <a href="index.html">
          <img src="./icon/emezak_logo1.png" alt="emezak educational consulting logo" width="50px" id="navicon">
        </a>
      </div>
      <!-- links -->
      <div class="bg-primary10 bg-opacity-95 fixed top-0 right-0 h-full w-full grid grid-row-3 pt-5 px-5 sm:w-[300px] hidden md:block md:bg-transparent md:w-[65%] md:h-16 md:flex md:items-center md:justify-between" id="menu-bar">
        <!--close menu -->
        <div class="close-menu flex flex-col gap-2 ml-auto pointer md:hidden cursor-pointer" onclick="hidesidebar()">
        </div>
        <div class="flex flex-col items-center gap-5 md:gap-10 md:flex-row md:flex-row">
          <a class="text-wht md:text-primary30 font-bold hover:text-primary20 capitalize cool" href="index.html">Home</a>
          <a class="text-wht md:text-primary30 font-bold hover:text-primary20 capitalize cool" href="About.html">About</a>
          <a class="text-wht md:text-primary30 font-bold hover:text-primary20 capitalize cool" href="services.html">services</a>
          <a class="text-wht md:text-primary30 font-bold hover:text-primary20 capitalize cool" href="package.html">package</a>
          <a class="text-wht md:text-primary30 font-bold hover:text-primary20 capitalize cool" href="contact.html">contact</a>
        </div>
      </div>
      <!-- hamburger menu -->
      <div class="hamburger-menu flex flex-col gap-2 cursor-pointer md:hidden" onclick="showsidebar()" id="showlinks">
        <span class="sp"></span>
      </div>
    </div>    
  </nav>
  `;
  navBar.innerHTML = navigation;



document.addEventListener("DOMContentLoaded", function() {


  const currentMonthElement = document.getElementById('currentMonth');
const calendarDatesElement = document.getElementById('calendarDates');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');

let currentDate = new Date();

// Events data
const events = {
  "2024-11-07": 2, // Two events on November 7, 2024
  "2024-11-14": 1, // One event on November 14, 2024
  "2024-11-24": 3, // Three events on November 24, 2024
};

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  // Update the displayed month and year
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  currentMonthElement.textContent = `${monthNames[month]} ${year}`;

  // Clear existing dates
  calendarDatesElement.innerHTML = '';

  // Get the first day of the month and total days in the month
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Add empty cells for days of the previous month
  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyCell = document.createElement('div');
    calendarDatesElement.appendChild(emptyCell);
  }

  // Populate days of the current month
  const today = new Date();
  for (let day = 1; day <= daysInMonth; day++) {
    const dateElement = document.createElement('div');
    dateElement.className = `
      p-4 bg-gray-100 text-gray-800 rounded-lg hover:bg-purple-100
      transition relative
    `;

    // Highlight today's date
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dateElement.classList.add('bg-purple-600', 'text-white', 'font-bold');
    }

    // Display the day
    dateElement.textContent = day;

    // Add event dots
    const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(
      day
    ).padStart(2, '0')}`;
    if (events[dateKey]) {
      const eventDotsContainer = document.createElement('div');
      eventDotsContainer.className = 'event-dots';
      for (let i = 0; i < events[dateKey]; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        eventDotsContainer.appendChild(dot);
      }
      dateElement.appendChild(eventDotsContainer);
    }

    calendarDatesElement.appendChild(dateElement);
  }
}

// Event listeners for navigation
prevMonthButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextMonthButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

// Initial render
renderCalendar(currentDate);
})


  // number
document.addEventListener("DOMContentLoaded", function() {

  const selectElement = document.getElementById('countryandcode');
    const countryCodeSpan = document.getElementById('country-code');

    function updateCountryCode() {
        const selectedValue = selectElement.value;
        countryCodeSpan.textContent = selectedValue; 
    }
    updateCountryCode();
    selectElement.addEventListener('change', updateCountryCode);

    })

  // navbar color on scroll

  const linkColors = document.querySelectorAll('.cool')
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navIcon = document.querySelector('#navicon')
  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) { 
      navBar.classList.add('bg-primary10'); 
      navBar.classList.remove('md:bg-transparent');
      hamburgerMenu.style.setProperty('--hamburger-color', 'white');
      // link text color
      Array.from(linkColors).forEach(link =>{
        link.classList.add('md:text-wht')
        link.classList.remove('md:text-primary30')
      })
      // nav image
      navIcon.src='./icon/emezak_logo.png'
    } else {
      navBar.classList.remove('bg-primary10'); 
      navBar.classList.add('md:bg-transparent');  
      hamburgerMenu.style.setProperty('--hamburger-color', '#4495a2');
      // link text color
      Array.from(linkColors).forEach(link =>{
      link.classList.add('md:text-primary30')
      link.classList.remove('md:text-wht')
      })
      // nav image
      navIcon.src='./icon/emezak_logo1.png'
    }
  });

  // hide and show menu
  const menuBar = document.getElementById('menu-bar');
  const hamburgerbar = document.getElementById('showlinks');

  function showsidebar(){
      menuBar.classList.remove('hidden');
      hamburgerbar.classList.add('hidden');
  }
  function hidesidebar(){ 
      menuBar.classList.add('hidden');
      hamburgerbar.classList.remove('hidden');
  } 


// carousel
document.addEventListener("DOMContentLoaded", function() {

  let currentSlide = 0;
  const slideInterval = 3000; // 3 seconds
  
  function autoSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
  
    currentSlide = (currentSlide + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  
  setInterval(autoSlide, slideInterval);
  })
  


  document.addEventListener("DOMContentLoaded", function() {
  // typewriter effect
  const textElement = document.getElementById("typewriter");
  const text = textElement.textContent;
  textElement.textContent = ""; // Clear the text initially
  Array.from(text).forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      textElement.appendChild(span);
      span.style.animationDelay = `${index * 0.09}s`; // Adjust timing here for speed
  });
});

  // footer
  const pageFooter = document.getElementById('footer');
  if (pageFooter) {
      let ft = `<p>&copy; Emezak Educational Consulting</p>`;
      pageFooter.innerHTML = ft;
  } else {
      console.error("Element with ID 'footer' not found.");
  }

  document.addEventListener("DOMContentLoaded", function() {
  // packages data setup
  const packages = [
    {
      title: "Basic Package",
      description: "Application review only",
      duration: "5hrs",
      items: [
        {
          title: "Review self-prepared application before it is submitted",
          duration: "2.5 hrs",
          itemlist: [
            "Guidance on selecting “reach,” “match,” and “safety” schools.",
            "Development of a tailored application timeline and checklist to track deadlines."
          ]
        },
        {
          title: "Review Visa Application before it is submitted",
          duration: "2.5 hrs",
          itemlist: [
            "Guidance on selecting “reach,” “match,” and “safety” schools.",
            "Development of a tailored application timeline and checklist to track deadlines."
          ]
        }
      ],
      img: "/img/Picture1copy1.jpg",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#7eda95" class="mr-2">
      <path d="M12 2L2 7h3v8h8V7h3L12 2zm-2 12H6v2h4v-2zm8-4h-6v2h6v-2z"/>
      </svg>`
    },
    {
      title: "Standard Package",
      description: "Full application support, including essay guidance, Test Prep, college selection and visa assistance.",
      duration: "12-18 Months",
      items: [
          {
              title: "College Selection and Application Strategy",
              duration: "2 weeks",
              itemlist: [
                  "Guidance on selecting “reach,” “match,” and “safety” schools.",
                  "Development of a tailored application timeline and checklist to track deadlines."
              ]
          },
          {
              title: "Personal Statement and Essay Support",
              duration: "1 month",
              itemlist: [
                  "Brainstorming sessions to craft compelling personal statements.",
                  "Professional editing and feedback on essays."
              ]
          },
          {
              title: "Standardized Test Preparation",
              duration: "3 months",
              itemlist: [
                  "Guidance on which tests to take (SAT, ACT, GRE, etc.).",
                  "Access to test prep resources and strategies for improving scores."
              ]
          },
          {
              title: "Resume and Recommendation Letter Assistance",
              duration: "2 weeks",
              itemlist: [
                  "Support in building a strong resume that highlights achievements, extracurricular activities, and leadership roles.",
                  "Assistance with selecting appropriate recommenders (teachers, employers, etc.).",
                  "Guidance on how to request effective recommendation letters."
              ]
          },
          {
              title: "Financial Aid and Scholarship Guidance",
              duration: "1 month",
              itemlist: [
                  "Help with completing financial aid applications.",
                  "Identification of scholarships and grants based on academic and personal profile.",
                  "Assistance with drafting scholarship application essays."
              ]
          },
          {
              title: "Visa Application and Immigration Support",
              duration: "5 months",
              itemlist: [
                  "Step-by-step guidance on the F-1 student visa application process.",
                  "SEVIS registration assistance and fee payment guidance.",
                  "Preparation for visa interviews with mock interview sessions and tips."
              ]
          },
          {
              title: "Workshops and Webinars",
              duration: "1 week (Optional)",
              itemlist: [
                  "Access to exclusive workshops on essay writing, financial aid, and interview skills.",
                  "Invitations to webinars with guest speakers (e.g., alumni or admissions officers)."
              ]
          },
          {
              title: "Post-Admission Support",
              duration: "3 months",
              itemlist: [
                  "Guidance on accepting admission offers and communicating with universities.",
                  "Assistance with housing and course registration (if needed).",
                  "Overview of U.S. campus life and cultural adjustment tips."
              ]
          }
      ],
      img: "/img/Picture1copy1.jpg",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#7eda95" class="mr-2">
              <path d="M12 2L2 7h3v8h8V7h3L12 2zm-2 12H6v2h4v-2zm8-4h-6v2h6v-2z"/>
            </svg>`
  },
  {
    title: "Premium Package",
    description: "Standard Package plus STEM training (Analytics, Web Development, Coding, etc.)",
    price: "$7500",
    duration: "12-18 Months",
    items: [
      {
        title: "Standard Package",
        duration: "12-18 months",
        itemlist: []
      },
      {
        title: "STEM Basic Training",
        duration: "6 weeks",
        itemlist: [
          "Data Science - Data Analytics",
          "Coding / AI / ML",
          "Cybersecurity",
          "Web and Mobile Development"
        ]
      }
    ],
    img: "/img/Picture1copy1.jpg",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#7eda95" class="mr-2">
    <path d="M12 2L2 7h3v8h8V7h3L12 2zm-2 12H6v2h4v-2zm8-4h-6v2h6v-2z"/>
    </svg>`
  }  
  ];
  packages.forEach((package) => {
  const packagesBox = document.getElementById('package-container');
    const packlists = package.items.map((listItem) => {
      const listinlist = listItem.itemlist.map((listin) => `<li>${listin}</li>`).join("");
      return `<li class="mb-4">${listItem.title} <strong>${listItem.duration}</strong>
                <ul class="list-disc list-inside mb-4 ml-6">${listinlist}</ul>
              </li>`;
    }).join("");
      
      // max-w-md <div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div> bg-[url('${package.img}')]
    let packagecard = `<div class="relative bg-cover bg-center  py-10 my-[50px]">
      <div class="lg:w-[50%] mx-auto bg-white rounded-lg shadow-xl p-6 relative md:transition-transform md:duration-500 md:ease-[cubic-bezier(0.25, 1, 0.5, 1)] md:transform md:hover:scale-110">
        <div class="border-b-4 border-primary20 bg-gradient-to-r from-primary10 to-primary20 p-6 text-center mb-4 rounded-t-lg">
          <h1 class="text-2xl font-extrabold text-white mb-2">${package.title}</h1>
          <p class="text-white text-lg">${package.description}</p>
        </div>
        <h2 class="text-xl font-semibold mb-4 text-center">Duration: <strong>${package.duration}</strong></h2>
        <div class="flex justify-center mb-4">${package.svg}
          <p class="text-gray-600 font-semibold">Expert guidance and support</p>
        </div>
        <ol class="list-decimal list-inside mb-4">${packlists}</ol>
      </div>
    </div>`;
    packagesBox.innerHTML += packagecard;
  });
});

  document.addEventListener("DOMContentLoaded", function() {
  // services data setup
  const servicesBox = document.getElementById('services-box');
  const services = [
    {
      title: "Application Strategy and Planning",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-80 360-642l-88 402H80v-80h128l113-520h79l122 572 78-332h80l72 280h128v80H690l-48-188-82 348h-80Z"/></svg>',
      img: "./img/test.png",
      paragraph: "This service provides a comprehensive plan tailored to each student, helping them navigate the application process effectively.",
      list: [
        "College/University Selection",
        "Essay and Personal Statement Review","Scholarships and Financial Aid Support","Interview Preparation"
      ]
    },
    {
      title: "Visa Application",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-80v-100l120-84v-144L80-280v-120l320-224v-176q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800v176l320 224v120L560-408v144l120 84v100l-200-60-200 60Z"/></svg>',
      img: "./img/visa.png",
      paragraph: "Assistance with the visa application process to ensure smooth documentation and interview preparation.",
      list: [
        "Visa application completion.",
        "Validation of documentation.",
        "Mockup Visa interview preparation."
      ]
    },
    {
      title: "Basic Practical STEM Training",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M206-206q-41-48-63.5-107.5T120-440q0-150 105-255t255-105h8l-64-64 56-56 160 160-160 160-57-57 63-63h-6q-116 0-198 82t-82 198q0 51 16.5 96t46.5 81l-57 57Zm234-14q0-23-15.5-45.5t-34.5-47q-19-24.5-34.5-51T340-420q0-58 41-99t99-41q58 0 99 41t41 99q0 30-15.5 56.5t-34.5 51q-19 24.5-34.5 47T520-220h-80Zm0 100v-60h80v60h-80Zm314-86-57-57q30-36 46.5-81t16.5-96q0-66-27.5-122.5T657-657l57-57q58 50 92 120.5T840-440q0 67-22.5 126.5T754-206Z"/></svg>',
      img: "./img/trainning.jpg",
      paragraph: "Gain hands-on experience in essential STEM fields like data science, coding, AI, and cybersecurity.",
      list: ["Data Science - Data Analytics", "Coding /AI/ML", "Cybersecurity", "Web and Mobile Development"]
    },
    {
      title: "Seminar/Workshops & Conferences",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M500-780q0 33-23.5 56.5T420-700q-13 0-24-3.5T374-715q-24 8-38.5 29T321-640h519l-40 280H604v-80h127q5-30 8.5-60t8.5-60H212q5 30 8.5 60t8.5 60h127v80H160l-40-280h120q0-49 27-89t73-59q3-31 26-51.5t54-20.5q33 0 56.5 23.5T500-780ZM391-200h178l23-240H368l23 240Zm-71 80-30-312q-4-35 20-61.5t59-26.5h222q35 0 59 26.5t20 61.5l-30 312H320Z"/></svg>',
      img: "./img/conf.png",
      paragraph: "Participate in engaging seminars and workshops led by industry experts to expand your knowledge and skills.",
      list: [
        "Have invited guest speakers on pertinent international studies topics.",
        "Practical workshops from industry experts."
      ]
    }
  ];
  
  services.forEach((service) => {
    const lists = service.list.map((listItem) => {
       return `<li class="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.285 6.792l-1.285-1.292-9.028 9.051-4.015-4.029-1.292 1.293 5.307 5.334z"/>
        </svg>
        <span class="text-gray-700">${listItem}</span>
      </li>`;
    }).join("");

    let servicecard = `<div class="relative group">
    <div class="cursor-pointer flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div class="h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img src="${service.img}" alt="${service.title}" class="w-full h-full" />
      </div>
      <div class="p-4">
        <h6 class="mb-2 text-slate-800 text-xl font-semibold">${service.title}</h6>
        <p class="text-slate-600 leading-normal font-light">${service.paragraph}</p>
      </div>
    </div> 
    <div class="absolute top-0 p-6 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block">
      <div class="flex items-center space-x-2">
        <span>${service.svg}</span>
        <h2 class="text-lg font-bold text-gray-800">${service.title}</h2>
      </div>
      <p class="text-sm text-gray-500 mb-4">${service.paragraph}</p>
      <ul class="space-y-3">${lists}</ul>
      <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-6 w-6 bg-wht rotate-45"></div>
    </div>
  </div>`;
    servicesBox.innerHTML += servicecard;
  });
});
// about team
document.addEventListener("DOMContentLoaded", function() {
  const teamBox = document.getElementById('team-box')
  const theTeam = [
    {
      name: "Dr. Oliver Aziator (FPMP)",
      description: "Founder / Head of Operations",
      moredescription: "Dr. Oliver Komi Mawunyo Aziator Founder & Head of Operations, Emezak Educational Consulting Trusted Education Abroad Expert | Visionary Leader | Student Success Strategist",
      img: "./img/drOliver.jpg",
      id: "1"
    },
    {
      name: "Nana Sarpanyin",
      description: "Founder / Head of Consulting",
      moredescription: "Co-Founder & Head of consulting, Emezak Educational Consulting 5+ Years as residential student living director at bradley university.",
      img: "./img/Mr.Nana.png",
      id: "2"
    }
  ]
  //    relative flex flex-col 
  theTeam.forEach(person =>{
    let personBox = `
                  <div class="my-6 bg-white shadow-sm border border-slate-200 rounded-lg  transition-transform duration-500 ease-out transform hover:scale-105">
                    <!-- image -->
                    <div class="h-96 m-2.5 overflow-hidden text-white rounded-md object-bottom">
                      <img src="${person.img}" alt="card-image" class="w-full h-full object-cover"/>
                    </div>
                    <!-- text -->
                    <div class="p-4">
                      <h6 class="mb-2 text-slate-800 font-semibold">
                        <h3><strong>${person.name}</strong></h3>
                        <p>${person.description}</p>
                      </h6>
                      <p class="text-slate-600 leading-normal font-light">${person.moredescription}</p>
                    </div>
                    <!-- link -->
                    <div class="m-4">
                      <a href="about.html" class="text-slate-800 font-semibold text-sm hover:underline flex items-center p-3">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div> 
            `
            teamBox.innerHTML += personBox
  })
});

document.addEventListener("DOMContentLoaded", function() {


                    const theTeamMember = [
                      {
                        name: "Dr. Oliver Komi Mawunyo Aziator (FPMP)",
                      title: "Founder & Head of Operations",
                      organization: "Emezak Educational Consulting",
                      expertise: [
                          "Trusted Education Abroad Expert",
                          "Visionary Leader",
                          "Student Success Strategist"
                      ],
                      about: "As a seasoned education abroad consultant, Dr. Aziator combines technological expertise with leadership acumen to empower students globally. His passion for innovation, youth empowerment, and social impact fuels Emezak Educational Consulting's mission.",
                      professionalHighlights: [
                          "Founder & Head of Operations, Emezak Educational Consulting",
                          "Fellow, Project Management Professional",
                          "Professional Doctorate in Project Management",
                          "Doctor of Theology (DTh)",
                          "13+ years of experience in entrepreneurship and leadership",
                          "Proven track record of skills training and driving global student success"
                      ],
                      contact: {
                          email: "Aziatoro@emezak.com",
                          callToAction1: "Unlock Your Global Education Potential",
                          callToAction2: "Connect with Dr. Aziator for personalized guidance and support:"
                      },
                      img: "./img/drOliver.jpg"
                      },
                      {
                        name: "Mr. Sarpanyin",
                      title: "Founder / Head of Consulting",
                      organization: "Emezak Educational Consulting",
                      expertise: [
                          "broad technical skills",
                          "significant leadership experience in empowering youth",
                      ],
                      about: "Mr. Sarpanyin brings a powerful blend of technical expertise and extensive leadership experience in youth development to Emezak Educational Consulting. Holding both a Bachelor’s and Master’s degree from Bradley University in the United States, Nana is driven by a deep commitment to helping young people realize their study abroad aspirations. His passion for supporting youth in their educational journeys inspired him to co-found Emezak Educational Consulting, where he strives to make overseas education accessible and achievable for Ghanaian students.",
                      professionalHighlights: [
                          "Co-Founder & Head of consulting, Emezak Educational Consulting",
                          "5+ Years as residential student living director at bradley university.",
                          "+13 Year  Corporate america experience as a Life Cycle manager.",
                          "15+ experience in entrepreneurship and leadership",
                      ],
                      contact: {
                          email: "nsarpany@emezak.com",
                          callToAction1: "Unlock Your Global Education Potential",
                          callToAction2: "Connect with Mr. Sarpanyin for personalized guidance and support:"
                      },
                      img: "./img/Mr.Nana.png"
                      },
                    ];
                  
                  
const teamMembers = document.getElementById('team-members');

theTeamMember.forEach(teamMember =>{
const teamMemberHTML = `
    <div class="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg my-8">
        <h1 class="text-primary10 font-bold text-4xl text-center mb-6">${teamMember.name}</h1>
        <div class="flex flex-col md:flex-row items-center bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden">
            <div class="relative p-4 md:w-1/3 w-full">
                <img
                    src="${teamMember.img}"
                    alt="${teamMember.name}"
                    class="h-full w-full rounded-md object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                />
            </div>
            <div class="p-6 text-center md:text-left md:w-3/5">
                <h2 class="text-slate-800 text-2xl font-semibold mb-2">${teamMember.title}, ${teamMember.organization}</h2>
                <p class="text-slate-600 leading-relaxed font-light mb-4 capitalize">
                    ${teamMember.expertise.join(' | ')}
                </p>
            </div>
        </div>
        <div class="mt-6">
            <h3 class="text-2xl font-semibold text-primary10 mb-2">About ${teamMember.name}</h3>
            <p class="text-slate-600 leading-relaxed">
                ${teamMember.about}
            </p>
        </div>
        <div class="mt-6">
            <h3 class="text-2xl font-semibold text-primary10 mb-2">Professional Highlights</h3>
            <ul class="list-disc list-inside text-slate-600 leading-relaxed space-y-2">
                ${teamMember.professionalHighlights.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        <div class="mt-6">
            <h3 class="text-2xl font-semibold text-primary10 mb-2">${teamMember.contact.callToAction1}</h3>
            <p class="text-slate-600 leading-relaxed mb-4">
            ${teamMember.contact.callToAction2}
            </p>
            <p class="text-primary10 font-bold"><a href="mailto:${teamMember.contact.email}">${teamMember.contact.email}</a></p>
        </div>
    </div>
`;
teamMembers.innerHTML += teamMemberHTML;
})
});

// document.addEventListener("DOMContentLoaded", function() {
  let currentStep = 1;

  function nextStep() {
    if (currentStep < 2) {
      document.getElementById(`step${currentStep}`).classList.add('hidden');
      currentStep++;
      document.getElementById(`step${currentStep}`).classList.remove('hidden');
      updateProgressIcons();
    }
  }

  function prevStep() {
    if (currentStep > 1) {
      document.getElementById(`step${currentStep}`).classList.add('hidden');
      currentStep--;
      document.getElementById(`step${currentStep}`).classList.remove('hidden');
      updateProgressIcons();
    }
  }

  function updateProgressIcons() {
    for (let i = 1; i <= 2; i++) {
      const icon = document.getElementById(`step${i}-icon`);
      icon.classList.remove('text-blue-500');
      icon.classList.add(i <= currentStep ? 'text-blue-500' : 'text-gray-400');
    }
  }

  // Initialize icon colors on page load
  updateProgressIcons();




// let currentStep = 1;

    // function showStep(step) {
    //     document.querySelectorAll('.step').forEach((stepDiv, index) => {
    //         stepDiv.classList.toggle('hidden', index + 1 !== step);
    //     });
    // }

    // function nextStep() {
    //     if (currentStep < 3) {
    //         currentStep++;
    //         showStep(currentStep);
    //     }
    // }

    // function prevStep() {
    //     if (currentStep > 1) {
    //         currentStep--;
    //         showStep(currentStep);
    //     }
    // }

    // Initialize by showing the first step
    // showStep(currentStep);


  // });

  function updateFields() {
    document.querySelectorAll('.field-group').forEach(group => group.classList.add('hidden'));
    const selectedLevel = document.getElementById('educationLevel').value;
    if (selectedLevel) {
        document.getElementById(selectedLevel + 'Fields').classList.remove('hidden');
    }
}



