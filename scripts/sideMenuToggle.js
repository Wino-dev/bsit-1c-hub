export function sideMenuToggle () {
  const menu = document.querySelector('.hmb-menu-container');
  const sidemenu = document.querySelector('.sidemenu-container-mobile');
  
  menu.addEventListener('click', () => {
    if (sidemenu.classList.contains('sidemenu-on')) {
    sidemenu.classList.remove('sidemenu-on');
    } else {
    sidemenu.classList.add('sidemenu-on');
    };
  })
}
