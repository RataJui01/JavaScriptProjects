const image = document.querySelector('img');
const name = document.querySelector('.name');
const job = document.querySelector('.job');
const review = document.querySelector('.review');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let profileList = [
    {
        img: "./Assets/ดาวน์โหลด (18).jpg",
        profileName: "Susan Smith",
        profileJob: "Web Developer",
        profileReview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nisi vero delectus, quis harum recusandae totam quas voluptatum explicabo asperiores quo pariatur aliquid veritatis repellendus sunt necessitatibus. Aspernatur, exercitationem harum.",     
    },
    {
        img: "./Assets/𝐈𝐂𝐎𝐍 𝐕𝐈𝐁𝐄𝐒 𝟐𝟎𝟏𝟔     __𝐉𝐎-𝐉𝐀𝐇𝐘𝐔𝐍 =ᴡɪɴᴅʙʀᴇᴀᴋᴇʀ.jpg",
        profileName: "Luca Donci",
        profileJob: "Web Design",
        profileReview: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper est felis nam, sapien euismod malesuada. Ex tempor convallis nunc fusce vitae vulputate. Ante suscipit dictum congue lacinia viverra nullam sed natoque. Parturient malesuada nisl fermentum",
    },
    {
        img: "./Assets/Stoned.jpg",
        profileName: "David Brader",
        profileJob: "Project Manager",
        profileReview: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ante laoreet imperdiet; fames tristique aliquam dolor et. Odio nulla viverra quam aliquam luctus vivamus. Convallis fermentum ante porta pharetra in porttitor. Fringilla condimentum maecenas dapibus",
    },
    {
        img: "./Assets/ดาวน์โหลด (19).jpg",
        profileName: "Peter Patter",
        profileJob: "video Editor",
        profileReview: "Lorem ipsum odor amet, consectetuer adipiscing elit. Montes libero bibendum vitae risus dapibus purus himenaeos. Vestibulum amet ullamcorper; pharetra iaculis auctor aliquam. Quam cras class pellentesque fringilla non nibh, egestas fames facilisis. ",
    }
];

let indexCounter = 0;

document.addEventListener('DOMContentLoaded', () => {
    changeAuthor();
})

function changeAuthor(){
    const item = profileList[indexCounter];
    image.src = item.img;
    name.textContent = item.profileName;
    job.textContent = item.profileJob;
    review.textContent = item.profileReview;
}

nextBtn.addEventListener('click', () => {
    indexCounter++;

    if(indexCounter > profileList.length - 1){
        indexCounter = 0;
    }

    changeAuthor();
})

prevBtn.addEventListener('click', () => {
    indexCounter--;

    if(indexCounter < 0){
        indexCounter = profileList.length - 1;
    }

    changeAuthor();
})

randomBtn.addEventListener('click',() => {
    indexCounter = Math.floor(Math.random() * (profileList.length - 1));
    changeAuthor();
})