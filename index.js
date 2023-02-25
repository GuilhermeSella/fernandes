var btn = document.getElementById('btn')
function MenuMobile(){
    const nav = document.getElementById('navMobile')
    
    nav.classList.toggle('active')
    fechanav.classList.toggle('active')
    
}
btn.addEventListener('click', MenuMobile)


function fecharMenu(){
    const nav = document.getElementById('navMobile')
    const fechanav = document.getElementById('fechanav')
    nav.classList.toggle('active')
    fechanav.classList.toggle('active')
}