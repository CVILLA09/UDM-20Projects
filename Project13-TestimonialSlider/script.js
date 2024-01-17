const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        image: "https://thispersondoesnotexist.com/",
        testimonial: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas`,    
    },
    {
        name: 'June Cha',
        position: 'Software Engineer',
        image: "https://thispersondoesnotexist.com/",
        testimonial: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.`,
    },
    {
        name: 'Iida Niskanen',
        position: 'Data Entry',
        image: "https://thispersondoesnotexist.com/",
        testimonial: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.`,
    },
    {
        name: 'Renee Sims',
        position: 'Receptionist',
        image: "https://thispersondoesnotexist.com/",
        testimonial: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.`,
    },
    {
        name: 'Jonathan Nunfiez',
        position: 'Graphic Designer',
        image: "https://thispersondoesnotexist.com/",
        testimonial: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.`,
    },
    {
        name: 'Sasha Ho',
        position: 'Accountant',
        image: "https://thispersondoesnotexist.com/",
        testimonial: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.`,
    },
    {
        name: 'Abdullah Hadley',
        position: 'Business Owner',
        image: "https://thispersondoesnotexist.com/",
        testimonial: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.`,
    },
    {
        name: 'Thomas Stock',
        position: 'Product Designer',
        image: "https://thispersondoesnotexist.com/",
        testimonial: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.`,
    },
    {
        name: 'Veeti Seppanen',
        position: 'Director',
        image: "https://thispersondoesnotexist.com/",
        testimonial: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.`,
    },
];

const testimonialContainer = document.getElementById("_testimonial-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex = 0;

function showTestimonial() {

    const testimonial = testimonials[currentIndex];
    testimonialContainer.innerHTML = `
        <img src="${testimonial.image}" />
        <h3>${testimonial.name}</h3>
        <h6>${testimonial.position}</h6>
        <p>${testimonial.testimonial}</p>
    `;
}

function changeTestimonial(direction) {

    currentIndex += direction;
    if(currentIndex < 0) {
        currentIndex = testimonials.length - 1;
    }else if(currentIndex >= testimonials.length) {
        currentIndex = 0;
    }

    showTestimonial();
}

prevButton.addEventListener("click", () => changeTestimonial(-1));
nextButton.addEventListener("click", () => changeTestimonial(1));

showTestimonial();