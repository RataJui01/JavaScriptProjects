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
