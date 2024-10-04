const MenuBtn = document.getElementById('menu_btn')


const MenuResponsivStyle = document.querySelector('.menu_responsiv')

MenuBtn.addEventListener('click', () => {
    MenuResponsivStyle.classList.toggle('hide')
})