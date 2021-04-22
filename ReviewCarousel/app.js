const reviews = [
    {
        id: 1,
        name: "Hordak",
        job: "UX Designer",
        img: "images/hordak.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu risus id enim tincidunt pulvinar nec in dolor. Duis velit diam, semper non elit et, dictum laoreet dolor. laoreet, velit non lacinia posuere, quam dolor blandit sapien, vel aliquam felis tortor vitae turpis. "
    },
    {
        id: 2,
        name: "Skeletor",
        job: "Software Developer",
        img: "images/Skeletor.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu risus id enim tincidunt pulvinar nec in dolor. Duis velit diam, semper non elit et, dictum laoreet dolor. laoreet, velit non lacinia posuere, quam dolor blandit sapien, vel aliquam felis tortor vitae turpis. "
    },
    {
        id: 3,
        name: "Evil-Lyn",
        job: "Software Developer",
        img: "images/Evil-Lyn.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu risus id enim tincidunt pulvinar nec in dolor. Duis velit diam, semper non elit et, dictum laoreet dolor. laoreet, velit non lacinia posuere, quam dolor blandit sapien, vel aliquam felis tortor vitae turpis. "
    },
    {
        id: 4,
        name: "Mer-Man",
        job: "Web Developer",
        img: "images/Mer-Man.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu risus id enim tincidunt pulvinar nec in dolor. Duis velit diam, semper non elit et, dictum laoreet dolor. laoreet, velit non lacinia posuere, quam dolor blandit sapien, vel aliquam felis tortor vitae turpis. "
    },
    {
        id: 5,
        name: "Beastman",
        job: "Web Developer",
        img: "images/Beastman.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu risus id enim tincidunt pulvinar nec in dolor. Duis velit diam, semper non elit et, dictum laoreet dolor. laoreet, velit non lacinia posuere, quam dolor blandit sapien, vel aliquam felis tortor vitae turpis. "
    },
]


// Select Items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

// Set starting item
let currentItem = 0;

// load intial item
window.addEventListener('DomContentLoaded', function() {
    showPerson();
}); 

// Show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Show Next Person
nextBtn.addEventListener('click', function() {
    currentItem++
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})
prevBtn.addEventListener('click', function() {
    currentItem--
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

// Show Random Person
randomBtn.addEventListener('click', function() {
    // * reviews.length as that is the range
    currentItem = Math.floor(Math.random() * reviews.length)
    console.log(currentItem);
    showPerson()
})



