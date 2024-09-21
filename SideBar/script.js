const toggleBtn = document.querySelector('.toggle');
const closeBtn = document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

toggleBtn.addEventListener('click',() =>{
    if(window.innerWidth > 700){
        sideBar.classList.toggle('show-sidebar');
        closeBtn.addEventListener('click', () =>{
            sideBar.classList.remove('show-sidebar');
        })
    }
    else if(window.innerWidth <= 700){
        mainContent.classList.add('hide-mainContent');
        sideBar.classList.add('show-sidebar');
        closeBtn.addEventListener('click', () =>{
            sideBar.classList.remove('show-sidebar');
            mainContent.classList.remove('hide-mainContent');
        })
    }
})

window.addEventListener('resize', () => {
    if(window.innerWidth <= 700 && sideBar.classList.contains('show-sidebar')){
        mainContent.classList.add('hide-mainContent');
        closeBtn.addEventListener('click', () => {
            sideBar.classList.remove('show-sidebar');
            mainContent.classList.remove('hide-mainContent');
        })
    }
    if(window.innerWidth > 700){
        mainContent.classList.remove('hide-mainContent');
    }
})






// toggleBtn.addEventListener('click', () =>{
//     if(window.innerWidth > 580){
//         sideBar.classList.toggle('show-sidebar');
//     }
//     else if(window.innerWidth <= 580){
//         mainContent.classList.add('hide-mainContent');
//         if(sideBar.classList.contains('show-sidebar')){
//             mainContent.classList.add('hide-mainContent');
//         }
//     }
// })


// toggleBtn.addEventListener('click', () => {
//     if(sideBar.classList.contains('close-sidebar')){
//         sideBar.classList.remove('close-sidebar');
//         sideBar.classList.toggle('show-sidebar');
//     }
//     else{
//         sideBar.classList.toggle('show-sidebar');
//     }
    
// })

// closeBtn.addEventListener('click', () => {
//     if(sideBar.classList.contains('show-sidebar')){
//         sideBar.classList.remove('show-sidebar');
//         sideBar.classList.toggle('close-sidebar');
//     }
//     else{
//         sideBar.classList.toggle('close-sidebar');
//     }
// })