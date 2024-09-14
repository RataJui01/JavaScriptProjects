const colorLabel = document.querySelector('span');
const bodyBgColor = document.querySelector('body');
const button = document.querySelector('button');

let bgColorlist = [
    '#43e5a0','#b8fadd',
    '#546fff','#b2c9ff',
    '#fe6e78', '#ffe3e3',
    '#ffa3fa', '#81f495',
    '#ffe64b', '#ef9f48'
];

button.addEventListener('click', () => {
    var randomIndex = [Math.floor(Math.random() * bgColorlist.length)];
    var randomColor = bgColorlist[randomIndex];
    bodyBgColor.style.backgroundColor = `${randomColor}`;
    colorLabel.innerText = `${randomColor}`;
    colorLabel.style.color = `${randomColor}`;
})